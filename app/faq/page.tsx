import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | MockupForge',
  description: 'Find answers to common questions about using MockupForge, downloading mockups, and presenting your logo to clients.',
};

const faqs = [
  {
    question: "Is MockupForge really free?",
    answer: "Yes! MockupForge is completely free to use. You can generate and download as many high-resolution logo mockups as you need without any hidden fees."
  },
  {
    question: "Do I need to download any software?",
    answer: "No, MockupForge runs entirely in your browser. You don't need to install Photoshop or any other design software. Just upload your logo and start generating mockups instantly."
  },
  {
    question: "What file formats can I upload?",
    answer: "We support PNG, JPG, and SVG file formats. For best results, we recommend uploading a transparent PNG or an SVG file of your logo."
  },
  {
    question: "Can I use these mockups for commercial projects?",
    answer: "Absolutely. You can use the mockups generated on MockupForge for client presentations, portfolios, social media, and any commercial purposes."
  },
  {
    question: "What is the resolution of the downloaded mockups?",
    answer: "Our mockups are exported in high resolution, suitable for both digital presentations and high-quality print materials."
  }
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to know about using MockupForge.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-indigo-300 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Still have questions?</h2>
          <p className="text-slate-600 mb-8">Try the tool yourself to see how easy it is.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Create a Mockup Now
          </Link>
        </div>
      </div>
    </>
  );
}