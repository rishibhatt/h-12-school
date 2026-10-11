import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsItem } from '@/types/content';
import { Badge } from '@/components/atoms/Badge';
import { ArrowRight, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface NoticeCardProps {
  article: NewsItem;
  isHindi?: boolean;
}

export function NoticeCard({ article, isHindi = false }: NoticeCardProps) {
  const title = isHindi ? article.titleHi : article.title;
  const summary = isHindi ? article.summaryHi : article.summary;
  const category = isHindi ? article.categoryHi : article.category;
  const dateFormatted = formatDate(article.date, isHindi ? 'hi' : 'en');

  return (
    <article className="group flex flex-col bg-[#FAF7F2] border border-[#E2DAD0] hover:border-[#0B1B2B] transition-colors p-6">
      {article.image && (
        <div className="relative aspect-[16/9] mb-5 overflow-hidden bg-[#E2DAD0]">
          <Image
            src={article.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-center justify-between gap-3 text-xs text-[#526071] mb-3">
        <Badge variant={article.category === 'Admissions' ? 'gold' : 'subtle'}>
          {category}
        </Badge>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#A8B3C0]" />
          <span>{dateFormatted}</span>
        </span>
      </div>

      <h3 className="font-serif-display text-xl font-normal text-[#0B1B2B] mb-2 group-hover:text-[#C89B3C] transition-colors leading-snug">
        <Link href={`/news/${article.slug}`}>{title}</Link>
      </h3>

      <p className="text-xs text-[#526071] leading-relaxed mb-5 flex-grow line-clamp-3">
        {summary}
      </p>

      <div className="pt-4 border-t border-[#E2DAD0] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0B1B2B]">
        <span>{article.readTime}</span>
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>{isHindi ? 'पूरी सूचना' : 'Read Notice'}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C89B3C]" />
        </Link>
      </div>
    </article>
  );
}
