import Link from "next/link";
import { LayoutTemplate } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Logo & Branding */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 text-white p-2 rounded-lg">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                MockupForge
              </span>
            </Link>
            <p className="text-sm text-slate-500 mb-4">
              Turn any logo into premium real-world mockups in seconds.
            </p>
          </div>

          {/* Tools Hub */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Tools Hub</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="https://resumeforge.alfo.online" className="hover:text-indigo-600">Resume Forge</a></li>
              <li><a href="https://pdfutility.alfo.online" className="hover:text-indigo-600">PDF Utility</a></li>
              <li><a href="https://paletteflow.alfo.online" className="hover:text-indigo-600">Palette Flow</a></li>
              <li><a href="https://brandforge.alfo.online" className="hover:text-indigo-600">Brand Forge</a></li>
              <li><a href="https://fontfusion.alfo.online" className="hover:text-indigo-600">Font Fusion</a></li>
              <li><a href="https://hub.alfo.online" className="hover:text-indigo-600 font-medium mt-2 block">View All Tools →</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal & Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/privacy-policy" className="hover:text-indigo-600">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-indigo-600">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600">Contact</Link></li>
              <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="https://twitter.com/alfo_online" className="hover:text-indigo-600">Twitter</a></li>
              <li><a href="https://github.com/alfo-online" className="hover:text-indigo-600">GitHub</a></li>
              <li><a href="https://linkedin.com/company/alfo-online" className="hover:text-indigo-600">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} alfo.online — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
