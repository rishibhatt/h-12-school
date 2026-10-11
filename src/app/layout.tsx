import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/i18n/context';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { GsapScrollProgress } from '@/components/motion/GsapScrollProgress';
import { PortfolioFloater } from '@/components/organisms/PortfolioFloater';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | H-12 School',
    default: 'H-12 School | Rigorous Academic Discovery & Student Character',
  },
  description:
    'An independent K–12 preparatory learning institution committed to intellectual inquiry, scientific exploration, and humanistic development.',
  metadataBase: new URL('https://h12school-demo.org'),
  openGraph: {
    title: 'H-12 School of Learning & Discovery',
    description:
      'Rigorous academic discovery, scientific laboratories, and humanistic student character from early childhood to university entrance.',
    url: 'https://h12school-demo.org',
    siteName: 'H-12 School',
    images: [
      {
        url: '/images/hero/campus-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'H-12 School Campus Quad',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1A2430]">
        <LocaleProvider>
          <GsapScrollProgress />
          <JsonLd type="School" />
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <PortfolioFloater />
        </LocaleProvider>
      </body>
    </html>
  );
}
