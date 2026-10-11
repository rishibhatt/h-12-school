'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryPhoto } from '@/types/content';
import { Badge } from '@/components/atoms/Badge';
import { X, ZoomIn } from 'lucide-react';

interface GalleryGridProps {
  photos: GalleryPhoto[];
  isHindi?: boolean;
}

export function GalleryGrid({ photos, isHindi = false }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'Campus', 'Academics', 'Arts', 'Athletics'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#E2DAD0] pb-6">
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
                  : 'bg-[#FAF7F2] text-[#526071] border-[#E2DAD0] hover:border-[#0B1B2B]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Responsive Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <article
            key={photo.id}
            className="group relative bg-[#FAF7F2] border border-[#E2DAD0] overflow-hidden cursor-pointer"
            onClick={() => setActivePhoto(photo)}
          >
            <div className="relative aspect-[4/3] bg-[#E2DAD0] overflow-hidden">
              <Image
                src={photo.src}
                alt={isHindi ? photo.altHi : photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0B1B2B]/0 group-hover:bg-[#0B1B2B]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="p-2.5 bg-[#FAF7F2] text-[#0B1B2B] border border-[#0B1B2B] shadow-md flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
                  <ZoomIn className="w-4 h-4 text-[#C89B3C]" />
                  <span>{isHindi ? 'बड़ा देखें' : 'View High-Res'}</span>
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <Badge variant="navy">{isHindi ? photo.categoryHi : photo.category}</Badge>
              </div>
            </div>

            <div className="p-4 border-t border-[#E2DAD0]">
              <h3 className="font-serif-display text-base font-normal text-[#0B1B2B] mb-1">
                {isHindi ? photo.titleHi : photo.title}
              </h3>
              <p className="text-xs text-[#526071] line-clamp-2">
                {isHindi ? photo.captionHi : photo.caption}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={isHindi ? activePhoto.titleHi : activePhoto.title}
          className="fixed inset-0 z-50 bg-[#0B1B2B]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] border border-[#E2DAD0] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#FAF7F2] border border-[#E2DAD0] text-[#0B1B2B] hover:bg-[#F3ECE2] cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#E2DAD0] mb-4 overflow-hidden border border-[#E2DAD0]">
              <Image
                src={activePhoto.src}
                alt={isHindi ? activePhoto.altHi : activePhoto.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#E2DAD0]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C89B3C] block mb-1">
                  {isHindi ? activePhoto.categoryHi : activePhoto.category}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#0B1B2B]">
                  {isHindi ? activePhoto.titleHi : activePhoto.title}
                </h3>
                <p className="text-xs text-[#526071] mt-1 max-w-2xl">
                  {isHindi ? activePhoto.captionHi : activePhoto.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="text-xs uppercase tracking-wider font-semibold text-[#0B1B2B] hover:text-[#C89B3C] self-end sm:self-center"
              >
                {isHindi ? 'बंद करें (Esc)' : 'Close (Esc)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
