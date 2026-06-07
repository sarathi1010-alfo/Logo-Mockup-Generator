import { Flame } from "lucide-react";

const popularTools = [
  { name: "Resume Forge", url: "https://resumeforge.alfo.online" },
  { name: "PDF Utility", url: "https://pdfutility.alfo.online" },
  { name: "QR Generator", url: "https://qrgen.alfo.online" },
  { name: "Palette Flow", url: "https://paletteflow.alfo.online" },
  { name: "Image Compressor", url: "https://compresspro.alfo.online" },
  { name: "Font Fusion", url: "https://fontfusion.alfo.online" },
];

export function PopularTools() {
  return (
    <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-5 h-5 text-orange-500" />
        <h3 className="font-bold text-slate-900">🔥 Most Used This Month</h3>
      </div>
      <ul className="space-y-3">
        {popularTools.map((tool, index) => (
          <li key={tool.name}>
            <a
              href={tool.url}
              className="flex items-center text-sm text-slate-700 hover:text-indigo-600 font-medium group"
            >
              <span className="text-slate-400 w-5">{index + 1}.</span>
              <span className="group-hover:underline">{tool.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
