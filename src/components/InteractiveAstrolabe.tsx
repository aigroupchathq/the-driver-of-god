import React, { useState, useRef } from 'react';
import { Compass, Eye, RotateCw } from 'lucide-react';

interface AstrolabeQuadrant {
  angle: number;
  label: string;
  driverName: string;
  theology: string;
  innerThought: string;
  crisisReaction: string;
  ancientConcept: string;
  accentColor: string;
}

const QUADRANTS: AstrolabeQuadrant[] = [
  {
    angle: 0,
    label: 'Kenosis (Surrender)',
    driverName: 'The Receptive Soul (Ātman / True Witness)',
    theology: 'The Infinite Ground of Being (Peace Beyond Control)',
    innerThought: '“I am a finite creature. I do not own the universe, and I have no demands to enforce.”',
    crisisReaction: 'When tragedy strikes: You bow before the mystery. Faith remains intact because you never treated God as your personal employee.',
    ancientConcept: 'Kenosis / Śūnyatā / Prapatti',
    accentColor: '#0d9488'
  },
  {
    angle: 90,
    label: 'Pride (Hubris)',
    driverName: 'The Dogmatic Architect (Intellectual Ego)',
    theology: 'The Fortress of Dogma (God as My Cognitive Shield)',
    innerThought: '“I hold the absolute truth. Those who disagree with me are morally and mentally inferior.”',
    crisisReaction: 'When challenged by doubt or opposing ideas: Panic sets in. You build rigid apologetics to protect your ego rather than seeking truth.',
    ancientConcept: 'Mada / Hyperēphania',
    accentColor: '#d97706'
  },
  {
    angle: 180,
    label: 'Self-Will (The Bargain)',
    driverName: 'The Cosmic Negotiator (Transactional Ego)',
    theology: 'The Cosmic Insurance Agency (God as My Butler)',
    innerThought: '“I prayed, fasted, and was good. God owes me health, success, and protection.”',
    crisisReaction: 'When life plans collapse: Bitter resentment explodes: “Why did God betray ME after all I sacrificed?”',
    ancientConcept: 'Incurvatus in Se / Self-Will Run Riot',
    accentColor: '#ea580c'
  },
  {
    angle: 270,
    label: 'Playing God (Usurpation)',
    driverName: 'The Usurper of the Throne (The Supreme Judge)',
    theology: 'The Weaponized Avatar (God Shares My Exact Enemies)',
    innerThought: '“I know who is damned and who is saved. My righteous wrath is identical to God’s wrath.”',
    crisisReaction: 'When adversaries flourish: You curse them in God’s name, secretly wishing eternal hellfire upon those who offend you.',
    ancientConcept: 'Shirk Khafi / Genesis 3:5 / Job 40:8',
    accentColor: '#e11d48'
  }
];

export const InteractiveAstrolabe: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dialRef = useRef<HTMLDivElement | null>(null);

  const normalizedAngle = ((rotation % 360) + 360) % 360;

  const getActiveQuadrant = (ang: number): AstrolabeQuadrant => {
    if (ang >= 315 || ang < 45) return QUADRANTS[0];
    if (ang >= 45 && ang < 135) return QUADRANTS[1];
    if (ang >= 135 && ang < 225) return QUADRANTS[2];
    return QUADRANTS[3];
  };

  const currentQuad = getActiveQuadrant(normalizedAngle);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    let deg = (rad * 180) / Math.PI + 90;
    if (deg < 0) deg += 360;
    setRotation(Math.round(deg));
  };

  const jumpToAngle = (ang: number) => {
    setRotation(ang);
  };

  return (
    <div className="hairline-card rounded-2xl p-6 sm:p-10 my-10 relative">
      {/* Principle Utility Ribbon (NO pills) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
            Core Psychological Instrument
          </span>
          <p className="text-sm font-serif text-stone-800 max-w-xl leading-relaxed">
            Rotate the wheel to observe how adjusting the internal driver instantly reconfigures your theology from a weapon of control into quiet creaturely reverence.
          </p>
        </div>

        {/* Real-World Crisis Quick Triggers */}
        <div className="flex flex-wrap items-center gap-1.5 shrink-0">
          <button
            onClick={() => jumpToAngle(180)}
            className="px-3 py-1.5 text-xs font-mono text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded transition-colors"
          >
            Prayer Fails
          </button>
          <button
            onClick={() => jumpToAngle(270)}
            className="px-3 py-1.5 text-xs font-mono text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded transition-colors"
          >
            Adversary Slanders
          </button>
          <button
            onClick={() => jumpToAngle(0)}
            className="px-3 py-1.5 text-xs font-mono text-orange-700 hover:text-orange-900 bg-orange-50 hover:bg-orange-100 rounded transition-colors font-medium"
          >
            Kenosis Surrender
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Dieter Rams / Precision Mechanical Dial */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-0.5">
              Active Coordinate
            </span>
            <div className="text-sm font-serif text-stone-900 font-medium">
              {currentQuad.label} · <span className="font-mono text-xs text-orange-600">{Math.round(normalizedAngle)}°</span>
            </div>
          </div>

          {/* Interactive Mechanical Instrument */}
          <div
            ref={dialRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-stone-300 bg-[#fdfbf7] shadow-inner flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none"
          >
            {/* Cardinal Navigation Points with WCAG 44px touch clearance */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                jumpToAngle(0);
              }}
              className="absolute top-1 text-[11px] font-mono tracking-wider font-semibold text-teal-800 hover:text-teal-950 uppercase min-h-[44px] min-w-[44px] flex items-center justify-center px-2 z-10 transition-transform active:scale-95"
            >
              Kenosis
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                jumpToAngle(90);
              }}
              className="absolute right-1 text-[11px] font-mono tracking-wider font-semibold text-amber-800 hover:text-amber-950 uppercase min-h-[44px] min-w-[44px] flex items-center justify-center px-2 z-10 transition-transform active:scale-95"
            >
              Pride
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                jumpToAngle(180);
              }}
              className="absolute bottom-1 text-[11px] font-mono tracking-wider font-semibold text-orange-800 hover:text-orange-950 uppercase min-h-[44px] min-w-[44px] flex items-center justify-center px-2 z-10 transition-transform active:scale-95"
            >
              Self-Will
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                jumpToAngle(270);
              }}
              className="absolute left-1 text-[11px] font-mono tracking-wider font-semibold text-rose-800 hover:text-rose-950 uppercase min-h-[44px] min-w-[44px] flex items-center justify-center px-2 z-10 transition-transform active:scale-95"
            >
              Playing God
            </button>

            {/* Rotating Needle */}
            <div
              className={`absolute w-full h-full pointer-events-none transition-transform ${
                isDragging ? 'duration-0' : 'duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
              }`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="absolute top-9 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-orange-600" />
                <div className="w-[1.5px] h-12 bg-orange-600" />
              </div>
            </div>

            {/* Center Hub */}
            <div className="relative z-10 w-24 h-24 rounded-full border border-stone-300 bg-white flex flex-col items-center justify-center p-2 text-center shadow-xs">
              <Eye className="w-4 h-4 text-orange-600 mb-1" />
              <span className="text-xs font-mono font-bold text-stone-900 tabular-nums">
                {Math.round(normalizedAngle)}°
              </span>
              <span className="text-[10px] font-sans text-stone-500 truncate max-w-[70px]">
                {currentQuad.label.split(' ')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Monograph Breakdown (NO cards-in-cards) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-semibold block mb-1">
              01. The Resulting God-Concept
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-stone-900 font-normal mb-2">
              {currentQuad.theology}
            </h3>
            <p className="text-sm font-serif italic text-stone-700 leading-relaxed border-l-2 border-orange-500 pl-3">
              {currentQuad.innerThought}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-1">
              02. Reaction to Adversity
            </span>
            <p className="text-sm font-sans text-stone-800 leading-relaxed">
              {currentQuad.crisisReaction}
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono text-stone-500">
            <span>Canonical Root: <strong className="text-stone-800 font-medium">{currentQuad.ancientConcept}</strong></span>
            <span>Driver: <strong className="text-stone-800 font-medium">{currentQuad.driverName.split('(')[0]}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
