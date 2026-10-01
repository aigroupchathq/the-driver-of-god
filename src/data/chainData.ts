import { ChainLink } from '../types';

export const CHAIN_LINKS: ChainLink[] = [
  {
    id: 'pride',
    order: 1,
    title: 'Pride',
    ancientTerm: 'Mada / Ga’on / Hyperēphania',
    tradition: 'Sanskrit / Hebrew / Patristic Greek',
    subtitle: 'The Primordial Epistemological Blind Spot',
    egoMechanism: 'The mind quietly assumes that its own perceptual apparatus, moral framework, and cognitive horizon are the benchmark of reality.',
    psychologicalRoot: 'Terror of contingency. To admit one cannot fathom the ultimate causes of existence creates unbearable vertigo. The ego converts ignorance into dogmatic certainty to preserve psychological equilibrium.',
    theologicalConsequence: 'God ceases to be an ungraspable transcendent mystery and becomes a concept domesticated within the boundaries of the believer’s intellect.',
    manifestationInDailyLife: [
      'Contempt for those whose theological or moral framing differs from your own.',
      'Inability to sit with the answer "I do not know" in matters of suffering or divine justice.',
      'Mistaking intellectual mastery over religious texts for actual spiritual transformation.'
    ],
    reversalTitle: 'Kenosis (Radical Humility)',
    reversalAncientTerm: 'Śūnyatā / Anaw / Tapeinophrosyne',
    reversalMechanism: 'Voluntary emptying of epistemic self-certainty; embracing the cloud of unknowing where the creature acknowledges the infinite gulf between concept and reality.',
    reversalPractice: 'Apophatic contemplation: Releasing all mental idols and recognizing that any God you can comprehend is not God.',
    colorAccent: '#d97706' // Warm Amber
  },
  {
    id: 'self-will',
    order: 2,
    title: 'Self-Will',
    ancientTerm: 'Incurvatus in Se / Ahamkara-Iccha',
    tradition: 'Augustinian Latin / Advaita Vedanta',
    subtitle: 'The Insistence on Sovereign Terms',
    egoMechanism: 'Once pride establishes the illusion of self-competence, self-will demands that reality unfold according to the individual’s timeline, preferences, and moral vetoes.',
    psychologicalRoot: 'Anxiety masked as agency. Self-will is the refusal to surrender control over outcomes. In spiritual practice, it converts prayer from communion into transactional bargaining.',
    theologicalConsequence: 'Prayer degenerates into a divine vending machine. God is treated as an executive power obligated to execute the petitioner’s plans.',
    manifestationInDailyLife: [
      'Subconscious resentment toward God or the universe when life plans unravel.',
      'Using spiritual rituals, sacrifices, or ascetic feats to put God in one’s debt.',
      'Chronic inner restlessness and irritability when circumstances defy personal control.'
    ],
    reversalTitle: 'Surrender (Amor Fati / Islam / Prapatti)',
    reversalAncientTerm: 'Prapatti / Taslim / Thy Will Be Done',
    reversalMechanism: 'Relinquishing the compulsive demand to govern the cosmos; yielding personal agency to the transcendent order without conditions or passive fatalism.',
    reversalPractice: 'The Prayer of Relinquishment: "Not as I will, but as Thou wilt"—active alignment with what is, rather than resistance to what must be.',
    colorAccent: '#ea580c' // Terracotta / Crimson Ochre
  },
  {
    id: 'self-centeredness',
    order: 3,
    title: 'Self-Centeredness',
    ancientTerm: 'Aham-Sphurana Warped / Narcissus Mythos',
    tradition: 'Classical Hellenic / Vedantic Psychology',
    subtitle: 'The Copernican Inversion of the Soul',
    egoMechanism: 'The cosmos is recalibrated so that every event, blessing, catastrophe, and revelation is measured strictly by how it affects ME.',
    psychologicalRoot: 'Infantile omnipotence. The ego remains trapped in the developmental delusion that it is the epicenter of the drama. Other souls and the divine itself become supporting cast members.',
    theologicalConsequence: 'God is evaluated by customer satisfaction. Faith waxes when personal fortune flourishes and collapses into nihilistic grievance when personal comfort is threatened.',
    manifestationInDailyLife: [
      'Asking "Why did this happen to ME?" rather than "What does this demand of me?"',
      'Measuring the righteousness of a community or doctrine by how comfortable it makes you feel.',
      'Experiencing spiritual jealousy when others receive unmerited blessings or spiritual acclaim.'
    ],
    reversalTitle: 'Self-Forgetfulness (I-Thou Communion)',
    reversalAncientTerm: 'Bhakti / Agape / Fana',
    reversalMechanism: 'The Copernican revolution of the spirit: displacing the self from the center and gazing outward in selfless reverence for the Other.',
    reversalPractice: 'Selfless service (Karma Yoga / Seva): Acting without clinging to the fruit of action, seeing the divine countenance in every suffering face.',
    colorAccent: '#dc2626' // Deep Blood Clay
  },
  {
    id: 'playing-god',
    order: 4,
    title: 'Playing God',
    ancientTerm: 'The Usurpation / Shirk Khafi / Genesis 3:5',
    tradition: 'Abrahamic & Mystical Anatomy',
    subtitle: 'The Throne Usurped in the Temple of the Soul',
    egoMechanism: 'The culmination of the chain: the human ego ascends the throne of the universe within its own consciousness, issuing final decrees of judgment, condemnation, and cosmic justice.',
    psychologicalRoot: 'Splitting and projection. Terrified of its own shadow, helplessness, and mortality, the ego cloaks itself in divine mantle to execute wrath and sanctify prejudice.',
    theologicalConsequence: 'The ultimate blasphemy: mistaking one’s own hatred for holy zeal, one’s own prejudice for divine law, and one’s own voice for the voice of the Creator.',
    manifestationInDailyLife: [
      'Declaring with absolute moral finality who is damned, who is excluded, and who is beyond mercy.',
      'Attempting to micromanage the lives, consciences, and spiritual paths of other human beings.',
      'Existential burnout and despair born of bearing a cosmic weight no finite human was designed to carry.'
    ],
    reversalTitle: 'Creaturely Awe (The Holy Dread & Wonder)',
    reversalAncientTerm: 'Yir’at Shamayim / Chamatkar / Mysterium Tremendum',
    reversalMechanism: 'Stepping down from the throne. Restoring the primordial posture of the creature before the Creator: naked, finite, receptive, and in awe.',
    reversalPractice: 'Silent Sabbath of the Soul: Refusing to judge, label, or condemn for a day, leaving all cosmic sovereignty in the hands of the Unseen.',
    colorAccent: '#b91c1c' // Velvet Obsidian Carmine
  }
];

export interface ChainScenario {
  id: string;
  trigger: string;
  egoCascade: {
    pride: string;
    selfWill: string;
    selfCenteredness: string;
    playingGod: string;
  };
  liberatedResponse: string;
}

export const CHAIN_SCENARIOS: ChainScenario[] = [
  {
    id: 'unanswered-prayer',
    trigger: 'A fervent prayer for a desired life outcome goes unanswered or ends in disappointment.',
    egoCascade: {
      pride: '"My prayer was righteous and pious; I knew exactly what should have happened."',
      selfWill: '"I demand this outcome. I fast, bargain, or threaten to withhold my devotion if I am denied."',
      selfCenteredness: '"Why is God punishing ME? Look at how unfair the world is to my personal story!"',
      playingGod: '"Either God is incompetent, cruel, or does not exist because creation refused to obey my order."'
    },
    liberatedResponse: 'Recognizing that the finite mind cannot survey the infinite tapestry of cause and consequence. The surrender of the desire becomes the altar upon which genuine faith is tested.'
  },
  {
    id: 'theological-heresy',
    trigger: 'Encountering someone who lives virtuously but professes a theological framework you find flawed.',
    egoCascade: {
      pride: '"I hold the orthodox key to the cosmos; their framework is inferior or corrupted."',
      selfWill: '"They must be corrected, refuted, or humiliated to preserve the purity of my conceptual safety."',
      selfCenteredness: '"Their existence threatens my certainty and invalidates my chosen identity."',
      playingGod: '"I mentally pronounce damnation upon them, usurping God’s prerogative to judge human hearts."'
    },
    liberatedResponse: 'Honoring the mystery of how grace works through forms beyond human dogma; responding with humble curiosity and mutual witness rather than territorial inquisitorial anxiety.'
  },
  {
    id: 'unjust-suffering',
    trigger: 'Witnessing an innocent being endure horrific, meaningless tragedy in the world.',
    egoCascade: {
      pride: '"If I were God, I would manage this universe with far greater moral clarity and compassion."',
      selfWill: '"I reject a universe that does not conform to my ledger of cause, reward, and punishment."',
      selfCenteredness: '"This tragedy offends MY existential sensibility; I become the moral arbiter of creation."',
      playingGod: '"I summon God to the witness stand of my finite courtroom, passing sentence on the cosmos."'
    },
    liberatedResponse: 'Entering the profound Jobian silence before the Whirlwind. Converting existential outrage into hands-on compassion for the afflicted, rather than philosophical arrogance.'
  }
];
