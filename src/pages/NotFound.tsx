import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center shadow-glass backdrop-blur-xl">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="mt-4 text-slate-300">Page not found. Return to the wedding invitation.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-wedding-500 px-6 py-3 text-sm font-semibold text-white hover:bg-wedding-400">
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
