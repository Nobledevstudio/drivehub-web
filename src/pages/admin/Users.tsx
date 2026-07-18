import { ChevronRight, User2, PlusIcon, UsersIcon, ShoppingBagIcon, SearchIcon, DownloadIcon, Calendar, } from "lucide-react"
import { useEffect, useState } from "react"
import { getUsers, getUsersStats } from "../../services/adminServices";
import StatCard from "../../components/ui/StatCard";
import DatePicker from "react-datepicker";
import UsersTable from "../../components/admin/UsersTable";
import PageLoader from "../../components/common/PageLoader";

interface UserStats {
  totalUsers: number;
  customers: number;
  dealers: number;
  admins: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "customer" | "dealer" | "admin";
  phone: string;
  status: "active" | "pending" | "inactive" | "banned";
  joinedDate: string;
}


const Users = () => {

  const [loading, setLoading] = useState(true)
  const [userStats, setUserStats] = useState<UserStats>({
    totalUsers: 0,
    customers: 0,
    dealers: 0,
    admins: 0,
  })

  const [joinedDate, setJoinedDate] = useState<Date | null>(null);
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {

    const fetchUsersData = async (): Promise<void> => {

      try {
        const [UsersStatsData, UsersData] = await Promise.all([
          getUsersStats(),
          getUsers()
        ]);

        setUserStats(UsersStatsData.data);
        setUsers(UsersData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };

    fetchUsersData();
  }, []);

  if (loading) {
    return (
      <PageLoader
        title="Loading Users"
        description="Fetching user accounts..."
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
            Users
          </h2>
          <p className="mt-1 text-sm font-sans text-gray-500">
            Manage all users on the platform.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500">
            <span>Dashboard</span>
            <ChevronRight className="mx-1 h-4 w-4" />
            <span className="font-medium text-gray-900">Users</span>
          </nav>

          {/* Action Button */}
          <button className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600">
            <PlusIcon className="h-4 w-4" />
            Add New User
          </button>
        </div>
      </div>


      {/* ------------------------ Users Stats ------------------------ */}

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={userStats.totalUsers} icon={UsersIcon} />
        <StatCard title="Customer Users" value={userStats.customers} icon={User2} />
        <StatCard title="Dealer Users" value={userStats.dealers} icon={ShoppingBagIcon} />
        <StatCard title="Admin Users" value={userStats.admins} icon={UsersIcon} />
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

          {/* Role Filter */}
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-amber-500">
            <option value="">All Roles</option>
            <option value="customer">Customers</option>
            <option value="dealer">Dealers</option>
            <option value="admin">Admins</option>
          </select>

          {/* Status Filter */}
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-amber-500">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="banned">Banned</option>
          </select>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

            <DatePicker
              selected={joinedDate}
              onChange={(date: Date | null) => setJoinedDate(date)}
              placeholderText="Joined Date"
              dateFormat="dd MMM yyyy"
              isClearable
              className="w-48 rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>
        </div>

        {/* Right */}
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
          <DownloadIcon className="h-4 w-4" />
          Export
        </button>
      </div>

      <div>
        <UsersTable users={users} />
      </div>

    </div>
  )
}

export default Users