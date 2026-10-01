import React from 'react';
import { ArrowDown, Eye, Layers } from 'lucide-react';
import { InteractiveAstrolabe } from './InteractiveAstrolabe';
import { CosmicBackdropElement } from './CosmicBackdropElement';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-16 pb-24 px-6 border-b border-[#e7e5e4] overflow-hidden">
      {/* Volumetric Deep Space Universe Elements in Background */}
      <CosmicBackdropElement position="top-right" variant="black-hole-singularity" size="xl" intensity="deep" />
      <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="lg" intensity="deep" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Curatorial Header Ribbon - Clean Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-500 mb-6">
          <span>{t.heroCuratorialRibbon}</span>
          <span aria-hidden="true">·</span>
          <span>{t.heroBookNumber}</span>
          <span aria-hidden="true">·</span>
          <span>{t.heroArchiveLabel}</span>
        </div>

        {/* Hero Title with Balanced Leading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 font-normal tracking-tight leading-[1.12] mb-6">
            {t.heroQuestion1}
            <br />
            <span className="text-orange-600 underline decoration-orange-300 underline-offset-8">{t.heroQuestion2}</span>
          </h1>

          <p className="text-lg lg:text-xl text-stone-700 font-serif leading-relaxed max-w-2xl mb-8">
            {t.heroSubtext}
          </p>

          {/* Clean typographic progression sequence (unboxed) */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-stone-600 mb-10 pb-4 border-b border-stone-200">
            <span className="font-semibold text-stone-900">{t.heroStation1}</span>
            <span className="text-orange-500" aria-hidden="true">→</span>
            <span className="font-semibold text-stone-900">{t.heroStation2}</span>
            <span className="text-orange-500" aria-hidden="true">→</span>
            <span className="font-semibold text-stone-900">{t.heroStation3}</span>
            <span className="text-orange-500" aria-hidden="true">→</span>
            <span className="font-bold text-orange-600">{t.heroStation4}</span>
          </div>
        </div>

        {/* Tactile Celestial Instrument: The Astrolabe of the Psyche */}
        <InteractiveAstrolabe />

        {/* Editorial Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-stone-200">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#the-mirror"
              className="px-5 py-2.5 text-xs font-sans uppercase tracking-wider font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded transition-colors shadow-xs inline-flex items-center gap-2 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t.heroBtnInquest}</span>
            </a>

            <a
              href="#inner-light-studio"
              className="px-4 py-2.5 text-xs font-sans uppercase tracking-wider font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200/80 rounded transition-colors inline-flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-orange-600" />
              <span>{t.heroBtnStudio}</span>
            </a>

            <a
              href="#the-chariot"
              className="px-3 py-2 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors inline-flex items-center gap-1.5"
            >
              <span>{t.heroBtnChariot}</span>
              <ArrowDown className="w-3 h-3 text-orange-500" />
            </a>
          </div>

          <div className="text-xs text-stone-500 font-serif italic max-w-sm sm:text-right">
            {t.heroQuote}
          </div>
        </div>
      </div>
    </section>
  );
};
