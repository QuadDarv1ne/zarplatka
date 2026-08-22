import type { ProfessionSalary, IndustrySalary } from './types';

export const topProfessions: ProfessionSalary[] = [
  { name: 'Судья', industry: 'Юриспруденция', salary: 351370 },
  { name: 'Нотариус', industry: 'Юриспруденция', salary: 289400 },
  { name: 'Полковник полиции', industry: 'Безопасность', salary: 265000 },
  { name: 'Go разработчик', industry: 'IT', salary: 248000 },
  { name: 'Java разработчик', industry: 'IT', salary: 237000 },
  { name: 'Главный врач', industry: 'Медицина', salary: 225000 },
  { name: 'iOS разработчик', industry: 'IT', salary: 219000 },
  { name: 'Трейдер', industry: 'Финансы', salary: 210000 },
  { name: 'C# разработчик', industry: 'IT', salary: 198000 },
  { name: 'Data Scientist', industry: 'IT', salary: 195000 },
  { name: 'Python разработчик', industry: 'IT', salary: 192000 },
  { name: 'Финансовый директор', industry: 'Финансы', salary: 310000 },
];

export const topIndustries: IndustrySalary[] = [
  { name: 'IT', professionCount: 45, avgSalary: 185000 },
  { name: 'Энергетика', professionCount: 32, avgSalary: 142000 },
  { name: 'Юриспруденция', professionCount: 28, avgSalary: 138000 },
  { name: 'Недвижимость', professionCount: 19, avgSalary: 125000 },
  { name: 'Медицина', professionCount: 52, avgSalary: 89000 },
  { name: 'Финансы и бухгалтерия', professionCount: 38, avgSalary: 115000 },
  { name: 'Безопасность и правоохранительные органы', professionCount: 22, avgSalary: 105000 },
  { name: 'Дизайн и креатив', professionCount: 18, avgSalary: 95000 },
  { name: 'HR и управление персоналом', professionCount: 15, avgSalary: 82000 },
  { name: 'Продажи и торговля', professionCount: 41, avgSalary: 78000 },
];
