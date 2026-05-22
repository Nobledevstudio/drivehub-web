import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default AuthLayouts;