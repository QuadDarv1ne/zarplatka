export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zarplatka',
    url: 'https://zarplatka.ru/',
    description: 'Статистика зарплат, цены и открытые данные по России и миру',
    inLanguage: 'ru-RU',
    publisher: {
      '@type': 'Organization',
      name: 'Zarplatka',
      url: 'https://zarplatka.ru/',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://zarplatka.ru/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
