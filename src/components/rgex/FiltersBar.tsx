'use client';

import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FiltersBarProps {
  location: string;
  dataCategory: string;
  sphere: string;
  year: string;
  onLocationChange: (v: string) => void;
  onDataCategoryChange: (v: string) => void;
  onSphereChange: (v: string) => void;
  onYearChange: (v: string) => void;
}

const locations = ['Весь мир', 'Россия', 'Европа', 'Азия', 'Северная Америка', 'Южная Америка', 'Африка', 'Океания'];
const dataCategories = ['Статистика', 'Зарплата', 'Население', 'Цены', 'Бизнес'];
const spheres = ['Все сферы', 'IT', 'Медицина', 'Финансы', 'Юриспруденция', 'Энергетика', 'Образование', 'Строительство'];
const years = ['2026', '2025', '2024', '2023', '2022'];

export function FiltersBar({ location, dataCategory, sphere, year, onLocationChange, onDataCategoryChange, onSphereChange, onYearChange }: FiltersBarProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Фильтр данных и локации">
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Локация</span>
        <DropdownSelect value={location} options={locations} onChange={onLocationChange} />
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Данные</span>
        <DropdownSelect value={dataCategory} options={dataCategories} onChange={onDataCategoryChange} />
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Сфера</span>
        <DropdownSelect value={sphere} options={spheres} onChange={onSphereChange} />
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline">Год</span>
        <DropdownSelect value={year} options={years} onChange={onYearChange} />
      </div>
      <Button variant="ghost" size="sm" className="ml-auto text-muted-foreground">
        <Search className="h-4 w-4 mr-1.5" />
        <span className="hidden sm:inline">Найти локацию</span>
      </Button>
    </nav>
  );
}

function DropdownSelect({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <button
      onClick={() => {
        const idx = options.indexOf(value);
        const next = options[(idx + 1) % options.length];
        onChange(next);
      }}
      className="flex items-center gap-1 text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
    >
      {value}
      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
    </button>
  );
}