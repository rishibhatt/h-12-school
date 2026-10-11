'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { StageCard } from '@/components/molecules/StageCard';
import { academicStages } from '@/content/academics';
import { useTranslation } from '@/i18n/context';

export default function AcademicsPage() {
  const { isHindi } = useTranslation();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'शिक्षा व पाठ्यक्रम' : 'Academics' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="navy">
              {isHindi ? 'शैक्षणिक ढांचा' : 'Curricular Architecture'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'अनुशासित अध्ययन एवं निरंतर प्रगति' : 'A Structured Continuum from Discovery to Defense'}
            </h1>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {isHindi
                ? 'किंडरगार्टन से कक्षा 12 तक हमारा पाठ्यक्रम जिज्ञासा को अनुशासित विश्लेषण और शोध में बदलता है।'
                : 'Our academic continuum bridges experiential wonder in the early years with rigorous analytical debate in middle school and university-caliber capstone research in senior years.'}
            </p>
          </div>
        </Container>
      </section>

      {/* The Three Stages Section */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-semibold">
              {isHindi ? 'तीन शैक्षणिक स्तर' : 'Three Grade Divisions'}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#0B1B2B]">
              {isHindi ? 'आयु-अनुकूल शैक्षणिक पद्धतियाँ' : 'Progressive Pedagogy Across Developmental Eras'}
            </h2>
            <p className="text-xs sm:text-sm text-[#526071]">
              {isHindi
                ? 'प्रत्येक चरण का अपना विशिष्ट वातावरण और संकाय है जो छात्र की आयु अनुसार श्रेष्ठ शिक्षण प्रदान करता है।'
                : 'Each division possesses dedicated laboratory wings, tailored reading archives, and specialized educators.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicStages.map((stage, idx) => (
              <StageCard key={stage.id} stage={stage} index={idx} isHindi={isHindi} />
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-Disciplinary Integration Callout */}
      <section className="section-rhythm bg-[#0B1B2B] text-[#FAF7F2] border-b border-[#1E344A]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Badge variant="gold">
                {isHindi ? 'समग्र विकास' : 'Core Integration'}
              </Badge>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#FAF7F2] leading-tight">
                {isHindi
                  ? 'विज्ञान और मानविकी का संतुलन'
                  : 'Bridging Quantitative Science & Humanistic Inquiry'}
              </h2>
              <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">
                {isHindi
                  ? 'हमारा दृढ़ विश्वास है कि केवल विज्ञान या केवल कला का अध्ययन अधूरा है। गणित और कोडिंग के साथ-साथ नैतिक दर्शनशास्त्र और कला का अनिवार्य शिक्षण छात्रों को भविष्य के लिए तैयार करता है।'
                  : 'We reject the false dichotomy between the sciences and the humanities. Tomorrow’s leaders must calculate with mathematical accuracy, write with rhetorical elegance, and deliberate with ethical clarity.'}
              </p>
              <div className="pt-2">
                <Button href="/admissions" variant="secondary" size="md">
                  {isHindi ? 'प्रवेश की जानकारी लें' : 'Inquire for 2027–28'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-[#1E344A]">
              <Image
                src="/images/academics/science-lab.jpg"
                alt="Students conducting research in wet lab"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
