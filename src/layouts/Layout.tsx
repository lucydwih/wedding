import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Wishes', href: '#wishes' },
];

function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/30 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-[0.24em] uppercase text-white">
            Ceremony
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-200 transition hover:text-wedding-200">
                {item.label}
              </a>
            ))}
            <Link to="/admin" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
              Admin
            </Link>
          </nav>
          <button type="button" className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
