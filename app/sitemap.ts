import { MetadataRoute } from 'next'
import { mockups } from '@/lib/mockups'
import { seoData } from '@/lib/seo-data'
import { buildCanonical } from '@/lib/seo/buildCanonical'

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // 1. Static Pages
  urls.push({
    url: buildCanonical('/'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // 2. Mockups (Products)
  mockups.forEach((mockup) => {
    urls.push({
      url: buildCanonical(`/mockup/${mockup.slug}`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    });
  });

  // 3. Tools (Website/Utility)
  seoData.clusters.forEach((cluster) => {
    cluster.tools.forEach((tool) => {
      urls.push({
        url: buildCanonical(`/tools/${cluster.id}/${tool.slug}`),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  return urls;
}
