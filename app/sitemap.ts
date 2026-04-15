import { MetadataRoute } from 'next'
import posts from '@/content/posts.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://regularizacionmasiva.es'

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}${post.href}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/guia-regularizacion-2026`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        }
    ];

    return [...staticRoutes, ...blogPosts];
}
