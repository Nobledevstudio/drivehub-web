import { ListRestart } from "lucide-react"

type SidebarProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}



const Sidebar = ({ open }: SidebarProps) => {
    return (
        <div className={`bg-white border border-gray-100 rounded-xl p-4 space-y-6 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>

            <div className="flex items-center gap-2 justify-between">
                <h2 className="text-lg font-semibold">Filters by</h2>
                <div className="flex gap-2">
                    <p className="font-sans text-md">reset</p>
                    <ListRestart className="w-5 h-5 text-gray-500" />
                </div>
            </div>

            {/* Rent or Buy */}
            <div className="flex items-center justify-between">
                <button className="bg-white border border-amber-300 hover:bg-gray-300 text-gray-800 px-10 py-2 rounded-xl text-lg font-medium transition shadow-md hover:shadow-lg font-sans">
                    Buy
                </button>
                <button className="bg-white border border-gray-200 text-gray-800 px-10 py-3 rounded-xl text-lg font-medium transition shadow-md hover:shadow-lg font-sans">
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