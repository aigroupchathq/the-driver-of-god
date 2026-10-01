import { CodexScripture } from '../types';

export const CODEX_SCRIPTURES: CodexScripture[] = [
  {
    id: 'katha-upanishad',
    tradition: 'Vedic / Advaita Vedanta',
    language: 'Sanskrit (संस्कृतम्)',
    title: 'The Allegory of the Sacred Chariot',
    reference: 'Kaṭha Upaniṣad 1.3.3–4',
    originalScript: 'आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥\nइन्द्रियाणि हयानाहुर्विषयांस्तेषु गोचरान् ।\nआत्मेन्द्रियमनोयुक्तं भोक्तेत्याहुर्मनीषिणः ॥',
    transliteration: 'ātmānaṁ rathinaṁ viddhi śarīraṁ rathameva tu |\nbuddhiṁ tu sārathiṁ viddhi manaḥ pragrahameva ca ||\nindriyāṇi hayānāhurviṣayāṁsteṣu gocarān |\nātmendriyamanoyuktaṁ bhoktetyāhurmanīṣiṇaḥ ||',
    literalTranslation: 'Know the Ātman (True Witness) as the lord of the chariot, and the body as the chariot itself. Know the Buddhi (Intellect/Discernment) as the charioteer, and the Manas (Mind) as the reins. The senses are called the horses, and the sensory objects are their roads.',
    curatorialExposition: 'The foundational diagnostic of human consciousness. The tragedy occurs when Ahaṁkāra (the false ego-maker) hijacks the chariot from behind, pushes the Buddhi aside, and grabs the reins. Under Ahaṁkāra’s command, the chariot careens toward pride, self-will, and destruction, all while the usurper shouts: "I am the driver! I am the master of this journey!"',
    psychologicalInsight: 'The ego is an instrument of perception, not the owner of the soul. When the cognitive apparatus mistakes itself for the sovereign, every spiritual insight becomes warped into personal aggrandizement.',
    keyTerms: [
      {
        term: 'आत्मानम्',
        transliteration: 'Ātmānam',
        meaning: 'The True Self / Witness',
        etymology: 'Root *at* (to breathe, to move constantly), the unconditioned immortal observer.'
      },
      {
        term: 'सारथिम्',
        transliteration: 'Sārathim',
        meaning: 'The Charioteer / Driver',
        etymology: 'From *sa* + *ratha* (he who guides the chariot), representing higher discriminating intellect (Buddhi).'
      },
      {
        term: 'अहङ्कार',
        transliteration: 'Ahaṅkāra',
        meaning: 'The Ego / "I-Maker"',
        etymology: 'From *aham* (I) + *kāra* (maker). The mental faculty that manufactures the illusion of separate personal doership.'
      }
    ]
  },
  {
    id: 'bhagavad-gita',
    tradition: 'Vedic / Yoga Shastra',
    language: 'Sanskrit (संस्कृतम्)',
    title: 'The Delusion of Doership',
    reference: 'Bhagavad Gītā 3.27',
    originalScript: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः ।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते ॥',
    transliteration: 'prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ |\nahaṅkāra-vimūḍhātmā kartāham iti manyate ||',
    literalTranslation: 'All actions are carried out everywhere by the modes (gunas) of primordial nature. Yet the one whose mind is thoroughly deluded by Ahaṅkāra thinks: "I am the doer."',
    curatorialExposition: 'The driver’s fatal illusion is the hallucination of sole agency. The ego believes it authors its virtues, generates its holy insights, and exercises independent cosmic veto power. In reality, the cosmos is moving through nature; the ego merely slaps its private copyright on the universal flow.',
    psychologicalInsight: 'When we claim ownership of goodness or righteousness, we plant the seed of spiritual pride. The moment we say "I made myself holy," we have stepped into self-will.',
    keyTerms: [
      {
        term: 'अहङ्कारविमूढात्मा',
        transliteration: 'Ahaṅkāra-vimūḍhātmā',
        meaning: 'Deluded by the false sense of ego',
        etymology: '*Ahaṅkāra* + *vi-mūḍha* (bewildered, stupefied) + *ātmā* (soul/mind).'
      },
      {
        term: 'कर्ताहमिति',
        transliteration: 'Kartāham iti',
        meaning: '“I am the doer”',
        etymology: '*Kartā* (the agent/doer) + *aham* (I) + *iti* (thus).'
      }
    ]
  },
  {
    id: 'book-of-job',
    tradition: 'Hebrew Biblical Wisdom',
    language: 'Biblical Hebrew (עִבְרִית)',
    title: 'The Voice from the Whirlwind: Dethroning the Critic',
    reference: 'Job 38:1–4; 40:8',
    originalScript: 'וַיַּעַן־יְהוָה אֶת־אִיּוֹב מִן הַסְּעָרָה וַיֹּאמַר׃\nמִי זֶה מַחְשִׁיךְ עֵצָה בְּמִלִּין בְּלִי־דָעַת׃\nאֵיפֹה הָיִיתָ בְּיָסְדִי־אָרֶץ הַגֵּד אִם־יָדַעְתָּ בִינָה׃\nהַאַף תָּפֵר מִשְׁפָּטִי תַּרְשִׁיעֵנִי לְמַעַן תִּצְדָּק׃',
    transliteration: 'Vay’an-Adonai et-Iyov min has-se’arah vayyomar:\nMi zeh machshikh etzah b’millin b’li-da’at?\nEifoh hayita b’yosdi-aretz? Hagged im-yada’ta binah.\nHa’af tafer mishpati tarshi’eni l’ma’an titzdak?',
    literalTranslation: 'Then the LORD answered Job out of the whirlwind and said: “Who is this that darkens counsel with words without knowledge? Where were you when I laid the foundation of the earth? Declare, if you have understanding... Would you discredit my justice? Would you condemn Me to justify yourself?”',
    curatorialExposition: 'This is the most devastating exposure of "Playing God" in ancient literature. Job and his friends have argued for 35 chapters inside an intellectual courtroom, reducing God to moral retribution equations. God does not offer a neat philosophical answer; God deconstructs the courtroom itself. "Will you condemn Me so that you may appear righteous?" exposes the root motive of human theology.',
    psychologicalInsight: 'The human psyche frequently condemns the universe or demands cosmic justice not out of pure love, but to preserve its own moral self-exaltation. True awe begins where our courtroom collapses.',
    keyTerms: [
      {
        term: 'מִן הַסְּעָרָה',
        transliteration: 'Min has-se’arah',
        meaning: 'Out of the whirlwind / storm',
        etymology: 'The chaotic, untamed natural majesty that refuses to be tamed by human dogma.'
      },
      {
        term: 'תַּרְשִׁיעֵנִי',
        transliteration: 'Tarshi’eni',
        meaning: 'Would you condemn / declare guilty?',
        etymology: 'From root *r-sh-a* (to pronounce wicked/guilty). The creature putting God on trial.'
      }
    ]
  },
  {
    id: 'sufi-tasawwuf',
    tradition: 'Sufi Mysticism (Tasawwuf)',
    language: 'Classical Arabic (العَرَبِية)',
    title: 'The Hidden Idol & The Commanding Self',
    reference: 'Ibn ‘Arabi (Fusus al-Hikam) & Hadith on Shirk al-Khafi',
    originalScript: 'إِنَّ أَخْوَفَ مَا أَخَافُ عَلَيْكُمُ الشِّرْكُ الأَصْغَرُ: الرِّيَاءُ وَالشِّرْكُ الخَفِيُّ\nالنَّفْسُ الأَمَّارَةُ بِالسُّوءِ\nكُلُّ مَنْ عَبَدَ إِلَهًا صَنَعَهُ فِي عَقْلِهِ فَهُوَ عَابِدٌ لِنَفْسِهِ',
    transliteration: 'Inna akhwafa ma akhafu ‘alaykum ash-shirku al-asghar: ar-riya’u wash-shirku al-khafiyy.\nAn-nafsu al-ammaratu bis-su’.\nKullu man ‘abada ilahan sana’ahu fi ‘aqlihi fahuwa ‘abidun linafsihi.',
    literalTranslation: '“What I fear most for you is the subtle idolatry (shirk khafi): spiritual ostentation.” The soul that commands to evil (Nafs al-Ammara). Ibn ‘Arabi: “Whoever worships a God manufactured in his own intellect is merely worshipping himself.”',
    curatorialExposition: 'Sufi masters identified that the hardest idol to smash is not made of wood or stone, but of theology. When a man creates an image of God in his imagination—conforming to his likes, hates, and ego boundaries—and bows down to it, he is merely performing prostrations to his own expanded ego.',
    psychologicalInsight: 'Spiritual narcissism is the most cunning trap: the ego dons the robes of the ascetic and the vocabulary of the saint, but retains absolute dictatorial power over the inner world.',
    keyTerms: [
      {
        term: 'الشِّرْكُ الخَفِيُّ',
        transliteration: 'Ash-Shirk al-Khafi',
        meaning: 'Hidden or subtle polytheism / idolatry',
        etymology: 'Associating the ego’s will and demands with the Divine without realizing it.'
      },
      {
        term: 'النَّفْسُ الأَمَّارَةُ',
        transliteration: 'An-Nafs al-Ammarah',
        meaning: 'The Commanding Ego',
        etymology: 'The primitive, tyrannical level of psyche that demands reality submit to its craving.'
      },
      {
        term: 'فَنَاء',
        transliteration: 'Fana’',
        meaning: 'Annihilation of the false self',
        etymology: 'The total dissolution of the illusory driver in the ocean of Divine Unity (Tawhid).'
      }
    ]
  },
  {
    id: 'patristic-desert',
    tradition: 'Early Christian Asceticism (Philokalia)',
    language: 'Classical Greek (Ἑλληνική)',
    title: 'The Demon of Spiritual Pride & Vainglory',
    reference: 'Evagrius Ponticus (Praktikos 13–14) & John Cassian',
    originalScript: 'Ὁ τῆς ὑπερηφανίας δαίμων βαρύτατός ἐστι πάντων·\nοὐ γὰρ ἐκ σώματος ἀλλ’ ἐκ τοῦ νοῦ τρέφεται.\nὍταν γὰρ νομίσῃ ὁ νοῦς ὅτι αὐτὸς αἴτιος τῶν κατορθωμάτων,\nπίπτει ἀπὸ τῆς χάριτος εἰς τὸ σκότος.',
    transliteration: 'Ho tēs hyperēphanias daimōn barytatos esti pantōn;\nou gar ek sōmatos all’ ek tou nou trephetai.\nHotan gar nomisē ho nous hoti autos aitios tōn katorthōmatōn,\npiptei apo tēs charitos eis to skotos.',
    literalTranslation: '“The demon of pride (hyperēphania) is the gravest of all; for it feeds not upon bodily passions, but upon the spirit itself. For when the mind imagines that it is itself the author of its spiritual achievements, it falls from grace into abyssal darkness.”',
    curatorialExposition: 'The Desert Fathers recognized that gross sins of the body are clumsy and easily repented, but hyperēphania (pride of the spirit) strikes at the peak of holiness. The monk who has conquered lust, gluttony, and greed suddenly whispers: "Look how pure I am." In that moment, the ego has usurped God using virtue as its vehicle.',
    psychologicalInsight: 'Spiritual vanity is the ultimate defense mechanism of the ego. It hijacks virtue, fasting, prayer, and theology to construct an impenetrable fortress against genuine vulnerability.',
    keyTerms: [
      {
        term: 'ὑπερηφανία',
        transliteration: 'Hyperēphania',
        meaning: 'Pride / Arrogance / Over-appearing',
        etymology: 'From *hyper* (above/beyond) + *phaino* (to appear/show). Placing oneself above creation.'
      },
      {
        term: 'κένωσις',
        transliteration: 'Kenōsis',
        meaning: 'Self-emptying / Relinquishment',
        etymology: 'From *kenos* (empty). The radical surrender of divine status to take the form of a servant.'
      },
      {
        term: 'νῆψις',
        transliteration: 'Nēpsis',
        meaning: 'Sober watchfulness of the driver',
        etymology: 'Vigilant guard over inner thoughts (logismoi) to ensure the ego does not seize the steering wheel.'
      }
    ]
  }
];
