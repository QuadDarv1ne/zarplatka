'use client';

import { useRef, useEffect, useState } from 'react';
import { topProfessions, topIndustries } from '@/lib/data/salaries';
import { formatSalary } from './utils';

export function ProfessionsSection({ sphere = 'Все сферы' }: { sphere?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const professions = sphere === 'Все сферы'
    ? topProfessions
    : topProfessions.filter((p) => p.industry === sphere);
  const visibleProfessions = showAll ? professions : professions.slice(0, 8);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Рынок труда</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Зарплаты по профессиям и отраслям</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        Профессия показывает доход конкретного специалиста, отрасль — общий уровень оплаты в сфере деятельности.
        Эти срезы лучше использовать вместе.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`rounded-xl border bg-card p-5 sm:p-6 shadow-sm transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Специальности</span>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">453+</span>
          </div>
          <h3 className="font-semibold mb-4">Высокооплачиваемые профессии</h3>
          <ol className="space-y-0.5">
            {visibleProfessions.map((prof) => (
              <li key={prof.name} className="flex items-center justify-between gap-2 py-2 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="min-w-0">
                  <a href="#" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block">
                    {prof.name}
                  </a>
                  <span className="text-xs text-muted-foreground">{prof.industry}</span>
                </div>
                <strong className="text-sm font-semibold whitespace-nowrap tabular-nums">{formatSalary(prof.salary)}</strong>
              </li>
            ))}
          </ol>
          {professions.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              По выбранной сфере данные скоро появятся.
            </p>
          )}
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mt-3 w-full text-center text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors py-1"
            aria-expanded={showAll}
          >
            {showAll ? 'Свернуть' : 'Показать ещё'}
          </button>
        </div>

        <div className={`rounded-xl border bg-card p-5 sm:p-6 shadow-sm transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          <h3 className="font-semibold mb-4">Отрасли с высокой зарплатой</h3>
          <ol className="space-y-0.5">
            {topIndustries.map((ind) => (
              <li key={ind.name} className="flex items-center justify-between gap-2 py-2 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="min-w-0">
                  <a href="#" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block">
                    {ind.name}
                  </a>
                  <span className="text-xs text-muted-foreground">{ind.professionCount} профессий</span>
                </div>
                <strong className="text-sm font-semibold whitespace-nowrap tabular-nums">{formatSalary(ind.avgSalary)}</strong>
              </li>
            ))}
          </ol>
          <button className="mt-3 w-full text-center text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors py-1" aria-expanded={false}>
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
}
