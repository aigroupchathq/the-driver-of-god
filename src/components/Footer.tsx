import React from 'react';
import { CosmicBackdropElement } from './CosmicBackdropElement';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-orange-200 bg-orange-50/40 text-slate-600 relative overflow-hidden">
      {/* Volumetric Dark Cosmos Background Elements */}
      <CosmicBackdropElement position="top-right" variant="dark-matter-web" size="md" intensity="subtle" />
      <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="md" intensity="medium" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-orange-200">
          <div>
            <div className="text-lg font-serif font-bold text-slate-900 mb-2 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span>The Driver of God</span>
            </div>
            <p className="text-xs font-serif leading-relaxed text-slate-600">
              An interactive philosophical inquiry into the epistemology of the sacred, cognitive shadow work, and the perennial warning against spiritual idolatry.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-orange-700 font-bold mb-3">
              Canonical & Philosophical Sources
            </div>
            <ul className="text-xs font-serif space-y-1.5 text-slate-600">
              <li>Kaṭha Upaniṣad (1.3.3–4) — Allegory of the Chariot</li>
              <li>Bhagavad Gītā (3.27) — Ahamkāra and the Illusion of Doership</li>
              <li>The Book of Job (38–41) — The Voice from the Whirlwind</li>
              <li>Evagrius Ponticus — The Praktikos & The Philokalia</li>
              <li>Muhyiddin Ibn ‘Arabi — Fuṣūṣ al-Ḥikam</li>
              <li>C.G. Jung — Psychological Types & Ego Inflation</li>
              <li>Hermetic Corpus — As Above, So Below</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-orange-700 font-bold mb-3">
              The Guiding Principle
            </div>
            <blockquote className="text-xs font-serif italic text-slate-700 border-l-2 border-orange-400 pl-3 leading-relaxed">
              “The most perilous idol is not the golden calf erected in the desert, but the God who shares your exact enmities, justifies your pride, and never contradicts your desires.”
            </blockquote>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 font-medium">
          <div>
            <span>Curated Archival Edition</span>
            <span className="mx-2">·</span>
            <span>White & Orange-Yellow Luminous Theme</span>
          </div>
          <div>
            <span className="text-orange-700 font-semibold">“Know who sits on the throne of your mind.”</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
