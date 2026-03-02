const areas = [
    { name: 'Trenton, NJ (Primary)', key: 'trenton-nj', primary: true },
    { name: 'Hamilton Township, NJ', key: 'hamilton-nj' },
    { name: 'Ewing Township, NJ', key: 'ewing-nj' },
    { name: 'Lawrence Township, NJ', key: 'lawrence-nj' },
    { name: 'Mercerville, NJ', key: 'mercerville-nj' },
    { name: 'Mercer County, NJ', key: 'mercer-county' },
    { name: 'West Trenton, NJ', key: 'west-trenton-nj' },
    { name: 'Robbinsville, NJ', key: 'robbinsville-nj' },
]

const keywords = [
    'Mechanic near Trenton NJ',
    'Auto repair shop in Mercer County',
    'Car repair near Hamilton NJ',
    'Brake repair Trenton NJ',
    'Oil change Trenton NJ',
    'Engine diagnostics Mercer County',
]

export default function ServiceAreas() {
    return (
        <section className="areas section" id="areas" aria-labelledby="areas-title">
            <div className="container">
                <div className="areas-inner">
                    {/* Left */}
                    <div>
                        <p className="section-label" aria-hidden="true">Where We Serve</p>
                        <h2 className="section-title" id="areas-title">
                            Serving All of Mercer County, NJ
                        </h2>
                        <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
                            Aracena Auto Center is centrally located in Trenton, NJ — providing professional auto repair services to Hamilton, Ewing, Lawrence Township, and all surrounding areas.
                        </p>

                        <ul className="areas-list" aria-label="Service areas">
                            {areas.map((a) => (
                                <li key={a.key} className="area-item">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2.5" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span style={a.primary ? { fontWeight: 700, color: 'var(--navy)' } : {}}>
                                        {a.name}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Keyword tags for SEO */}
                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-600)', marginBottom: '0.8rem' }}>
                                Popular Search Terms:
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                {keywords.map((k) => (
                                    <span key={k} style={{
                                        background: 'var(--white)',
                                        border: '1px solid var(--gray-200)',
                                        padding: '0.4rem 0.9rem',
                                        borderRadius: '4px',
                                        fontSize: '0.78rem',
                                        color: 'var(--navy)',
                                        fontWeight: 500
                                    }}>
                                        {k}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Map */}
                    <div className="areas-map" aria-label="Location of Aracena Auto Center in Trenton NJ" style={{ border: '1px solid var(--gray-200)' }}>
                        <div className="map-header" style={{ borderBottom: '1px solid var(--gray-100)' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--yellow-dark)" strokeWidth="2.5" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <div className="map-header-text" style={{ color: 'var(--navy)' }}>Aracena Auto Center</div>
                                <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="map-header-sub" style={{ textDecoration: 'none' }}>
                                    1650 South Broad St, Trenton, NJ 08610
                                </a>
                            </div>
                        </div>
                        <iframe
                            className="map-placeholder"
                            title="Aracena Auto Center location map — 1650 South Broad Street, Trenton NJ 08610"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.123533967839!2d-74.75953048460982!3d40.20292837938927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15c0b36d1f1a7%3A0x6d9f7a7a7a7a7a7a!2s1650+S+Broad+St%2C+Trenton%2C+NJ+08610!5e0!3m2!1sen!2sus!4v1"
                            style={{ border: 0, height: '300px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="map-footer" style={{ background: 'var(--gray-100)' }}>
                            <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                                <div className="map-address" style={{ color: 'var(--navy)' }}>
                                    <strong>1650 South Broad Street</strong><br />
                                    Trenton, NJ 08610
                                </div>
                            </a>
                            <a
                                href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                                aria-label="Get directions to Aracena Auto Center"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
