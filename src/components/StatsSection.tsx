import React, { useEffect, useState } from "react"
import { Car, Users, MapPin, ShieldCheck } from "lucide-react"

interface StatItem {
  icon: React.ElementType
  value: number
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  { icon: Car, value: 10000, label: "Cars Listed", suffix: "+" },
  { icon: Users, value: 5000, label: "Active Users", suffix: "+" },
  { icon: MapPin, value: 120, label: "Cities Covered", suffix: "+" },
  { icon: ShieldCheck, value: 99, label: "Trust Score", suffix: "%" },
]

const useCountUp = (end: number, duration = 1200) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return count
}

const StatCard = ({ icon: Icon, value, label, suffix }: StatItem) => {
  const count = useCountUp(value)

  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition group">

      {/* ICON */}
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 transition mb-4">
        <Icon className="w-5 h-5 text-amber-600" />
      </div>

      {/* NUMBER */}
      <h3 className="text-3xl font-bold text-gray-900">
        {count}
        {suffix}
      </h3>

      {/* LABEL */}
      <p className="text-gray-500 mt-2 text-sm">{label}</p>

      {/* subtle glow line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition origin-left rounded-b-2xl"></div>
    </div>
  )
}

const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Thousands Across the Country
          </h2>
          <p className="text-gray-600 mt-4">
            Real numbers that reflect the growth of DriveHub marketplace
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>

        {/* TRUST LINE */}
        <p className="text-center text-sm text-gray-400 mt-10">
          Secure • Verified Listings • Nationwide Coverage
        </p>

      </div>
    </section>
  )
}

export default StatsSection