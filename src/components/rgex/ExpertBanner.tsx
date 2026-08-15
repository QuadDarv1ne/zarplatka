import { User, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExpertBanner() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 rounded-xl border bg-card p-5 sm:p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950 shrink-0">
        <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Данные проверяет эксперт</p>
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
        </div>
        <a href="#" className="text-sm font-bold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          Игорь Вульф
        </a>
        <span className="text-xs text-muted-foreground ml-1">— эксперт Zarplatka</span>
        <p className="text-xs text-muted-foreground mt-1">
          Отвечает за общероссийские данные о зарплатах и рынке труда.
        </p>
      </div>
      <Button variant="outline" size="sm" className="shrink-0">
        Сообщить о неточности
      </Button>
    </div>
  );
}