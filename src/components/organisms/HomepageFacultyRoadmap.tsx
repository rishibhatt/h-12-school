'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { useTranslation } from '@/i18n/context';
import { facultyMembers } from '@/content/faculty';
import { roadmapMilestones } from '@/content/roadmap';
import { GsapReveal } from '@/components/motion/GsapReveal';
import { GraduationCap, ArrowRight, Milestone, Sparkles } from 'lucide-react';

export function HomepageFacultyRoadmap() {
  const { isHindi } = useTranslation();

  return (
    <>
      {/* Faculty Highlight Section */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="gold">
                <Sparkles className="w-3 h-3 mr-1" />
                {isHindi ? 'विद्वान व शिक्षक' : 'Academic Leadership'}
              </Badge>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#0B1B2B]">
                {isHindi ? 'प्रतिष्ठित संकाय व शोधकर्ता' : 'Mentors Dedicated to Intellectual Agency'}
              </h2>
              <p className="text-sm sm:text-base text-[#526071] leading-relaxed">
                {isHindi
                  ? 'हमारे शिक्षक केवल पाठ्यक्रम नहीं पढ़ाते; वे छात्रों में स्वतंत्र सोच, शोध की प्रवृत्ति और बौद्धिक ईमानदारी विकसित करते हैं।'
                  : 'Faculty at H-12 are active researchers, writers, and mentors who champion deep inquiry and compassionate character.'}
              </p>
            </div>
            <Link
              href="/faculty"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] hover:text-[#C89B3C] shrink-0"
            >
              <span>{isHindi ? 'सभी संकाय देखें' : 'View All Faculty Profiles'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyMembers.slice(0, 3).map((member, idx) => (
              <GsapReveal key={member.id} delay={idx * 0.1} direction="up">
                <div className="bg-white border border-[#E2DAD0] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative aspect-[4/3] bg-[#EAE1D5] overflow-hidden">
                    <Image
                      src={member.image || '/images/campus/library-hall.jpg'}
                      alt={isHindi ? member.nameHi : member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-mono uppercase tracking-wider bg-[#0B1B2B] text-[#C89B3C] px-2 py-0.5">
                      {isHindi ? member.departmentHi : member.department}
                    </span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-serif font-bold text-[#0B1B2B]">
                        {isHindi ? member.nameHi : member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                        {isHindi ? member.roleHi : member.role}
                      </p>
                      <p className="text-xs text-[#526071] line-clamp-2 pt-1">
                        {isHindi ? member.bioHi : member.bio}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F3ECE2] flex items-center gap-2 text-xs text-[#1A2430]">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                      <span className="truncate">{member.almaMater}</span>
                    </div>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Strategic Roadmap Teaser Section */}
      <section className="section-rhythm bg-[#0B1B2B] text-[#FAF7F2] border-b border-[#1E344A]">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#C89B3C] font-semibold uppercase tracking-wider">
                <Milestone className="w-3.5 h-3.5" />
                <span>{isHindi ? 'संस्थागत मास्टर प्लान' : 'Institutional Master Plan'}</span>
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#FAF7F2]">
                {isHindi ? 'रणनीतिक रोडमैप 2026–2030' : 'Strategic Horizon & Campus Expansion'}
              </h2>
              <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-sans">
                {isHindi
                  ? 'आगामी पांच वर्षों में वैज्ञानिक अनुसंधान मंडप, वैश्विक आदान-प्रदान और नेट-जीरो कार्बन परिसर की दिशा में प्रगतिशील रूपरेखा।'
                  : 'Our phased master plan charts the development of new ecological research labs, global scholarships, and net-zero campus milestones.'}
              </p>
            </div>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C89B3C] hover:text-[#FAF7F2] shrink-0"
            >
              <span>{isHindi ? 'संपूर्ण रोडमैप देखें' : 'Explore Full Strategic Roadmap'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapMilestones.slice(0, 3).map((item, idx) => (
              <GsapReveal key={item.id} delay={idx * 0.1} direction="up">
                <div className="p-6 bg-[#112538] border border-[#1E344A] flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#C89B3C] px-2 py-0.5 bg-[#0B1B2B]">
                        {item.year} · {item.quarter}
                      </span>
                      <span className="text-[11px] text-[#A8B3C0] font-mono">
                        {isHindi ? item.phaseHi : item.phase}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#FAF7F2]">
                      {isHindi ? item.titleHi : item.title}
                    </h3>
                    <p className="text-xs text-[#A8B3C0] leading-relaxed">
                      {isHindi ? item.summaryHi : item.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#1E344A] text-xs text-[#C89B3C] font-semibold flex items-center justify-between">
                    <span>{isHindi ? 'स्थिति:' : 'Status:'} {item.status}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
