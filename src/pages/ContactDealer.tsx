import { useParams } from "react-router-dom";
import { carData } from "../data/carData";
import { Fuel, Heart, MapPin, Settings } from "lucide-react";

const ContactDealer = () => {
  const { id } = useParams();
  const car = carData.find((car) => car.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold">
        Contact Dealer
      </h1>

      <p className="text-gray-600 mt-2">
        Send a message to the dealer about this car
      </p>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8 border border-gray-200 rounded-md p-6">

        {/* Car Image */}
        <div className="w-full lg:w-auto">
          <img
            src={car.image}
            alt={car.name}
            className="w-full lg:w-96 object-cover rounded-mds"
          />
        </div>

        {/* Car Info */}
        <div className="flex-1 w-full">
          {/* Name */}
          <h2 className="text-3xl font-semibold mb-6">
            {car.name}
          </h2>

          {/* Price */}
          {car.pricing.buy ? (
            <p className="text-2xl font-semibold text-amber-500 mb-6">
              ₦{car.pricing.buy.toLocaleString()}
            </p>
          ) : (
            <p className="text-2xl font-semibold text-amber-500 mb-6">
              ₦{car.pricing.rent?.toLocaleString()}
              <span className="text-sm text-gray-500 ml-1">
                / per day
              </span>
            </p>
          )}

          {/* Specs */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Fuel size={18} />
              <p>{car.fuel}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Settings size={18} />
              <p>{car.transmission}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Fuel size={18} />
              <p>{car.color}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Fuel size={18} />
              <p>{car.seats} Seats</p>
            </div>
          </div>

          {/* Location + Save */}
          <div className="flex items-center justify-between w-full border-t border-gray-200 pt-4">
            <p className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              {car.location}
            </p>

            <button className="flex items-center gap-2 border border-amber-300 px-4 py-2 rounded-md text-amber-500 hover:bg-amber-50 transition cursor-pointer">
              <Heart size={18} />
              Save Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDealer;