'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types/content';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  isHindi?: boolean;
}

export function FAQAccordion({ items, isHindi = false }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="divide-y divide-[#E2DAD0] border-y border-[#E2DAD0]">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const question = isHindi ? item.questionHi : item.question;
        const answer = isHindi ? item.answerHi : item.answer;

        return (
          <div key={item.id} className="py-5">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B3C] group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-serif-display text-lg sm:text-xl font-normal text-[#0B1B2B] group-hover:text-[#C89B3C] transition-colors">
                {question}
              </span>
              <span
                className={`p-1.5 border border-[#E2DAD0] group-hover:border-[#0B1B2B] transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 bg-[#0B1B2B] text-[#FAF7F2]' : 'text-[#0B1B2B]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="pt-3 pb-1 text-xs sm:text-sm text-[#2E384D] leading-relaxed max-w-3xl animate-in fade-in duration-200">
                <p>{answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
