import { mockups } from "@/lib/mockups";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Turn any logo into premium real-world mockups in seconds.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8">
          Upload your logo once and instantly preview it across our library of high-resolution, realistic templates. No software required.
        </p>
        <Link
          href={`/mockup/${mockups[0].slug}`}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Generate Your Mockup Free
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Templates Grid */}
      <div id="templates" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-indigo-600" />
          Trending Templates
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

      {/* Features Section */}
      <div className="mb-20 bg-slate-50 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Mockups Made Simple</h2>
          <p className="text-slate-600">
            Why spend hours in Photoshop when you can get better results in seconds? Our AI-powered system handles the complex design work for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg mb-2">Smart Perspective</h3>
            <p className="text-slate-600 text-sm">Automatically wraps your logo around objects for a natural, photorealistic look.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg mb-2">Lighting & Shadows</h3>
            <p className="text-slate-600 text-sm">Integrates your design with the scene&apos;s environmental lighting and ambient shadows.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg mb-2">High-Res Exports</h3>
            <p className="text-slate-600 text-sm">Download your mockups in 4K resolution, perfect for print and high-end presentations.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">New to mockups? Check out our authority guide:</p>
          <Link href="/blog/logo-mockup-guide" className="text-indigo-600 font-semibold hover:underline">
            How to Create Realistic Logo Mockups for Your Brand →
          </Link>
        </div>
      </div>

    </div>
  );
}
