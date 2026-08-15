import { getMockupBySlug, mockups } from "@/lib/mockups";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ClientEditorWrapper from "@/components/editor/ClientEditorWrapper";

export async function generateStaticParams() {
  return mockups.map((mockup) => ({
    slug: mockup.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mockup = getMockupBySlug(slug);

  if (!mockup) {
    return { title: "Not Found" };
  }

  return {
    title: `${mockup.seo.title} | MockupForge`,
    description: mockup.seo.description,
  };
}

export default async function MockupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mockup = getMockupBySlug(slug);

  if (!mockup) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <ClientEditorWrapper config={mockup} />
      </div>

      {/* SEO Content Section */}
      <div className="max-w-4xl mx-auto mt-16 prose prose-slate">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">About this {mockup.title}</h2>
        <p className="text-slate-600">
          {mockup.seo.description} Use this high-resolution generator to test how your brand looks in the real world.
          Upload your logo, adjust the size and placement, and download the final preview instantly in your browser.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {mockup.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full capitalize">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
