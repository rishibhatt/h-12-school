import React from 'react';
import { siteConfig } from '@/content/site-config';

interface JsonLdProps {
  type: 'School' | 'Article' | 'Event' | 'Breadcrumbs';
  data?: Record<string, unknown>;
}

export function JsonLd({ type, data = {} }: JsonLdProps) {
  let schemaData: Record<string, unknown> = {};

  if (type === 'School') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      alternateName: siteConfig.legalName,
      description: siteConfig.descriptor,
      url: 'https://h12school-demo.org',
      logo: 'https://h12school-demo.org/images/branding/logo-emblem.svg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.admissionsEmail,
      isAccessibleForFree: false,
      identifier: 'DEMO-H12-STARTER',
    };
  } else if (type === 'Article') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.headline,
      datePublished: data.datePublished,
      description: data.description,
      author: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
          '@type': 'ImageObject',
          url: 'https://h12school-demo.org/images/hero/campus-hero.jpg',
        },
      },
    };
  } else if (type === 'Event') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: data.name,
      startDate: data.startDate,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: data.locationName || siteConfig.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.city,
          addressCountry: siteConfig.address.country,
        },
      },
      organizer: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: 'https://h12school-demo.org',
      },
    };
  } else if (type === 'Breadcrumbs') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.items || [],
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
