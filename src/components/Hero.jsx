import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Property management, reimagined
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Manage properties with clarity and speed
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            A modern workspace to onboard owners and tenants, track leases, collect payments, and handle maintenance — all in one place.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="/signup" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-colors">
              Get started free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
              See how it works
            </a>
          </div>

          <ul className="mt-6 text-sm text-slate-500 grid grid-cols-2 gap-2 max-w-md">
            <li>Owner and tenant portals</li>
            <li>Online rent collection</li>
            <li>Maintenance tickets</li>
            <li>Automated reminders</li>
          </ul>
        </div>

        <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>
      </div>
    </section>
  );
}
