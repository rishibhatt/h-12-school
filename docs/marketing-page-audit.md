# Marketing & Conversion Audit: H-12 School

**Date:** October 11, 2026  
**Auditor:** Product & Marketing Team (Antigravity Senior Product Specialist)  
**Standard:** CRO & Marketing Psychology Frameworks (`.agents/skills/cro`, `.agents/skills/marketing-psychology`)

---

## 1. Funnel Architecture Overview

The H-12 School website serves prospective parents across three distinct decision stages:

```
[Awareness & Impression]
  Home (/) ──> Academic Pathways (/academics) ──> Campus Life (/campus-life)
       │                      │
       ▼                      ▼
[Deep Evaluation] ─────> Primary/Middle/Senior (/academics/*)
       │                      │
       ▼                      ▼
[Decision & Action] ───> Admissions (/admissions) ───> Inquiry Form Submit
       │                      ▲
       └─────── Contact (──────┘
```

- **Primary Conversion:** Admissions Inquiry submission (`/admissions` form).
- **Secondary Micro-Conversions:** Schedule a campus tour, explore academic curricula, download stage overviews, read event schedules, switch language (EN/HI).

---

## 2. Comprehensive Route-by-Route Audit

### 1. Home (`/`)
- **Target Audience:** Prospective parents researching schools for children ages 3–18; educational consultants; visiting educators.
- **User Intent:** Evaluate overall school ethos, academic caliber, campus environment, and admissions accessibility within 10 seconds.
- **Main Question Answered:** *"Why should I trust H-12 School with my child's intellectual and personal foundation?"*
- **Primary CTA:** "Explore Admissions" (Direct link to `/admissions`).
- **Secondary CTA:** "Discover Academic Pathways" (Link to `/academics`).
- **Key Content Sections:**
  1. Announcement Banner (Tasteful admissions notice).
  2. Hero with split editorial composition & immediate trust statement.
  3. School Core Thesis & Learning Ethos (no buzzwords).
  4. Academic Continuum (Primary, Middle, Senior grade blocks).
  5. Pillars of Character & Curiosity (Hands-on science, humanistic arts, athletics).
  6. Campus Highlights & Student Life visual preview.
  7. Latest Announcements & Academic Calendar events.
  8. Admissions Inquiry Callout with next steps.
  9. Frequently Asked Questions (admissions, transport, student support).
- **Internal Links:** `/about`, `/academics`, `/academics/primary`, `/academics/middle`, `/academics/senior`, `/admissions`, `/campus-life`, `/gallery`, `/news`, `/contact`.
- **Trust Signals:** Clearly defined student-teacher ratios (1:12), transparent curriculum framework, modern lab facilities, verified faculty profiles.
- **SEO Title:** `H-12 School | Rigorous Academic Discovery & Student Character`
- **Meta Description:** `An independent H-12 learning institution committed to intellectual inquiry, scientific exploration, and humanistic development. Explore admissions and our campus.`
- **Structured Data:** `EducationalOrganization`, `WebSite`.
- **Accessibility:** Skip links, landmark `role="main"`, high contrast ratios (>7:1 on ivory/navy), screen-reader announcements on language toggling.
- **Conversion Risks:** High cognitive overload if too many competing buttons exist; mitigated by single clear primary action ("Explore Admissions").

---

### 2. About the School (`/about`)
- **Target Audience:** Parents seeking evidence of leadership integrity, educational philosophy, and pedagogical foundation.
- **User Intent:** Understand the institutional history, leadership team, and core values.
- **Main Question Answered:** *"Who guides this school, and what values will shape my child every day?"*
- **Primary CTA:** "View Admissions Process" (`/admissions`).
- **Secondary CTA:** "Meet Faculty in Person" (`/contact`).
- **Key Sections:** Head of School Welcome, Educational Creed, Leadership & Advisory Board, Campus Architecture & Environment, Community Standards.
- **Trust Signals:** Experienced leadership biographies, transparent policies, accreditation philosophy.
- **SEO Title:** `About H-12 School | Educational Philosophy & Leadership`
- **Meta Description:** `Discover the vision, leadership team, and educational principles guiding H-12 School from early childhood through secondary graduation.`

---

### 3. Academics Overview (`/academics`)
- **Target Audience:** Parents evaluating curricular depth, STEM/humanities balance, and university preparation.
- **User Intent:** Understand progression from Foundational Primary to Senior School graduation.
- **Main Question Answered:** *"How does learning evolve as my child grows at H-12?"*
- **Primary CTA:** "Inquire for 2027–28" (`/admissions`).
- **Secondary CTA:** "Select Grade Stage Below" (Links to stage detail pages).
- **Key Sections:** Curriculum Philosophy, The Three Pillars, Stage Overview Grid, Science & Arts Laboratories, Global Preparation.
- **SEO Title:** `Academics | Progressive Curricular Continuum at H-12 School`
- **Meta Description:** `Explore the academic stages at H-12 School. Integrated STEM, classical humanities, and structured inquiry from Kindergarten to Grade 12.`

---

### 4. Primary Stage (`/academics/primary`)
- **Target Audience:** Parents of children ages 3–10 (Nursery to Grade 5).
- **User Intent:** Assess foundational literacy, numeracy, safety, emotional nurturing, and curiosity-driven inquiry.
- **Main Question Answered:** *"Will my young child feel safe, supported, and excited to learn?"*
- **Primary CTA:** "Inquire for Primary School" (`/admissions?stage=primary`).
- **Secondary CTA:** "Explore Campus Life" (`/campus-life`).
- **Key Sections:** Stage Ethos, Core Competencies (Literacy, Mathematics, Nature Study, Creative Arts), Typical Day Schedule, Faculty Approach.
- **SEO Title:** `Primary School (Ages 3–10) | H-12 School`
- **Meta Description:** `Cultivating foundational literacy, exploratory science, and collaborative confidence in a joyful early learning environment.`

---

### 5. Middle Stage (`/academics/middle`)
- **Target Audience:** Parents of students ages 11–14 (Grades 6–8).
- **User Intent:** Understand how the school bridges primary foundations to rigorous secondary scholarship.
- **Main Question Answered:** *"How does H-12 handle the pivotal transition from childhood to adolescent independence?"*
- **Primary CTA:** "Inquire for Middle School" (`/admissions?stage=middle`).
- **Secondary CTA:** "View STEM & Arts Labs" (`/campus-life`).
- **Key Sections:** Transitional Curriculum, Scientific Method & Debate, Advisory System, Co-curricular Enrichment.
- **SEO Title:** `Middle School (Grades 6–8) | H-12 School`
- **Meta Description:** `Developing independent critical thinking, analytical writing, and experimental inquiry during pivotal adolescent years.`

---

### 6. Senior Stage (`/academics/senior`)
- **Target Audience:** Parents of students ages 15–18 (Grades 9–12) focusing on university admissions and career foundations.
- **User Intent:** Review advanced placement options, research capstones, university counseling, and academic rigor.
- **Main Question Answered:** *"Will H-12 prepare my child to thrive at premier universities worldwide?"*
- **Primary CTA:** "Apply for Senior School" (`/admissions?stage=senior`).
- **Secondary CTA:** "Speak with Academic Advisor" (`/contact`).
- **Key Sections:** University Readiness, Advanced Electives & Research Honors, College Counseling Roadmap, Leadership Capstone.
- **SEO Title:** `Senior School (Grades 9–12) | H-12 School`
- **Meta Description:** `Rigorous pre-university scholarship, independent capstone research, and personalized higher education counseling.`

---

### 7. Admissions (`/admissions`) — Primary Conversion Engine
- **Target Audience:** Committed prospective parents ready to take the next step.
- **User Intent:** Review application deadlines, step-by-step process, required documents, and submit an inquiry.
- **Main Question Answered:** *"How do we apply, what are the criteria, and what happens after we submit?"*
- **Primary CTA:** Interactive Admissions Inquiry Form (on-page).
- **Secondary CTA:** "Download Admissions Guide" or "Book a Private Campus Walk".
- **Key Sections:** Step-by-Step Admissions Roadmap (1. Inquiry, 2. Campus Walk, 3. Student Interaction, 4. Offer), Criteria & Age Guidelines, Required Documentation Checklist, Tuition & Transparency Notice, Interactive Inquiry Form, Admissions FAQs.
- **Form Fields:** Parent Full Name, Email Address, Contact Phone, Student Intended Stage, Target Entry Year, Questions/Notes.
- **Conversion Optimization:** Real-time client validation, accessible error text, submission loader, clear success confirmation, zero extraneous fields.
- **SEO Title:** `Admissions & Inquiries | Join H-12 School`
- **Meta Description:** `Admissions criteria, application timeline, and online inquiry form for H-12 School. Begin your family's journey with us.`

---

### 8. Campus & Student Life (`/campus-life`)
- **Target Audience:** Parents and prospective students wanting to see the physical and social reality of daily school life.
- **User Intent:** Check sports facilities, libraries, maker spaces, arts studios, clubs, and cafeteria/wellness standards.
- **Main Question Answered:** *"What kind of environment will surround my child outside of lectures?"*
- **Primary CTA:** "Visit the Campus" (`/admissions`).
- **Secondary CTA:** "View Full Gallery" (`/gallery`).
- **Key Sections:** Architectural Spaces, STEM Innovation Studios, Athletic Grounds & Competition, Music & Fine Arts, Student Guilds & Clubs.
- **SEO Title:** `Campus & Student Life | Modern Facilities & Studios | H-12 School`
- **Meta Description:** `Tour the learning studios, athletics facilities, maker labs, and arts spaces supporting holistic student life at H-12 School.`

---

### 9. Gallery (`/gallery`)
- **Target Audience:** Visual learners and parents seeking authentic evidence of active classrooms and campus atmosphere.
- **User Intent:** Filter and view real photographic documentation across Academics, Arts, Athletics, and Campus Architecture.
- **Main Question Answered:** *"What does daily life actually look like at H-12?"*
- **Primary CTA:** "Explore Admissions" (`/admissions`).
- **Features:** Categorized filters (All, Learning Studios, Sciences, Arts & Drama, Athletics), accessible modal preview, semantic alt descriptions.
- **SEO Title:** `Campus Gallery & Visual Archives | H-12 School`
- **Meta Description:** `High-resolution photographs of daily life, laboratory experiments, fine arts productions, and athletic events at H-12 School.`

---

### 10. News & Notices (`/news`)
- **Target Audience:** Current parents, prospective families, and the community.
- **User Intent:** Stay informed about term dates, academic distinctions, announcements, and policy updates.
- **Main Question Answered:** *"What is happening right now across the H-12 community?"*
- **Primary CTA:** "Subscribe to Community Notices" / "Inquire Now".
- **Key Sections:** Filterable notices by category (Announcements, Academic Notices, Campus Upgrades, Admissions), dated cards with summaries.
- **SEO Title:** `News & Community Notices | H-12 School`
- **Meta Description:** `Official announcements, curricular updates, and community news from H-12 School.`

---

### 11. News Detail (`/news/[slug]`)
- **Target Audience:** Readers clicking into a specific announcement.
- **User Intent:** Read complete notice details, dates, instructions, and related announcements.
- **Main Question Answered:** *"What are the full details and next steps for this announcement?"*
- **Primary CTA:** "Back to All News" / "Admissions Contact".
- **SEO Title:** `[Article Title] | H-12 School News`
- **Structured Data:** `Article` with headline, datePublished, author, publisher.

---

### 12. Events & Calendar (`/events`)
- **Target Audience:** Parents planning visits, open houses, parent-teacher dates, or sports matches.
- **User Intent:** Discover upcoming campus tours, open days, and student performances.
- **Main Question Answered:** *"When can I visit the school, and what community events are scheduled?"*
- **Primary CTA:** "Register for Open Morning" (`/admissions`).
- **Key Sections:** Upcoming Events List with date badges, location markers, audience indicators (Prospective Parents, All Families), and category tags.
- **SEO Title:** `Upcoming Events & Open Days | H-12 School`
- **Meta Description:** `Find Open Morning dates, student exhibitions, scientific symposiums, and term calendar highlights at H-12 School.`
- **Structured Data:** `Event`.

---

### 13. Contact (`/contact`)
- **Target Audience:** General visitors, prospective parents, vendors, visiting lecturers.
- **User Intent:** Find official email, phone numbers, administrative desk hours, campus address, and submit general inquiries.
- **Main Question Answered:** *"How do I reach the right department quickly?"*
- **Primary CTA:** Send Message / General Inquiry Form.
- **Key Sections:** Department Directory (Admissions Desk, Head of School Office, Transport Coordinator), Operating Hours, Fictional Demonstration Location Disclosure, Interactive Contact Form.
- **SEO Title:** `Contact Our Administration | H-12 School`
- **Meta Description:** `Get in touch with the admissions office, academic leadership, and administration at H-12 School.`

---

### 14. Privacy Policy (`/privacy`)
- **Target Audience:** Site visitors, compliance officers, prospective parents concerned about student and family data privacy.
- **User Intent:** Review data collection practices, contact form handling, and cookie disclosure.
- **Main Question Answered:** *"How is my family's contact information protected?"*
- **Key Sections:** Demonstration Disclaimer (notice that this is a portfolio starter), Data Minimization, Form Data Usage, Cookies & Analytics, Parent Rights.
- **SEO Title:** `Privacy & Demonstration Notice | H-12 School`
- **Meta Description:** `Privacy terms and demo data handling policies for the H-12 School website project.`
