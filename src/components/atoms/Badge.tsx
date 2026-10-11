import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'botanical' | 'subtle';
}

export function Badge({ children, className, variant = 'subtle', ...props }: BadgeProps) {
  const variantStyles = {
    gold: 'bg-[#F7EEDB] text-[#7A5B1B] border-[#C89B3C]/30',
    navy: 'bg-[#0B1B2B] text-[#FAF7F2] border-[#0B1B2B]',
    botanical: 'bg-[#EBF2EE] text-[#2D5547] border-[#2D5547]/30',
    subtle: 'bg-[#F3ECE2] text-[#526071] border-[#E2DAD0]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase border rounded-none select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
