import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import ServiceAreas from '@/components/ServiceAreas'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyChooseUs />
                <HowItWorks />
                <Testimonials />
                <ServiceAreas />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
