import { seoData } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return seoData.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = seoData.blogPosts.find((p) => p.slug === params.slug);
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    keywords: data.keyword,
    alternates: {
        canonical: `https://mockupforge.alfo.online/blog/${data.slug}`
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const data = seoData.blogPosts.find((p) => p.slug === params.slug);
  if (!data) notFound();

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "datePublished": data.date,
    "author": {
      "@type": "Organization",
      "name": "MockupForge Team"
    }
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-8 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold text-slate-900 mb-4">{data.h1}</h1>
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Calendar className="w-4 h-4" />
        <time dateTime={data.date}>
          {new Date(data.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </time>
      </div>

      <div className="prose prose-slate prose-lg max-w-none">
        <p className="lead text-xl text-slate-600 mb-8">{data.description}</p>
        <p>{data.content}</p>

        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl not-prose">
          <h3 className="font-semibold text-lg mb-2">Create professional mockups for free</h3>
          <p className="text-slate-600 mb-4 text-sm">Need to present a design? Use our free tool to generate realistic mockups instantly in your browser.</p>
          <Link href="/" className="text-indigo-600 font-medium hover:underline">Try MockupForge →</Link>
        </div>
      </div>
    </article>
  );
}
