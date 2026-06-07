import { ArrowRight, LayoutTemplate, Type, Palette, Image as ImageIcon } from "lucide-react";

const relatedTools = [
  {
    name: "Brand Forge",
    description: "Generate a complete brand kit instantly.",
    url: "https://brandforge.alfo.online",
    icon: LayoutTemplate,
    category: "design",
  },
  {
    name: "Font Fusion",
    description: "Find the perfect Google Font pairings.",
    url: "https://fontfusion.alfo.online",
    icon: Type,
    category: "design",
  },
  {
    name: "Palette Flow",
    description: "Create and export beautiful color palettes.",
    url: "https://paletteflow.alfo.online",
    icon: Palette,
    category: "design",
  },
  {
    name: "Compress Pro",
    description: "Compress images without losing quality.",
    url: "https://compresspro.alfo.online",
    icon: ImageIcon,
    category: "media",
  },
];

export function RelatedTools({ currentCategory = "design" }: { currentCategory?: string }) {
  // Simple tag-based matching: filter by category, or show default fallback if not enough
  const filteredTools = relatedTools.filter(t => t.category === currentCategory || t.category === 'media').slice(0, 4);

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <div key={tool.name} className="flex flex-col bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg">
                  <tool.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{tool.name}</h3>
              </div>
              <p className="text-sm text-slate-500 mb-4 flex-1">
                {tool.description}
              </p>
              <a
                href={tool.url}
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Try {tool.name} <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
