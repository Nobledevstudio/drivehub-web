import { getCurrentUser } from "../../services/authServices";

const DealerDashboard = () => {
  const user = getCurrentUser();

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
    </div>
  );
};

export default DealerDashboard;