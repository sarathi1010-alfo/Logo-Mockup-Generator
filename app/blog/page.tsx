import { seoData } from "@/lib/seo-data";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MockupForge",
  description: "Read our latest articles and tutorials on design presentation, mockups, and branding.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          The MockupForge Blog
        </h1>
        <p className="text-lg text-slate-600">
          Tips, guides, and insights on presenting your design work perfectly.
        </p>
      </div>

      <div className="space-y-12">
        {seoData.blogPosts.map((post) => (
          <article key={post.slug} className="group flex flex-col">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
            </div>
            <p className="text-slate-600 mb-4 max-w-3xl">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-600 font-medium hover:text-indigo-700 w-fit"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
