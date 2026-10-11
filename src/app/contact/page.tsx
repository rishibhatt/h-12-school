'use client';

import React, { useState } from 'react';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { siteConfig } from '@/content/site-config';
import { useTranslation } from '@/i18n/context';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { isHindi } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const departments = [
    {
      title: 'Office of Admissions',
      titleHi: 'प्रवेश कार्यालय',
      email: siteConfig.contact.admissionsEmail,
      phone: '+91 (011) 5550-1288 Ext. 1',
      hours: 'Mon – Fri: 8:00 AM – 4:30 PM',
      hoursHi: 'सोम – शुक्र: 8:00 – 4:30',
    },
    {
      title: 'Head of School Secretariat',
      titleHi: 'प्रधानाचार्य सचिवालय',
      email: 'headmaster@h12school-demo.org',
      phone: '+91 (011) 5550-1288 Ext. 2',
      hours: 'By Appointment Only',
      hoursHi: 'केवल पूर्व निर्धारित समय पर',
    },
    {
      title: 'Campus Transport & Facilities Desk',
      titleHi: 'परिवहन व परिसर डेस्क',
      email: 'operations@h12school-demo.org',
      phone: '+91 (011) 5550-1288 Ext. 4',
      hours: 'Mon – Fri: 7:30 AM – 5:00 PM',
      hoursHi: 'सोम – शुक्र: 7:30 – 5:00',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: isHindi ? 'संपर्क' : 'Contact & Directions' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <Badge variant="navy">
              {isHindi ? 'प्रशासनिक संपर्क' : 'Administrative Directory'}
            </Badge>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-[#0B1B2B]">
              {isHindi ? 'संपर्क एवं दिशा-निर्देश' : 'Get in Touch with Our Offices'}
            </h1>
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed">
              {isHindi
                ? 'प्रवेश पूछताछ, परिसर भ्रमण और सामान्य प्रशासनिक सहायता के लिए हमारे कार्यालयों से संपर्क करें।'
                : 'Direct channels for prospective admissions, student records, transport logistics, and campus discovery walk scheduling.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Directory & General Form */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Department Directory (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#0B1B2B] mb-2">
                  {isHindi ? 'विभागीय दूरभाष निर्देशिका' : 'Key Department Contacts'}
                </h2>
                <p className="text-xs text-[#526071]">
                  {isHindi
                    ? 'त्वरित सहायता हेतु संबंधित विभाग से संपर्क करें।'
                    : 'Reach the appropriate team for admissions, transcripts, or campus tours.'}
                </p>
              </div>

              <div className="space-y-4">
                {departments.map((dept, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white border border-[#E2DAD0] space-y-2 text-xs"
                  >
                    <h3 className="font-serif-display text-lg font-normal text-[#0B1B2B]">
                      {isHindi ? dept.titleHi : dept.title}
                    </h3>
                    <div className="space-y-1 text-[#526071]">
                      <p className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#C89B3C]" />
                        <span>{dept.email}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
                        <span>{dept.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#A8B3C0]" />
                        <span>{isHindi ? dept.hoursHi : dept.hours}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Campus Address & Fictional Disclosure */}
              <div className="p-6 bg-[#F3ECE2] border border-[#E2DAD0] space-y-3 text-xs text-[#526071]">
                <div className="flex items-center gap-2 text-[#0B1B2B] font-semibold">
                  <MapPin className="w-4 h-4 text-[#C89B3C]" />
                  <span>{isHindi ? 'परिसर का पता (काल्पनिक)' : 'Campus Location (Demonstration)'}</span>
                </div>
                <p className="leading-relaxed">
                  {siteConfig.address.street}, {siteConfig.address.city},{' '}
                  {siteConfig.address.state} — {siteConfig.address.postalCode}
                </p>
                <p className="text-[11px] text-[#526071] italic border-t border-[#E2DAD0] pt-2">
                  {siteConfig.address.note}
                </p>
              </div>
            </div>

            {/* Right: Interactive General Contact Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 bg-[#FAF7F2] border border-[#E2DAD0] space-y-6">
                <div>
                  <h3 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
                    {isHindi ? 'सामान्य संदेश प्रपत्र' : 'Send General Inquiries'}
                  </h3>
                  <p className="text-xs text-[#526071] mt-1">
                    {isHindi
                      ? 'किसी भी सामान्य प्रश्न हेतु संदेश भेजें।'
                      : 'For general questions not related to student admissions intake.'}
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 bg-[#F7EEDB] border border-[#C89B3C] text-[#0B1B2B] space-y-3">
                    <div className="flex items-center gap-2 text-[#2D5547] font-semibold text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#2D5547]" />
                      <span>{isHindi ? 'संदेश प्राप्त हुआ' : 'Message Dispatched (Demo)'}</span>
                    </div>
                    <p className="text-xs text-[#526071] leading-relaxed">
                      {isHindi
                        ? 'यह एक पोर्टफोलियो प्रदर्शन है। आपका संदेश सिम्युलेटेड रूप से दर्ज किया गया है।'
                        : 'Demonstration simulation: In production, this delivers directly to the administrative inbox.'}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      {isHindi ? 'नया संदेश' : 'Send Another Message'}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
                        {isHindi ? 'पूरा नाम' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
                        {isHindi ? 'ईमेल पता' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
                        {isHindi ? 'विषय' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] outline-none"
                        placeholder="e.g. Schedule Campus Walk / Transcripts Request"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
                        {isHindi ? 'संदेश' : 'Message'} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-[#E2DAD0] focus:border-[#C89B3C] outline-none resize-y"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                      {isHindi ? 'संदेश भेजें' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
