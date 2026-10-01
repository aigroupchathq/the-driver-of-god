import React, { useState, useEffect, useRef } from 'react';
import { Orbit, AlertTriangle, ShieldCheck } from 'lucide-react';
import { CosmicBackdropElement } from './CosmicBackdropElement';

interface CelestialBody {
  id: string;
  name: string;
  symbol: string;
  plainRole: string;
  egoCentricRole: string;
  kenoticRole: string;
  distance: number;
  radius: number;
  color: string;
}

const BODIES: CelestialBody[] = [
  {
    id: 'divine-sun',
    name: 'The Divine Center (Ground of Being)',
    symbol: '☉ Sun / Unconditioned Mystery',
    plainRole: 'The unconditioned source of all reality.',
    egoCentricRole: 'Demoted to an errand boy: you expect God to circle your life, grant your wishes, and punish people you dislike.',
    kenoticRole: 'The radiant center: you take your place as a humble planet basking in the warmth of being alive.',
    distance: 0,
    radius: 22,
    color: '#f59e0b'
  },
  {
    id: 'planet-ego',
    name: 'Planet Persona (Your Personal Ego)',
    symbol: '⊕ The Human Ego',
    plainRole: 'Your finite personality and biological body.',
    egoCentricRole: 'Crowns itself as the Sun: expects every tragedy, event, and person to revolve around its personal convenience.',
    kenoticRole: 'Orbits peacefully: understands that pain and joy are part of an infinite tapestry far bigger than one human story.',
    distance: 85,
    radius: 9,
    color: '#0284c7'
  },
  {
    id: 'orbit-self-will',
    name: 'The Orbit of Destiny (Events & Outcomes)',
    symbol: '☿ Reality / Fate',
    plainRole: 'The uncontrollable flow of life events.',
    egoCentricRole: 'Forced into unnatural, chaotic loops because the ego demands veto power over death, sickness, and delay.',
    kenoticRole: 'Smooth, natural ellipse: you let reality be what it is, acting with wisdom without clinging to results.',
    distance: 145,
    radius: 7,
    color: '#ea580c'
  },
  {
    id: 'witness-moon',
    name: 'The Moon of Discernment (Buddhi / Conscience)',
    symbol: '☽ Conscience / Witness',
    plainRole: 'The still voice within that perceives truth.',
    egoCentricRole: 'Blinded by ego: conscience is silenced and replaced by self-righteous moral outrage.',
    kenoticRole: 'Luminous and serene: mirrors divine compassion into the darkest trials.',
    distance: 200,
    radius: 10,
    color: '#64748b'
  }
];

export const CosmicOrrery: React.FC = () => {
  const [modelMode, setModelMode] = useState<'egocentric' | 'theocentric'>('theocentric');
  const [egoMass, setEgoMass] = useState<number>(35);
  const [selectedBodyId, setSelectedBodyId] = useState<string>('divine-sun');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeBody = BODIES.find((b) => b.id === selectedBodyId) || BODIES[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 380);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 700;
      height = canvas.height = 380;
    };
    window.addEventListener('resize', handleResize);

    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;

    const render = () => {
      const speedMult = modelMode === 'egocentric' ? 1.6 : 0.9;
      angle1 += 0.015 * speedMult;
      angle2 += 0.009 * speedMult;
      angle3 += 0.005 * speedMult;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Clean porcelain celestial backdrop
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 250);
      if (modelMode === 'theocentric') {
        grad.addColorStop(0, 'rgba(254, 243, 199, 0.6)');
        grad.addColorStop(0.5, 'rgba(255, 237, 213, 0.2)');
        grad.addColorStop(1, '#ffffff');
      } else {
        grad.addColorStop(0, 'rgba(255, 228, 230, 0.6)');
        grad.addColorStop(0.5, 'rgba(254, 205, 211, 0.2)');
        grad.addColorStop(1, '#ffffff');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const r1 = 75;
      const r2 = 130;
      const r3 = 180;

      // Draw Orbit Tracks
      ctx.lineWidth = 1;
      if (modelMode === 'theocentric') {
        ctx.strokeStyle = 'rgba(234, 88, 12, 0.25)';
        ctx.setLineDash([4, 4]);
        [r1, r2, r3].forEach((r) => {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        });
        ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = 'rgba(225, 29, 72, 0.35)';
        ctx.setLineDash([2, 3]);
        [r1, r2, r3].forEach((r, idx) => {
          ctx.beginPath();
          for (let a = 0; a <= Math.PI * 2; a += 0.05) {
            const epicycleOffset = Math.sin(a * 4 + angle1) * (egoMass * 0.14 * (idx + 1));
            const px = cx + (r + epicycleOffset) * Math.cos(a);
            const py = cy + (r + epicycleOffset) * Math.sin(a);
            if (a === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
        });
        ctx.setLineDash([]);
      }

      // Draw Center Body
      if (modelMode === 'theocentric') {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 16;
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('GOD', cx, cy + 3);
        ctx.restore();
      } else {
        ctx.save();
        const swollenRadius = 18 + egoMass * 0.15;
        ctx.beginPath();
        ctx.arc(cx, cy, swollenRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#e11d48';
        ctx.shadowColor = '#f43f5e';
        ctx.shadowBlur = 16;
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('ME', cx, cy + 3);
        ctx.restore();
      }

      // Orbiting Bodies
      let p1x: number, p1y: number;
      if (modelMode === 'theocentric') {
        p1x = cx + r1 * Math.cos(angle1);
        p1y = cy + r1 * Math.sin(angle1);
        ctx.beginPath();
        ctx.arc(p1x, p1y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#0284c7';
        ctx.fill();
      } else {
        const epicycleR = 14;
        const epiX = cx + r1 * Math.cos(angle1);
        const epiY = cy + r1 * Math.sin(angle1);
        p1x = epiX + epicycleR * Math.cos(angle1 * 3);
        p1y = epiY + epicycleR * Math.sin(angle1 * 3);

        ctx.beginPath();
        ctx.arc(p1x, p1y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#ea580c';
        ctx.fill();
      }

      const p2x = cx + r2 * Math.cos(angle2);
      const p2y = cy + r2 * Math.sin(angle2);
      ctx.beginPath();
      ctx.arc(p2x, p2y, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ea580c';
      ctx.fill();

      const p3x = cx + r3 * Math.cos(angle3);
      const p3y = cy + r3 * Math.sin(angle3);
      ctx.beginPath();
      ctx.arc(p3x, p3y, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#64748b';
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [modelMode, egoMass]);

  return (
    <section id="cosmic-orrery" className="py-20 px-6 border-b border-[#e7e5e4] relative overflow-hidden">
      {/* Volumetric Dark Cosmic Void Background Elements */}
      <CosmicBackdropElement position="top-right" variant="celestial-sextant-black" size="xl" intensity="deep" />
      <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="xl" intensity="deep" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-500 mb-3">
            <Orbit className="w-4 h-4 text-orange-600" />
            <span>Liber IV: The Cosmological Inversion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal tracking-tight mb-3">
            The Cosmic Orrery of the Soul
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-serif leading-relaxed">
            Geocentrism was never merely ancient astronomical ignorance; it was the externalized psychic blueprint of Pride. See what happens when the human ego crowns itself as the Sun versus when the Divine Mystery is restored as the radiant center.
          </p>
        </div>

        {/* Clean Segmented Mode Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModelMode('theocentric')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                modelMode === 'theocentric'
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ☉ Heliocentric Kenosis (God at Center)
            </button>
            <button
              onClick={() => setModelMode('egocentric')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                modelMode === 'egocentric'
                  ? 'bg-rose-700 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ⊕ Ptolemaic Pride (Ego at Center)
            </button>
          </div>

          <div className="text-xs font-mono text-stone-500">
            {modelMode === 'theocentric' ? 'Harmonious elliptical orbits · Anxiety: 0%' : 'Turbulent epicycles · Anxiety: 95%'}
          </div>
        </div>

        {/* Orrery Canvas Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-7 hairline-card rounded-2xl p-5 relative overflow-hidden">
            <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden border border-stone-200 bg-white">
              <canvas ref={canvasRef} className="w-full h-full block" />

              {/* HUD Vanity Slider */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-stone-200 text-xs font-mono w-44 shadow-xs">
                <div className="flex justify-between text-stone-600 mb-1">
                  <span>Ego Mass</span>
                  <span className="text-orange-600 font-semibold">{egoMass}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={egoMass}
                  onChange={(e) => setEgoMass(Number(e.target.value))}
                  aria-label="Ego inflation level"
                  className="w-full h-1.5 bg-stone-100 rounded appearance-none cursor-pointer accent-orange-600"
                />
              </div>

              <div className="absolute top-3 left-3 text-[11px] font-mono bg-white/95 px-2.5 py-1 rounded border border-stone-200 text-stone-700 font-medium">
                {modelMode === 'theocentric' ? '☉ Sun at Center · Orbiting in peace' : '⊕ Ego at Center · Strained epicycles'}
              </div>
            </div>

            {/* Body Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {BODIES.map((body) => (
                <button
                  key={body.id}
                  onClick={() => setSelectedBodyId(body.id)}
                  className={`p-2.5 text-left rounded-lg border text-xs font-mono transition-all ${
                    selectedBodyId === body.id
                      ? 'bg-stone-900 text-white font-medium border-stone-900'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="truncate">{body.symbol.split(' ')[0]} {body.symbol.split(' ')[1]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Node Explanation */}
          <div className="lg:col-span-5 hairline-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Celestial Coordinate
              </span>
              <h3 className="text-2xl font-serif text-stone-900 font-normal">
                {activeBody.name}
              </h3>
              <p className="text-xs font-mono text-stone-500 mt-1">
                {activeBody.plainRole}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                {modelMode === 'egocentric' ? 'Under Ego-Centric Distortion:' : 'Under Kenotic Peace:'}
              </h4>
              <p className="text-sm font-serif text-stone-800 leading-relaxed">
                {modelMode === 'egocentric' ? activeBody.egoCentricRole : activeBody.kenoticRole}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200">
              <blockquote className="border-l-2 border-orange-500 pl-3 py-1 text-xs font-serif italic text-stone-600 leading-relaxed">
                “Can you bind the chains of the Pleiades, or loosen the cords of Orion?... Do you know the ordinances of the heavens?”
                <footer className="not-italic text-[10px] font-mono text-stone-400 mt-1">
                  — The Book of Job 38:31–33
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
