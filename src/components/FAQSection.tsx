import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-white">FAQ</h2>
      <div className="mt-8 space-y-4">
        {items.map((item, index) => (
          <motion.div key={item.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-slate-300">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
