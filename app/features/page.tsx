import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features | MockupForge Logo Mockup Generator',
  description: 'Explore the powerful features of MockupForge, the simplest way to create high-resolution logo mockups instantly.',
};

export default function FeaturesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 prose prose-slate prose-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
        MockupForge Features
      </h1>
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        We built MockupForge to remove the friction from presenting your designs. No software, no complex layers—just instant, high-quality results, which is why we built our one-click mockup system. For a complete walkthrough on presenting your designs effectively, check out our comprehensive <Link href="/blog/realistic-logo-mockup-guide" className="text-indigo-600 hover:text-indigo-800 underline">How to Create Realistic Logo Mockups for Your Brand</Link> guide.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">One-Click Generation</h2>
      <p>
        Upload your logo once and see it applied instantly across our entire library. We use advanced browser-based rendering to handle perspective, lighting, and texture blending automatically.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">High-Resolution Exports</h2>
      <p>
        Download crisp, print-ready mockups in high resolution. Perfect for client presentations, portfolios, and social media showcases.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Smart Auto-Fit & Manual Controls</h2>
      <p>
        Our intelligent Auto-Fit system automatically sizes and places your logo. Need finer control? Manually drag, scale, and rotate your logo within the defined boundaries for the perfect placement.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Dynamic Color Variations</h2>
      <p>
        Many of our templates support dynamic background and material colors. Match the mockup perfectly to your brand&apos;s primary palette with a single click.
      </p>

      <div className="mt-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Try It Out Now
        </Link>
      </div>
    </div>
  );
}
