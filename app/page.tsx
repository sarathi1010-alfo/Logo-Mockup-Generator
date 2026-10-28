import { mockups } from "@/lib/mockups";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, CheckCircle, HelpCircle, Sparkles } from "lucide-react";
import Image from "next/image";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MockupForge Free Logo Mockup Generator",
    "url": "https://mockbrand.alfo.online/",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Generate photorealistic 3D logo mockups on t-shirts, signs, cards, and packaging in seconds with zero watermarks."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mockbrand.alfo.online/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate Photorealistic Logo Mockups",
    "description": "Step-by-step guide to generating photorealistic 3D logo mockups online with MockupForge.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Upload Logo",
        "text": "Drag and drop your PNG or SVG logo file with transparent background."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Choose Template",
        "text": "Select from 3D templates including apparel, signage, stationery, and packaging."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Customize & Preview",
        "text": "Adjust scale, position, lighting angle, and texture blending in real-time."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Export High-Res",
        "text": "Download high-resolution PNG or WebP files ready for client decks and marketing."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is MockupForge free to use without watermarks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MockupForge is 100% free with no watermarks, no registration, and unlimited high-resolution downloads."
        }
      },
      {
        "@type": "Question",
        "name": "What image formats are supported for logo uploads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support PNG, SVG, JPG, and WebP formats. Transparent PNG or SVG files yield the cleanest realistic mockup blending."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use generated mockups for commercial client presentations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all mockups generated on MockupForge include full commercial usage rights for portfolios, client decks, and eCommerce stores."
        }
      },
      {
        "@type": "Question",
        "name": "How does browser-based mockup generation protect my privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mockup generation processes locally using WebGL and HTML5 Canvas in your browser. Your proprietary logo files are never uploaded or stored on external servers."
        }
      },
      {
        "@type": "Question",
        "name": "What mockup categories are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MockupForge provides templates across apparel (t-shirts, hoodies), signage (acrylic, embossed metal), stationery (business cards), and packaging."
        }
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>100% Free Online Mockup Creator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Generate Photorealistic Logo Mockups in Seconds
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
          Transform flat 2D logos into stunning photorealistic 3D mockups across apparel, office signage, stationery, and packaging instantly. MockupForge runs entirely in your browser with zero sign-up, zero watermarks, and high-resolution export. Ideal for graphic designers, agencies, and brand owners seeking client-ready visual presentations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/mockup/${mockups[0].slug}`}
            role="button"
            className="btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px]"
          >
            Generate Your Mockup Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 border border-slate-300 hover:border-slate-400 text-slate-700 font-medium rounded-full text-base transition-colors min-h-[44px]"
          >
            How It Works
          </a>
        </div>
      </section>

      {/* Templates Grid */}
      <section id="templates" className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
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
                <Image
                  src={mockup.layers.background}
                  alt={`${mockup.title} - Free 3D logo mockup template`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {mockup.layers.overlay && (
                  <Image
                    src={mockup.layers.overlay}
                    alt={`${mockup.title} texture blend overlay`}
                    width={600}
                    height={600}
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
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="mb-20 bg-slate-50 rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600">
            Create professional 3D mockups in four simple browser-based steps with zero complex software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
              1
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Upload Logo</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drag and drop your PNG or SVG logo file with transparent background.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
              2
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Choose Template</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Select from 3D templates including apparel, signage, stationery, and packaging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
              3
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Customize & Preview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Adjust scale, position, lighting angle, and texture blending in real-time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-4 text-lg">
              4
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Export High-Res</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Download high-resolution PNG or WebP files ready for client decks and marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20 bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Mockups Made Simple</h2>
          <p className="text-slate-600">
            Why spend hours in Photoshop when you can get better results in seconds? Our AI-powered system handles the complex design work for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              Smart Perspective
            </h3>
            <p className="text-slate-600 text-sm">Automatically wraps your logo around objects for a natural, photorealistic look.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              Lighting & Shadows
            </h3>
            <p className="text-slate-600 text-sm">Integrates your design with the scene&apos;s environmental lighting and ambient shadows.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              High-Res Exports
            </h3>
            <p className="text-slate-600 text-sm">Download your mockups in 4K resolution, perfect for print and high-end presentations.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">New to mockups? Check out our authority guide:</p>
          <Link href="/blog/realistic-logo-mockup-guide" className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-1 min-h-[44px]">
            How to Create Realistic Logo Mockups for Your Brand →
          </Link>
        </div>
      </section>

      {/* Frequently Asked Questions Section (AEO/GEO DOM Accordion) */}
      <section id="faq" className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Common questions about generating free photorealistic logo mockups on MockupForge.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-indigo-200">
            <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center min-h-[44px]">
              <span>Is MockupForge free to use without watermarks?</span>
              <span className="transition group-open:rotate-180 text-indigo-600 ml-4 font-bold text-xl">↓</span>
            </summary>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4">
              Yes, MockupForge is 100% free with no watermarks, no registration, and unlimited high-resolution downloads.
            </p>
          </details>

          <details className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-indigo-200">
            <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center min-h-[44px]">
              <span>What image formats are supported for logo uploads?</span>
              <span className="transition group-open:rotate-180 text-indigo-600 ml-4 font-bold text-xl">↓</span>
            </summary>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4">
              We support PNG, SVG, JPG, and WebP formats. Transparent PNG or SVG files yield the cleanest realistic mockup blending.
            </p>
          </details>

          <details className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-indigo-200">
            <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center min-h-[44px]">
              <span>Can I use generated mockups for commercial client presentations?</span>
              <span className="transition group-open:rotate-180 text-indigo-600 ml-4 font-bold text-xl">↓</span>
            </summary>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4">
              Yes, all mockups generated on MockupForge include full commercial usage rights for portfolios, client decks, and eCommerce stores.
            </p>
          </details>

          <details className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-indigo-200">
            <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center min-h-[44px]">
              <span>How does browser-based mockup generation protect my privacy?</span>
              <span className="transition group-open:rotate-180 text-indigo-600 ml-4 font-bold text-xl">↓</span>
            </summary>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4">
              Mockup generation processes locally using WebGL and HTML5 Canvas in your browser. Your proprietary logo files are never uploaded or stored on external servers.
            </p>
          </details>

          <details className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-indigo-200">
            <summary className="font-semibold text-lg text-slate-900 cursor-pointer list-none flex justify-between items-center min-h-[44px]">
              <span>What mockup categories are available?</span>
              <span className="transition group-open:rotate-180 text-indigo-600 ml-4 font-bold text-xl">↓</span>
            </summary>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4">
              MockupForge provides templates across apparel (t-shirts, hoodies), signage (acrylic, embossed metal), stationery (business cards), and packaging.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
