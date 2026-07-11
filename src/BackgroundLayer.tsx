import { useState, useEffect } from 'react';

interface BackgroundLayerProps {
  imageSrc: string;
}

export function BackgroundLayer({ imageSrc }: BackgroundLayerProps) {
  // Two slots: active and next. We swap them on imageSrc change.
  const [slots, setSlots] = useState({ a: imageSrc, b: imageSrc });
  const [activeSlot, setActiveSlot] = useState<'a' | 'b'>('a');

  // Aggressively preload the incoming image to ensure instant responsiveness
  useEffect(() => {
    let link = document.querySelector(`link[rel="preload"][href="${imageSrc}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    }
  }, [imageSrc]);

  useEffect(() => {
    // Load the new image into the inactive slot, then swap
    const inactiveSlot = activeSlot === 'a' ? 'b' : 'a';
    setSlots(prev => ({ ...prev, [inactiveSlot]: imageSrc }));

    // Small tick to let the browser render the hidden slot before fading
    const id = setTimeout(() => setActiveSlot(inactiveSlot), 50);
    return () => clearTimeout(id);
  }, [imageSrc]);

  return (
    <div className="fixed inset-0 bg-black">
      {/* Slot A */}
      <img
        src={slots.a}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-[1500ms] ease-in-out"
        style={{ opacity: activeSlot === 'a' ? 1 : 0 }}
      />
      {/* Slot B */}
      <img
        src={slots.b}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-[1500ms] ease-in-out"
        style={{ opacity: activeSlot === 'b' ? 1 : 0 }}
      />
    </div>
  );
}
