# Localization Architecture & Expansion Guide
## Bilingual (English / Hindi) System & Scalability Blueprint

This document details the localization architecture implemented across the H-12 School website, how translations are managed, and how to introduce additional regional or international languages.

---

### 1. Architecture Overview

The platform uses a centralized, type-safe dictionary pattern designed for high performance, zero hydration mismatches, and instant client-side switching:

```
src/i18n/
├── config.ts              # Supported locales, default locale, labels
├── context.tsx            # React Context & useTranslation hook
└── dictionaries/
    ├── en.ts              # English dictionary (source of truth for keys)
    └── hi.ts              # Hindi dictionary (Devanagari script)
```

#### Key Architecture Principles
1. **Zero Runtime Machine Translation:** All strings are pre-authored human translations to prevent awkward phrasing or incorrect educational terminology.
2. **Type-Safe Contract:** The English dictionary defines the TypeScript shape `Dictionary`. All alternate language dictionaries must strictly conform to this interface. Missing keys cause compile-time TypeScript errors.
3. **Graceful Fallback:** If an individual item lacks a localized translation, the system automatically falls back to the English string rather than failing or showing an empty slot.
4. **Persistent Preference:** Locale preference is stored in browser `localStorage` and respected across sessions.

---

### 2. Current Locale Configuration

From `src/i18n/config.ts`:

```typescript
export type SupportedLocale = 'en' | 'hi';

export interface LocaleMeta {
  code: SupportedLocale;
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
}

export const LOCALES: Record<SupportedLocale, LocaleMeta> = {
  en: { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  hi: { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', dir: 'ltr' },
};
```

---

### 3. Adding a New Language (e.g., French or Tamil)

Adding a third language requires four concise steps:

#### Step 1: Update Supported Locales
In `src/i18n/config.ts`, expand the union type and configuration object:
```typescript
export type SupportedLocale = 'en' | 'hi' | 'fr';

export const LOCALES: Record<SupportedLocale, LocaleMeta> = {
  en: { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  hi: { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', dir: 'ltr' },
  fr: { code: 'fr', label: 'French', nativeLabel: 'Français', dir: 'ltr' },
};
```

#### Step 2: Create the Locale Dictionary
Create `src/i18n/dictionaries/fr.ts`:
```typescript
import { Dictionary } from './en';

export const fr: Dictionary = {
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    academics: 'Études',
    campusLife: 'Vie de Campus',
    news: 'Actualités',
    events: 'Événements',
    gallery: 'Galerie',
    admissions: 'Admissions',
    contact: 'Contact',
    applyNow: 'Postuler',
    inquireNow: 'Demande d\'information',
  },
  // Complete remaining sections (hero, admissions, common, etc.)
};
```

#### Step 3: Register in Context
In `src/i18n/context.tsx`, import `fr` and add it to the `dictionaries` lookup map:
```typescript
import { fr } from './dictionaries/fr';

const dictionaries: Record<SupportedLocale, Dictionary> = {
  en,
  hi,
  fr,
};
```

#### Step 4: Expand Content Models (Optional)
For content collections (such as news articles or academic stages), localized fields are typed directly in `src/types/content.ts` (e.g., `title`, `titleHi`, `titleFr`). The page templates check for the active locale and render the corresponding field.

---

### 4. Layout & Text Expansion Safeguards

When translating from English to Hindi or European languages, text length typically expands by 15% to 30%. The design incorporates the following safeguards:

1. **Flexible Button & Badge Padding:** Buttons use inline-flex with horizontal padding rather than fixed CSS widths, allowing buttons to expand naturally without clipping text.
2. **Accessible Line Heights:** Hindi typography (Devanagari script) requires slightly greater vertical line height to accommodate upper and lower vowel diacritics (*matras*). The global font stack and headings provide a minimum `leading-snug` or `leading-relaxed` to prevent glyph collisions.
3. **Responsive Grid Breakpoints:** Navigation bars collapse into the mobile drawer on viewports smaller than 1024px (`lg:`), ensuring translated menu items do not crowd the header on tablet or compact screens.
