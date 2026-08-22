'use client';

import { topCountries, worldSalaryMeta } from '@/lib/data/salaries';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { formatSalary } from './utils';
import { useInView } from '@/hooks/use-in-view';

interface WorldSalarySectionProps {
  location?: string;
  year?: string;
}

const CONTINENTS = ['Европа', 'Азия', 'Северная Америка', 'Южная Америка', 'Африка', 'Океания'];

export function WorldSalarySection({ location = 'Весь мир', year = '2026' }: WorldSalarySectionProps) {
  const { ref, isVisible } = useInView();

  const countries = location === 'Весь мир' || !CONTINENTS.includes(location)
    ? topCountries
    : topCountries.filter((c) => c.continent === location);

  return (
    <section id="data" ref={ref} className="grid gap-6 lg:grid-cols-2 lg:gap-10">
      <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <Badge variant="secondary" className="text-xs uppercase tracking-wider font-semibold">
          Международное сравнение
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Средние зарплаты в странах мира</h2>
        <div className="rounded-xl bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-100 dark:border-emerald-900/30 p-5">
          <p className="text-sm text-muted-foreground">Медиана по странам с доступными данными</p>
          <div className="flex items-baseline gap-2 mt-1">
            <strong className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              <AnimatedCounter value={worldSalaryMeta.median} suffix=" \u20BD" />
            </strong>
            <span className="text-sm text-muted-foreground">в месяц</span>
          </div>
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-emerald-500" />+4.2% за год</span>
            <span>{worldSalaryMeta.countriesCount} стран</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Единой «средней зарплаты в мире» не существует: страны публикуют данные в разных валютах, периодах и методологиях.
          Поэтому корректнее сравнивать государства в одной таблице и отдельно учитывать стоимость жизни.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border p-3 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
            <p className="text-xs font-semibold">Одна валюта</p>
            <p className="text-xs text-muted-foreground mt-1">Значения приводятся к выбранной валюте для сопоставления.</p>
          </div>
          <div className="rounded-lg border p-3 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
            <p className="text-xs font-semibold">Номинальный доход</p>
            <p className="text-xs text-muted-foreground mt-1">Высокая зарплата не всегда означает более высокую покупательную способность.</p>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
          aria-label="Рейтинг зарплат по странам мира"
        >
          Рейтинг зарплат по странам мира <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className={`rounded-xl border bg-card p-5 sm:p-6 shadow-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Страны с высокой средней зарплатой</h3>
          <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-0.5 rounded-full">{year}</span>
        </div>
        <ol className="space-y-1">
          {countries.map((country, i) => (
            <li
              key={country.slug}
              className="flex items-center justify-between gap-3 py-2 px-2 -mx-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-bold text-muted-foreground w-4 text-right tabular-nums">{i + 1}</span>
                <span className="text-lg leading-none" role="img" aria-label={country.name}>{country.flag}</span>
                <a href={`/${country.slug}/`} className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate">
                  {country.name}
                </a>
              </div>
              <strong className="text-sm font-semibold whitespace-nowrap tabular-nums">{formatSalary(country.salary)}</strong>
            </li>
          ))}
        </ol>
        {countries.length === 0 && (
          <p className="py-6 text-center text-sm text-muted-foreground">
            По выбранной локации данные скоро появятся.
          </p>
        )}
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors" aria-label="Весь рейтинг">
          Весь рейтинг <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  );
}
