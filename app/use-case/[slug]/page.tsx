import { seoData } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return seoData.useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = seoData.useCases.find((u) => u.slug === params.slug);
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    keywords: data.keyword,
    alternates: {
        canonical: `https://mockupforge.alfo.online/use-case/${data.slug}`
    }
  };
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const data = seoData.useCases.find((u) => u.slug === params.slug);
  if (!data) notFound();

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h1 className="text-4xl font-bold text-slate-900 mb-6">{data.h1}</h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        {data.intro}
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to try it out?</h2>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
        >
          Open Free Mockup Generator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {data.faq.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
