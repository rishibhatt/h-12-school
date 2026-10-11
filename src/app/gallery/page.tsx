'use client';

import React from 'react';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { GalleryGrid } from '@/components/organisms/GalleryGrid';
import { galleryPhotos } from '@/content/gallery';
import { useTranslation } from '@/i18n/context';

export default function GalleryPage() {
  const { isHindi } = useTranslation();

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'चित्र दीर्घा' : 'Gallery' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="gold">
              {isHindi ? 'दृश्य अभिलेखागार' : 'Visual Documentation'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'परिसर, अध्ययन एवं दैनिक जीवन' : 'A Documentary Window into Daily Life'}
            </h1>
            <p className="text-base sm:text-lg text-[#2E384D] leading-relaxed">
              {isHindi
                ? 'हमारे अध्ययन कक्षों, कला दीर्घाओं, प्रयोगशालाओं और खेल के मैदानों का प्रामाणिक छायाचित्र संकलन।'
                : 'Explore high-resolution photography documenting laboratory investigations, architectural reading carrels, ceramic studios, and competitive athletics across H-12 School.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="section-rhythm bg-[#FAF7F2]">
        <Container size="lg">
          <GalleryGrid photos={galleryPhotos} isHindi={isHindi} />
        </Container>
      </section>
    </div>
  );
}
