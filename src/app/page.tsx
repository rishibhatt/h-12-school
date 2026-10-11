'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/organisms/Hero';
import { Container } from '@/components/atoms/Container';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { StageCard } from '@/components/molecules/StageCard';
import { NoticeCard } from '@/components/molecules/NoticeCard';
import { EventItem } from '@/components/molecules/EventItem';
import { FAQAccordion } from '@/components/organisms/FAQAccordion';
import { HomepageFacultyRoadmap } from '@/components/organisms/HomepageFacultyRoadmap';
import { academicStages } from '@/content/academics';
import { institutionalPillars } from '@/content/site-config';
import { newsArticles } from '@/content/news';
import { upcomingEvents } from '@/content/events';
import { faqs } from '@/content/faq';
import { useTranslation } from '@/i18n/context';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { isHindi } = useTranslation();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Institutional Ethos & Philosophy */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <Badge variant="gold">
                {isHindi ? 'संस्थागत सिद्धांत' : 'Educational Creed'}
              </Badge>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0B1B2B] leading-tight">
                {isHindi
                  ? 'सत्य, अनुसंधान एवं विचारशीलता का परिसर'
                  : 'Cultivating Discernment, Not Mere Compliance'}
              </h2>
              <p className="text-sm sm:text-base text-[#526071] leading-relaxed">
                {isHindi
                  ? 'एच-12 स्कूल में हम मानते हैं कि वास्तविक शिक्षा केवल परीक्षा उत्तीर्ण करने में नहीं, बल्कि स्वतंत्र सोच, तार्किक संवाद और वैज्ञानिक दृष्टिकोण विकसित करने में निहित है।'
                  : 'At H-12 School, scholarship begins with the courage to question. We replace passive rote learning with student-led laboratory trials, primary literature seminars, and community responsibility.'}
              </p>
              <div className="pt-2">
                <Button href="/about" variant="outline" size="md">
                  {isHindi ? 'हमारा दर्शन व नेतृत्व' : 'Read Full School Philosophy'}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {institutionalPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-6 bg-[#FAF7F2] border border-[#E2DAD0] flex flex-col justify-between"
                >
                  <span className="font-mono text-2xl font-bold text-[#C89B3C] mb-4">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-serif-display text-lg font-normal text-[#0B1B2B] mb-2">
                      {isHindi ? pillar.titleHi : pillar.title}
                    </h3>
                    <p className="text-xs text-[#526071] leading-relaxed">
                      {isHindi ? pillar.descriptionHi : pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Academic Pathways Grid */}
      <section id="pathways" className="section-rhythm bg-[#F3ECE2]/50 border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="navy">
                {isHindi ? 'शैक्षणिक चरण' : 'Academic Continuum'}
              </Badge>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0B1B2B] mt-3">
                {isHindi ? 'कक्षा K से 12 तक की सुव्यवस्थित यात्रा' : 'Three Distinct Stages of Scholarship'}
              </h2>
            </div>
            <Link
              href="/academics"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] hover:text-[#C89B3C]"
            >
              <span>{isHindi ? 'समग्र पाठ्यक्रम देखें' : 'View Full Curricular Matrix'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicStages.map((stage, idx) => (
              <StageCard key={stage.id} stage={stage} index={idx} isHindi={isHindi} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Campus Experience Showcase */}
      <section className="section-rhythm bg-[#0B1B2B] text-[#FAF7F2] border-b border-[#1E344A]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden border border-[#1E344A]">
              <Image
                src="/images/campus/arts-studio.jpg"
                alt="Students in creative ceramics studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="gold">Creative Studios</Badge>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-[#C89B3C] uppercase tracking-wider font-semibold">
                {isHindi ? 'परिसर जीवन व सुविधाएं' : 'Holistic Campus Environment'}
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#FAF7F2] leading-tight">
                {isHindi
                  ? 'अध्ययन कक्षों से परे: कला, खेल एवं सहयोगात्मक अनुभव'
                  : 'Spaces Engineered for Focus, Expression & Physical Vitality'}
              </h2>
              <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">
                {isHindi
                  ? 'हमारा 36 एकड़ का हरा-भरा परिसर उन्नत भौतिकी व रसायन प्रयोगशालाओं, 28,000 पुस्तकों वाले पुस्तकालय, ललित कला मंडप और ऑल-वेदर एथलेटिक्स ट्रैक से सुसज्जित है।'
                  : 'Thirty-six landscaped acres host specialized biology and physics wings, the two-story Memorial Library with 28,000 volumes, loft ceramics studios, and an all-weather competition athletics track.'}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-[#1E344A] pt-6">
                <div>
                  <h4 className="font-serif-display text-lg text-[#C89B3C]">
                    {isHindi ? 'ऑल-वेदर ट्रैक' : 'Competition Track'}
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/70 mt-1">
                    {isHindi ? '8-लेन सिंथेटिक रनिंग ट्रैक' : '8-lane rubberized running circuit'}
                  </p>
                </div>
                <div>
                  <h4 className="font-serif-display text-lg text-[#C89B3C]">
                    {isHindi ? 'शोध प्रयोगशालाएं' : 'Science Laboratories'}
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/70 mt-1">
                    {isHindi ? 'आधुनिक भौतिक व रासायनिक उपकरण' : 'Direct wet-lab experimentation'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex gap-4">
                <Button href="/campus-life" variant="secondary" size="md">
                  {isHindi ? 'परिसर का अन्वेषण करें' : 'Explore Campus Facilities'}
                </Button>
                <Button href="/gallery" variant="outline" size="md" className="text-[#FAF7F2] border-[#FAF7F2] hover:bg-white/10">
                  {isHindi ? 'चित्र दीर्घा' : 'Visual Gallery'}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Announcements & Upcoming Events */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Notices (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E2DAD0] pb-4">
                <div>
                  <Badge variant="subtle">{isHindi ? 'सूचनाएं' : 'Notices'}</Badge>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B] mt-1">
                    {isHindi ? 'ताजा समाचार व परिपत्र' : 'School Announcements'}
                  </h3>
                </div>
                <Link
                  href="/news"
                  className="text-xs font-bold uppercase tracking-wider text-[#0B1B2B] hover:text-[#C89B3C] inline-flex items-center gap-1"
                >
                  <span>{isHindi ? 'सभी देखें' : 'All News'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {newsArticles.slice(0, 2).map((article) => (
                  <NoticeCard key={article.slug} article={article} isHindi={isHindi} />
                ))}
              </div>
            </div>

            {/* Events (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-[#E2DAD0] pb-4">
                <Badge variant="gold">{isHindi ? 'कैलेंडर' : 'Upcoming'}</Badge>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B] mt-1">
                  {isHindi ? 'ओपन डे व कार्यक्रम' : 'Open Mornings & Dates'}
                </h3>
              </div>

              <div className="space-y-4">
                {upcomingEvents.slice(0, 2).map((event) => (
                  <EventItem key={event.id} event={event} isHindi={isHindi} />
                ))}
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1B2B] hover:text-[#C89B3C]"
                >
                  <span>{isHindi ? 'संपूर्ण कैलेंडर देखें' : 'View Full Event Calendar'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5b. Distinguished Faculty & Strategic Roadmap */}
      <HomepageFacultyRoadmap />

      {/* 6. Admissions Conversion Callout */}
      <section className="section-rhythm bg-[#F3ECE2] border-b border-[#E2DAD0]">
        <Container size="md">
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            <Badge variant="gold">
              {isHindi ? 'प्रवेश प्रक्रिया 2027–28' : 'Admissions 2027–2028'}
            </Badge>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0B1B2B]">
              {isHindi ? 'अपनी पारिवारिक यात्रा आज ही आरंभ करें' : 'Begin Your Family’s Discovery Journey'}
            </h2>
            <p className="text-sm sm:text-base text-[#526071] leading-relaxed">
              {isHindi
                ? 'हमारा प्रवेश कार्यालय पारदर्शी, व्यक्तिगत और विचारशील प्रक्रिया में विश्वास करता है। ओपन मॉर्निंग के लिए पंजीकरण करें या अपनी ऑनलाइन पूछताछ दर्ज करें।'
                : 'Admissions for prospective scholars are guided by mutual alignment and thoughtful dialogue. Submit an inquiry or schedule a private campus discovery walk.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button href="/admissions" variant="primary" size="lg">
                {isHindi ? 'प्रवेश पूछताछ पत्र भरें' : 'Complete Online Inquiry'}
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                {isHindi ? 'प्रशासन से संपर्क करें' : 'Contact Admissions Desk'}
              </Button>
            </div>
            <p className="text-[11px] text-[#526071] italic pt-2">
              {isHindi
                ? 'एच-12 स्कूल एक काल्पनिक प्रदर्शन वेबसाइट है। पूछताछ स्थानीय रूप से सिम्युलेट की जाती है।'
                : 'Illustrative demonstration: inquiries are validated and stored locally for portfolio review.'}
            </p>
          </div>
        </Container>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="section-rhythm bg-[#FAF7F2]">
        <Container size="md">
          <div className="text-center mb-12 space-y-3">
            <Badge variant="subtle">FAQ</Badge>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#0B1B2B]">
              {isHindi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xs sm:text-sm text-[#526071] max-w-lg mx-auto">
              {isHindi
                ? 'प्रवेश, कक्षा आकार और परिसर जीवन के संबंध में प्रमुख जानकारियां।'
                : 'Practical information regarding admissions criteria, class ratios, and campus life.'}
            </p>
          </div>

          <FAQAccordion items={faqs.slice(0, 5)} isHindi={isHindi} />
        </Container>
      </section>
    </div>
  );
}
