import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/atoms/Container';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { Home, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-rhythm bg-[#FAF7F2] min-h-[60vh] flex items-center">
      <Container size="md">
        <div className="text-center space-y-6 max-w-lg mx-auto py-12">
          <Badge variant="gold">Error 404</Badge>

          <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B] leading-tight">
            Page Not Located in the Archives
          </h1>

          <p className="text-sm sm:text-base text-[#2E384D] leading-relaxed">
            The curriculum document, notice, or destination you requested does not exist or has been relocated to another academic wing.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="md">
              <Home className="w-4 h-4 mr-1.5" />
              <span>Return to Homepage</span>
            </Button>
            <Button href="/academics" variant="outline" size="md">
              <BookOpen className="w-4 h-4 mr-1.5" />
              <span>Explore Academics</span>
            </Button>
          </div>

          <div className="pt-8 border-t border-[#E2DAD0] flex justify-center gap-6 text-xs text-[#2E384D]">
            <Link href="/admissions" className="hover:text-[#0B1B2B]">
              Admissions
            </Link>
            <Link href="/news" className="hover:text-[#0B1B2B]">
              Announcements
            </Link>
            <Link href="/contact" className="hover:text-[#0B1B2B]">
              Contact Desk
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
