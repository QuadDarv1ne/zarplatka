'use client';

import { useState, useMemo } from 'react';
import { ratingCategories } from '@/lib/data/salaries';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';

const ratingGroups = ['Все', 'Доходы и работа', 'Бизнес', 'Пенсии', 'Население', 'Продолжительность жизни'];

export function RatingsSection() {
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState('Все');

  const filtered = useMemo(() => {
    return ratingCategories.filter((cat) => {
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
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ratingGroups.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGroup(g)}
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

      <div className="space-y-6">
        {ratingGroups
          .filter((g) => g !== 'Все')
          .map((group) => {
            const items = filtered.filter((c) => c.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <h3 className="text-lg font-semibold mb-3">{group}</h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <a
                      key={item.title}
                      href="#"
                      className="group flex items-center justify-between gap-2 rounded-xl border bg-card p-3.5 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow-md transition-all"
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
              </div>
            );
          })}
      </div>
    </section>
  );
}