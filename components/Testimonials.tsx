const reviews = [
    {
        id: 1,
        name: 'Marcus T.',
        initials: 'MT',
        color: '#0A1628',
        location: 'Trenton, NJ',
        date: 'January 2026',
        text: "Best auto repair shop in Trenton! I brought in my car for a brake job and they had it done same day. They showed me the worn pads before replacing them so I knew exactly what I was paying for. Honest, fast, and affordable — I won't go anywhere else.",
        service: 'Brake Repair',
    },
    {
        id: 2,
        name: 'Jasmine R.',
        initials: 'JR',
        color: '#0A1628',
        location: 'Hamilton Township, NJ',
        date: 'December 2025',
        text: "I was so impressed with how quickly they diagnosed my check engine light issue. The mechanic explained everything clearly and the price was way below what the dealership quoted me. Aracena Auto Center is my go-to mechanic near Trenton NJ from now on.",
        service: 'Engine Diagnostics',
    },
    {
        id: 3,
        name: 'David M.',
        initials: 'DM',
        color: '#0A1628',
        location: 'Ewing Township, NJ',
        date: 'November 2025',
        text: "I've been using Aracena for all my cars for 3 years. They always give me a fair price, the repair is done right, and they treat you like family. Finding a trustworthy mechanic in Mercer County is hard — but I found mine at Aracena.",
        service: 'General Maintenance',
    },
    {
        id: 4,
        name: 'Sofia L.',
        initials: 'SL',
        color: '#0A1628',
        location: 'Trenton, NJ',
        date: 'October 2025',
        text: "My AC stopped working right before summer and I panicked. Called Aracena and they got me in the next morning. AC is blowing ice cold now and the price was very reasonable. Great affordable auto repair in Trenton — highly recommend!",
        service: 'AC Repair',
    },
    {
        id: 5,
        name: 'Kevin A.',
        initials: 'KA',
        color: '#0A1628',
        location: 'Lawrence Township, NJ',
        date: 'September 2025',
        text: "Had a suspension issue making a terrible noise on the highway. Dropped my car off in the morning and got a call by noon — parts ordered, work done by 4pm. Super fast service and the ride is smooth as new. Very happy with Aracena Auto Center!",
        service: 'Suspension Repair',
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials section" id="testimonials" aria-labelledby="reviews-title">
            <div className="container">
                <header className="testimonials-header">
                    <p className="section-label" aria-hidden="true">Customer Reviews</p>
                    <h2 className="section-title" id="reviews-title">
                        What Trenton Drivers Are Saying
                    </h2>
                    <div className="testimonials-rating" aria-label="Overall rating: 4.6 out of 5 stars from 61 reviews">
                        <div className="rating-big" aria-hidden="true">4.6</div>
                        <div className="rating-info">
                            <div className="rating-stars" aria-hidden="true" style={{ color: 'var(--yellow)' }}>★★★★★</div>
                            <div className="rating-count">Based on <a href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2003907,-74.7360255,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px' }}>61 verified Google reviews</a></div>
                        </div>
                    </div>
                </header>

                <ul className="reviews-grid" aria-label="Customer testimonials">
                    {reviews.slice(0, 3).map((r) => (
                        <li key={r.id} className="review-card" itemScope itemType="https://schema.org/Review">
                            <meta itemProp="author" content={r.name} />
                            <meta itemProp="reviewRating" content="5" />
                            <div className="review-stars" aria-label="5 out of 5 stars" style={{ color: 'var(--yellow)' }}>★★★★★</div>
                            <blockquote className="review-text" itemProp="reviewBody">
                                &ldquo;{r.text}&rdquo;
                            </blockquote>
                            <div className="reviewer">
                                <div
                                    className="reviewer-avatar"
                                    style={{ background: 'var(--navy)' }}
                                    aria-hidden="true"
                                >
                                    {r.initials}
                                </div>
                                <div>
                                    <div className="reviewer-name">{r.name}</div>
                                    <div className="reviewer-info">{r.location} · {r.date}</div>
                                    <div className="verified-badge" style={{ color: '#10B981' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Verified · {r.service}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
