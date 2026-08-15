'use client';

import { useRef, useEffect, useState } from 'react';
import { companySizeData, worldSalaryMeta } from '@/lib/data/salaries';
import { Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AnimatedCounter } from './AnimatedCounter';
import { formatSalary } from './utils';

const COLORS = [
  'hsl(160, 84%, 39%)',
  'hsl(160, 60%, 50%)',
  'hsl(168, 50%, 58%)',
  'hsl(168, 40%, 68%)',
  'hsl(200, 20%, 55%)',
];

export function CompanySizeChart() {
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
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Размер работодателя</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Зарплаты по размеру компаний в мире</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
        Единой мировой статистики по размеру работодателей нет, поэтому блок показывает расчётный ориентир
        относительно медианной зарплаты стран.
      </p>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-muted-foreground">Мировой ориентир</span>
        <span className="text-xl font-bold tabular-nums">
          <AnimatedCounter value={worldSalaryMeta.median} duration={1000} suffix=" \u20BD" />
        </span>
        <span className="text-xs text-muted-foreground">медиана по странам</span>
      </div>
      <div className="rounded-xl border bg-card p-4 sm:p-6 shadow-sm">
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={companySizeData} layout="vertical" margin={{ left: 20, right: 20, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} className="stroke-muted" />
              <XAxis type="number" tickFormatter={(v) => `${(v / 1000).toFixed(0)}к`} fontSize={12} />
              <YAxis dataKey="label" type="category" width={140} fontSize={12} tickLine={false} />
              <Tooltip
                formatter={(value: number) => [formatSalary(value), 'Зарплата']}
                contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', fontSize: '13px' }}
              />
              <Bar dataKey="salary" radius={[0, 6, 6, 0]} animationBegin={visible ? 0 : 1000}>
                {companySizeData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {companySizeData.map((item, i) => (
            <div key={item.label} className={`text-center p-2 rounded-lg hover:bg-muted/50 transition-colors ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${200 + i * 100}ms` }}>
              <div className="h-1.5 w-full rounded-full mb-2" style={{ backgroundColor: COLORS[i] }} />
              <p className="text-xs font-semibold">{item.label}</p>
              <p className="text-[11px] text-muted-foreground">{item.description}</p>
              <p className="text-sm font-bold mt-1 tabular-nums">{formatSalary(item.salary)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
