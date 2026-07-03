import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Music2 } from 'lucide-react';

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setPlaying(false);
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <Music2 className="h-5 w-5 text-wedding-200" />
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Background Music</p>
          <p className="text-white">Elegant wedding playlist</p>
        </div>
      </div>
      <button type="button" onClick={toggle} className="mt-6 inline-flex items-center gap-3 rounded-full bg-wedding-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-wedding-400">
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {playing ? 'Pause music' : 'Play music'}
      </button>
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2023/04/08/audio_70108a571b.mp3" loop />
    </div>
  );
}

export default AudioPlayer;
