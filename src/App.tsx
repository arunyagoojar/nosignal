import { useState, useEffect } from 'react';
import GradualBlur from 'gradualblur';
import { BackgroundLayer } from './BackgroundLayer';
import { ParticleLayer } from './ParticleLayer';
import { SoundscapeMenu } from './SoundscapeMenu';
import { useAmbientPlayer } from './useAmbientPlayer';
import { cardData } from './data';

export default function App() {
  const { current, isMuted, currentIndex, setCurrent, toggleMute } = useAmbientPlayer();
  const [menuOpen, setMenuOpen] = useState(false);
  const [titleVisible, setTitleVisible] = useState(true);

  // Preload all background images to eliminate switch flickering
  useEffect(() => {
    cardData.forEach((scene) => {
      const img = new Image();
      img.src = scene.image;
    });
  }, []);

  // Fade title out and back in on track change
  useEffect(() => {
    setTitleVisible(false);
    const id = setTimeout(() => setTitleVisible(true), 400);
    return () => clearTimeout(id);
  }, [currentIndex]);

  // YouTube iframe audio player (hidden)
  const getYoutubeEmbedUrl = (url: string, muted: boolean) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
    if (!match) return null;
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&loop=1&playlist=${match[1]}&controls=0&mute=${muted ? 1 : 0}`;
  };

  // Embed is always rendered so that sound is running in background
  const embedUrl = getYoutubeEmbedUrl(current.audiofile, isMuted);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">

      {/* ── Layer 0: Dynamic background ── */}
      <BackgroundLayer imageSrc={current.image} />

      {/* ── Layer 1: Ambient particles ── */}
      <ParticleLayer activeId={current.id} />
      {/* ── Layer 2: GradualBlur at bottom 30% ── */}
      <section
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="50vh"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </section>

      {/* ── Layer 3: Bottom UI ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-6 md:pb-16 pointer-events-none">

        {/* Title — fades on change */}
        <div
          className="text-center mb-2 transition-all duration-400"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(8px)' }}
        >
          <h1 className="text-white/80 text-6xl md:text-7xl lg:text-8xl font-serif-slim tracking-wide drop-shadow-lg leading-tight">
            {current.title}
          </h1>
          <p className="text-white/50 text-sm tracking-widest uppercase mt-2 font-light">
            {current.zentext}
          </p>
        </div>

        {/* Action row */}
        <div className="flex items-center gap-5 mt-10 pointer-events-auto">
          {/* Grid / Menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="w-12 h-12 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-md group"
            aria-label="Open soundscape menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="0" y="0" width="6" height="6" rx="1.5" />
              <rect x="10" y="0" width="6" height="6" rx="1.5" />
              <rect x="0" y="10" width="6" height="6" rx="1.5" />
              <rect x="10" y="10" width="6" height="6" rx="1.5" />
            </svg>
          </button>

          {/* Live / Play button (Mute toggle, circle only) */}
          <button
            onClick={toggleMute}
            className="relative w-12 h-12 rounded-full bg-white/8 hover:bg-white/15 border border-white/15 flex items-center justify-center transition-all backdrop-blur-md shadow-xl group"
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {!isMuted && (
              <div className="absolute inset-0 rounded-full animate-ripple pointer-events-none" />
            )}
            <div
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                background: !isMuted ? '#FF3B30' : 'rgba(255,255,255,0.4)',
                boxShadow: !isMuted ? '0 0 10px rgba(255,59,48,1)' : 'none',
              }}
            />
          </button>
        </div>

        {/* nosignal label (moved under the buttons and perfectly centered) */}
        <p className="text-white/40 text-[12px] tracking-[0.85em] pl-[0.85em] uppercase font-light mt-10 text-center">
          nosignal
        </p>
      </div>

      {/* ── Layer 4: visionOS Soundscape Menu ── */}
      <SoundscapeMenu
        isOpen={menuOpen}
        currentIndex={currentIndex}
        onSelect={setCurrent}
        onClose={() => setMenuOpen(false)}
      />

      {/* ── Hidden YouTube audio ── */}
      {embedUrl && (
        <iframe
          key={embedUrl}
          src={embedUrl}
          allow="autoplay"
          className="fixed -bottom-full -left-full w-1 h-1 opacity-0 pointer-events-none"
          title="audio"
        />
      )}
    </div>
  );
}
