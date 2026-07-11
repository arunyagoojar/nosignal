import { useState } from 'react';
import { cardData } from './data';
import type { Soundscape } from './data';

export interface AmbientPlayerState {
  current: Soundscape;
  isMuted: boolean;
  currentIndex: number;
}

export function useAmbientPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const setCurrent = (index: number) => {
    setCurrentIndex(index);
    // Unmute when a new track is explicitly selected
    setIsMuted(false);
  };

  const toggleMute = () => setIsMuted(m => !m);

  return {
    current: cardData[currentIndex],
    isMuted,
    currentIndex,
    setCurrent,
    toggleMute,
  };
}
