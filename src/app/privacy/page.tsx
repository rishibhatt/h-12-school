import React from 'react';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Button } from '@/components/atoms/Button';
import { AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Demonstration Terms',
  description:
    'Demonstration disclaimer and illustrative privacy policy for H-12 School web starter.',
};

export default function PrivacyPage() {
  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="md">
          <Breadcrumbs
            items={[
              { label: 'Privacy & Terms' },
            ]}
          />
          <div className="mt-4 space-y-4">
            <Badge variant="gold">Legal & Demonstration Disclaimers</Badge>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-normal text-[#0B1B2B]">
              Privacy Policy & Client Customization Notice
            </h1>
            <p className="text-sm text-[#2E384D]">
              Last updated: October 11, 2026 · Governing illustrative demo operations
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-rhythm bg-[#FAF7F2]">
        <Container size="md">
          <div className="space-y-8 text-sm text-[#1A2430] leading-relaxed">
            {/* Caution Callout */}
            <div className="p-5 bg-[#F7EEDB] border border-[#C89B3C] flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-[#7A5B1B] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-[#0B1B2B]">
                <strong className="font-bold uppercase tracking-wider block">
                  Commercial Starter Notice for Schools & Clients
                </strong>
                <p>
                  This website is a portfolio demonstration solution built by a senior product engineering team. H-12 School is a fictional institution. When deploying this starter for a real educational client, replace this policy with an institution-specific legal framework drafted in accordance with local student privacy laws (e.g. FERPA, GDPR, COPPA, or the Indian Digital Personal Data Protection Act).
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
                1. Information Handled in Demonstration Mode
              </h2>
              <p>
                In this demonstration environment, form submissions on the Admissions Inquiry and Contact pages are handled locally via simulated client-side service handlers. No personal identifiable information (PII) regarding prospective students, families, or telephone numbers is stored on remote servers or sold to advertising networks.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
                2. Production Backend Integration Guidelines
              </h2>
              <p>
                When connecting this starter to a live production database or CRM (such as Salesforce Education Cloud, HubSpot, or school management software):
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#2E384D]">
                <li>Implement TLS 1.3 encryption across all API routes.</li>
                <li>Ensure data minimization principles by only requesting necessary inquiry fields.</li>
                <li>Obtain affirmative parental consent prior to processing inquiries for children under 18.</li>
                <li>Configure automated data retention limits for uncompleted inquiries.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
                3. Cookies and Local Storage
              </h2>
              <p>
                This application utilizes browser <code className="text-xs bg-[#F3ECE2] px-1 py-0.5 font-mono">localStorage</code> solely to preserve the user’s selected language preference (English or Hindi) between visits. It does not deploy third-party cross-site tracking cookies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
                4. Copyright and Intellectual Property
              </h2>
              <p>
                The architectural layouts, code components, branding monograms, and design systems are created as a demonstration portfolio asset. Photography used is permitted for illustrative educational demonstrations.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E2DAD0] flex gap-4">
              <Button href="/" variant="primary" size="md">
                Return to Homepage
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Contact Administration
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
