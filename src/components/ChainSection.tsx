import React, { useState } from 'react';
import { CHAIN_LINKS, CHAIN_SCENARIOS, ChainScenario } from '../data/chainData';
import { ShieldCheck } from 'lucide-react';
import { ScratchMirror } from './ScratchMirror';
import { CosmicBackdropElement } from './CosmicBackdropElement';
import { useLanguage } from '../context/LanguageContext';

export const ChainSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedLinkIndex, setSelectedLinkIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'descent' | 'reversal'>('descent');
  const [activeScenarioId, setActiveScenarioId] = useState<string>('unanswered-prayer');

  const selectedLink = CHAIN_LINKS[selectedLinkIndex];
  const activeScenario = CHAIN_SCENARIOS.find((s) => s.id === activeScenarioId) || CHAIN_SCENARIOS[0];

  const SCHOLIA: Record<string, string> = {
    pride: '“Scholion: The intellect does not observe God; it manufactures a god that validates its existing categories.” — Meister Eckhart',
    'self-will': '“Scholion: Incurvatus in se. The soul curved in upon itself demands that heaven obey its private ledger.” — St. Augustine',
    'self-centeredness': '“Scholion: When the ego becomes the center of the world, every tragedy is interpreted as a personal insult.” — Kierkegaard',
    'playing-god': '“Scholion: The ultimate catastrophe is not losing faith in God, but anointing oneself as God.” — Philokalia'
  };

  return (
    <section id="the-chain" className="py-20 px-6 border-b border-[#e7e5e4] relative overflow-hidden">
      {/* Volumetric Universe Visual Elements in Background */}
      <CosmicBackdropElement position="top-right" variant="dark-matter-web" size="lg" intensity="deep" />
      <CosmicBackdropElement position="bottom-left" variant="nebula-void" size="xl" intensity="medium" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-500 mb-3">
            <span>{t.chainLiber}</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'hi' ? 'चार-चरणीय पतन' : 'The Fourfold Descent'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal tracking-tight mb-4">
            {t.chainTitle}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-serif leading-relaxed">
            {t.chainSubtext}
          </p>
        </div>

        {/* Mode Selector Segmented Control (NO pills) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('descent')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                viewMode === 'descent'
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.chainDescentTab}
            </button>
            <button
              onClick={() => setViewMode('reversal')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                viewMode === 'reversal'
                  ? 'bg-orange-600 text-white font-medium'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.chainReversalTab}
            </button>
          </div>

          <div className="text-xs text-stone-500 font-mono">
            {viewMode === 'descent' ? 'State: Ego Usurping the Altar' : 'State: Creaturely Kenotic Humility'}
          </div>
        </div>

        {/* 4 Station Stepper (Clean unboxed grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CHAIN_LINKS.map((link, idx) => {
            const isSelected = selectedLinkIndex === idx;
            return (
              <button
                key={link.id}
                onClick={() => setSelectedLinkIndex(idx)}
                className={`p-4 text-left rounded-xl transition-all border ${
                  isSelected
                    ? 'hairline-card-active'
                    : 'hairline-card hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                  <span>Station 0{link.order}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />}
                </div>

                <div className="text-lg font-serif font-medium text-stone-900 mb-0.5">
                  {viewMode === 'descent' ? link.title : link.reversalTitle.split(' ')[0]}
                </div>

                <div className="text-xs font-serif italic text-stone-500 truncate">
                  {viewMode === 'descent' ? link.ancientTerm : link.reversalAncientTerm}
                </div>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Reading Canvas (70% main body, 30% margin sidebar) */}
        <div className="hairline-card rounded-2xl p-6 sm:p-10 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                Station 0{selectedLink.order} · {selectedLink.tradition}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal">
                {viewMode === 'descent' ? selectedLink.title : selectedLink.reversalTitle}
              </h3>
              <p className="text-xs font-serif italic text-stone-500 mt-1">
                Classical Designation: {viewMode === 'descent' ? selectedLink.ancientTerm : selectedLink.reversalAncientTerm}
              </p>
            </div>

            <div className="lg:text-right max-w-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-1">
                {viewMode === 'descent' ? 'Core Subtitle' : 'Spiritual Counter-Movement'}
              </span>
              <span className="text-sm font-serif text-stone-800">
                {selectedLink.subtitle}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
            {/* Main Body (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                  {viewMode === 'descent' ? 'Cognitive & Ego Mechanism' : 'The Ontological Reversal'}
                </h4>
                <p className="text-base sm:text-lg text-stone-800 font-serif leading-relaxed">
                  {viewMode === 'descent' ? selectedLink.egoMechanism : selectedLink.reversalMechanism}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                  Psychological Sub-Basement
                </h4>
                <p className="text-sm text-stone-700 font-sans leading-relaxed">
                  {selectedLink.psychologicalRoot}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-orange-700 mb-1.5 font-medium">
                  {viewMode === 'descent' ? 'Theological Distortion' : 'Living Reversal Practice'}
                </h4>
                <p className="text-sm sm:text-base text-stone-900 font-serif leading-relaxed">
                  {viewMode === 'descent' ? selectedLink.theologicalConsequence : selectedLink.reversalPractice}
                </p>
              </div>
            </div>

            {/* Margin Sidebar (4 cols) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-stone-200 lg:pl-6 pt-6 lg:pt-0 space-y-6">
              <div className="marginalia">
                {SCHOLIA[selectedLink.id] || SCHOLIA['pride']}
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
                  Observable Daily Symptoms
                </h4>
                <ul className="space-y-2 text-xs font-sans text-stone-600">
                  {selectedLink.manifestationInDailyLife.map((sym, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-0.5">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scratchable Mirror */}
        <ScratchMirror />

        {/* Live Scenario Crucible Simulator (Quiet editorial presentation) */}
        <div className="hairline-card rounded-2xl p-6 sm:p-8 mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                Crucible Simulator
              </span>
              <h3 className="text-xl font-serif text-stone-900 font-normal">
                Watch the Chain Cascade Through Living Crises
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {CHAIN_SCENARIOS.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => setActiveScenarioId(scen.id)}
                  className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                    activeScenarioId === scen.id
                      ? 'bg-stone-900 text-white font-medium'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {scen.id === 'unanswered-prayer' && 'Unanswered Prayer'}
                  {scen.id === 'theological-heresy' && 'Theological Other'}
                  {scen.id === 'unjust-suffering' && 'Innocent Suffering'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 p-4 rounded-xl bg-[#fdfbf7] border border-stone-200">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-1">
              Triggering Crucible:
            </span>
            <p className="text-sm font-serif text-stone-800 italic">
              “{activeScenario.trigger}”
            </p>
          </div>

          {/* 4 Cascading Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-mono text-stone-500 uppercase mb-1">1. Pride</div>
              <p className="text-xs font-serif text-stone-800 italic">
                {activeScenario.egoCascade.pride}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-mono text-stone-500 uppercase mb-1">2. Self-Will</div>
              <p className="text-xs font-serif text-stone-800 italic">
                {activeScenario.egoCascade.selfWill}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-mono text-stone-500 uppercase mb-1">3. Self-Centeredness</div>
              <p className="text-xs font-serif text-stone-800 italic">
                {activeScenario.egoCascade.selfCenteredness}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-xs font-mono text-stone-700 uppercase mb-1 font-semibold">4. Playing God</div>
              <p className="text-xs font-serif text-stone-900 italic">
                {activeScenario.egoCascade.playingGod}
              </p>
            </div>
          </div>

          {/* The Kenotic Reversal */}
          <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-teal-800 font-semibold block mb-0.5">
                The Kenotic Reversal:
              </span>
              <p className="text-xs sm:text-sm font-serif text-stone-800">
                {activeScenario.liberatedResponse}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
