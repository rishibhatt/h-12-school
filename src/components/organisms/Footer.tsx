'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/atoms/Logo';
import { Container } from '@/components/atoms/Container';
import { siteConfig } from '@/content/site-config';
import { useTranslation } from '@/i18n/context';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { dictionary, isHindi } = useTranslation();
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1B2B] text-[#FAF7F2] border-t border-[#1E344A] pt-16 pb-12">
      <Container size="lg">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#1E344A]">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-[#C89B3C] font-mono tracking-wider uppercase font-semibold">
              {isHindi ? siteConfig.mottoHi : siteConfig.motto}
            </p>
            <p className="text-xs text-[#FAF7F2]/80 leading-relaxed max-w-sm">
              {isHindi
                ? 'किंडरगार्टन से कक्षा 12 तक बौद्धिक अनुशासन, व्यावहारिक विज्ञान और मानवीय चरित्र निर्माण को समर्पित एक स्वतंत्र शैक्षणिक संस्थान।'
                : 'An independent preparatory institution dedicated to intellectual curiosity, experimental science, and humanistic character from early childhood to university entrance.'}
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-2 py-1 bg-[#112538] text-[#C89B3C] border border-[#1E344A]">
                Est. {siteConfig.established} · Ratio {siteConfig.ratio} · {siteConfig.campusSize}
              </span>
            </div>
          </div>

          {/* Column 2: Academic Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              {isHindi ? 'शैक्षणिक विभाग' : 'Academic Stages'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <Link href="/academics/primary" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'प्राथमिक (K–5)' : 'Primary (Grades K–5)'}
                </Link>
              </li>
              <li>
                <Link href="/academics/middle" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'माध्यमिक (6–8)' : 'Middle (Grades 6–8)'}
                </Link>
              </li>
              <li>
                <Link href="/academics/senior" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'उच्चतर (9–12)' : 'Senior (Grades 9–12)'}
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'पाठ्यक्रम रूपरेखा' : 'Curriculum Framework'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              {isHindi ? 'संस्थान व जीवन' : 'Institutional'}
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <Link href="/about" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'शैक्षणिक दृष्टि' : 'Mission & Creed'}
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'प्रवेश प्रक्रिया' : 'Admissions Roadmap'}
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'परिसर सुविधाएं' : 'Campus Facilities'}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'चित्र दीर्घा' : 'Visual Archives'}
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'विशिष्ट संकाय' : 'Distinguished Faculty'}
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'रणनीतिक रोडमैप (2026–2030)' : 'Strategic Roadmap (2026–2030)'}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'समाचार व सूचनाएं' : 'Announcements'}
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#FAF7F2] transition-colors">
                  {isHindi ? 'कार्यक्रम कैलेंडर' : 'Event Calendar'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C89B3C]">
              {isHindi ? 'संपर्क व कार्यालय' : 'Office & Inquiries'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF7F2]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span>{siteConfig.contact.admissionsEmail}</span>
              </p>
              <p className="flex items-start gap-2 text-[11px] text-[#A8B3C0]">
                <Clock className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.officeHours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Fictional Demonstration Disclosure Banner */}
        <div className="py-6 border-b border-[#1E344A] text-xs text-[#FAF7F2]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#112538]/40 px-4 my-6">
          <p className="leading-relaxed">
            <strong className="text-[#C89B3C] font-semibold uppercase tracking-wider">
              {isHindi ? 'प्रदर्शन प्रकटीकरण: ' : 'Demo Disclosure: '}
            </strong>
            {dictionary.common.fictionalNotice}
          </p>
          <Link
            href="/privacy"
            className="shrink-0 text-xs text-[#C89B3C] hover:text-[#FAF7F2] inline-flex items-center gap-1 font-semibold underline underline-offset-2"
          >
            <span>{dictionary.common.privacyPolicy}</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60 pt-4">
          <p>
            © {currentYear} {siteConfig.name}. {dictionary.common.allRightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/admissions" className="hover:text-[#FAF7F2] transition-colors">
              Admissions
            </Link>
            <Link href="/privacy" className="hover:text-[#FAF7F2] transition-colors">
              Terms & Privacy
            </Link>
            <Link href="/contact" className="hover:text-[#FAF7F2] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
