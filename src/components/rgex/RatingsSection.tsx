'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { ratingCategories } from '@/lib/data/salaries';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';

const ratingGroups = ['Все', 'Доходы и работа', 'Бизнес', 'Пенсии', 'Население', 'Продолжительность жизни'];

export function RatingsSection() {
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState('Все');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const filtered = useMemo(() => {
    return ratingCategories.filter((cat, index) => {
      const matchesGroup = activeGroup === 'Все' || cat.group === activeGroup;
      const matchesSearch = !search || cat.title.toLowerCase().includes(search.toLowerCase());
      if (matchesGroup && matchesSearch) {
        return { ...cat, index };
      }
      return null;
    }).filter(Boolean) as (typeof ratingCategories[number] & { index: number })[];
  }, [search, activeGroup]);

  useEffect(() => {
    setVisibleCards(new Set(filtered.map((item) => item.index)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section id="ratings" className="space-y-5">
      <h2 className="text-2xl font-bold tracking-tight">Рейтинги России и мира {new Date().getFullYear()}</h2>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Название или показатель"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            aria-label="Поиск рейтингов"
          />
        </div>
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Фильтр по группам">
          {ratingGroups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
              role="tab"
              aria-selected={activeGroup === g}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeGroup === g
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-sm">Ничего не найдено</p>
          <p className="text-xs mt-1">Попробуйте изменить запрос или фильтр</p>
        </div>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <a
              key={item.index}
              ref={(el) => { cardRefs.current[item.index] = el; }}
              data-index={item.index}
              href="#"
              aria-label={item.title}
              className={`group flex items-center justify-between gap-2 rounded-xl border bg-card p-3.5 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow-md transition-all ${
                visibleCards.has(item.index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}