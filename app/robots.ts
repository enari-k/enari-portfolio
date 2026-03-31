// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
return {
    rules: {
    userAgent: '*',
    allow: '/',
      disallow: '/private/', // 隠したいディレクトリがあれば
    },
    sitemap: 'https://enari-k.com/sitemap.xml',
}
}