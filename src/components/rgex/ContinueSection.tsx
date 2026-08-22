'use client';

import { useRef, useEffect, useState } from 'react';
import { continueLinks } from '@/lib/data/salaries';
import { ArrowRight, BarChart3, Users, Building2, Wallet, TrendingUp } from 'lucide-react';

const icons = [BarChart3, Users, Building2, Wallet, TrendingUp];

const categoryMap: Record<string, string> = {
  Зарплата: 'Работа',
  Население: 'Население',
  Цены: 'Цены',
  Бизнес: 'Бизнес',
  Рейтинги: 'Рейтинги',
};

export function ContinueSection({ dataCategory = 'Статистика' }: { dataCategory?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const links = dataCategory === 'Статистика'
    ? continueLinks
    : continueLinks.filter((link) => link.category === categoryMap[dataCategory]);

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
    <section ref={ref} className={`space-y-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-xl font-bold tracking-tight">Продолжить изучение</h2>
      <p className="text-sm text-muted-foreground">Данные и территории для локации: Россия.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link, i) => {
          const Icon = icons[i] || BarChart3;
          return (
            <a
              key={link.title}
              href="#"
              aria-label={link.title}
              className={`group flex items-start gap-3 rounded-xl border bg-card p-4 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow-md transition-all ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms`, transitionDuration: '500ms' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 shrink-0">
                <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{link.title}</p>
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 tabular-nums">{link.stat}</p>
                <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 shrink-0 mt-1 transition-colors" />
            </a>
          );
        })}
      </div>
      {links.length === 0 && (
        <p className="py-6 text-center text-sm text-muted-foreground">
          По выбранной категории данные скоро появятся.
        </p>
      )}
    </section>
  );
}