import { Sparkles, ArrowRight } from "lucide-react";

// In reality, this would ideally come from a shared JSON config that auto-updates
const recentTools = [
  { name: "MockupForge", launchDate: "Just Now", url: "https://mockupforge.alfo.online" },
  { name: "Luna Cycle", launchDate: "1 week ago", url: "https://lunacycle.alfo.online" },
  { name: "Pack Fit", launchDate: "2 weeks ago", url: "https://packfit.alfo.online" },
  { name: "EMI Calculator", launchDate: "3 weeks ago", url: "https://emicalc.alfo.online" },
];

export function RecentlyLaunched() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-semibold">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span>🆕 Just Launched Across Our Ecosystem</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm">
          {recentTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              className="flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:underline transition-opacity"
            >
              {tool.name}
              <span className="text-indigo-200 text-xs hidden md:inline">({tool.launchDate})</span>
            </a>
          ))}
          <a href="https://hub.alfo.online" className="ml-2 font-bold flex items-center gap-1 hover:text-yellow-200 transition-colors">
            View Hub <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
