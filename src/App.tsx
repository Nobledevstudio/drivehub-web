import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import Listings from "./pages/Listings";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

import AuthLayouts from "./layouts/AuthLayouts";
import MainLayouts from "./layouts/MainLayouts";
import CarBooking from "./pages/CarBooking";
import CarInspection from "./pages/CarInspection";
import CheckOutPage from "./pages/CheckOutPage";
import ContactDealer from "./pages/ContactDealer";
import ProtectedRoute from "./routes/ProtectedRoute";
import DealerDashboard from "./pages/dealer/DealerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import { Toaster } from "react-hot-toast";
import PendingApproval from "./pages/PendingApproval";
import ScrollToTop from "./components/ScrollToTop";
import DashboardLayout from "./layouts/DashboardLayout";
import Users from "./pages/admin/Users";
import Vechicles from "./pages/admin/Vechicles";
import Settings from "./pages/admin/Settings";
import Payments from "./pages/admin/Payments";
import MyVechicles from "./pages/dealer/MyVechicles";
import Bookings from "./pages/dealer/Bookings";
import Earnings from "./pages/dealer/Earnings";
import DealerSettings from "./pages/dealer/DealerSettings";
import Wishlist from "./pages/customer/Wishlist";
import MyRentals from "./pages/customer/MyRentals";
import Profile from "./pages/customer/Profile";
import Purchases from "./pages/customer/Purchases";
import Rentals from "./pages/admin/Rentals";
import AdminPurchases from "./pages/admin/AdminPurchases";
import InspectionRequest from "./pages/admin/InspectionRequest";





const App = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Routes>

        {/* MAIN LAYOUT */}
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/car/:id/book" element={<CarBooking />} />
          <Route path="/car/:id/inspection" element={<CarInspection />} />
          <Route path="/car/:id/book/checkout" element={<CheckOutPage />} />
          <Route path="/car/:id/contact-dealer" element={<ContactDealer />} />
        </Route>

        {/* AUTH LAYOUT */}
        <Route element={<AuthLayouts />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>


        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="vehicles" element={<Vechicles />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="purchases" element={<AdminPurchases />} />
           <Route path="inspections" element={<InspectionRequest />} />
           <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* DEALER */}
        <Route
          path="/dealer"
          element={
            <ProtectedRoute allowedRoles={["dealer"]}>
              <DashboardLayout
               />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DealerDashboard />} />
          <Route path="my-vehicles" element={<MyVechicles />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="settings" element={<DealerSettings />} />
        </Route>

        {/* CUSTOMER */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="rentals" element={<MyRentals />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/pending-approval" element={<PendingApproval />} ></Route>

      </Routes>
    </>

  );
};

export default App;