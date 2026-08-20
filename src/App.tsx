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
import Wishlist from "./pages/customer/Wishlist";
import Rentals from "./pages/admin/Rentals";
import AdminPurchases from "./pages/admin/AdminPurchases";
import InspectionRequest from "./pages/admin/InspectionRequest";
import DealerPurchases from "./pages/dealer/DealerPurchases";
import DealerPayments from "./pages/dealer/DealerPayments";
import DealerInspections from "./pages/dealer/DealerInspections";
import DealerProfile from "./pages/dealer/DealerProfile";
import BrowseCars from "./pages/customer/BrowseCars";
import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerPurchases from "./pages/customer/CustomerPurchases";
import CustomerRentals from "./pages/customer/CustomerRentals";
import CustomerPayments from "./pages/customer/CustomerPayments";
import CustomerInspections from "./pages/customer/CustomerInspections";



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
        <Route  path="/dealer"
          element={
            <ProtectedRoute allowedRoles={["dealer"]}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DealerDashboard />} />
          <Route path="vehicles" element={<MyVechicles />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="purchases" element={<DealerPurchases />} />
          <Route path="payments" element={<DealerPayments />} />
          <Route path="inspections" element={<DealerInspections />} />
          <Route path="profile" element={<DealerProfile />} />
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
          <Route path="vehicles" element={<BrowseCars />} />
          <Route path="rentals" element={<CustomerRentals />} />
          <Route path="purchases" element={<CustomerPurchases />} />
          <Route path="payments" element={<CustomerPayments />} />
          <Route path="inspections" element={<CustomerInspections />} />
          <Route path="profile" element={<CustomerProfile />} />
        </Route>

        <Route path="/pending-approval" element={<PendingApproval />} ></Route>

      </Routes>
    </>

  );
};

export default App;