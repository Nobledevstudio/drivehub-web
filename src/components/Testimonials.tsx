import React from "react"
import { Star } from "lucide-react"
import { assets } from "../assets/asset.ts"

interface TestimonialItem {
  name: string
  role: string
  comment: string
  image: string
  rating: number
}

const testimonials: TestimonialItem[] = [
  {
    name: "John Doe",
    role: "Customer",
    comment:
      "DriveHub made it so easy to find and rent a car. The process was smooth and fast!",
    image: assets.user_1,
    rating: 5,
  },
  {
    name: "Sarah Ahmed",
    role: "Customer",
    comment:
      "The verified listings gave me confidence. I always find quality cars here.",
    image: assets.user_1,
    rating: 5,
  },
  {
    name: "Michael Smith",
    role: "Dealer",
    comment:
      "This platform helped me reach more customers nationwide. Great experience!",
    image: assets.user_1,
    rating: 5,
  },
]

// ⭐ Star component
const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mt-3">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-amber-400 fill-amber-400"
        />
      ))}
    </div>
  )
}

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mt-4">
            Real feedback from people using DriveHub every day
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300"
            >

              {/* QUOTE MARK */}
              <div className="absolute top-4 right-5 text-5xl text-amber-100 font-bold">
                “
              </div>

              {/* COMMENT */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {item.comment}
              </p>

              {/* STARS */}
              <Stars rating={item.rating} />

              {/* USER */}
              <div className="mt-6 flex items-center gap-4">

                {/* Avatar with ring */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-200"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                {/* INFO */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection