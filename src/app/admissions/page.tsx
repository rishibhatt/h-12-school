'use client';

import React from 'react';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { InquiryForm } from '@/components/organisms/InquiryForm';
import { FAQAccordion } from '@/components/organisms/FAQAccordion';
import { faqs } from '@/content/faq';
import { useTranslation } from '@/i18n/context';
import { FileText, ShieldAlert } from 'lucide-react';

export default function AdmissionsPage() {
  const { dictionary, isHindi } = useTranslation();
  const t = dictionary.admissions;

  const steps = [
    { num: '01', title: t.step1Title, desc: t.step1Desc },
    { num: '02', title: t.step2Title, desc: t.step2Desc },
    { num: '03', title: t.step3Title, desc: t.step3Desc },
    { num: '04', title: t.step4Title, desc: t.step4Desc },
  ];

  const checklistItems = [
    {
      title: 'Previous Academic Transcripts',
      titleHi: 'पूर्व शैक्षणिक अंकतालिकाएं',
      desc: 'Official records from the past two academic years (Grade 1 and above).',
      descHi: 'विगत दो वर्षों के आधिकारिक शैक्षणिक रिकॉर्ड (कक्षा 1 और उससे ऊपर)।',
    },
    {
      title: 'Student Recommendation Letter',
      titleHi: 'शिक्षक अनुशंसा पत्र',
      desc: 'Confidential teacher appraisal from current school instructor.',
      descHi: 'वर्तमान विद्यालय के शिक्षक से गोपनीय मूल्यांकन पत्र।',
    },
    {
      title: 'Proof of Age & Identification',
      titleHi: 'आयु व पहचान प्रमाण पत्र',
      desc: 'Government birth certificate and family residential documentation.',
      descHi: 'जन्म प्रमाण पत्र और अभिभावक निवास प्रमाण पत्र।',
    },
    {
      title: 'Health & Immunization Record',
      titleHi: 'स्वास्थ्य व टीकाकरण विवरण',
      desc: 'Completed physician health profile and routine immunization form.',
      descHi: 'चिकित्सक द्वारा प्रमाणित स्वास्थ्य प्रोफाइल।',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'प्रवेश प्रक्रिया' : 'Admissions' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="gold">
              {isHindi ? 'सत्र 2027–2028' : 'Admissions Intake 2027–2028'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {t.title}
            </h1>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Process & Form Layout */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Process & Criteria (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Four Step Roadmap */}
              <div className="space-y-6">
                <div>
                  <Badge variant="navy">{isHindi ? 'प्रक्रिया' : 'The Journey'}</Badge>
                  <h2 className="font-serif-display text-3xl font-normal text-[#0B1B2B] mt-2">
                    {t.howItWorks}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((step) => (
                    <div
                      key={step.num}
                      className="p-6 bg-[#FAF7F2] border border-[#E2DAD0] flex flex-col justify-between"
                    >
                      <span className="font-mono text-xl font-bold text-[#C89B3C] mb-3">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="font-serif-display text-lg font-normal text-[#0B1B2B] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-[#526071] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentation Checklist */}
              <div className="space-y-6 border-t border-[#E2DAD0] pt-10">
                <div>
                  <Badge variant="subtle">
                    {isHindi ? 'दस्तावेज सूची' : 'Documentation Requirements'}
                  </Badge>
                  <h2 className="font-serif-display text-3xl font-normal text-[#0B1B2B] mt-2">
                    {isHindi ? 'आवश्यक प्रमाण पत्र व अभिलेख' : 'Illustrative Enrollment Checklist'}
                  </h2>
                </div>

                <div className="space-y-3">
                  {checklistItems.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white border border-[#E2DAD0] flex items-start gap-3.5"
                    >
                      <FileText className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-[#0B1B2B]">
                          {isHindi ? item.titleHi : item.title}
                        </h4>
                        <p className="text-xs text-[#526071] mt-0.5">
                          {isHindi ? item.descHi : item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fictional Caution Notice */}
              <div className="p-4 bg-[#F3ECE2] border border-[#E2DAD0] flex items-start gap-3 text-xs text-[#526071]">
                <ShieldAlert className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>{isHindi ? 'काल्पनिक विद्यालय सूचना: ' : 'Demonstration Notice: '}</strong>
                  {dictionary.common.fictionalNotice}
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form (5 cols) */}
            <div className="lg:col-span-5 sticky top-24">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Admissions FAQs */}
      <section className="section-rhythm bg-[#FAF7F2]">
        <Container size="md">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-serif-display text-3xl font-normal text-[#0B1B2B]">
              {isHindi ? 'प्रवेश संबंधी सामान्य प्रश्न' : 'Admissions Questions & Answers'}
            </h2>
            <p className="text-xs text-[#526071]">
              {isHindi
                ? 'प्रवेश समीक्षा, आयु पात्रता और समय-सारणी के संबंध में मार्गदर्शन।'
                : 'Key details regarding eligibility, assessment format, and notification timelines.'}
            </p>
          </div>

          <FAQAccordion items={faqs.filter((f) => f.category === 'Admissions')} isHindi={isHindi} />
        </Container>
      </section>
    </div>
  );
}
