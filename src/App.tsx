import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import Listings from "./pages/Listings";
import CarDetails from "./components/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

import AuthLayouts from "./layouts/AuthLayouts";
import MainLayouts from "./layouts/MainLayouts";

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