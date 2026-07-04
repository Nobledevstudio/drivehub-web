import { getCurrentUser } from "../../services/authServices";

const AdminDashboard = () => {
  const user = getCurrentUser();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome back, {user?.name} 👋
      </h1>

      <p className="mt-2 text-gray-500">
        Here's what's happening on DriveHub today.
      </p>

      {/* Dashboard Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          Total Users
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          Vehicles
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          Rentals
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          Revenue
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;