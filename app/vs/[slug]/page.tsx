import { seoData } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return seoData.comparisons.map((comp) => ({
    slug: comp.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = seoData.comparisons.find((c) => c.slug === params.slug);
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    keywords: data.keyword,
    alternates: {
        canonical: `https://mockupforge.alfo.online/vs/${data.slug}`
    }
  };
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const data = seoData.comparisons.find((c) => c.slug === params.slug);
  if (!data) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-4 text-indigo-600 font-semibold uppercase tracking-wider text-sm">
        Comparison Guide
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-8">{data.h1}</h1>

      <div className="prose prose-slate prose-lg max-w-none mb-12">
        <p>{data.content}</p>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Try MockupForge Free Today</h2>
        <p className="text-slate-600 mb-6">No account required. No credit card. Just free, high-quality mockups instantly.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-sm"
        >
          Generate a Mockup Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
