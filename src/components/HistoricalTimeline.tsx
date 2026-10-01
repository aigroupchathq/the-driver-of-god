import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Anchor, Compass, Copy, Check, ArrowDownRight } from 'lucide-react';
import { HISTORICAL_ERAS, HistoricalEra } from '../data/historicalTimelineData';
import { soundEngine } from '../utils/audio';

export const HistoricalTimeline: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  const activeEra: HistoricalEra = HISTORICAL_ERAS[selectedIndex];

  // Auto-scroll timeline track when era changes
  useEffect(() => {
    if (timelineScrollRef.current) {
      const activeBtn = timelineScrollRef.current.children[selectedIndex] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && selectedIndex < HISTORICAL_ERAS.length - 1) {
        handleSelectEra(selectedIndex + 1);
      } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        handleSelectEra(selectedIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleSelectEra = (index: number) => {
    soundEngine.playSingingBowlBell();
    setSelectedIndex(index);
    setCopiedQuote(false);
  };

  const handleCopyQuote = () => {
    const textToCopy = `"${activeEra.quoteTranslation}" — ${activeEra.quoteAuthor} (${activeEra.canonicalFigure}, ${activeEra.century})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const scrollToChainStation = (stationNumber: string) => {
    const el = document.getElementById('the-chain');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="historical-timeline" className="relative py-24 sm:py-32 border-t border-stone-200 bg-[#fbf9f5] overflow-hidden">
      {/* Background Graticule Accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-orange-700 uppercase">
            <Compass className="w-3.5 h-3.5 text-orange-600" />
            <span>Chronology of the Will</span>
            <span className="text-stone-300">/</span>
            <span>Historical Descent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal tracking-tight leading-[1.15]">
            How the Chain Unfolded Across Civilizations
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-serif leading-relaxed">
            The progression from Pride to Playing God is not an invention of modern psychology. For three millennia, mystics, desert hermits, and philosophers witnessed this exact psychological mechanism manifest within their respective cultures.
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs text-stone-500 font-mono">
            <span>Station: {activeEra.chainStationNumber} · {activeEra.chainStation}</span>
            <span aria-hidden="true">·</span>
            <span>Era {selectedIndex + 1} of {HISTORICAL_ERAS.length}</span>
            <span aria-hidden="true">·</span>
            <span className="hidden sm:inline">Use ← → arrow keys to navigate</span>
          </div>
        </div>

        {/* Horizontal Timeline Track Bar */}
        <div className="relative mb-8 pb-4 border-b border-stone-200">
          {/* Top Axis Track Navigation Buttons */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Interactive Historical Track
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => selectedIndex > 0 && handleSelectEra(selectedIndex - 1)}
                disabled={selectedIndex === 0}
                aria-label="Previous philosophical era"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:text-stone-950 hover:border-stone-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors bg-white shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => selectedIndex < HISTORICAL_ERAS.length - 1 && handleSelectEra(selectedIndex + 1)}
                disabled={selectedIndex === HISTORICAL_ERAS.length - 1}
                aria-label="Next philosophical era"
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-700 hover:text-stone-950 hover:border-stone-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors bg-white shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Calibrated Hairline Horizontal Scrubber */}
          <div
            ref={timelineScrollRef}
            className="flex items-stretch gap-2 sm:gap-3 overflow-x-auto pb-4 pt-1 scrollbar-none no-scrollbar snap-x"
          >
            {HISTORICAL_ERAS.map((era, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={era.id}
                  onClick={() => handleSelectEra(index)}
                  className={`flex-shrink-0 snap-start text-left px-3.5 py-3 border transition-all duration-200 rounded-sm relative min-w-[170px] sm:min-w-[190px] ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-orange-500/30'
                      : 'bg-[#fdfbf7] text-stone-700 border-stone-300 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                    <span className={isSelected ? 'text-orange-400 font-semibold' : 'text-stone-500'}>
                      {era.yearRange}
                    </span>
                    <span className={`text-[10px] tracking-wider uppercase ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                      {era.chainStationNumber} {era.chainStation}
                    </span>
                  </div>
                  <div className={`text-sm font-serif font-medium leading-snug line-clamp-1 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {era.eraName}
                  </div>
                  <div className={`text-[11px] font-sans truncate mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {era.canonicalFigure}
                  </div>

                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rotate-45" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Curatorial Exhibit for Active Era */}
        <div className="bg-[#fdfbf7] border border-stone-300 rounded-sm shadow-sm overflow-hidden transition-all duration-300">
          {/* Era Header Banner */}
          <div className="p-6 sm:p-8 border-b border-stone-200 bg-gradient-to-r from-stone-50 via-white to-orange-50/20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 tracking-wider uppercase mb-1">
                  <span>{activeEra.century}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeEra.geography}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-orange-700">
                    Chain Station: {activeEra.chainStationNumber} ({activeEra.chainStation})
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-medium tracking-tight">
                  {activeEra.eraName}: <span className="italic text-stone-600">{activeEra.subTitle}</span>
                </h3>
              </div>

              <button
                onClick={() => scrollToChainStation(activeEra.chainStationNumber)}
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-orange-700 hover:text-orange-900 border border-orange-200 hover:border-orange-400 bg-orange-50/50 hover:bg-orange-100/50 px-3 py-1.5 rounded-xs transition-colors"
              >
                <span>View {activeEra.chainStation} in Chain</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Two-Column Archival Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
            {/* Left Column: The Historical Crucible & Canonical Inscription */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
                  The Canonical Inscription
                </span>

                {/* Classical Script Box */}
                <div className="p-5 bg-stone-900 text-stone-100 rounded-xs mb-4 border border-stone-800 relative group">
                  <div className="text-xs font-mono text-orange-400 tracking-wider uppercase mb-2">
                    {activeEra.keyWork}
                  </div>
                  <div className="text-sm font-serif italic text-stone-300 leading-relaxed tracking-wide mb-3">
                    {activeEra.originalQuote}
                  </div>
                  <div className="text-base font-serif text-stone-100 font-normal leading-relaxed border-t border-stone-800 pt-3">
                    “{activeEra.quoteTranslation}”
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-400">
                    <span>— {activeEra.quoteAuthor}</span>
                    <button
                      onClick={handleCopyQuote}
                      className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white transition-colors"
                    >
                      {copiedQuote ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1.5">
                    How the Mechanism Operated
                  </span>
                  <p className="text-sm sm:text-base font-serif text-stone-700 leading-relaxed">
                    {activeEra.chainMechanism}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                  Historical Setting
                </span>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {activeEra.historicalCrucible}
                </p>
              </div>
            </div>

            {/* Right Column: The Kenotic Antidote & Modern Self-Inquiry Echo */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-stone-50/50">
              <div>
                {/* The Kenotic Antidote */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-teal-800">
                    <Anchor className="w-3.5 h-3.5 text-teal-600" />
                    <span>The Kenotic Antidote of this Era</span>
                  </div>
                  <div className="p-4 bg-teal-50/70 border border-teal-200/80 rounded-xs text-teal-950 font-serif text-sm sm:text-base leading-relaxed">
                    {activeEra.kenoticAntidote}
                  </div>
                </div>

                {/* Contemporary Self-Inquiry Prompt */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-orange-800">
                    <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                    <span>Contemporary Mirror Prompt</span>
                  </div>
                  <div className="p-4 bg-orange-50/70 border border-orange-200/80 rounded-xs">
                    <p className="text-sm sm:text-base font-serif text-stone-800 italic leading-relaxed">
                      “{activeEra.modernEchoPrompt}”
                    </p>
                    <div className="mt-3 text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                      Take 30 seconds to hold this inquiry without defending yourself.
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Navigation Pill Indicator */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono text-stone-500">
                <div className="flex items-center gap-1.5">
                  {HISTORICAL_ERAS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectEra(i)}
                      aria-label={`Jump to era ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === selectedIndex
                          ? 'w-6 bg-orange-600'
                          : 'w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedIndex > 0 && (
                    <button
                      onClick={() => handleSelectEra(selectedIndex - 1)}
                      className="hover:text-stone-900 transition-colors flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>{HISTORICAL_ERAS[selectedIndex - 1].yearRange}</span>
                    </button>
                  )}
                  {selectedIndex < HISTORICAL_ERAS.length - 1 && (
                    <button
                      onClick={() => handleSelectEra(selectedIndex + 1)}
                      className="hover:text-stone-900 transition-colors flex items-center gap-1"
                    >
                      <span>{HISTORICAL_ERAS[selectedIndex + 1].yearRange}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
