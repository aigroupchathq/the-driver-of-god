import React, { useState, useEffect } from 'react';
import { X, Volume2, VolumeX, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { CosmicBackdropElement } from './CosmicBackdropElement';
import { useLanguage } from '../context/LanguageContext';

interface KenosisChamberProps {
  isOpen: boolean;
  onClose: () => void;
  activeSound: boolean;
  onToggleSound: () => void;
}

const KENOSIS_STAGES = [
  {
    step: 1,
    title: 'The Relinquishment of Certainty',
    targetChain: 'Breaking Station 01: Pride',
    ancientTerm: 'Apophatic Silence / Śūnyatā',
    contemplation:
      'Gently acknowledge that every concept, theology, and dogma you possess is a finite finger pointing at an infinite moon. The finger is not the moon.',
    breathInstruction: 'Inhale the vastness of the Unknowable; exhale the exhaustion of defending your conceptual fortress.',
    promptAction: 'I release my demand to possess the universe through my intellect.'
  },
  {
    step: 2,
    title: 'The Surrender of the Clenched Fist',
    targetChain: 'Breaking Station 02: Self-Will',
    ancientTerm: 'Prapatti / Amor Fati / Taslim',
    contemplation:
      'Locate the tension in your hands and solar plexus. This is your self-will demanding that life, people, and God follow your schedule. Notice what happens when you unclench.',
    breathInstruction: 'Inhale receptive trust; exhale the compulsive urge to micromanage reality.',
    promptAction: 'I relinquish my veto power over what reality brings today.'
  },
  {
    step: 3,
    title: 'Displacing the Solar Center',
    targetChain: 'Breaking Station 03: Self-Centeredness',
    ancientTerm: 'Bhakti / Agape / The Copernican Shift',
    contemplation:
      'Step out of the center of the stage. The universe is not a drama arranged to reward or afflict you personally. You are one blessed chord in a cosmic symphony.',
    breathInstruction: 'Inhale reverence for the Other; exhale the chronic ache of self-obsession.',
    promptAction: 'I embrace holy self-forgetfulness and behold creation with selfless wonder.'
  },
  {
    step: 4,
    title: 'Vacating the Sovereign Throne',
    targetChain: 'Breaking Station 04: Playing God',
    ancientTerm: 'Job 40:4 / The Silence of the Creature',
    contemplation:
      'Step down from the judgment seat. Lay down the gavel. Revoke your condemnation of every adversary, every tragedy, and yourself. Sit on the earth as a finite creature.',
    breathInstruction: 'Inhale creaturely awe; exhale all usurped thrones and false crowns.',
    promptAction: 'The throne belongs to the Unnameable. I take my place in the dust of gratitude.'
  }
];

const KENOSIS_STAGES_HI = [
  {
    step: 1,
    title: 'निश्चय और वैचारिक हठ का त्याग',
    targetChain: 'प्रथम चरण का समाधान: अहंकार (Pride)',
    ancientTerm: 'अपोफैटिक मौन / शून्यता (Śūnyatā)',
    contemplation:
      'गहराई से स्वीकार करें कि आपके सभी विचार और सिद्धांत केवल अनंत चंद्रमा की ओर संकेत करने वाली उंगली हैं। उंगली चंद्रमा नहीं है।',
    breathInstruction: 'अज्ञेय की अनंतता को श्वास में भरें; वैचारिक सुरक्षा के संघर्ष को श्वास छोड़ते हुए विसर्जित करें।',
    promptAction: 'मैं अपनी बुद्धि से पूरे ब्रह्मांड को नियंत्रित करने का हठ त्यागता हूँ।'
  },
  {
    step: 2,
    title: 'भींची हुई मुट्ठी का समर्पण',
    targetChain: 'द्वितीय चरण का समाधान: आत्म-संकल्प (Self-Will)',
    ancientTerm: 'प्रपत्ति / तस्लीम (Prapatti / Taslim)',
    contemplation:
      'अपने हाथों और नाभि के तनाव को महसूस करें। यह जीवन, लोगों और ईश्वर को अपने समय-सारणी पर चलाने का दबाव है। मुट्ठी खोलकर देखें।',
    breathInstruction: 'विश्वास और ग्रहणशीलता की श्वास लें; सब कुछ नियंत्रित करने की व्याकुलता को बाहर छोड़ें।',
    promptAction: 'आज जीवन जो भी लेकर आए, उस पर से मैं अपना वीटो और विरोध त्यागता हूँ।'
  },
  {
    step: 3,
    title: 'स्वयं को केंद्र से हटाना',
    targetChain: 'तृतीय चरण का समाधान: आत्म-केन्द्रितता (Self-Centeredness)',
    ancientTerm: 'भक्ति / निष्काम भाव (Bhakti / Agape)',
    contemplation:
      'मंच के केंद्र से हट जाएं। यह ब्रह्मांड केवल आपको सुख-दुख देने के लिए रची गई कथा नहीं है। आप इस विराट संगीत का एक सुंदर सुर हैं।',
    breathInstruction: 'समस्त सृष्टि के प्रति आदर की श्वास लें; निरंतर आत्म-चिंता की पीड़ा को बाहर निकालें।',
    promptAction: 'मैं पवित्र आत्म-विस्मृति को अपनाता हूँ और सृष्टि को निष्काम विस्मय से देखता हूँ।'
  },
  {
    step: 4,
    title: 'सर्वोच्च सिंहासन का त्याग',
    targetChain: 'चतुर्थ चरण का समाधान: ईश्वर बनने का भ्रम (Playing God)',
    ancientTerm: 'साक्षी भाव / जीव स्थिति (The Silence of the Creature)',
    contemplation:
      'न्यायाधीश के आसन से नीचे उतरें। हर त्रासदी, हर विरोधी और स्वयं पर से अपने निर्णय का हथौड़ा रख दें। एक विनम्र प्राणी के रूप में पृथ्वी पर बैठें।',
    breathInstruction: 'श्रद्धा और कृतज्ञता की श्वास लें; अहंकार के सभी झूठे मुकुट उतार दें।',
    promptAction: 'सर्वोच्च सत्ता केवल अनिर्वचनीय ईश्वर की है। मैं कृतज्ञता की धूलि में अपना स्थान लेता हूँ।'
  }
];

export const KenosisChamber: React.FC<KenosisChamberProps> = ({
  isOpen,
  onClose,
  activeSound,
  onToggleSound
}) => {
  const { t, language } = useLanguage();
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [personalRelinquishment, setPersonalRelinquishment] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');

  const activeStages = language === 'hi' ? KENOSIS_STAGES_HI : KENOSIS_STAGES;
  const currentStage = activeStages[currentStepIndex];

  // Paced Breathing Loop
  useEffect(() => {
    if (!isOpen) return;

    let timer: NodeJS.Timeout;
    const runBreathCycle = () => {
      setBreathPhase('Inhale');
      timer = setTimeout(() => {
        setBreathPhase('Hold');
        timer = setTimeout(() => {
          setBreathPhase('Exhale');
          timer = setTimeout(runBreathCycle, 5000);
        }, 3000);
      }, 4000);
    };

    runBreathCycle();
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleNextStep = () => {
    soundEngine.playSingingBowlBell();
    if (currentStepIndex < KENOSIS_STAGES.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsCompleted(false);
    setPersonalRelinquishment('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-auto card-white border border-orange-200 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Volumetric Dark Cosmos Background Elements */}
        <CosmicBackdropElement position="top-right" variant="hermetic-macrocosm-void" size="lg" intensity="medium" />
        <CosmicBackdropElement position="bottom-left" variant="coordinate-ring" size="md" intensity="deep" />

        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-orange-100 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-orange-700 font-bold">
              {language === 'hi' ? 'केनोसिस ध्यान कक्ष: आत्म-संकल्प का विसर्जन' : 'Kenosis Chamber: Unmaking Self-Will'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleSound}
              aria-label={activeSound ? 'Mute drone' : 'Unmute drone'}
              className="p-2 text-slate-500 hover:text-orange-600 rounded-xl hover:bg-orange-50 transition-colors"
            >
              {activeSound ? <Volume2 className="w-4 h-4 text-orange-600" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close chamber"
              className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!isCompleted ? (
          <div className="py-8 relative z-10">
            {/* Step Progress */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 font-semibold">
              <span>
                {language === 'hi' ? `चरण ०${currentStage.step} (कुल ०${activeStages.length})` : `Stage 0${currentStage.step} of 0${activeStages.length}`}
              </span>
              <span className="text-orange-600 font-serif italic">
                {currentStage.ancientTerm}
              </span>
            </div>

            {/* Sacred Geometry Visual Breathing Mandala in warm orange-yellow */}
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center w-48 h-48">
                <svg
                  viewBox="0 0 200 200"
                  className={`absolute inset-0 w-full h-full text-orange-400/50 transition-transform duration-1000 ${
                    breathPhase === 'Inhale'
                      ? 'scale-110 rotate-45 opacity-80'
                      : breathPhase === 'Hold'
                      ? 'scale-105 rotate-90 opacity-90'
                      : 'scale-90 rotate-0 opacity-40'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
                  <circle cx="100" cy="100" r="70" />
                  <circle cx="100" cy="100" r="50" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <circle
                      key={angle}
                      cx={100 + 40 * Math.cos((angle * Math.PI) / 180)}
                      cy={100 + 40 * Math.sin((angle * Math.PI) / 180)}
                      r="25"
                    />
                  ))}
                </svg>

                <div className="relative z-10 text-center font-mono text-xs uppercase tracking-widest text-slate-800">
                  <span className="text-orange-600 font-bold block text-sm sm:text-base">
                    {breathPhase === 'Inhale' ? t.kenosisBreathInhale : breathPhase === 'Hold' ? t.kenosisBreathHold : t.kenosisBreathExhale}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">{language === 'hi' ? 'श्वास ताल' : 'Kenotic Rhythm'}</span>
                </div>
              </div>
            </div>

            {/* Stage Inscription */}
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold block mb-1">
                {currentStage.targetChain}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal mb-3">
                {currentStage.title}
              </h3>
              <p className="text-sm sm:text-base font-serif text-slate-700 leading-relaxed italic mb-4">
                “{currentStage.contemplation}”
              </p>
              <p className="text-xs font-sans text-slate-700 leading-relaxed bg-orange-50/70 p-3 rounded-xl border border-orange-200">
                {currentStage.breathInstruction}
              </p>
            </div>

            {/* Surrender Confirmation Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleNextStep}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl shadow-md shadow-orange-500/20 transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>{currentStage.promptAction}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono text-slate-500 font-medium">
                {language === 'hi' ? 'घंटी की ध्वनि बजाएं और आगे बढ़ें' : 'Sounds the singing bowl bell & steps forward'}
              </span>
            </div>
          </div>
        ) : (
          /* Completion Seal */
          <div className="py-8 text-center max-w-xl mx-auto relative z-10">
            <div className="w-12 h-12 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center mx-auto mb-4 text-orange-600">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-normal mb-2">
              {t.kenosisCompleteTitle}
            </h3>
            <p className="text-sm font-serif italic text-slate-600 mb-6">
              {t.kenosisCompleteText}
            </p>

            <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-200 text-left mb-6">
              <label 
                htmlFor="relinquishment-input"
                className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold block mb-2"
              >
                {language === 'hi' ? 'अपना संकल्प या समर्पण दर्ज करें (वैकल्पिक):' : 'Seal Your Inscription (Optional):'}
              </label>
              <textarea
                id="relinquishment-input"
                value={personalRelinquishment}
                onChange={(e) => setPersonalRelinquishment(e.target.value)}
                placeholder={language === 'hi' ? 'आप अपने किस सूक्ष्म हठ, क्रोध या अहंकार को मौन की वेदी पर अर्पित कर रहे हैं?' : 'What subtle demand, resentment, or doctrinal pride are you placing on the altar of silence right now?'}
                rows={3}
                className="w-full p-3 bg-white border border-orange-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 font-serif"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-mono text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'पुनः ध्यान करें' : 'Repeat Contemplation'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 text-xs font-mono uppercase font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-lg shadow-sm transition-colors"
              >
                {t.kenosisReturnBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
