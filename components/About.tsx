import Image from 'next/image'

const features = [
    'Over 9 years serving the Trenton community',
    'Locally owned and operated since 2016',
    'Honest, transparent diagnostics — no hidden fees',
    'ASE-certified quality workmanship',
    'Fair, competitive pricing on all repairs',
    'Fast turnaround to minimize your downtime',
]

export default function About() {
    return (
        <section className="about section" id="about" aria-labelledby="about-title">
            <div className="container">
                <div className="about-grid">
                    {/* Image */}
                    <div className="about-img-wrapper">
                        <Image
                            src="/images/about-shop.jpg"
                            alt="Aracena Auto Center mechanics working on a vehicle at our auto repair shop on South Broad Street in Trenton NJ"
                            width={600}
                            height={480}
                            quality={85}
                            loading="lazy"
                            style={{ objectFit: 'cover', width: '100%', height: '480px' }}
                        />
                        <a
                            href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-badge"
                            aria-label="Serving Trenton since 2016"
                            style={{ background: 'var(--yellow)', color: 'var(--black)', textDecoration: 'none' }}
                        >
                            9+
                            <span style={{ color: 'var(--black)' }}>Years Serving Trenton, NJ</span>
                        </a>
                    </div>

                    {/* Content */}
                    <div className="about-content">
                        <p className="section-label" aria-hidden="true">About Us</p>
                        <h2 className="section-title" id="about-title">
                            Your Trusted Mechanic in Trenton, NJ
                        </h2>
                        <p className="about-body">
                            Aracena Auto Center has been a cornerstone of the <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px' }}>Trenton, NJ community</a> since 2016. Founded with a simple promise — treat every customer with honesty and deliver repairs you can count on — we&apos;ve grown into one of Mercer County&apos;s most trusted auto repair shops.
                        </p>
                        <p className="about-body" style={{ marginTop: '-0.5rem' }}>
                            We believe that great auto repair in Trenton, NJ shouldn&apos;t come with surprises. Our technicians take the time to clearly explain what your vehicle needs, give you a fair price upfront, and get the job done right the first time.
                        </p>

                        {/* Stats */}
                        <div className="about-stats" role="list" aria-label="Key statistics">
                            <div role="listitem">
                                <div className="stat-num" style={{ color: 'var(--yellow-dark)' }}>9+</div>
                                <div className="stat-label">Years of Experience</div>
                            </div>
                            <div role="listitem">
                                <div className="stat-num" style={{ color: 'var(--yellow-dark)' }}>2,000+</div>
                                <div className="stat-label">Vehicles Serviced</div>
                            </div>
                            <div role="listitem">
                                <div className="stat-num" style={{ color: 'var(--yellow-dark)' }}>4.6★</div>
                                <div className="stat-label">Google Rating</div>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="about-features" aria-label="Why customers trust us">
                            {features.map((f) => (
                                <li key={f} className="about-feature">
                                    <span className="feature-check" aria-hidden="true" style={{ background: 'var(--yellow-light)', color: 'var(--yellow-dark)' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <a href="#contact" className="btn" id="about-cta-btn">
                            <span>Schedule a Repair</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
