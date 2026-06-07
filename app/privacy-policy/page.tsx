import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MockupForge",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-slate-600 mb-8">Last updated: {lastUpdated}</p>

      <div className="prose prose-slate">
        <p>This Privacy Policy describes how we collect, use, and handle your information when you use our website and services.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <p>We collect information you provide directly to us when you use our services. For instance, when you submit a form, we may collect your email address.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">3. GDPR and CCPA Compliance</h2>
        <p>We comply with applicable data protection laws including GDPR and CCPA. You have the right to request access to, deletion of, or correction of your personal data.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3">4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </div>
    </div>
  );
}
