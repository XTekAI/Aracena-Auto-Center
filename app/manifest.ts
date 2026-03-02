import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Aracena Auto Center',
        short_name: 'Aracena Auto',
        description: 'Expert auto repair in Trenton, NJ. Brake repair, oil changes, engine diagnostics & more. Serving Mercer County since 2016.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A1628',
        theme_color: '#0A1628',
        orientation: 'portrait',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
