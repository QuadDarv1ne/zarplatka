'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'zarplatka-cookie-consent';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShow(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      accept();
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClose();
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom fade-in duration-500">
      <div className="mx-auto max-w-3xl rounded-xl border bg-card p-4 shadow-xl">
        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Мы используем файлы cookie</p>
            <p className="text-xs text-muted-foreground mt-1">
              Этот сайт использует cookie-файлы для улучшения работы. Продолжая использовать сайт, вы соглашаетесь с нашей политикой конфиденциальности.
            </p>
          </div>
          <Button
            onClick={accept}
            onKeyDown={handleKeyDown}
            size="sm"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Принять
          </Button>
          <button
            onClick={handleClose}
            onKeyDown={handleCloseKeyDown}
            className="text-muted-foreground hover:text-foreground shrink-0"
            aria-label="Закрыть"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
