'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { useTranslation } from '@/i18n/context';
import { roadmapMilestones } from '@/content/roadmap';
import { GsapReveal } from '@/components/motion/GsapReveal';
import { CheckCircle2, Clock, Calendar, Milestone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoadmapPage() {
  const { dictionary, isHindi } = useTranslation();
  const t = dictionary.roadmap;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Academics',
    'Campus Infrastructure',
    'Sustainability',
    'Global Partnerships',
  ];

  const filteredMilestones =
    activeFilter === 'All'
      ? roadmapMilestones
      : roadmapMilestones.filter((m) => m.category === activeFilter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#C89B3C]/10 border border-[#C89B3C]/40 text-[#C89B3C] text-[11px] font-bold uppercase tracking-wider">
            <Clock className="w-3 h-3" />
            {t.statusInProgress}
          </span>
        );
      case 'Approved':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2D5547]/10 border border-[#2D5547]/40 text-[#2D5547] text-[11px] font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3 h-3" />
            {t.statusApproved}
          </span>
        );
      case 'Planned':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0B1B2B]/10 border border-[#0B1B2B]/30 text-[#0B1B2B] text-[11px] font-bold uppercase tracking-wider">
            <Calendar className="w-3 h-3" />
            {t.statusPlanned}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2E384D]/10 border border-[#2E384D]/30 text-[#2E384D] text-[11px] font-bold uppercase tracking-wider">
            <Milestone className="w-3 h-3" />
            {t.statusVision}
          </span>
        );
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Header */}
      <section className="bg-[#0B1B2B] text-[#FAF7F2] py-14 lg:py-20 border-b border-[#1E344A]">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: dictionary.nav.home, href: '/' },
              { label: dictionary.nav.about, href: '/about' },
              { label: t.title },
            ]}
            className="mb-8 text-[#FAF7F2]/60"
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#112538] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-wider">
              <Milestone className="w-3.5 h-3.5" />
              <span>{isHindi ? 'संस्थागत मास्टर प्लान' : 'Institutional Master Plan'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed font-sans">
              {t.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Roadmap Timeline */}
      <section className="py-12 lg:py-20">
        <Container size="lg">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2DAD0]">
            <span className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mr-2">
              {isHindi ? 'फोकस क्षेत्र:' : 'Focus Horizon:'}
            </span>
            {categories.map((cat) => {
              const active = activeFilter === cat;
              const label =
                cat === 'All'
                  ? isHindi
                    ? 'सभी चरण'
                    : 'All Horizons'
                  : cat === 'Academics'
                  ? isHindi
                    ? 'शिक्षा व अनुसंधान'
                    : 'Academics'
                  : cat === 'Campus Infrastructure'
                  ? isHindi
                    ? 'परिसर बुनियादी ढांचा'
                    : 'Campus Infrastructure'
                  : cat === 'Sustainability'
                  ? isHindi
                    ? 'सतत विकास (नेट-जीरो)'
                    : 'Sustainability'
                  : isHindi
                  ? 'वैश्विक सहयोग'
                  : 'Global Partnerships';

              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                    active
                      ? 'bg-[#0B1B2B] text-[#FAF7F2] shadow-sm font-semibold'
                      : 'bg-[#F3ECE2] text-[#1A2430] hover:bg-[#EAE1D5]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Timeline Milestones */}
          <div className="relative pl-6 md:pl-10 space-y-12 before:absolute before:left-3 md:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#C89B3C]/40">
            {filteredMilestones.map((milestone, idx) => (
              <GsapReveal key={milestone.id} delay={idx * 0.08} direction="up">
                <div className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-6 md:-left-10 top-6 w-3 h-3 rounded-full bg-[#FAF7F2] border-2 border-[#C89B3C] group-hover:scale-125 transition-transform" />

                  {/* Milestone Card */}
                  <article className="p-6 md:p-8 bg-white border border-[#E2DAD0] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#F3ECE2]">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-[#0B1B2B] text-[#C89B3C] font-mono text-xs font-bold uppercase tracking-wider">
                          {milestone.year} · {milestone.quarter}
                        </span>
                        <Badge variant="subtle" className="border-[#E2DAD0] text-[#2E384D] text-xs">
                          {isHindi ? milestone.phaseHi : milestone.phase}
                        </Badge>
                      </div>
                      <div>{getStatusBadge(milestone.status)}</div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1B2B]">
                        {isHindi ? milestone.titleHi : milestone.title}
                      </h2>
                      <p className="text-sm text-[#2E384D] leading-relaxed">
                        {isHindi ? milestone.summaryHi : milestone.summary}
                      </p>

                      {/* Key Deliverables */}
                      <div className="pt-4 border-t border-[#F3ECE2]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1B2B] mb-3 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#C89B3C]" />
                          <span>{t.deliverablesTitle}</span>
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {(isHindi ? milestone.keyDeliverablesHi : milestone.keyDeliverables).map(
                            (deliverable, dIdx) => (
                              <li
                                key={dIdx}
                                className="p-3 bg-[#FAF7F2] border border-[#E2DAD0] text-xs text-[#1A2430] flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] shrink-0 mt-1.5" />
                                <span>{deliverable}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </GsapReveal>
            ))}
          </div>

          {/* Strategic Consultation Banner */}
          <div className="mt-16 p-8 lg:p-10 bg-[#0B1B2B] text-[#FAF7F2] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs text-[#C89B3C] font-semibold uppercase tracking-wider">
                {isHindi ? 'भावी विकास व सहयोग' : 'Future Expansion & Engagement'}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#FAF7F2]">
                {isHindi
                  ? 'स्कूल नेतृत्व के साथ मास्टर प्लान पर चर्चा करें'
                  : 'Discuss the Institutional Master Plan with School Leadership'}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed">
                {isHindi
                  ? 'अभिभावक मंच और संकाय परामर्श सत्रों के माध्यम से आगामी सुविधाओं की योजना साझा की जाती है।'
                  : 'Advisory and parent colloquiums provide direct insight into new facility timelines and curriculum additions.'}
              </p>
            </div>
            <Link href="/contact">
              <Button variant="secondary" className="whitespace-nowrap">
                {isHindi ? 'परामर्श का समय लें' : 'Schedule Consultation'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
