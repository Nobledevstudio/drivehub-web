import { Link } from "react-router-dom"
import { assets } from '../../assets/asset.ts';
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
interface NavItem {
    name: string,
    path: string
}

const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
]

const Navbar: React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false)




    return (

        <nav className="w-full bg-white shadow-sm">

            {/* Desktop View */}
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to='/'><img className="w-28" src={assets.logo} alt="" /></Link>
                <div className="hidden md:flex items-center gap-10 font-sans">
                    {navItems.map((item) => (
                        <Link to={item.path} key={item.path}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/login"
                        className="bg-primary px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-primaryDark transition cursor-pointer font-sans">
                        Login
                    </Link>

                    <span className="text-gray-400">|</span>

                    <Link  to="/sign-up"
                        className="px-5 py-2 rounded-full text-sm font-medium text-primary border border-primary hover:bg-primary-dark hover:text-white transition cursor-pointer font-sans" >
                        Sign Up
                    </Link>
                </div>
                <div className="bg-primary p-2 rounded-full flex items-center justify-center md:hidden cursor-pointer">
                    <MenuIcon className="w-6 h-6 text-white" onClick={() => setOpenMenu(true)} />
                </div>
            </div>
            {/* Mobile Menu (hidden for now) */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-10 ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex justify-end">
                    <X className="w-6 h-6 text-black cursor-pointer" onClick={() => setOpenMenu(false)} />
                </div>

                <div className="flex flex-col gap-6 mt-10 font-sans">

                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path} className="text-lg font-medium">
                            {item.name}
                        </Link>
                    ))}

                    <div className="mt-6 flex flex-col gap-3">

                        <Link to="/login"
                            className="bg-primary py-2 px-4 rounded-full text-white inline-block text-center"
                        >
                            Login
                        </Link>
                        <Link
                            to="/sign-up"
                            className="border border-primary py-2 px-4 rounded-full text-primary inline-block text-center"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar