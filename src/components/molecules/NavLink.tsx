'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'light' | 'dark';
}

export function NavLink({
  href,
  children,
  className,
  onClick,
  variant = 'dark',
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  const isLight = variant === 'light';

  const baseStyles =
    'relative py-1 text-sm tracking-wide font-medium transition-colors select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-xs';

  const colorStyles = isLight
    ? isActive
      ? 'text-[#C89B3C] font-semibold'
      : 'text-[#FAF7F2] hover:text-[#C89B3C]'
    : isActive
    ? 'text-[#0B1B2B] font-bold'
    : 'text-[#1E293B] hover:text-[#0B1B2B]';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(baseStyles, colorStyles, className)}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
      {isActive && (
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C89B3C]"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
