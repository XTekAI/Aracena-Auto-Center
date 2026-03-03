'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Reviews', href: '/#testimonials' },
    { label: 'Areas', href: '/#areas' },
    { label: 'Contact', href: '/#contact' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const isHome = window.location.pathname === '/'
        const onScroll = () => setScrolled(!isHome || window.scrollY > 60)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            <header className={`header ${scrolled ? 'header-solid' : 'header-transparent'}`} role="banner">
                <div className="container">
                    <div className="header-inner">
                        {/* Logo */}
                        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Link href="/" className="logo-icon" aria-label="Aracena Auto Center — Home">
                                <div className="logo-icon-inner" style={{ width: '38px', height: '38px', background: 'var(--yellow)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px', fill: 'white' }}>
                                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
                                        <circle cx="7.5" cy="14.5" r="1.5" />
                                        <circle cx="16.5" cy="14.5" r="1.5" />
                                    </svg>
                                </div>
                            </Link>
                            <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <Link href="/" style={{ color: 'var(--white)', fontWeight: 900, fontSize: '1.25rem', fontFamily: 'Barlow, sans-serif', textDecoration: 'none', lineHeight: '1.1' }}>
                                    Aracena Auto Center
                                </Link>
                                <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="logo-sub" style={{ textDecoration: 'none', fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                                    Trenton, NJ · Since 2016
                                </a>
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="nav" aria-label="Main navigation">
                            {navLinks.map((l) => (
                                <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="header-cta">
                            <a href="tel:+16093418565" className="header-phone" aria-label="Call Aracena Auto Center">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: 'var(--yellow)' }}>
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                (609) 341-8565
                            </a>
                            <a href="/#contact" className="btn" id="header-cta-btn">
                                <span>Free Estimate</span>
                            </a>
                        </div>

                        {/* Hamburger */}
                        <button
                            className="hamburger"
                            aria-label={menuOpen ? "Close mobile menu" : "Open mobile menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation" aria-modal="true">
                <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
                <nav aria-label="Mobile navigation">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="mobile-nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a href="tel:+16093418565" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setMenuOpen(false)}>
                        📞 Call (609) 341-8565
                    </a>
                    <a href="/#contact" className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setMenuOpen(false)}>
                        Get Free Estimate
                    </a>
                </nav>
            </div>
        </>
    )
}
