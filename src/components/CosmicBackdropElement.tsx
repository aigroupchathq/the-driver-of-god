import React from 'react';

export type CosmicElementVariant =
  | 'black-hole-singularity'
  | 'nebula-void'
  | 'coordinate-ring'
  | 'hermetic-macrocosm-void'
  | 'dark-matter-web'
  | 'celestial-sextant-black'
  | 'astrolabe-grid';

export type CosmicPosition =
  | 'top-right'
  | 'bottom-left'
  | 'top-left'
  | 'bottom-right'
  | 'center'
  | 'center-right'
  | 'center-left';

interface CosmicBackdropElementProps {
  position?: CosmicPosition;
  variant?: CosmicElementVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'subtle' | 'medium' | 'deep';
  className?: string;
}

export const CosmicBackdropElement: React.FC<CosmicBackdropElementProps> = ({
  position = 'top-right',
  variant = 'coordinate-ring',
  size = 'md',
  intensity = 'deep',
  className = ''
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-0 right-0 -mr-16 sm:-mr-24 -mt-16 sm:-mt-24';
      case 'bottom-left':
        return 'bottom-0 left-0 -ml-16 sm:-ml-24 -mb-16 sm:-mb-24';
      case 'top-left':
        return 'top-0 left-0 -ml-16 sm:-ml-24 -mt-16 sm:-mt-24';
      case 'bottom-right':
        return 'bottom-0 right-0 -mr-16 sm:-mr-24 -mb-16 sm:-mb-24';
      case 'center-right':
        return 'top-1/2 right-0 -translate-y-1/2 -mr-20';
      case 'center-left':
        return 'top-1/2 left-0 -translate-y-1/2 -ml-20';
      case 'center':
      default:
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-64 h-64 sm:w-80 sm:h-80';
      case 'lg':
        return 'w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem]';
      case 'xl':
        return 'w-[32rem] h-[32rem] sm:w-[44rem] sm:h-[44rem]';
      case 'md':
      default:
        return 'w-80 h-80 sm:w-96 sm:h-96';
    }
  };

  const getOpacityClass = () => {
    switch (intensity) {
      case 'subtle':
        return 'opacity-40 hover:opacity-60 transition-opacity duration-700';
      case 'medium':
        return 'opacity-65 hover:opacity-85 transition-opacity duration-700';
      case 'deep':
      default:
        return 'opacity-85 hover:opacity-100 transition-opacity duration-700';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 overflow-hidden ${getPositionClasses()} ${getSizeClasses()} ${getOpacityClass()} ${className}`}
      aria-hidden="true"
    >
      {/* 1. BLACK HOLE SINGULARITY: Deep obsidian gravitational core, warped photon sphere, glowing solar accretion ring */}
      {variant === 'black-hole-singularity' && (
        <div className="relative w-full h-full">
          {/* Volumetric deep black vacuum depression */}
          <div className="absolute inset-0 rounded-full bg-radial from-slate-950 via-slate-900/60 to-transparent blur-2xl scale-95" />
          <div className="absolute inset-[15%] rounded-full bg-slate-950 shadow-[0_0_50px_rgba(2,6,23,0.8)] blur-md" />

          {/* Glowing orange-yellow accretion disc rim */}
          <div className="absolute inset-[22%] rounded-full border border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.35)] animate-pulse" />
          <div className="absolute inset-[30%] rounded-full border border-amber-400/30" />

          {/* Precision Astronomical Coordinate SVG */}
          <svg viewBox="0 0 400 400" className="w-full h-full text-slate-900" fill="none">
            {/* Outer coordinate perimeter */}
            <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.3" />
            <circle cx="200" cy="200" r="175" stroke="#ea580c" strokeWidth="1" strokeDasharray="8 12" opacity="0.4" />
            
            {/* Relativistic warped orbits */}
            <ellipse cx="200" cy="200" rx="160" ry="75" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="4 4" transform="rotate(-28 200 200)" opacity="0.6" />
            <ellipse cx="200" cy="200" rx="140" ry="50" stroke="#ea580c" strokeWidth="1.5" transform="rotate(32 200 200)" opacity="0.75" />
            
            {/* Inner photon sphere boundary */}
            <circle cx="200" cy="200" r="60" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.8" />
            
            {/* Deep Obsidian Singularity Event Horizon */}
            <circle cx="200" cy="200" r="48" fill="#020617" />
            <circle cx="200" cy="200" r="46" fill="#000000" />

            {/* Cardinal celestial crosshairs */}
            <line x1="200" y1="5" x2="200" y2="395" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" opacity="0.3" />
            <line x1="5" y1="200" x2="395" y2="200" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" opacity="0.3" />

            {/* Orbiting stellar bodies */}
            <circle cx="200" cy="40" r="3.5" fill="#020617" stroke="#ea580c" strokeWidth="1" />
            <circle cx="340" cy="230" r="2.5" fill="#f59e0b" />
            <circle cx="80" cy="260" r="2.5" fill="#ea580c" />
            <circle cx="270" cy="110" r="3" fill="#020617" stroke="#fbbf24" strokeWidth="1" />
          </svg>
        </div>
      )}

      {/* 2. NEBULA VOID: Volumetric interstellar dark dust cloud with Bok globules and orange protostar glow */}
      {variant === 'nebula-void' && (
        <div className="relative w-full h-full">
          {/* Deep Black Volumetric Cosmic Pocket */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-950/70 via-stone-900/40 to-transparent blur-3xl" />
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-slate-950/80 blur-2xl" />
          
          {/* Glowing protostellar core */}
          <div className="absolute top-[35%] left-[35%] w-[30%] h-[30%] rounded-full bg-orange-600/25 blur-xl animate-pulse" />
          <div className="absolute top-[42%] left-[42%] w-[16%] h-[16%] rounded-full bg-amber-400/30 blur-md" />

          {/* Faint Starlight Graticule & Bok Globules */}
          <svg viewBox="0 0 300 300" className="w-full h-full text-slate-900" fill="none">
            {/* Coordinate arcs */}
            <ellipse cx="150" cy="150" rx="135" ry="65" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" transform="rotate(25 150 150)" opacity="0.4" />
            <ellipse cx="150" cy="150" rx="135" ry="65" stroke="#ea580c" strokeWidth="1" strokeDasharray="6 8" transform="rotate(-35 150 150)" opacity="0.5" />
            
            {/* Deep Obsidian Bok Globule Core */}
            <circle cx="150" cy="150" r="28" fill="#020617" opacity="0.9" />
            <circle cx="150" cy="150" r="14" fill="#000000" />
            <circle cx="150" cy="150" r="3" fill="#fbbf24" />

            {/* Surrounding star coordinates */}
            <circle cx="85" cy="110" r="2.5" fill="#020617" stroke="#ea580c" strokeWidth="0.8" />
            <circle cx="215" cy="190" r="2.5" fill="#020617" stroke="#f59e0b" strokeWidth="0.8" />
            <circle cx="210" cy="95" r="2" fill="#ea580c" />
            <circle cx="95" cy="205" r="2" fill="#f59e0b" />
          </svg>
        </div>
      )}

      {/* 3. COORDINATE RING: Precision Astronomical Armillary Sphere with Black Shadow and Golden Orbits */}
      {variant === 'coordinate-ring' && (
        <div className="relative w-full h-full">
          {/* Volumetric Dark Void Backdrop */}
          <div className="absolute inset-0 rounded-full bg-radial from-slate-950/40 via-slate-900/20 to-transparent blur-xl" />

          {/* Precision Astronomical Coordinate Ring */}
          <svg viewBox="0 0 400 400" className="w-full h-full text-slate-900" fill="none">
            {/* Outer dotted coordinate perimeter */}
            <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 6" opacity="0.45" />
            <circle cx="200" cy="200" r="168" stroke="#ea580c" strokeWidth="1" strokeDasharray="10 10" opacity="0.6" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" opacity="0.3" />

            {/* Armillary elliptical rings */}
            <ellipse cx="200" cy="200" rx="160" ry="80" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
            <ellipse cx="200" cy="200" rx="160" ry="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 6" transform="rotate(45 200 200)" opacity="0.5" />
            <ellipse cx="200" cy="200" rx="160" ry="80" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 6" transform="rotate(-45 200 200)" opacity="0.5" />

            {/* Cardinal celestial crosshairs with ticks */}
            <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
            <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />

            {/* Central deep obsidian pivot */}
            <circle cx="200" cy="200" r="32" fill="#020617" stroke="#ea580c" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="12" fill="#000000" />
            <circle cx="200" cy="200" r="4" fill="#f59e0b" />

            {/* Orbiting deep space stellar points */}
            <circle cx="200" cy="32" r="3" fill="#020617" stroke="#ea580c" strokeWidth="1" />
            <circle cx="368" cy="200" r="3" fill="#020617" stroke="#f59e0b" strokeWidth="1" />
            <circle cx="200" cy="368" r="3" fill="#020617" stroke="#ea580c" strokeWidth="1" />
            <circle cx="32" cy="200" r="3" fill="#020617" stroke="#f59e0b" strokeWidth="1" />
          </svg>
        </div>
      )}

      {/* 4. HERMETIC MACROCOSM VOID: "As Above, So Below; As Within, So Without" - Deep obsidian cosmic porthole */}
      {variant === 'hermetic-macrocosm-void' && (
        <div className="relative w-full h-full">
          {/* Deep volumetric obsidian cosmos container */}
          <div className="absolute inset-0 rounded-full bg-radial from-slate-950 via-slate-900/70 to-transparent blur-2xl" />
          <div className="absolute inset-[10%] rounded-full bg-slate-950 shadow-[0_0_60px_rgba(2,6,23,0.9)]" />

          {/* Golden/Orange Event Horizon Aura */}
          <div className="absolute inset-[18%] rounded-full border border-orange-500/50 shadow-[0_0_25px_rgba(249,115,22,0.4)]" />
          <div className="absolute inset-[28%] rounded-full border border-amber-400/40 border-dashed" />

          {/* Sacred Shatkona & Anahata 12-petaled coordinate geometry */}
          <svg viewBox="0 0 400 400" className="w-full h-full text-slate-100" fill="none">
            {/* Outer macrocosm ring with degrees */}
            <circle cx="200" cy="200" r="175" stroke="#ea580c" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.7" />
            <circle cx="200" cy="200" r="160" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />

            {/* Shatkona (As Above, So Below) interlocking triangles */}
            <polygon points="200,80 295,245 105,245" stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.6" />
            <polygon points="200,280 105,115 295,115" stroke="#ea580c" strokeWidth="1.2" fill="none" opacity="0.6" />

            {/* Central Unstruck Sound (Anahata Bindu) in Pure Gold */}
            <circle cx="200" cy="200" r="28" fill="#020617" stroke="#fbbf24" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="12" fill="#fbbf24" opacity="0.9" />
            <circle cx="200" cy="200" r="4" fill="#ffffff" />

            {/* 12 Petals Ray Coordinates */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 200 + Math.cos(rad) * 45;
              const y1 = 200 + Math.sin(rad) * 45;
              const x2 = 200 + Math.cos(rad) * 155;
              const y2 = 200 + Math.sin(rad) * 155;
              return (
                <g key={deg}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ea580c" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.45" />
                  <circle cx={x2} cy={y2} r="2.5" fill="#f59e0b" />
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* 5. DARK MATTER WEB: Cosmic filaments in deep charcoal/obsidian with orange gravitational lensing nodes */}
      {variant === 'dark-matter-web' && (
        <div className="relative w-full h-full">
          {/* Volumetric dark filament backdrop */}
          <div className="absolute inset-0 rounded-full bg-radial from-slate-950/60 via-stone-900/30 to-transparent blur-3xl" />
          
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
            {/* Filament paths */}
            <path d="M 50,80 Q 150,120 200,200 T 350,320" stroke="#020617" strokeWidth="3" opacity="0.6" />
            <path d="M 320,60 Q 250,160 200,200 T 60,340" stroke="#020617" strokeWidth="2.5" opacity="0.6" />
            <path d="M 20,200 Q 120,230 200,200 T 380,200" stroke="#020617" strokeWidth="2" opacity="0.5" />
            
            {/* Luminous solar filaments */}
            <path d="M 50,80 Q 150,120 200,200 T 350,320" stroke="#ea580c" strokeWidth="1" strokeDasharray="6 8" opacity="0.7" />
            <path d="M 320,60 Q 250,160 200,200 T 60,340" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />

            {/* Gravitational Lensing Nodes */}
            {[
              { cx: 200, cy: 200, r: 8, color: '#020617', border: '#ea580c' },
              { cx: 120, cy: 150, r: 6, color: '#020617', border: '#f59e0b' },
              { cx: 270, cy: 140, r: 6, color: '#020617', border: '#ea580c' },
              { cx: 130, cy: 270, r: 5, color: '#020617', border: '#f59e0b' },
              { cx: 290, cy: 260, r: 5, color: '#020617', border: '#ea580c' },
              { cx: 50, cy: 80, r: 4, color: '#ea580c', border: '#020617' },
              { cx: 350, cy: 320, r: 4, color: '#f59e0b', border: '#020617' }
            ].map((node, i) => (
              <g key={i}>
                <circle cx={node.cx} cy={node.cy} r={node.r * 2.5} fill="none" stroke={node.border} strokeWidth="0.8" opacity="0.4" />
                <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} stroke={node.border} strokeWidth="1.5" />
                <circle cx={node.cx} cy={node.cy} r={1.5} fill="#fbbf24" />
              </g>
            ))}
          </svg>
        </div>
      )}

      {/* 6. CELESTIAL SEXTANT BLACK: Antique black-enameled astronomical coordinate disc */}
      {variant === 'celestial-sextant-black' && (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-slate-950/40 blur-xl" />
          <svg viewBox="0 0 300 300" className="w-full h-full text-slate-900" fill="none">
            {/* Outer graduated quadrant */}
            <circle cx="150" cy="150" r="140" stroke="#020617" strokeWidth="2" opacity="0.6" />
            <circle cx="150" cy="150" r="125" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 4" opacity="0.7" />
            <circle cx="150" cy="150" r="105" stroke="#020617" strokeWidth="1" opacity="0.4" />
            
            {/* Diagonal astronomical sighting arm */}
            <line x1="20" y1="20" x2="280" y2="280" stroke="#020617" strokeWidth="2" opacity="0.7" />
            <line x1="20" y1="20" x2="280" y2="280" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="6 6" opacity="0.9" />

            {/* Central obsidian bearing */}
            <circle cx="150" cy="150" r="24" fill="#020617" stroke="#ea580c" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="8" fill="#fbbf24" />
          </svg>
        </div>
      )}

      {/* 7. ASTROLABE GRID: Clean architectural coordinate grid */}
      {variant === 'astrolabe-grid' && (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-slate-950/30 blur-xl" />
          <svg viewBox="0 0 200 200" className="w-full h-full text-slate-800" fill="none">
            <circle cx="100" cy="100" r="92" stroke="#020617" strokeWidth="1.5" opacity="0.5" />
            <circle cx="100" cy="100" r="75" stroke="#ea580c" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
            <circle cx="100" cy="100" r="50" stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="5" x2="100" y2="195" stroke="#020617" strokeWidth="0.8" opacity="0.4" />
            <line x1="5" y1="100" x2="195" y2="100" stroke="#020617" strokeWidth="0.8" opacity="0.4" />
            <circle cx="100" cy="100" r="14" fill="#020617" stroke="#ea580c" strokeWidth="1" />
            <circle cx="100" cy="100" r="4" fill="#fbbf24" />
          </svg>
        </div>
      )}
    </div>
  );
};
