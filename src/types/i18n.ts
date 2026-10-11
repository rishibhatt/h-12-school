export type Locale = 'en' | 'hi';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    academics: string;
    primary: string;
    middle: string;
    senior: string;
    admissions: string;
    campusLife: string;
    gallery: string;
    news: string;
    events: string;
    contact: string;
    faculty: string;
    roadmap: string;
    inquireNow: string;
    menu: string;
    close: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ratioLabel: string;
    campusLabel: string;
    stageLabel: string;
  };
  admissions: {
    title: string;
    subtitle: string;
    howItWorks: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    formTitle: string;
    formSubtitle: string;
    parentName: string;
    email: string;
    phone: string;
    selectStage: string;
    entryYear: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    submitAnother: string;
  };
  common: {
    fictionalNotice: string;
    allRightsReserved: string;
    readMore: string;
    backToHome: string;
    privacyPolicy: string;
    contactOffice: string;
    hours: string;
    demoNote: string;
  };
  faculty: {
    title: string;
    subtitle: string;
    allDepartments: string;
    experienceYears: string;
    degrees: string;
    almaMater: string;
    philosophyTitle: string;
    ctaSchedule: string;
  };
  roadmap: {
    title: string;
    subtitle: string;
    phaseLabel: string;
    statusInProgress: string;
    statusApproved: string;
    statusPlanned: string;
    statusVision: string;
    deliverablesTitle: string;
    strategicGoals: string;
  };
}
