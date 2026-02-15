'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/tracking';

export default function ScrollTracker() {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of thresholds) {
        if (percent >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
