'use client';

import React, { useState } from 'react';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { NoticeCard } from '@/components/molecules/NoticeCard';
import { newsArticles } from '@/content/news';
import { useTranslation } from '@/i18n/context';
import { Search } from 'lucide-react';

export default function NewsPage() {
  const { isHindi } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admissions', 'Academic', 'Campus'];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'समाचार' : 'News & Notices' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="navy">
              {isHindi ? 'सूचनाएं' : 'Official Bulletins'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'समाचार, परिपत्र एवं घोषणाएं' : 'Notices, Dispatches & Announcements'}
            </h1>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {isHindi
                ? 'एच-12 स्कूल समुदाय के लिए महत्वपूर्ण तिथियां, शैक्षणिक परिपत्र और प्रशासनिक सूचनाएं।'
                : 'Current updates regarding term schedules, admissions intakes, laboratory research milestones, and institutional dispatches.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Content Section */}
      <section className="section-rhythm bg-[#FAF7F2]">
        <Container size="lg">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#E2DAD0] pb-6 mb-8">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-[#0B1B2B] text-[#FAF7F2] border-[#0B1B2B]'
                        : 'bg-[#FAF7F2] text-[#526071] border-[#E2DAD0] hover:border-[#0B1B2B]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? 'खोजें...' : 'Search notices...'}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E2DAD0] focus:border-[#C89B3C] outline-none"
              />
              <Search className="w-3.5 h-3.5 text-[#526071] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <NoticeCard key={article.slug} article={article} isHindi={isHindi} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-sm text-[#526071] bg-[#F3ECE2] border border-[#E2DAD0]">
              <p>{isHindi ? 'कोई सूचना नहीं मिली।' : 'No announcements matching your search criteria.'}</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
