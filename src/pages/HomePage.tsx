import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { Film, HeartHandshake, MessageSquare, Sparkles, MapPin, Camera, Gift, Clock3 } from 'lucide-react';
import SectionCard from '../components/SectionCard';
import GalleryGrid from '../components/GalleryGrid';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import RsvpForm from '../components/RsvpForm';
import WishesSection from '../components/WishesSection';
import AudioPlayer from '../components/AudioPlayer';

const eventDate = '2026-10-15T16:00:00Z';

const heroFeatures = [
  { icon: Sparkles, title: 'Luxury celebration' },
  { icon: HeartHandshake, title: 'Glassmorphism style' },
  { icon: Camera, title: 'Gallery & memories' },
];

const story = [
  { label: 'Met', description: 'Two hearts met and found a beautiful beginning.' },
  { label: 'First Date', description: 'A memorable evening beneath city lights.' },
  { label: 'Engaged', description: 'The moment became forever with a promise.' },
];

const events = [
  { title: 'Ceremony', time: '16:00', location: 'The Lotus Pavilion', icon: Clock3 },
  { title: 'Reception', time: '18:30', location: 'Rose Garden Ballroom', icon: Film },
];

const faq = [
  { question: 'Is there parking available?', answer: 'Yes, valet and guest parking are reserved onsite.' },
  { question: 'Can children attend?', answer: 'Children are welcome with advance notice to the hosts.' },
];

function HomePage() {
  const location = useLocation();
  const guestName = useMemo(() => new URLSearchParams(location.search).get('to')?.trim() || '', [location.search]);
  const countdown = useCountdown(eventDate);

  const heroLabel = guestName ? `Untuk tamu: ${guestName}` : 'Save the Date';
  const heroTitle = guestName
    ? `Selamat datang, ${guestName}`
    : 'Join us to celebrate the wedding of Lucy Dwi Harseno and Windy Astuti.';
  const heroText = guestName
    ? `Kami dengan hormat mengundang ${guestName} untuk hadir merayakan hari bahagia kami.`
    : 'Lucy Dwi Harseno, anak Bapak Suparno dan Ibu Harsih, dan Windy Astuti, anak Bapak Imm Rohimat dan Ibu Mintarsih.';

  return (
    <main>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glass" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm uppercase tracking-[0.32em] text-wedding-200">{heroLabel}</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              {heroText}
            </p>
            <div className="mt-10 grid gap-4 sm:max-w-lg sm:grid-cols-3">
              {heroFeatures.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <feature.icon className="h-6 w-6 text-wedding-200" />
                  <p className="mt-3 text-sm font-medium text-white">{feature.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <SectionCard title="Countdown" icon={Clock3}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['days', 'hours', 'minutes', 'seconds'].map((label) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-center backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">
                    {countdown[label as keyof typeof countdown]}
                  </p>
                  <span className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Bride & Bride" icon={HeartHandshake}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-wedding-200">Bride</p>
                <h3 className="mt-4 text-xl font-semibold text-white">Lucy Dwi Harseno</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Anak Bapak Suparno dan Ibu Harsih.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-wedding-200">Bride</p>
                <h3 className="mt-4 text-xl font-semibold text-white">Windy Astuti</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Anak Bapak Imm Rohimat dan Ibu Mintarsih.</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Our Story</h2>
            <p className="mt-4 max-w-xl text-slate-300">A refined romance shaped by memories, travel, and moments that became forever.</p>
          </div>
          <div className="space-y-4">
            {story.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.24em] text-wedding-200">{item.label}</p>
                <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Event Details</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <SectionCard key={event.title} title={event.title} icon={event.icon}>
              <p className="text-sm text-slate-300">{event.location}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{event.time}</p>
            </SectionCard>
          ))}
        </div>
      </section>

      <section id="map" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionCard title="Location" icon={MapPin}>
          <p className="text-slate-300">The Lotus Pavilion, where fine details and natural beauty unite.</p>
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="aspect-[16/9] rounded-[1.5rem] bg-white/5" />
            <p className="mt-4 text-sm text-slate-400">Google Maps preview unavailable in preview mode.</p>
          </div>
        </SectionCard>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Gallery</h2>
        <p className="mt-3 max-w-2xl text-slate-300">A collection of moments from the journey that led to this celebration.</p>
        <GalleryGrid />
      </section>

      <section id="video" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionCard title="Video" icon={Film}>
            <p className="text-slate-300">A heartfelt invitation in motion, set to elegant music and cinematic reflections.</p>
          </SectionCard>
          <div className="aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Invitation video"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      </section>

      <section id="rsvp" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-6">
            <SectionCard title="RSVP" icon={MessageSquare}>
              <p className="text-slate-300">Reserve your place at the wedding and let us know if you will attend. We look forward to celebrating with you.</p>
            </SectionCard>
            <RsvpForm />
          </div>
          <div className="space-y-6">
            <SectionCard title="Digital Gift" icon={Gift}>
              <p className="text-slate-300">Support our future together with a digital gift. Your kindness means the world to us.</p>
              <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-wedding-200">QRIS</p>
                <div className="mt-5 h-48 rounded-3xl bg-white/10" />
              </div>
            </SectionCard>
            <AudioPlayer />
          </div>
        </div>
      </section>

      <WishesSection />
      <FAQSection items={faq} />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HomePage;
