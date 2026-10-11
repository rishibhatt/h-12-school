'use client';

import React, { useState } from 'react';
import { InquiryFormData, InquiryFormErrors, SubmissionStatus } from '@/types/forms';
import { validateInquiryForm } from '@/lib/validation';
import { inquiryService } from '@/services/inquiries';
import { Button } from '@/components/atoms/Button';
import { useTranslation } from '@/i18n/context';
import { CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface InquiryFormProps {
  initialStage?: '' | 'primary' | 'middle' | 'senior';
  className?: string;
}

export function InquiryForm({ initialStage = '', className = '' }: InquiryFormProps) {
  const { dictionary, isHindi } = useTranslation();
  const t = dictionary.admissions;

  const [formData, setFormData] = useState<InquiryFormData>({
    parentName: '',
    email: '',
    phone: '',
    stage: initialStage,
    entryYear: '2027–2028',
    message: '',
  });

  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [referenceCode, setReferenceCode] = useState<string>('');
  const [serverMessage, setServerMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    try {
      const response = await inquiryService.submitInquiry(formData);
      if (response.success) {
        setStatus('success');
        setReferenceCode(response.referenceNumber || 'H12-DEMO-001');
        setServerMessage(response.message);
      } else {
        setStatus('error');
        setServerMessage(response.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('An unexpected network error occurred.');
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      stage: '',
      entryYear: '2027–2028',
      message: '',
    });
    setErrors({});
    setStatus('idle');
    setReferenceCode('');
    setServerMessage('');
  };

  if (status === 'success') {
    return (
      <div className={`p-8 bg-[#FAF7F2] border border-[#C89B3C] text-[#0B1B2B] space-y-5 ${className}`}>
        <div className="flex items-center gap-3 text-[#2D5547]">
          <CheckCircle2 className="w-6 h-6 text-[#2D5547] shrink-0" />
          <h3 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
            {t.successTitle}
          </h3>
        </div>

        <div className="p-4 bg-[#F7EEDB] border border-[#C89B3C]/40 space-y-1">
          <p className="text-xs uppercase tracking-wider text-[#7A5B1B] font-semibold">
            {isHindi ? 'प्रदर्शन संदर्भ कोड' : 'Demonstration Reference Code'}
          </p>
          <p className="font-mono text-lg font-bold text-[#0B1B2B]">{referenceCode}</p>
        </div>

        <p className="text-sm text-[#526071] leading-relaxed">
          {t.successMessage}
        </p>

        <p className="text-xs text-[#526071]/80 italic border-t border-[#E2DAD0] pt-4">
          {serverMessage}
        </p>

        <div className="pt-2">
          <Button variant="outline" size="sm" onClick={handleReset}>
            {t.submitAnother}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-8 bg-[#FAF7F2] border border-[#E2DAD0] text-[#0B1B2B] space-y-5 shadow-xs ${className}`}
      aria-label="Admissions Inquiry Form"
    >
      <div className="border-b border-[#E2DAD0] pb-4">
        <h3 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
          {t.formTitle}
        </h3>
        <p className="text-xs text-[#526071] mt-1 leading-relaxed">
          {t.formSubtitle}
        </p>
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Parent Name */}
      <div className="space-y-1.5">
        <label htmlFor="parentName" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
          {t.parentName} <span className="text-red-700">*</span>
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          value={formData.parentName}
          onChange={handleChange}
          aria-invalid={!!errors.parentName}
          aria-describedby={errors.parentName ? 'parentName-error' : undefined}
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-[#0B1B2B] outline-none"
          placeholder="e.g. Dr. Eleanor Vance"
        />
        {errors.parentName && (
          <p id="parentName-error" className="text-xs text-red-700 mt-1">
            {errors.parentName}
          </p>
        )}
      </div>

      {/* Contact Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
            {t.email} <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-[#0B1B2B] outline-none"
            placeholder="parent@example.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-700 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
            {t.phone} <span className="text-red-700">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-[#0B1B2B] outline-none"
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-700 mt-1">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Academic Stage & Target Year */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="stage" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
            {t.selectStage} <span className="text-red-700">*</span>
          </label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            aria-invalid={!!errors.stage}
            aria-describedby={errors.stage ? 'stage-error' : undefined}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-[#0B1B2B] outline-none cursor-pointer"
          >
            <option value="">-- Choose Division --</option>
            <option value="primary">Primary (Kindergarten to Grade 5)</option>
            <option value="middle">Middle School (Grades 6 to 8)</option>
            <option value="senior">Senior School (Grades 9 to 12)</option>
          </select>
          {errors.stage && (
            <p id="stage-error" className="text-xs text-red-700 mt-1">
              {errors.stage}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="entryYear" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
            {t.entryYear} <span className="text-red-700">*</span>
          </label>
          <select
            id="entryYear"
            name="entryYear"
            value={formData.entryYear}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-[#0B1B2B] outline-none cursor-pointer"
          >
            <option value="2027–2028">2027–2028 Academic Year</option>
            <option value="2028–2029">2028–2029 Academic Year</option>
            <option value="Immediate Mid-Term">Immediate Mid-Term (Subject to Availability)</option>
          </select>
        </div>
      </div>

      {/* Questions or Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3.5 py-2 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-[#0B1B2B] outline-none resize-y"
          placeholder="Please share any specific academic interests, sports, or questions regarding campus discovery walks..."
        />
      </div>

      {/* Demo Privacy Guarantee */}
      <div className="p-3 bg-[#F3ECE2] border border-[#E2DAD0] text-[11px] text-[#526071] flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 text-[#2D5547] shrink-0 mt-0.5" />
        <span>
          {isHindi
            ? 'गोपनीयता सूचना: यह एक प्रदर्शन फॉर्म है। कोई भी संवेदनशील छात्र डेटा तीसरे पक्ष को प्रेषित नहीं किया जाता है।'
            : 'Privacy Assurance: This demonstration form processes mock inquiries safely. No student records are transmitted to third parties.'}
        </span>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={status === 'submitting'}
          className="w-full justify-center"
        >
          {status === 'submitting' ? t.submitting : t.submit}
        </Button>
      </div>
    </form>
  );
}
