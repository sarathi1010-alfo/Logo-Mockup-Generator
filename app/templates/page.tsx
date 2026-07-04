import { mockups } from "@/lib/mockups";
import Link from "next/link";
import { ImageIcon, LayoutGrid } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Mockup Templates | MockBrand",
  description: "Browse our library of high-resolution logo mockup templates. From coffee cups to storefronts, find the perfect context for your brand.",
};

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <header className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Mockup Templates
        </h1>
        <p className="text-lg text-slate-600">
          Choose from our collection of professionally photographed templates to showcase your logo in the real world.
        </p>
      </header>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <LayoutGrid className="w-6 h-6 text-indigo-600" />
          All Templates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((mockup) => (
            <Link
              href={`/mockup/${mockup.slug}`}
              key={mockup.slug}
              className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all"
            >
              <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <img
                  src={mockup.layers.background}
                  alt={mockup.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {mockup.layers.overlay && (
                   <img
                    src={mockup.layers.overlay}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {mockup.title}
                </h3>
                <p className="text-sm text-slate-500 capitalize">
                  {mockup.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
