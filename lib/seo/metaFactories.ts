import type { SeoMeta } from '@/types/seo';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://mockbrand.alfo.online';

function getOgImage(title: string, type: string) {
  return {
    url: `${BASE_URL.replace(/\/$/, '')}/og?title=${encodeURIComponent(title)}&type=${encodeURIComponent(type)}`,
    width: 1200,
    height: 630,
    alt: title
  };
}

import type { MockupConfig } from '@/lib/mockups';
import type { ToolMetadataProps } from '@/lib/metadata';

export function buildMockupMeta(mockup: MockupConfig): SeoMeta {
  return {
    title: mockup.seo.title || mockup.title,
    description: (mockup.seo.description || `Free ${mockup.title} generator online.`).substring(0, 160),
    slug: `/mockup/${mockup.slug}`,
    pageType: 'product',
    noindex: false,
    ogImage: getOgImage(mockup.seo.title || mockup.title, 'Mockup'),
    tags: mockup.tags,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Mockups', href: '/mockup' },
      { label: mockup.title, href: `/mockup/${mockup.slug}` }
    ]
  };
}

export function buildToolMeta(tool: any, cluster: string): SeoMeta {
  const title = `${tool.name} - Free Online ${tool.primaryAction}`;
  return {
    title: title,
    description: `Easily ${tool.primaryAction} ${tool.inputType} to ${tool.outputType} online. ${tool.keyBenefit}. Fast, secure, and easy to use.`.substring(0, 160),
    slug: `/tools/${cluster}/${tool.slug}`,
    pageType: 'website',
    noindex: false,
    ogImage: getOgImage(title, 'Tool'),
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Tools', href: '/tools' },
      { label: cluster, href: `/tools/${cluster}` },
      { label: tool.name, href: `/tools/${cluster}/${tool.slug}` }
    ]
  };
}

export function buildHomepageMeta(): SeoMeta {
  return {
    title: 'Free Logo Mockup Generator',
    description: 'Turn any logo into premium real-world mockups in seconds. High-resolution, realistic templates. No software required.',
    slug: '/',
    pageType: 'website',
    noindex: false,
    ogImage: getOgImage('Free Logo Mockup Generator', 'Home')
  };
}
