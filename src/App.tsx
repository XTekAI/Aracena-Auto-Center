import React from "react"
import { motion } from "motion/react"
import { BeamsBackground } from "@/components/ui/beams-background"
import { LucideIcon, Car, Sparkles, Hammer, Shield, Phone, Menu, X, Battery, Droplets, Thermometer, Gauge, Settings, Wind, Scissors, Settings2 } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="font-heading font-black text-2xl tracking-tighter text-white">
                    ARACENA<span className="block text-xs font-normal text-blue-500 tracking-[0.2em] -mt-1">AUTO CENTER</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 items-center">
                    <a href="#about" className="text-sm font-medium text-white/70 hover:text-blue-500 transition-colors">About</a>
                    <a href="#services" className="text-sm font-medium text-white/70 hover:text-blue-500 transition-colors">Services</a>
                    <a href="#contact" className="uiverse-btn">
                        <span>GET ESTIMATE</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-white/5 py-8 px-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 z-50">
                    <a
                        href="#about"
                        className="text-lg font-medium text-white/70"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </a>
                    <a
                        href="#services"
                        className="text-lg font-medium text-white/70"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="uiverse-btn w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        <span>GET ESTIMATE</span>
                    </a>
                </div>
            )}
        </nav>
    )
}

const ServiceCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: LucideIcon }) => (
    <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 group">
        <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
            <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="font-heading font-bold text-lg mb-2 text-white">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed font-light">{description}</p>
    </div>
)

export default function App() {
    return (
        <div className="bg-neutral-950 text-white selection:bg-blue-500/30 font-sans">
            <Navbar />

            <section className="relative">
                <BeamsBackground className="h-screen" />
            </section>

            <section id="about" className="py-24 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Trust the Experts in Trenton, NJ</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
                            Reliable Auto Repair in Trenton New Jersey
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                            Aracena Auto Center is your trusted local mechanic providing reliable, affordable, and professional automotive repair services in Trenton, New Jersey. Conveniently located on South Broad Street, we serve drivers throughout <strong>Mercer County</strong> and nearby Pennsylvania communities.
                        </p>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                            Serving <strong>Hamilton Township</strong>, <strong>Ewing Township</strong>, <strong>Lawrence Township</strong>, <strong>Robbinsville</strong>, <strong>Bordentown</strong>, <strong>Morrisville</strong>, and <strong>Yardley</strong>. We specialize in diagnosing vehicle problems quickly and performing high-quality repairs using dependable parts.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                                <span className="block text-4xl font-black font-heading text-blue-500 mb-1">20+</span>
                                <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Years Experience</span>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                                <span className="block text-4xl font-black font-heading text-blue-500 mb-1">Premium</span>
                                <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Parts Used</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Experienced technicians",
                                "Honest assessments",
                                "Competitive pricing",
                                "Fast turnaround times",
                                "Commitment to customer satisfaction"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-neutral-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                            <img
                                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
                                alt="Aracena Auto Center Trenton Mechanic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-2xl shadow-2xl border border-blue-400/20">
                            <p className="text-white font-heading font-black text-xl italic leading-none mb-1">SINCE 2016</p>
                            <p className="text-blue-100/70 text-xs font-bold uppercase tracking-widest">Quality Service</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="services" className="py-24 px-8 bg-neutral-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">Complete Maintenance & Repair</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 tracking-tight">Our Professional Services</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            Comprehensive auto shop near Trenton NJ for domestic and foreign vehicles. From routine maintenance to major car repair in Trenton NJ.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={Droplets}
                            title="General Maintenance"
                            description="Oil changes, preventive maintenance, factory-scheduled service, and multi-point inspections."
                        />
                        <ServiceCard
                            icon={Battery}
                            title="Electrical & Battery"
                            description="Battery testing and replacement, and full charging system diagnostics and service."
                        />
                        <ServiceCard
                            icon={Scissors}
                            title="Brake Services"
                            description="Full brake inspections, pad and rotor replacement, and complete brake system repair."
                        />
                        <ServiceCard
                            icon={Thermometer}
                            title="AC & Heating"
                            description="Auto AC diagnostics, recharge, and heater repair for year-round driving comfort."
                        />
                        <ServiceCard
                            icon={Gauge}
                            title="Engine Diagnostics"
                            description="Check engine light diagnosis using advanced computer diagnostics for precise troubleshooting."
                        />
                        <ServiceCard
                            icon={Settings}
                            title="Steering & Suspension"
                            description="Shock and strut replacement, wheel alignment, and suspension repair for a smooth ride."
                        />
                        <ServiceCard
                            icon={Car}
                            title="Tires & Wheels"
                            description="Professional tire replacement, rotation, and inspection to keep you safe on the road."
                        />
                        <ServiceCard
                            icon={Wind}
                            title="Exhaust System"
                            description="Muffler and exhaust repair and replacement to ensure your vehicle runs clean."
                        />
                        <ServiceCard
                            icon={Settings2}
                            title="Transmission Services"
                            description="Expert transmission maintenance and repair for long-lasting vehicle performance."
                        />
                        <ServiceCard
                            icon={Shield}
                            title="Collision Repair"
                            description="High-quality bodywork and structural repairs using industry-standard techniques."
                        />
                        <ServiceCard
                            icon={Sparkles}
                            title="Custom Painting"
                            description="Perfect color matching and premium finishes to restore your car's original look."
                        />
                        <ServiceCard
                            icon={Hammer}
                            title="Glass Services"
                            description="Professional windshield replacement and automotive glass repair services."
                        />
                    </div>
                </div>
            </section>

            <section id="contact" className="py-24 px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <div className="bg-neutral-900/50 p-10 md:p-16 rounded-3xl border border-white/5">
                        <h2 className="text-3xl font-heading font-black mb-8">Visit Our Auto Shop in Trenton</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Call Us</p>
                                    <a href="tel:+16093418565" className="text-2xl font-bold hover:text-blue-500 transition-colors">609 341 8565</a>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Droplets className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Our Location</p>
                                    <a
                                        href="https://www.google.com/maps/place/Aracena+Auto+Center/@40.2001552,-74.7335531,17z/data=!4m16!1m9!3m8!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!2sAracena+Auto+Center!8m2!3d40.2003866!4d-74.7334506!9m1!1b1!16s%2Fg%2F11j_zw9jqk!3m5!1s0x89c15997b8097a1f:0xb677ac46ce6503ac!8m2!3d40.2003866!4d-74.7334506!16s%2Fg%2F11j_zw9jqk?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-medium leading-relaxed hover:text-blue-500 transition-colors"
                                    >
                                        1650 South Broad Street<br />
                                        Trenton, New Jersey 08610
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Settings className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Shop Hours</p>
                                    <p className="text-xl font-medium leading-relaxed font-heading">
                                        Monday - Saturday<br />
                                        8:00 AM - 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                            <p className="text-sm text-neutral-400 italic">"Conveniently located for drivers in Trenton and all surrounding Mercer County communities."</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="bg-gradient-to-br from-blue-900/20 to-neutral-900 p-10 md:p-16 rounded-3xl border border-blue-500/20 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Need a Mechanic Near Trenton?</h2>
                            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                                Our team is ready to provide the professional car repair Trenton NJ drivers depend on. Experience fast turnaround times and high-quality workmanship today.
                            </p>
                            <a href="tel:+16093418565" className="uiverse-btn !inline-flex !w-auto">
                                <span>REQUEST APPOINTMENT</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-16 border-t border-white/5 text-center px-8 bg-neutral-950">
                <div className="max-w-7xl mx-auto">
                    <p className="font-heading font-black text-xl tracking-tighter text-white mb-6">
                        ARACENA<span className="text-blue-500 ml-2">AUTO CENTER</span>
                    </p>
                    <p className="text-neutral-600 text-sm max-w-xl mx-auto mb-8 leading-relaxed italic">
                        Serving Trenton, Hamilton, Ewing, Lawrence, Robbinsville, Bordentown, and Mercer County communities since 2016.
                    </p>
                    <p className="text-neutral-700 text-xs">
                        &copy; {new Date().getFullYear()} Aracena Auto Center. All rights reserved. | Auto Repair & Mechanics in Trenton NJ
                    </p>
                </div>
            </footer>
        </div>
    )
}
