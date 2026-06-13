import type { SeoMeta } from '@/types/seo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://mockbrand.alfo.online';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'MockBrand';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`, // Update if a specific logo path is available
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function buildBreadcrumbSchema(items: Array<{ label: string; href: string }>) {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`
    }))
  };
}

export function buildArticleSchema(meta: SeoMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    image: meta.ogImage ? meta.ogImage.url : undefined,
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt,
    author: meta.author ? {
      '@type': 'Person',
      name: meta.author.name,
      url: meta.author.url
    } : undefined,
    publisher: buildOrganizationSchema()
  };
}

export function buildProductSchema(meta: SeoMeta): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: meta.title,
    description: meta.description,
    image: meta.ogImage ? meta.ogImage.url : undefined,
  };

  if (meta.productData) {
    schema.sku = meta.productData.sku;
    if (meta.productData.brand) {
      schema.brand = {
        '@type': 'Brand',
        name: meta.productData.brand
      };
    }
    schema.offers = {
      '@type': 'Offer',
      price: meta.productData.price,
      priceCurrency: meta.productData.currency,
      availability: `https://schema.org/${meta.productData.availability}`,
      url: `${BASE_URL}${meta.slug.startsWith('/') ? meta.slug : `/${meta.slug}`}`
    };

    if (meta.productData.ratingValue && meta.productData.reviewCount) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: meta.productData.ratingValue,
        reviewCount: meta.productData.reviewCount
      };
    }
  }

  return schema;
}

export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function buildAuthorSchema(meta: SeoMeta) {
  if (!meta.author) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: meta.author.name,
    url: meta.author.url,
  };
}

export function buildSitelinksSearchBoxSchema() {
  return buildWebsiteSchema(); // Sitelinks SearchBox is part of the WebSite schema logic here
}

export function buildSoftwareApplicationSchema(meta: SeoMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: meta.title,
    description: meta.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: `${BASE_URL}${meta.slug.startsWith('/') ? meta.slug : `/${meta.slug}`}`
  };
}

export function buildHowToSchema(meta: SeoMeta) {
  if (!meta.steps || meta.steps.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: meta.title,
    description: meta.description,
    totalTime: meta.estimatedTime,
    step: meta.steps.map((s, i) => {
      const stepObj: Record<string, unknown> = {
        '@type': 'HowToStep',
        position: i + 1,
        name: s.heading,
        text: s.body
      };
      if (s.image?.url) {
        stepObj.image = s.image.url;
      }
      return stepObj;
    })
  };
}
