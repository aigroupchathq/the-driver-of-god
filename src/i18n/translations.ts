export type Language = 'en' | 'hi';

export interface Translations {
  // Brand & Nav
  brandTitle: string;
  brandSubtitle: string;
  navChain: string;
  navTimeline: string;
  navInquest: string;
  navOrrery: string;
  navStudio: string;
  navChariot: string;
  navCodex: string;
  navAudioOn: string;
  navAudioOff: string;
  navKenosisBtn: string;
  navGuideBtn: string;
  
  // Hero
  heroCuratorialRibbon: string;
  heroBookNumber: string;
  heroArchiveLabel: string;
  heroQuestion1: string;
  heroQuestion2: string;
  heroSubtext: string;
  heroStation1: string;
  heroStation2: string;
  heroStation3: string;
  heroStation4: string;
  heroBtnInquest: string;
  heroBtnStudio: string;
  heroBtnChariot: string;
  heroQuote: string;

  // Astrolabe
  astrolabeSubtitle: string;
  astrolabeDragInstruction: string;
  astrolabeQuadrant: string;
  astrolabeReversalPrompt: string;
  astrolabeEgoDrive: string;
  astrolabeTheologicalCost: string;

  // Chain Section
  chainLiber: string;
  chainTitle: string;
  chainSubtext: string;
  chainDescentTab: string;
  chainReversalTab: string;
  chainSelectStation: string;
  chainSomaticRoot: string;
  chainPsychologicalCost: string;
  chainSacredRemedy: string;
  chainDailyManifestation: string;
  chainMirrorPrompt: string;

  // Chariot Section
  chariotTag: string;
  chariotTitle: string;
  chariotSubtitle: string;
  chariotVerseSanskrit: string;
  chariotVerseTranslation: string;
  chariotSource: string;
  chariotTrueLord: string;
  chariotDriver: string;
  chariotReins: string;
  chariotHorses: string;
  chariotBody: string;

  // Diagnostic
  diagnosticTag: string;
  diagnosticTitle: string;
  diagnosticSubtitle: string;
  diagnosticQuestionOf: string;
  diagnosticPrevBtn: string;
  diagnosticNextBtn: string;
  diagnosticCompleteBtn: string;
  diagnosticRetakeBtn: string;
  diagnosticArchetypeDetected: string;
  diagnosticVulnerability: string;
  diagnosticPrescription: string;

  // Kenosis
  kenosisTitle: string;
  kenosisSubtitle: string;
  kenosisStage: string;
  kenosisBreathInhale: string;
  kenosisBreathHold: string;
  kenosisBreathExhale: string;
  kenosisCompleteTitle: string;
  kenosisCompleteText: string;
  kenosisNextStage: string;
  kenosisReturnBtn: string;

  // Footer
  footerTreatise: string;
  footerRights: string;
  footerClientNotice: string;
  footerBackToTop: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    brandTitle: 'The Driver of God',
    brandSubtitle: 'The Anatomy of Self-Will',
    navChain: 'The Chain',
    navTimeline: 'Epochs',
    navInquest: 'The Inquest',
    navOrrery: 'Cosmic Orrery',
    navStudio: 'Inner Light 9:16',
    navChariot: 'The Chariot',
    navCodex: 'The Codex',
    navAudioOn: 'Audio On',
    navAudioOff: 'Audio',
    navKenosisBtn: 'Kenosis Chamber',
    navGuideBtn: 'Guide',

    heroCuratorialRibbon: 'Treatise on Epistemic Idolatry',
    heroBookNumber: 'Liber I: The Primordial Inversion',
    heroArchiveLabel: 'Curatorial Archive',
    heroQuestion1: 'The question is not “Who is God?”',
    heroQuestion2: 'It is: “Who is driving my understanding of God?”',
    heroSubtext: 'When the unexamined ego sits in the driver’s seat of theology, the divine will always be reconstructed in the image of its fears, resentments, and appetite for control. Tracing the fourfold psychological descent:',
    heroStation1: '01. Pride',
    heroStation2: '02. Self-Will',
    heroStation3: '03. Self-Centeredness',
    heroStation4: '04. Playing God',
    heroBtnInquest: 'Begin The Inquest',
    heroBtnStudio: 'Inner Light 9:16',
    heroBtnChariot: 'Vedic Chariot Anatomy',
    heroQuote: '“The God made by the intellect is an idol made to protect the intellect.” — Ibn ‘Arabi',

    astrolabeSubtitle: 'The Astrolabe of the Psyche · Turn the dial to explore each station of self-will',
    astrolabeDragInstruction: 'Drag the brass astrolabe wheel or tap any quadrant',
    astrolabeQuadrant: 'Active Station',
    astrolabeReversalPrompt: 'Contemplative Antidote',
    astrolabeEgoDrive: 'Ego Mechanism',
    astrolabeTheologicalCost: 'Theological Consequence',

    chainLiber: 'Liber II: The Architecture of the Usurpation',
    chainTitle: 'The Anatomy of the Catastrophe',
    chainSubtext: 'The transition from worship to idolatrous self-exaltation is not an overt blasphemy; it is a fourfold seamless psychological corruption. Once Pride blinds the eye, Self-Will seizes the reins, Self-Centeredness shrinks the cosmos, and the ego quietly crowns itself.',
    chainDescentTab: 'The Descent: Chain of Self-Will',
    chainReversalTab: 'The Ascending Reversal: Kenosis',
    chainSelectStation: 'Select a Station in the Descent',
    chainSomaticRoot: 'Psychological Root',
    chainPsychologicalCost: 'Theological Consequence',
    chainSacredRemedy: 'Contemplative Reversal',
    chainDailyManifestation: 'Manifestations in Daily Life',
    chainMirrorPrompt: 'Scratch the Mirror of Delusion',

    chariotTag: 'Liber IV: The Chariot Allegory',
    chariotTitle: 'The Katha Upanishad Chariot',
    chariotSubtitle: 'Composed circa 800–500 BCE, the Kaṭha Upaniṣad delivers humanity’s most precise allegorical anatomy of the human psyche and the rightful driver of consciousness.',
    chariotVerseSanskrit: 'आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥',
    chariotVerseTranslation: '“Know the Ātman (the True Self) as the lord of the chariot, and the physical body as the chariot itself. Know the Buddhi (discriminating intellect) as the charioteer, and the Manas (mind) as the reins.”',
    chariotSource: 'Kaṭha Upaniṣad 1.3.3–4',
    chariotTrueLord: 'The True Lord (Ātman)',
    chariotDriver: 'The Charioteer (Buddhi)',
    chariotReins: 'The Reins (Manas)',
    chariotHorses: 'The Horses (Indriyas)',
    chariotBody: 'The Chariot (Śarīra)',

    diagnosticTag: 'Psychological Diagnostic Mirror',
    diagnosticTitle: 'The Diagnostic Inquest',
    diagnosticSubtitle: 'An unsparing psycho-spiritual examination designed to detect which link in the chain of self-will is actively driving your thoughts, prayers, and relationships.',
    diagnosticQuestionOf: 'Crucible Question',
    diagnosticPrevBtn: 'Previous Question',
    diagnosticNextBtn: 'Next Question',
    diagnosticCompleteBtn: 'Synthesize Diagnostic',
    diagnosticRetakeBtn: 'Retake Diagnostic Inquest',
    diagnosticArchetypeDetected: 'Primary Driver Detected',
    diagnosticVulnerability: 'Core Vulnerability',
    diagnosticPrescription: 'Contemplative Prescription',

    kenosisTitle: 'The Kenosis Chamber',
    kenosisSubtitle: 'A 4-Stage Contemplative Practice of Radical Self-Emptying',
    kenosisStage: 'Stage',
    kenosisBreathInhale: 'Inhale · Receive',
    kenosisBreathHold: 'Hold · Stillness',
    kenosisBreathExhale: 'Exhale · Release',
    kenosisCompleteTitle: 'The Void of Surrender Attained',
    kenosisCompleteText: 'You have relinquished the driver’s seat. Resting in the silent witness where God is allowed to be God.',
    kenosisNextStage: 'Continue to Next Stage',
    kenosisReturnBtn: 'Return to Sanctuary',

    footerTreatise: 'The Driver of God · An inquiry into the psychological roots of spiritual usurpation',
    footerRights: 'Curated for contemplative scholarship and self-reflection.',
    footerClientNotice: 'Runs entirely client-side. Zero telemetry or surveillance.',
    footerBackToTop: 'Ascend to Summit'
  },
  hi: {
    brandTitle: 'ईश्वर का सारथी',
    brandSubtitle: 'आत्म-संकल्प और अहंकार का विश्लेषण',
    navChain: 'शृंखला',
    navTimeline: 'युग व इतिहास',
    navInquest: 'आत्म-परीक्षण',
    navOrrery: 'ब्रह्मांडीय चक्र',
    navStudio: 'इनर लाइट 9:16',
    navChariot: 'कठ उपनिषद् रथ',
    navCodex: 'ग्रंथावली',
    navAudioOn: 'ध्वनि चालू',
    navAudioOff: 'ध्वनि',
    navKenosisBtn: 'केनोसिस कक्ष',
    navGuideBtn: 'मार्गदर्शिका',

    heroCuratorialRibbon: 'वैचारिक मूर्तिपूजा पर दार्शनिक मीमांसा',
    heroBookNumber: 'प्रथम खंड: मूल भ्रांति का रहस्य',
    heroArchiveLabel: 'दार्शनिक अभिलेखागार',
    heroQuestion1: 'प्रश्न यह नहीं है कि “ईश्वर कौन है?”',
    heroQuestion2: 'बल्कि यह है: “ईश्वर के प्रति मेरी समझ का सारथी कौन है?”',
    heroSubtext: 'जब अनियंत्रित अहंकार धर्म और ईश्वर के रथ का सारथी बन जाता है, तो ईश्वर केवल हमारे भयों, इच्छाओं और नियंत्रण की भूख का प्रतिबिंब बनकर रह जाता है। जानिए आत्म-संकल्प के पतन के चार चरण:',
    heroStation1: '01. अहंकार (Pride)',
    heroStation2: '02. आत्म-संकल्प (Self-Will)',
    heroStation3: '03. आत्म-केन्द्रितता (Self-Centeredness)',
    heroStation4: '04. ईश्वर बनने का भ्रम (Playing God)',
    heroBtnInquest: 'आत्म-परीक्षण प्रारंभ करें',
    heroBtnStudio: 'इनर लाइट 9:16',
    heroBtnChariot: 'वैदिक रथ संरचना',
    heroQuote: '“बुद्धि द्वारा गढ़ा गया ईश्वर केवल बुद्धि की रक्षा के लिए बनाई गई एक मूर्ति है।” — इब्न अरबी',

    astrolabeSubtitle: 'चेतना का अस्ट्रोलेब · आत्म-संकल्प के प्रत्येक चरण को समझने के लिए चक्र को घुमाएं',
    astrolabeDragInstruction: 'पीतल के चक्र को घुमाएं या किसी भी चरण पर क्लिक करें',
    astrolabeQuadrant: 'सक्रिय चरण',
    astrolabeReversalPrompt: 'ध्यान व मुक्ति का मार्ग',
    astrolabeEgoDrive: 'अहंकार की कार्यप्रणाली',
    astrolabeTheologicalCost: 'आध्यात्मिक दुष्परिणाम',

    chainLiber: 'द्वितीय खंड: अधिकारहरण की वास्तुकला',
    chainTitle: 'पतन का आंतरिक विश्लेषण',
    chainSubtext: 'ईश्वर की उपासना से स्वयं को सर्वोपरि मानने का यह बदलाव अचानक नहीं होता; यह मन की एक सूक्ष्म चार-चरणीय यात्रा है। अहंकार दृष्टि को अंधा करता है, आत्म-संकल्प लगाम छीन लेता है, आत्म-केन्द्रितता ब्रह्मांड को संकुचित कर देती है, और अंततः व्यक्ति स्वयं को ही ईश्वर मान बैठता है।',
    chainDescentTab: 'अधोगति: आत्म-संकल्प की शृंखला',
    chainReversalTab: 'उर्ध्वगति: केनोसिस (समर्पण व शून्यता)',
    chainSelectStation: 'शृंखला के चरण का चयन करें',
    chainSomaticRoot: 'मनोवैज्ञानिक मूल कारण',
    chainPsychologicalCost: 'आध्यात्मिक दुष्परिणाम',
    chainSacredRemedy: 'समर्पण का मार्ग (केनोसिस)',
    chainDailyManifestation: 'दैनिक जीवन में इसके लक्षण',
    chainMirrorPrompt: 'भ्रम के दर्पण को खुरचें',

    chariotTag: 'चतुर्थ खंड: वैदिक रथ का रूपक',
    chariotTitle: 'कठ उपनिषद्: रथ रूपक',
    chariotSubtitle: 'लगभग 800–500 ईसा पूर्व रचित कठ उपनिषद् मानव मन, चेतना और उसके सच्चे सारथी का विश्व का सबसे सटीक और प्राचीनतम दार्शनिक विश्लेषण प्रस्तुत करता है।',
    chariotVerseSanskrit: 'आत्मानं रथिनं विद्धि शरीरं रथमेव तु ।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च ॥',
    chariotVerseTranslation: '“आत्मा को रथ का स्वामी (रथी) जानो और भौतिक शरीर को रथ। बुद्धि को सारथी (चालक) जानो और मन को लगाम।”',
    chariotSource: 'कठ उपनिषद् १.३.३–४',
    chariotTrueLord: 'रथ का स्वामी (आत्मा)',
    chariotDriver: 'सारथी (बुद्धि)',
    chariotReins: 'लगाम (मन)',
    chariotHorses: 'इन्द्रियाँ रूपी अश्व',
    chariotBody: 'रथ (शरीर)',

    diagnosticTag: 'आत्म-निरीक्षण दर्पण',
    diagnosticTitle: 'आत्म-संकल्प अन्वेषण एवं परीक्षा',
    diagnosticSubtitle: 'एक गहन आत्म-विश्लेषण जो यह प्रकट करता है कि आपके विचारों, प्रार्थनाओं और संबंधों का वास्तविक सारथी कौन है — अहंकार, आत्म-संकल्प, या सच्ची विनम्रता।',
    diagnosticQuestionOf: 'परीक्षा प्रश्न',
    diagnosticPrevBtn: 'पिछला प्रश्न',
    diagnosticNextBtn: 'अगला प्रश्न',
    diagnosticCompleteBtn: 'निष्कर्ष देखें',
    diagnosticRetakeBtn: 'पुनः परीक्षा दें',
    diagnosticArchetypeDetected: 'पहचाना गया मुख्य सारथी',
    diagnosticVulnerability: 'मूल दुर्बलता',
    diagnosticPrescription: 'ध्यान व मुक्ति का सुझाव',

    kenosisTitle: 'केनोसिस ध्यान कक्ष',
    kenosisSubtitle: 'अहंकार और नियंत्रण से मुक्ति के चार चरण (Radical Self-Emptying)',
    kenosisStage: 'चरण',
    kenosisBreathInhale: 'श्वास लें · ग्रहण करें',
    kenosisBreathHold: 'श्वास रोकें · शांत स्थिरता',
    kenosisBreathExhale: 'श्वास छोड़ें · समर्पण करें',
    kenosisCompleteTitle: 'समर्पण और शून्यता की प्राप्ति',
    kenosisCompleteText: 'आपने नियंत्रण की लगाम छोड़ दी है। अब आप उस साक्षी चेतना में विश्राम कर रहे हैं जहाँ ईश्वर को स्वतंत्र रहने दिया जाता है।',
    kenosisNextStage: 'अगले चरण पर जाएं',
    kenosisReturnBtn: 'मुख्य पृष्ठ पर वापस जाएं',

    footerTreatise: 'ईश्वर का सारथी · आध्यात्मिक अहंकार और आत्म-संकल्प पर दार्शनिक शोध',
    footerRights: 'ध्यान, गहन विचार और आत्म-सुधार हेतु समर्पित।',
    footerClientNotice: 'पूर्णतः सुरक्षित व निजी। कोई व्यक्तिगत डेटा एकत्र नहीं किया जाता।',
    footerBackToTop: 'शीर्ष पर वापस जाएं'
  }
};
