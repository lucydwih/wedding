function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glass backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-wedding-200">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Get in touch</h2>
            <p className="mt-4 max-w-xl text-slate-300">For questions about the wedding, travel, or RSVP, our team is happy to help.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 text-white">hello@weddingceremony.com</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <p className="mt-2 text-white">+1 234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
