import type { MetadataRoute } from 'next'

const siteUrl = 'https://southdevelopers.cl'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/products', priority: 0.8 },
    { path: '/store', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
  ]
  const now = new Date()

  return routes.map(r => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: r.priority,
  }))
}
