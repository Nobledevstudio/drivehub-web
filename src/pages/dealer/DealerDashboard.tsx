import { getCurrentUser } from "../../services/authServices";

const DealerDashboard = () => {
  const user = getCurrentUser();

  return (
    <div>
      <h1 className="text-3xl font-bold"> Welcome back, {user?.name} 👋 </h1>
      <p className="mt-2 text-gray-500">  Here's what's happening on DriveHub today. </p>
    </div>
  );
};

export default DealerDashboard;