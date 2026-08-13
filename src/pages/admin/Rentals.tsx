import { BadgeCheck, Car, ChevronRight, Clock3, DownloadIcon, SearchIcon, XCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PageLoader from "../../components/common/PageLoader"
import { getAdminBookings, getBookingsStats } from "../../services/adminServices"
import StatCard from "../../components/ui/StatCard"
import BookingsTable from "../../components/admin/BookingsTable"


interface bookingStats {
  completed: number,
  approved: number,
  cancelled: number,
  pending: number
}

const Rentals = () => {

  const [loading, setLoading] = useState(true)
    const [bookings, setBookings] = useState([])
  const [bookingStats, setBookingStats] = useState<bookingStats>({
    completed: 0,
    approved: 0,
    cancelled: 0,
    pending: 0
  })


  useEffect(() => {


    const fetchBookingsData = async (): Promise<void> => {
      try {
        const [BookingsStatsData, BookingsData] = await Promise.all([
          getBookingsStats(), 
          getAdminBookings()
        ]);
        setBookingStats(BookingsStatsData)
        setBookings(BookingsData)
        console.log(BookingsStatsData)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }
    fetchBookingsData()
  }, [])



  if (loading) {
    return (
      <PageLoader
        title="Loading Bookings"
        description="Fetching all bookings..."
      />
    )
  }



  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-heading font-semibold text-gray-900">
            Rentals
          </h2>
          <p className="mt-1 text-sm font-sans text-gray-500">
            Manage all vechicles rentals on this plaforms
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/admin/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <ChevronRight className="mx-1 h-4 w-4" />
            <span className="font-medium text-gray-900">Rentals</span>
          </nav>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Approved Bookings" value={bookingStats.approved} icon={Car} />
        <StatCard title="Completed Bookings" value={bookingStats.completed} icon={BadgeCheck} />
        <StatCard title="Pending Bookings" value={bookingStats.pending} icon={Clock3} />
        <StatCard title="Cancelled Bookings" value={bookingStats.cancelled} icon={XCircle} />
      </div>

           {/* ------------------------ Filters ------------------------ */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

          {/* Search */}
          <div className="relative w-full lg:flex-1">
            <SearchIcon
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search booking..."
              className="w-full sm:w-md rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          {/* Filters */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:w-auto lg:shrink-0">

            {/* Status */}
            <select
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 lg:w-36"
            >
              <option value="">All Status</option>
              <option value="active">compeleted</option>
              <option value="inactive">approved</option>
              <option value="pending">Pending</option>
              <option value="banned">cancelled</option>
            </select>

                    {/* Vehicle Type */}
            <select
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100 lg:w-36"
            >
              <option value="">All Types</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
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

      <div>
         <BookingsTable bookings={bookings}/>
      </div>

    </div>

  )
}

export default Rentals