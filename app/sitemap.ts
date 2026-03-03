import { MetadataRoute } from 'next'
import { servicesData } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aracenaautocenter.com'

    // Service pages
    const serviceUrls = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        ...serviceUrls,
    ]
}
