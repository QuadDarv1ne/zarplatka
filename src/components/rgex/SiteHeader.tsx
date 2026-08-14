'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';
import { navigationLinks } from '@/lib/data/salaries';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-[10px] font-extrabold tracking-tight shadow-sm group-hover:shadow-emerald-500/20 transition-shadow">
            Zp
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Zarplatka</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Переключить тему</span>
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1.5 text-xs">
              <Globe className="h-3.5 w-3.5" />
              Россия
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="text-lg font-bold flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-[8px] font-extrabold">Zp</div>
                Zarplatka
              </SheetTitle>
              <nav className="flex flex-col gap-1 mt-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}