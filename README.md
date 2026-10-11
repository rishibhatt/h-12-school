# H-12 School of Learning & Discovery
### Commercial Demonstration Website & Customizable Starter for Educational Institutions

[![Framework](https://img.shields.io/badge/Next.js-16_App_Router-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Animation](https://img.shields.io/badge/Motion-GSAP_3-green?logo=greensock)](https://greensock.com/)
[![Localization](https://img.shields.io/badge/i18n-English_%2F_Hindi-red)](#localization)
[![Compliance](https://img.shields.io/badge/File_Limit-Strict_<400_Lines-brightgreen)](#engineering-standards)

---

> [!IMPORTANT]
> **Fictional Demonstration Notice:** H-12 School (H-12 School of Learning & Discovery) is an architectural prototype and commercial starter engineered to demonstrate modern website design, conversion strategy, accessibility, and performance for K-12 educational institutions. It does not represent an operating school, nor does it fabricate real-world credentials or student data.

---

## 1. Project Overview

H-12 School is an editorial-grade, accessible, and bilingual website built to pitch to private schools, academies, and international K-12 institutions.

Unlike generic website templates that rely on cluttered drop-down menus, heavy slider plugins, and unreadable video backgrounds, this solution combines:
- **Architectural & Editorial Aesthetics:** Built with a palette of deep navy, warm paper, academic gold, and botanical green, inspired by prestigious academic publishers and modern university monographs.
- **Conversion-Driven Admissions Journey:** Dedicated conversion paths designed to guide prospective parents from initial curiosity to qualified Open Morning bookings and stage-specific inquiries.
- **Bilingual Localization Architecture:** Native English and Hindi support powered by centralized typed dictionaries and zero-latency client switching.
- **Micro-Animations & Smooth Motion:** Scoped GSAP 3 timeline animations that respect user preferences (`prefers-reduced-motion`).
- **Production-Ready Commercial Starter:** Clean separation of content, configuration, and presentation so that school administrators can easily replace branding, logos, fee structures, and photography.

---

## 2. Technology Stack

- **Framework:** Next.js 16 (App Router with Static Site Generation)
- **UI Library:** React 19
- **Language:** TypeScript 5.9+ (`strict: true`, zero `any`)
- **Styling:** Tailwind CSS v4 with custom CSS variables
- **Motion:** GSAP 3 (`gsap` + `@gsap/react` with scoped cleanup)
- **Icons:** Lucide React
- **SEO & Structured Data:** Next.js Metadata API + JSON-LD (`EducationalOrganization`, `Article`, `Event`, `BreadcrumbList`)
- **Architecture:** Atomic Design (`atoms`, `molecules`, `organisms`, `templates`, `layout`, `motion`)

---

## 3. Information Architecture & Routes

The site implements 14 primary routes and pre-renders 23 static pages:

| Route | Purpose & Key Highlights |
|:---|:---|
| `/` | **Home:** Editorial split hero, academic stages overview, 4 core learning pillars, latest notices, gallery preview, admissions call to action. |
| `/about` | **About the School:** Institutional philosophy, leadership directory, campus history, and faculty student ratios (1:8). |
| `/academics` | **Academics Overview:** Multi-stage learning continuum from foundational exploratory inquiry to pre-university rigor. |
| `/academics/primary` | **Primary School (Grades 1–5):** Wonder, foundational literacy, numeracy, discovery-based schedule, and curriculum highlights. |
| `/academics/middle` | **Middle School (Grades 6–8):** Socratic dialogue, interdisciplinary laboratory inquiry, advisory system, and stage schedule. |
| `/academics/senior` | **Senior School (Grades 9–12):** Rigorous university preparation, advanced seminars, independent research, and mentorship. |
| `/admissions` | **Admissions Center:** 4-step admissions timeline, clear eligibility guidelines, interactive stage-specific inquiry form. |
| `/campus-life` | **Campus & Student Life:** Visual and performing arts, athletic development, library facilities, and co-curricular societies. |
| `/gallery` | **Campus Gallery:** Filterable media grid (Academics, Campus, Arts, Athletics) with keyboard-accessible modal lightbox. |
| `/news` | **Notices & News:** Searchable and filterable announcements, administrative circulars, and academic dispatches. |
| `/news/[slug]` | **Article Detail:** Dynamic editorial layout with publication timestamps, author metadata, and related reading. |
| `/events` | **Calendar & Open Days:** Upcoming community colloquiums, athletic meets, and admissions Open Mornings. |
| `/contact` | **Contact & Visit:** Demonstration campus map, administrative office hours, transport guidelines, and general inquiry form. |
| `/privacy` | **Privacy Policy:** Sample data protection notice for parents and guardians. |
| `/_not-found` | **404 Not Found:** Branded recovery page directing parents back to core academic divisions. |

---

## 4. Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x (or pnpm / yarn)

### Installation
```bash
# Clone or navigate to the repository
cd "Sample Projects"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Quality & Build Commands
```bash
# TypeScript type checking
npx tsc --noEmit

# ESLint audit (zero warnings / zero errors)
npm run lint

# Production build and static pre-rendering
npm run build

# Start production server
npm start
```

---

## 5. Customization for Real Schools

This repository is structured so that agencies or schools can customize the entire platform in minutes:

### 1. School Information & Branding
Edit `src/content/site-config.ts`:
- School name, motto, established year
- Phone numbers, email addresses, physical address
- Office hours and student-to-faculty ratios

### 2. Logo & Crest
Replace the vector SVG in `src/components/atoms/Logo.tsx` with the client's official crest or monogram.

### 3. Curricula & Academic Divisions
Edit `src/content/academics.ts` to adjust grade levels, daily schedules, core subject areas, and curriculum frameworks (e.g., CBSE, ICSE, IB, or Cambridge).

### 4. Photography
Follow [`docs/image-replacement-guide.md`](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/image-replacement-guide.md) to replace placeholder campus assets in `public/images/`.

### 5. Connecting a Real Admissions CRM
In `src/services/inquiries.ts`, point the `submit` method to your admissions webhook or CRM API (Salesforce, HubSpot, or custom webhook). See [`docs/deployment-guide.md`](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/deployment-guide.md).

---

## 6. Engineering Standards

- **Strict File Length Limit:** Every source file is strictly below 400 lines (longest component: 299 lines).
- **TypeScript Strictness:** Strict mode is enforced across all models, form interfaces, and props.
- **Accessibility:** Semantic HTML5 (`<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`), ARIA labels on all modal dialogues and mobile drawers, high contrast color ratios, and visible focus rings.
- **Zero AI Slop:** All content is drafted in a natural, authoritative institutional voice without marketing clichés, buzzwords, or exaggerated claims.

---

## 7. Documentation Directory

Detailed architectural guides are located in `/docs`:
- [Portfolio Case Study](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/portfolio-case-study.md)
- [Marketing & Page Audit](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/marketing-page-audit.md)
- [Technical Architecture](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/architecture.md)
- [Skills & Design Audit](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/skills-audit.md)
- [Image Replacement Guide](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/image-replacement-guide.md)
- [Localization Guide](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/localization-guide.md)
- [Production Deployment Guide](file:///Users/rishabbhatt/Desktop/Sample%20Projects/docs/deployment-guide.md)

---

## License
MIT — Free for portfolio demonstration, commercial customization, and institutional client deployments.
