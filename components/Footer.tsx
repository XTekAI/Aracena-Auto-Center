import Link from 'next/link'

const services = [
    { label: 'General Maintenance', href: '/services/maintenance-trenton-nj' },
    { label: 'Electrical & Battery', href: '/services/electrical-battery-trenton-nj' },
    { label: 'Brake Repair & Services', href: '/services/brake-repair-trenton-nj' },
    { label: 'AC & Heating Repair', href: '/services/ac-repair-trenton-nj' },
    { label: 'Engine Diagnostics', href: '/services/engine-diagnostics-trenton-nj' },
    { label: 'Steering & Suspension', href: '/services/suspension-repair-trenton-nj' },
    { label: 'Tires & Wheels', href: '/services/tire-installation-trenton-nj' },
    { label: 'Exhaust System', href: '/services/exhaust-repair-trenton-nj' },
]

const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Customer Reviews', href: '#testimonials' },
    { label: 'Service Areas', href: '#areas' },
    { label: 'Contact / Estimate', href: '#contact' },
]

const areas = ['Trenton, NJ', 'Hamilton Township', 'Ewing Township', 'Lawrence Township', 'Mercerville, NJ', 'Mercer County']

export default function Footer() {
    return (
        <footer className="footer" role="contentinfo" aria-label="Site footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="logo" aria-label="Aracena Auto Center — Home">
                            <div className="logo-icon" aria-hidden="true" style={{ background: 'var(--yellow)' }}>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="black">
                                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
                                    <circle cx="7.5" cy="14.5" r="1.5" />
                                    <circle cx="16.5" cy="14.5" r="1.5" />
                                </svg>
                            </div>
                            <div>
                                <span style={{ color: 'var(--white)' }}>Aracena Auto Center</span>
                                <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="logo-sub" style={{ textDecoration: 'none' }}>
                                    Trenton, NJ · Since 2016
                                </a>
                            </div>
                        </Link>
                        <p className="footer-brand-desc">
                            Your trusted, locally-owned auto repair shop in Trenton, NJ. Serving Mercer County with honest diagnostics and quality repairs since 2016. Dealership quality at a local price.
                        </p>
                        <div className="footer-socials" aria-label="Social media links">
                            {/* Facebook */}
                            <a href="https://facebook.com/aracenaautocenter" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Aracena Auto Center on Facebook">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com/aracenaautocenter" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Aracena Auto Center on Instagram">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            {/* Google */}
                            <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Aracena Auto Center on Google Maps">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer quick links">
                        <p className="footer-heading">Quick Links</p>
                        <ul className="footer-links">
                            {quickLinks.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className="footer-link">{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Services */}
                    <nav aria-label="Footer services links">
                        <p className="footer-heading">Our Services</p>
                        <ul className="footer-links">
                            {services.map((s) => (
                                <li key={s.label}>
                                    <Link href={s.href} className="footer-link">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div>
                        <p className="footer-heading">Contact Info</p>
                        <ul className="footer-contact-list">
                            <li className="footer-contact-item">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <address style={{ fontStyle: 'normal' }}>
                                        1650 South Broad Street<br />
                                        Trenton, NJ 08610
                                    </address>
                                </a>
                            </li>
                            <li className="footer-contact-item">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--yellow)" aria-hidden="true">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <a href="tel:+16093418565" className="footer-link">(609) 341-8565</a>
                            </li>
                            <li className="footer-contact-item">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" strokeLinecap="round" />
                                </svg>
                                <a href="mailto:info@aracenaautocenter.com" className="footer-link">info@aracenaautocenter.com</a>
                            </li>
                            <li className="footer-contact-item">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" />
                                </svg>
                                <span>Mon–Sat: 8 AM – 7 PM<br />Sun: Closed</span>
                            </li>
                        </ul>
                        {/* Service Areas */}
                        <div style={{ marginTop: '1.5rem' }}>
                            <p className="footer-heading">Areas Served</p>
                            <p style={{ fontSize: '0.83rem', color: 'var(--gray-400)', lineHeight: 1.7 }}>
                                {areas.join(' · ')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} <a href="/" style={{ color: 'var(--yellow)' }}>Aracena Auto Center</a>. All rights reserved. Auto repair in Trenton, NJ &amp; Mercer County.
                    </p>
                    <nav className="footer-legal" aria-label="Legal links">
                        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                        <a href="/terms" className="footer-link">Terms of Service</a>
                        <a href="/sitemap.xml" className="footer-link">Sitemap</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
