'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      size="icon"
      aria-label="Наверх"
      className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <ArrowUp className={cn('h-4 w-4 transition-transform duration-300', hovered && '-translate-y-0.5')} />
    </Button>
  );
}
