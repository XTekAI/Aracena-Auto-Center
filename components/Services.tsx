import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        id: 'maintenance',
        title: 'General Maintenance',
        desc: "Oil changes, preventive maintenance, factory-scheduled service, and multi-point inspections to keep your car running perfectly.",
        img: '/images/service-maintenance.jpg',
        imgAlt: 'Aracena Auto Center mechanic performing oil change and scheduled vehicle maintenance in Trenton NJ',
        slug: '/services/maintenance-trenton-nj',
    },
    {
        id: 'electrical',
        title: 'Electrical & Battery',
        desc: "Battery testing and replacement, and full charging system diagnostics and service for all vehicle makes and models.",
        img: '/images/service-electrical.jpg',
        imgAlt: 'Auto electrical system diagnostics and battery testing at Aracena Auto Center in Trenton NJ',
        slug: '/services/electrical-battery-trenton-nj',
    },
    {
        id: 'brakes',
        title: 'Brake Services',
        desc: "Full brake inspections, pad and rotor replacement, and complete brake system repair for maximum stopping power and safety.",
        img: '/images/service-brakes.jpg',
        imgAlt: 'Professional brake repair and rotor replacement at Aracena Auto Center in Trenton NJ',
        slug: '/services/brake-repair-trenton-nj',
    },
    {
        id: 'ac-heating',
        title: 'AC & Heating',
        desc: "Auto AC diagnostics, recharge, and heater repair for year-round driving comfort in any weather conditions.",
        img: '/images/service-ac.jpg',
        imgAlt: 'Auto AC repair diagnostics and recharge service at Aracena Auto Center in Trenton NJ',
        slug: '/services/ac-repair-trenton-nj',
    },
    {
        id: 'engine',
        title: 'Engine Diagnostics',
        desc: "Check engine light diagnosis using advanced computer diagnostics for precise troubleshooting and repair solutions.",
        img: '/images/service-engine.jpg',
        imgAlt: 'Computerized engine diagnostics and check engine light repair at Aracena Auto Center in Trenton NJ',
        slug: '/services/engine-diagnostics-trenton-nj',
    },
    {
        id: 'suspension',
        title: 'Steering & Suspension',
        desc: "Shock and strut replacement, wheel alignment, and suspension repair for a smooth ride and precise handling.",
        img: '/images/service-suspension.jpg',
        imgAlt: 'Steering and suspension repair — shocks, struts and wheel alignment at Aracena Auto Center in Trenton NJ',
        slug: '/services/suspension-repair-trenton-nj',
    },
    {
        id: 'tires',
        title: 'Tires & Wheels',
        desc: "Professional tire replacement, rotation, and inspection to keep you safe on the road with maximum traction.",
        img: '/images/service-tires.jpg',
        imgAlt: 'Tire installation, rotation and wheel balancing at Aracena Auto Center in Trenton NJ',
        slug: '/services/tire-installation-trenton-nj',
    },
    {
        id: 'exhaust',
        title: 'Exhaust System',
        desc: "Muffler and exhaust repair and replacement to ensure your vehicle runs clean, quiet, and fuel-efficiently.",
        img: '/images/service-exhaust.jpg',
        imgAlt: 'Vehicle exhaust system and muffler repair service at Aracena Auto Center in Trenton NJ',
        slug: '/services/exhaust-repair-trenton-nj',
    },
    {
        id: 'glass',
        title: 'Auto Glass & Windshield',
        desc: "Windshield replacement, chip repair, and power window motor service for all vehicle makes and models.",
        img: '/images/service-glass.jpg',
        imgAlt: 'Auto glass and windshield repair at Aracena Auto Center in Trenton NJ',
        slug: '/services/auto-glass-trenton-nj',
    },
    {
        id: 'transmission',
        title: 'Transmission Repair',
        desc: "Automatic and manual transmission rebuilds, fluid flushes, and gear diagnostic services.",
        img: '/images/service-transmission.jpg',
        imgAlt: 'Transmission repair and maintenance at Aracena Auto Center in Trenton NJ',
        slug: '/services/transmission-repair-trenton-nj',
    },
]

export default function Services() {
    return (
        <section className="services section" id="services" aria-labelledby="services-title">
            <div className="container">
                <header className="services-header">
                    <p className="section-label" aria-hidden="true">Dealership Quality, Local Price</p>
                    <h2 className="section-title" id="services-title">
                        Auto Repair Services in Trenton, NJ
                    </h2>
                    <p className="section-subtitle">
                        From routine maintenance to complex structural repairs, our ASE-certified techniques ensure your vehicle stays safe and reliable.
                    </p>
                </header>

                <ul className="services-grid" aria-label="Auto repair services">
                    {services.map((s) => (
                        <li key={s.id}>
                            <div className="uiverse-card">
                                <div className="service-img-wrap">
                                    <Image
                                        src={s.img}
                                        alt={s.imgAlt}
                                        width={400}
                                        height={240}
                                        quality={80}
                                        loading="lazy"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="content">
                                    <h3 className="heading font-heading">{s.title}</h3>
                                    <p className="para">{s.desc}</p>
                                    <Link href={s.slug} className="btn" aria-label={`Learn more about ${s.title} in Trenton NJ`}>
                                        <span>LEARN MORE</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
