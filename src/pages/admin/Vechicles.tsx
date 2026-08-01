import {
  BadgeCheck,
  CarIcon,
  ChevronRight,
  CircleCheckBig,
  CircleX,
  Clock3,
  DownloadIcon,
  SearchIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { getAllCars, getCarsStats } from "../../services/adminServices";
import StatCard from "../../components/ui/StatCard";
import PageLoader from "../../components/common/PageLoader";
import VechiclesTables from "../../components/admin/VechiclesTables";

interface CarsStats {
  totalCars: number;
  activeCars: number;
  pendingApproval: number;
  soldCars: number;
  rejectedCars: number;
}

const Vechicles = () => {
  const [loading, setLoading] = useState(true);

  const [carsStats, setCarsStats] = useState<CarsStats>({
    totalCars: 0,
    activeCars: 0,
    pendingApproval: 0,
    soldCars: 0,
    rejectedCars: 0,
  });

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCarsStats = async (): Promise<void> => {
      try {
        const [carsStatsData, carsData] = await Promise.all([
          getCarsStats(),
          getAllCars(),
        ]);

        setCarsStats(carsStatsData);
        setCars(carsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarsStats();
  }, []);

  if (loading) {
    return (
      <PageLoader
        title="Loading Vehicles"
        description="Fetching available cars..."
      />
    );
  }

  return (
    <div className="w-full">
      {/* ------------------------ Header ------------------------ */}
      <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div className="min-w-0">
          <h2 className="font-heading text-xl font-semibold text-gray-900 sm:text-2xl">
            Vehicles
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage all vehicles on the platform.
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center self-start text-xs text-gray-500 sm:text-sm md:self-auto">
          <span>Dashboard</span>

          <ChevronRight className="mx-1 h-4 w-4 shrink-0" />

          <span className="font-medium text-gray-900">
            Vehicles
          </span>
        </nav>
      </div>

      {/* ------------------------ Vehicle Stats ------------------------ */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <StatCard
          title="Total Cars"
          value={carsStats.totalCars}
          icon={CarIcon}
        />

        <StatCard
          title="Active Cars"
          value={carsStats.activeCars}
          icon={BadgeCheck}
        />

        <StatCard
          title="Pending Approval"
          value={carsStats.pendingApproval}
          icon={Clock3}
        />

        <StatCard
          title="Sold Cars"
          value={carsStats.soldCars}
          icon={CircleCheckBig}
        />

        <StatCard
          title="Rejected Cars"
          value={carsStats.rejectedCars}
          icon={CircleX}
        />
      </div>

      {/* ------------------------ Filters ------------------------ */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          {/* Search */}
          <div className="relative w-full lg:flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Filters */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:w-auto lg:shrink-0">
            {/* Status */}
            <select
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 lg:w-36"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="sold">Sold</option>
            </select>

            {/* Vehicle Type */}
            <select
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 lg:w-36"
            >
              <option value="">All Types</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
            </select>

            {/* Fuel Type */}
            <select
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 lg:w-40"
            >
              <option value="">All Fuel Types</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
            </select>

          </div>

          {/* Export */}
          <button
            type="button"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 sm:w-auto lg:w-auto"
          >
            <DownloadIcon className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* ------------------------ Vehicles Table ------------------------ */}
      <div className="mt-5 w-full">
        <VechiclesTables cars={cars} />
      </div>
    </div>
  );
};

export default Vechicles;
