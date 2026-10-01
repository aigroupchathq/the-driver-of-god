import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', variant = 'compact' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded border border-stone-200 bg-stone-100/90 p-0.5 text-xs font-mono transition-colors ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded transition-all min-h-[32px] sm:min-h-0 flex items-center gap-1 ${
          language === 'en'
            ? 'bg-white text-stone-900 font-semibold shadow-2xs border border-stone-200/80'
            : 'text-stone-500 hover:text-stone-900'
        }`}
        title="English"
      >
        <span className="font-medium">EN</span>
      </button>

      <span className="text-stone-300 px-0.5 select-none" aria-hidden="true">/</span>

      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 rounded transition-all min-h-[32px] sm:min-h-0 flex items-center gap-1 font-serif ${
          language === 'hi'
            ? 'bg-white text-orange-700 font-semibold shadow-2xs border border-stone-200/80'
            : 'text-stone-500 hover:text-stone-900'
        }`}
        title="हिन्दी (Hindi)"
      >
        <Languages className="w-3 h-3 text-orange-600" />
        <span className="tracking-wide">हिन्दी</span>
      </button>
    </div>
  );
};
