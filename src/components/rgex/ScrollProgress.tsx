'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
      setVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-14 left-0 right-0 z-50 h-0.5 bg-transparent" aria-hidden="true">
      <div
        className={cn(
          'h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-150 ease-out',
          visible ? 'opacity-100' : 'opacity-0'
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
