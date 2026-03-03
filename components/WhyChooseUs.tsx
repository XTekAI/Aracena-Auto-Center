const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'ASE-Certified Expert Technicians',
        text: 'Our mechanics bring dealership-level expertise and years of hands-on experience to every vehicle repair.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" strokeLinecap="round" />
            </svg>
        ),
        title: 'Fast Same-Day Turnaround',
        text: "We respect your time. Most repairs are completed same-day or next-day so you're back on the road fast.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Honest & Transparent Diagnostics',
        text: 'We only recommend what your car actually needs — no upselling, no surprises, just the truth.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Fair & Transparent Pricing',
        text: 'Competitive rates and dealership-quality service. We offer quality auto repair in Trenton, NJ accessible for everyone.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Locally Owned community Roots',
        text: "We're your neighbors. Aracena Auto Center is rooted in the Trenton community and proud to serve Mercer County families.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Top-Rated Customer Service',
        text: 'Highly rated for quality and communication. Our 4.6-star rating from 61+ Google reviews speaks for itself.',
    },
]

export default function WhyChooseUs() {
    return (
        <section className="why section" id="why-us" aria-labelledby="why-title">
            <div className="container">
                <div className="why-grid">
                    {/* Feature List */}
                    <div>
                        <p className="section-label" style={{ color: 'var(--yellow)' }} aria-hidden="true">The Aracena Advantage</p>
                        <h2 className="section-title section-title-white" id="why-title">
                            Why Trenton Drivers Trust Us
                        </h2>
                        <p className="section-subtitle section-subtitle-white">
                            When you need a <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px' }}>mechanic in Trenton, NJ</a> you can count on — here&apos;s why the Mercer County community chooses Aracena Auto Center.
                        </p>
                        <ul className="why-features" aria-label="Reasons to choose Aracena Auto Center">
                            {features.map((f) => (
                                <li key={f.title} className="why-feature">
                                    <div className="why-icon" aria-hidden="true" style={{ color: 'var(--yellow)' }}>{f.icon}</div>
                                    <div>
                                        <div className="why-feat-title">{f.title}</div>
                                        <div className="why-feat-text" style={{ color: 'rgba(255,255,255,0.7)' }}>{f.text}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Box */}
                    <aside className="why-cta-box" aria-label="Get started with Aracena Auto Center" style={{ background: 'var(--navy-mid)', border: '1px solid rgba(250,204,21,0.2)' }}>
                        <p className="section-label" style={{ color: 'var(--yellow)' }} aria-hidden="true">Experience Excellence</p>
                        <h3 className="why-cta-title" style={{ color: 'var(--white)' }}>
                            Ready to Experience the Difference?
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                            Stop searching for &ldquo;mechanic near me&rdquo; — you&apos;ve found your professional <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px' }}>auto repair shop in Trenton, NJ</a>.
                            Call or book your estimate today.
                        </p>
                        <ul className="why-cta-trust" aria-label="Additional trust points">
                            {[
                                'Free estimates — no hidden costs',
                                'Transparent repair process',
                                'Warranty on qualifying repairs',
                                <a key="loc" href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    Locally owned since 2016 in Trenton, NJ
                                </a>,
                            ].map((t, idx) => (
                                <li key={idx} className="why-cta-trust-item" style={{ color: 'var(--white)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="3" aria-hidden="true">
                                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {t}
                                </li>
                            ))}
                        </ul>
                        <div className="why-cta-btns">
                            <a href="#contact" className="btn" id="why-estimate-btn"><span>Get a Free Estimate</span></a>
                            <a href="tel:+16093418565" className="btn" id="why-call-btn"><span>📞 Call Now</span></a>
                        </div>
                        {/* Trust Badges */}
                        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {['ASE Quality', 'Local Expert', '9+ Years Experience', '4.6 ★ Google Rating'].map((badge) => (
                                <span key={badge} style={{ background: 'rgba(250,204,21,0.1)', border: '1px solid rgba(250,204,21,0.3)', color: 'var(--yellow)', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'Barlow,sans-serif' }}>
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
