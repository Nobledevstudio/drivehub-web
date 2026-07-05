import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authServices";
import { getCarStatus, getDashboardStats, getRecentActivties } from "../../services/adminServices";
import StatCard from "../../components/ui/StatCard";
import {
  Car,
  Users,
  CalendarCheck,
  ShoppingCart,
} from "lucide-react"
import VechicleStatusChart from "../../components/dashboard/VechicleStatusChart";
import RecentActivities from "../../components/dashboard/RecentActivities";

const AdminDashboard = () => {
  const user = getCurrentUser();

  const [stats, setStats] = useState({
    cars: 0,
    users: 0,
    bookings: 0,
    purchases: 0,
  })

  const [vehicleStatus, setVehicleStatus] = useState({
    available: 0,
    sold: 0,
    rented: 0,
    reserved: 0
  });

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [statsData, vehicleData, activityData] =
          await Promise.all([
            getDashboardStats(),
            getCarStatus(),
            getRecentActivties(),
          ]);

        setStats(statsData);
        setVehicleStatus(vehicleData);
        setActivities(activityData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, []);



  return (
    <div>
      <h1 className="text-3xl font-bold"> Welcome back, {user?.name} 👋 </h1>
      <p className="mt-2 text-gray-500">  Here's what's happening on DriveHub today. </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Cars" value={stats.cars} icon={Car} />
        <StatCard title="Total Users" value={stats.users} icon={Users} />
        <StatCard title="Total Bookings" value={stats.bookings} icon={CalendarCheck} />
        <StatCard title="Total Purchases" value={stats.purchases} icon={ShoppingCart} />
      </div>

      <div className="flex gap-2 mt-5">
        <VechicleStatusChart vehicleStatus={vehicleStatus}/>
        <RecentActivities  activities={activities}/>
      </div>
    </div>
  );
};

export default AdminDashboard;