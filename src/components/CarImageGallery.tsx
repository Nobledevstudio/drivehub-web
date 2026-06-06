import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import type { Car } from "./Car";

interface CarImageGalleryProps {
     car: Car
}


const CarImageGallery = ({ car }: CarImageGalleryProps) => {
  return (
    <div className="space-y-4">

      {/* IMAGE WRAPPER */}
      <div className="relative border border-gray-200 rounded-xl overflow-hidden">

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {car.pricing?.rent && (
            <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Rent
            </span>
          )}

          {car.pricing?.buy && (
            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist */}
        <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full cursor-pointer hover:bg-white transition z-10">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </div>

        {/* Arrows */}
        <ChevronLeft
          size={45}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-black bg-white p-2 rounded-full cursor-pointer hover:bg-gray-200 transition z-10"
        />

        <ChevronRight
          size={45}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-black bg-white p-2 rounded-full cursor-pointer hover:bg-gray-200 transition z-10"
        />

        {/* Main Image */}
        <img
          className="w-full h-full object-cover"
          src={car.image}
          alt="Main car"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((_, i) => (
          <img
            key={i}
            className="w-full aspect-video object-cover rounded-md border border-gray-200 cursor-pointer hover:opacity-80 transition"
            src={car.image}
            alt={`Thumbnail ${i}`}
          />
        ))}
      </div>

    </div>
  );
}

export default CarImageGallery;