'use client';

import { useRef, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const trendData = [
  { year: '2018', russia: 43300, world: 38200 },
  { year: '2019', russia: 47700, world: 40100 },
  { year: '2020', russia: 51300, world: 41500 },
  { year: '2021', russia: 56200, world: 43800 },
  { year: '2022', russia: 62300, world: 46200 },
  { year: '2023', russia: 68100, world: 48900 },
  { year: '2024', russia: 72900, world: 50600 },
  { year: '2025', russia: 75800, world: 51800 },
  { year: '2026', russia: 78410, world: 52750 },
];

export function SalaryTrendChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`space-y-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Динамика</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Динамика зарплат: Россия и мир</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        Сравнение средней зарплаты в России с мировой медианой за последние 9 лет.
        Россия демонстрирует устойчивый рост, постепенно сокращая разрыв с мировой медианой.
      </p>
      <div className="rounded-xl border bg-card p-4 sm:p-6">
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium">Россия</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-teal-400" />
            <span className="text-sm font-medium">Мировая медиана</span>
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
              <defs>
                <linearGradient id="gradRussia" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradWorld" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(168, 60%, 58%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(168, 60%, 58%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="year" fontSize={12} tickLine={false} />
              <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`} fontSize={12} tickLine={false} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${new Intl.NumberFormat('ru-RU').format(value)} ₽`,
                  name === 'russia' ? 'Россия' : 'Мировая медиана',
                ]}
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', fontSize: '13px' }}
                labelStyle={{ fontWeight: 600 }}
              />
              <Area
                type="monotone"
                dataKey="world"
                stroke="hsl(168, 60%, 58%)"
                fillOpacity={1}
                fill="url(#gradWorld)"
                strokeWidth={2}
                animationBegin={visible ? 0 : 1000}
              />
              <Area
                type="monotone"
                dataKey="russia"
                stroke="hsl(160, 84%, 39%)"
                fillOpacity={1}
                fill="url(#gradRussia)"
                strokeWidth={2}
                animationBegin={visible ? 0 : 1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
