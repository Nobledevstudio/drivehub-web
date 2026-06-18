import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: Props) => {

  const token = localStorage.getItem("token");
  
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // 1. Not logged in
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Role check (if provided)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;