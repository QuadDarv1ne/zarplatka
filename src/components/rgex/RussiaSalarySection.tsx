'use client';

import { topRegions, topCities, russiaSalaryMeta } from '@/lib/data/salaries';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { formatSalary } from './utils';

export function RussiaSalarySection() {
  return (
    <section className="space-y-6">
      <div>
        <Badge variant="secondary" className="text-xs uppercase tracking-wider font-semibold">
          Россия · {russiaSalaryMeta.year}
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3">Средняя зарплата в России</h2>
        <div className="mt-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-100 dark:border-emerald-900/30 p-5">
          <p className="text-sm text-muted-foreground">Средняя номинальная начисленная зарплата</p>
          <div className="flex items-baseline gap-2 mt-1">
            <strong className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              <AnimatedCounter value={russiaSalaryMeta.average} suffix=" \u20BD" />
            </strong>
            <span className="text-sm text-muted-foreground">{russiaSalaryMeta.period}</span>
          </div>
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-emerald-500" />+8.5% к прошлому году</span>
            <span>143,4 млн человек</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          Расчётный ориентир для сопоставления территорий. Доступны медиана, динамика по годам, типы компаний и сферы деятельности.
        </p>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-colors mt-1">
          Подробная статистика по России <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RegionsCard />
        <CitiesCard />
      </div>
    </section>
  );
}

function RegionsCard() {
  return (
    <div className="rounded-xl border bg-card p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Регионы с высокой зарплатой</h3>
        <a href="#" className="text-xs font-medium text-emerald-600 dark:text-emerald-400 transition-colors">
          Весь рейтинг
        </a>
      </div>
      <ol className="space-y-1">
        {topRegions.slice(0, 5).map((region) => (
          <li key={region.name} className="flex items-center justify-between gap-2 py-2 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs font-bold text-muted-foreground w-4 text-right tabular-nums">{region.position}</span>
              <a href="#" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate">
                {region.name}
              </a>
            </div>
            <strong className="text-sm font-semibold whitespace-nowrap tabular-nums">{formatSalary(region.salary)}</strong>
          </li>
        ))}
      </ol>
      <button className="mt-3 w-full text-center text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors py-1">
        Показать ещё
      </button>
    </div>
  );
}

function CitiesCard() {
  return (
    <div className="rounded-xl border bg-card p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Города с высокой зарплатой</h3>
        <a href="#" className="text-xs font-medium text-emerald-600 dark:text-emerald-400 transition-colors">
          Весь рейтинг
        </a>
      </div>
      <ol className="space-y-1">
        {topCities.slice(0, 5).map((city, i) => (
          <li key={city.name} className="flex items-center justify-between gap-2 py-2 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs font-bold text-muted-foreground w-4 text-right tabular-nums">{i + 1}</span>
              <a href="#" className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate">
                {city.name}
              </a>
            </div>
            <strong className="text-sm font-semibold whitespace-nowrap tabular-nums">{formatSalary(city.salary)}</strong>
          </li>
        ))}
      </ol>
      <button className="mt-3 w-full text-center text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors py-1">
        Показать ещё
      </button>
    </div>
  );
}