export type ChainLinkKey = 'pride' | 'self_will' | 'self_centeredness' | 'playing_god' | 'receptive_witness';

export interface ChainLink {
  id: string;
  order: number;
  title: string;
  ancientTerm: string;
  tradition: string;
  subtitle: string;
  egoMechanism: string;
  psychologicalRoot: string;
  theologicalConsequence: string;
  manifestationInDailyLife: string[];
  reversalTitle: string;
  reversalAncientTerm: string;
  reversalMechanism: string;
  reversalPractice: string;
  colorAccent: string;
}

export interface DiagnosticOption {
  text: string;
  subtext: string;
  driver: ChainLinkKey;
  chainStage: string;
  cognitiveSignature: string;
  weight: number;
}

export interface DiagnosticQuestion {
  id: number;
  scenario: string;
  context: string;
  options: DiagnosticOption[];
}

export interface DriverArchetype {
  id: string;
  name: string;
  ancientParallel: string;
  motto: string;
  coreVulnerability: string;
  theologyDistortion: string;
  psychologicalDefense: string;
  ancientRemedy: string;
  sacredTextQuote: {
    quote: string;
    source: string;
  };
}

export interface CodexScripture {
  id: string;
  tradition: string;
  language: string;
  title: string;
  reference: string;
  originalScript: string;
  transliteration: string;
  literalTranslation: string;
  curatorialExposition: string;
  psychologicalInsight: string;
  keyTerms: {
    term: string;
    transliteration: string;
    meaning: string;
    etymology: string;
  }[];
}

export interface MaskOfGod {
  id: string;
  title: string;
  epithet: string;
  internalMonologue: string;
  hiddenAgenda: string;
  symptomInSpiritualLife: string;
  theCatastrophicFall: string;
  sacredMirror: string;
}

export interface CinematicScene {
  id: string;
  sceneNumber: number;
  title: string;
  timestamp: string;
  framingRatio: string;
  cameraMovement: string;
  lightingTechnique: string;
  soundDesign: string;
  hermeticAxiom: string;
  anahataSymbolism: string;
  voiceover: string;
  visualAction: string;
}

export interface SpiritualNarrativeArc {
  id: string;
  arcNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  hermeticFocus: string;
  anahataCore: string;
  logline: string;
  solfeggioFrequency: string;
  colorTone: string;
  scenes: CinematicScene[];
}
