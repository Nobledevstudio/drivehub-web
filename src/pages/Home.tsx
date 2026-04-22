import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Hero from "../components/Hero"
import WhyChoose from "../components/WhyChoose"
import HowItWorks from "../components/HowItWorks"
import StatsSection from "../components/StatsSection"
import TestimonialsSection from "../components/Testimonials"

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 py-10">
            <Hero/>
            <WhyChoose/>
            <HowItWorks/>
            <StatsSection/>
            <TestimonialsSection/>
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}