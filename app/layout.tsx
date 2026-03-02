import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: '#0A1628',
}

export const metadata: Metadata = {
    title: 'Auto Repair in Trenton NJ | Aracena Auto Center | Mercer County Mechanic',
    description:
        'Trusted auto repair shop in Trenton, NJ. Expert brake repair, oil changes, engine diagnostics, AC repair & more. Serving Mercer County since 2016. Call for a free estimate!',
    keywords:
        'auto repair Trenton NJ, mechanic Trenton NJ, car repair Mercer County, brake repair Trenton, oil change Trenton NJ, engine diagnostics Trenton, auto shop near me, Aracena Auto Center',
    openGraph: {
        title: 'Auto Repair in Trenton NJ | Aracena Auto Center',
        description:
            'Reliable & affordable auto repair in Trenton, NJ. Brake repair, oil changes, engine diagnostics & more. ASE-certified technicians serving Mercer County since 2016.',
        url: 'https://aracenaautocenter.com',
        siteName: 'Aracena Auto Center',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://aracenaautocenter.com/images/hero-bg.jpg',
                width: 1200,
                height: 630,
                alt: 'Aracena Auto Center — Auto Repair Shop in Trenton, NJ',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Auto Repair in Trenton NJ | Aracena Auto Center',
        description: 'Expert auto repair in Trenton, NJ & Mercer County since 2016.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: { canonical: 'https://aracenaautocenter.com' },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': ['AutoRepair', 'LocalBusiness'],
            '@id': 'https://aracenaautocenter.com/#business',
            name: 'Aracena Auto Center',
            description:
                'Expert auto repair shop in Trenton, NJ serving Mercer County since 2016. We provide honest diagnostics, brake repair, oil changes, engine diagnostics, AC repair, transmission service, tire installation, and vehicle inspections at affordable prices.',
            url: 'https://aracenaautocenter.com',
            telephone: '(609) 341-8565',
            email: 'info@aracenaautocenter.com',
            foundingDate: '2016',
            priceRange: '$$',
            currenciesAccepted: 'USD',
            paymentAccepted: 'Cash, Credit Card, Debit Card',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '1650 South Broad Street',
                addressLocality: 'Trenton',
                addressRegion: 'NJ',
                postalCode: '08610',
                addressCountry: 'US',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.2029,
                longitude: -74.7596,
            },
            openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '19:00' },
            ],
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.6',
                reviewCount: '61',
                bestRating: '5',
                worstRating: '1',
            },
            areaServed: [
                { '@type': 'City', name: 'Trenton', containedInPlace: { '@type': 'State', name: 'New Jersey' } },
                { '@type': 'City', name: 'Hamilton Township' },
                { '@type': 'City', name: 'Ewing Township' },
                { '@type': 'City', name: 'Lawrence Township' },
                { '@type': 'City', name: 'Mercerville' },
                { '@type': 'County', name: 'Mercer County' },
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Auto Repair Services',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brake Repair & Replacement', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oil Changes & Preventive Maintenance', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engine Diagnostics', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair & Recharge', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suspension & Shock Repair', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transmission Services', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tire Installation & Rotation', areaServed: 'Trenton, NJ' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Inspection', areaServed: 'Trenton, NJ' } },
                ],
            },
            review: [
                {
                    '@type': 'Review',
                    author: { '@type': 'Person', name: 'Marcus T.' },
                    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                    reviewBody: 'Best auto repair shop in Trenton! They fixed my brakes quickly and at a price I could afford. Very honest and professional.',
                },
                {
                    '@type': 'Review',
                    author: { '@type': 'Person', name: 'Jasmine R.' },
                    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                    reviewBody: 'Needed an oil change and they had my car ready in under an hour. Great service, would recommend to anyone in Mercer County.',
                },
            ],
            sameAs: [
                'https://www.facebook.com/aracenaautocenter',
                'https://www.instagram.com/aracenaautocenter',
                'https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D',
            ],
        },
    ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    )
}
