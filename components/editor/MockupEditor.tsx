"use client";

import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { MockupConfig } from "@/lib/mockups";
import { Download, Upload, Maximize } from "lucide-react";

interface MockupEditorProps {
  config: MockupConfig;
}

export default function MockupEditor({ config }: MockupEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [logoImage, setLogoImage] = useState<fabric.FabricImage | null>(null);

  const [, setGuideLines] = useState<fabric.Line[]>([]);
  const [activeVariation, setActiveVariation] = useState<string>("default");

  // Initialize Canvas
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1000, // Fixed resolution for high quality, scaling via CSS
      height: 1000,
      preserveObjectStacking: true,
      backgroundColor: "#ffffff",
    });

    // Snapping logic
    initCanvas.on("object:moving", (e) => {
      const obj = e.target;
      if (!obj) return;

      const snapThreshold = 15;
      const targetX = config.transform.left;
      const targetY = config.transform.top;

      // Clear old guides
      const newGuides: fabric.Line[] = [];
      initCanvas.getObjects("line").forEach(l => initCanvas.remove(l));

      if (Math.abs(obj.left! - targetX) < snapThreshold) {
        obj.set({ left: targetX });
        const vLine = new fabric.Line([targetX, 0, targetX, 1000], {
          stroke: "#4f46e5",
          strokeWidth: 1,
          selectable: false,
          evented: false,
          strokeDashArray: [5, 5],
        });
        initCanvas.add(vLine);
        newGuides.push(vLine);
      }

      if (Math.abs(obj.top! - targetY) < snapThreshold) {
        obj.set({ top: targetY });
        const hLine = new fabric.Line([0, targetY, 1000, targetY], {
          stroke: "#4f46e5",
          strokeWidth: 1,
          selectable: false,
          evented: false,
          strokeDashArray: [5, 5],
        });
        initCanvas.add(hLine);
        newGuides.push(hLine);
      }

      setGuideLines(newGuides);
    });

    initCanvas.on("object:scaling", (e) => {
      const obj = e.target;
      if (!obj || !obj.scaleX || !obj.width) return;

      const currentWidth = obj.width * obj.scaleX;
      const targetWidth = config.transform.width;

      const ratios = [0.25, 0.5, 0.75, 1];
      const snapThreshold = 0.05; // 5% threshold

      for (const ratio of ratios) {
        const snapWidth = targetWidth * ratio;
        if (Math.abs(currentWidth - snapWidth) / targetWidth < snapThreshold) {
          const newScale = snapWidth / obj.width;
          obj.set({ scaleX: newScale, scaleY: newScale });
          break;
        }
      }
    });

    initCanvas.on("mouse:up", () => {
      // Clear guides on mouse up
      initCanvas.getObjects("line").forEach(l => initCanvas.remove(l));
      setGuideLines([]);
      initCanvas.requestRenderAll();
    });

    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, [config]);

  // Load Mockup Assets
  useEffect(() => {
    if (!canvas) return;

    const loadAssets = async () => {
      canvas.clear();

      // Load Background
      try {
        // Find variation overrides
        const variation = config.variations?.find(v => v.id === activeVariation);

        const bgUrl = variation?.background || config.layers.background;

        const bgImg = await fabric.FabricImage.fromURL(bgUrl);
        bgImg.set({
          originX: "left",
          originY: "top",
          selectable: false,
          evented: false,
        });
        // Scale to fit canvas if needed, assuming 1000x1000 for now
        bgImg.scaleToWidth(1000);
        bgImg.scaleToHeight(1000);

        // Apply variation color if provided and no explicit bg override
        if (variation && variation.color && !variation.background) {
           const filter = new fabric.filters.BlendColor({
            color: variation.color,
            mode: "multiply",
            alpha: 0.8
          });
          bgImg.filters = [filter];
          bgImg.applyFilters();
        }

        canvas.add(bgImg);
        canvas.sendObjectToBack(bgImg);

        // Load Overlay if exists
        const overlayUrl = variation?.overlay || config.layers.overlay;
        if (overlayUrl) {
          const overlayImg = await fabric.FabricImage.fromURL(overlayUrl);
          overlayImg.set({
            originX: "left",
            originY: "top",
            selectable: false,
            evented: false,
            // Basic blending might need custom filters, using opacity/multiply for basic support
            globalCompositeOperation: config.recommendedBlend || "source-over",
            opacity: 0.9,
          });
          overlayImg.scaleToWidth(1000);
          overlayImg.scaleToHeight(1000);

          canvas.add(overlayImg);
          // Keep overlay on top, but below controls
          canvas.bringObjectToFront(overlayImg);
        }

        // Restore logo if we had one
        if (logoImage) {
          canvas.add(logoImage);
          // Bring to proper index (between bg and overlay)
          const objects = canvas.getObjects();
          const overlay = objects.find(obj => obj.selectable === false && obj !== objects[0] && obj !== logoImage);
          if (overlay) {
            canvas.bringObjectToFront(overlay);
          }
        }

        canvas.requestRenderAll();
      } catch (err) {
        console.error("Error loading mockup assets", err);
      }
    };

    loadAssets();
  }, [canvas, config, activeVariation, logoImage]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = async (f) => {
      const data = f.target?.result as string;

      const img = await fabric.FabricImage.fromURL(data);

      // Apply configured transform
      img.set({
        left: config.transform.left,
        top: config.transform.top,
        angle: config.transform.angle || 0,
        originX: "center",
        originY: "center",
        cornerColor: "#000",
        cornerStrokeColor: "#fff",
        transparentCorners: false,
        cornerSize: 12,
        padding: 10,
      });

      // Scale logo to fit the recommended area width/height
      if (img.width && img.height) {
        const scaleX = config.transform.width / img.width;
        const scaleY = config.transform.height / img.height;
        const scale = Math.min(scaleX, scaleY);
        img.set({
          scaleX: scale,
          scaleY: scale,
        });
      }

      if (logoImage) {
        canvas.remove(logoImage);
      }

      canvas.add(img);
      setLogoImage(img);

      // Reorder: Background -> Logo -> Overlay
      const objects = canvas.getObjects();

      // Assuming objects[0] is bg, objects[objects.length-1] is overlay (if exists)
      const overlay = objects.find(obj => obj.selectable === false && obj !== objects[0]);
      if (overlay) {
        canvas.bringObjectToFront(overlay);
      }

      canvas.setActiveObject(img);
      canvas.requestRenderAll();
    };
    reader.readAsDataURL(file);
  };

  const handleAutoFit = () => {
    if (!canvas || !logoImage) return;

    // Reset rotation and apply transform defaults
    logoImage.set({
      left: config.transform.left,
      top: config.transform.top,
      angle: config.transform.angle || 0,
    });

    // Scale to fit
    if (logoImage.width && logoImage.height) {
      const scaleX = config.transform.width / logoImage.width;
      const scaleY = config.transform.height / logoImage.height;
      const scale = Math.min(scaleX, scaleY);
      logoImage.set({
        scaleX: scale,
        scaleY: scale,
      });
    }

    canvas.requestRenderAll();
  };

  const handleExport = () => {
    if (!canvas) return;

    // Deselect before export
    canvas.discardActiveObject();
    canvas.requestRenderAll();

    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
      multiplier: 1, // Export at 1000x1000
    });

    const link = document.createElement("a");
    link.download = `${config.slug}-mockup.png`;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{config.title}</h2>
          <p className="text-sm text-slate-500">Upload your logo to preview.</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAutoFit}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
          >
            <Maximize className="w-4 h-4" />
            Auto-Fit
          </button>
          <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors">
            <Upload className="w-4 h-4" />
            Upload Logo
            <input
              type="file"
              accept="image/png, image/jpeg, image/svg+xml"
              className="hidden"
              onChange={handleUpload}
            />
          </label>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full aspect-square bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative flex items-center justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
            <div className="w-full max-w-[800px] aspect-square relative" style={{ pointerEvents: 'auto' }}>
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        Drag, scale, and rotate your logo to fit perfectly.
      </p>

      {config.variations && config.variations.length > 0 && (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Variations</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {config.variations.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariation(v.id)}
                className={`flex flex-col items-center gap-2 p-2 rounded-lg border-2 transition-all min-w-[80px] ${
                  activeVariation === v.id
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-transparent hover:bg-slate-50"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-full border shadow-sm"
                  style={{ backgroundColor: v.color }}
                />
                <span className="text-xs font-medium text-slate-700">{v.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
