'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, TranslationDictionary } from '@/types/i18n';
import { DEFAULT_LOCALE } from './config';
import { enDictionary } from './dictionaries/en';
import { hiDictionary } from './dictionaries/hi';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: TranslationDictionary;
  isHindi: boolean;
}

const dictionaries: Record<Locale, TranslationDictionary> = {
  en: enDictionary,
  hi: hiDictionary,
};

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  dictionary: enDictionary,
  isHindi: false,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Sync document lang on client mount and when locale changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem('h12_preferred_locale') as Locale | null;
      if (saved && (saved === 'en' || saved === 'hi') && saved !== locale) {
        document.documentElement.lang = saved;
      } else {
        document.documentElement.lang = locale;
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      document.documentElement.lang = newLocale;
      localStorage.setItem('h12_preferred_locale', newLocale);
    } catch {
      // Ignore storage errors
    }
  };

  const dictionary = dictionaries[locale] || enDictionary;
  const isHindi = locale === 'hi';

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dictionary, isHindi }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LocaleProvider');
  }
  return context;
}
