import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Legal Information | Aracena Auto Center',
    description: 'Privacy Policy and Terms of Service for Aracena Auto Center in Trenton, NJ.',
}

export default function LegalPage() {
    return (
        <>
            <Header />
            <main className="bg-white min-h-screen">
                {/* Spacer for Fixed Header */}
                <div className="h-24 sm:h-32 bg-[#0A1628]"></div>

                {/* Hero section */}
                <section className="bg-[#0A1628] py-16 sm:py-24 border-b border-yellow-500/10">
                    <div className="container px-4 text-center sm:text-left">
                        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase leading-tight">
                            Legal <span className="text-yellow-400">Information</span>
                        </h1>
                        <p className="text-xl text-gray-300 border-l-4 border-yellow-500 pl-6 italic max-w-2xl leading-relaxed font-medium">
                            Aracena Auto Center is committed to transparency and protecting your privacy.
                        </p>
                    </div>
                </section>

                <section className="section py-20">
                    <div className="container px-4">
                        <div className="grid lg:grid-cols-2 gap-16">

                            {/* Privacy Policy */}
                            <div id="privacy-policy">
                                <p className="section-label" style={{ color: 'var(--yellow-dark)' }}>Privacy</p>
                                <h2 className="text-3xl font-black text-[#0A1628] mb-8 uppercase">Privacy Policy</h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed font-bold">
                                    <p>
                                        At Aracena Auto Center, we collect information such as your name, email address, and phone number when you request an estimate or book an appointment.
                                    </p>
                                    <p>
                                        This information is used exclusively to provide you with the services requested, communicate about your vehicle repairs, and improve our customer service.
                                    </p>
                                    <p>
                                        We values your trust and do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
                                    </p>
                                    <p>
                                        By using our site, you consent to our website privacy policy.
                                    </p>
                                </div>
                            </div>

                            {/* Terms of Use */}
                            <div id="terms-of-use">
                                <p className="section-label" style={{ color: 'var(--yellow-dark)' }}>Terms</p>
                                <h2 className="text-3xl font-black text-[#0A1628] mb-8 uppercase">Terms of Use</h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed font-bold">
                                    <p>
                                        All service estimates provided through this website are preliminary. A final binding quote will only be provided after a physical inspection of the vehicle by our certified mechanics at our Trenton, NJ facility.
                                    </p>
                                    <p>
                                        Vehicle safety is our priority. We reserve the right to recommend additional safety repairs discovered during initial service. Aracena Auto Center is not responsible for pre-existing conditions not disclosed at the time of intake.
                                    </p>
                                    <p>
                                        Payment is due upon completion of repairs unless prior arrangements have been made. We accept all major credit cards and cash.
                                    </p>
                                    <p>
                                        We provide warranties on most parts and labor. Please check with your representative for specific warranty durations related to your particular repair.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-20 p-10 bg-[#0A1628] rounded-[3rem] text-center border-b-8 border-yellow-500">
                            <h3 className="text-2xl font-black text-white mb-6 uppercase">Have Questions?</h3>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                If you have any questions regarding our policies, please contact us directly.
                            </p>
                            <Link href="/#contact" className="btn inline-flex">
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
