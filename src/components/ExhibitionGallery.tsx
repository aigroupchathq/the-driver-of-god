import React, { useState } from 'react';
import { Eye, Maximize2, Sparkles, ZoomIn, Info, Shield, Layers } from 'lucide-react';
import { CosmicBackdropElement } from './CosmicBackdropElement';

interface GalleryPlate {
  id: string;
  accessionNumber: string;
  title: string;
  subtitle: string;
  medium: string;
  dimensions: string;
  curatorialNote: string;
  sacredScripture: string;
  hotspots: {
    id: string;
    x: number;
    y: number;
    label: string;
    insight: string;
  }[];
  svgIllustration: (activeHotspotId: string | null) => React.ReactNode;
}

export const ExhibitionGallery: React.FC = () => {
  const [selectedPlateIndex, setSelectedPlateIndex] = useState<number>(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const PLATES: GalleryPlate[] = [
    {
      id: 'plate-chariot',
      accessionNumber: 'ACC. 2800.BCE.01',
      title: 'The Charioteer of the Split Nous',
      subtitle: 'Anatomy of the Hijacked Perception',
      medium: 'Burnished gold leaf and iron gall ink on aged linen gesso',
      dimensions: '144 × 96 cm · Curatorial Archive',
      curatorialNote:
        'Depicting the crisis described in Kaṭha Upaniṣad 1.3.3 and Plato’s Phaedrus: the pure Witness sits serenely behind, while the false ego-maker (Ahaṁkāra) wrestles the reins from higher discernment, steering the horses into temporal madness.',
      sacredScripture: '“The senses are wild horses, bolting at the scents of the roadside when the charioteer falls asleep.” — Kaṭha Upaniṣad',
      hotspots: [
        {
          id: 'atman-witness',
          x: 28,
          y: 35,
          label: 'The Silent Lord (Ātman)',
          insight: 'The unconditioned observer. It never touches the reins and never panics; it simply illuminates the journey with pure awareness.'
        },
        {
          id: 'buddhi-driver',
          x: 48,
          y: 40,
          label: 'The Charioteer (Buddhi)',
          insight: 'Higher discriminating wisdom. When corrupted by pride, it ceases to listen to the Lord and rationalizes its own ambition as divine decree.'
        },
        {
          id: 'horses-senses',
          x: 75,
          y: 60,
          label: 'The Horses of Instinct (Indriyas)',
          insight: 'Sensory drives and instincts. Neither evil nor holy in themselves, but lethal when undirected by transcendent discernment.'
        }
      ],
      svgIllustration: (activeId) => (
        <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="currentColor">
          <defs>
            <radialGradient id="chariotGoldWhite" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="#fdfbf7" />
          <circle cx="400" cy="250" r="320" fill="url(#chariotGoldWhite)" />

          <line x1="60" y1="420" x2="740" y2="420" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />

          {/* Chariot Wheel */}
          <circle cx="230" cy="380" r="55" stroke="#ea580c" strokeWidth="3" />
          <circle cx="230" cy="380" r="14" fill="#f59e0b" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="230"
              y1="380"
              x2={230 + 55 * Math.cos((deg * Math.PI) / 180)}
              y2={380 + 55 * Math.sin((deg * Math.PI) / 180)}
              stroke="#d97706"
              strokeWidth="1.5"
            />
          ))}

          {/* Chariot Shell */}
          <path
            d="M160 360 L190 260 L320 260 L300 370 Z"
            stroke="#ea580c"
            strokeWidth="2.5"
            fill="rgba(254, 243, 199, 0.4)"
          />

          {/* Rider (Atman) */}
          <circle cx="225" cy="210" r="22" stroke="#d97706" strokeWidth="2" fill="rgba(251, 191, 36, 0.25)" />
          <circle cx="225" cy="210" r="38" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <path d="M225 232 L225 295" stroke="#d97706" strokeWidth="2.5" />
          <path d="M210 260 L240 260" stroke="#d97706" strokeWidth="2" />

          {/* Driver */}
          <circle cx="310" cy="190" r="20" stroke="#ea580c" strokeWidth="2.5" fill="rgba(234, 88, 12, 0.2)" />
          <path d="M310 210 L310 280" stroke="#ea580c" strokeWidth="3" />
          <path d="M310 235 L380 220" stroke="#ea580c" strokeWidth="2.5" />

          {/* Reins */}
          <path
            d="M380 220 Q480 180 580 240"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeDasharray={activeId === 'buddhi-driver' ? '4 2' : 'none'}
          />

          {/* Horses */}
          <g stroke="#475569" strokeWidth="2.5">
            <path d="M570 280 Q640 210 690 230 L710 320 L660 370 L570 340 Z" fill="rgba(226, 232, 240, 0.4)" />
            <path d="M680 230 Q720 160 750 170 L760 200 L710 260 Z" fill="rgba(254, 215, 170, 0.4)" />
            <line x1="590" y1="340" x2="570" y2="420" stroke="#64748b" strokeWidth="2" />
            <line x1="680" y1="360" x2="700" y2="420" stroke="#64748b" strokeWidth="2" />
          </g>
        </svg>
      )
    },
    {
      id: 'plate-throne',
      accessionNumber: 'ACC. 1400.JOB.02',
      title: 'The Throne & The Burnished Mirror',
      subtitle: 'The Optical Illusion of Apotheosis',
      medium: 'Distemper, crushed obsidian, and antique silver leaf on vellum',
      dimensions: '120 × 90 cm · Curatorial Archive',
      curatorialNote:
        'An allegorical meditation on Job 40:8: “Would you discredit my justice? Would you condemn Me that you may be justified?” The finite ego builds a magnificent golden throne in the temple of the mind, only to find that the throne holds a mirror reflecting its own terrified gaze.',
      sacredScripture: '“The mind builds a statue of its own opinions, crowns it with divine names, and executes anyone who fails to prostrate.” — Evagrius Ponticus',
      hotspots: [
        {
          id: 'stolen-crown',
          x: 50,
          y: 24,
          label: 'The Crown of Stolen Light',
          insight: 'The human impulse to baptize personal grievances with absolute divine authorization.'
        },
        {
          id: 'burnished-mirror',
          x: 50,
          y: 50,
          label: 'The Mirror of Narcissus',
          insight: 'Looking for God, the unexamined soul only meets its own psychological defense mechanisms.'
        },
        {
          id: 'cracked-pedestal',
          x: 50,
          y: 80,
          label: 'The Crumbling Foundation of Self-Will',
          insight: 'A throne erected on mortal contingency cannot support cosmic sovereignty; anxiety is inevitable.'
        }
      ],
      svgIllustration: (activeId) => (
        <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="currentColor">
          <rect width="800" height="500" fill="#fefcf9" />

          {/* Dais Steps */}
          <polygon points="200,440 600,440 550,380 250,380" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          <polygon points="250,380 550,380 510,330 290,330" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />

          {/* Throne Backrest in warm orange */}
          <path
            d="M320 330 L320 140 Q400 90 480 140 L480 330 Z"
            stroke="#ea580c"
            strokeWidth="3"
            fill="rgba(254, 237, 213, 0.7)"
          />

          {/* Mirror */}
          <ellipse cx="400" cy="230" rx="65" ry="90" stroke="#f59e0b" strokeWidth="3" fill="#ffffff" />
          <ellipse cx="400" cy="230" rx="58" ry="82" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 2" />

          {/* Observer in Mirror */}
          <circle cx="400" cy="210" r="18" fill="#cbd5e1" />
          <path d="M370 270 Q400 240 430 270 L430 300 L370 300 Z" fill="#94a3b8" />

          {/* Crown */}
          <path
            d="M360 120 L375 75 L400 95 L425 75 L440 120 Z"
            stroke="#f59e0b"
            strokeWidth="2.5"
            fill="#fef08a"
          />
        </svg>
      )
    },
    {
      id: 'plate-whirlwind',
      accessionNumber: 'ACC. 0580.JOB.03',
      title: 'The Voice from the Whirlwind',
      subtitle: 'The Demolition of the Human Theological Courtroom',
      medium: 'Carbon pigment, cinnabar wash, and gold dust on parchment',
      dimensions: '135 × 100 cm · Curatorial Archive',
      curatorialNote:
        'Illustrating the turning point of Job 38. The theological debate collapses as God speaks not in propositional doctrines, but as the unconditioned creative tempest. Job places his hand over his mouth, abandoning his moral litigation.',
      sacredScripture: '“Behold, I am vile; what shall I answer You? I lay my hand upon my mouth.” — Job 40:4',
      hotspots: [
        {
          id: 'vortex-core',
          x: 50,
          y: 35,
          label: 'The Cosmic Whirlwind',
          insight: 'The transcendent order that refuses to be tamed by human moral categories or transaction formulas.'
        },
        {
          id: 'humbled-creature',
          x: 25,
          y: 75,
          label: 'The Hand over the Mouth',
          insight: 'The birth of genuine holiness: the silence that begins when the ego ceases to lecture the infinite.'
        },
        {
          id: 'dissolving-court',
          x: 75,
          y: 80,
          label: 'The Dissolving Courtroom',
          insight: 'Human theological systems scattered like autumn leaves before the primordial ground of Being.'
        }
      ],
      svgIllustration: (activeId) => (
        <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="currentColor">
          <rect width="800" height="500" fill="#faf8f5" />

          {/* Whirlwind Spiral in Amber-Orange */}
          {[1, 2, 3, 4, 5, 6, 7].map((ring) => (
            <ellipse
              key={ring}
              cx="400"
              cy="200"
              rx={ring * 45}
              ry={ring * 22}
              stroke="#f97316"
              strokeWidth="1.5"
              strokeDasharray={`${ring * 8} ${ring * 5}`}
              transform={`rotate(${ring * 18} 400 200)`}
              opacity={0.85 - ring * 0.08}
            />
          ))}

          {/* Job Kneeling */}
          <circle cx="210" cy="340" r="16" stroke="#ea580c" strokeWidth="2" fill="#fff7ed" />
          <path d="M210 356 L205 400" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M205 370 L220 345 L215 340" stroke="#f59e0b" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'plate-chain',
      accessionNumber: 'ACC. 1200.TAS.04',
      title: 'The Four Links of the Usurped Scepter',
      subtitle: 'Pride → Self-Will → Self-Centeredness → Playing God',
      medium: 'Illuminated mineral pigment on Moroccan handmade paper',
      dimensions: '160 × 60 cm · Curatorial Archive',
      curatorialNote:
        'A topological diagram depicting the four links of psychological decay: the golden crown at the zenith unravels step-by-step into heavy shackles, showing that playing God is the ultimate imprisonment of the self.',
      sacredScripture: '“Whoever makes himself a god becomes the prisoner of the altar he built.” — Rumi',
      hotspots: [
        {
          id: 'link-pride',
          x: 20,
          y: 40,
          label: 'Link 1: Pride',
          insight: 'The unexamined assumption that one’s own intellectual horizon is equivalent to divine truth.'
        },
        {
          id: 'link-will',
          x: 40,
          y: 45,
          label: 'Link 2: Self-Will',
          insight: 'Refusing to yield personal veto power; treating prayer as an executive lever of control.'
        },
        {
          id: 'link-center',
          x: 60,
          y: 50,
          label: 'Link 3: Self-Centeredness',
          insight: 'The Copernican inversion: evaluating cosmic reality strictly by personal convenience.'
        },
        {
          id: 'link-god',
          x: 80,
          y: 55,
          label: 'Link 4: Playing God',
          insight: 'Ascending the throne: issuing condemnation and pronouncing verdicts upon creation.'
        }
      ],
      svgIllustration: (activeId) => (
        <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="currentColor">
          <rect width="800" height="500" fill="#faf8f5" />

          {/* Link 1 */}
          <ellipse cx="160" cy="250" rx="65" ry="40" stroke="#f59e0b" strokeWidth="4" fill="#fef3c7" />
          <text x="160" y="255" textAnchor="middle" fill="#78350f" fontSize="14" fontFamily="serif" fontWeight="bold">Pride</text>

          <line x1="225" y1="250" x2="255" y2="250" stroke="#ea580c" strokeWidth="3" />

          {/* Link 2 */}
          <ellipse cx="320" cy="250" rx="65" ry="40" stroke="#ea580c" strokeWidth="4" fill="#fed7aa" />
          <text x="320" y="255" textAnchor="middle" fill="#7c2d12" fontSize="14" fontFamily="serif" fontWeight="bold">Self-Will</text>

          <line x1="385" y1="250" x2="415" y2="250" stroke="#ea580c" strokeWidth="3" />

          {/* Link 3 */}
          <ellipse cx="480" cy="250" rx="65" ry="40" stroke="#ea580c" strokeWidth="4" fill="#ffedd5" />
          <text x="480" y="255" textAnchor="middle" fill="#9a3412" fontSize="13" fontFamily="serif" fontWeight="bold">Self-Centered</text>

          <line x1="545" y1="250" x2="575" y2="250" stroke="#e11d48" strokeWidth="3" />

          {/* Link 4 */}
          <ellipse cx="640" cy="250" rx="65" ry="40" stroke="#e11d48" strokeWidth="4" fill="#ffe4e6" />
          <text x="640" y="255" textAnchor="middle" fill="#9f1239" fontSize="13" fontFamily="serif" fontWeight="bold">Playing God</text>
        </svg>
      )
    }
  ];

  const currentPlate = PLATES[selectedPlateIndex];
  const activeHotspot = currentPlate.hotspots.find((h) => h.id === activeHotspotId);

  return (
    <section id="exhibition-gallery" className="py-20 px-6 border-b border-orange-200/60 bg-white relative overflow-hidden">
      {/* Volumetric Dark Cosmos Background Elements */}
      <CosmicBackdropElement position="top-right" variant="dark-matter-web" size="lg" intensity="deep" />
      <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="xl" intensity="medium" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-orange-600 font-bold mb-3">
            <Layers className="w-4 h-4 text-orange-500" />
            <span>Curatorial Archive & Visual Codex</span>
            <span aria-hidden="true">·</span>
            <span>Exhibition Plates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal tracking-tight mb-4">
            The Visual Codex of the Mind
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            High-fidelity allegorical illustrations depicting the psychological mechanics of the hijacked soul. Tap any illuminated symbol to reveal its hidden ontological diagnosis.
          </p>
        </div>

        {/* Plate Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-orange-50 rounded-2xl border border-orange-200 mb-8">
          {PLATES.map((plate, pIdx) => (
            <button
              key={plate.id}
              onClick={() => {
                setSelectedPlateIndex(pIdx);
                setActiveHotspotId(null);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-colors ${
                selectedPlateIndex === pIdx
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Plate 0{pIdx + 1}: {plate.title.split(' ')[1] || plate.title}</span>
            </button>
          ))}
        </div>

        {/* Exhibition Presentation Frame */}
        <div className="card-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-md">
          {/* Plate Title & Accession Ribbon */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-orange-100 mb-6">
            <div>
              <span className="text-xs font-mono text-orange-700 font-bold block mb-1">
                {currentPlate.accessionNumber} · {currentPlate.dimensions}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900">
                {currentPlate.title}
              </h3>
              <p className="text-xs font-serif italic text-slate-500 mt-1">
                {currentPlate.subtitle}
              </p>
            </div>

            <div className="text-xs text-slate-500 font-mono sm:text-right max-w-xs">
              <span className="block text-orange-800 uppercase tracking-wider font-semibold mb-1">Medium & Support</span>
              {currentPlate.medium}
            </div>
          </div>

          {/* Interactive Artwork Display */}
          <div className="relative aspect-16/9 w-full bg-slate-50 rounded-2xl overflow-hidden border border-orange-200 shadow-md mb-8 group">
            {currentPlate.svgIllustration(activeHotspotId)}

            {/* Interactive Hotspot Nodes */}
            {currentPlate.hotspots.map((spot) => {
              const isSelected = activeHotspotId === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(isSelected ? null : spot.id)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  aria-label={`Inspect ${spot.label}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none"
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-orange-500' : 'bg-orange-400'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-white transition-all ${
                        isSelected ? 'bg-orange-600 scale-125' : 'bg-orange-500'
                      }`}
                    />
                  </span>
                </button>
              );
            })}

            {/* Instruction Callout Overlay */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-orange-200 text-[11px] font-mono px-3 py-1.5 rounded-xl text-slate-700 flex items-center gap-2 shadow-xs">
              <ZoomIn className="w-3.5 h-3.5 text-orange-500" />
              <span>Tap pulsing nodes on canvas to inspect symbolic anatomy</span>
            </div>
          </div>

          {/* Active Hotspot Inspector Card */}
          {activeHotspot && (
            <div className="mb-6 p-4 rounded-2xl bg-orange-50 border border-orange-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold block mb-1">
                  Active Symbol: {activeHotspot.label}
                </span>
                <p className="text-sm font-serif text-slate-800">
                  {activeHotspot.insight}
                </p>
              </div>
              <button
                onClick={() => setActiveHotspotId(null)}
                className="text-xs font-mono text-slate-500 hover:text-slate-800 self-start sm:self-center font-semibold"
              >
                Close
              </button>
            </div>
          )}

          {/* Curatorial Note & Sacred Inscription */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-orange-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 block">
                Curatorial Note
              </span>
              <p className="text-sm font-serif text-slate-700 leading-relaxed">
                {currentPlate.curatorialNote}
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 block">
                Sacred Inscription
              </span>
              <blockquote className="text-sm font-serif italic text-orange-900 border-l-2 border-orange-500 pl-3 py-1 leading-relaxed bg-orange-50/40 rounded-r-xl">
                {currentPlate.sacredScripture}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
