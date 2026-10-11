# Production Deployment & CRM Integration Guide
## H-12 School Website Starter

This guide covers deployment procedures, production environment variables, SEO production configuration, and connecting a live admissions CRM or email webhook.

---

### 1. Deployment Platforms

#### Option A: Vercel (Recommended for Next.js)
Because the site uses standard Next.js App Router static optimization, Vercel provides instant edge caching, automated SSL, and preview deployments.
1. Push repository to GitHub or GitLab.
2. Import project in Vercel.
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `.next` (default).

#### Option B: Standalone Node.js / Docker
For private institutional servers or cloud containers:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

---

### 2. Environment Variables

Create `.env.production` with institutional values:

```bash
# Canonical site URL for metadata, sitemaps, and Open Graph tags
NEXT_PUBLIC_SITE_URL=https://www.example-school.edu

# Admissions CRM or Webhook Endpoint (HubSpot, Salesforce, or custom backend)
INQUIRY_WEBHOOK_URL=https://api.example-school.edu/v1/admissions/inquiry

# Optional Webhook Bearer Token or API Key
INQUIRY_API_KEY=sk_live_school_admissions_secret

# Optional Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Environment flag (controls whether the demo disclosure badge appears)
NEXT_PUBLIC_IS_DEMO=false
```

---

### 3. Connecting a Real Admissions CRM

The inquiry service in `src/services/inquiries.ts` is architected as an abstract interface. To connect a live backend:

#### Current Interface (`src/services/inquiries.ts`):
```typescript
export interface InquiryService {
  submit(data: InquiryFormData): Promise<SubmissionResult>;
}
```

#### Production Implementation Example:
Replace the mock implementation in `src/services/inquiries.ts` with a fetch call to your CRM:

```typescript
export class ProductionInquiryService implements InquiryService {
  async submit(data: InquiryFormData): Promise<SubmissionResult> {
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Server returned an error status');
      }

      const result = await response.json();
      return {
        success: true,
        referenceCode: result.applicationNumber || `ADM-${Date.now().toString().slice(-6)}`,
        message: 'Your inquiry has been logged with the Admissions Office.',
      };
    } catch {
      return {
        success: false,
        error: 'Unable to deliver inquiry. Please call admissions directly at +91 11 2600 4812.',
      };
    }
  }
}

export const inquiryService: InquiryService = new ProductionInquiryService();
```

---

### 4. Production Launch Checklist

Before pointing DNS to a live school domain:
1. **Remove Demo Disclosure:** Set `NEXT_PUBLIC_IS_DEMO=false` or remove the footer demo notice banner in `src/components/organisms/Footer.tsx`.
2. **Update School Contact Information:** Verify phone numbers, physical address, and hours in `src/content/site-config.ts`.
3. **Configure Canonical Domain:** Set `baseUrl` in `src/app/sitemap.ts` and `src/app/robots.ts` to the verified school URL.
4. **Audit Privacy Policy:** Review `src/app/privacy/page.tsx` with the school's legal counsel to ensure compliance with regional data protection acts (such as DPDP Act in India or GDPR in Europe).
5. **Set Up Google Search Console:** Submit the generated sitemap (`https://school-domain.edu/sitemap.xml`) to verify indexing.
