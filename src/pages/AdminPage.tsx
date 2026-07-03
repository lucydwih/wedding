import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, ImageIcon, ListChecks, Gift, Settings, UserPlus, BookOpen } from 'lucide-react';
import { useSupabase } from '../contexts/SupabaseContext';

const sections = [
  { path: '', label: 'Dashboard', icon: LayoutDashboard },
  { path: 'guests', label: 'Guests', icon: UserPlus },
  { path: 'gallery', label: 'Gallery', icon: ImageIcon },
  { path: 'rsvp', label: 'List', icon: ListChecks },
  { path: 'guestbook', label: 'Guest Book', icon: BookOpen },
  { path: 'gift', label: 'Gift', icon: Gift },
  { path: 'settings', label: 'Settings', icon: Settings },
];

function AdminPage() {
  const [active, setActive] = useState('Dashboard');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { supabase, session } = useSupabase();

  useEffect(() => {
    if (session) {
      setError(null);
    }
  }, [session]);

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-slate-950/90 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-wedding-200">Admin Panel</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Wedding Dashboard</h1>
            </div>
            {session ? (
              <button onClick={handleSignOut} className="rounded-full bg-wedding-500 px-5 py-3 text-sm font-semibold text-white">
                Sign out
              </button>
            ) : (
              <button className="rounded-full bg-slate-700 px-5 py-3 text-sm font-semibold text-white" disabled>
                Sign in to view
              </button>
            )}
          </div>
          {session ? (
            <div className="grid gap-4 md:grid-cols-3">
              {['Total Visitors', 'Total Guests', 'RSVP Rate'].map((label) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{label === 'RSVP Rate' ? '86%' : '1.2k'}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Sign in</p>
                <p className="mt-3 text-white">Enter your admin credentials to manage the site.</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
            <nav className="space-y-2">
              {sections.map((section) => (
                <NavLink
                  key={section.label}
                  to={section.path}
                  end={section.path === ''}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                      isActive ? 'bg-wedding-500/15 text-white' : 'text-slate-300 hover:bg-white/5'
                    }`
                  }
                  onClick={() => setActive(section.label)}
                >
                  <section.icon className="h-4 w-4" />
                  {section.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-glass backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{active}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Manage your celebration</h2>
              </div>
              <Link to="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">View Site</Link>
            </div>
            {session ? (
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-slate-300">Use the admin menu to update guest details, RSVP statuses, gallery uploads, and event settings through Supabase.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">Recent Guests</p>
                    <p className="mt-4 text-xl font-semibold text-white">Olivia, Mason, Sophia</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">Latest RSVP</p>
                    <p className="mt-4 text-xl font-semibold text-white">Attending</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-slate-300">Please sign in with your Supabase admin credentials to access settings and guest management.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <label className="block text-sm text-slate-400">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-wedding-200"
                    />
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                    <label className="block text-sm text-slate-400">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-wedding-200"
                    />
                  </div>
                </div>
                {error && <p className="text-sm text-rose-400">{error}</p>}
                <button onClick={handleSignIn} disabled={loading} className="rounded-full bg-wedding-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-wedding-400">
                  {loading ? 'Signing in…' : 'Sign In'}
                </button>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
