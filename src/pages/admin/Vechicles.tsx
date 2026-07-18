import { BadgeCheck, CarIcon, ChevronRight, CircleCheckBig, CircleX, Clock3, DownloadIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getCarsStats } from "../../services/adminServices";
import StatCard from "../../components/ui/StatCard";
import PageLoader from "../../components/common/PageLoader";

interface CarsStats {
  totalCars: number,
  activeCars: number,
  pendingApproval: number,
  soldCars: number,
  rejectedCars: number
}


const Vechicles = () => {


  const [loading, setLoading] = useState(true);
  const [carsStats, setCarsStats] = useState<CarsStats>({
    totalCars: 0,
    activeCars: 0,
    pendingApproval: 0,
    soldCars: 0,
    rejectedCars: 0
  })

  useEffect(() => {
    const fetchCarsStats = async (): Promise<void> => {
      try {
        const [carsStatsData] = await Promise.all([
          getCarsStats()
        ])
        setCarsStats(carsStatsData)
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false)
      }
    }
    fetchCarsStats()
  }, [])



  if (loading) {
    return (
      <PageLoader
        title="Loading Vehicles"
        description="Fetching available cars..."
      />
    )
  }


  return (
    <div>
      {/* ------------------------ Users Header ------------------------ */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-heading font-semibold text-gray-900">
            Vechicles
          </h2>
          <p className="mt-1 text-sm font-sans text-gray-500">
            Manage all vehicles on the platform.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500">
            <span>Dashboard</span>
            <ChevronRight className="mx-1 h-4 w-4" />
            <span className="font-medium text-gray-900">Vechicles</span>
          </nav>
        </div>
      </div>

      {/* ------------------------ Vehicle Stats ------------------------ */}

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <StatCard title="Total Cars" value={carsStats.totalCars} icon={CarIcon} />
        <StatCard title="Active Cars" value={carsStats.activeCars} icon={BadgeCheck} />
        <StatCard title="Pending Aprroval" value={carsStats.pendingApproval} icon={Clock3} />
        <StatCard title="Sold Cars" value={carsStats.soldCars} icon={CircleCheckBig} />
        <StatCard title="Rejected Cars" value={carsStats.soldCars} icon={CircleX} />
      </div>


      {/* ------------------------ Filters ------------------------ */}
      <div className="mt-6 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex flex-1 flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative min-w-62.5 flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Status Filter */}
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-amber-500">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Pending</option>
            <option value="pending">Rejected</option>
            <option value="banned">Sold</option>
          </select>
          {/* Status Filter */}
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-amber-500">
            <option value="">All Types</option>
            <option value="sedan">Sedan</option>
            <option value="sedan">SUV</option>
          </select>
          {/* Status Filter */}
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-amber-500">
            <option value="">All Fuel Types</option>
            <option value="active">Petrol</option>
            <option value="inactive">Deisel</option>
            <option value="pending">Electric</option>
          </select>
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-amber-500">
            <option value="">All Dealers</option>
            <option value="active">Ola motors</option>
            <option value="inactive">Amazing cars</option>
            <option value="pending">Toheeed cars limited</option>
          </select>

        </div>

        {/* Right */}
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
          <DownloadIcon className="h-4 w-4" />
          Export
        </button>
      </div>


      <div>

      </div>

    </div>
  )
}

export default Vechicles