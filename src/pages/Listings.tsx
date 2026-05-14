import { carData } from "../data/carData"
import Car from "../components/Car"
import Sidebar from "../components/Sidebar"
import { useState } from "react";


const Listings = () => {

    const [open, setOpen] = useState(false);

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* SIDEBAR */}
                <Sidebar
                    open={open}
                    setOpen={setOpen}
                />

                {/* LISTINGS */}
                <div className="lg:col-span-3">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                        <h2 className="text-lg font-medium text-gray-700">
                            {carData.length} Cars Found
                        </h2>

                        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                            <option>Sort by: Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Year: Newest</option>
                            <option>Year: Oldest</option>
                            <option>Most Popular</option>
                        </select>

                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden mb-4 bg-amber-400 text-white px-4 py-2 rounded-md"
                    >
                        Show Filters
                    </button>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {carData.map((car) => (
                            <Car
                                key={car.id}
                                car={car}
                            />
                        ))}
                    </div>

                       {/* Pagination */}
                     
                </div>

            </div>

        </section>
    )
}

export default Listings