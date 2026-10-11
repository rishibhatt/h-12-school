import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { newsArticles } from '@/content/news';
import { Container } from '@/components/atoms/Container';
import { Badge } from '@/components/atoms/Badge';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { NoticeCard } from '@/components/molecules/NoticeCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Metadata } from 'next';

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: 'Notice Not Found' };

  return {
    title: `${article.title} | H-12 School News`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = newsArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="space-y-0">
      <JsonLd
        type="Article"
        data={{
          headline: article.title,
          datePublished: article.date,
          description: article.summary,
        }}
      />

      {/* Header */}
      <section className="bg-[#F3ECE2] border-b border-[#E2DAD0] py-12 sm:py-16">
        <Container size="md">
          <Breadcrumbs
            items={[
              { label: 'News', href: '/news' },
              { label: article.title },
            ]}
          />
          <div className="mt-4 space-y-4">
            <Badge variant={article.category === 'Admissions' ? 'gold' : 'navy'}>
              {article.category}
            </Badge>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#0B1B2B] leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#526071] pt-2 border-t border-[#E2DAD0]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>{article.date}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#A8B3C0]" />
                <span>{article.author}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A8B3C0]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <section className="section-rhythm bg-[#FAF7F2] border-b border-[#E2DAD0]">
        <Container size="md">
          {article.image && (
            <div className="relative aspect-[16/9] mb-10 overflow-hidden border border-[#0B1B2B] shadow-sm bg-[#E2DAD0]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}

          <div className="prose prose-stone max-w-none space-y-6 text-sm sm:text-base text-[#1A2430] leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-[#0B1B2B] border-l-2 border-[#C89B3C] pl-4 italic">
              {article.summary}
            </p>
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-10 border-t border-[#E2DAD0] mt-12 flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-[#0B1B2B] hover:text-[#C89B3C]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Announcements</span>
            </Link>
            <Link
              href="/admissions"
              className="text-[#C89B3C] hover:text-[#0B1B2B]"
            >
              Admissions Portal
            </Link>
          </div>
        </Container>
      </section>

      {/* Related News Section */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F3ECE2]/50">
          <Container size="lg">
            <div className="mb-8">
              <h3 className="font-serif-display text-2xl font-normal text-[#0B1B2B]">
                Related Dispatches & Notices
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <NoticeCard key={rel.slug} article={rel} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
