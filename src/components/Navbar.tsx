import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  onOpenKenosis: () => void;
  activeSound: boolean;
  onToggleSound: () => void;
  onOpenOnboarding: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenKenosis,
  activeSound,
  onToggleSound,
  onOpenOnboarding
}) => {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth active section tracking
  useEffect(() => {
    const sections = ['the-chain', 'historical-timeline', 'the-mirror', 'cosmic-orrery', 'inner-light-studio', 'the-chariot', 'the-codex'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${targetId}`);
    }
  };

  const navLinks = [
    { id: 'the-chain', label: t.navChain },
    { id: 'historical-timeline', label: t.navTimeline },
    { id: 'the-mirror', label: t.navInquest },
    { id: 'cosmic-orrery', label: t.navOrrery },
    { id: 'inner-light-studio', label: t.navStudio, highlight: true },
    { id: 'the-chariot', label: t.navChariot },
    { id: 'the-codex', label: t.navCodex }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e7e5e4] px-4 sm:px-6 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark with archival font */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base sm:text-lg font-serif font-semibold tracking-wider text-stone-900 hover:text-orange-600 transition-colors uppercase whitespace-nowrap flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-orange-600 inline-block animate-pulse" />
          <span>{t.brandTitle}</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links with smooth hover and active state */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-sans tracking-wider uppercase font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`transition-all duration-200 underline-offset-4 ${
                  isActive
                    ? 'text-orange-600 font-semibold underline decoration-orange-500'
                    : link.highlight
                    ? 'text-orange-600 hover:text-orange-700 font-semibold hover:underline'
                    : 'text-stone-600 hover:text-stone-950 hover:underline'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector: English / हिन्दी */}
          <LanguageToggle />

          <button
            onClick={onOpenOnboarding}
            className="lg:hidden px-2 py-1 text-xs font-mono text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors btn-smooth"
            title="Open guide"
          >
            {t.navGuideBtn}
          </button>

          <button
            onClick={onToggleSound}
            aria-label={activeSound ? 'Mute acoustic harmonic drone' : 'Play acoustic harmonic drone'}
            className="btn-smooth flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded transition-colors"
            title={activeSound ? 'Mute soundscape' : 'Listen to 108Hz harmonic drone'}
          >
            {activeSound ? <Volume2 className="w-3.5 h-3.5 text-orange-600" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
            <span className="hidden sm:inline font-mono">{activeSound ? t.navAudioOn : t.navAudioOff}</span>
          </button>

          <button
            onClick={onOpenKenosis}
            className="btn-smooth flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-sans uppercase tracking-wider font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded transition-colors shadow-xs whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.navKenosisBtn}</span>
            <span className="sm:hidden">Kenosis</span>
          </button>
        </div>
      </div>

      {/* Subtle reading progress depth line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};
