import type React from 'react'
import { assets } from '../../assets/asset.ts'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ================= TOP ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

          <Link to="/">
            <img src={assets.logo} className="w-32" alt="logo" />
          </Link>

          <div className="flex gap-3 items-start">
            <div className="bg-amber-300 w-9 h-9 rounded-full flex items-center justify-center">
              <img src={assets.location_icon} className="w-5 h-5" alt="location" />
            </div>
            <div>
              <h2 className="font-semibold">Address</h2>
              <p className="text-sm font-medium">Oxford, Ave 1234, Ikoyi Lagos</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="bg-amber-300 w-9 h-9 rounded-full flex items-center justify-center">
              <img src={assets.telephone_icon} className="w-5 h-5" alt="phone" />
            </div>
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p className="text-sm font-medium">+23434667884</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="bg-amber-300 w-9 h-9 rounded-full flex items-center justify-center">
              <img src={assets.mail_icon} className="w-5 h-5" alt="email" />
            </div>
            <div>
              <h2 className="font-semibold">Email</h2>
              <p className="text-sm font-medium">info@drivehub.com</p>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-24 lg:gap-10">

          {/* LEFT: About */}
          <div className="flex flex-col">
            <p className="leading-relaxed text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat rem obcaecati labore natus minus at repellendus optio.
            </p>

            <div className="flex gap-3 mt-5">
              <img src={assets.facebook} className="w-6 h-6" />
              <img src={assets.instagram} className="w-6 h-6" />
              <img src={assets.twitter} className="w-6 h-6" />
              <img src={assets.youtube} className="w-6 h-6" />
            </div>
          </div>
        

            {/* Quick Links */}
            <div className='lg:ml-32'>
              <h1 className="font-semibold mb-3">Quick Links</h1>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/careers">Blog</Link></li>
              </ul>
            </div>

            {/* Vehicles */}
          <div className='lg:ml-32'>
              <h1 className="font-semibold mb-3">Vehicles</h1>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about">Toyota</Link></li>
                <li><Link to="/services">Sedan</Link></li>
                <li><Link to="/contact">BMW</Link></li>
                <li><Link to="/terms">SUV</Link></li>
                <li><Link to="/faq">Hatchback</Link></li>
              </ul>
            </div>

            {/* App */}
            <div className="flex flex-col lg:ml-40">
              <h1 className="font-semibold mb-3">Download App</h1>

              <div className="flex flex-col gap-3">
                <img src={assets.appstore_icon} className="w-32" />
                <img src={assets.playstore_icon} className="w-32" />
              </div>
            </div>

      

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DriveHub. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer