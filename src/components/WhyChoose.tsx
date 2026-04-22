import React from "react"
import { WhyChooseUs } from "./WhyChooseUsData"

const WhyChoose: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose <span className="text-amber-500">DriveHub</span>?
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            A smarter way to buy and rent cars — built for speed, trust, and convenience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {WhyChooseUs.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 hover:shadow-xl transition duration-300"
            >
              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 transition mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* HOVER LINE */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChoose