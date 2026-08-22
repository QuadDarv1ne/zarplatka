import type { RegionSalary, CitySalary } from './types';

export const topRegions: RegionSalary[] = [
  { name: 'Чукотский автономный округ', salary: 168720, position: 1 },
  { name: 'Ямало-Ненецкий автономный округ', salary: 157820, position: 2 },
  { name: 'Москва', salary: 150770, position: 3 },
  { name: 'Магаданская область', salary: 145750, position: 4 },
  { name: 'Ненецкий автономный округ', salary: 138400, position: 5 },
  { name: 'Сахалинская область', salary: 132800, position: 6 },
  { name: 'Ханты-Мансийский АО', salary: 128500, position: 7 },
  { name: 'Республика Коми', salary: 95600, position: 8 },
  { name: 'Мурманская область', salary: 92300, position: 9 },
  { name: 'Тюменская область', salary: 89700, position: 10 },
  { name: 'Камчатский край', salary: 87500, position: 11 },
  { name: 'Санкт-Петербург', salary: 84200, position: 12 },
  { name: 'Республика Саха (Якутия)', salary: 83100, position: 13 },
  { name: 'Краснодарский край', salary: 68900, position: 14 },
  { name: 'Свердловская область', salary: 65200, position: 15 },
  { name: 'Красноярский край', salary: 64800, position: 16 },
];

export const topCities: CitySalary[] = [
  { name: 'Анадырь', salary: 129200, region: 'Чукотский АО' },
  { name: 'Москва', salary: 113600, region: 'Москва' },
  { name: 'Салехард', salary: 106400, region: 'Ямало-Ненецкий АО' },
  { name: 'Южно-Сахалинск', salary: 99000, region: 'Сахалинская область' },
  { name: 'Магадан', salary: 96500, region: 'Магаданская область' },
  { name: 'Петропавловск-Камчатский', salary: 92100, region: 'Камчатский край' },
  { name: 'Ханты-Мансийск', salary: 89800, region: 'Ханты-Мансийский АО' },
  { name: 'Сургут', salary: 87400, region: 'Ханты-Мансийский АО' },
  { name: 'Нарьян-Мар', salary: 85200, region: 'Ненецкий АО' },
  { name: 'Санкт-Петербург', salary: 79300, region: 'Санкт-Петербург' },
  { name: 'Дудинка', salary: 76800, region: 'Красноярский край' },
  { name: 'Новый Уренгой', salary: 74200, region: 'Ямало-Ненецкий АО' },
];
