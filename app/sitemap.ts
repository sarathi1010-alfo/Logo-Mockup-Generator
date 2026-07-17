import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { mockups } from '@/lib/mockups'
import { programmaticPages } from '@/lib/programmatic-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mockbrand.alfo.online'

  const staticRoutes = [
    '',
    '/about',
    '/features',
    '/faq',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const mockupRoutes = mockups.map((mockup) => ({
    url: `${baseUrl}/mockup/${mockup.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))


  const programmaticRoutes = programmaticPages.map((page) => ({
    url: `${baseUrl}/${page.type === 'mockup' ? 'mockups' : 'industries'}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...mockupRoutes, ...blogRoutes, ...programmaticRoutes]
}