'use client';

import { useState, useRef, useEffect } from 'react';
import { faqItems } from '@/lib/data/salaries';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Частые вопросы о зарплатах</h2>
      <div className="space-y-2" role="list" aria-label="Часто задаваемые вопросы">
        {faqItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            data-index={i}
            className={cn(
              'rounded-xl border transition-all duration-500',
              visibleItems.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              openIndex === i ? 'shadow-sm bg-card' : 'bg-card'
            )}
            role="listitem"
          >
            <button
              onClick={() => toggleItem(i)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="flex w-full items-center justify-between gap-3 p-4 text-left"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="text-sm font-medium">{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                  openIndex === i && 'rotate-180 text-emerald-600 dark:text-emerald-400'
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              className={cn(
                'overflow-hidden transition-all duration-300',
                openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
              role="region"
              aria-labelledby={`faq-question-${i}`}
            >
              <div className="px-4 pb-4 -mt-1">
                <p className="text-sm text-muted-foreground leading-relaxed" id={`faq-question-${i}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}