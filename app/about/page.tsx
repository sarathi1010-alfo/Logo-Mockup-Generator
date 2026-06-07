import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MockupForge",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <div className="prose prose-slate">
        <p className="text-lg text-slate-600 mb-6">
          We build tools to make your life easier. This tool is part of a larger ecosystem designed to help you create, build, and optimize your digital presence.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Who Built This</h2>
        <p>
          Built by the team at alfo.online. We&apos;re passionate about creating simple, effective, and free tools for everyone.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">What It Does</h2>
        <p>
          MockupForge lets you turn any logo into premium real-world mockups in seconds. No complex software required—just upload your image and get professional results instantly.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Why It Exists</h2>
        <p>
          We believe high-quality mockups shouldn&apos;t require expensive software or complex skills. Our goal is to democratize design tools and make professional presentations accessible to all.
        </p>
      </div>
    </div>
  );
}
