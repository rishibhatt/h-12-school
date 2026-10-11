import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumbs" className={`py-3 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#526071]">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="hover:text-[#0B1B2B] flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-[#C89B3C]"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#A8B3C0]" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#0B1B2B] focus-visible:ring-1 focus-visible:ring-[#C89B3C]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#0B1B2B] font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
