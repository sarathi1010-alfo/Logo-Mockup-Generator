"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as fabric from "fabric";
import { MockupConfig } from "@/lib/mockups";
import { Download, Upload } from "lucide-react";

interface MockupEditorProps {
  config: MockupConfig;
}

export default function MockupEditor({ config }: MockupEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [logoImage, setLogoImage] = useState<fabric.FabricImage | null>(null);

  // Initialize Canvas
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1000, // Fixed resolution for high quality, scaling via CSS
      height: 1000,
      preserveObjectStacking: true,
      backgroundColor: "#ffffff",
    });

    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, []);

  // Load Mockup Assets
  useEffect(() => {
    if (!canvas) return;

    const loadAssets = async () => {
      canvas.clear();

      // Load Background
      try {
        const bgImg = await fabric.FabricImage.fromURL(config.layers.background);
        bgImg.set({
          originX: "left",
          originY: "top",
          selectable: false,
          evented: false,
        });
        // Scale to fit canvas if needed, assuming 1000x1000 for now
        bgImg.scaleToWidth(1000);
        bgImg.scaleToHeight(1000);

        canvas.add(bgImg);
        canvas.sendObjectToBack(bgImg);

        // Load Overlay if exists
        if (config.layers.overlay) {
          const overlayImg = await fabric.FabricImage.fromURL(config.layers.overlay);
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

        canvas.requestRenderAll();
      } catch (err) {
        console.error("Error loading mockup assets", err);
      }
    };

    loadAssets();
  }, [canvas, config]);

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
        img.scaleX = scale;
        img.scaleY = scale;
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
    </div>
  );
}
