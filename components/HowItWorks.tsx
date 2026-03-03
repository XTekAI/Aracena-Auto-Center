const steps = [
    {
        num: '01',
        title: 'Request Your Estimate',
        text: 'Call us or fill out our online form. We respond to most requests within 24 hours with professional advice.',
    },
    {
        num: '02',
        title: 'Professional Diagnostics',
        text: 'Our ASE-certified technicians perform a thorough inspection using advanced tools to pinpoint the exact issue.',
    },
    {
        num: '03',
        title: 'Transparent Repair Plan',
        text: 'We provide a clear, itemized quote. No work is performed without your explicit approval — ever.',
    },
    {
        num: '04',
        title: 'Dealership-Level Repair',
        text: 'Our team restores your vehicle to factory standards using high-quality parts and expert craftsmanship.',
    },
    {
        num: '05',
        title: 'Final Quality Check',
        text: "Your car is thoroughly tested and ready for the road. Drive away with confidence and peace of mind.",
    },
]

export default function HowItWorks() {
    return (
        <section className="how section" id="how-it-works" aria-labelledby="how-title">
            <div className="container">
                <header className="how-header" style={{ textAlign: 'center' }}>
                    <p className="section-label" aria-hidden="true">Our Process</p>
                    <h2 className="section-title" id="how-title">
                        A Transparent Approach to Auto Repair
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0.75rem auto 0', maxWidth: '600px' }}>
                        Expert service shouldn&apos;t be complicated. Our 5-step process ensures clear communication and quality results every time.
                    </p>
                </header>

                <ol className="how-steps" aria-label="Auto repair process steps">
                    {steps.map((s) => (
                        <li key={s.num} className="how-step">
                            <div className="step-num" aria-hidden="true" style={{ color: 'var(--yellow)' }}>{s.num}</div>
                            <h3 className="step-title">{s.title}</h3>
                            <p className="step-text">{s.text}</p>
                        </li>
                    ))}
                </ol>

                {/* Bottom CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '3rem 2rem',
                    background: 'var(--navy)',
                    borderRadius: '4px',
                    border: '1px solid rgba(250,204,21,0.2)'
                }}>
                    <p style={{
                        fontFamily: 'Barlow,sans-serif',
                        fontWeight: 800,
                        fontSize: '1.75rem',
                        color: 'var(--white)',
                        marginBottom: '0.75rem'
                    }}>
                        Ready to Get Back on the Road?
                    </p>
                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '2rem',
                        maxWidth: '500px',
                        margin: '0 auto 2rem'
                    }}>
                        Schedule your professional auto repair in Trenton, NJ today. Experience the quality and honesty of Aracena Auto Center.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn" id="how-estimate-btn"><span>Get Your Free Estimate</span></a>
                        <a href="tel:+16093418565" className="btn" id="how-call-btn">
                            <span>Call (609) 341-8565</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
