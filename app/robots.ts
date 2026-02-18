import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/history/',
    },
    sitemap: 'https://www.ellielok.com/sitemap.xml',
  }
}
