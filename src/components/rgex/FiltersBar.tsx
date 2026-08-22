'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

function scrollToRatings() {
  const el = document.getElementById('ratings');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FiltersBar({ location, dataCategory, sphere, year, onLocationChange, onDataCategoryChange, onSphereChange, onYearChange }: FiltersBarProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Фильтр данных и локации">
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm flex-1 min-w-0">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline whitespace-nowrap">Локация</span>
        <Select value={location} onValueChange={onLocationChange}>
          <SelectTrigger className="h-auto w-full min-w-0 border-0 bg-transparent shadow-none px-1! py-0! text-sm! font-medium hover:text-emerald-600 dark:hover:text-emerald-400 focus:ring-0">
            <SelectValue placeholder="Выберите локацию" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm flex-1 min-w-0">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline whitespace-nowrap">Данные</span>
        <Select value={dataCategory} onValueChange={onDataCategoryChange}>
          <SelectTrigger className="h-auto w-full min-w-0 border-0 bg-transparent shadow-none px-1! py-0! text-sm! font-medium hover:text-emerald-600 dark:hover:text-emerald-400 focus:ring-0">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            {dataCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm flex-1 min-w-0">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline whitespace-nowrap">Сфера</span>
        <Select value={sphere} onValueChange={onSphereChange}>
          <SelectTrigger className="h-auto w-full min-w-0 border-0 bg-transparent shadow-none px-1! py-0! text-sm! font-medium hover:text-emerald-600 dark:hover:text-emerald-400 focus:ring-0">
            <SelectValue placeholder="Выберите сферу" />
          </SelectTrigger>
          <SelectContent>
            {spheres.map((sph) => (
              <SelectItem key={sph} value={sph}>{sph}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 shadow-sm flex-1 min-w-0">
        <span className="text-xs font-medium text-muted-foreground hidden sm:inline whitespace-nowrap">Год</span>
        <Select value={year} onValueChange={onYearChange}>
          <SelectTrigger className="h-auto w-full min-w-0 border-0 bg-transparent shadow-none px-1! py-0! text-sm! font-medium hover:text-emerald-600 dark:hover:text-emerald-400 focus:ring-0">
            <SelectValue placeholder="Выберите год" />
          </SelectTrigger>
          <SelectContent>
            {years.map((y) => (
              <SelectItem key={y} value={y}>{y}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button variant="ghost" size="sm" className="text-muted-foreground shrink-0" onClick={scrollToRatings} aria-label="Перейти к рейтингам">
        <Search className="h-4 w-4 mr-1.5" />
        <span className="hidden sm:inline">Найти</span>
      </Button>
    </nav>
  );
}