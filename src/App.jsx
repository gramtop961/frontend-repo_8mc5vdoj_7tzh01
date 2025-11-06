import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} PropFlow. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/login" className="hover:text-slate-700">Login</a>
          <a href="/signup" className="hover:text-slate-700">Sign up</a>
          <a href="/settings" className="hover:text-slate-700">Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
