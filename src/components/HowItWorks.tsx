import React from "react"
import { Search, CalendarDays, CreditCard, Car } from "lucide-react"

interface StepItem {
  icon: React.ElementType
  title: string
  description: string
}

const steps: StepItem[] = [
  {
    icon: Search,
    title: "Find the Perfect Car",
    description:
      "Browse a wide range of vehicles tailored to your needs. Filter by location, price, and availability to find the right match.",
  },
  {
    icon: CalendarDays,
    title: "Book or Buy Instantly",
    description:
      "Choose rental dates or proceed to purchase your car with a seamless and fast process built for convenience.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Complete your transaction with confidence using our secure and trusted payment system.",
  },
  {
    icon: Car,
    title: "Pick Up & Drive",
    description:
      "Pick up your car or have it delivered to your location and enjoy a smooth driving experience.",
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-15">
      <div className="max-w-6xl mx-auto px-4 bg-gray-50 rounded-2xl py-12">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-heading">
            How <span className="text-amber-500">DriveHub</span> Works
          </h2>

          <p className="text-gray-600 mt-5 text-lg font-sans">
            Renting or buying a car has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const reverse = index % 2 !== 0

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* TEXT */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">

                    {/* ICON */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-100">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>

                    {/* STEP */}
                    <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
                      Step {index + 1}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg font-sans">
                    {step.description}
                  </p>
                </div>

                {/* VISUAL */}
                <div className="flex-1">
                  <div className="w-full h-72 md:h-80 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 text-sm font-sans">
                    {/* Replace with real UI screenshot */}
                    Product Preview
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-28">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
            Ready to get started?
          </h3>

          <p className="text-gray-600 mb-6 font-sans">
            Browse available cars and experience a smarter way to rent or buy.
          </p>

          <button className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl text-lg font-medium transition shadow-md hover:shadow-lg font-sans">
            Browse Cars
          </button>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks