'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function GsapCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className = '',
}: GsapCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.textContent = `${prefix}${end}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [end, prefix, suffix, duration]);

  return (
    <span ref={spanRef} className={className}>
      {prefix}
      {end}
      {suffix}
    </span>
  );
}
