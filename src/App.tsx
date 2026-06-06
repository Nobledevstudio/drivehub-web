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

const App = () => {
  return (
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

    </Routes>
  );
};

export default App;