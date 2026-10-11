'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  scrollTrigger?: boolean;
}

export function GsapReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
  scrollTrigger = true,
}: GsapRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      let initialY = 0;
      let initialX = 0;

      if (direction === 'up') initialY = 28;
      if (direction === 'down') initialY = -28;
      if (direction === 'left') initialX = 28;
      if (direction === 'right') initialX = -28;

      const animProps: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: 'power2.out',
      };

      if (scrollTrigger) {
        animProps.scrollTrigger = {
          trigger: el,
          start: 'top 88%',
          once: true,
        };
      }

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: initialY,
          x: initialX,
        },
        animProps
      );
    }, el);

    return () => ctx.revert();
  }, [delay, direction, duration, scrollTrigger]);

  return (
    <div ref={containerRef} className={className} style={{ opacity: 1 }}>
      {children}
    </div>
  );
}
