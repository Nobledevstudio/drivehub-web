import { RotateCcw, X } from "lucide-react"

type SidebarProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}



const Sidebar = ({ open, setOpen }: SidebarProps) => {
    return (
        <div className={` fixed lg:static top-0 left-0 h-screen lg:h-auto w-[85%] sm:w-100 lg:w-auto z-50 overflow-y-auto bg-white border border-gray-100 rounded-none lg:rounded-xl p-4 space-y-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 `}>
            {/* Mobile close */}

            <div className="flex justify-end lg:hidden">
                <button onClick={() => setOpen(false)}>
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="flex items-center gap-2 justify-between">
                <h2 className="text-lg font-semibold">Filters by</h2>
                <div className="flex gap-2 cursor-pointer">
                    <p className="font-sans text-md">Reset</p>
                    <RotateCcw className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            <div className="flex items-center gap-3">

                <button className="flex-1 bg-white border border-amber-300 hover:bg-gray-300 text-gray-800 py-2 rounded-xl text-lg font-medium transition shadow-md hover:shadow-lg font-sans">
                    Buy
                </button>

                <button className="flex-1 bg-white border border-gray-200 text-gray-800 py-2 rounded-xl text-lg font-medium transition shadow-md hover:shadow-lg font-sans">
                    Rent
                </button>

            </div>
            {/* PRICE FILTER */}
            <div>
                <p className="text-sm font-medium mb-2">Price Range ₦</p>
                <input type="range" className="w-full custom-range" />
                <div className="flex justify-between text-sm text-gray-500 mt-1 font-sans">
                    <button className="px-3 py-2 border border-gray-300 rounded-md"> ₦50,000</button>
                    <button className="px-3 py-2 border border-gray-300 rounded-md">₦5,000,000+</button>
                </div>
            </div>
            <div>
                <p className="text-sm font-medium mb-2">Year</p>

                <div className="flex gap-3">
                    {/* Min Year */}
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Min Year</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>

                    {/* Max Year */}
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Max Year</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
            </div>
            {/* BRAND */}
            <div>
                <p className="text-sm font-medium mb-2">All Brand</p>
                <div className="space-y-1">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Select Brand</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                    </select>
                </div>
            </div>
            {/* Car Type */}
            <div>
                <p className="text-sm font-medium mb-2">Car Type</p>
                <div className="space-y-1">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Select Car Type</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Hatchback">Hatchback</option>
                    </select>
                </div>
            </div>
            {/* Locations */}
            <div>
                <p className="text-sm font-medium mb-2">Location</p>
                <div className="space-y-1">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Select Location</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Port Harcourt">Port Harcourt</option>
                    </select>
                </div>
            </div>
            {/* Fuel Type */}
            <div>
                <p className="text-sm font-medium mb-2">Fuel Type</p>
                <div className="space-y-1">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Select Fuel Type</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                    </select>
                </div>
            </div>
            {/* Transmission  */}
            <div>
                <p className="text-sm font-medium mb-2">Transmission</p>
                <div className="space-y-1">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                        <option value="">Select Transmission</option>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                </div>
            </div>
            <button className="w-full bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400">
                Apply Filters
            </button>
        </div>
    )
}

export default Sidebar