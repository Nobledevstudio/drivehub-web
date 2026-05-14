import Hero from "../components/Hero"
import WhyChoose from "../components/WhyChoose"
import HowItWorks from "../components/HowItWorks"
import StatsSection from "../components/StatsSection"
import TestimonialsSection from "../components/Testimonials"
import FeaturedCars from "../components/FeaturedCars"
import HotDeals from "../components/HotDeals"

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen over-flow-x-hidden">
      <main className="grow">
        <div className="max-w-7xl mx-auto px-4">
            <Hero/>
            <WhyChoose/>
            <FeaturedCars/>
            <HowItWorks/>
            <HotDeals/>
            <StatsSection/>
            <TestimonialsSection/>
        </div>
      </main>

    </div>
  )
}