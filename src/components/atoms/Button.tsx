import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 tracking-wider uppercase font-semibold gap-1.5',
    md: 'text-sm px-5 py-2.5 tracking-normal gap-2',
    lg: 'text-base px-7 py-3.5 tracking-normal gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#0B1B2B] text-[#FAF7F2] border border-[#0B1B2B] hover:bg-[#162F4A] hover:border-[#162F4A] shadow-sm',
    secondary:
      'bg-[#C89B3C] text-[#0B1B2B] border border-[#C89B3C] hover:bg-[#D5AB4F] hover:border-[#D5AB4F] font-semibold',
    outline:
      'bg-transparent text-[#0B1B2B] border border-[#0B1B2B] hover:bg-[#FAF7F2] hover:text-[#0B1B2B] hover:border-[#C89B3C]',
    ghost:
      'bg-transparent text-[#0B1B2B] border border-transparent hover:bg-[#F3ECE2] hover:text-[#0B1B2B]',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-disabled={disabled}>
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}
