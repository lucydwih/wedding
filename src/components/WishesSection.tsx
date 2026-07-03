function WishesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.32em] text-wedding-200">Guest Book</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Wishes</h2>
        <p className="mt-4 text-slate-300">Share a message for the couple and celebrate the next chapter together.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {['Wishing you joy', 'To a lifetime', 'Forever together', 'Celebrate love'].map((wish) => (
            <div key={wish} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
              <p className="font-semibold text-white">{wish}</p>
              <p className="mt-2 text-sm">A heartfelt wish for the day and all the days ahead.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WishesSection;
