import React, { useState, useEffect, useRef } from 'react';
import { Compass, Info, CheckCircle2, AlertOctagon, Sparkles, Play, Pause, FastForward } from 'lucide-react';
import { CosmicBackdropElement } from './CosmicBackdropElement';

interface ChariotComponent {
  id: string;
  name: string;
  sanskrit: string;
  role: string;
  corruptedState: string;
  alignedState: string;
  psychologicalEquivalent: string;
}

const CHARIOT_PARTS: ChariotComponent[] = [
  {
    id: 'rider',
    name: 'The True Lord of the Chariot',
    sanskrit: 'रथिनम् (Rathinam / Ātman)',
    role: 'The silent sovereign and pure witness for whom the entire journey exists.',
    corruptedState: 'Ignored, silenced, or forgotten as the ego usurps the throne and claims to own the voyage.',
    alignedState: 'Resting in pure unconditioned peace; the conscious recipient of the surrendered journey.',
    psychologicalEquivalent: 'The True Self / Transcendent Witness / Ground of Consciousness'
  },
  {
    id: 'driver',
    name: 'The Charioteer / Driver',
    sanskrit: 'सारथिम् (Sārathim / Buddhi)',
    role: 'The discriminating intellect that holds the reins and directs the horses.',
    corruptedState: 'Pushed aside or seduced by Ahaṁkāra (the false ego), turning discernment into rationalization for personal will.',
    alignedState: 'Attentive, quiet, and obedient to the silent guidance of the Atman, steering with tranquil wisdom.',
    psychologicalEquivalent: 'Higher Discriminating Intellect / Intuitive Nous / Conscience'
  },
  {
    id: 'reins',
    name: 'The Reins',
    sanskrit: 'प्रग्रहम् (Pragraham / Manas)',
    role: 'The processing bridge that translates the driver’s intent into gentle guidance over the senses.',
    corruptedState: 'Slack or violently yanked by reactive emotional storms, mood swings, and cognitive dissonance.',
    alignedState: 'Taut, steady, and calm; translating higher discernment smoothly into emotional stability.',
    psychologicalEquivalent: 'The Mind / Emotional Center / Neural Signaling'
  },
  {
    id: 'horses',
    name: 'The Horses',
    sanskrit: 'हयान् (Hayān / Indriyas)',
    role: 'The powerful sensory engines that propel the chariot forward through the physical world.',
    corruptedState: 'Wild, unbridled, bolted by worldly stimuli; dragging the carriage into ditches of addiction and craving.',
    alignedState: 'Trained, vigorous, and responsive; channeled toward truth, beauty, and selfless service.',
    psychologicalEquivalent: 'The Five Senses / Instincts / Biological Drives'
  },
  {
    id: 'chariot',
    name: 'The Chariot Itself',
    sanskrit: 'शरीरम् (Śarīram / The Body)',
    role: 'The somatic temple and physical vessel carrying the pilgrimage.',
    corruptedState: 'Exhausted, battered, and broken by the reckless driving of ego and untamed horses.',
    alignedState: 'Honored, nourished, and kept in sacred equilibrium as an instrument of divine presence.',
    psychologicalEquivalent: 'The Somatic Body / Physical Architecture'
  }
];

export const ChariotSection: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string>('driver');
  const [isHijacked, setIsHijacked] = useState<boolean>(true);
  const [isPlayingMotion, setIsPlayingMotion] = useState<boolean>(true);
  const [turbulence, setTurbulence] = useState<number>(75);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activePart = CHARIOT_PARTS.find((p) => p.id === selectedPartId) || CHARIOT_PARTS[1];

  // Dynamic Kinetic Chariot Canvas Animation in White & Orange-Yellow
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 700;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    let frame = 0;
    let wheelAngle = 0;

    const render = () => {
      if (isPlayingMotion) {
        frame += 0.08 * (turbulence / 40);
        wheelAngle += 0.06 * (turbulence / 35);
      }

      ctx.clearRect(0, 0, width, height);

      // Warm ivory to white ground
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(1, '#fefaf2');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Moving ground terrain speedlines in warm orange
      const groundY = height * 0.82;
      ctx.strokeStyle = '#fed7aa';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.lineDashOffset = -frame * 35;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Chariot Body Position
      const shakeY = isHijacked ? Math.sin(frame * 6) * (turbulence * 0.05) : Math.sin(frame * 2) * 1.5;
      const chariotX = width * 0.25;
      const chariotY = groundY - 45 + shakeY;

      // Draw Rotating Wheel in radiant orange-gold
      ctx.save();
      ctx.translate(chariotX, chariotY);
      ctx.rotate(wheelAngle);
      ctx.strokeStyle = isHijacked ? '#ea580c' : '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 32, 0, Math.PI * 2);
      ctx.stroke();

      for (let s = 0; s < 8; s++) {
        const rad = (s * Math.PI) / 4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(rad) * 32, Math.sin(rad) * 32);
        ctx.stroke();
      }
      ctx.restore();

      // Draw Chariot Carriage
      ctx.fillStyle = isHijacked ? 'rgba(254, 215, 170, 0.4)' : 'rgba(254, 243, 199, 0.6)';
      ctx.strokeStyle = isHijacked ? '#ea580c' : '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(chariotX - 50, chariotY - 10);
      ctx.lineTo(chariotX - 30, chariotY - 60);
      ctx.lineTo(chariotX + 50, chariotY - 60);
      ctx.lineTo(chariotX + 40, chariotY - 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // The Rider (Atman)
      const riderX = chariotX - 15;
      const riderY = chariotY - 85;
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(riderX, riderY, 14, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(251, 191, 36, 0.3)';
      ctx.fill();
      ctx.stroke();

      // Halo around Rider in warm gold
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.beginPath();
      ctx.arc(riderX, riderY, 24, 0, Math.PI * 2);
      ctx.stroke();

      // The Driver (Buddhi / Ahamkara)
      const driverX = chariotX + 30;
      const driverY = chariotY - 95 + (isHijacked ? Math.sin(frame * 4) * 3 : 0);
      ctx.strokeStyle = isHijacked ? '#e11d48' : '#0d9488';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(driverX, driverY, 14, 0, Math.PI * 2);
      ctx.fillStyle = isHijacked ? 'rgba(225, 29, 72, 0.2)' : 'rgba(13, 148, 136, 0.2)';
      ctx.fill();
      ctx.stroke();

      const handsX = driverX + 25;
      const handsY = driverY + 20;

      // Galloping Horses
      const horseX = width * 0.72;
      const horseBob = Math.sin(frame * 3) * 6;
      const horseY = groundY - 60 + horseBob;

      ctx.fillStyle = 'rgba(71, 85, 105, 0.2)';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(horseX, horseY, 45, 25, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const neckBob = Math.sin(frame * 3 + 0.5) * 8;
      ctx.beginPath();
      ctx.moveTo(horseX + 35, horseY - 10);
      ctx.lineTo(horseX + 65, horseY - 55 + neckBob);
      ctx.lineTo(horseX + 85, horseY - 45 + neckBob);
      ctx.lineTo(horseX + 50, horseY + 10);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      const legAngle1 = Math.sin(frame * 3);
      const legAngle2 = Math.cos(frame * 3);

      ctx.beginPath();
      ctx.moveTo(horseX + 35, horseY + 20);
      ctx.lineTo(horseX + 35 + Math.sin(legAngle1) * 25, groundY);
      ctx.moveTo(horseX + 25, horseY + 20);
      ctx.lineTo(horseX + 25 - Math.sin(legAngle1) * 25, groundY);
      ctx.moveTo(horseX - 35, horseY + 15);
      ctx.lineTo(horseX - 35 + Math.sin(legAngle2) * 25, groundY);
      ctx.moveTo(horseX - 25, horseY + 15);
      ctx.lineTo(horseX - 25 - Math.sin(legAngle2) * 25, groundY);
      ctx.stroke();

      // Reins in orange-red
      const reinTurbulence = isHijacked ? Math.sin(frame * 8) * 8 : 0;
      ctx.strokeStyle = isHijacked ? '#ea580c' : '#0d9488';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(handsX, handsY);
      ctx.quadraticCurveTo(
        (handsX + horseX + 70) / 2,
        (handsY + horseY - 45) / 2 + 15 + reinTurbulence,
        horseX + 70,
        horseY - 45 + neckBob
      );
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isPlayingMotion, isHijacked, turbulence]);

  return (
    <section id="the-chariot" className="py-20 px-6 border-b border-orange-200/60 bg-white relative overflow-hidden">
      {/* Volumetric Dark Cosmos Background Elements */}
      <CosmicBackdropElement position="top-right" variant="hermetic-macrocosm-void" size="xl" intensity="medium" />
      <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="lg" intensity="deep" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-600 font-bold mb-3">
            <Compass className="w-4 h-4 text-orange-500" />
            <span>Vedic Cognitive Anatomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal tracking-tight mb-3">
            The Chariot of the Mind (Kaṭha Upaniṣad)
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            The ancient sages mapped the mind as a moving carriage. Who holds the reins? When the false ego (Ahamkara) grabs them, the horses bolt toward disaster. When the higher mind (Buddhi) surrenders to the Witness (Atman), the ride is peaceful.
          </p>
        </div>

        {/* State Toggle & Motion Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl card-white border border-orange-200 mb-8 shadow-xs">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
              Select Driving Regime
            </span>
            <h3 className="text-lg font-serif text-slate-900 font-medium">
              {isHijacked ? 'Ahaṁkāra Usurpation: Ego Drives the Soul' : 'Buddhi Aligned: The Surrendered Witness'}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsPlayingMotion(!isPlayingMotion)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-700 hover:text-slate-900 bg-orange-50 rounded-xl border border-orange-200"
            >
              {isPlayingMotion ? <Pause className="w-3.5 h-3.5 text-orange-500" /> : <Play className="w-3.5 h-3.5 text-orange-500" />}
              <span>{isPlayingMotion ? 'Pause' : 'Play'}</span>
            </button>

            <div className="flex items-center gap-1.5 p-1 bg-orange-50 rounded-xl border border-orange-200">
              <button
                onClick={() => {
                  setIsHijacked(true);
                  setTurbulence(85);
                }}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors ${
                  isHijacked
                    ? 'bg-rose-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hijacked by Ego
              </button>
              <button
                onClick={() => {
                  setIsHijacked(false);
                  setTurbulence(30);
                }}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors ${
                  !isHijacked
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Aligned with Ātman
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Kinetic Motion Simulator Frame */}
        <div className="relative w-full aspect-16/9 md:aspect-21/9 bg-white rounded-3xl overflow-hidden border border-orange-200 shadow-md mb-8">
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Interactive HUD Overlay for Turbulence */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-orange-200 text-xs font-mono w-48 shadow-xs">
            <div className="flex justify-between text-slate-700 mb-1">
              <span>Mental Agitation</span>
              <span className={isHijacked ? 'text-rose-600 font-bold' : 'text-teal-700 font-bold'}>
                {turbulence}%
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="100"
              value={turbulence}
              onChange={(e) => setTurbulence(Number(e.target.value))}
              aria-label="Turbulence agitation level"
              className="w-full h-1.5 bg-orange-100 rounded appearance-none cursor-pointer accent-orange-500"
            />
          </div>

          <div className="absolute bottom-3 left-4 text-[11px] font-mono bg-white/95 px-3 py-1.5 rounded-xl border border-orange-200 text-slate-700 font-medium shadow-xs">
            {isHijacked ? '⚠️ Reins strained by compulsive self-will' : '✨ Reins harmonious with transcendent witness'}
          </div>
        </div>

        {/* Detailed Component Inspector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {CHARIOT_PARTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPartId(p.id)}
              className={`p-3 text-left rounded-xl border transition-all ${
                selectedPartId === p.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-orange-400 font-bold shadow-xs'
                  : 'bg-white text-slate-700 border-orange-200 hover:border-orange-300'
              }`}
            >
              <div className="text-xs font-mono mb-1 opacity-80">
                Part 0{CHARIOT_PARTS.indexOf(p) + 1}
              </div>
              <div className="text-sm font-serif truncate">{p.name.split(' ')[1] || p.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Part Exposition Card */}
        <div className="card-white rounded-3xl p-6 sm:p-8 mb-12 border border-orange-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-orange-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-bold block mb-1">
                Anatomical Node Focus
              </span>
              <h3 className="text-2xl font-serif text-slate-900 font-normal">
                {activePart.name}
              </h3>
              <p className="text-sm font-archival text-orange-700 mt-0.5">
                {activePart.sanskrit}
              </p>
            </div>

            <div className="sm:text-right text-xs font-mono text-slate-500">
              Psychological Axis: <span className="text-slate-800 font-medium">{activePart.psychologicalEquivalent}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                Sacred Primordial Role
              </h4>
              <p className="text-sm text-slate-700 font-serif leading-relaxed">
                {activePart.role}
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border ${
                isHijacked
                  ? 'bg-rose-50 border-rose-200 text-rose-900'
                  : 'bg-teal-50 border-teal-200 text-teal-900'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {isHijacked ? <AlertOctagon className="w-4 h-4 text-rose-600" /> : <CheckCircle2 className="w-4 h-4 text-teal-600" />}
                <span className="text-xs font-mono uppercase tracking-wider font-bold">
                  {isHijacked ? 'Under Ahaṁkāra (Hijacked):' : 'Under Buddhi (Aligned):'}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-serif leading-relaxed text-slate-800">
                {isHijacked ? activePart.corruptedState : activePart.alignedState}
              </p>
            </div>
          </div>
        </div>

        {/* Original Sanskrit Inscription */}
        <div className="card-white rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-3">
            <span>Primary Canonical Inscription</span>
            <span aria-hidden="true">·</span>
            <span>Kaṭha Upaniṣad 1.3.3–4</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-orange-100 pb-6 md:pb-0 md:pr-8">
              <p className="font-serif text-lg sm:text-xl text-orange-950 leading-loose mb-4 whitespace-pre-line tracking-wide font-medium">
                आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।{'\n'}
                बुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥{'\n'}
                इन्द्रियाणि हयानाहुर्विषयांस्तेषु गोचरान् ।{'\n'}
                आत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिणः ॥
              </p>

              <p className="text-xs font-mono text-slate-500 leading-relaxed italic">
                ātmānaṁ rathinaṁ viddhi śarīraṁ rathameva tu |{'\n'}
                buddhiṁ tu sārathiṁ viddhi manaḥ pragrahameva ca ||
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Philosophical Translation
              </span>
              <p className="text-sm sm:text-base font-serif text-slate-800 leading-relaxed italic mb-4">
                “Know the Ātman as the lord of the chariot, and the body as the chariot itself. Know the Buddhi (Intellect) as the charioteer, and the Manas (Mind) as the reins. The senses are called the horses, and the sensory objects are their roads.”
              </p>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                When Ahaṅkāra pushes the Buddhi aside, the mind becomes an instrument of rationalization rather than discernment. The question is never whether you have a religion, but who is holding the reins while you practice it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
