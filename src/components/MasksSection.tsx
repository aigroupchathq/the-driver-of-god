import React, { useState } from 'react';
import { MASKS_OF_GOD } from '../data/masksData';
import { Shield, Skull, Eye, AlertCircle, Sparkles } from 'lucide-react';
import { MaskOfGod } from '../types';
import { CosmicBackdropElement } from './CosmicBackdropElement';

export const MasksSection: React.FC = () => {
  const [selectedMaskId, setSelectedMaskId] = useState<string>('inquisitor');

  const activeMask: MaskOfGod =
    MASKS_OF_GOD.find((m) => m.id === selectedMaskId) || MASKS_OF_GOD[0];

  return (
    <section id="the-masks" className="py-20 px-6 border-b border-orange-200/60 bg-white relative overflow-hidden">
      {/* Volumetric Dark Cosmos Background Elements */}
      <CosmicBackdropElement position="top-right" variant="black-hole-singularity" size="lg" intensity="medium" />
      <CosmicBackdropElement position="bottom-left" variant="nebula-void" size="xl" intensity="subtle" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-600 font-bold mb-3">
            <Shield className="w-4 h-4 text-orange-500" />
            <span>Spiritual Shadow Work</span>
            <span aria-hidden="true">·</span>
            <span>Section 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal tracking-tight mb-4">
            The Five Masks of Playing God
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            The ego rarely proclaims openly: “I am God.” Instead, it adopts religious, moral, or philosophical masks that allow it to wield absolute power while maintaining an aura of piety or intellectual sophistication.
          </p>
        </div>

        {/* 5 Archetype Selection Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {MASKS_OF_GOD.map((mask, idx) => {
            const isSelected = selectedMaskId === mask.id;
            return (
              <button
                key={mask.id}
                onClick={() => setSelectedMaskId(mask.id)}
                className={`p-4 text-left rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-orange-400 font-bold shadow-md shadow-orange-500/20 ring-2 ring-orange-300'
                    : 'bg-white text-slate-700 border-orange-200 hover:border-orange-300 hover:bg-orange-50/50'
                }`}
              >
                <div className={`text-xs font-mono mb-1 ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>
                  Mask 0{idx + 1}
                </div>
                <div className="text-sm font-serif font-medium line-clamp-1">
                  {mask.title.replace('The ', '')}
                </div>
                <div className={`text-[11px] font-sans mt-1 line-clamp-2 ${isSelected ? 'text-amber-100' : 'text-slate-500'}`}>
                  {mask.epithet}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Mask Deconstruction Card */}
        <div className="card-white rounded-3xl border border-orange-200 p-6 sm:p-10 shadow-md">
          <div className="pb-6 border-b border-orange-100">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-1">
              <Skull className="w-4 h-4 text-orange-500" />
              <span>Anatomy of the Usurpation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal">
              {activeMask.title}
            </h3>
            <p className="text-sm font-serif italic text-orange-700 mt-1 font-medium">
              “{activeMask.epithet}”
            </p>
          </div>

          {/* Internal Monologue Quote Box */}
          <div className="my-6 p-5 rounded-2xl bg-orange-50/80 border border-orange-200">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
              Unconscious Internal Monologue
            </span>
            <p className="text-base sm:text-lg font-serif italic text-slate-900 leading-relaxed">
              {activeMask.internalMonologue}
            </p>
          </div>

          {/* Psychological & Spiritual Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold mb-1">
                  The Hidden Subconscious Agenda
                </h4>
                <p className="text-sm font-sans text-slate-700 leading-relaxed">
                  {activeMask.hiddenAgenda}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Symptom in Devotional or Moral Life
                </h4>
                <p className="text-sm font-sans text-slate-700 leading-relaxed">
                  {activeMask.symptomInSpiritualLife}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                  The Inevitable Catastrophic Collapse
                </h4>
                <p className="text-sm font-serif text-slate-800 leading-relaxed">
                  {activeMask.theCatastrophicFall}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold mb-1">
                  The Sacred Mirror (Ancient Scripture)
                </h4>
                <blockquote className="text-xs sm:text-sm font-serif italic text-orange-950 border-l-2 border-orange-500 pl-3 py-1 bg-orange-50/50 rounded-r-xl">
                  {activeMask.sacredMirror}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
