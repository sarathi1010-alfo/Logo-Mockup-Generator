import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MockupForge",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-slate-600 mb-8">Last updated: {lastUpdated}</p>

      <div className="prose prose-slate">
        <p>Please read these Terms of Service carefully before using our website and services.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these terms.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. Use of the Service</h2>
        <p>You agree to use our tools responsibly and in compliance with all applicable laws. You are responsible for any content you generate or upload using our tools.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. Disclaimer of Warranties</h2>
        <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Limitation of Liability</h2>
        <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
      </div>
    </div>
  );
}
