import { MapPin, Star, Heart } from "lucide-react"
import {  Link } from "react-router-dom"

export interface Car {
  id: number;
  name: string;
  brand: string;
  location: string;
  pricing: {
    rent?: number;
    buy?: number;
  };
  image: string;
  rating: number;
  year: number;
  fuel: string;
  transmission: string;
  seats: number;
    dealer: {
    _id: string
    name: string
    email?: string
  }
  isHotDeal?: boolean;
  color?: string;
}

const Car = ({ car }: { car: Car }) => {

  
    return (
        <Link to={`/car/${car.id}`}>
            <div className="bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition">

                <div className="relative h-28 sm:h-40 md:h-45 w-full overflow-hidden rounded-xl">

                    {/* IMAGE */}
                    <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover"
                    />

                    {/* BADGES + WISHLIST */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">

                        {/* LEFT BADGES */}
                        <div className="flex gap-2">
                            {car.pricing?.rent && (
                                <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full font-sans">
                                    For Rent
                                </span>
                            )}

                            {car.pricing?.buy && (
                                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full font-sans">
                                    For Sale
                                </span>
                            )}
                        </div>

                        {/* RIGHT WISHLIST */}
                        <div className="bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white transition">
                            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
                        </div>

                    </div>

                </div>

                {/* DETAILS SECTION */}
                <div className="px-4 py-3">
                    {/* TITLE */}
                    <h1 className="text-sm md:text-md lg:text-lg font-bold text-gray-800 font-heading">
                        {car.name}
                    </h1>

                    {/* META INFO */}
                    <div className="flex gap-2 text-gray-400 text-sm mt-1 font-sans">
                        <p>{car.transmission}</p>
                        <span>•</span>
                        <p>{car.fuel}</p>
                    </div>

                    {/* LOCATION + RATING */}
                    <div className="flex items-center justify-between mt-2 text-sm text-gray-500">

                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{car.location}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span>{car.rating}</span>
                        </div>

                    </div>

                    {/* PRICE SECTION */}
                    <div className="mt-4 flex flex-col md:flex-row sm:items-center sm:justify-between gap-4">

                        <div className="space-y-1">

                            {car.pricing?.rent && (
                                <p className="text-md font-bold text-gray-800 font-sans">
                                    ₦{car.pricing.rent.toLocaleString()}
                                    <span className="text-sm font-normal text-gray-500">
                                        /day
                                    </span>
                                </p>
                            )}

                            {car.pricing?.buy && (
                                <p className="text-md font-bold text-gray-800 font-sans">
                                    ₦{car.pricing.buy.toLocaleString()}
                                </p>
                            )}

                        </div>
                        {/* BUTTON */}
                        <button
                            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-3 md:py-3 md:px-4 rounded-lg text-xs md:text-sm transition w-full md:w-auto whitespace-nowrap font-sans cursor-pointer">
                            View Details
                        </button>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Car