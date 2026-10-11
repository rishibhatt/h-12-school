'use client';

import React from 'react';
import { useTranslation } from '@/i18n/context';
import { LOCALES } from '@/i18n/config';
import { Globe } from 'lucide-react';

interface LocaleSwitcherProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function LocaleSwitcher({ className = '', variant = 'dark' }: LocaleSwitcherProps) {
  const { locale, setLocale } = useTranslation();
  const isLight = variant === 'light';

  const textStyles = isLight
    ? 'text-[#FAF7F2] hover:text-[#C89B3C]'
    : 'text-[#1A2430] hover:text-[#0B1B2B]';

  const activeStyles = isLight
    ? 'bg-[#C89B3C] text-[#0B1B2B] font-bold'
    : 'bg-[#0B1B2B] text-[#FAF7F2] font-semibold';

  const inactiveStyles = isLight
    ? 'text-[#FAF7F2]/80 hover:bg-white/10'
    : 'text-[#2E384D] hover:bg-[#F3ECE2]';

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 border ${
        isLight ? 'border-white/20' : 'border-[#E2DAD0]'
      } rounded-sm text-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className={`w-3.5 h-3.5 ml-1 ${textStyles}`} aria-hidden="true" />
      {LOCALES.map((loc) => {
        const isActive = locale === loc.code;
        return (
          <button
            key={loc.code}
            type="button"
            onClick={() => setLocale(loc.code)}
            className={`px-2 py-0.5 transition-colors cursor-pointer text-xs rounded-none ${
              isActive ? activeStyles : inactiveStyles
            }`}
            aria-pressed={isActive}
            aria-label={`Switch to ${loc.label}`}
          >
            {loc.code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
