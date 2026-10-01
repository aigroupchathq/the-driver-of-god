import React, { useState, useEffect } from 'react';
import { DIAGNOSTIC_QUESTIONS, DRIVER_ARCHETYPES } from '../data/diagnosticData';
import {
  Eye,
  RotateCcw,
  Compass,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Copy,
  Check,
  Activity,
  Layers,
  FileText,
  LifeBuoy,
  Scale,
  History,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { DriverArchetype, ChainLinkKey, DiagnosticOption } from '../types';
import { progressionStorage, DiagnosticSessionRecord } from '../utils/progressionStorage';
import { CosmicBackdropElement } from './CosmicBackdropElement';

export const DiagnosticSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'chain_flow' | 'psychology' | 'antidote' | 'history'>('chain_flow');
  const [copied, setCopied] = useState<boolean>(false);
  const [pastSessions, setPastSessions] = useState<DiagnosticSessionRecord[]>([]);

  useEffect(() => {
    setPastSessions(progressionStorage.getHistory());
  }, []);

  const currentQ = DIAGNOSTIC_QUESTIONS[currentQuestionIndex];
  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    const updated = { ...selectedAnswers, [currentQuestionIndex]: optionIndex };
    setSelectedAnswers(updated);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      const finalScores = calculateScores(updated);
      progressionStorage.saveSession({
        selfWillScore: finalScores.percentages.self_will,
        prideScore: finalScores.percentages.pride,
        selfCenterednessScore: finalScores.percentages.self_centeredness,
        playingGodScore: finalScores.percentages.playing_god,
        kenosisScore: finalScores.percentages.receptive_witness,
        primaryDriver: finalScores.primaryArchetype.name,
        ignitionNode: finalScores.ignitionNode
      });
      setPastSessions(progressionStorage.getHistory());
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setActiveTab('chain_flow');
  };

  const calculateScores = (answers: Record<number, number>) => {
    const counts: Record<ChainLinkKey, number> = {
      pride: 0,
      self_will: 0,
      self_centeredness: 0,
      playing_god: 0,
      receptive_witness: 0
    };

    DIAGNOSTIC_QUESTIONS.forEach((q, idx) => {
      const optIdx = answers[idx];
      if (optIdx !== undefined && q.options[optIdx]) {
        const driver = q.options[optIdx].driver;
        counts[driver] = (counts[driver] || 0) + 1;
      }
    });

    const answeredCount = Object.keys(answers).length || 1;

    const percentages: Record<ChainLinkKey, number> = {
      pride: Math.round((counts.pride / answeredCount) * 100),
      self_will: Math.round((counts.self_will / answeredCount) * 100),
      self_centeredness: Math.round((counts.self_centeredness / answeredCount) * 100),
      playing_god: Math.round((counts.playing_god / answeredCount) * 100),
      receptive_witness: Math.round((counts.receptive_witness / answeredCount) * 100)
    };

    let highestDriver: ChainLinkKey = 'pride';
    let maxCount = -1;

    (Object.keys(counts) as ChainLinkKey[]).forEach((key) => {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        highestDriver = key;
      }
    });

    let ignitionNode = 'Pride (Epistemic Certainty)';
    if (counts.pride > 0) {
      ignitionNode = 'Station 1: Pride (Epistemological Hubris)';
    } else if (counts.self_will > 0) {
      ignitionNode = 'Station 2: Self-Will (Transactional Demand)';
    } else if (counts.self_centeredness > 0) {
      ignitionNode = 'Station 3: Self-Centeredness (Personal Inversion)';
    } else if (counts.playing_god > 0) {
      ignitionNode = 'Station 4: Playing God (Moral Usurpation)';
    } else {
      ignitionNode = 'Kenosis (Surrendered Witness)';
    }

    const primaryArchetype: DriverArchetype =
      DRIVER_ARCHETYPES[highestDriver] || DRIVER_ARCHETYPES['pride'];

    return { counts, percentages, highestDriver, ignitionNode, primaryArchetype, answeredCount };
  };

  const results = calculateScores(selectedAnswers);
  const trendData = progressionStorage.getTrend();

  const handleCopySummary = () => {
    const text = `--- THE DRIVER OF GOD: INQUEST DOSSIER ---
Identified Driver: ${results.primaryArchetype.name}
Creed: ${results.primaryArchetype.motto}
Chain Activation Profile:
• Station 1 (Pride): ${results.percentages.pride}%
• Station 2 (Self-Will): ${results.percentages.self_will}%
• Station 3 (Self-Centeredness): ${results.percentages.self_centeredness}%
• Station 4 (Playing God): ${results.percentages.playing_god}%
• Kenotic Receptivity Counter-Pole: ${results.percentages.receptive_witness}%

Root Chain Ignition: ${results.ignitionNode}
Theological Distortion: ${results.primaryArchetype.theologyDistortion}
Ancient Antidote: ${results.primaryArchetype.ancientRemedy}
Quote: ${results.primaryArchetype.sacredTextQuote.quote} (${results.primaryArchetype.sacredTextQuote.source})
-------------------------------------------------------`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="the-mirror" className="py-20 px-6 border-b border-[#e7e5e4] relative overflow-hidden">
      {/* Volumetric Dark Cosmos Background Decorations */}
      <CosmicBackdropElement position="top-right" variant="coordinate-ring" size="lg" intensity="deep" />
      <CosmicBackdropElement position="bottom-left" variant="black-hole-singularity" size="xl" intensity="medium" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-500 mb-3">
            <Scale className="w-4 h-4 text-orange-600" />
            <span>Liber III: The Inquest of the Conscience</span>
            <span aria-hidden="true">·</span>
            <span>Psychological Self-Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal tracking-tight mb-4">
            The Inquest of the Driver
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-serif leading-relaxed">
            Eight psychological crucibles designed to strip away pious rationalization, tracing the exact coordinate where your ego seizes the helm of the sacred. Tracks your Self-Will progression across multiple sessions.
          </p>
        </div>

        {!isCompleted ? (
          /* QUESTIONNAIRE IN PROGRESS */
          <div className="hairline-card rounded-2xl p-6 sm:p-10 relative">
            {/* Live Progress Header (Zero-Pill Discipline) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-stone-200 text-xs font-mono text-stone-500">
              <div className="flex items-center gap-2">
                <span>Crucible 0{currentQuestionIndex + 1} of 0{totalQuestions}</span>
                <span aria-hidden="true">·</span>
                <span>Uncensored Reflex</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Completed: {Math.round((Object.keys(selectedAnswers).length / totalQuestions) * 100)}%</span>
              </div>
            </div>

            {/* Stepper Dots (Clean hairline dots) */}
            <div className="flex items-center gap-2 mb-8">
              {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isCurrent = currentQuestionIndex === idx;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      isCurrent
                        ? 'w-8 bg-orange-600'
                        : isAnswered
                        ? 'w-3 bg-stone-800'
                        : 'w-2 bg-stone-300'
                    }`}
                    aria-label={`Go to crucible ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Scenario Header */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Crucible 0{currentQ.id}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal mb-3">
                {currentQ.scenario}
              </h3>
              <p className="text-base font-serif text-stone-700 leading-relaxed max-w-3xl">
                {currentQ.context}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 mt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-2">
                Select your spontaneous psychological response:
              </span>

              {currentQ.options.map((opt: DiagnosticOption, oIdx: number) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full text-left p-5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected
                        ? 'hairline-card-active bg-orange-50/20'
                        : 'hairline-card hover:border-stone-300'
                    }`}
                  >
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
                        <span className="text-stone-700 font-medium">{opt.chainStage}</span>
                        <span aria-hidden="true">·</span>
                        <span>{opt.cognitiveSignature}</span>
                      </div>
                      <p className="text-base font-serif text-stone-900 font-medium">
                        {opt.text}
                      </p>
                      <p className="text-xs font-sans text-stone-600 mt-1">
                        {opt.subtext}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono text-stone-400 group-hover:text-stone-900 self-end sm:self-center">
                      <span>Select</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Back Navigation */}
            {currentQuestionIndex > 0 && (
              <div className="mt-8 pt-4 border-t border-stone-200">
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                  className="text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
                >
                  ← Return to prior crucible
                </button>
              </div>
            )}
          </div>
        ) : (
          /* RESULTS DOSSIER */
          <div className="hairline-card rounded-2xl p-6 sm:p-10 relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                  Primary Unconscious Driver
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 font-normal">
                  {results.primaryArchetype.name}
                </h3>
                <p className="text-xs font-serif italic text-stone-500 mt-1">
                  Historical Archetype: {results.primaryArchetype.ancientParallel}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySummary}
                  className="px-3.5 py-1.5 text-xs font-mono text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded transition-colors"
                >
                  {copied ? 'Copied to Clipboard' : 'Export Dossier'}
                </button>
                <button
                  onClick={handleReset}
                  className="px-3.5 py-1.5 text-xs font-mono text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded transition-colors"
                >
                  Repeat Inquest
                </button>
              </div>
            </div>

            {/* Multi-Session Progression Status */}
            <div className="my-6 p-4 rounded-xl bg-[#fdfbf7] border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-0.5">
                  Multi-Session Self-Will Progression:
                </span>
                <p className="text-xs sm:text-sm font-sans text-stone-800">
                  {trendData.message}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-mono text-stone-400 block">Current Self-Will</span>
                <span className="text-2xl font-mono font-semibold text-orange-600 tabular-nums">
                  {results.percentages.self_will}%
                </span>
              </div>
            </div>

            {/* Secret Creed Quote */}
            <blockquote className="my-6 p-4 border-l-2 border-orange-500 bg-[#fdfbf7] rounded-r-xl font-serif italic text-base sm:text-lg text-stone-900">
              “{results.primaryArchetype.motto}”
            </blockquote>

            {/* 4 Cascading Stations Tabular Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="text-xs font-mono text-stone-500 block mb-1">01. Pride</span>
                <span className="text-xl font-mono font-semibold text-stone-900 tabular-nums">
                  {results.percentages.pride}%
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="text-xs font-mono text-stone-500 block mb-1">02. Self-Will</span>
                <span className="text-xl font-mono font-semibold text-orange-600 tabular-nums">
                  {results.percentages.self_will}%
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="text-xs font-mono text-stone-500 block mb-1">03. Self-Centeredness</span>
                <span className="text-xl font-mono font-semibold text-stone-900 tabular-nums">
                  {results.percentages.self_centeredness}%
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <span className="text-xs font-mono text-stone-500 block mb-1">04. Playing God</span>
                <span className="text-xl font-mono font-semibold text-stone-900 tabular-nums">
                  {results.percentages.playing_god}%
                </span>
              </div>
            </div>

            {/* Navigation Tabs for Analysis */}
            <div className="flex items-center gap-2 border-b border-stone-200 mb-6 pb-2 text-xs font-mono uppercase tracking-wider">
              <button
                onClick={() => setActiveTab('chain_flow')}
                className={`py-1.5 px-3 rounded transition-colors ${
                  activeTab === 'chain_flow' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Chain Flow
              </button>
              <button
                onClick={() => setActiveTab('psychology')}
                className={`py-1.5 px-3 rounded transition-colors ${
                  activeTab === 'psychology' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Shadow Diagnosis
              </button>
              <button
                onClick={() => setActiveTab('antidote')}
                className={`py-1.5 px-3 rounded transition-colors ${
                  activeTab === 'antidote' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Ancient Antidote
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-1.5 px-3 rounded transition-colors ${
                  activeTab === 'history' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Session History ({pastSessions.length})
              </button>
            </div>

            {/* Tab 1: Chain Flow */}
            {activeTab === 'chain_flow' && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Ignition Analysis
                </h4>
                <p className="text-base font-serif text-stone-800 leading-relaxed">
                  Your responses indicate that the primary ignition point begins with <strong className="font-semibold text-stone-900">{results.ignitionNode}</strong>.
                  When life confronts you with vulnerability, your ego does not openly declare war on reality; it negotiates through intellectual certainty or transactional bargaining.
                </p>
              </div>
            )}

            {/* Tab 2: Psychology */}
            {activeTab === 'psychology' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                    Unconscious Vulnerability
                  </h4>
                  <p className="text-sm font-sans text-stone-800 leading-relaxed">
                    {results.primaryArchetype.coreVulnerability}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                    Theological Distortion
                  </h4>
                  <p className="text-sm font-serif text-stone-800 leading-relaxed">
                    {results.primaryArchetype.theologyDistortion}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Antidote */}
            {activeTab === 'antidote' && (
              <div className="space-y-4">
                <p className="text-base font-serif text-stone-900 leading-relaxed">
                  {results.primaryArchetype.ancientRemedy}
                </p>
                <blockquote className="border-l-2 border-orange-500 pl-4 py-2 italic font-serif text-sm text-stone-700 bg-[#fdfbf7]">
                  {results.primaryArchetype.sacredTextQuote.quote}
                  <footer className="not-italic text-xs font-mono text-stone-500 mt-1">
                    — {results.primaryArchetype.sacredTextQuote.source}
                  </footer>
                </blockquote>
              </div>
            )}

            {/* Tab 4: Session History */}
            {activeTab === 'history' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-stone-500">
                    Archived Inquests ({pastSessions.length})
                  </span>
                  {pastSessions.length > 0 && (
                    <button
                      onClick={() => {
                        progressionStorage.clearHistory();
                        setPastSessions([]);
                      }}
                      className="text-xs font-mono text-stone-500 hover:text-stone-900 underline"
                    >
                      Clear Archives
                    </button>
                  )}
                </div>

                <div className="divide-y divide-stone-200">
                  {pastSessions.map((session, sIdx) => (
                    <div key={session.id} className="py-3 flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-stone-900 font-medium">Session 0{pastSessions.length - sIdx}</span>
                        <span className="text-stone-400 mx-2">·</span>
                        <span className="text-stone-500">{session.formattedDate}</span>
                        <span className="text-stone-400 mx-2">·</span>
                        <span className="font-serif text-stone-800">{session.primaryDriver}</span>
                      </div>
                      <div className="flex items-center gap-4 tabular-nums">
                        <span>Self-Will: <strong className="text-orange-600">{session.selfWillScore}%</strong></span>
                        <span className="text-stone-400">|</span>
                        <span>Kenosis: <strong className="text-teal-700">{session.kenosisScore}%</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
