import { InquiryFormData, SubmissionResponse } from '@/types/forms';

export interface InquiryService {
  submitInquiry(data: InquiryFormData): Promise<SubmissionResponse>;
}

class DemoInquiryService implements InquiryService {
  async submitInquiry(data: InquiryFormData): Promise<SubmissionResponse> {
    // Simulate real network request delay
    await new Promise((resolve) => setTimeout(resolve, 850));

    // Generate deterministic demonstration reference code
    const stagePrefix = data.stage ? data.stage.substring(0, 3).toUpperCase() : 'GEN';
    const timestamp = Date.now().toString().slice(-4);
    const referenceNumber = `H12-${stagePrefix}-${timestamp}`;

    return {
      success: true,
      referenceNumber,
      message:
        'Inquiry processed successfully in demonstration mode. In a live production deployment, this triggers instant webhook notifications to your CRM (e.g. HubSpot, Salesforce Education, or email digest).',
    };
  }
}

export const inquiryService: InquiryService = new DemoInquiryService();
