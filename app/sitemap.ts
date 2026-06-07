import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Here we would dynamically generate URLs based on clusters
  // For the sitemap index pattern, Next.js sitemap() actually returns URLs to index in the standard usage.
  // We can return the main pages and cluster pages here.
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools/color/rgb-to-hsl`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // We will expand this based on lib/seo-data.ts in production
  ]
}