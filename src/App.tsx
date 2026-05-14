import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import Listings from "./pages/Listings"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import CarDetails from "./components/CarDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<Listings/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/car/:id" element={<CarDetails />}/>
      </Routes>
       <Footer/>
    </div>
  )
}

export default App