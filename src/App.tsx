import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChainSection } from './components/ChainSection';
import { DiagnosticSection } from './components/DiagnosticSection';
import { InnerLightStudio } from './components/InnerLightStudio';
import { CosmicOrrery } from './components/CosmicOrrery';
import { ExhibitionGallery } from './components/ExhibitionGallery';
import { ChariotSection } from './components/ChariotSection';
import { CodexSection } from './components/CodexSection';
import { MasksSection } from './components/MasksSection';
import { HistoricalTimeline } from './components/HistoricalTimeline';
import { KenosisChamber } from './components/KenosisChamber';
import { MobileOnboarding } from './components/MobileOnboarding';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { CosmicCanvas } from './components/CosmicCanvas';
import { soundEngine } from './utils/audio';

export default function App() {
  const [isKenosisOpen, setIsKenosisOpen] = useState<boolean>(false);
  const [activeSound, setActiveSound] = useState<boolean>(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);

  // Check if first-time mobile user
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const hasSeenGuide = localStorage.getItem('has_seen_driver_guide');
    if (isMobile && !hasSeenGuide) {
      setIsOnboardingOpen(true);
      localStorage.setItem('has_seen_driver_guide', 'true');
    }
  }, []);

  const toggleSound = () => {
    if (activeSound) {
      soundEngine.stopDrone();
      setActiveSound(false);
    } else {
      soundEngine.playDrone(108);
      setActiveSound(true);
    }
  };

  const handleOpenKenosis = () => {
    if (!activeSound) {
      soundEngine.playDrone(108);
      setActiveSound(true);
    }
    soundEngine.playSingingBowlBell();
    setIsKenosisOpen(true);
  };

  const handleOpenInquest = () => {
    const el = document.getElementById('the-mirror');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 selection:bg-orange-500/20 selection:text-orange-950 relative pb-16 sm:pb-0">
      {/* Serene Cosmic Starfield & Armillary Canvas Background in Warm Ivory & Orange */}
      <CosmicCanvas speedMultiplier={1} />

      {/* Top Bar Contract Navigation */}
      <Navbar
        onOpenKenosis={handleOpenKenosis}
        activeSound={activeSound}
        onToggleSound={toggleSound}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <ChainSection />
        <HistoricalTimeline />
        <DiagnosticSection />
        <InnerLightStudio />
        <CosmicOrrery />
        <ExhibitionGallery />
        <ChariotSection />
        <CodexSection />
        <MasksSection />
      </main>

      {/* Institutional Curatorial Footer */}
      <Footer />

      {/* Mobile-First Dedicated Bottom Navigation Bar */}
      <MobileBottomNav
        onOpenKenosis={handleOpenKenosis}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* Dedicated Mobile Onboarding Flow */}
      <MobileOnboarding
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onOpenInquest={handleOpenInquest}
        onOpenKenosis={handleOpenKenosis}
      />

      {/* The Contemplative Kenosis Laboratory Modal */}
      <KenosisChamber
        isOpen={isKenosisOpen}
        onClose={() => setIsKenosisOpen(false)}
        activeSound={activeSound}
        onToggleSound={toggleSound}
      />
    </div>
  );
}
