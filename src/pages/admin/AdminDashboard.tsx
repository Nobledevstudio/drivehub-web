import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authServices";
import { getDashboardStats } from "../../services/adminServices";
import StatCard from "../../components/ui/StatCard";
import {
  Car,
  Users,
  CalendarCheck,
  ShoppingCart,
} from "lucide-react"

const AdminDashboard = () => {
  const user = getCurrentUser();

  const [stats, setStats] = useState({
    cars: 0,
    users: 0,
    bookings: 0,
    purchases: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStats()
  }, [])



  return (
    <div>
      <h1 className="text-3xl font-bold"> Welcome back, {user?.name} 👋 </h1>
      <p className="mt-2 text-gray-500">  Here's what's happening on DriveHub today. </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard  title="Total Cars" value={stats.cars}   icon={Car}/>
        <StatCard title="Total Users" value={stats.users} icon={Users}/>
        <StatCard  title="Total Bookings"value={stats.bookings} icon={CalendarCheck}/>
        <StatCard title="Total Purchases" value={stats.purchases} icon={ShoppingCart} />
      </div>
    </div>
  );
};

export default AdminDashboard;