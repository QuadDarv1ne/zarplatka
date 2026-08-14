'client';

import { topProfessions, topIndustries } from '@/lib/data/salaries';
import { formatSalary } from './utils';
import { ArrowRight } from 'lucide-react';

export function ProfessionsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Рынок труда</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Зарплаты по профессиям и отраслям</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        Профессия показывает доход конкретного специалиста, отрасль — общий уровень оплаты в сфере деятельности.
        Эти срезы лучше использовать вместе.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Специальности</span>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">453+</span>
          </div>
          <h3 className="font-semibold mb-4">Высокооплачиваемые профессии</h3>
          <ol className="space-y-0.5">
            {topProfessions.slice(0, 8).map((prof) => (
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
          <button className="mt-3 w-full text-center text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors py-1">
            Показать ещё
          </button>
        </div>

        <div className="rounded-xl border bg-card p-5 sm:p-6 shadow-sm">
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
          <button className="mt-3 w-full text-center text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors py-1">
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
}
