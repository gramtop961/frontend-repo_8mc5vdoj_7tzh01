export default function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-800 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl font-bold tracking-tight">Own your operations. Grow with confidence.</h3>
            <p className="mt-3 text-white/80 max-w-2xl">
              Start free and upgrade as you scale. No setup fees. Cancel anytime.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/signup" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm hover:bg-slate-100">
                Create your account
              </a>
              <a href="/login" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">
                I already have an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
