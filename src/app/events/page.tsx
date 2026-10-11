'use client';

import React, { useState } from 'react';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { EventItem } from '@/components/molecules/EventItem';
import { upcomingEvents } from '@/content/events';
import { useTranslation } from '@/i18n/context';

export default function EventsPage() {
  const { isHindi } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Open Day', 'Academic', 'Arts', 'Athletics'];

  const filteredEvents =
    selectedCategory === 'All'
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'कार्यक्रम' : 'Events & Calendar' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="gold">
              {isHindi ? 'कैलेंडर' : 'Academic & Community Dates'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'परिसर कार्यक्रम एवं ओपन डे' : 'Open Mornings, Colloquia & Exhibitions'}
            </h1>
            <p className="text-base sm:text-lg text-[#2E384D] leading-relaxed">
              {isHindi
                ? 'इच्छुक परिवारों के लिए ओपन मॉर्निंग तिथियां, छात्र वाद-विवाद प्रतियोगिताएं और कला प्रदर्शनियां।'
                : 'Schedule of upcoming campus tours for prospective families, inter-house debates, student symposia, and athletic meets.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Events Listing */}
      <section className="section-rhythm bg-[#FAF7F2]">
        <Container size="lg">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#E2DAD0] pb-6 mb-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-[#0B1B2B] text-[#FAF7F2] border-[#0B1B2B]'
                      : 'bg-[#FAF7F2] text-[#2E384D] border-[#E2DAD0] hover:border-[#0B1B2B]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <EventItem key={event.id} event={event} isHindi={isHindi} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
