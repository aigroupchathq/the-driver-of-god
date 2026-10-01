import React, { useState } from 'react';
import { CODEX_SCRIPTURES } from '../data/codexData';
import { BookOpen, Scroll, Globe, Sparkles } from 'lucide-react';
import { CodexScripture } from '../types';
import { CosmicBackdropElement } from './CosmicBackdropElement';

export const CodexSection: React.FC = () => {
  const [selectedScriptureId, setSelectedScriptureId] = useState<string>('katha-upanishad');
  const [activeTermIndex, setActiveTermIndex] = useState<number>(0);

  const currentScripture: CodexScripture =
    CODEX_SCRIPTURES.find((s) => s.id === selectedScriptureId) || CODEX_SCRIPTURES[0];

  const activeTerm = currentScripture.keyTerms[activeTermIndex] || currentScripture.keyTerms[0];

  return (
    <section id="the-codex" className="py-20 px-6 border-b border-orange-200/60 bg-white relative overflow-hidden">
      {/* Volumetric Universe Visual Elements in Background */}
      <CosmicBackdropElement position="top-right" variant="celestial-sextant-black" size="lg" intensity="medium" />
      <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="md" intensity="deep" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-600 font-bold mb-3">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Comparative Epistemological Codex</span>
            <span aria-hidden="true">·</span>
            <span>Section 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal tracking-tight mb-4">
            The Codex of the Unmasked Driver
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            Across millennia and languages—from Sanskrit Upanishads and Hebrew wisdom to Greek Desert Fathers and Sufi masters—the same devastating warning repeats: the gravest idolatry is not worshipping wood, but worshipping the God manufactured by one’s own ego.
          </p>
        </div>

        {/* Tradition Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-orange-50 rounded-2xl border border-orange-200 mb-8">
          {CODEX_SCRIPTURES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedScriptureId(item.id);
                setActiveTermIndex(0);
              }}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-colors ${
                selectedScriptureId === item.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{item.language.split(' ')[0]}</span>
              <span className={`hidden sm:inline ml-1.5 ${selectedScriptureId === item.id ? 'text-amber-100' : 'text-slate-400'}`}>
                ({item.reference.split(' ')[0]})
              </span>
            </button>
          ))}
        </div>

        {/* Main Codex Presentation Canvas */}
        <div className="card-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-md">
          {/* Top Inscription Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-orange-100 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-1">
                <Globe className="w-4 h-4 text-orange-500" />
                <span>{currentScripture.tradition}</span>
                <span aria-hidden="true">·</span>
                <span>{currentScripture.language}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-medium">
                {currentScripture.title}
              </h3>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                Canonical Reference
              </span>
              <span className="text-sm font-mono text-orange-700 font-bold">
                {currentScripture.reference}
              </span>
            </div>
          </div>

          {/* Original Script Plate in warm ivory */}
          <div className="p-6 sm:p-8 rounded-2xl bg-orange-50/60 border border-orange-200 mb-8 relative">
            <div className="text-xs font-mono text-orange-700 uppercase tracking-widest mb-3 font-bold">
              Archival Manuscript Plate
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-900 leading-relaxed tracking-wide whitespace-pre-line mb-4 font-normal">
              {currentScripture.originalScript}
            </p>

            <p className="text-xs sm:text-sm font-mono text-slate-600 leading-relaxed italic border-t border-orange-200/80 pt-3">
              {currentScripture.transliteration}
            </p>
          </div>

          {/* Literal Translation & Depth Exposition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-orange-100">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Literal Translation
              </h4>
              <p className="text-sm sm:text-base font-serif text-slate-900 leading-relaxed italic bg-white p-4 rounded-xl border border-orange-200 shadow-xs">
                “{currentScripture.literalTranslation}”
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                Curatorial & Psychological Exposition
              </h4>
              <p className="text-sm font-serif text-slate-700 leading-relaxed mb-3">
                {currentScripture.curatorialExposition}
              </p>
              <div className="p-3.5 bg-orange-50 border border-orange-200 rounded-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold block mb-1">
                  Psychological Reality:
                </span>
                <p className="text-xs font-sans text-slate-800 leading-relaxed">
                  {currentScripture.psychologicalInsight}
                </p>
              </div>
            </div>
          </div>

          {/* Key Term Etymological Decoder */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                Linguistic & Etymological Inspector (Select a Term)
              </span>
              <span className="text-xs font-mono text-orange-600 font-bold">
                {currentScripture.keyTerms.length} Key Terms
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {currentScripture.keyTerms.map((termItem, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTermIndex(idx)}
                  className={`p-3 text-left rounded-xl border transition-all ${
                    activeTermIndex === idx
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-orange-400 font-bold shadow-xs'
                      : 'bg-white text-slate-700 border-orange-200 hover:border-orange-300'
                  }`}
                >
                  <div className="text-base font-serif font-semibold">{termItem.term}</div>
                  <div className={`text-xs font-mono ${activeTermIndex === idx ? 'text-amber-100' : 'text-slate-500'}`}>
                    {termItem.transliteration}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Term Detail Plate */}
            {activeTerm && (
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase text-orange-700 font-bold mb-1">
                    Significance & Meaning:
                  </div>
                  <p className="text-sm font-serif text-slate-900">
                    {activeTerm.meaning}
                  </p>
                </div>
                <div className="sm:text-right max-w-sm">
                  <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                    Etymological Origin:
                  </div>
                  <p className="text-xs font-mono text-slate-600">
                    {activeTerm.etymology}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
