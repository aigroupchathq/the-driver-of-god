export interface HistoricalEra {
  id: string;
  century: string;
  yearRange: string;
  eraName: string;
  subTitle: string;
  chainStation: 'Pride' | 'Self-Will' | 'Self-Centeredness' | 'Playing God';
  chainStationNumber: string;
  geography: string;
  canonicalFigure: string;
  keyWork: string;
  originalQuote: string;
  quoteTranslation: string;
  quoteAuthor: string;
  chainMechanism: string;
  historicalCrucible: string;
  kenoticAntidote: string;
  modernEchoPrompt: string;
  accentColor: string;
}

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: 'vedic-axial',
    century: 'c. 800 – 500 BCE',
    yearRange: '800 BCE',
    eraName: 'The Vedic-Axial Dawn',
    subTitle: 'The Discovery of Ahaṃkāra & The False Doer',
    chainStation: 'Pride',
    chainStationNumber: '01',
    geography: 'Gangetic Plains, Ancient India',
    canonicalFigure: 'The Rishis & Kaṭha Upaniṣad',
    keyWork: 'Kaṭha Upaniṣad & Sāṅkhya Kārikā',
    originalQuote: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः । अहंकारविमूढात्मा कर्ताहमिति मन्यते ॥',
    quoteTranslation: 'All actions are wrought entirely by the forces of cosmic nature. But the soul bewildered by Ahaṃkāra (the I-maker) thinks: "I am the doer."',
    quoteAuthor: 'Bhagavad Gītā 3.27 / Upaniṣadic Synthesis',
    chainMechanism: 'Pride begins at the ontological split: the witness consciousness (Sākṣin) becomes entangled in the mental instrument, claiming exclusive authorship of natural cosmic movements.',
    historicalCrucible: 'The transition from exterior sacrificial fire rites (Yajña) to interior psychological deconstruction. Mystics discovered that external piety was hollow if the inner "I-maker" secretly demanded credit for the ritual.',
    kenoticAntidote: 'Neti, Neti ("Not this, not this") and Ishvara Pranidhana—the voluntary surrender of the illusion of personal agency to the underlying cosmic ground (Brahman).',
    modernEchoPrompt: 'When a project or creative effort succeeds, do you silently claim authorship ("I created this"), or do you perceive yourself as the conduit for conditions you did not create?',
    accentColor: 'text-amber-700 bg-amber-500/10 border-amber-500/30'
  },
  {
    id: 'axial-monotheism',
    century: 'c. 600 – 400 BCE',
    yearRange: '600 BCE',
    eraName: 'The Levant & The Whirlwind',
    subTitle: 'The Moral Ledger & The Demanding Will',
    chainStation: 'Self-Will',
    chainStationNumber: '02',
    geography: 'Ancient Near East / Levant',
    canonicalFigure: 'Job & The Hebrew Wisdom Scribes',
    keyWork: 'The Book of Job (Chapters 38–42)',
    originalQuote: 'אֵיפֹה הָיִיתָ בְּיָסְדִי אָרֶץ הַגֵּד אִם יָדַעְתָּ בִינָה',
    quoteTranslation: 'Where wast thou when I laid the foundations of the earth? Declare, if thou hast understanding. Shall he that contendeth with the Almighty instruct him?',
    quoteAuthor: 'The Voice from the Whirlwind (Job 38:4)',
    chainMechanism: 'Self-Will hardens into theological entitlement: insisting that divine reality must balance human moral equations, turning mystery into an angry negotiation.',
    historicalCrucible: 'The breakdown of simplistic retributive justice (the belief that good fortune proves righteousness and suffering proves guilt). Self-will could not endure suffering without demanding an explanation from God.',
    kenoticAntidote: 'Job covering his mouth in dust and silence: moving from hearing of God with the ear of moral doctrine to beholding reality with the eye of awe.',
    modernEchoPrompt: 'When unexpected illness, delay, or failure strikes, does your mind scream "Why is this happening to ME after all I have done?", demanding a moral explanation from life?',
    accentColor: 'text-orange-700 bg-orange-500/10 border-orange-500/30'
  },
  {
    id: 'desert-monasticism',
    century: 'c. 300 – 600 CE',
    yearRange: '350 CE',
    eraName: 'The Egyptian Desert Hermits',
    subTitle: 'Philautia: The Inward Navel-Gaze of the Devout',
    chainStation: 'Self-Centeredness',
    chainStationNumber: '03',
    geography: 'Nitrian Desert & Skete, Egypt',
    canonicalFigure: 'Evagrius Ponticus & St. Anthony',
    keyWork: 'The Praktikos & The Philokalia',
    originalQuote: 'Φιλαυτία ἐστὶ μήτηρ τῶν παθῶν... ἄλογος πρὸς τὸ σῶμα φιλία.',
    quoteTranslation: 'Philautia (inordinate self-love) is the mother of all afflictions... the silent usurpation of love turned exclusively upon one’s own image.',
    quoteAuthor: 'Evagrius Ponticus',
    chainMechanism: 'Self-Centeredness becomes subtle: the ego retreats from worldly pleasures only to feed on spiritual vanity, keeping a meticulous mental tally of its own purity, asceticism, and prayers.',
    historicalCrucible: 'Monks fled corrupted Roman imperial cities into barren caves, only to find the demon of self-centeredness waiting inside their own skulls. Physical isolation only intensified self-obsession.',
    kenoticAntidote: 'Nepsis (watchfulness) and radical humility: confessing that one’s greatest ascetic achievements are infected with self-regard until purified by silent grace.',
    modernEchoPrompt: 'Do you feel a quiet, private superiority over friends or peers who "lack your discipline, your healthy habits, your work ethic, or your spiritual depth"?',
    accentColor: 'text-orange-800 bg-orange-600/10 border-orange-600/30'
  },
  {
    id: 'classical-sufism',
    century: 'c. 900 – 1240 CE',
    yearRange: '1100 CE',
    eraName: 'Baghdad & Al-Andalus',
    subTitle: 'The Pharaonic Claim vs. Radical Fanā’',
    chainStation: 'Playing God',
    chainStationNumber: '04',
    geography: 'Mesopotamia, Persia, & Andalusia',
    canonicalFigure: 'Manṣūr al-Ḥallāj & Ibn ‘Arabī',
    keyWork: 'Kitāb al-Ṭawāsīn & Fuṣūṣ al-Ḥikam',
    originalQuote: 'أنا الحق وما رأيت شيئا إلا ورأيت الله فيه',
    quoteTranslation: 'I am the Truth — not through the claim of personal sovereignty, but because the vessel is emptied and only the Divine remains.',
    quoteAuthor: 'Al-Ḥallāj & The Sufi Lineage',
    chainMechanism: 'Playing God reaches its theological apex: the ego mimics divine attributes (sovereignty, judgment, wrath) and demands to be treated as an unquestionable arbiter.',
    historicalCrucible: 'Sufi masters analyzed the terrifying line between Pharaoh’s egoic claim ("I am your Lord Most High") and the mystic’s ecstatic dissolution ("God is all that is"). Pharaoh kept his ego; the mystic surrendered it.',
    kenoticAntidote: 'Fanā’ al-Nafs (annihilation of the grasping ego) paired with ‘Ubūdiyya (pure creaturely servanthood)—relinquishing all pretense to divine rulership.',
    modernEchoPrompt: 'When managing a team, a home, or a relationship, do you issue decrees and react with anger when others do not conform to your vision of how things "must be"?',
    accentColor: 'text-rose-800 bg-rose-500/10 border-rose-500/30'
  },
  {
    id: 'enlightenment-promethean',
    century: 'c. 1780 – 1900 CE',
    yearRange: '1850 CE',
    eraName: 'The Promethean Enlightenment',
    subTitle: 'The Grand Inquisitor & The Will to Power',
    chainStation: 'Playing God',
    chainStationNumber: '04',
    geography: 'Western Europe & Imperial Russia',
    canonicalFigure: 'Dostoevsky & Nietzsche',
    keyWork: 'The Brothers Karamazov & The Anti-Christ',
    originalQuote: '“Why hast Thou come now to hinder us? For Thou hast come to hinder us, and Thou knowest it. We have corrected Thy work...”',
    quoteTranslation: 'The Grand Inquisitor to Christ: The ego decides that divine freedom is too dangerous; man must engineer a mechanized, compliant paradise in God’s place.',
    quoteAuthor: 'Fyodor Dostoevsky (1880)',
    chainMechanism: 'Playing God becomes an institutional enterprise: replacing the transcendent mystery with human engineered perfection, technocratic control, and moral micromanagement.',
    historicalCrucible: 'The industrial revolution and secularization declared man the sole author of destiny. Scientific hubris promised to eliminate suffering by eliminating sacred limits and cosmic humility.',
    kenoticAntidote: 'The silent kiss of Christ in Dostoevsky’s parable: offering defenceless love and transcendent humility in the face of totalitarian rationalism.',
    modernEchoPrompt: 'Do you believe that with sufficient software, optimization, productivity hacks, and willpower, you can eliminate all fragility and vulnerability from existence?',
    accentColor: 'text-rose-900 bg-rose-600/10 border-rose-600/30'
  },
  {
    id: 'algorithmic-technosphere',
    century: '21st Century (Present Day)',
    yearRange: '2026+',
    eraName: 'The Algorithmic Hyper-Self',
    subTitle: 'The Digital Panopticon & Curated Omnipotence',
    chainStation: 'Playing God',
    chainStationNumber: '04',
    geography: 'Global Fiber Networks & Silicon Valley',
    canonicalFigure: 'Contemporary Cognitive Philosophy & Media Ecology',
    keyWork: 'The Agony of Eros & Psychopolitics (Byung-Chul Han)',
    originalQuote: '“The ego in the digital network is no longer a subject under external command; it is an entrepreneur of itself, endlessly optimizing its own exhibition while spiritual capacity atrophies.”',
    quoteTranslation: 'Modern digital systems provide instantaneous feedback loops that fool the individual mind into feeling omniscient, omnipresent, and sovereign.',
    quoteAuthor: 'Contemporary Critique of the Technosphere',
    chainMechanism: 'The Chain reaches automated completion: feeds filter out friction, AI tools answer every question instantly, and the ego lives in a self-constructed sensory feedback loop where it never has to surrender to what is.',
    historicalCrucible: 'The total elimination of silence and holy passivity. When every discomfort can be numbed by a swipe, the capacity for Kenosis (yielding to what is greater than self) is systematically starved.',
    kenoticAntidote: 'Intentional digital silence, radical physical presence, non-reaction, and voluntary relinquishment of the need to broadcast one’s opinions to the universe.',
    modernEchoPrompt: 'How many minutes can you sit in an empty room with no phone, no music, and no agenda before the panic of "not controlling or knowing" drives you to reach for a screen?',
    accentColor: 'text-amber-900 bg-amber-600/10 border-amber-600/30'
  }
];
