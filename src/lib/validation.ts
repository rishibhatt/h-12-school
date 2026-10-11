import { InquiryFormData, InquiryFormErrors } from '@/types/forms';

export function validateInquiryForm(data: InquiryFormData): {
  isValid: boolean;
  errors: InquiryFormErrors;
} {
  const errors: InquiryFormErrors = {};

  if (!data.parentName || data.parentName.trim().length < 3) {
    errors.parentName = 'Please enter a valid full name (at least 3 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address for communications.';
  }

  const phoneClean = data.phone ? data.phone.replace(/[^0-9+]/g, '') : '';
  if (!phoneClean || phoneClean.length < 8) {
    errors.phone = 'Please provide a valid telephone number with area code.';
  }

  if (!data.stage) {
    errors.stage = 'Please select your child’s intended academic stage.';
  }

  if (!data.entryYear) {
    errors.entryYear = 'Please choose a target academic entry year.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
