# Skills & MCP Tool Audit: H-12 School Website

**Date:** October 11, 2026  
**Project:** H-12 School (Customizable Premium School Demonstration)  
**Workspace:** `/Users/rishabbhatt/Desktop/Sample Projects`

---

## 1. Executive Summary

This audit catalogs the discovered agent skills, design systems, copy guidelines, and MCP tools available in this environment. It validates actual executions, records research insights gathered from real educational web design exemplars via Inspo MCP, and defines how each skill directs the engineering and art direction of H-12 School.

---

## 2. Installed Skills Discovered & Verified

| Skill Name | Path | Verification Status | Operational Role in Project |
|---|---|---|---|
| **Hallmark** | `.agents/skills/hallmark/SKILL.md` | Verified & Loaded | Art direction, macrostructure selection, 2+1 font discipline, locked token system, zero-slop layouts, responsive floors. |
| **Impeccable** | `.agents/skills/impeccable/SKILL.md` | Verified & Loaded | Visual hierarchy, 8-state interactive components, accessibility standards, spacing rhythm (`clamp(72px, 10vw, 140px)`). |
| **No AI Slop** | `.agents/skills/no-ai-slop/SKILL.md` | Verified & Loaded | Editorial human copywriting: banned words filter ("unlock your potential", "elevate", "foster", "tapestry"), concrete institutional claims. |
| **CRO** | `.agents/skills/cro/SKILL.md` | Verified & Loaded | Admissions conversion funnel, inquiry form optimization, value proposition clarity, secondary micro-conversions. |
| **Marketing Psychology** | `.agents/skills/marketing-psychology/SKILL.md` | Verified & Loaded | Trust signals, commitment escalation (foot-in-the-door), paradox of choice reduction (3 academic stages), transparent admissions roadmap. |
| **Schema** | `.agents/skills/schema/SKILL.md` | Verified & Loaded | JSON-LD structured data (`EducationalOrganization`, `BreadcrumbList`, `Event`, `Article`), demo safe guardrails. |
| **GSAP (npm)** | `gsap` + `@gsap/react` | Verified in local env | Purposeful timeline motion, hero entrance, smooth reveal triggers, strict cleanup with `gsap.context()`, reduced-motion compliance. |

---

## 3. Inspo MCP Integration & Research

### Connection Status
- **Transport:** stdio JSON-RPC via `npx -y inspo-mcp --stdio` (version 0.1.16).
- **Status:** Connected and verified live.
- **Tools Discovered:** `recommend`, `search_screens`, `get_screen`, `get_design_system`, `find_similar`, `compare`, `find_by_color`, `get_filters`, `get_site_pages`, `find_components`, `get_reference_jsx`.

### Exemplars Consulted & Findings

#### 1. `ecolevision-com` (Vision Trilingual School)
- **Palette:** `#06a4e3` (electric azure), `#dfcd8a` (buttery cream), `#17317e` (dark navy), `#62ad88` (botanical green).
- **Macrostructure:** Marquee Hero / Split-Studio with asymmetrical diagonal tension.
- **Key Insight:** Avoid standard sterile blue-and-white hospital aesthetics. The interplay of warm cream with midnight navy and an energetic accent produces warmth, distinction, and approachability.

#### 2. `des-obys-agency` (Design Education Series)
- **Palette:** `#ac7f52` (terracotta/gold), `#f0f0f0` (clean off-white), `#1a1a1a` (deep slate/black).
- **Key Insight:** Monumental typography hierarchy, structured numbered milestones (e.g. `01`, `02`, `03` for grades/divisions), hairline border dividers, high contrast between large headlines and disciplined body type.

#### 3. `arts-ac-uk` (University of the Arts London)
- **Key Insight:** Clear institutional authority without visual clutter. Stacked text links with directional arrows (`→`), stark split compositions, structured information hierarchy designed for multiple stakeholder journeys (parents, prospective students, educators).

#### 4. `ciid-dk` (Copenhagen Institute of Interaction Design)
- **Key Insight:** Active documentary-style photography showing collaborative workshops and real engagement instead of staged smiling stock photos. Manifesto-as-interface typography with concise, active statements.

### Spacing & Layout Guidance Extracted
- **Hero Viewport:** Complete composition inside first viewport (~1280×800) with nav, headline, supporting line, and primary CTA visible above fold.
- **Vertical Seam Rhythm:** Systematic `clamp(72px, 10vw, 140px)` between major sections.
- **Horizontal Container:** Centered max-width column with symmetric `padding-inline` (minimum 24px on mobile) to ensure content never collides with viewport edges.

---

## 4. Copywriting Directives (No AI Slop)

The website copy must sound like an authentic, discerning independent school with deep commitment to intellectual rigor and child welfare:
- **Banned Clichés:** "Unlock your potential", "Where dreams take flight", "In today's fast-paced world", "Nurturing tomorrow's leaders", "Empowering students", "A tapestry of learning".
- **Approved Institutional Voice:** Direct, grounded, specific, respectful of parents' intelligence, focused on tangible academic methods, student care, and inquiry pathways.
- **Fictional Notice:** Unmistakable, tasteful disclaimer in footer and admissions stating that H-12 School is an illustrative demonstration and commercial starter.
