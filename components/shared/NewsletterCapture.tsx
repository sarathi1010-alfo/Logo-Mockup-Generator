import { Mail } from "lucide-react";

export function NewsletterCapture() {
  return (
    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 my-12 text-center max-w-3xl mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-white p-3 rounded-full shadow-sm text-indigo-600">
          <Mail className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        📬 Get notified when we launch new tools
      </h3>
      <p className="text-slate-600 mb-6 max-w-lg mx-auto">
        Join our New Tools Digest. Get 2-3 free tools delivered to your inbox monthly, plus tutorials and guides. No spam, ever.
      </p>

      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="https://formspree.io/f/placeholder" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm text-sm"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
