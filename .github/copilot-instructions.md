# GitHub Copilot Custom Instructions for "The Driver of God"

## 1. Project Overview & Identity
- **Repository**: `the-driver-of-god`
- **Domain**: An interactive philosophical treatise, psychological diagnostic tool, and contemplative audiovisual web application exploring the transition from **Pride** → **Self-Will** → **Self-Centeredness** → **Playing God**, counterbalanced by **Kenosis** (contemplative surrender).
- **Tone**: Reverent, scholarly, contemplative, precise, and museum-grade. Avoid modern corporate jargon, gamified buzzwords, or superficial self-help phrasing.

---

## 2. Technical Stack & Architecture
- **Framework**: React 19 (Functional components, custom hooks, strictly typed TypeScript).
- **Build Tool**: Vite 8 (with relative asset pathing `base: './'` for GitHub Pages compatibility).
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";` in `src/index.css`).
  - **No inline styles** unless calculating dynamic SVG coordinates, rotations, or Canvas geometries.
  - **No external CSS modules or separate CSS files**.
- **Icons**: `lucide-react`.
- **Sound**: Native Web Audio API (`src/utils/audio.ts`). No heavy external audio libraries. Synthesizes gentle singing bowl bells, harmonic drones, and solfeggio frequencies.
- **Persistence**: Browser `localStorage` via `src/utils/progressionStorage.ts` (strictly client-side, zero personal tracking, same-origin sandboxed).

---

## 3. Design System & Frontend Discipline
When writing or refactoring UI components, strictly follow these rules:

### A. Zero-Pill & Metadata Discipline
- **Never wrap static metadata** (dates, category names, station numbers, authors) in rounded pill capsules or colored badge chips.
- Render metadata as clean, unboxed text separated by typographic bullets (`·` or `/`), e.g.:
  `Station 01 · Vedic Antiquity · c. 800 BCE`
- Segmented controls and filter buttons may be functional buttons (`<button>`), but keep them restrained with flat borders or subtle background changes.

### B. Typographic Hierarchy
- **Headings & Classical Inscriptions**: Serif typography (`font-serif`, Newsreader / Cormorant / Cinzel aesthetic).
- **System Labels, Coordinates & Station Codes**: Monospace typography (`font-mono`, e.g. `text-xs font-mono tracking-widest uppercase`).
- **Body & Explanatory Prose**: Highly legible serif or clean neutral sans (`font-serif leading-relaxed text-stone-700`).

### C. Color Palette
- **Backgrounds**: Warm ivory/porcelain surfaces (`bg-[#faf8f5]`, `bg-[#fdfbf7]`, `bg-stone-50`).
- **Dividers & Hairlines**: Fine warm stone borders (`border-stone-200`, `border-stone-300`).
- **Accents**: Solar amber, ochre, terracotta, and deep orange (`orange-600`, `amber-700`), with quiet sage/teal accents for Kenosis (`teal-700`, `emerald-800`).
- **Dark Inversion Cards**: Deep charcoal slate (`bg-stone-900 text-stone-100`) for contemplative focal elements.

### D. Accessibility & Mobile Requirements
- Touch targets must be at least **44×44px** on interactive elements.
- Dial gestures and drag tracking must bind `e.stopPropagation()` on clickable child buttons to prevent gesture conflict on touchscreens.

---

## 4. Key Files & Reference Architecture
- `src/App.tsx`: Main layout, orchestration, and audio/modal state management.
- `src/components/ChainSection.tsx`: The primary 4-station progression (Pride → Self-Will → Self-Centeredness → Playing God).
- `src/components/InteractiveAstrolabe.tsx`: Drag-and-dial astrolabe wheel with quadrant angle calculations.
- `src/components/HistoricalTimeline.tsx`: Horizontal multi-era chronological scrubber.
- `src/components/DiagnosticSection.tsx`: Psychological self-inventory and multi-session historical trend tracker.
- `src/components/KenosisChamber.tsx`: Fullscreen 4-stage meditative breathing sanctuary.
- `src/components/InnerLightStudio.tsx`: 9:16 vertical cinematic studio with solfeggio audio generator.
- `src/utils/audio.ts`: Web Audio API oscillator, gain envelope, and biquad filter nodes.
- `src/utils/progressionStorage.ts`: Validated, bounded local storage progression manager.

---

## 5. Coding Conventions for Copilot
1. Always write TypeScript with explicit interfaces; avoid `any`.
2. Do not remove or stub existing working components; maintain full functionality.
3. When adding sound triggers, utilize `soundEngine.playSingingBowlBell()` or subtle gain ramps in `src/utils/audio.ts`.
4. Ensure all new components support dark/light contrast gracefully and conform to the museum-grade aesthetic.
