'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { useTranslation } from '@/i18n/context';
import { facultyMembers } from '@/content/faculty';
import { GsapReveal } from '@/components/motion/GsapReveal';
import { GsapCounter } from '@/components/motion/GsapCounter';
import { GraduationCap, Award, BookOpen, Quote, Sparkles } from 'lucide-react';

export default function FacultyPage() {
  const { dictionary, isHindi } = useTranslation();
  const t = dictionary.faculty;
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Leadership', 'STEM', 'Humanities', 'Arts & Sports'];

  const filteredFaculty =
    selectedDept === 'All'
      ? facultyMembers
      : facultyMembers.filter((f) => f.department === selectedDept);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Editorial Header */}
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
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isHindi ? 'विद्वान व शिक्षक' : 'Scholarly Mentorship'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed font-sans">
              {t.subtitle}
            </p>
          </div>

          {/* Institutional Faculty Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#1E344A]">
            <div className="p-4 bg-[#112538]/60 border border-[#1E344A]">
              <span className="block text-2xl lg:text-3xl font-serif font-bold text-[#C89B3C]">
                <GsapCounter end={100} suffix="%" />
              </span>
              <span className="text-xs text-[#FAF7F2]/70 uppercase tracking-wider mt-1 block">
                {isHindi ? 'स्नातकोत्तर / डॉक्टरेट डिग्री' : 'Post-Graduate Faculty'}
              </span>
            </div>
            <div className="p-4 bg-[#112538]/60 border border-[#1E344A]">
              <span className="block text-2xl lg:text-3xl font-serif font-bold text-[#C89B3C]">
                1:<GsapCounter end={8} />
              </span>
              <span className="text-xs text-[#FAF7F2]/70 uppercase tracking-wider mt-1 block">
                {isHindi ? 'छात्र-शिक्षक अनुपात' : 'Student-to-Faculty Ratio'}
              </span>
            </div>
            <div className="p-4 bg-[#112538]/60 border border-[#1E344A]">
              <span className="block text-2xl lg:text-3xl font-serif font-bold text-[#C89B3C]">
                <GsapCounter end={16} suffix="+" />
              </span>
              <span className="text-xs text-[#FAF7F2]/70 uppercase tracking-wider mt-1 block">
                {isHindi ? 'औसत शिक्षण अनुभव (वर्ष)' : 'Avg. Teaching Experience'}
              </span>
            </div>
            <div className="p-4 bg-[#112538]/60 border border-[#1E344A]">
              <span className="block text-2xl lg:text-3xl font-serif font-bold text-[#C89B3C]">
                <GsapCounter end={35} suffix="+" />
              </span>
              <span className="text-xs text-[#FAF7F2]/70 uppercase tracking-wider mt-1 block">
                {isHindi ? 'विशेषज्ञ सलाहकार' : 'Senior Advisory Chairs'}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Faculty Directory */}
      <section className="py-12 lg:py-20">
        <Container size="lg">
          {/* Department Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E2DAD0]">
            <span className="text-xs font-bold text-[#0B1B2B] uppercase tracking-wider mr-2">
              {isHindi ? 'विभाग चुनें:' : 'Filter Discipline:'}
            </span>
            {departments.map((dept) => {
              const active = selectedDept === dept;
              const label =
                dept === 'All'
                  ? t.allDepartments
                  : dept === 'Leadership'
                  ? isHindi
                    ? 'नेतृत्व'
                    : 'Leadership'
                  : dept === 'STEM'
                  ? 'STEM'
                  : dept === 'Humanities'
                  ? isHindi
                    ? 'मानविकी'
                    : 'Humanities'
                  : isHindi
                  ? 'कला एवं खेल'
                  : 'Arts & Sports';

              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
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

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((member, idx) => (
              <GsapReveal key={member.id} delay={idx * 0.08} direction="up">
                <article className="h-full flex flex-col bg-white border border-[#E2DAD0] shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
                  {/* Photo Canvas */}
                  <div className="relative aspect-[4/3] bg-[#EAE1D5] overflow-hidden">
                    <Image
                      src={member.image || '/images/campus/library-hall.jpg'}
                      alt={isHindi ? member.nameHi : member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <Badge variant="subtle" className="bg-[#0B1B2B]/80 text-[#FAF7F2] border-[#C89B3C]/50 text-[11px]">
                        {isHindi ? member.departmentHi : member.department}
                      </Badge>
                      <span className="text-[11px] font-mono text-[#FAF7F2]/90 flex items-center gap-1">
                        <Award className="w-3 h-3 text-[#C89B3C]" />
                        {member.experienceYears} {isHindi ? 'वर्ष अनुभव' : 'Yrs Exp.'}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-xl font-serif font-bold text-[#0B1B2B]">
                        {isHindi ? member.nameHi : member.name}
                      </h2>
                      <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                        {isHindi ? member.roleHi : member.role}
                      </p>
                      <p className="text-xs text-[#526071] leading-relaxed pt-1">
                        {isHindi ? member.bioHi : member.bio}
                      </p>
                    </div>

                    {/* Academic Credentials */}
                    <div className="pt-3 border-t border-[#F3ECE2] space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-[#1A2430]">
                        <GraduationCap className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 mt-0.5" />
                        <span className="font-medium">{isHindi ? member.degreesHi : member.degrees}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#526071]">
                        <BookOpen className="w-3.5 h-3.5 text-[#2D5547] shrink-0" />
                        <span>{member.almaMater}</span>
                      </div>
                    </div>

                    {/* Teaching Quote */}
                    <div className="p-3 bg-[#FAF7F2] border-l-2 border-[#C89B3C] text-xs text-[#1A2430] italic flex items-start gap-2">
                      <Quote className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <span>&ldquo;{isHindi ? member.quoteHi : member.quote}&rdquo;</span>
                    </div>
                  </div>
                </article>
              </GsapReveal>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-16 p-8 lg:p-12 bg-[#F3ECE2] border border-[#E2DAD0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#0B1B2B]">
                {isHindi ? 'हमारे संकाय से मिलें' : 'Speak Directly with Our Academic Faculty'}
              </h3>
              <p className="text-xs sm:text-sm text-[#526071] leading-relaxed">
                {isHindi
                  ? 'परिसर भ्रमण के दौरान विभाग प्रमुखों और शिक्षकों से सीधे संवाद करें और पाठ्यक्रम को समझें।'
                  : 'Open Morning tours include breakout conversations with division deans and laboratory chairs.'}
              </p>
            </div>
            <Link href="/admissions">
              <Button variant="primary">
                {t.ctaSchedule}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
