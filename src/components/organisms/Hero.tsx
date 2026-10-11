'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { Button } from '@/components/atoms/Button';
import { useTranslation } from '@/i18n/context';
import { ArrowDown, Compass, Sparkles } from 'lucide-react';
import { GsapReveal } from '@/components/motion/GsapReveal';

export function Hero() {
  const { dictionary, isHindi } = useTranslation();
  const t = dictionary.hero;

  return (
    <section className="relative bg-[#FAF7F2] border-b border-[#E2DAD0] overflow-hidden pt-8 pb-16 lg:py-20">
      <Container size="lg">
        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Statement & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <GsapReveal direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3ECE2] border border-[#E2DAD0] text-[#0B1B2B] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{t.eyebrow}</span>
              </div>
            </GsapReveal>

            <GsapReveal direction="up" delay={0.15}>
              <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#0B1B2B] leading-[1.08] tracking-tight">
                {t.titleLine1} <br />
                <span className="text-[#C89B3C] italic">{t.titleLine2}</span>
              </h1>
            </GsapReveal>

            <GsapReveal direction="up" delay={0.25}>
              <p className="text-base sm:text-lg text-[#526071] leading-relaxed max-w-xl font-normal">
                {t.description}
              </p>
            </GsapReveal>

            {/* CTAs */}
            <GsapReveal direction="up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/admissions" variant="primary" size="lg">
                  {t.ctaPrimary}
                </Button>
                <Button href="/academics" variant="outline" size="lg">
                  {t.ctaSecondary}
                </Button>
              </div>
            </GsapReveal>

            {/* Institutional Stat Metrics */}
            <GsapReveal direction="up" delay={0.45}>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E2DAD0] max-w-lg">
                <div>
                  <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#0B1B2B]">
                    1:12
                  </span>
                  <span className="text-[11px] text-[#526071] uppercase tracking-wider">
                    {t.ratioLabel}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#0B1B2B]">
                    36
                  </span>
                  <span className="text-[11px] text-[#526071] uppercase tracking-wider">
                    {t.campusLabel}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-2xl sm:text-3xl font-bold text-[#0B1B2B]">
                    K–12
                  </span>
                  <span className="text-[11px] text-[#526071] uppercase tracking-wider">
                    {t.stageLabel}
                  </span>
                </div>
              </div>
            </GsapReveal>
          </div>

          {/* Right Column: Architectural Photography & Frame (5 cols) */}
          <div className="lg:col-span-5">
            <GsapReveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Hairline Offset Decorative Frame */}
                <div
                  className="absolute -inset-2 sm:-inset-3 border border-[#C89B3C]/40 translate-x-3 translate-y-3 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Primary Campus Photograph */}
                <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-[#E2DAD0] border border-[#0B1B2B] shadow-md">
                  <Image
                    src="/images/hero/campus-hero.jpg"
                    alt="H-12 School main limestone campus quad and central library"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/70 via-transparent to-transparent" />

                  {/* On-Image Caption Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF7F2]/95 backdrop-blur-xs border border-[#E2DAD0] text-[#0B1B2B]">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="font-semibold uppercase tracking-wider text-[#C89B3C]">
                        {isHindi ? 'केंद्रीय परिसर प्रांगण' : 'Central Academic Quad'}
                      </span>
                      <span>1988</span>
                    </div>
                    <p className="text-[11px] text-[#526071] leading-tight">
                      {isHindi
                        ? '36 एकड़ में फैला अध्ययन प्रांगण, विज्ञान प्रयोगशालाएं एवं पुस्तकालय।'
                        : 'Thirty-six acres of dedicated science wings, libraries, and open courtyards.'}
                    </p>
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="pt-12 flex items-center justify-between border-t border-[#E2DAD0] mt-12 text-xs text-[#526071]">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{isHindi ? 'नीचे स्क्रॉल करके अन्वेषण करें' : 'Scroll to discover curriculum & admissions'}</span>
          </div>
          <Link
            href="#pathways"
            className="inline-flex items-center gap-1.5 text-[#0B1B2B] hover:text-[#C89B3C] font-semibold uppercase tracking-wider"
          >
            <span>{isHindi ? 'शैक्षणिक चरण' : 'Academic Stages'}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
