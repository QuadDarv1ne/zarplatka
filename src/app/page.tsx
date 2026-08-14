'use client';

import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { FiltersBar } from '@/components/rgex/FiltersBar';
import { WorldSalarySection } from '@/components/rgex/WorldSalarySection';
import { CompanySizeChart } from '@/components/rgex/CompanySizeChart';
import { GiniSection } from '@/components/rgex/GiniSection';
import { RussiaSalarySection } from '@/components/rgex/RussiaSalarySection';
import { SalaryTrendChart } from '@/components/rgex/SalaryTrendChart';
import { ProfessionsSection } from '@/components/rgex/ProfessionsSection';
import { RatingsSection } from '@/components/rgex/RatingsSection';
import { ContinueSection } from '@/components/rgex/ContinueSection';
import { FAQSection } from '@/components/rgex/FAQSection';
import { ExpertBanner } from '@/components/rgex/ExpertBanner';

export default function HomePage() {
  const [location, setLocation] = useState('Весь мир');
  const [dataCategory, setDataCategory] = useState('Статистика');
  const [sphere, setSphere] = useState('Все сферы');
  const [year, setYear] = useState('2026');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="py-8 sm:py-12 space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Средние зарплаты в{' '}
          <button className="text-emerald-600 dark:text-emerald-400 hover:underline decoration-2 underline-offset-4">
            странах мира
          </button>
        </h1>
        <FiltersBar
          location={location}
          dataCategory={dataCategory}
          sphere={sphere}
          year={year}
          onLocationChange={setLocation}
          onDataCategoryChange={setDataCategory}
          onSphereChange={setSphere}
          onYearChange={setYear}
        />
      </section>

      <Separator />

      {/* World Salary */}
      <section className="py-10">
        <WorldSalarySection />
      </section>

      <Separator />

      {/* Salary Trend */}
      <section className="py-10">
        <SalaryTrendChart />
      </section>

      <Separator />

      {/* Company Size */}
      <section className="py-10">
        <CompanySizeChart />
      </section>

      <Separator />

      {/* Gini */}
      <section className="py-10">
        <GiniSection />
      </section>

      <Separator />

      {/* Russia */}
      <section className="py-10">
        <RussiaSalarySection />
      </section>

      <Separator />

      {/* Professions */}
      <section className="py-10">
        <ProfessionsSection />
      </section>

      <Separator />

      {/* Expert */}
      <section className="py-10">
        <ExpertBanner />
      </section>

      <Separator />

      {/* Continue */}
      <section className="py-10">
        <ContinueSection />
      </section>

      <Separator />

      {/* Ratings */}
      <section className="py-10">
        <RatingsSection />
      </section>

      <Separator />

      {/* FAQ */}
      <section className="py-10 pb-16">
        <FAQSection />
      </section>
    </div>
  );
}
