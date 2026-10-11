import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  serif?: boolean;
}

export function Heading({
  children,
  className,
  level = 2,
  serif = true,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as React.ElementType;

  const levelStyles = {
    1: 'text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]',
    2: 'text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15]',
    3: 'text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.25]',
    4: 'text-lg sm:text-xl font-semibold tracking-normal leading-[1.3]',
  };

  const fontClass = serif ? 'font-serif-display' : 'font-sans';

  return (
    <Tag className={cn(levelStyles[level], fontClass, 'text-[#0B1B2B]', className)} {...props}>
      {children}
    </Tag>
  );
}
