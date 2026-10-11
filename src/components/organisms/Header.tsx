'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/atoms/Logo';
import { Button } from '@/components/atoms/Button';
import { NavLink } from '@/components/molecules/NavLink';
import { LocaleSwitcher } from '@/components/molecules/LocaleSwitcher';
import { useTranslation } from '@/i18n/context';
import { Menu, X, ArrowRight, Bell } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { dictionary, isHindi } = useTranslation();
  const t = dictionary.nav;

  // Reset mobile menu during render if pathname changed
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Track scroll position for header compactness
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t.home },
    { href: '/about', label: t.about },
    { href: '/academics', label: t.academics },
    { href: '/faculty', label: t.faculty },
    { href: '/roadmap', label: t.roadmap },
    { href: '/campus-life', label: t.campusLife },
    { href: '/gallery', label: t.gallery },
    { href: '/news', label: t.news },
    { href: '/events', label: t.events },
    { href: '/contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Announcement Strip */}
      <div className="bg-[#0B1B2B] text-[#FAF7F2] border-b border-[#1E344A] px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="flex items-center gap-1.5 text-[#C89B3C] font-semibold tracking-wider uppercase text-[11px]">
              <Bell className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span>{isHindi ? 'प्रवेश सूचना' : 'Admissions Notice'}</span>
            </span>
            <span className="text-[#A8B3C0] hidden sm:inline">|</span>
            <span className="text-[#FAF7F2]/90 truncate text-[11px] sm:text-xs">
              {isHindi
                ? 'शैक्षणिक सत्र 2027-28 के लिए प्रारंभिक पूछताछ और परिसर भ्रमण खुले हैं।'
                : 'Admissions inquiries & campus discovery walks open for 2027–28.'}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/admissions"
              className="text-[#C89B3C] hover:text-[#FAF7F2] font-semibold text-[11px] uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
            >
              <span>{isHindi ? 'विवरण' : 'Details'}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <div className="h-3 w-px bg-white/20 hidden sm:block" />
            <LocaleSwitcher variant="light" className="hidden sm:inline-flex" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-[#FAF7F2]/95 backdrop-blur-md transition-all duration-200 border-b border-[#E2DAD0] ${
          scrolled ? 'py-2.5 shadow-xs' : 'py-3.5'
        }`}
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action Elements */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/admissions" variant="primary" size="sm">
              {t.inquireNow}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher variant="dark" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B1B2B] hover:bg-[#F3ECE2] border border-[#E2DAD0] focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.close : t.menu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#E2DAD0] shadow-lg max-h-[calc(100vh-100px)] overflow-y-auto p-6 transition-all">
            <div className="flex flex-col space-y-3 pb-6 border-b border-[#E2DAD0]">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base py-2"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <Button
                href="/admissions"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.inquireNow}
              </Button>
              <p className="text-[11px] text-[#526071] text-center italic">
                {dictionary.common.demoNote}
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
