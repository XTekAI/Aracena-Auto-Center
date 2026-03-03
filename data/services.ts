export interface ServiceDetail {
    slug: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    commonIssues: string[];
    whyAracena: string;
    benefits: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
    'maintenance-trenton-nj': {
        slug: 'maintenance-trenton-nj',
        title: 'General Maintenance',
        description: 'Preventive maintenance is the key to vehicle longevity. At Aracena Auto Center, we provide comprehensive oil changes, fluid checks, and factory-scheduled maintenance to keep your car running like new.',
        image: '/images/service-maintenance.jpg',
        imageAlt: 'General vehicle maintenance at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Engine overheating due to old coolant',
            'Increased engine wear from dirty oil',
            'Poor fuel economy from clogged filters',
            'Unexpected breakdowns due to skipped inspections'
        ],
        whyAracena: 'We use premium synthetic oils and OEM-grade filters. Our mechanics perform a 30-point inspection with every service to catch small problems before they become expensive repairs.',
        benefits: [
            'Extended engine life',
            'Better gas mileage',
            'Higher resale value',
            'Peace of mind on the road'
        ],
    },
    'electrical-battery-trenton-nj': {
        slug: 'electrical-battery-trenton-nj',
        title: 'Electrical & Battery',
        description: 'Modern vehicles are rolling computers. When your electrical system fails, you need experts who understand complex wiring and sensitive electronics.',
        image: '/images/service-electrical.jpg',
        imageAlt: 'Electrical system diagnostics at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Car won\'t start or clicks when turning the key',
            'Dimming headlights or flickering interior lights',
            'Check engine or battery warning lights',
            'Blown fuses and power accessory failures'
        ],
        whyAracena: 'Aracena Auto Center technicians use advanced diagnostic scanners to pinpoint electrical shorts and battery drains quickly, saving you time and money on unnecessary part replacements.',
        benefits: [
            'Reliable winter starts',
            'Proper charging system function',
            'Protection for onboard computers',
            'Longer battery lifespan'
        ],
    },
    'brake-repair-trenton-nj': {
        slug: 'brake-repair-trenton-nj',
        title: 'Brake Repair & Services',
        description: 'Nothing is more critical to your safety than your brakes. We provide full-service brake repair, from simple pad replacements to complex ABS diagnostics.',
        image: '/images/service-brakes.jpg',
        imageAlt: 'Brake system repair at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Squealing or grinding noises when braking',
            'Soft or "spongy" brake pedal',
            'Steering wheel vibration during stops',
            'Brake warning light on the dashboard'
        ],
        whyAracena: 'We don\'t just "slap on pads." We inspect the entire hydraulic system, resurface or replace rotors, and perform a full brake fluid flush to ensure maximum stopping power.',
        benefits: [
            'Shorter stopping distances',
            'Elimination of brake noise',
            'Prevention of rotor damage',
            'Safe driving in all weather'
        ],
    },
    'ac-repair-trenton-nj': {
        slug: 'ac-repair-trenton-nj',
        title: 'AC & Heating Repair',
        description: 'Keep your cabin comfortable in the Jersey heat and the Trenton winters. We specialize in both refrigerant recharges and complex HVAC system repairs.',
        image: '/images/service-ac.jpg',
        imageAlt: 'Auto AC and heating repair at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'AC blowing warm air',
            'Strange smells from the vents',
            'Weak airflow or noisy blower motor',
            'Defroster not clearing the windshield'
        ],
        whyAracena: 'We use environmentally friendly evacuation and recharge machines. Our experts are skilled at finding elusive leaks that other shops often miss.',
        benefits: [
            'Ice cold air in summer',
            'Powerful defrosting in winter',
            'Fresh, clean cabin air',
            'Improved fuel efficiency'
        ],
    },
    'engine-diagnostics-trenton-nj': {
        slug: 'engine-diagnostics-trenton-nj',
        title: 'Engine Diagnostics',
        description: 'That "Check Engine" light shouldn\'t be ignored. Our state-of-the-art diagnostic equipment communicates directly with your car\'s computer to find the root cause.',
        image: '/images/service-engine.jpg',
        imageAlt: 'Computerized engine diagnostics at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Check engine light illumination',
            'Engine stalling or rough idling',
            'Loss of power or hesitation',
            'Failed emissions/smog tests'
        ],
        whyAracena: 'While others simply clear codes, Aracena experts interpret the data to fix the underlying mechanical or sensor issue. Precision is our standard.',
        benefits: [
            'Lower repair costs via early detection',
            'Optimized engine performance',
            'Pass NJ state inspections',
            'Prevention of major engine failure'
        ],
    },
    'suspension-repair-trenton-nj': {
        slug: 'suspension-repair-trenton-nj',
        title: 'Steering & Suspension',
        description: 'A smooth ride is about more than comfort—it\'s about control. We repair shocks, struts, and steering components to keep your car stable and safe.',
        image: '/images/service-suspension.jpg',
        imageAlt: 'Suspension and steering repair at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Excessive bouncing over bumps',
            'Pulling to one side while driving',
            'Uneven or rapid tire wear',
            'Clunking noises when turning'
        ],
        whyAracena: 'We use heavy-duty components designed to handle the tough road conditions in the Trenton area. Our alignments ensure your tires stay on the road where they belong.',
        benefits: [
            'Improved vehicle stability',
            'Smoother, quieter ride',
            'Longer tire life',
            'Precision steering response'
        ],
    },
    'tire-installation-trenton-nj': {
        slug: 'tire-installation-trenton-nj',
        title: 'Tires & Wheels',
        description: 'Your tires are the only part of your car that touches the road. We help you choose the right tires for your driving style and budget.',
        image: '/images/service-tires.jpg',
        imageAlt: 'Tire installation and service at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Vibration at highway speeds',
            'Low tire pressure (TPMS) lights',
            'Balding or cracked tire sidewalls',
            'Hydroplaning in wet weather'
        ],
        whyAracena: 'We offer professional mounting, high-speed balancing, and computerized alignments. We don\'t just sell tires; we ensure they are installed for maximum safety.',
        benefits: [
            'Maximum traction and safety',
            'Elimination of vibration',
            'Improved fuel economy',
            'Quiet highway driving'
        ],
    },
    'exhaust-repair-trenton-nj': {
        slug: 'exhaust-repair-trenton-nj',
        title: 'Exhaust System',
        description: 'A faulty exhaust is more than just loud—it can be dangerous. We repair mufflers, catalytic converters, and exhaust leaks to protect you and the environment.',
        image: '/images/service-exhaust.jpg',
        imageAlt: 'Exhaust and muffler repair at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Loud roaring or hissing sounds',
            'Rattling noises under the vehicle',
            'Smell of exhaust fumes inside the car',
            'Decreased power and fuel efficiency'
        ],
        whyAracena: 'We specialize in custom exhaust solutions and catalytic converter protection. Our repairs ensure your vehicle runs quiet and meets all local emissions standards.',
        benefits: [
            'Quiet and comfortable ride',
            'Better engine performance',
            'Zero toxic fumes in cabin',
            'Environmentally friendly operation'
        ],
    },
    'auto-glass-trenton-nj': {
        slug: 'auto-glass-trenton-nj',
        title: 'Auto Glass & Windshield',
        description: 'A small chip today is a spiderweb crack tomorrow. We offer professional windshield replacement and glass repair using high-quality OEM-spec materials.',
        image: '/images/service-glass.jpg',
        imageAlt: 'Auto glass and windshield replacement at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Cracked or chipped windshields',
            'Broken side or rear windows',
            'Leaking window seals',
            'Malfunctioning power window motors'
        ],
        whyAracena: 'We use premium adhesives that cure quickly, getting you back on the road sooner. Our glass meet all safety standards for structural roof support.',
        benefits: [
            'Crystal clear visibility',
            'Structural safety restored',
            'Fast turnaround time',
            'Watertight seal guarantee'
        ],
    },
    'transmission-repair-trenton-nj': {
        slug: 'transmission-repair-trenton-nj',
        title: 'Transmission Repair',
        description: 'Hard shifting? Slipping gears? Our transmission specialists diagnose and repair complex automatic and manual gearboxes to keep you moving.',
        image: '/images/service-transmission.jpg',
        imageAlt: 'Transmission repair and maintenance at Aracena Auto Center in Trenton NJ',
        commonIssues: [
            'Gears slipping while driving',
            'Delayed or harsh shifting',
            'Leaking red transmission fluid',
            'Burning smell or grinding noises'
        ],
        whyAracena: 'We perform deep-dive diagnostics before recommending a rebuild. Sometimes a simple fluid flush or solenoid replacement is all you need.',
        benefits: [
            'Smooth, reliable shifting',
            'Prevention of total failure',
            'Improved fuel efficiency',
            'Extended gearbox lifespan'
        ],
    },
};
