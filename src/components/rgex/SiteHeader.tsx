'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';
import { navigationLinks } from '@/lib/data/salaries';

const sectionMap: Record<string, string> = {
  'Данные': 'world-salary',
  'Рейтинги': 'ratings',
  'О проекте': 'faq',
  'Поддержать проект': 'faq',
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      const sectionId = href.slice(1);
      const targetId = sectionMap[sectionId] || sectionId;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight group" aria-label="Zarplatka — На главную">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 text-white text-[10px] font-extrabold tracking-tight shadow-sm group-hover:shadow-emerald-500/20 transition-shadow">
            Zp
          </div>
          <span className="hidden sm:inline bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Zarplatka</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Основная навигация">
          {navigationLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
              aria-label={link.label}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleTheme}
              aria-label={mounted && theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            >
              {mounted ? (
                <>
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1.5 text-xs" aria-label="Выбрать регион">
              <Globe className="h-3.5 w-3.5" />
              Россия
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden" aria-label="Открыть меню">
              <Button variant="ghost" size="icon">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="text-lg font-bold flex items-center gap-2 mb-6">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-linear-to-br from-emerald-500 to-teal-600 text-white text-[8px] font-extrabold">Zp</div>
                Zarplatka
              </div>
              <nav className="flex flex-col gap-1" aria-label="Мобильная навигация">
                {navigationLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors text-left"
                    aria-label={link.label}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}