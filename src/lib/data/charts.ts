import type { CompanySizeSalary, GiniSegment } from './types';

export const companySizeData: CompanySizeSalary[] = [
  { label: 'Крупные компании', description: 'от 250 сотрудников', salary: 70000, employees: '250+' },
  { label: 'Средние компании', description: 'от 101 до 250 сотрудников', salary: 60000, employees: '101–250' },
  { label: 'Малые компании', description: 'от 16 до 100 сотрудников', salary: 50000, employees: '16–100' },
  { label: 'Микропредприятия', description: 'до 15 сотрудников', salary: 30000, employees: '1–15' },
  { label: 'Бюджетная сфера', description: 'для сопоставления', salary: 40000, employees: '—' },
];

export const giniData: GiniSegment[] = [
  { label: 'До 40 000 ₽', percentage: 63.7, color: 'hsl(var(--chart-1))' },
  { label: 'От 40 000 ₽ до 130 000 ₽', percentage: 33.0, color: 'hsl(var(--chart-2))' },
  { label: 'Более 130 000 ₽', percentage: 3.3, color: 'hsl(var(--chart-3))' },
];
