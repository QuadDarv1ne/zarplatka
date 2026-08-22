// Re-export types
export type {
  CountrySalary,
  RegionSalary,
  CitySalary,
  ProfessionSalary,
  IndustrySalary,
  CompanySizeSalary,
  GiniSegment,
  RatingCategory,
  FAQItem,
} from './types';

// Re-export data from modular files
export { topCountries } from './countries';
export { topRegions, topCities } from './regions';
export { topProfessions, topIndustries } from './professions';
export { companySizeData, giniData } from './charts';
export { ratingCategories, faqItems } from './ratings';
export { worldSalaryMeta, russiaSalaryMeta, giniMeta } from './metadata';
export { navigationLinks, footerData, continueLinks } from './navigation';
