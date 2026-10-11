import { AcademicStageId } from './content';

export interface InquiryFormData {
  parentName: string;
  email: string;
  phone: string;
  stage: AcademicStageId | '';
  entryYear: string;
  studentName?: string;
  message?: string;
}

export interface InquiryFormErrors {
  parentName?: string;
  email?: string;
  phone?: string;
  stage?: string;
  entryYear?: string;
  message?: string;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface SubmissionResponse {
  success: boolean;
  referenceNumber?: string;
  message: string;
}
