import Link from "next/link";
import { LayoutTemplate } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 min-h-[44px] min-w-[44px] py-2">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              MockupForge
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/#templates"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3"
            >
              Templates
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
