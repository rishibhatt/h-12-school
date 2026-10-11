# Technical & Brand Architecture: H-12 School

**Date:** October 11, 2026  
**Status:** Approved for Implementation  
**Project:** H-12 School (Customizable Commercial Starter & Portfolio Showcase)

---

## 1. Brand Identity System

### 1.1 Fictional Brand Positioning
- **Primary Brand Name:** H-12 SCHOOL
- **Descriptor:** *H-12 School of Learning & Discovery*
- **Archetype:** Classical Academic Authority infused with Modern Scientific Curiosity.
- **Brand Personality:** Confident, Warm, Rigorous, Student-Centered, Aspirational, Restrained.
- **Fictional Disclaimer:** Clear, tasteful notice displayed in the footer and admissions documentation confirming that H-12 School is an illustrative demonstration and customizable educational website starter.

### 1.2 Visual Direction & Design Tokens
Inspired by the Inspo education exemplars (*Vision Trilingual School*, *Design Education Series*, *UAL*) and Hallmark editorial rules:

| Token Name | Value | Purpose |
|---|---|---|
| `--color-paper` | `#FAF7F2` | Warm ivory paper background (eliminates clinical stark white) |
| `--color-paper-subtle` | `#F2ECE2` | Soft card and table tier tint |
| `--color-navy-deep` | `#0B1B2B` | Midnight navy foundation for text, contrast bands, and headers |
| `--color-navy-surface` | `#112538` | Deep card surface for dark contrast sections |
| `--color-gold-academic` | `#C89B3C` | Refined warm gold for accents, key stats, badges, and focus rings |
| `--color-gold-light` | `#F5ECD6` | Soft gold wash for highlights and active tab indicators |
| `--color-green-botanical`| `#2D5547` | Muted botanical green for nature/campus callouts |
| `--color-text-main` | `#1A2430` | Charcoal-navy for high legibility (>11:1 on ivory) |
| `--color-text-muted` | `#5A6776` | Editorial secondary text (>4.8:1 contrast) |
| `--color-border-hairline`| `#E4DDD2` | Precise architectural hairline grid lines |

### 1.3 Typography System (2+1 Font Discipline)
1. **Display / Headline:** Premium Editorial Serif / Modern Neo-Grotesk (`Playfair Display` or `Fraunces` for classic academic authority, paired with `Plus Jakarta Sans` for crisp contemporary legibility).
2. **Body / Interface:** `Plus Jakarta Sans` or `Inter` — optimized for effortless reading across mobile and desktop.
3. **Monospace / Metric Accents:** `JetBrains Mono` or tabular numerals for stage numbers (`01`, `02`, `03`), ratios (`1:12`), and dates.

### 1.4 Vector Monogram & Logo Mark
- **Monogram:** Geometric architectural `H` interlocking with clean `12` badge, framed with a fine double-hairline academic crest.
- **Favicon:** Scalable 32×32 SVG monogram preserving geometry at small scale.

---

## 2. Technical Stack & Dependencies

- **Framework:** Next.js 15+ (App Router)
- **Runtime:** React 19 / Node 22
- **Language:** TypeScript 5 in strict mode (`strict: true`, no `any`)
- **Styling:** Tailwind CSS with CSS Variables and utility extensions
- **Motion:** GSAP (`gsap` + `@gsap/react`) with strict `gsap.context()` cleanup and `prefers-reduced-motion` compliance
- **Icons:** `lucide-react` (lightweight, accessible SVG icons)
- **Image Engine:** `next/image` with responsive `sizes`, WebP/AVIF formats, and graceful local fallbacks
- **Localization:** Typed client and server translation dictionary engine supporting English (`en`) and Hindi (`hi`), easily extensible to French, Spanish, etc.
- **Validation:** Type-safe custom validators for form data without bloated runtime dependencies.

---

## 3. Information Architecture & Route Manifest

| Route | Template | Purpose | Primary Conversion / Action |
|---|---|---|---|
| `/` | `HomeTemplate` | Core school narrative, trust, continuum | Explore Admissions |
| `/about` | `MarketingTemplate` | History, creed, faculty leadership, campus | View Admissions Process |
| `/academics` | `AcademicOverviewTemplate` | Curricular continuum (K–12) | Inquire for 2027–28 |
| `/academics/primary` | `AcademicStageTemplate` | Foundational years (Ages 3–10) | Inquire for Primary |
| `/academics/middle` | `AcademicStageTemplate` | Transitional scholarship (Grades 6–8) | Inquire for Middle |
| `/academics/senior` | `AcademicStageTemplate` | University preparation (Grades 9–12) | Apply for Senior |
| `/admissions` | `AdmissionsTemplate` | Process, criteria, deadlines, inquiry form | Submit Admissions Inquiry |
| `/campus-life` | `MarketingTemplate` | Athletics, studios, clubs, facilities | Visit Campus |
| `/gallery` | `GalleryTemplate` | Categorized photography archive with lightbox | Inquire Now |
| `/news` | `NewsListTemplate` | Filterable announcements and notices | Read Notice |
| `/news/[slug]` | `NewsArticleTemplate` | Typed announcement detail | Back to News / Inquire |
| `/events` | `EventsTemplate` | Academic calendar, Open Mornings | Register for Open Morning |
| `/contact` | `ContactTemplate` | Administrative directory, map, general form | Submit Message |
| `/privacy` | `LegalTemplate` | Demo privacy notice and data protection | Return Home |
| `not-found` | `NotFoundTemplate` | Branded 404 with helpful recovery links | Return Home |

---

## 4. Atomic Directory Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx             # Root layout with LocaleProvider, Header, Footer
│   │   ├── page.tsx               # Homepage
│   │   ├── about/page.tsx         # About the school
│   │   ├── academics/
│   │   │   ├── page.tsx           # Academics overview
│   │   │   ├── primary/page.tsx   # Primary stage
│   │   │   ├── middle/page.tsx    # Middle stage
│   │   │   └── senior/page.tsx    # Senior stage
│   │   ├── admissions/page.tsx    # Admissions & inquiry
│   │   ├── campus-life/page.tsx   # Campus facilities & student life
│   │   ├── gallery/page.tsx       # Photography gallery
│   │   ├── news/
│   │   │   ├── page.tsx           # News list
│   │   │   └── [slug]/page.tsx    # News detail
│   │   ├── events/page.tsx        # Events & calendar
│   │   ├── contact/page.tsx       # Contact directory & form
│   │   ├── privacy/page.tsx       # Demo legal terms
│   │   └── not-found.tsx          # 404 page
│   ├── sitemap.ts                 # XML sitemap generator
│   ├── robots.ts                  # Search directives
│   └── globals.css                # Base tokens, fonts, and reset
├── components/
│   ├── atoms/                     # Button, Badge, Container, Heading, Logo, Eyebrow
│   ├── molecules/                 # NavLink, StageCard, NoticeCard, EventItem, Breadcrumbs
│   ├── organisms/                 # Header, Footer, Hero, InquiryForm, GalleryGrid, FAQAccordion
│   ├── templates/                 # Reusable page templates
│   ├── motion/                    # GSAP smooth reveal & animated wrappers
│   └── seo/                       # JSON-LD Schema generators
├── content/
│   ├── site-config.ts             # Centralized school configuration
│   ├── academics.ts               # Stages, subjects, capstone info
│   ├── news.ts                    # Typed sample announcements
│   ├── events.ts                  # Scheduled Open Mornings and events
│   ├── gallery.ts                 # Image metadata, alt text, tags
│   └── faq.ts                     # Categorized questions & answers
├── i18n/
│   ├── config.ts                  # Supported locales, defaults, labels
│   ├── context.tsx                # Client language state and switcher
│   ├── dictionaries/
│   │   ├── en.ts                  # English master dictionary
│   │   └── hi.ts                  # Hindi translation dictionary
│   └── use-translation.ts        # Typed hook
├── lib/
│   ├── seo/metadata.ts            # Dynamic OpenGraph, title builders
│   ├── utils.ts                   # Class merging, string formatters
│   └── validation.ts              # Type-safe inquiry validators
├── services/
│   └── inquiries.ts               # Replaceable inquiry submission service
└── types/
    ├── content.ts                 # Core school data interfaces
    ├── forms.ts                   # Form state, validation errors
    └── i18n.ts                    # Dictionary schema types
```

---

## 5. Architectural Quality Rules

1. **Max File Size:** No file exceeds 400 lines (target 180–300 lines). Components split when approaching 300 lines.
2. **Server-First Components:** Pages and data-driven blocks are Server Components (`RSC`). Only interactive widgets (`Header` mobile menu, `InquiryForm`, `GalleryLightbox`, `LocaleSwitcher`, `GSAPWrappers`) are Client Components (`'use client'`).
3. **No Slop Copy:** Zero generic marketing filler. Every paragraph conveys specific institutional operations, pedagogies, or dates.
4. **Resilient Local Imagery:** High-resolution local WebP images organized into `public/images/` with fallback SVG illustrations if assets fail.
5. **Clean Replaceability:** Client school customization achieved simply by editing `src/content/site-config.ts` and swapping `public/images/`.
