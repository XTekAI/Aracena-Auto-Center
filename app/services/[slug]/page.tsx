import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { servicesData } from '@/data/services'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Generating dynamic parameters for static build
export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }))
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = servicesData[slug]

    if (!service) {
        return {
            title: 'Service Not Found | Aracena Auto Center',
        }
    }

    return {
        title: `${service.title} in Trenton, NJ | Aracena Auto Center`,
        description: `${service.description} Aracena Auto Center provides expert ${service.title.toLowerCase()} for all vehicle makes in Trenton, NJ and Mercer County.`,
        alternates: {
            canonical: `https://aracenaautocenter.com/services/${slug}`,
        },
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = servicesData[slug]

    if (!service) {
        notFound()
    }

    // Get ALL other services to show in the full menu at bottom
    // This list is already filtered to remove Collision/Painting in data/services.ts
    const otherServices = Object.values(servicesData).filter(s => s.slug !== slug)

    return (
        <>
            <Header />
            <main className="service-detail-page bg-white min-h-screen">
                {/* Fixed Spacer to prevent Header Overlap */}
                <div className="h-[72px] sm:h-32 bg-[#0A1628]"></div>

                {/* Hero section */}
                <section className="service-hero bg-[#0A1628] py-10 sm:py-24 border-b border-yellow-500/10">
                    <div className="container px-4">
                        <div className="max-w-4xl">
                            <Link href="/#services" className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-yellow-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest decoration-transparent">
                                <span>←</span> Back to All Services
                            </Link>
                            <h1 className="text-3xl sm:text-6xl font-black text-white mb-4 sm:mb-6 uppercase leading-tight">
                                {service.title} <br />
                                <span className="text-yellow-400 opacity-90 text-xl sm:text-3xl block mt-2">Quality Auto Care</span>
                            </h1>
                            <p className="text-base sm:text-xl text-gray-300 border-l-4 border-yellow-500 pl-4 sm:pl-6 italic mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium">
                                {service.description}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
                                <a href="tel:+16093418565" className="btn w-full sm:w-auto text-center">
                                    <span>Call (609) 341-8565</span>
                                </a>
                                <Link href="/#contact" className="btn w-full sm:w-auto text-center">
                                    <span>Free Estimate</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issues - CLEAN TEXT-ONLY CARDS */}
                <section className="section bg-[#F9FAFB] py-12 sm:py-32">
                    <div className="container px-4">
                        <div className="mb-10 sm:mb-16 text-center sm:text-left">
                            <p className="section-label" style={{ color: 'var(--yellow-dark)' }}>Identification & Diagnostics</p>
                            <h2 className="section-title">
                                Common <span className="text-yellow-600">{service.title}</span> Issues
                            </h2>
                            <p className="section-subtitle">
                                Don&apos;t ignore the warning signs. Early detection saves you time and money.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {service.commonIssues.map((issue, idx) => (
                                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center sm:items-start gap-4 h-full border-t-4 border-t-yellow-500">
                                    <h3 className="text-xl font-black text-[#0A1628] leading-tight uppercase text-center sm:text-left">{issue}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-bold italic opacity-70">
                                        Professional Trenton mechanics specializing in {service.title.toLowerCase()} diagnostics.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Aracena Advantage Section */}
                <section className="section bg-white py-12 sm:py-32">
                    <div className="container px-4">
                        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                            <div>
                                <p className="section-label" style={{ color: 'var(--yellow-dark)' }}>The Aracena Advantage</p>
                                <h2 className="section-title mb-6 sm:mb-8">
                                    Why Trust Us for <span className="text-yellow-600 font-black">{service.title}</span>
                                </h2>
                                <p className="text-base sm:text-xl text-navy mb-8 sm:mb-10 italic border-l-4 border-yellow-500 pl-4 sm:pl-6 leading-relaxed font-black">
                                    &ldquo;{service.whyAracena}&rdquo;
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                            <div className="bg-yellow-500 p-1.5 rounded-lg shrink-0">
                                                <svg width="15" height="15" className="text-[#0A1628]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-black text-[#0A1628] uppercase text-xs tracking-wider">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#0A1628] p-8 sm:p-14 rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/5 mx-auto w-full lg:max-w-xl">
                                <p className="section-label" style={{ color: 'var(--yellow)' }}>Online Estimates</p>
                                <h3 className="text-white text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase">Get Your Quote</h3>
                                <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed font-bold text-sm sm:text-base">
                                    Locally-owned shop providing dealership-quality {service.title.toLowerCase()} service in Trenton.
                                </p>
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <a href="tel:+16093418565" className="btn w-full text-center"><span>📞 CALL: (609) 341-8565</span></a>
                                    <Link href="/#contact" className="btn w-full text-center"><span>GET ESTIMATE ONLINE</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Services - FORCED 3-COLUMN GRID TO MATCH HOMEPAGE */}
                <section className="section bg-[#F9FAFB] py-12 sm:py-24 border-t border-gray-100" id="full-menu">
                    <div className="container px-4">
                        <div className="mb-12 text-center sm:text-left">
                            <p className="section-label" style={{ color: 'var(--yellow-dark)' }}>Full Service Shop</p>
                            <h2 className="section-title">
                                Explore <span className="opacity-40 underline decoration-yellow-500 decoration-4">Other</span> Services
                            </h2>
                        </div>

                        <ul className="services-grid">
                            {otherServices.map((other) => (
                                <li key={other.slug}>
                                    <div className="uiverse-card h-full flex flex-col">
                                        <div className="service-img-wrap" style={{ position: 'relative', height: '240px' }}>
                                            <Image
                                                src={other.image}
                                                alt={other.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="transition-transform duration-700 hover:scale-110"
                                            />
                                        </div>
                                        <div className="content !p-8 flex-grow flex flex-col justify-between items-start gap-6">
                                            <div>
                                                <h3 className="heading font-heading uppercase font-black text-white mb-3" style={{ fontSize: '1.25rem' }}>{other.title}</h3>
                                                <p className="para !text-sm text-gray-300 line-clamp-2 italic">{other.description}</p>
                                            </div>
                                            <Link href={`/services/${other.slug}`} className="btn !min-w-0" style={{ width: '100%' }}>
                                                <span>LEARN MORE</span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-16 text-center">
                            <Link href="/#services" className="text-navy font-black border-b-2 border-yellow-500 pb-1 hover:text-yellow-600 transition-colors uppercase tracking-[0.2em] text-sm decoration-transparent">
                                View Full Service Menu
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA Strip */}
                <section className="bg-yellow-500 py-10 sm:py-16">
                    <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
                        <h2 className="text-2xl sm:text-5xl font-black text-[#0A1628] text-center sm:text-left leading-tight uppercase">
                            Professional Repairs. <br /> Honest People.
                        </h2>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                            <a href="tel:+16093418565" className="btn !border-[#0A1628] !text-[#0A1628] hover:!bg-[#0A1628] hover:!text-yellow-500 w-full sm:w-auto text-center">
                                <span>CALL US NOW</span>
                            </a>
                            <Link href="/#contact" className="btn !border-[#0A1628] !text-[#0A1628] hover:!bg-[#0A1628] hover:!text-yellow-500 w-full sm:w-auto text-center">
                                <span>FREE REQUEST</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
