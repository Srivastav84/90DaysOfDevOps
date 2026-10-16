import { useEffect, useRef, useState } from 'react';
import { Music2, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const startOnInteraction = async () => {
      const audio = audioRef.current;
      if (!audio || started) return;
      try {
        await audio.play();
        setStarted(true);
        window.removeEventListener('pointerdown', startOnInteraction);
        window.removeEventListener('keydown', startOnInteraction);
      } catch { /* Browser or missing music file may prevent playback. */ }
    };
    window.addEventListener('pointerdown', startOnInteraction);
    window.addEventListener('keydown', startOnInteraction);
    return () => {
      window.removeEventListener('pointerdown', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
    };
  }, [started]);
  useEffect(() => { if (audioRef.current) audioRef.current.muted = muted; }, [muted]);
  return <div className="music-control">
    <audio ref={audioRef} src="/music.mp3" loop preload="none" />
    <span className="music-label"><Music2 size={15} /> {started ? 'SOUND ON' : 'YOUR SOUNDTRACK'}</span>
    <button className="icon-button" onClick={() => setMuted(v => !v)} aria-label={muted ? 'Unmute music' : 'Mute music'} title={muted ? 'Unmute music' : 'Mute music'}>
      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  </div>;
}
