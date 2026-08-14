# Zarplatka

Статистика зарплат, цены и открытые данные по России и странам мира.

Аналог rgex.ru, построенный на современной архитектуре.

## Технологии

- **Next.js 16** с App Router
- **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- **Recharts** — интерактивные графики
- **next-themes** — тёмная/светлая тема
- **Framer Motion** (доступен)

## Функции

- Международное сравнение зарплат (178 стран)
- Динамика зарплат (Россия vs мир, 2018–2026)
- Зарплаты по размеру компаний (BarChart)
- Распределение доходов по Джини (PieChart)
- Рейтинги регионов и городов России
- 453+ профессий и отрасли
- 18 рейтингов с поиском и фильтрацией
- FAQ-аккордеон
- Тёмная/светлая тема
- Анимированные счётчики при скролле
- Кнопка «Наверх»
- Полная адаптивность (mobile-first)

## Запуск

```bash
bun install
bun run dev
```

Открыть http://localhost:3000

## Структура

```
src/
  app/
    layout.tsx    — корневой layout с ThemeProvider
    page.tsx      — главная страница
    globals.css   — стили и CSS-переменные
  components/
    rgex/
      SiteHeader.tsx        — шапка с навигацией и темой
      SiteFooter.tsx        — подвал
      FiltersBar.tsx        — фильтры (локация/данные/сфера/год)
      WorldSalarySection.tsx — международное сравнение
      SalaryTrendChart.tsx  — динамика зарплат (AreaChart)
      CompanySizeChart.tsx  — зарплаты по размеру компаний
      GiniSection.tsx       — коэффициент Джини
      RussiaSalarySection.tsx — данные по России
      ProfessionsSection.tsx — профессии и отрасли
      RatingsSection.tsx    — рейтинги с поиском
      ContinueSection.tsx   — продолжить изучение
      FAQSection.tsx        — частые вопросы
      ExpertBanner.tsx      — баннер эксперта
      AnimatedCounter.tsx   — анимированный счётчик
      BackToTop.tsx         — кнопка наверх
      utils.ts              — утилиты форматирования
  lib/
    data/
      salaries.ts   — набор данных (страны, регионы, города, профессии)
```

## Лицензия

Проект создан в учебных целях.
