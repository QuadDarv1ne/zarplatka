'use client';

import { useState } from 'react';
import { faqItems } from '@/lib/data/salaries';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Частые вопросы о зарплатах</h2>
      <div className="space-y-2">
        {faqItems.map((item, i) => (
          <div key={i} className={cn(
            'rounded-xl border transition-all duration-200',
            openIndex === i
              ? 'shadow-sm bg-card'
              : 'bg-card'
          )}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-3 p-4 text-left"
            >
              <span className="text-sm font-medium">{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                  openIndex === i && 'rotate-180 text-emerald-600 dark:text-emerald-400'
                )}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 -mt-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}