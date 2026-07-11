import { mockups } from "@/lib/mockups";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mockup Templates Library | MockBrand",
  description: "Browse our complete library of high-quality, realistic logo mockup templates. From coffee cups to t-shirts, find the perfect scene for your brand.",
};

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mockup Templates Library
          </h1>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl">
          Choose from our professional library of realistic templates. Upload your logo once and instantly preview it across any of these high-resolution scenes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockups.map((mockup) => (
          <Link
            href={`/mockup/${mockup.slug}`}
            key={mockup.slug}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-video bg-slate-100 relative overflow-hidden">
              <Image
                src={mockup.layers.background}
                alt={mockup.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {mockup.layers.overlay && (
                <Image
                  src={mockup.layers.overlay}
                  alt=""
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50"
                />
              )}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {mockup.title}
                </h2>
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded uppercase tracking-wider">
                  {mockup.category}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                {mockup.seo.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {mockup.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs text-slate-400">#{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
