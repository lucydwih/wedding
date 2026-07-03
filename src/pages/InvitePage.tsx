import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatGuestName } from '../utils/format';
import { ImageIcon } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid';
import SectionCard from '../components/SectionCard';

function InvitePage() {
  const { guest } = useParams();
  const title = useMemo(() => formatGuestName(guest), [guest]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glass backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.32em] text-wedding-200">A personal invitation</p>
        <h1 className="mt-6 text-4xl font-semibold text-white">{title}</h1>
        <p className="mt-4 text-base leading-8 text-slate-300">We warmly invite you to join us for an elegant evening filled with love, celebration, and memorable moments.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10">Back to invitation</Link>
          <a href="#rsvp" className="rounded-full bg-wedding-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-wedding-400">RSVP Now</a>
        </div>
      </motion.section>
      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <SectionCard title="Gallery" icon={ImageIcon}>
          <GalleryGrid compact />
        </SectionCard>
        <SectionCard title="Venue" icon={ImageIcon}>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-wedding-200">Location</p>
            <p className="mt-3 text-white">The Lotus Pavilion</p>
            <div className="mt-5 h-48 rounded-3xl bg-white/10" />
          </div>
        </SectionCard>
      </section>
    </main>
  );
}

export default InvitePage;
