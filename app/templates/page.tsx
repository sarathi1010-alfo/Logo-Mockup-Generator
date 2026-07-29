import { mockups, MockupConfig } from "@/lib/mockups";
import Link from "next/link";
import { LayoutGrid, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MockBrand Template Gallery | 50+ Logo Mockup Templates",
  description: "Browse our complete library of high-quality, realistic logo mockup templates. From coffee cups to t-shirts, find the perfect scene for your brand.",
};

const CATEGORIES = [
  { id: "product", name: "Product Mockups" },
  { id: "apparel", name: "Apparel" },
  { id: "signage", name: "Signage" },
  { id: "packaging", name: "Packaging" },
  { id: "digital", name: "Digital" },
];

export default function TemplatesPage() {
  const getMockupsByCategory = (categoryId: string) => {
    // For now, mapping exact string matching or fallback logic
    // We know 'coffee-cup' is 'packaging' and 'tshirt' is 'apparel' in lib/mockups.ts
    return mockups.filter((m) => m.category.toLowerCase() === categoryId.toLowerCase());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            MockBrand Template Gallery – 50+ Logo Mockup Templates for Every Industry
          </h1>
        </div>
        <div className="text-lg text-slate-600 max-w-4xl space-y-4">
          <p>
            Welcome to the MockBrand Template Gallery, your ultimate destination for professional, high-resolution branding visuals. Whether you're presenting a fresh corporate identity or pitching a new apparel line, our library of over 50 realistic logo mockup templates ensures your designs always leave a lasting impression. Our categorized collection covers everything from tactile product mockups and stylish apparel to bold outdoor signage and sleek digital screens.
          </p>
          <p>
            Stop relying on flat, uninspiring 2D graphics. By contextualizing your work in authentic, real-world environments, you instantly elevate your brand's perceived value and help clients visualize the final product. Ready to see your logo in action? Head over to our <Link href="/generate" className="text-indigo-600 hover:underline font-semibold">online mockup generator</Link> to apply your designs instantly. If you're looking for expert tips on presenting your brand, don't miss our comprehensive guide on <Link href="/blog/realistic-logo-mockup-guide" className="text-indigo-600 hover:underline font-semibold">how to create realistic logo mockups</Link>. Explore the categories below and transform your creative vision today.
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {CATEGORIES.map((category) => {
          const categoryMockups = getMockupsByCategory(category.id);

          return (
            <section key={category.id} id={category.id}>
              <div className="flex items-baseline justify-between mb-6 border-b border-slate-200 pb-2">
                <h2 className="text-2xl font-bold text-slate-900">
                  {category.name}
                </h2>
                {category.id === 'packaging' && (
                  <Link href="/mockups/coffee-cup-logo-mockup" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                    View Coffee Cup Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {category.id === 'apparel' && (
                  <Link href="/mockups/t-shirt-logo-mockup" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                    View T-Shirt Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {categoryMockups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryMockups.map((mockup) => (
                    <MockupCard key={mockup.slug} mockup={mockup} />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-500 italic">
                  New {category.name.toLowerCase()} templates are being added to our generator this week. Check back soon!
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

function MockupCard({ mockup }: { mockup: MockupConfig }) {
  return (
    <Link
      href={`/mockup/${mockup.slug}`}
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
          <h3 className="font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
            {mockup.title}
          </h3>
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
  );
}
