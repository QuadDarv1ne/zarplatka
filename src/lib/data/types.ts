export interface CountrySalary {
  name: string;
  slug: string;
  salary: number;
  flag: string;
  continent: string;
}

export interface RegionSalary {
  name: string;
  salary: number;
  position: number;
}

export interface CitySalary {
  name: string;
  salary: number;
  region: string;
}

export interface ProfessionSalary {
  name: string;
  industry: string;
  salary: number;
}

export interface IndustrySalary {
  name: string;
  professionCount: number;
  avgSalary: number;
}

export interface CompanySizeSalary {
  label: string;
  description: string;
  salary: number;
  employees: string;
}

export interface GiniSegment {
  label: string;
  percentage: number;
  color: string;
}

export interface RatingCategory {
  title: string;
  group: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
