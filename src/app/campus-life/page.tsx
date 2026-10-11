'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { useTranslation } from '@/i18n/context';
import { Dumbbell, Palette, Microscope, Library } from 'lucide-react';

export default function CampusLifePage() {
  const { isHindi } = useTranslation();

  const facilities = [
    {
      title: 'Memorial Library & Humanities Archives',
      titleHi: 'मेमोरियल पुस्तकालय व मानविकी अभिलेखागार',
      desc: 'Two-story quiet study hall, seminar rooms, primary literature facsimiles, and 28,000 physical volumes.',
      descHi: 'दो मंजिला वाचनालय, शांत अध्ययन स्थल और 28,000 से अधिक भौतिक पुस्तकों का समृद्ध संकलन।',
      image: '/images/campus/library-hall.jpg',
      icon: Library,
    },
    {
      title: 'Wet Laboratories & Physics Pavilions',
      titleHi: 'प्रायोगिक प्रयोगशालाएं व भौतिकी विंग',
      desc: 'Modern biology, organic chemistry, and optics apparatus designed for student-directed capstone trials.',
      descHi: 'जीवविज्ञान, रसायन और प्रकाशिकी के उन्नत उपकरणों से सुसज्जित आधुनिक प्रयोगशालाएं।',
      image: '/images/academics/science-lab.jpg',
      icon: Microscope,
    },
    {
      title: 'Fine Arts, Ceramics & Sculpture Loft',
      titleHi: 'ललित कला, मिट्टी शिल्प व मूर्तिकला मचान',
      desc: 'North-facing skylit studios featuring electric pottery wheels, ceramic kilns, and student gallery spaces.',
      descHi: 'प्राकृतिक प्रकाश वाले स्टूडियो जिसमें सेरेमिक भट्टी और छात्र कला प्रदर्शनी स्थल शामिल हैं।',
      image: '/images/campus/arts-studio.jpg',
      icon: Palette,
    },
    {
      title: 'All-Weather Athletics Track & Pavilion',
      titleHi: 'सर्व-ऋतु एथलेटिक्स ट्रैक व खेल मंडप',
      desc: 'Eight-lane rubberized running circuit, turf soccer pitch, tennis courts, and fitness conditioning gym.',
      descHi: 'आठ-लेन सिंथेटिक रनिंग ट्रैक, फुटबॉल मैदान, टेनिस कोर्ट और फिटनेस प्रशिक्षण केंद्र।',
      image: '/images/campus/athletics-track.jpg',
      icon: Dumbbell,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'परिसर जीवन' : 'Campus Life' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="navy">
              {isHindi ? 'परिसर वातावरण' : 'Campus & Community'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'सीखने, सृजन एवं खेलकूद का समृद्ध संसार' : 'An Architecture for Discovery, Craft & Fellowship'}
            </h1>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {isHindi
                ? '36 एकड़ का हमारा परिसर एक जीवंत समुदाय है जहाँ छात्र केवल अध्ययन नहीं करते, बल्कि कला, खेल और सामाजिक उत्तरदायित्व में भी अग्रणी रहते हैं।'
                : 'Thirty-six wooded acres planned as an academic village. Daily life at H-12 balances rigorous classroom scholarship with physical conditioning, fine craftsmanship, and student-led initiatives.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Facilities Grid */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="space-y-16">
            {facilities.map((fac, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'} space-y-4`}>
                    <div className="w-10 h-10 bg-[#F3ECE2] border border-[#E2DAD0] flex items-center justify-center text-[#C89B3C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B]">
                      {isHindi ? fac.titleHi : fac.title}
                    </h2>
                    <p className="text-sm text-[#526071] leading-relaxed">
                      {isHindi ? fac.descHi : fac.desc}
                    </p>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-[#0B1B2B] shadow-sm bg-[#E2DAD0]">
                      <Image
                        src={fac.image}
                        alt={fac.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Co-Curricular & Student Guilds */}
      <section className="section-rhythm bg-[#F3ECE2]/50 border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="max-w-2xl mb-10 space-y-3">
            <Badge variant="gold">
              {isHindi ? 'सह-पाठ्यक्रम' : 'Guilds & Co-Curriculars'}
            </Badge>
            <h2 className="font-serif-display text-3xl font-normal text-[#0B1B2B]">
              {isHindi ? 'रुचियों एवं नेतृत्व का विस्तार' : 'Student-Led Clubs & Societies'}
            </h2>
            <p className="text-xs sm:text-sm text-[#526071]">
              {isHindi
                ? 'कक्षा के बाद छात्र विभिन्न साहित्यिक, वैज्ञानिक एवं सामाजिक गतिविधियों में भाग लेते हैं।'
                : 'Every scholar participates in at least one student society each term to cultivate initiative and teamwork.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DAD0]">
              <h3 className="font-serif-display text-lg text-[#0B1B2B] mb-2">
                {isHindi ? 'सुकराती वाद-विवाद सभा' : 'Socratic Debate Society'}
              </h3>
              <p className="text-xs text-[#526071] leading-relaxed">
                {isHindi
                  ? 'संसदीय वाद-विवाद और ऐतिहासिक नीतिगत विषयों पर साक्ष्य-आधारित चर्चा।'
                  : 'Weekly competitive debate training scholars in logic, parliamentary procedure, and persuasive rhetoric.'}
              </p>
            </div>
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DAD0]">
              <h3 className="font-serif-display text-lg text-[#0B1B2B] mb-2">
                {isHindi ? 'रोबोटिक्स व कम्प्यूटेशन गिल्ड' : 'Applied Robotics Guild'}
              </h3>
              <p className="text-xs text-[#526071] leading-relaxed">
                {isHindi
                  ? 'माइक्रोकंट्रोलर प्रोग्रामिंग, सेंसर इंटीग्रेशन और स्वचालित प्रणाली निर्माण।'
                  : 'Hands-on hardware fabrication, micro-controller programming, and regional engineering challenges.'}
              </p>
            </div>
            <div className="p-6 bg-[#FAF7F2] border border-[#E2DAD0]">
              <h3 className="font-serif-display text-lg text-[#0B1B2B] mb-2">
                {isHindi ? 'चैंबर ऑर्केस्ट्रा व संगीत' : 'Chamber Music Ensemble'}
              </h3>
              <p className="text-xs text-[#526071] leading-relaxed">
                {isHindi
                  ? 'शास्त्रीय संगीत, स्ट्रिंग चौकड़ी और सामुदायिक संगीत समारोह।'
                  : 'Vocal and instrumental classical performance ensembles performing at term exhibitions and regional festivals.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#FAF7F2] text-center">
        <Container size="md">
          <div className="space-y-4 max-w-xl mx-auto">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B]">
              {isHindi ? 'परिसर को प्रत्यक्ष देखें' : 'Tour Our Studios and Labs'}
            </h2>
            <p className="text-xs sm:text-sm text-[#526071]">
              {isHindi
                ? 'ओपन मॉर्निंग में भाग लें या अपनी व्यक्तिगत परिसर यात्रा निर्धारित करें।'
                : 'Join our scheduled Open Mornings or book a guided weekday campus walk.'}
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/gallery" variant="outline" size="md">
                {isHindi ? 'चित्र दीर्घा देखें' : 'View Full Gallery'}
              </Button>
              <Button href="/admissions" variant="primary" size="md">
                {isHindi ? 'प्रवेश प्रक्रिया देखें' : 'Explore Admissions'}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
