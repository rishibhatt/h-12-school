import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  collapsed?: boolean;
}

export function Logo({ className = '', variant = 'dark', collapsed = false }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-[#FAF7F2]' : 'text-[#0B1B2B]';
  const subtextColor = isLight ? 'text-[#C89B3C]' : 'text-[#526071]';
  const emblemBorder = isLight ? '#C89B3C' : '#0B1B2B';
  const emblemFill = isLight ? '#112538' : '#FAF7F2';
  const letterColor = isLight ? '#FAF7F2' : '#0B1B2B';
  const accentGold = '#C89B3C';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-sm transition-opacity ${className}`}
      aria-label="H-12 School Home"
    >
      {/* Geometric H-12 Architectural Monogram */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer Hairline Octagon / Crest */}
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          rx="4"
          fill={emblemFill}
          stroke={emblemBorder}
          strokeWidth="1.5"
        />
        {/* Inner Accent Inset Border */}
        <rect
          x="5"
          y="5"
          width="34"
          height="34"
          rx="2"
          stroke={accentGold}
          strokeWidth="0.75"
          strokeDasharray="2 2"
        />
        {/* Letter H (Geometric architectural pillars) */}
        <path
          d="M12 13V31M12 22H21M21 13V31"
          stroke={letterColor}
          strokeWidth="2.2"
          strokeLinecap="square"
        />
        {/* Number 12 Badge */}
        <path
          d="M26 18L28.5 15.5V29M26 29H31"
          stroke={accentGold}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.5 19.5C31.5 17.5 34 17 35 18.5C36 20 31.5 24 31.5 26.5H36.5"
          stroke={accentGold}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {!collapsed && (
        <div className="flex flex-col text-left">
          <span className={`font-serif-display text-lg font-bold tracking-tight leading-tight ${textColor}`}>
            H-12 SCHOOL
          </span>
          <span className={`text-[10px] tracking-wider uppercase font-medium ${subtextColor}`}>
            Learning & Discovery
          </span>
        </div>
      )}
    </Link>
  );
}
