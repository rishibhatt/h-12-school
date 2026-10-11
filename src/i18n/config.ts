import { Locale } from '@/types/i18n';

export const LOCALES: { code: Locale; label: string; nativeName: string }[] = [
  { code: 'en', label: 'English', nativeName: 'English' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी' },
];

export const DEFAULT_LOCALE: Locale = 'en';
