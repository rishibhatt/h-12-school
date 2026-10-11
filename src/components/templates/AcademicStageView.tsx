'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AcademicStage } from '@/types/content';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { useTranslation } from '@/i18n/context';
import { CheckCircle, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

interface AcademicStageViewProps {
  stage: AcademicStage;
  prevStage?: { id: string; name: string; nameHi: string };
  nextStage?: { id: string; name: string; nameHi: string };
}

export function AcademicStageView({ stage, prevStage, nextStage }: AcademicStageViewProps) {
  const { isHindi } = useTranslation();

  const name = isHindi ? stage.nameHi : stage.name;
  const grades = isHindi ? stage.gradesHi : stage.grades;
  const ages = isHindi ? stage.agesHi : stage.ages;
  const tagline = isHindi ? stage.taglineHi : stage.tagline;
  const description = isHindi ? stage.descriptionHi : stage.description;
  const curriculum = isHindi ? stage.curriculumOverviewHi : stage.curriculumOverview;

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'शिक्षा' : 'Academics', href: '/academics' },
              { label: name },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="flex gap-2">
              <Badge variant="navy">{grades}</Badge>
              <Badge variant="subtle">{ages}</Badge>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {name}
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C89B3C]">
              {tagline}
            </p>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {description}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Visual */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Curriculum & Features (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Curriculum Overview */}
              <div className="space-y-4">
                <h2 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B]">
                  {isHindi ? 'मूलभूत पाठ्यक्रम रूपरेखा' : 'Core Curricular Competencies'}
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {curriculum.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-[#E2DAD0] flex items-start gap-3 text-sm text-[#1A2430]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Division Distinctives */}
              <div className="space-y-4 border-t border-[#E2DAD0] pt-8">
                <h2 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B]">
                  {isHindi ? 'विशिष्ट शैक्षणिक सुविधाएं' : 'Program Hallmarks & Methodologies'}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {stage.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#FAF7F2] border border-[#E2DAD0]"
                    >
                      <h3 className="font-serif-display text-lg font-normal text-[#0B1B2B] mb-1">
                        {isHindi ? feat.titleHi : feat.title}
                      </h3>
                      <p className="text-xs text-[#526071] leading-relaxed">
                        {isHindi ? feat.detailHi : feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Stage Photography & Daily Timetable (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative aspect-[16/11] overflow-hidden border border-[#0B1B2B] shadow-sm bg-[#E2DAD0]">
                <Image
                  src={stage.image}
                  alt={name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Daily Schedule Table */}
              <div className="bg-[#FAF7F2] border border-[#E2DAD0] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0B1B2B] font-semibold border-b border-[#E2DAD0] pb-3">
                  <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>{isHindi ? 'दैनिक समय-सारणी' : 'Representative Daily Schedule'}</span>
                </div>
                <div className="space-y-2.5">
                  {stage.dailySchedule.map((slot, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 text-xs py-1.5 border-b border-[#E2DAD0]/60 last:border-0"
                    >
                      <span className="font-mono text-[#C89B3C] font-semibold shrink-0">
                        {slot.time}
                      </span>
                      <span className="text-[#526071] text-right">
                        {isHindi ? slot.activityHi : slot.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Box */}
              <div className="p-6 bg-[#0B1B2B] text-[#FAF7F2] space-y-3">
                <h4 className="font-serif-display text-xl">
                  {isHindi ? 'प्रवेश पूछताछ दर्ज करें' : `Apply for ${stage.name}`}
                </h4>
                <p className="text-xs text-[#FAF7F2]/80 leading-relaxed">
                  {isHindi
                    ? 'सीटों की सीमित संख्या के कारण समय पर आवेदन करने की सलाह दी जाती है।'
                    : 'Class sizes are capped at 16 to preserve discussion depth and faculty-student collaboration.'}
                </p>
                <div className="pt-2">
                  <Button
                    href={`/admissions`}
                    variant="secondary"
                    size="md"
                    className="w-full justify-center"
                  >
                    {isHindi ? 'पूछताछ पत्र भरें' : 'Begin Admissions Inquiry'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stage Navigation */}
          <div className="flex items-center justify-between border-t border-[#E2DAD0] mt-16 pt-8 text-xs font-bold uppercase tracking-wider">
            {prevStage ? (
              <Link
                href={`/academics/${prevStage.id}`}
                className="inline-flex items-center gap-2 text-[#0B1B2B] hover:text-[#C89B3C]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isHindi ? prevStage.nameHi : prevStage.name}</span>
              </Link>
            ) : <div />}

            {nextStage ? (
              <Link
                href={`/academics/${nextStage.id}`}
                className="inline-flex items-center gap-2 text-[#0B1B2B] hover:text-[#C89B3C]"
              >
                <span>{isHindi ? nextStage.nameHi : nextStage.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </Container>
      </section>
    </div>
  );
}
