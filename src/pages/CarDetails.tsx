import { Link, useParams } from "react-router-dom"
import { carData } from "../data/carData";
import { Palette, Calendar, Fuel, Settings, Users, Snowflake, MapPin, } from "lucide-react";
import Car from "../components/Car";
import CarImageGallery from "../components/CarImageGallery";


const CarDetails = () => {

    const { id } = useParams();

    const car = carData.find((car) => car._id === id);

    const relatedCars = carData.filter((item) => item.brand === car?.brand && item._id !== car._id)

    //console.log(relatedCars);


    if (!car) {
        return <div className="p-6 text-red-500">Car not found</div>;
    }


    const isRent = !!car?.pricing?.rent;


    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <CarImageGallery car={car} />

                {/* RIGHT: DETAILS */}
                <div className="space-y-6">

                    <h1 className="text-3xl font-bold">
                        {car.brand}
                    </h1>

                    <p className="text-gray-500">
                        {car.brand} • {car.year}
                    </p>

                    {/* Prices */}
                    {
                        car?.pricing?.buy ? (
                            <p className="text-2xl font-semibold text-amber-500">
                                ₦{car.pricing?.buy?.toLocaleString()}
                            </p>
                        ) : (
                            <p className="text-2xl font-semibold text-amber-500">
                                ₦{car.pricing?.rent?.toLocaleString()}
                            </p>
                        )
                    }

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">

                        {/* Year */}
                        <div className="border rounded-lg p-3 flex items-center gap-2 hover:shadow-sm transition">
                            <Calendar className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                                <p className="text-gray-500 text-xs">Year</p>
                                <p className="font-medium">{car.year}</p>
                            </div>
                        </div>

                        {/* Fuel */}
                        <div className="border rounded-lg p-3 flex items-center gap-2 hover:shadow-sm transition">
                            <Fuel className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                                <p className="text-gray-500 text-xs">Fuel</p>
                                <p className="font-medium">{car.fuel}</p>
                            </div>
                        </div>

                        {/* Transmission */}
                        <div className="border rounded-lg p-3 flex items-center gap-2 hover:shadow-sm transition">
                            <Settings className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                                <p className="text-gray-500 text-xs">Transmission</p>
                                <p className="font-medium">{car.transmission}</p>
                            </div>
                        </div>

                        {/* Seats */}
                        <div className="border rounded-lg p-3 flex items-center gap-2 hover:shadow-sm transition">
                            <Users className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                                <p className="text-gray-500 text-xs">Seats</p>
                                <p className="font-medium">{car.seats}</p>
                            </div>
                        </div>

                        {/* Air Conditioning */}
                        <div className="border rounded-lg p-3 flex items-center gap-2 hover:shadow-sm transition">
                            <Snowflake className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                                <p className="text-gray-500 text-xs">AC</p>
                                <p className="font-medium">
                                    {car.airConditioning ? "Yes" : "No"}
                                </p>
                            </div>
                        </div>

                        {/* Color */}
                        <div className="border rounded-lg p-3 flex items-center gap-2 hover:shadow-sm transition">
                            <Palette className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                                <p className="text-gray-500 text-xs">Color</p>
                                <p className="font-medium capitalize">
                                    {car.color}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2">
                        <MapPin width={20} />
                        <span className="text-gray-500 text-sm ml-1">
                            {car.location}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="border-t border-gray-200 pt-5">
                        <h3 className="text-lg font-semibold mb-2">
                            Description
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {car.description}
                        </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex gap-3 pt-4">

                        {/* Primary Action */}
                        <Link className="flex-1 text-center bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition cursor-pointer" to={isRent ? `/car/${id}/book` : `/car/${id}/inspection`}>
                            {isRent ? "Book Now" : "Request Inspection"}
                        </Link>

                         {/* Secondary Action */}
                        <Link className="flex-1 border text-center border-gray-300 py-3 rounded-md hover:bg-gray-100 transition cursor-pointer" to={`/car/${id}/contact-dealer`}>
                            Contact Dealer
                        </Link>

                    </div>

                </div>

            </div>

            {/* RELATED CARS */}
            <div className="mt-16 border-t border-gray-200 pt-12">

                {/* HEADER */}
                <div className="flex items-end justify-between gap-4 mb-8">

                    <div>

                        <p className="text-sm text-amber-500 font-medium mb-2 font-sans">
                            You may also like
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Related Cars
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            {relatedCars.length} available vehicle
                            {relatedCars.length !== 1 && "s"}
                        </p>

                    </div>

                    <button className="hidden sm:block text-sm font-medium text-amber-500 hover:text-amber-600 cursor-pointer">
                        View All →
                    </button>

                </div>

                {/* EMPTY STATE */}
                {relatedCars.length === 0 ? (

                    <div className="border border-dashed border-gray-200 rounded-2xl p-10 text-center">

                        <p className="text-gray-500">
                            No related cars available right now.
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

                        {relatedCars.map((car) => (
                            <Car
                                key={car._id}
                                car={car}
                            />
                        ))}

                    </div>

                )}

            </div>

        </section>
    )


}

export default CarDetails