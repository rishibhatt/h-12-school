import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AcademicStage } from '@/types/content';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/atoms/Badge';

interface StageCardProps {
  stage: AcademicStage;
  index: number;
  isHindi?: boolean;
}

export function StageCard({ stage, index, isHindi = false }: StageCardProps) {
  const stageNum = `0${index + 1}`;
  const name = isHindi ? stage.nameHi : stage.name;
  const grades = isHindi ? stage.gradesHi : stage.grades;
  const ages = isHindi ? stage.agesHi : stage.ages;
  const tagline = isHindi ? stage.taglineHi : stage.tagline;
  const overview = isHindi ? stage.curriculumOverviewHi : stage.curriculumOverview;

  return (
    <article className="group flex flex-col bg-[#FAF7F2] border border-[#E2DAD0] hover:border-[#0B1B2B] transition-all duration-300">
      {/* Visual Cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E4DDD2]">
        <Image
          src={stage.image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="navy">{grades}</Badge>
          <Badge variant="subtle">{ages}</Badge>
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#FAF7F2]/90 backdrop-blur-xs flex items-center justify-center font-mono text-xs font-bold text-[#0B1B2B] border border-[#E2DAD0]">
          {stageNum}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif-display text-2xl font-normal text-[#0B1B2B] mb-2">
            {name}
          </h3>
          <p className="text-xs font-medium text-[#C89B3C] uppercase tracking-wider mb-4">
            {tagline}
          </p>

          <ul className="space-y-2 mb-6 border-t border-[#E2DAD0] pt-4 text-xs text-[#2E384D]">
            {overview.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#C89B3C] font-bold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/academics/${stage.id}`}
          className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0B1B2B] group-hover:text-[#C89B3C] border-t border-[#E2DAD0] pt-4 transition-colors"
        >
          <span>{isHindi ? 'विस्तृत विवरण देखें' : 'Explore Academic Details'}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
