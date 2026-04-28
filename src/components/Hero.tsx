import type React from "react"
import { assets } from "../assets/asset"

const Hero: React.FC = () => {
  return (
    <section className="w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24 py-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 text-center lg:text-left">

            {/* badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="px-4 py-1 text-xs font-semibold tracking-wide bg-amber-100 text-amber-600 rounded-full font-sans">
                #1 Car Marketplace in Nigeria
              </span>
            </div>

            {/* headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-heading">
              Buy or Rent Cars <br />
              <span className="text-amber-500">Without Stress</span>
            </h1>

            {/* subtext */}
            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-sans">
           Discover verified vehicles, compare prices, and book instantly from trusted dealers across Nigeria.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-2 flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-xl shadow-md border border-gray-100">

              <input
                type="text"
                placeholder="Search by brand, model, or location (e.g. Toyota Camry Lagos)"
                className="flex-1 px-4 py-3 outline-none text-sm"
              />

              <button className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition cursor-pointer font-sans">
                Search
              </button>

            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-3">

              <button className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition font-sans">
                Browse Cars
              </button>

              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:border-amber-400 hover:text-amber-500 transition font-sans">
                How It Works
              </button>

            </div>

            {/* trust line */}
            <p className="text-sm text-gray-400 font-sans">
              Trusted by 10,000+ users • Verified listings • Secure payments
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            {/* background glow */}
            <div className="absolute -z-10 w-87.5 h-87.5 bg-amber-300 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={assets.hero_car_image}
              alt="Hero Car"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
            />

          </div>

      </div>

    </section>
  )
}

export default Hero