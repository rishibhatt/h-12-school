# Image Replacement Guide & Asset Specifications
## H-12 School Demonstration & Commercial Starter

This guide details how to replace the demonstration photography with verified, high-resolution client imagery for a real school deployment.

---

### 1. Asset Directory Structure

All visual media assets reside under `public/images/`, categorized by institutional context:

```
public/images/
├── hero/
│   └── campus-hero.jpg             # Primary Homepage Hero composition
├── academics/
│   ├── science-lab.jpg             # Senior School laboratory & inquiry
│   └── primary-discovery.jpg       # Primary School collaborative learning
├── campus/
│   ├── library-hall.jpg            # Central reading hall & academic resources
│   ├── arts-studio.jpg             # Visual & performing arts studios
│   └── athletics-track.jpg         # Outdoor sporting & athletic pavilion
└── gallery/
    ├── gallery-1.jpg               # Campus Architecture & Grounds
    ├── gallery-2.jpg               # Science & Natural Inquiry
    ├── gallery-3.jpg               # Visual Arts & Studio Work
    ├── gallery-4.jpg               # Athletics & Physical Development
    ├── gallery-5.jpg               # Reading & Collaborative Learning
    └── gallery-6.jpg               # Music & Performance
```

---

### 2. Dimension & Optimization Standards

To maintain Lighthouse 95+ performance and prevent Cumulative Layout Shift (CLS):

| Asset Role | Ideal Dimensions | Aspect Ratio | Max File Size | Target Format | Content Guidance |
|:---|:---|:---|:---|:---|:---|
| **Hero Landmark** | 2400 × 1400 px | 12:7 or 16:9 | < 300 KB | WebP / AVIF (JPEG fallback) | Architectural facade or student engagement in soft morning light; avoid crowded wide-angles |
| **Academic Highlights** | 1600 × 1000 px | 8:5 or 16:10 | < 200 KB | WebP / JPEG | Natural classroom interaction; avoid staged thumbs-up poses |
| **Campus Facilities** | 1600 × 1060 px | 3:2 | < 180 KB | WebP / JPEG | Well-lit physical facilities showcasing clean, organized learning spaces |
| **Gallery Grid** | 1200 × 800 px | 3:2 or 4:3 | < 150 KB | WebP / JPEG | Diverse balance of academic, athletic, and creative student activities |
| **School Crest / Logo** | Vector (SVG) | Scalable | < 25 KB | SVG | Monogram and institutional wordmark vector paths |

---

### 3. Step-by-Step Replacement Workflow

#### Step 1: Prepare and Optimize Client Photography
1. Obtain official school imagery with signed parent/guardian photography consent forms.
2. Crop images to the specified aspect ratios above to avoid distortion.
3. Compress images using tools such as `squoosh.app` or CLI `sharp` at 82–85% WebP quality.

#### Step 2: Overwrite Public Files or Add New Assets
To maintain existing bindings without code edits, overwrite the corresponding files in `public/images/`:
```bash
# Example: replace hero asset
cp ~/Downloads/client-official-hero.webp public/images/hero/campus-hero.jpg
```

#### Step 3: Update Typed Content Models
If introducing new asset filenames or additional gallery photographs, update the TypeScript definitions in:
- **`src/content/gallery.ts`**:
  ```typescript
  {
    id: 'gallery-7',
    title: 'New Innovation Lab',
    titleHi: 'नया नवाचार प्रयोगशाला',
    category: 'Academics',
    src: '/images/gallery/gallery-7.webp',
    width: 1200,
    height: 800,
    alt: 'Students programming robotics in the newly equipped innovation center',
    altHi: 'नवाचार केंद्र में रोबोटिक्स प्रोग्रामिंग करते छात्र',
  }
  ```
- **`src/content/academics.ts`**: Update the `heroImage` path for each academic division.

#### Step 4: Validate Next.js Image Optimization
Run a local production build to confirm that all images render and optimize cleanly:
```bash
npm run build
npm run start
```
Check the browser Network tab to verify that `next/image` delivers AVIF/WebP variations matching the client viewport.

---

### 4. Legal & Child Protection Compliance (Mandatory for Real Deployments)

When deploying for an actual school, ensure the client adheres to strict student privacy standards:
1. **Parental Consent:** Never publish recognizable student faces without written photo permission on file.
2. **Metadata Stripping:** Ensure EXIF GPS location tags and camera serial numbers are completely stripped before uploading to `public/`.
3. **No Identifiable Badges:** Check that student nametags, ID badges, or home addresses are blurred or excluded.
