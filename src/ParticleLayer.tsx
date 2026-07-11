import React, { useMemo } from 'react';

interface ParticleLayerProps {
  activeId: string;
}

interface Particle {
  id: number;
  x: number;    // % from left
  delay: number; // animation delay in seconds
  duration: number; // animation duration in seconds
  size: number;
  opacity: number;
}

function useParticles(count: number, seed: number): Particle[] {
  return useMemo(() => {
    // Seeded pseudo-random so particles are stable per category
    const rand = (n: number) => {
      const x = Math.sin(n * seed + n) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand(i * 3 + 1) * 100,
      delay: rand(i * 3 + 2) * 12,
      duration: 8 + rand(i * 3 + 3) * 16,
      size: 0.6 + rand(i * 7 + 4) * 0.8,
      opacity: 0.3 + rand(i * 5 + 5) * 0.5,
    }));
  }, [count, seed]);
}

// ─── Realistic Butterflies (fewer, starting from top) ─────────────
const BUTTERFLY_COLORS = [
  { c1: '#222', c2: '#0ea5e9' }, // Blue Morpho
  { c1: '#111', c2: '#f59e0b' }, // Monarch Orange
  { c1: '#222', c2: '#eab308' }, // Yellow Swallowtail
];

function Butterfly({ p }: { p: Particle }) {
  const colors = BUTTERFLY_COLORS[p.id % BUTTERFLY_COLORS.length];
  const scale = p.size * 0.8; // slightly smaller
  const animName = p.id % 2 === 0 ? 'butterfly-wander-1' : 'butterfly-wander-2';

  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${20 + (p.x * 0.6)}%`, // 20% to 80%
        top: `${20 + ((p.delay / 12) * 60)}%`, // 20% to 80%
        width: `${scale * 40}px`,
        height: `${scale * 40}px`,
        animation: `${animName} ${20 + p.duration * 0.5}s ease-in-out infinite`,
        animationDelay: `-${p.delay * 2}s`, // Start at different points in loop
        opacity: p.opacity + 0.3,
        willChange: 'transform',
      }}
    >
      <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-md">
        {/* Antennae */}
        <path d="M 24 15 C 22 10, 18 8, 17 10" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" />
        <path d="M 26 15 C 28 10, 32 8, 33 10" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" />
        
        {/* Left Wing Group */}
        <g className="wing-left-wrap">
          {/* Top Wing */}
          <path d="M 25 20 C 15 10, 2 15, 8 28 C 15 35, 23 30, 25 20" fill={colors.c2} stroke={colors.c1} strokeWidth="1.5" />
          {/* Bottom Wing */}
          <path d="M 25 22 C 18 30, 10 40, 18 42 C 22 43, 24 35, 25 22" fill={colors.c1} stroke="#111" strokeWidth="1" />
        </g>
        
        {/* Right Wing Group */}
        <g className="wing-right-wrap">
          {/* Top Wing */}
          <path d="M 25 20 C 35 10, 48 15, 42 28 C 35 35, 27 30, 25 20" fill={colors.c2} stroke={colors.c1} strokeWidth="1.5" />
          {/* Bottom Wing */}
          <path d="M 25 22 C 32 30, 40 40, 32 42 C 28 43, 26 35, 25 22" fill={colors.c1} stroke="#111" strokeWidth="1" />
        </g>

        {/* Body */}
        <ellipse cx="25" cy="23" rx="1.5" ry="8" fill="#111" />
      </svg>
    </div>
  );
}

// ─── Stars & Shooting Stars (smaller, brighter) ────────────────────
function Star({ p }: { p: Particle }) {
  return (
    <div
      className="absolute particle-twinkle pointer-events-none"
      style={{
        left: `${p.x}%`,
        top: `${(p.delay / 12) * 80}%`, // varied positions everywhere
        animationDelay: `${p.delay}s`,
        animationDuration: `${1.5 + p.size}s`, // slightly faster twinkle
        width: `${p.size * 2.5}px`, // slightly larger than 1.5px so it's visible
        height: `${p.size * 2.5}px`,
        borderRadius: '50%',
        background: `rgba(255,255,255,${p.opacity + 0.3})`,
        boxShadow: `0 0 ${p.size * 6}px 1px rgba(255,255,255,0.9)`, // brighter shine
      }}
    />
  );
}

function ShootingStar({ p }: { p: Particle }) {
  return (
    <div
      className="absolute particle-shoot pointer-events-none overflow-hidden"
      style={{
        top: `${p.x * 0.4}%`,
        left: '-20%',
        animationDelay: `${p.delay * 3}s`,
        animationDuration: `${p.duration * 0.4}s`,
      }}
    >
      <div
        style={{
          width: '90px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)',
          transform: 'rotate(-15deg)',
          opacity: 0.8,
        }}
      />
    </div>
  );
}

// ─── Rain ─────────────────────────────────────────────────────────
function Rain({ p }: { p: Particle }) {
  return (
    <div
      className="absolute particle-rain pointer-events-none"
      style={{
        left: `${p.x}%`,
        top: '-10%',
        animationDelay: `${p.delay * 0.2}s`,
        animationDuration: `${p.duration * 0.15}s`,
        width: '1px',
        height: `${20 + p.size * 20}px`,
        background: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,${p.opacity * 0.6}))`,
      }}
    />
  );
}

// ─── Snow ─────────────────────────────────────────────────────────
function Snow({ p }: { p: Particle }) {
  return (
    <div
      className="absolute particle-snow pointer-events-none"
      style={{
        left: `${p.x}%`,
        top: '-10%',
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration * 0.8}s`,
        width: `${p.size * 4}px`,
        height: `${p.size * 4}px`,
        borderRadius: '50%',
        background: `rgba(255, 255, 255, ${p.opacity + 0.2})`,
        filter: `blur(${p.size * 0.8}px)`,
      }}
    />
  );
}

// ─── Leaves ───────────────────────────────────────────────────────
const AUTUMN_LEAVES = ['#9a3412', '#7f1d1d', '#854d0e', '#c2410c', '#65a30d', '#4d7c0f']; // Desaturated autumn mix
const GREEN_LEAVES = ['#65a30d', '#4d7c0f', '#3f6212', '#84cc16']; // Muted greens

function Leaf({ p, isGreenOnly = false }: { p: Particle, isGreenOnly?: boolean }) {
  const palette = isGreenOnly ? GREEN_LEAVES : AUTUMN_LEAVES;
  const color = palette[p.id % palette.length];
  return (
    <div
      className="absolute particle-leaf pointer-events-none select-none"
      style={{
        left: `${p.x}%`,
        top: '-10%',
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration * 0.9}s`,
        opacity: p.opacity + 0.2,
        color: color,
        fontSize: `${12 + p.size * 12}px`,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 7.05,10.67 9,12C11,13.33 12,14.67 12,16H13.5C13.5,14 16,11 17,8Z" />
      </svg>
    </div>
  );
}

// ─── Clouds ───────────────────────────────────────────────────────
function Cloud({ p }: { p: Particle }) {
  return (
    <div
      className="absolute particle-cloud pointer-events-none select-none"
      style={{
        top: `${(p.delay / 12) * 15}%`, // varied in the top 15%
        animationDelay: `${p.delay * 2}s`,
        animationDuration: `${p.duration * 3}s`,
        opacity: p.opacity * 0.6,
        fontSize: `${40 + p.size * 250}px`, // highly randomized size
        color: 'rgba(255,255,255,0.85)',
        filter: 'blur(10px) drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
      }}
    >
      ☁️
    </div>
  );
}

// ─── Embers / Flames ──────────────────────────────────────────────
function Ember({ p }: { p: Particle }) {
  return (
    <div
      className="absolute top-0 particle-ember pointer-events-none"
      style={{
        left: `${p.x}%`,
        top: '0px',
        animationDelay: `${p.delay}s`,
        animationDuration: `${p.duration * 0.6}s`,
        width: `${p.size * 4}px`,
        height: `${p.size * 4}px`,
        borderRadius: '50%',
        background: `rgba(255, ${80 + p.size * 60}, 20, ${p.opacity})`,
        boxShadow: `0 0 ${p.size * 8}px rgba(255,120,20,0.6)`,
      }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────
export function ParticleLayer({ activeId }: ParticleLayerProps) {
  const butterflies = useParticles(10, 7.3); // 10 butterflies wandering
  const stars = useParticles(65, 11.7);     // Increased count for stars
  const shootingStars = useParticles(5, 5.9);
  const rainDrops = useParticles(150, 2.1);
  const snowFlakes = useParticles(80, 4.4);
  const leaves = useParticles(25, 8.8);
  const clouds = useParticles(5, 1.2);
  const embers = useParticles(40, 9.2);

  // Map soundscape IDs to particle elements
  const renderEffect = () => {
    switch (activeId) {
      case 'bluebell':
        return butterflies.map(p => <Butterfly key={p.id} p={p} />);
      case 'forest':
        return leaves.map(p => <Leaf key={p.id} p={p} isGreenOnly />);
      case 'lakeshore':
      case 'heartlands':
        return leaves.map(p => <Leaf key={p.id} p={p} />);
      case 'foggy':
      case 'blue_lagoon':
      case 'dragonstone':
      case 'skyspace':
        return clouds.map(p => <Cloud key={p.id} p={p} />);
      case 'snow':
      case 'winterfell':
        return snowFlakes.map(p => <Snow key={p.id} p={p} />);
      case 'rdr':
        return rainDrops.map(p => <Rain key={p.id} p={p} />);
      case 'interstellar':
      case 'time':
      case 'cosmicj':
      case 'cosmos':
        return (
          <>
            {stars.map(p => <Star key={p.id} p={p} />)}
            {shootingStars.map(p => <ShootingStar key={p.id} p={p} />)}
          </>
        );
      case 'castamere':
      case 'witcher':
      case 'dune':
        return embers.map(p => <Ember key={p.id} p={p} />);
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      {renderEffect()}
    </div>
  );
}
