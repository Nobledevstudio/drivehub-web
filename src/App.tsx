import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import Listings from "./pages/Listings"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<Listings/>}/>
      </Routes>
       <Footer/>
    </div>
  )
}

export default App