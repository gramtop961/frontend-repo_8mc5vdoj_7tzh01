import { useState } from 'react';
import { Home, Building2, LogIn, UserPlus, Settings } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (
    href,
    label,
    Icon
  ) => (
    <a
      key={label}
      href={href}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-500 shadow-inner" />
            <span className="font-semibold text-slate-800 tracking-tight flex items-center gap-1">
              <Building2 size={18} />
              PropFlow
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('#features', 'Overview', Home)}
            {navItem('/login', 'Log in', LogIn)}
            {navItem('/signup', 'Sign up', UserPlus)}
            {navItem('/settings', 'Settings', Settings)}
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-1">
            <div className="grid gap-1">
              {navItem('#features', 'Overview', Home)}
              {navItem('/login', 'Log in', LogIn)}
              {navItem('/signup', 'Sign up', UserPlus)}
              {navItem('/settings', 'Settings', Settings)}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
