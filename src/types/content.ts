export type AcademicStageId = 'primary' | 'middle' | 'senior';

export interface AcademicStage {
  id: AcademicStageId;
  name: string;
  nameHi: string;
  grades: string;
  gradesHi: string;
  ages: string;
  agesHi: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  curriculumOverview: string[];
  curriculumOverviewHi: string[];
  features: Array<{
    title: string;
    titleHi: string;
    detail: string;
    detailHi: string;
  }>;
  dailySchedule: Array<{
    time: string;
    activity: string;
    activityHi: string;
  }>;
  image: string;
  accent: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  titleHi: string;
  date: string;
  category: 'Admissions' | 'Academic' | 'Campus' | 'Notice';
  categoryHi: string;
  summary: string;
  summaryHi: string;
  content: string[];
  contentHi: string[];
  author: string;
  readTime: string;
  image?: string;
}

export interface EventItem {
  id: string;
  title: string;
  titleHi: string;
  date: string;
  time: string;
  location: string;
  locationHi: string;
  category: 'Open Day' | 'Academic' | 'Arts' | 'Athletics';
  categoryHi: string;
  description: string;
  descriptionHi: string;
  audience: string;
  audienceHi: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  titleHi: string;
  category: 'Campus' | 'Academics' | 'Arts' | 'Athletics';
  categoryHi: string;
  src: string;
  alt: string;
  altHi: string;
  caption: string;
  captionHi: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  category: 'Admissions' | 'Academics' | 'Campus Life' | 'General';
}

export interface SiteConfig {
  name: string;
  legalName: string;
  motto: string;
  mottoHi: string;
  descriptor: string;
  descriptorHi: string;
  established: number;
  ratio: string;
  grades: string;
  campusSize: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    note: string;
  };
  contact: {
    generalEmail: string;
    admissionsEmail: string;
    phone: string;
    officeHours: string;
  };
  socials: {
    platform: string;
    handle: string;
    url: string;
  }[];
}

export interface FacultyMember {
  id: string;
  name: string;
  nameHi: string;
  role: string;
  roleHi: string;
  department: 'Leadership' | 'STEM' | 'Humanities' | 'Arts & Sports';
  departmentHi: string;
  degrees: string;
  degreesHi: string;
  almaMater: string;
  experienceYears: number;
  bio: string;
  bioHi: string;
  quote: string;
  quoteHi: string;
  image?: string;
}

export interface RoadmapMilestone {
  id: string;
  year: string;
  quarter?: string;
  title: string;
  titleHi: string;
  phase: string;
  phaseHi: string;
  category: 'Academics' | 'Campus Infrastructure' | 'Sustainability' | 'Global Partnerships';
  status: 'In Progress' | 'Approved' | 'Planned' | 'Vision';
  summary: string;
  summaryHi: string;
  keyDeliverables: string[];
  keyDeliverablesHi: string[];
}
