import { Calendar, RefreshCw } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export function DataFreshness() {
  const formatted = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(SITE_CONFIG.dataUpdated));

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <Calendar className="h-3.5 w-3.5" />
      <span>Данные обновлены: {formatted}</span>
      <RefreshCw className="h-3 w-3 ml-1 text-emerald-500" />
    </div>
  );
}
