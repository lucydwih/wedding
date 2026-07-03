import { motion } from 'framer-motion';

interface GalleryGridProps {
  compact?: boolean;
}

const palette = [
  'from-fuchsia-500/40 to-purple-700/10',
  'from-cyan-400/30 to-indigo-700/10',
  'from-rose-400/30 to-slate-800/10',
  'from-emerald-300/25 to-slate-900/10',
];

function GalleryGrid({ compact }: GalleryGridProps) {
  return (
    <div className={`mt-8 grid gap-4 ${compact ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'}`}>
      {palette.map((bg, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className={`aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${bg} p-6 shadow-glass`}
        >
          <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="h-full rounded-[1rem] bg-white/10 p-5 text-slate-100">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Memory</p>
              <p className="mt-4 text-lg font-semibold">Moments with love</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default GalleryGrid;
