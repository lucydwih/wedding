import { ComponentType } from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  title: string;
  icon?: ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function SectionCard({ title, icon: Icon, children }: SectionCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl transition">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-5 w-5 text-wedding-200" />}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-6 text-slate-300">{children}</div>
    </motion.article>
  );
}

export default SectionCard;
