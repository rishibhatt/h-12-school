import React from 'react';
import Link from 'next/link';
import { EventItem as EventType } from '@/types/content';
import { Badge } from '@/components/atoms/Badge';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventItemProps {
  event: EventType;
  isHindi?: boolean;
}

export function EventItem({ event, isHindi = false }: EventItemProps) {
  const title = isHindi ? event.titleHi : event.title;
  const description = isHindi ? event.descriptionHi : event.description;
  const location = isHindi ? event.locationHi : event.location;
  const category = isHindi ? event.categoryHi : event.category;
  const audience = isHindi ? event.audienceHi : event.audience;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-6 bg-[#FAF7F2] border border-[#E2DAD0] hover:border-[#0B1B2B] transition-colors">
      <div className="space-y-2 flex-grow max-w-2xl">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <Badge variant={event.category === 'Open Day' ? 'gold' : 'subtle'}>
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-[#2E384D]">
            <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span className="font-semibold text-[#0B1B2B]">{event.date}</span>
          </span>
          <span className="text-[#2E384D]">· {event.time}</span>
        </div>

        <h3 className="font-serif-display text-xl font-normal text-[#0B1B2B]">
          {title}
        </h3>

        <p className="text-xs text-[#2E384D] leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#2E384D] pt-1">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#2E384D]" />
            <span>{location}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3 h-3 text-[#2E384D]" />
            <span>{audience}</span>
          </span>
        </div>
      </div>

      <div className="shrink-0 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-[#E2DAD0]">
        <Link
          href="/admissions"
          className="inline-block text-center w-full md:w-auto text-xs px-4 py-2 border border-[#0B1B2B] text-[#0B1B2B] hover:bg-[#0B1B2B] hover:text-[#FAF7F2] font-semibold tracking-wider uppercase transition-colors"
        >
          {event.category === 'Open Day'
            ? (isHindi ? 'भ्रमण हेतु पंजीकरण' : 'Register to Attend')
            : (isHindi ? 'विवरण देखें' : 'View Details')}
        </Link>
      </div>
    </div>
  );
}
