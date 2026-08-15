import { blogPosts, getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mockupforge.alfo.online';

  return {
    title: `${post.title} | MockupForge`,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${baseUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mockupforge.alfo.online';

  // Article Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.date,
    url: `${baseUrl}/blog/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'MockupForge',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png` // Placeholder
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="mb-10 border-b border-slate-200 pb-10">
          <div className="text-sm text-indigo-600 font-semibold mb-4 uppercase tracking-wide">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-500">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
        </header>

        <div
          className="prose prose-lg prose-slate prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-10 border-t border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to see your logo in action?</h3>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Try MockupForge For Free
          </Link>
        </div>
      </article>
    </>
  );
}