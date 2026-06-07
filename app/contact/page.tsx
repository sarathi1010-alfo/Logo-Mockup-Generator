import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MockupForge",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-slate-600 mb-8">We&apos;d love to hear from you. Please fill out the form below or reach out via email.</p>

      <form className="space-y-6" action="https://formspree.io/f/placeholder" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email address</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" />
        </div>

        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Send Message
        </button>
      </form>
    </div>
  );
}
