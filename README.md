# Wedding Invitation

A production-ready static online wedding invitation built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Supabase, React Hook Form, Zod, Lucide Icons, and TanStack Query.

## Features

- Opening screen with luxury glassmorphism design
- Live countdown timer
- Bride & Groom section
- Story timeline
- Event details
- Google Maps placeholder
- Gallery and video section
- RSVP form and wishes guest book
- Digital gift section with QR placeholder
- Background music player
- Personalized invitation via URL `/invite/john-doe`
- Admin dashboard with Supabase Auth
- GitHub Pages deployment ready

## Setup

1. Copy `.env.example` to `.env`
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
3. Install dependencies:

```bash
npm install
```

4. Run development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

6. Deploy to GitHub Pages:

```bash
npm run deploy
```

## GitHub Pages

This project uses Vite's `base: './'` setting and GitHub Actions to publish the `dist` folder to the `gh-pages` branch.

## Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Notes

- Admin sign-in uses Supabase Auth.
- Configure Supabase Storage and database tables separately for full gallery and RSVP management.
- The project is static frontend-compatible and deployable directly from GitHub Pages.
