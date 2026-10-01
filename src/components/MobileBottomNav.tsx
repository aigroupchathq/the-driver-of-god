import { Compass, Scale, Film, Orbit, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileBottomNavProps {
  onOpenKenosis: () => void;
  onOpenOnboarding: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenKenosis,
  onOpenOnboarding
}) => {
  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { language } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#faf9f6]/95 backdrop-blur-lg border-t border-orange-200 pb-safe shadow-lg">
      <div className="grid grid-cols-5 items-center h-16 px-1">
        {/* Nav Item 1: Dial */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '')}
          className="flex flex-col items-center justify-center min-h-[44px] text-stone-600 hover:text-orange-600 active:scale-95 transition-all font-medium"
        >
          <Compass className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-mono tracking-tight">{language === 'hi' ? 'चक्र' : 'The Dial'}</span>
        </a>

        {/* Nav Item 2: Inquest */}
        <a
          href="#the-mirror"
          onClick={(e) => handleScrollTo(e, 'the-mirror')}
          className="flex flex-col items-center justify-center min-h-[44px] text-stone-600 hover:text-orange-600 active:scale-95 transition-all font-medium"
        >
          <Scale className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-mono tracking-tight">{language === 'hi' ? 'परीक्षा' : 'Inquest'}</span>
        </a>

        {/* Nav Item 3: 9:16 Inner Light Studio */}
        <a
          href="#inner-light-studio"
          onClick={(e) => handleScrollTo(e, 'inner-light-studio')}
          className="flex flex-col items-center justify-center min-h-[44px] text-orange-600 active:scale-95 transition-all font-bold"
        >
          <Film className="w-5 h-5 mb-1 text-orange-500" />
          <span className="text-[10px] font-mono tracking-tight font-bold">{language === 'hi' ? '9:16 फ़िल्म' : '9:16 Film'}</span>
        </a>

        {/* Nav Item 4: Cosmic Orrery */}
        <a
          href="#cosmic-orrery"
          onClick={(e) => handleScrollTo(e, 'cosmic-orrery')}
          className="flex flex-col items-center justify-center min-h-[44px] text-stone-600 hover:text-orange-600 active:scale-95 transition-all font-medium"
        >
          <Orbit className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-mono tracking-tight">{language === 'hi' ? 'ब्रह्मांड' : 'Cosmos'}</span>
        </a>

        {/* Nav Item 5: Kenosis Chamber */}
        <button
          onClick={onOpenKenosis}
          className="flex flex-col items-center justify-center min-h-[44px] text-orange-600 active:scale-95 transition-all font-bold"
        >
          <Sparkles className="w-5 h-5 mb-1 text-orange-500" />
          <span className="text-[10px] font-mono tracking-tight font-bold">{language === 'hi' ? 'केनोसिस' : 'Kenosis'}</span>
        </button>
      </div>
    </div>
  );
};
