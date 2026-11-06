import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight sm:text-7xl">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
        Mockup Template or Page Not Found
      </h2>
      <p className="mt-3 text-base text-slate-600 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved. Explore our logo mockup generator or choose a template from the home page.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/templates"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Browse Templates
        </Link>
      </div>
    </div>
  );
}
