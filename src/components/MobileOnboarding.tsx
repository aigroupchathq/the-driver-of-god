import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Compass, ShieldAlert, Sparkles, Eye, Orbit, CheckCircle2 } from 'lucide-react';

interface MobileOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquest: () => void;
  onOpenKenosis: () => void;
}

export const MobileOnboarding: React.FC<MobileOnboardingProps> = ({
  isOpen,
  onClose,
  onOpenInquest,
  onOpenKenosis
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const SLIDES = [
    {
      badge: 'Step 1 of 3: The Premise',
      title: 'The Fatal Question',
      highlight: '“Who is driving your understanding of God?”',
      description:
        'Most people ask: “Who is God?” But if your unexamined ego is driving the answer, the God you find will just be a mirror of your own desires, fears, and prejudices.',
      visualIcon: Compass,
      takeaway: 'Key takeaway: When ego drives, God becomes a butler or a weapon.'
    },
    {
      badge: 'Step 2 of 3: The Fourfold Trap',
      title: 'The Chain of Self-Will',
      highlight: 'Pride → Self-Will → Self-Centeredness → Playing God',
      description:
        'It starts with Pride (thinking your beliefs are absolute truth), turns into Self-Will (demanding reality obey your prayers), narrows into Self-Centeredness (feeling the cosmos revolves around you), and ends in Playing God (judging and condemning others).',
      visualIcon: ShieldAlert,
      takeaway: 'Key takeaway: Honest religion can silently become a weapon of the ego.'
    },
    {
      badge: 'Step 3 of 3: How to Explore',
      title: 'How the Simulators Work',
      highlight: 'Steer the Wheel & Shift the Center',
      description:
        'Rotate the Astrolabe at the top to change who is driving. Use the Cosmic Orrery to see what happens when you put yourself at the center of the universe versus the Divine Sun.',
      visualIcon: Orbit,
      takeaway: 'Key takeaway: Surrendering control restores cosmic and inner peace.'
    }
  ];

  if (!isOpen) return null;

  const slide = SLIDES[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:hidden bg-slate-900/50 backdrop-blur-md animate-fade-in">
      <div className="flex-1" onClick={onClose} />

      {/* Touch-Friendly Bottom Drawer Card in White & Orange */}
      <div className="bg-white border-t-2 border-orange-400 rounded-t-3xl p-6 shadow-2xl relative max-h-[88vh] overflow-y-auto">
        {/* Top Drag Handle & Close Button */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-orange-100">
          <div className="w-10 h-1 bg-orange-200 rounded-full mx-auto" />
          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-2 -mr-2 text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 mb-4">
          {SLIDES.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-6 bg-orange-500' : 'w-2 bg-orange-100'
              }`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <div className="text-center my-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-orange-600 font-bold block mb-1">
            {slide.badge}
          </span>
          <h2 className="text-2xl font-serif text-slate-900 font-normal mb-2">
            {slide.title}
          </h2>

          <div className="my-3 p-3 rounded-xl bg-orange-50 border border-orange-200 text-sm font-serif italic text-orange-950 font-medium">
            {slide.highlight}
          </div>

          <p className="text-xs sm:text-sm font-sans text-slate-700 leading-relaxed text-left mb-4">
            {slide.description}
          </p>

          <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-[11px] font-mono text-teal-800 flex items-center gap-2 text-left font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-600" />
            <span>{slide.takeaway}</span>
          </div>
        </div>

        {/* Bottom Thumb Navigation Bar */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-orange-100">
          {currentSlide > 0 ? (
            <button
              onClick={() => setCurrentSlide((prev) => prev - 1)}
              className="min-h-[46px] px-4 py-2 text-xs font-mono text-slate-700 hover:text-slate-900 bg-orange-50 rounded-xl flex items-center gap-1.5 active:scale-95 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="min-h-[46px] px-4 py-2 text-xs font-mono text-slate-500 hover:text-slate-800"
            >
              Skip Guide
            </button>
          )}

          {currentSlide < SLIDES.length - 1 ? (
            <button
              onClick={() => setCurrentSlide((prev) => prev + 1)}
              className="min-h-[46px] flex-1 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Next Point</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                onOpenInquest();
              }}
              className="min-h-[46px] flex-1 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Begin Experience</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
