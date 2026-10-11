'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { useTranslation } from '@/i18n/context';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const { isHindi } = useTranslation();

  const leadership = [
    {
      name: 'Dr. Alistair Montgomery',
      nameHi: 'डॉ. एलिस्टेयर मोंटगोमरी',
      role: 'Head of School (Fictional Profile)',
      roleHi: 'प्रधानाचार्य (काल्पनिक प्रोफाइल)',
      bio: 'Over twenty-four years of leadership in independent secondary education, specializing in curriculum alignment and faculty mentorship.',
      bioHi: 'स्वतंत्र माध्यमिक शिक्षा और शिक्षक मार्गदर्शन में चौबीस वर्षों का व्यापक अनुभव।',
    },
    {
      name: 'Prof. Ananya Sen',
      nameHi: 'प्रो. अनन्या सेन',
      role: 'Dean of Academics & STEM',
      roleHi: 'शैक्षणिक अधिष्ठाता व विज्ञान प्रमुख',
      bio: 'Former university lecturer with a focus on inquiry-led laboratory pedagogy and mathematics curriculum integration.',
      bioHi: 'विश्वविद्यालय व्याख्याता एवं व्यावहारिक विज्ञान और गणित शिक्षा विशेषज्ञ।',
    },
    {
      name: 'Marcus Vance, M.Ed.',
      nameHi: 'मार्कस वेंस',
      role: 'Dean of Student Life & Athletics',
      roleHi: 'छात्र जीवन व खेलकूद अधिष्ठाता',
      bio: 'Dedicated to character education, adolescent pastoral advisory, and interscholastic athletic conditioning.',
      bioHi: 'चरित्र निर्माण, छात्र परामर्श और खेलकूद विकास के प्रति समर्पित।',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'परिचय' : 'About' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="gold">
              {isHindi ? 'संस्थागत दृष्टि' : 'Institutional Heritage & Vision'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'जिज्ञासा, अनुशासन व चरित्र की शिक्षा' : 'The Pursuit of Truth, Rigor & Character'}
            </h1>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {isHindi
                ? 'एच-12 स्कूल 1988 से बौद्धिक अनुशासन और सहानुभूतिपूर्ण सहभागिता के साथ छात्रों को जीवन भर के अध्ययन के लिए तैयार करता आ रहा है।'
                : 'Founded on the conviction that genuine education develops both sharp analytical intellect and moral responsibility, H-12 School provides a structured continuum from early childhood through university preparation.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Educational Creed & Philosophy */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] font-semibold">
                {isHindi ? 'हमारा शैक्षणिक दर्शन' : 'Our Educational Creed'}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#0B1B2B]">
                {isHindi
                  ? 'ज्ञान केवल सूचना नहीं, बल्कि समझ और अनुप्रयोग है'
                  : 'Knowledge is Not Merely Received; It is Examined, Tested & Applied'}
              </h2>
              <div className="space-y-4 text-sm text-[#526071] leading-relaxed">
                <p>
                  {isHindi
                    ? 'हम पाठ्यपुस्तकों को अंतिम सत्य मानने के बजाय छात्रों को साक्ष्यों की जांच करने, प्राथमिक स्रोतों को पढ़ने और अपनी परिकल्पनाओं का परीक्षण करने के लिए प्रेरित करते हैं।'
                    : 'We reject passive instructional models that treat students as empty vessels. In our science wings, students isolate variables and observe physical principles directly; in our literature seminars, they interrogate texts and defend interpretations with cited evidence.'}
                </p>
                <p>
                  {isHindi
                    ? 'प्रत्येक छात्र को अपनी बात स्पष्टता और शालीनता के साथ व्यक्त करने तथा दूसरों के विचारों को ध्यानपूर्वक सुनने का अभ्यास कराया जाता है।'
                    : 'Equally essential is the ethos of mutual consideration. High academic expectations exist within a collaborative, respectful culture where scholarly debate strengthens friendships rather than dividing them.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-[#E2DAD0] pt-6 text-xs text-[#0B1B2B] font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2D5547]" />
                  <span>{isHindi ? '1:12 छात्र-शिक्षक अनुपात' : '1:12 Faculty-to-Student Ratio'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2D5547]" />
                  <span>{isHindi ? 'स्वतंत्र शोध प्रबंध' : 'Independent Capstone Defense'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden border border-[#0B1B2B] shadow-md">
              <Image
                src="/images/hero/campus-hero.jpg"
                alt="H-12 School main limestone library and central quad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership & Faculty (Fictional Profiles) */}
      <section className="section-rhythm bg-[#F3ECE2]/40 border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="max-w-2xl mb-12 space-y-3">
            <Badge variant="navy">
              {isHindi ? 'प्रशासनिक नेतृत्व' : 'Academic Leadership'}
            </Badge>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#0B1B2B]">
              {isHindi ? 'अनुभवी शिक्षकों का मार्गदर्शन' : 'Scholars & Stewards of the Institution'}
            </h2>
            <p className="text-xs sm:text-sm text-[#526071]">
              {isHindi
                ? 'हमारे शिक्षक अपने विषय के विशेषज्ञ होने के साथ-साथ समर्पित परामर्शदाता भी हैं। (प्रदर्शन हेतु काल्पनिक प्रोफाइल)'
                : 'Faculty leadership combining decades of preparatory scholarship and dedicated pastoral care. (Illustrative fictional profiles for demonstration).'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="p-6 bg-[#FAF7F2] border border-[#E2DAD0] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0B1B2B] text-[#C89B3C] font-serif-display font-bold text-xl flex items-center justify-center mb-4">
                    {leader.name.charAt(0)}
                  </div>
                  <h3 className="font-serif-display text-xl font-normal text-[#0B1B2B]">
                    {isHindi ? leader.nameHi : leader.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#C89B3C] mb-4 font-semibold">
                    {isHindi ? leader.roleHi : leader.role}
                  </p>
                  <p className="text-xs text-[#526071] leading-relaxed">
                    {isHindi ? leader.bioHi : leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Admissions Conversion Section */}
      <section className="py-16 bg-[#FAF7F2] text-center">
        <Container size="md">
          <div className="space-y-4 max-w-xl mx-auto">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B]">
              {isHindi ? 'हमसे व्यक्तिगत रूप से मिलें' : 'Experience Our Learning Community in Person'}
            </h2>
            <p className="text-xs sm:text-sm text-[#526071]">
              {isHindi
                ? 'परिसर का प्रत्यक्ष भ्रमण करें और हमारे संकाय से संवाद करें।'
                : 'Join our scheduled Open Mornings or book a guided weekday campus discovery walk.'}
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/admissions" variant="primary" size="md">
                {isHindi ? 'प्रवेश प्रक्रिया देखें' : 'Explore Admissions'}
              </Button>
              <Button href="/contact" variant="outline" size="md">
                {isHindi ? 'संपर्क करें' : 'Contact Office'}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
