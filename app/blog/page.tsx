import { blogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | MockBrand Logo Mockup Generator',
  description: 'Read the latest guides, tutorials, and tips on logo mockups, branding presentations, and design workflows.',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          MockBrand Blog & Resources
        </h1>
        <p className="text-xl text-slate-600">
          Everything you need to know about logo mockups, client presentations, and building professional brand identities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all">
            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm text-indigo-600 font-semibold mb-2 uppercase tracking-wide">
                {post.category}
              </div>
              <Link href={`/blog/${post.slug}`} className="block mt-2">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-slate-600 mb-6 flex-1">
                {post.description}
              </p>
              <div className="flex items-center text-sm text-slate-500 mt-auto">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}