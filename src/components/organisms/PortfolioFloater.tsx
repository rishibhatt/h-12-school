'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, ExternalLink, X, ChevronUp, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export function PortfolioFloater() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal after 2.5 seconds to avoid initial page load disruption (CRO best practice)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <>
      {/* 1. Floating Pill Trigger (Fixed Bottom Right) */}
      {!isOpen && (
        <aside
          aria-label="Developer Portfolio & Project Inquiry"
          className="fixed bottom-5 right-5 z-40 animate-fade-in"
        >
          <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#0B1B2B] text-[#FAF7F2] border border-[#C89B3C]/50 shadow-xl rounded-full transition-transform hover:scale-[1.02]">
            {/* Developer Avatar with Live Beacon */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C89B3C] shrink-0 bg-[#112538]">
              <Image
                src="/images/rishab-pfp.png"
                alt="Rishab Bhatt — Frontend & Conversion Engineer"
                fill
                sizes="40px"
                className="object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0B1B2B]" />
            </div>

            {/* Quick Context & Offer Hook */}
            <div className="hidden sm:flex flex-col text-left pr-2 pl-1">
              <span className="text-[11px] font-semibold text-[#C89B3C] flex items-center gap-1 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#C89B3C]" />
                Want a custom site like this?
              </span>
              <span className="text-xs text-[#FAF7F2] font-medium">
                Built by Rishab · Available for Hire
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="px-3 py-1.5 bg-[#C89B3C] hover:bg-[#b58b32] text-[#0B1B2B] text-xs font-bold rounded-full transition-colors flex items-center gap-1"
              >
                <span>Get Quote</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://rishieee.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Rishab Bhatt Portfolio"
                className="p-1.5 text-[#FAF7F2]/80 hover:text-[#C89B3C] transition-colors rounded-full"
                title="View Portfolio at rishieee.netlify.app"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                aria-label="Dismiss banner"
                className="p-1.5 text-[#FAF7F2]/60 hover:text-[#FAF7F2] transition-colors rounded-full"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Expanded High-Converting Offer Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-modal-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
        >
          <div className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E2DAD0] shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#0B1B2B] text-[#FAF7F2] p-5 sm:p-6 border-b border-[#1E344A]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C89B3C] shrink-0 bg-[#112538]">
                    <Image
                      src="/images/rishab-pfp.png"
                      alt="Rishab Bhatt"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 id="offer-modal-title" className="text-base font-serif font-bold text-[#FAF7F2]">
                        Rishab Bhatt
                      </h2>
                      <span className="px-2 py-0.5 bg-[#2D5547] text-white text-[10px] font-mono rounded-xs uppercase">
                        Available for Hire
                      </span>
                    </div>
                    <p className="text-xs text-[#C89B3C] font-mono">
                      rishieee.netlify.app · Frontend & AI Engineer
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-[#FAF7F2]/60 hover:text-[#FAF7F2] transition-colors rounded-xs"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Offer Headline */}
              <div className="mt-4 pt-4 border-t border-[#1E344A]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C89B3C] block mb-1">
                  Custom School & Institutional Web Platform
                </span>
                <p className="text-sm sm:text-base font-serif text-[#FAF7F2] leading-snug">
                  Want a bespoke, high-converting digital campus like H-12 School for your institution?
                </p>
              </div>
            </div>

            {/* Modal Body / Value Stack */}
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto text-[#0B1B2B]">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  I engineer custom, accessible web platforms for private schools, academies, universities, and high-ticket B2B organizations. No generic WordPress templates.
                </p>
              </div>

              {/* Deliverables Stack */}
              <div className="p-3.5 bg-white border border-[#E2DAD0] space-y-2 text-xs">
                <span className="font-bold uppercase tracking-wider text-[#0B1B2B] text-[11px] block">
                  What You Get in a Custom Build:
                </span>
                <ul className="space-y-1.5 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5547] shrink-0 mt-0.5" />
                    <span><strong>Tailored Next.js 16 + Tailwind System:</strong> Hand-crafted editorial brand identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5547] shrink-0 mt-0.5" />
                    <span><strong>High-Converting Admissions Engine:</strong> Multi-step inquiry forms & CRM routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5547] shrink-0 mt-0.5" />
                    <span><strong>Bilingual / Multilingual Ready:</strong> Native English + Hindi / regional languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5547] shrink-0 mt-0.5" />
                    <span><strong>Lighthouse 95+ & WCAG AAA:</strong> Instant loading & accessible keyboard navigation</span>
                  </li>
                </ul>
              </div>

              {/* Urgency & Limited Availability Banner (Offers skill) */}
              <div className="p-3 bg-[#F3ECE2] border border-[#C89B3C]/40 text-xs flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span className="text-[#0B1B2B] font-medium text-[11px] leading-tight">
                  <strong>Limited Intake:</strong> Currently booking 2 custom institution launches this quarter for dedicated full-stack attention.
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 sm:p-5 bg-[#F3ECE2] border-t border-[#E2DAD0] flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://rishieee.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2.5 px-4 bg-[#0B1B2B] hover:bg-[#112538] text-[#FAF7F2] text-xs font-bold text-center uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C89B3C]" />
              </a>

              <a
                href="https://rishieee.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-4 bg-white hover:bg-[#FAF7F2] text-[#0B1B2B] border border-[#E2DAD0] text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>Visit Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
