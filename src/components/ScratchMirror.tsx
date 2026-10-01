import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw, Scissors } from 'lucide-react';

interface VeilItem {
  id: string;
  holyMask: string;
  maskSubtitle: string;
  unmaskedPsychology: string;
  unmaskedAxiom: string;
  ancientDiagnosis: string;
}

const VEIL_ITEMS: VeilItem[] = [
  {
    id: 'veil-1',
    holyMask: '“I am defending God’s holy honor against corrupt heretics.”',
    maskSubtitle: 'The Mask of Holy Zealous Wrath',
    unmaskedPsychology: '“My identity is entirely tied to being morally right. If their contradiction goes unpunished, my psychological universe collapses into chaos.”',
    unmaskedAxiom: 'Feeds Station 1 & 4: Epistemic Pride crowning itself as Cosmic Executioner.',
    ancientDiagnosis: '“When the monk believes he is defending God, he is usually defending his own vanity.” — Philokalia'
  },
  {
    id: 'veil-2',
    holyMask: '“I have prayed, fasted, and lived righteously. God will bless me.”',
    maskSubtitle: 'The Mask of Pious Transaction',
    unmaskedPsychology: '“I cannot endure the terrifying vulnerability of mortal contingency. I use rituals to force God into signing an insurance contract for my life.”',
    unmaskedAxiom: 'Feeds Station 2: Self-Will disguised as sacrificial devotion.',
    ancientDiagnosis: '“Does Job fear God for nothing? You have made a hedge around him.” — Job 1:9'
  },
  {
    id: 'veil-3',
    holyMask: '“Why does God allow this suffering to happen to ME?”',
    maskSubtitle: 'The Mask of Cosmic Martyrdom',
    unmaskedPsychology: '“The entire cosmos must be judged by how convenient it is to my personal story. I cannot accept that I am a finite creature rather than the center of the stage.”',
    unmaskedAxiom: 'Feeds Station 3: The Copernican Inversion of the Soul into self-centeredness.',
    ancientDiagnosis: '“The soul turned inward upon itself (Incurvatus in se) cannot see the light.” — St. Augustine'
  }
];

export const ScratchMirror: React.FC = () => {
  const [selectedVeilIndex, setSelectedVeilIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentVeil = VEIL_ITEMS[selectedVeilIndex];

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 600;
    canvas.height = 180;

    // Fill with warm amber-slate mask
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    ctx.fillStyle = '#fef3c7';
    ctx.font = 'italic 16px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ THE VEIL OF DEVOUT PRETENSE ✦', canvas.width / 2, 70);

    ctx.fillStyle = '#fed7aa';
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillText('(Drag cursor or swipe to scratch away the surface pretense)', canvas.width / 2, 105);

    setIsRevealed(false);
  };

  useEffect(() => {
    initCanvas();
    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedVeilIndex]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    setIsRevealed(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.buttons === 1) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleRevealAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsRevealed(true);
  };

  return (
    <section className="py-12 border-t border-orange-100 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-3">
          <Scissors className="w-3.5 h-3.5" />
          <span>Interactive Unmasking Apparatus</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal mb-3">
          Tear the Veil of Pious Rhetoric
        </h3>
        <p className="text-sm sm:text-base font-serif text-slate-700 leading-relaxed mb-6">
          The ego’s greatest trick is cloaking its hunger for control in the sacred language of holiness. Select a spiritual proclamation, then drag across the canvas below to scratch away the religious veneer.
        </p>

        {/* Mask Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {VEIL_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedVeilIndex(idx)}
              className={`px-3 py-1.5 text-xs font-mono rounded-xl border transition-all ${
                selectedVeilIndex === idx
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-xs border-orange-400'
                  : 'bg-white text-slate-700 border-orange-200 hover:bg-orange-50'
              }`}
            >
              Veneer 0{idx + 1}: {item.maskSubtitle.replace('The Mask of ', '')}
            </button>
          ))}
        </div>

        {/* The Scratchable Mirror Frame */}
        <div className="card-white rounded-3xl p-6 sm:p-8 border border-orange-200 relative overflow-hidden shadow-md">
          {/* Surface Holy Quote */}
          <div className="mb-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-700 font-bold block mb-1">
              Public / Religious Self-Image:
            </span>
            <div className="text-lg sm:text-xl font-serif text-slate-900 font-medium italic">
              {currentVeil.holyMask}
            </div>
            <span className="text-xs font-mono text-slate-500 mt-1 block">
              {currentVeil.maskSubtitle}
            </span>
          </div>

          {/* Interactive Scratch Canvas Layer Stack */}
          <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-orange-300 my-4 select-none touch-none shadow-inner">
            {/* Underlying Revealed Shadow */}
            <div className="absolute inset-0 p-5 bg-gradient-to-br from-orange-50 to-amber-100 flex flex-col justify-center border border-orange-200">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-700 font-bold block mb-1">
                ✦ Unmasked Subconscious Reality:
              </span>
              <p className="text-sm sm:text-base font-serif text-slate-900 italic leading-relaxed">
                {currentVeil.unmaskedPsychology}
              </p>
              <div className="text-xs font-mono text-orange-800 font-semibold mt-2">
                {currentVeil.unmaskedAxiom}
              </div>
            </div>

            {/* Top Scratchable Canvas */}
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => scratch(e.clientX, e.clientY)}
              onPointerMove={handlePointerMove}
              className="absolute inset-0 w-full h-full cursor-crosshair z-10"
            />
          </div>

          {/* Controls & Ancient Diagnosis */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-orange-100 text-xs">
            <div className="font-serif italic text-slate-600">
              {currentVeil.ancientDiagnosis}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={initCanvas}
                className="flex items-center gap-1.5 px-3 py-1 font-mono text-slate-700 hover:text-slate-900 bg-orange-50 rounded-lg border border-orange-200"
              >
                <RefreshCw className="w-3 h-3 text-orange-500" />
                <span>Reset Veil</span>
              </button>
              <button
                onClick={handleRevealAll}
                className="flex items-center gap-1.5 px-3 py-1 font-mono text-orange-800 hover:text-orange-950 bg-orange-100 rounded-lg border border-orange-300 font-semibold"
              >
                <span>Reveal Full Shadow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
