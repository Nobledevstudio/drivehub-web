import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authServices";
import { getCarStatus, getDashboardStats, getRecentActivties, getRecentCars } from "../../services/adminServices";
import StatCard from "../../components/ui/StatCard";
import {
  Car,
  Users,
  CalendarCheck,
  ShoppingCart,
} from "lucide-react"
import VechicleStatusChart from "../../components/dashboard/VechicleStatusChart";
import RecentActivities from "../../components/dashboard/RecentActivities";
import LatestVehiclesTable from "../../components/dashboard/LatestVehiclesTable";
import PageLoader from "../../components/common/PageLoader";

const AdminDashboard = () => {
  const user = getCurrentUser();
  const [loading, setLoading] = useState(true);
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
  const [recentCars, setRecentCars] = useState([]);

  useEffect(() => {

    const fetchDashboard = async () => {
      try {
        const [statsData, vehicleData, activityData, recentCarsData] =
          await Promise.all([
            getDashboardStats(),
            getCarStatus(),
            getRecentActivties(),
            getRecentCars(),
          ]);

        // console.log("Recent Vehicles:", recentCarsData);

        setStats(statsData);
        setVehicleStatus(vehicleData);
        setActivities(activityData);
        setRecentCars(recentCarsData.cars); // Assuming the API response has a 'cars' property containing the recent cars
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <PageLoader
        title="Loading Dashboard"
        description="Preparing your analytics..."
      />
    );
  }

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

      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <div className="w-full md:flex-2">
          <VechicleStatusChart vehicleStatus={vehicleStatus} />
        </div>

        <div className="w-full md:flex-2">
          <RecentActivities activities={activities} />
        </div>
      </div>

      <LatestVehiclesTable cars={recentCars} />
    </div>
  );
};

export default AdminDashboard;