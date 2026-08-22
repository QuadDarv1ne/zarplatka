'use client';

import { useState, useMemo } from 'react';
import { ratingCategories } from '@/lib/data/salaries';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const ratingGroups = ['Все', 'Доходы и работа', 'Бизнес', 'Пенсии', 'Население', 'Продолжительность жизни'];

function RatingCard({ title, description }: { title: string; description: string }) {
  const { ref, isVisible } = useInView<HTMLAnchorElement>({ threshold: 0.1 });
  return (
    <a
      ref={ref}
      href="#"
      aria-label={title}
      className={`group flex items-center justify-between gap-2 rounded-xl border bg-card p-3.5 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow-md transition-all ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="min-w-0">
        <p className="text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 shrink-0 transition-colors" />
    </a>
  );
}

export function RatingsSection() {
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState('Все');

  const filtered = useMemo(() => {
    return ratingCategories
      .map((cat, index) => ({ ...cat, originalIndex: index }))
      .filter((cat) => {
        const matchesGroup = activeGroup === 'Все' || cat.group === activeGroup;
        const matchesSearch = !search || cat.title.toLowerCase().includes(search.toLowerCase());
        return matchesGroup && matchesSearch;
      });
  }, [search, activeGroup]);

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
            <RatingCard
              key={item.originalIndex}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}