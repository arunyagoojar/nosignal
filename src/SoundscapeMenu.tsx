import { useEffect, useRef } from 'react';
import { cardData } from './data';

interface SoundscapeMenuProps {
  isOpen: boolean;
  currentIndex: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export function SoundscapeMenu({ isOpen, currentIndex, onSelect, onClose }: SoundscapeMenuProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Reset scroll to top when opened
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      {/* Backdrop glass — fades in */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        onClick={onClose}
      />

      {/* Bottom sheet — slides up */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col"
        style={{
          height: '92vh',
          borderRadius: '24px 24px 0 0',
          // Premium dark translucent glass sheet (visionOS style)
          background: 'rgba(15, 15, 22, 0.45)',
          backdropFilter: 'blur(50px) saturate(140%)',
          WebkitBackdropFilter: 'blur(50px) saturate(140%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: 'none',
          boxShadow: '0 -20px 50px rgba(0, 0, 0, 0.4)',
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* ── Sticky header ── */}
        <div
          className="flex-none flex items-center justify-between px-6 pt-5 pb-4 relative"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          {/* Drag handle */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20" />

          <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-light mt-2">
            Soundscapes
          </p>

          {/* Close — always sticky */}
          <button
            onClick={onClose}
            className="mt-2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all text-sm"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* ── Scrollable grid ── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-5"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/*
            Responsive columns: max 4 columns to keep thumbnails large and readable
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-8">
            {cardData.map((scene, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={scene.id}
                  onClick={() => { onSelect(idx); onClose(); }}
                  className="group relative w-full overflow-hidden focus:outline-none"
                  style={{
                    aspectRatio: '16 / 9',
                    borderRadius: '16px',
                    border: `2px solid ${isActive ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isActive
                      ? '0 0 0 1px rgba(255,255,255,0.4), 0 12px 40px rgba(0,0,0,0.5)'
                      : '0 6px 24px rgba(0,0,0,0.3)',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  {/* Thumbnail — transition targeted to prevent mount/render flicker */}
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="absolute inset-0 w-full h-full object-cover transition-[transform,filter] duration-500 ease group-hover:scale-105 group-hover:blur-md"
                  />

                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-300" />

                  {/* Hover overlay — darkens slightly to boost text contrast when blurred */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Active dot */}
                  {isActive && (
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" />
                  )}

                  {/* Labels — appropriate static font size chosen to fit longest title on one line */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <p className="text-white/80 text-xl md:text-2xl font-serif-slim whitespace-nowrap tracking-wide text-center leading-tight">
                      {scene.title}
                    </p>
                    <p className="text-white/60 text-[10px] md:text-xs whitespace-nowrap mt-1 text-center uppercase tracking-[0.2em] font-light">
                      {scene.zentext}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
