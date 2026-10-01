import React, { useState, useEffect, useRef } from 'react';
import { SPIRITUAL_NARRATIVE_ARCS } from '../data/narrativeArcsData';
import {
  Film,
  Camera,
  Sun,
  Volume2,
  Sparkles,
  Copy,
  Check,
  ChevronRight
} from 'lucide-react';
import { SpiritualNarrativeArc, CinematicScene } from '../types';
import { soundEngine } from '../utils/audio';
import { CosmicBackdropElement } from './CosmicBackdropElement';

export const InnerLightStudio: React.FC = () => {
  const [selectedArcIndex, setSelectedArcIndex] = useState<number>(0);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const monitorCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeArc: SpiritualNarrativeArc = SPIRITUAL_NARRATIVE_ARCS[selectedArcIndex];
  const activeScene: CinematicScene = activeArc.scenes[selectedSceneIndex] || activeArc.scenes[0];

  const getFrequencyForArc = (arcIdx: number) => {
    if (arcIdx === 0) return 528;
    if (arcIdx === 1) return 432;
    return 741;
  };

  const handleToggleSceneAudio = () => {
    if (isPlayingAudio) {
      soundEngine.stopDrone();
      setIsPlayingAudio(false);
    } else {
      const freq = getFrequencyForArc(selectedArcIndex);
      soundEngine.playSolfeggioTone(freq);
      soundEngine.playSingingBowlBell(freq / 2);
      setIsPlayingAudio(true);
    }
  };

  // 9:16 Cinematic Canvas Simulation
  useEffect(() => {
    const canvas = monitorCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 640);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 360;
      height = canvas.height = canvas.parentElement?.clientHeight || 640;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Clean cinematic vertical backdrop
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (selectedArcIndex === 0) {
        bgGrad.addColorStop(0, '#fefce8');
        bgGrad.addColorStop(0.5, '#ecfdf5');
        bgGrad.addColorStop(1, '#f0fdf4');
      } else if (selectedArcIndex === 1) {
        bgGrad.addColorStop(0, '#fffbeb');
        bgGrad.addColorStop(0.5, '#fef3c7');
        bgGrad.addColorStop(1, '#f8fafc');
      } else {
        bgGrad.addColorStop(0, '#fff7ed');
        bgGrad.addColorStop(0.5, '#ffedd5');
        bgGrad.addColorStop(1, '#f0f9ff');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.45;

      // Volumetric Vertical Light Beam
      ctx.save();
      const rayGrad = ctx.createLinearGradient(cx, 0, cx, height);
      rayGrad.addColorStop(0, 'rgba(234, 88, 12, 0.2)');
      rayGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.1)');
      rayGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = rayGrad;
      ctx.beginPath();
      ctx.moveTo(cx - 25, 0);
      ctx.lineTo(cx + 25, 0);
      ctx.lineTo(cx + 100, height);
      ctx.lineTo(cx - 100, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Anahata Sacred Geometry: Shatkona
      ctx.save();
      ctx.translate(cx, cy);
      const pulse = Math.sin(time * 2) * 5;
      const size = 65 + pulse;

      // Ascending Triangle
      ctx.strokeStyle = '#ea580c';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.866, size * 0.5);
      ctx.lineTo(-size * 0.866, size * 0.5);
      ctx.closePath();
      ctx.stroke();

      // Descending Triangle
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, size);
      ctx.lineTo(size * 0.866, -size * 0.5);
      ctx.lineTo(-size * 0.866, -size * 0.5);
      ctx.closePath();
      ctx.stroke();

      // Central Unstruck Flame
      ctx.beginPath();
      ctx.arc(0, 0, 10 + Math.sin(time * 4) * 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ea580c';
      ctx.fill();

      // 12 Outer Lotus Petals
      for (let p = 0; p < 12; p++) {
        const rad = (p * Math.PI) / 6 + time * 0.1;
        const petX = Math.cos(rad) * (size + 15);
        const petY = Math.sin(rad) * (size + 15);
        ctx.beginPath();
        ctx.arc(petX, petY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#059669';
        ctx.fill();
      }

      ctx.restore();

      // Subtle dust motes
      for (let i = 0; i < 20; i++) {
        const px = (Math.sin(time + i * 43) * 0.5 + 0.5) * width;
        const py = ((time * 20 + i * 32) % height);
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 88, 12, 0.3)';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [selectedArcIndex, selectedSceneIndex]);

  const handleCopyScript = () => {
    let scriptText = `=================================================================\n`;
    scriptText += `PRODUCTION SCRIPT: SELF-REALIZATION - THE INNER LIGHT\n`;
    scriptText += `ARC 0${activeArc.arcNumber}: ${activeArc.title.toUpperCase()}\n`;
    scriptText += `FORMAT: 9:16 Vertical Cinematic Production\n`;
    scriptText += `HERMETIC PRINCIPLE: ${activeArc.hermeticFocus}\n`;
    scriptText += `ANAHATA FREQUENCY: ${activeArc.solfeggioFrequency}\n`;
    scriptText += `LOGLINE: ${activeArc.logline}\n`;
    scriptText += `=================================================================\n\n`;

    activeArc.scenes.forEach((sc) => {
      scriptText += `--- SCENE 0${sc.sceneNumber}: ${sc.title.toUpperCase()} (${sc.timestamp}) ---\n`;
      scriptText += `FRAMING: ${sc.framingRatio}\n`;
      scriptText += `CAMERA MOVEMENT: ${sc.cameraMovement}\n`;
      scriptText += `LIGHTING ARCHITECTURE: ${sc.lightingTechnique}\n`;
      scriptText += `SOUND DESIGN & SOLFEGGIO: ${sc.soundDesign}\n`;
      scriptText += `HERMETIC AXIOM: ${sc.hermeticAxiom}\n`;
      scriptText += `ANAHATA SYMBOLISM: ${sc.anahataSymbolism}\n`;
      scriptText += `VISUAL ACTION: ${sc.visualAction}\n`;
      scriptText += `VOICEOVER: ${sc.voiceover}\n\n`;
    });

    navigator.clipboard.writeText(scriptText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="inner-light-studio" className="py-20 px-6 border-b border-[#e7e5e4] relative overflow-hidden">
      {/* Volumetric Dark Cosmic Void Background Elements */}
      <CosmicBackdropElement position="top-right" variant="hermetic-macrocosm-void" size="xl" intensity="deep" />
      <CosmicBackdropElement position="bottom-left" variant="black-hole-singularity" size="lg" intensity="deep" />
      <CosmicBackdropElement position="center-right" variant="nebula-void" size="md" intensity="subtle" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-500 mb-3">
              <Film className="w-4 h-4 text-orange-600" />
              <span>9:16 Vertical Cinematic Production</span>
              <span aria-hidden="true">·</span>
              <span>Anahata Chakra & Hermetic Law</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal tracking-tight mb-3">
              Self-Realization: The Inner Light
            </h2>
            <p className="text-base sm:text-lg text-stone-700 font-serif leading-relaxed">
              Three distinct vertical spiritual narrative arcs exploring the Anahata Heart Chakra through Hermetic axioms (<em>“As Above, So Below; As Within, So Without”</em>). Complete with technical camera choreography, volumetric lighting, and spatial Solfeggio sound design.
            </p>
          </div>

          <button
            onClick={handleCopyScript}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-sans uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors shadow-xs active:scale-95 shrink-0 self-start md:self-end"
          >
            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{isCopied ? 'Script Copied' : 'Export 9:16 Production Script'}</span>
          </button>
        </div>

        {/* Narrative Arc Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SPIRITUAL_NARRATIVE_ARCS.map((arc, idx) => {
            const isSelected = selectedArcIndex === idx;
            return (
              <button
                key={arc.id}
                onClick={() => {
                  setSelectedArcIndex(idx);
                  setSelectedSceneIndex(0);
                  if (isPlayingAudio) {
                    soundEngine.stopDrone();
                    setIsPlayingAudio(false);
                  }
                }}
                className={`p-5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'hairline-card-active'
                    : 'hairline-card hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                  <span>Arc 0{arc.arcNumber}</span>
                  <span className="text-orange-600 font-medium">{arc.solfeggioFrequency.split(' ')[0]}</span>
                </div>
                <h3 className="text-lg font-serif text-stone-900 font-medium mb-1">
                  {arc.title.split(':')[0]}
                </h3>
                <p className="text-xs font-serif italic text-stone-500 line-clamp-1 mb-2">
                  {arc.subtitle}
                </p>
                <p className="text-xs font-sans text-stone-600 line-clamp-2">
                  {arc.theme}
                </p>
              </button>
            );
          })}
        </div>

        {/* Workspace: 9:16 Vertical Monitor & Director's Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* 9:16 Vertical Cinema Monitor */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2 flex items-center justify-between w-full max-w-[300px]">
              <span>9:16 Frame</span>
              <span className="text-orange-600 font-semibold">{activeScene.timestamp}</span>
            </div>

            {/* The 9:16 Aspect Container */}
            <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-stone-300 bg-white shadow-md">
              <canvas ref={monitorCanvasRef} className="w-full h-full block" />

              {/* Top HUD */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-stone-800 bg-white/90 px-2.5 py-1.5 rounded border border-stone-200 shadow-xs">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  <span>9:16 VERTICAL</span>
                </span>
                <span>SCENE 0{activeScene.sceneNumber}</span>
              </div>

              {/* Bottom Voiceover Inscription */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 border border-stone-200 shadow-xs">
                <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block mb-0.5">
                  Voiceover Inscription:
                </span>
                <p className="text-xs font-serif italic text-stone-900 leading-relaxed line-clamp-3">
                  {activeScene.voiceover}
                </p>
              </div>
            </div>

            {/* Solfeggio Audio Trigger */}
            <div className="w-full max-w-[300px] mt-4 flex items-center justify-between p-3 rounded-xl hairline-card text-xs font-mono">
              <div className="flex items-center gap-2">
                <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'text-orange-600' : 'text-stone-400'}`} />
                <span className="text-stone-700">
                  {activeArc.solfeggioFrequency.split(' ')[0]} Tone
                </span>
              </div>
              <button
                onClick={handleToggleSceneAudio}
                className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors font-medium"
              >
                {isPlayingAudio ? 'Mute' : 'Play Tone'}
              </button>
            </div>
          </div>

          {/* Director's Technical Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            {/* Scene Stepper */}
            <div className="flex items-center gap-2 pb-3 border-b border-stone-200 text-xs font-mono">
              {activeArc.scenes.map((sc, sIdx) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedSceneIndex(sIdx)}
                  className={`py-1.5 px-3 rounded transition-colors ${
                    selectedSceneIndex === sIdx
                      ? 'bg-stone-900 text-white font-medium'
                      : 'text-stone-600 hover:text-stone-900 bg-stone-100'
                  }`}
                >
                  Part 0{sc.sceneNumber}
                </button>
              ))}
            </div>

            {/* Active Scene Technical Card */}
            <div className="hairline-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                  Scene 0{activeScene.sceneNumber} · {activeScene.timestamp}
                </span>
                <h3 className="text-2xl font-serif text-stone-900 font-normal">
                  {activeScene.title}
                </h3>
                <div className="mt-2 p-2.5 rounded-lg bg-[#fdfbf7] border border-stone-200 text-xs font-serif italic text-stone-700">
                  {activeScene.hermeticAxiom}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-stone-500 mb-1">
                    <Camera className="w-3.5 h-3.5 text-orange-600" />
                    <span>Vertical Camera Movement</span>
                  </div>
                  <p className="text-xs font-sans text-stone-700 leading-relaxed">
                    {activeScene.cameraMovement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-stone-500 mb-1">
                    <Sun className="w-3.5 h-3.5 text-orange-600" />
                    <span>Volumetric Lighting</span>
                  </div>
                  <p className="text-xs font-sans text-stone-700 leading-relaxed">
                    {activeScene.lightingTechnique}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-stone-500 mb-1">
                    <Volume2 className="w-3.5 h-3.5 text-teal-700" />
                    <span>Sound Design</span>
                  </div>
                  <p className="text-xs font-sans text-stone-700 leading-relaxed">
                    {activeScene.soundDesign}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-stone-500 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                    <span>Anahata Heart Symbol</span>
                  </div>
                  <p className="text-xs font-sans text-stone-700 leading-relaxed">
                    {activeScene.anahataSymbolism}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-1">
                  Choreography & Visual Action:
                </span>
                <p className="text-xs sm:text-sm font-sans text-stone-800 leading-relaxed">
                  {activeScene.visualAction}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fdfbf7] border border-stone-200">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-1">
                  Cinematic Voiceover:
                </span>
                <p className="text-sm font-serif italic text-stone-900 leading-relaxed">
                  {activeScene.voiceover}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
