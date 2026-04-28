
import { carData } from "../data/carData"
import Car from "../components/Car"
import Sidebar from "../components/Sidebar"
import { useState } from "react";

const Listings = () => {

    const [open, setOpen] = useState(false);


    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold mb-6 font-heading">
                Available cars
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* SIDEBAR */}
                <div className="hidden lg:block lg:col-span-1">
                    <Sidebar open={open} setOpen={setOpen} />
                </div>

                {/* LISTINGS */}
                <div className="lg:col-span-3">
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden mb-4 bg-amber-400 text-white px-4 py-2 rounded"
                    >
                        Show Filters
                    </button>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {carData.map((car) => (
                            <Car key={car.id} car={car} />
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Listings