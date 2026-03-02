import Image from 'next/image'

export default function Hero() {
    return (
        <section className="hero" id="hero" aria-label="Hero section">
            {/* Background */}
            <div className="hero-bg-wrapper">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Aracena Auto Center auto repair shop in Trenton NJ — trusted mechanic serving Mercer County since 2016"
                    fill
                    priority
                    quality={85}
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
            <div className="hero-overlay" aria-hidden="true" />
            <div className="hero-overlay-bottom" aria-hidden="true" />

            {/* Content */}
            <div className="container">
                <div className="hero-content">
                    {/* Badge */}
                    <a
                        href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-badge"
                        style={{ borderColor: 'var(--yellow)', color: 'var(--yellow)', textDecoration: 'none' }}
                    >
                        <span className="hero-badge-dot" aria-hidden="true" style={{ background: 'var(--yellow)' }} />
                        Trusted Auto Repair · Trenton, NJ · Since 2016
                    </a>

                    {/* H1 */}
                    <h1 className="hero-title">
                        Professional Auto Repair in Trenton,&nbsp;NJ —{' '}
                        <span style={{ color: 'var(--yellow)' }}>Quality Service for Every Driver.</span>
                    </h1>

                    <p className="hero-sub">
                        Reliable &amp; affordable car repair services trusted by the local community since 2016.
                        Our ASE-certified techniques ensure your vehicle stays safe and reliable on the road.
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas">
                        <a
                            href="#contact"
                            className="btn-23"
                            id="hero-estimate-btn"
                            aria-label="Get a free auto repair estimate"
                        >
                            <span className="text">Free Estimate</span>
                            <span aria-hidden="true" className="marquee">Free Estimate</span>
                        </a>
                        <a
                            href="tel:+16093418565"
                            className="btn btn-outline"
                            id="hero-call-btn"
                            aria-label="Call Aracena Auto Center now"
                        >
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            Call (609) 341-8565
                        </a>
                    </div>

                    {/* Trust Bar */}
                    <div className="hero-trust">
                        <div className="hero-stars">
                            <span className="stars" aria-hidden="true" style={{ color: 'var(--yellow)' }}>★★★★★</span>
                            <span className="hero-stars-text">4.6 / 5 Google Rating</span>
                        </div>
                        <div className="hero-divider" aria-hidden="true" />
                        <a
                            href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-trust-item"
                            style={{ textDecoration: 'none' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Serving Trenton Since 2016
                        </a>
                        <div className="hero-divider" aria-hidden="true" />
                        <div className="hero-trust-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></svg>
                            Fast Same-Day Service
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
