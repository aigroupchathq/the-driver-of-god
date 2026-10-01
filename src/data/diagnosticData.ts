import { DiagnosticQuestion, DriverArchetype } from '../types';

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    scenario: 'The Crisis of Frustrated Destiny & Unanswered Prayer',
    context: 'You invest years of disciplined ethical striving, devotion, and prayer toward a noble life endeavor, but a sudden collapse ruins it entirely. What is the instinctive accusation that rises in your unedited thoughts?',
    options: [
      {
        text: '“I did everything right by the book. This violates the rational covenant of cosmic justice.”',
        subtext: 'The assumption that your moral competence grants you an immune ledger against suffering.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Epistemic Contractual Hubris',
        weight: 3
      },
      {
        text: '“I will fast harder, intensify my spiritual routines, or find the missing ritual formula to force this back on track.”',
        subtext: 'Refusing to yield; searching for the spiritual leverage lever to compel reality.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Transactional Manipulation of Fate',
        weight: 3
      },
      {
        text: '“Why does the universe always single ME out for humiliation while cruel people flourish without consequence?”',
        subtext: 'Viewing cosmic events as a targeted conspiracy against your personal identity.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Narcissistic Martyrdom & Cosmic Aggrievement',
        weight: 3
      },
      {
        text: '“If God permits this, then God is morally negligent and unworthy of holding cosmic authority.”',
        subtext: 'Summoning the Infinite before the bar of your finite personal moral court.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Usurpation of the Judgment Seat',
        weight: 3
      },
      {
        text: '“My finite intellect sees only one thread of an infinite loom; I bow before the mystery I cannot comprehend.”',
        subtext: 'Kenotic release: surrendering personal entitlement without descending into bitterness.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Radical Creaturely Humility',
        weight: 3
      }
    ]
  },
  {
    id: 2,
    scenario: 'Encountering the Theological & Moral Other',
    context: 'You meet someone whose theological, doctrinal, or metaphysical conclusions completely contradict your own, yet their character bears visible fruits of compassion, serenity, and generosity. How does your inner driver interpret them?',
    options: [
      {
        text: '“Their character is admirable, but their mind is fundamentally deceived and objectively in error.”',
        subtext: 'Prioritizing cognitive alignment and doctrinal taxonomy over actual spiritual transformation.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Intellectual Doctrinal Superiority',
        weight: 3
      },
      {
        text: '“I must construct an airtight argument to deconstruct their framework and bring them into my camp.”',
        subtext: 'The subconscious impulse to conquer and homogenize reality under the guise of evangelism.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Aggressive Conceptual Hegemony',
        weight: 3
      },
      {
        text: '“Their peace threatens my comfort because it invalidates my group’s exclusive claim to divine closeness.”',
        subtext: 'Experiencing another’s spiritual vitality as a territorial theft against your ego.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Territorial Spiritual Insecurity',
        weight: 3
      },
      {
        text: '“God cannot possibly grant salvation, ultimate truth, or divine presence through such an illegitimate vessel.”',
        subtext: 'Exercising administrative veto power over the freedom of divine grace.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Administrative Enforcer of Grace',
        weight: 3
      },
      {
        text: '“The Wind blows where it wishes; I rejoice in the fragrance of grace wherever it blooms.”',
        subtext: 'Awe at the uncontained, sovereign freedom of the Divine beyond human institutional fences.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Receptive Wonder at Unbounded Grace',
        weight: 3
      }
    ]
  },
  {
    id: 3,
    scenario: 'The Hidden Motive in Worship, Meditation, & Devotion',
    context: 'When you step into sacred stillness, contemplative meditation, liturgy, or private prayer, what subtle psychological dividend is your unmonitored ego seeking to extract?',
    options: [
      {
        text: 'The quiet validation of belonging to the enlightened, disciplined, and spiritually literate minority.',
        subtext: 'The Pharisaic ledger of distinction separating yourself from the unrefined masses.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Spiritual Elitism & Pedigree',
        weight: 3
      },
      {
        text: 'Recharging my spiritual frequency so I have the power to manifest, conquer, and execute my weekly goals.',
        subtext: 'Subordinating divine communion into a power source for the ambitious ego.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Utilitarian Exploitation of the Sacred',
        weight: 3
      },
      {
        text: 'An emotional cocoon to soothe my wounds, reinforce my identity, and confirm that I am special.',
        subtext: 'Treating the Almighty as a cosmic emotional support animal tailored to personal comfort.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Therapeutic Instrumentalization',
        weight: 3
      },
      {
        text: 'Confirming and sanctifying my moral anger toward the degenerate culture outside.',
        subtext: 'Using worship as a holy armory to baptize personal grievances and hostility.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Weaponization of the Divine Presence',
        weight: 3
      },
      {
        text: 'The total dissolution of self-regard in the vast, unconditioned presence of the Infinite.',
        subtext: 'Entering prayer where the petitioner relinquishes all claims and ceases to be a consumer.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Self-Emptying Apophatic Adoration',
        weight: 3
      }
    ]
  },
  {
    id: 4,
    scenario: 'The Reaction to Moral Scandals & Public Arrogance',
    context: 'You observe a high-profile public scandal, an act of institutional corruption, or cultural arrogance that violates your core ethics. What is the immediate movement inside your chest?',
    options: [
      {
        text: 'A cold, cerebral satisfaction that I possess the clarity and virtue they so blatantly lack.',
        subtext: 'Epistemic self-elevation masquerading as objective discernment.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Self-Righteous Contrast & Pride',
        weight: 3
      },
      {
        text: 'A fierce urge to execute retribution, demand punitive boycotts, and directly enforce cosmic balance.',
        subtext: 'Assuming the executive enforcement role of the divine moral order.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Vengeful Vigilantism of the Will',
        weight: 3
      },
      {
        text: 'Acute anxiety that my personal sanctuary, culture, and peace of mind are being personally besieged.',
        subtext: 'Filtering global systemic decay solely through its inconvenience to your personal peace.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Egoic Self-Protection & Alarm',
        weight: 3
      },
      {
        text: 'A thrill of condemnation: “They are under divine curse, and I will celebrate their eternal ruin.”',
        subtext: 'Co-opting eschatological fire to barbecue your ideological adversaries.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Anointing Oneself as Cosmic Executioner',
        weight: 3
      },
      {
        text: 'Grief for the tragic blindness of the human condition, accompanied by examination of my own hidden faults.',
        subtext: 'The prophetic tear: weeping over Jerusalem rather than hurling thunderbolts from an armchair.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Sorrowful Compassion & Self-Inventory',
        weight: 3
      }
    ]
  },
  {
    id: 5,
    scenario: 'The Confrontation with Radical Mystery & Heaven’s Silence',
    context: 'When contemplating irreducible paradoxes—such as horrific innocent suffering, cosmic indifference, or the total silence of heaven during agony—how does your mind resolve the void?',
    options: [
      {
        text: 'I formulate complex systematic apologetics to ensure there is no logical flaw in my theological system.',
        subtext: 'The fear of cognitive void filled by hyper-systematic dogmatism.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Compulsive Intellectual Fortification',
        weight: 3
      },
      {
        text: 'I become restless and agitated, devouring books and lectures until I conquer the paradox intellectually.',
        subtext: 'Knowledge sought as a weapon of psychological security rather than humble contemplation.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Compulsive Cognitive Dominance',
        weight: 3
      },
      {
        text: 'I take heaven’s silence as a personal insult: “Why does God abandon ME when I have been so faithful?”',
        subtext: 'Translating the cosmic veil into an intentional slight against your personal ego.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Existential Solipsism & Grievance',
        weight: 3
      },
      {
        text: 'I declare that because the cosmos does not pass my moral audit, the universe is inherently flawed or God is dead.',
        subtext: 'Setting the human moral sense as the supreme criterion that reality must satisfy.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'The Finite Mind Pronouncing Cosmic Sentence',
        weight: 3
      },
      {
        text: 'I rest in the dark night of unknowing, trusting that mystery is the necessary garment of the Infinite.',
        subtext: 'Apophatic surrender: knowing God by letting go of the demand to comprehend.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'The Cloud of Unknowing',
        weight: 3
      }
    ]
  },
  {
    id: 6,
    scenario: 'The Sovereign Test: When Revelation Defies Your Will',
    context: 'Be ruthlessly honest: If God were unveiled to possess attributes or moral decrees that directly violated your deepest political, personal, and emotional preferences, what would happen?',
    options: [
      {
        text: 'I would conclude that the revelation was corrupted, because genuine truth must conform to my reason.',
        subtext: 'Human logic as the supreme idol that sits above revelation.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'The Idol of the Rational Self',
        weight: 3
      },
      {
        text: 'I would struggle to comply unless I could negotiate terms or find an interpretive loophole to preserve my way.',
        subtext: 'The bargaining diplomat insisting on maintaining personal sovereignty.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Contractual Evasion of Surrender',
        weight: 3
      },
      {
        text: 'My faith would disintegrate into despair, because my religion was built around my personal reassurance.',
        subtext: 'A spirituality engineered to service emotional comfort rather than transcendent truth.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Collapse of the Fragile Self-Construct',
        weight: 3
      },
      {
        text: 'I would reject that God outright and worship a divinity fabricated to match my ethical ideals.',
        subtext: 'The unabashed confession of fashioning God in one’s own image.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Open Idolatrous Apotheosis of the Ego',
        weight: 3
      },
      {
        text: 'I would smash my mental idols and let my illusions die, knowing God is not bounded by human comfort.',
        subtext: 'The dissolution of the false driver; the birth of genuine adoration of what is.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Iconoclasm of the Inner Idols',
        weight: 3
      }
    ]
  },
  {
    id: 7,
    scenario: 'Handling Betrayal, Injustice, & Personal Harm',
    context: 'A trusted colleague, friend, or institutional leader commits a deliberate act of slander or betrayal that severely damages your reputation and livelihood. Where does your driver retreat?',
    options: [
      {
        text: 'I meticulously catalog their moral failures to prove to myself that I remain unimpeachably superior.',
        subtext: 'Using the other person’s sin to polish your own monument of righteousness.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Righteous Self-Exaltation through Others’ Sins',
        weight: 3
      },
      {
        text: 'I orchestrate a campaign of covert retaliation or social isolation to force them to regret crossing me.',
        subtext: 'Refusing to leave vindication to time or providence; taking justice into personal custody.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Aggressive Enforcement of Vindication',
        weight: 3
      },
      {
        text: 'I nurse the grievance day and night, making this betrayal the defining trauma of my personal narrative.',
        subtext: 'The intoxicating gravitational pull of wounded victimhood.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Addiction to Grievance Identity',
        weight: 3
      },
      {
        text: 'I declare them spiritually dead and eternally unredeemable, stripping them of any possibility of mercy.',
        subtext: 'Issuing cosmic damnation from the petty chair of personal resentment.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Withholding Mercy like a Petty Sovereign',
        weight: 3
      },
      {
        text: 'I set necessary ethical boundaries while releasing the demand for revenge, surrendering the injury to the Light.',
        subtext: 'Kenotic forgiveness: refusing to allow another’s sin to turn you into a vengeful god.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Transcendent Forgiveness & Healthy Detachment',
        weight: 3
      }
    ]
  },
  {
    id: 8,
    scenario: 'The Reading of Sacred Scriptures & Ethical Commandments',
    context: 'When you read ancient sacred scriptures, prophetic warnings, or philosophical ethics, what is your subconscious orientation toward the text?',
    options: [
      {
        text: 'I study with an eye for analytical precision, feeling proud of my ability to dissect original languages and nuances.',
        subtext: 'Mistaking grammatical mastery for spiritual surrender.',
        driver: 'pride',
        chainStage: 'Link 1: Pride',
        cognitiveSignature: 'Scribal Hermeneutical Arrogance',
        weight: 3
      },
      {
        text: 'I selectively highlight promises of prosperity and victory while skipping passages that demand total self-renunciation.',
        subtext: 'Editing the sacred canon to serve personal ambition and comfort.',
        driver: 'self_will',
        chainStage: 'Link 2: Self-Will',
        cognitiveSignature: 'Selective Canonicity of the Ego',
        weight: 3
      },
      {
        text: 'I instantly think of all the people in my life who need to read this passage and change their behavior.',
        subtext: 'Deflecting the mirror of the Word away from oneself toward others.',
        driver: 'self_centeredness',
        chainStage: 'Link 3: Self-Centeredness',
        cognitiveSignature: 'Deflection of Self-Examination',
        weight: 3
      },
      {
        text: 'I wield the scripture as an authoritative club to denounce society and confirm my right to condemn.',
        subtext: 'Using divine words as ammunition for personal cultural warfare.',
        driver: 'playing_god',
        chainStage: 'Link 4: Playing God',
        cognitiveSignature: 'Scriptural Weaponization as Cosmic Judge',
        weight: 3
      },
      {
        text: 'I read as a wounded beggar reading a love letter, letting the text judge me rather than judging the text.',
        subtext: 'Allowing the living word to perform surgery on the ego without resistance.',
        driver: 'receptive_witness',
        chainStage: 'Kenotic Reversal',
        cognitiveSignature: 'Receptive Vulnerability before the Sacred',
        weight: 3
      }
    ]
  }
];

export const DRIVER_ARCHETYPES: Record<string, DriverArchetype> = {
  pride: {
    id: 'pride',
    name: 'The Dogmatic Architect',
    ancientParallel: 'The Scribes of Jerusalem & The Logicians of Babel',
    motto: '“I understand the architecture of heaven; my doctrine is its blueprint.”',
    coreVulnerability: 'Dread of intellectual inadequacy, existential disorientation, and the vertigo of not-knowing.',
    theologyDistortion: 'Reduces the Living Mystery to a propositional catechism. God is revered not as a transcendent reality, but as the cosmic guarantor of the architect’s cognitive supremacy.',
    psychologicalDefense: 'Intellectualization. Uses biblical, theological, or philosophical taxonomy as a titanium shield against raw ontological encounter and vulnerability.',
    ancientRemedy: 'The Apophatic Way (Via Negativa). Practicing St. Dionysius the Areopagite’s divine darkness: affirming that God is beyond all affirmation and beyond all negation.',
    sacredTextQuote: {
      quote: '“If anyone thinks that he knows anything, he knows nothing yet as he ought to know.”',
      source: '1 Corinthians 8:2'
    }
  },
  self_will: {
    id: 'self_will',
    name: 'The Cosmic Negotiator',
    ancientParallel: 'The Ascetic Deal-Maker & The Alchemist of Fate',
    motto: '“I give my devotion, my rituals, and my obedience; in return, God must secure my destiny.”',
    coreVulnerability: 'Unbearable terror of powerlessness, chaos, and creaturely contingency.',
    theologyDistortion: 'Converts the covenant of love into a commercial contract. God is viewed as an executive contractor whose job is to reward virtue and fulfill the devotee’s timeline.',
    psychologicalDefense: 'Compulsive bargaining. Believing that suffering and grief can be eliminated if one simply discovers the exact ritual, fasting, or theological formula to unlock divine intervention.',
    ancientRemedy: 'Prapatti (Radical Relinquishment). The ancient Vedantic surrender: falling upon the mercy of the Divine with open hands, expecting nothing, demanding nothing, claiming no merit.',
    sacredTextQuote: {
      quote: '“Self-will run riot was our chief problem. The actor wanted to run the whole show, continually trying to arrange the lights, the ballet, and the rest of the players in his own way.”',
      source: 'Spiritual Psychology of Recovery'
    }
  },
  self_centeredness: {
    id: 'self_centeredness',
    name: 'The Wounded Center',
    ancientParallel: 'Narcissus at the Sacred Spring & The Aggrieved Kinsman',
    motto: '“God exists to comfort my wounds, punish my enemies, and validate my narrative.”',
    coreVulnerability: 'The black hole of narcissistic emptiness, unhealed relational trauma, and dread of insignificance.',
    theologyDistortion: 'The universe is shrunk into a personal stage. Divine providence is evaluated purely by whether personal emotional needs are met. When hardship strikes, the believer feels uniquely targeted and abandoned.',
    psychologicalDefense: 'Victimhood sanctification. Transmuting personal grievances and resentment into badges of cosmic martyrdom.',
    ancientRemedy: 'The Copernican Shift of the Soul (Kenotic Agape). Forgetting the self in loving contemplation of the Other; recognizing that creation does not revolve around the finite ego’s story.',
    sacredTextQuote: {
      quote: '“He who loves his life loses it, and he who hates his life in this world will keep it for eternal life.”',
      source: 'John 12:25'
    }
  },
  playing_god: {
    id: 'playing_god',
    name: 'The Usurper of the Throne',
    ancientParallel: 'The Inquisitor & The Fallen Son of the Dawn (Lucifer Mythos)',
    motto: '“I have surveyed the cosmos, and I possess the ultimate standard of justice, truth, and damnation.”',
    coreVulnerability: 'Unconscious identification with the Divine Archetype (Jungian Inflation) to mask deep inner helplessness.',
    theologyDistortion: 'The ego has climbed into the driver’s seat of the cosmos. It pronounces which souls are irredeemable, which nations are cursed, and which parts of reality are mistaken. It mistakes its own wrath for righteous fury.',
    psychologicalDefense: 'Splitting and shadow projection. Projecting all darkness onto external heretics while assuming a mantle of spotless divine authority.',
    ancientRemedy: 'The Voice from the Whirlwind (Job 38–41). Confronting the terrifying scale of the unconditioned cosmos until the ego lays its hand over its mouth in stunned silence.',
    sacredTextQuote: {
      quote: '“Where were you when I laid the foundations of the earth? Tell Me, if you have understanding.”',
      source: 'Job 38:4'
    }
  },
  receptive_witness: {
    id: 'receptive_witness',
    name: 'The Kenotic Contemplative',
    ancientParallel: 'The Sannyasi, The Hesychast, & The Awakened Sage',
    motto: '“Not I, but the Light that moves through the clay.”',
    coreVulnerability: 'Requires ongoing vigilance against the subtle return of spiritual vanity.',
    theologyDistortion: 'Free from conceptual captivity. Knows that any god made by the mind is an idol, and abides in luminous, silent communion with the Ground of All Being.',
    psychologicalDefense: 'Receptivity and conscious presence. Accepts both joy and affliction without demanding a cosmic explanation.',
    ancientRemedy: 'Constant holy remembrance (Zikr / Nēpsis / Smṛti): guarding the heart against the subtle whisper of the ego wanting to reclaim the driver’s seat.',
    sacredTextQuote: {
      quote: '“Know the Self as the rider in the chariot, and the body as the chariot. Know the intellect as the driver, and the mind as the reins.”',
      source: 'Kaṭha Upaniṣad 1.3.3'
    }
  }
};
