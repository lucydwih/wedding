import { useState } from 'react';

function RsvpForm() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [message, setMessage] = useState('');

  return (
    <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 backdrop-blur-xl">
      <div>
        <label className="block text-sm text-slate-300">Guest Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-wedding-200"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-300">Attending</label>
        <select
          value={attending}
          onChange={(event) => setAttending(event.target.value as 'yes' | 'no')}
          className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-wedding-200"
        >
          <option value="yes">Yes, I will attend</option>
          <option value="no">Sorry, I cannot attend</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-300">Message</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Send your wishes"
          rows={4}
          className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-wedding-200"
        />
      </div>
      <button type="submit" className="w-full rounded-full bg-wedding-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-wedding-400">
        Submit RSVP
      </button>
    </form>
  );
}

export default RsvpForm;
