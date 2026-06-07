import Link from "next/link";
import { LayoutTemplate, ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Tool Name */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-slate-900 leading-tight">
                  MockupForge
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  POWERED BY ALFO.ONLINE
                </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <div className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900">
                    Related Tools <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                        <a href="https://resumeforge.alfo.online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resume Forge</a>
                        <a href="https://pdfutility.alfo.online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PDF Utility</a>
                        <a href="https://paletteflow.alfo.online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Palette Flow</a>
                        <a href="https://brandforge.alfo.online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Brand Forge</a>
                        <a href="https://fontfusion.alfo.online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Font Fusion</a>
                    </div>
                </div>
            </div>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
