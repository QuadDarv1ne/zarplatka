import { SITE_CONFIG } from '@/lib/config';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: SITE_CONFIG.locale,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'Dataset',
      name: 'Зарплаты и статистика',
      description: 'Открытые данные о зарплатах, ценах, населении и рынке труда',
      distribution: {
        '@type': 'DataDistribution',
        contentUrl: SITE_CONFIG.url,
        contentSize: 'Открытый доступ',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
