'use client'

import { useState, type FormEvent } from 'react'

const services = [
    'General Maintenance',
    'Electrical & Battery',
    'Brake Services',
    'AC & Heating',
    'Engine Diagnostics',
    'Steering & Suspension',
    'Tires & Wheels',
    'Exhaust System',
    'Transmission Services',
    'Glass Services',
    'Other / Not Sure',
]

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        setLoading(true)
        
        try {
            const formData = new FormData(form)
            const data = Object.fromEntries(formData.entries())
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.text();
                console.error('Wix submission error:', errorData);
                throw new Error('Failed to submit form')
            }

            setSubmitted(true)
            form.reset()
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('There was an error sending your request. Please try again or call us directly.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="contact section" id="contact" aria-labelledby="contact-title">
            <div className="container">
                <div className="contact-grid">
                    {/* Info */}
                    <div className="contact-info-block">
                        <p className="section-label" aria-hidden="true">Contact Us</p>
                        <h2 className="section-title section-title-white" id="contact-title">
                            Schedule Your Auto Repair in Trenton Today
                        </h2>
                        <p className="section-subtitle section-subtitle-white">
                            Most estimates provided within 24 hours. Call us directly for same-day appointments.
                        </p>

                        <ul className="contact-details" aria-label="Contact information">
                            <li className="contact-detail">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-detail-label">Phone</div>
                                    <div className="contact-detail-value">
                                        <a href="tel:+16093418565" style={{ color: 'inherit' }}>(609) 341-8565</a>
                                    </div>
                                    <div className="contact-detail-extra">Call for same-day appointments</div>
                                </div>
                            </li>
                            <li className="contact-detail">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" />
                                        <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="contact-detail-label">Email</div>
                                    <div className="contact-detail-value">
                                        <a href="mailto:aracenaautocenter@gmail.com" style={{ color: 'inherit' }}>aracenaautocenter@gmail.com</a>
                                    </div>
                                    <div className="contact-detail-extra">We reply within 24 hours</div>
                                </div>
                            </li>
                            <li className="contact-detail">
                                <div className="contact-detail-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <div>
                                        <div className="contact-detail-label">Address</div>
                                        <div className="contact-detail-value">1650 South Broad Street</div>
                                        <div className="contact-detail-extra">Trenton, NJ 08610</div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        {/* Hours */}
                        <div className="contact-hours" aria-label="Business hours">
                            <h3 className="hours-title">Business Hours</h3>
                            <dl>
                                {[
                                    { day: 'Monday – Saturday', time: '8:00 AM – 7:00 PM', closed: false },
                                    { day: 'Sunday', time: 'Closed', closed: true },
                                ].map((h) => (
                                    <div key={h.day} className="hours-row">
                                        <dt className="hours-day">{h.day}</dt>
                                        <dd className={h.closed ? 'hours-closed' : 'hours-time'}>{h.time}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form-card" role="region" aria-label="Estimate request form">
                        {submitted ? (
                            <div className="form-success show" role="status" aria-live="polite">
                                <div className="form-success-icon">✅</div>
                                <h3 className="form-success-title">Thank You!</h3>
                                <p className="form-success-text" style={{ marginBottom: '1.5rem' }}>
                                    We received your estimate request. A member of our team will contact you within 24 hours.
                                    For urgent repairs, please call us directly at{' '}
                                    <a href="tel:+16093418565" style={{ color: 'var(--yellow)', fontWeight: 700 }}>(609) 341-8565</a>.
                                </p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="btn btn-outline"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    Send Another Request
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="form-title">Get Your Free Estimate</h3>
                                <p className="form-sub">Fill out the form below and we&#39;ll get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} noValidate aria-label="Free auto repair estimate form">
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input id="name" name="name" type="text" className="form-input" placeholder="John Smith" required autoComplete="name" suppressHydrationWarning />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">Phone Number *</label>
                                            <input id="phone" name="phone" type="tel" className="form-input" placeholder="(609) 555-0100" required autoComplete="tel" suppressHydrationWarning />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email Address</label>
                                            <input id="email" name="email" type="email" className="form-input" placeholder="john@email.com" autoComplete="email" suppressHydrationWarning />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="vehicle">Vehicle (Year, Make, Model)</label>
                                            <input id="vehicle" name="vehicle" type="text" className="form-input" placeholder="2019 Toyota Camry" suppressHydrationWarning />
                                        </div>
                                        <div className="form-group full">
                                            <label className="form-label" htmlFor="service">Service Needed</label>
                                            <select id="service" name="service" className="form-select" suppressHydrationWarning>
                                                <option value="">Select a service...</option>
                                                {services.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group full">
                                            <label className="form-label" htmlFor="message">Describe the Issue (Optional)</label>
                                            <textarea id="message" name="message" className="form-textarea" placeholder="Tell us what's going on with your vehicle..." suppressHydrationWarning />
                                        </div>
                                    </div>

                                    <div className="form-privacy" aria-label="Privacy notice">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>We respect your privacy. Your information will never be shared with third parties.</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn"
                                        id="form-submit-btn"
                                        style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem' }}
                                        disabled={loading}
                                        aria-busy={loading}
                                        suppressHydrationWarning
                                    >
                                        <span>{loading ? 'Sending...' : 'Send Estimate Request'}</span>
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
