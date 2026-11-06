import { getProgrammaticPage, programmaticPages } from '@/lib/programmatic-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return programmaticPages
    .filter(page => page.type === 'industry')
    .map(page => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getProgrammaticPage(slug, 'industry');

  if (!page) {
    return { title: 'Not Found' };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mockbrand.alfo.online';

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${baseUrl}/industries/${page.slug}`,
    }
  };
}

export default async function IndustryCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getProgrammaticPage(slug, 'industry');

  if (!page) {
    notFound();
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="mb-10 border-b border-slate-200 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {page.h1}
          </h1>
          <p className="text-xl text-slate-600">
            {page.description}
          </p>
        </header>

        <div className="prose prose-lg prose-slate max-w-none mb-16" dangerouslySetInnerHTML={{ __html: page.content }} />

        <div className="mt-16 bg-slate-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {page.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Create Your Mockup Now
          </Link>
        </div>
      </div>
    </>
  );
}
