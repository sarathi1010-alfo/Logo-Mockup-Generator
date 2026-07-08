import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About MockupForge | Free Online Logo Mockup Generator',
  description: 'Learn about MockupForge, part of the alfo.online ecosystem. We provide high-quality, free logo mockups instantly in your browser with no software required.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 prose prose-slate prose-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
        About MockupForge
      </h1>
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        MockupForge is a free, instant logo mockup generator designed to help creators, agencies, and business owners visualize their brand in the real world.
        Upload your logo once and instantly preview it across our library of high-resolution, realistic templates—no software required.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Our Mission</h2>
      <p>
        Presenting a logo professionally shouldn&apos;t require expensive software, complex PSD files, or a background in graphic design.
        Our mission is to democratize design presentation by making photorealistic mockups accessible to everyone, instantly.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The alfo.online Ecosystem</h2>
      <p>
        MockupForge is proudly part of the <a href="https://alfo.online" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">alfo.online</a> ecosystem of utility micro-tools.
        Our tools are designed to work seamlessly together to empower your creative workflow:
      </p>
      <ul>
        <li><strong>BrandForge</strong> — Generate and design your core brand identity.</li>
        <li><strong>PaletteFlow</strong> — Discover and manage beautiful color palettes.</li>
        <li><strong>FontFusion</strong> — Pair typography effortlessly for your brand.</li>
        <li><strong>BrandCard</strong> — Create stunning digital business card presentations.</li>
      </ul>

      <div className="mt-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Generate Your First Mockup
        </Link>
      </div>
    </div>
  );
}