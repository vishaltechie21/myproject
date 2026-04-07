import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-700 font-semibold">
          404 Error
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="text-slate-600">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="px-5 py-3 rounded-xl border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
