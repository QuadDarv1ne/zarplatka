'use client';

import { giniData, giniMeta } from '@/lib/data/salaries';
import { Cell, PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import { AnimatedCounter } from './AnimatedCounter';

export function GiniSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Неравенство доходов</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight">Распределение зарплат в мире по коэффициенту Джини</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        Зарплаты разделены на три диапазона, а доли рассчитаны по коэффициенту Джини.
        Для мирового среза используется медианное значение по странам из базы; верхняя граница шкалы
        ограничена 150 000 ₽, чтобы единичные высокие доходы не растягивали диаграмму.
      </p>
      <div className="flex items-center gap-6 mb-4">
        <div>
          <p className="text-xs text-muted-foreground">Медианный коэффициент Джини</p>
          <p className="text-3xl font-bold tabular-nums"><AnimatedCounter value={giniMeta.coefficient} duration={800} /></p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Стран с доступными данными</p>
          <p className="text-3xl font-bold tabular-nums"><AnimatedCounter value={giniMeta.countriesWithData} duration={800} /></p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 items-center">
        <div className="rounded-xl border bg-card p-5 sm:p-6 shadow-sm flex justify-center">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={giniData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="percentage"
                  nameKey="label"
                  stroke="none"
                  paddingAngle={2}
                >
                  {giniData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Доля']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', fontSize: '13px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          {giniData.map((segment) => (
            <div key={segment.label} className="flex items-center gap-4">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0 text-white text-sm font-bold"
                style={{ backgroundColor: segment.color }}
              >
                {segment.percentage}%
              </div>
              <p className="text-sm font-medium">{segment.label}</p>
            </div>
          ))}
          <p className="text-xs text-muted-foreground leading-relaxed">
            Это оценочная модель структуры доходов, а не сумма долей официальных обследований всех стран.
          </p>
        </div>
      </div>
    </section>
  );
}