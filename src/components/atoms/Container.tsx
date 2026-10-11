import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({ children, className, size = 'lg', ...props }: ContainerProps) {
  const maxSizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', maxSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
