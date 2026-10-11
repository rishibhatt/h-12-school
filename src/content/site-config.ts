import { SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  name: 'H-12 School',
  legalName: 'H-12 School of Learning & Discovery (Demonstration Model)',
  motto: 'Truth, Rigor & Inquiry',
  mottoHi: 'सत्य, अनुशासन एवं जिज्ञासा',
  descriptor: 'An independent K–12 preparatory learning institution',
  descriptorHi: 'एक स्वतंत्र K–12 प्रारंभिक शैक्षणिक संस्थान',
  established: 1988,
  ratio: '1:12',
  grades: 'Kindergarten to Grade 12',
  campusSize: '36 Acres',
  address: {
    street: '120 Discovery Boulevard',
    city: 'Academic Valley',
    state: 'Demonstration District',
    postalCode: '110001',
    country: 'India',
    note: 'Fictional demonstration address for portfolio showcasing',
  },
  contact: {
    generalEmail: 'inquiries@h12school-demo.org',
    admissionsEmail: 'admissions@h12school-demo.org',
    phone: '+91 (011) 5550-1288',
    officeHours: 'Monday through Friday, 8:00 AM – 4:30 PM IST',
  },
  socials: [
    { platform: 'LinkedIn', handle: '@h12school-demo', url: 'https://linkedin.com' },
    { platform: 'YouTube', handle: '@h12learning-archive', url: 'https://youtube.com' },
    { platform: 'Instagram', handle: '@h12campuslife', url: 'https://instagram.com' },
  ],
};

export const institutionalPillars = [
  {
    number: '01',
    title: 'Intellectual Independence',
    titleHi: 'बौद्धिक स्वायत्तता',
    description:
      'Students learn through direct scientific experimentation, primary text analysis, and constructive debate rather than passive memorization.',
    descriptionHi:
      'छात्र रटने के बजाय प्रत्यक्ष वैज्ञानिक प्रयोगों, मूल पाठ्य विश्लेषण और रचनात्मक संवाद के माध्यम से सीखते हैं।',
  },
  {
    number: '02',
    title: 'Character & Stewardship',
    titleHi: 'चरित्र व उत्तरदायित्व',
    description:
      'Academic achievement paired with personal responsibility, environmental care, and respectful engagement with diverse viewpoints.',
    descriptionHi:
      'व्यक्तिगत उत्तरदायित्व, पर्यावरण संरक्षण और विविध दृष्टिकोणों के सम्मान के साथ शैक्षणिक उत्कृष्टता।',
  },
  {
    number: '03',
    title: 'Integrated Arts & STEM',
    titleHi: 'एकीकृत कला व विज्ञान',
    description:
      'Rigorous mathematics and physics taught alongside fine arts, musical theory, and architectural design to cultivate balanced thinkers.',
    descriptionHi:
      'संतुलित सोच विकसित करने के लिए ललित कला, संगीत सिद्धांत और डिजाइन के साथ गहन गणित और विज्ञान की शिक्षा।',
  },
];
