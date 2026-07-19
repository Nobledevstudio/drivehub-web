import { useParams } from "react-router-dom";
import { carData } from "../data/carData";
import CarImageGallery from "../components/CarImageGallery";
import { Calendar, ChevronDown, FileQuestionIcon, Fuel, MapPin, Settings, ShieldCheck, ShieldIcon, Star } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { DatePicker } from "react-datepicker";

const CarInspection = () => {


  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [notes, setNotes] = useState("");
  const maxLength = 500;


  const { id } = useParams();

  const car = carData.find((car) => car._id === id);

  if (!car) {
    return <div className="p-6 text-red-500">Car not found</div>;
  }


  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* -----------Left Column-------*/}
        <div>
          <CarImageGallery car={car} />
          {/* ----- Car More Details ----- */}
          <div className="border border-gray-100 mt-5 rounded-lg p-5 space-y-6">

            {/* TOP SECTION */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

              {/* LEFT INFO */}
              <div className="space-y-3">

                <h1 className="text-xl sm:text-2xl font-semibold">
                  {car.brand}
                </h1>

                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  ₦{car?.pricing?.buy}
                </h2>

                {/* CAR SPECS */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">

                  <p className="flex items-center gap-1">
                    <Fuel className="w-4 h-4 text-gray-500" />
                    {car.fuel}
                  </p>

                  <p className="flex items-center gap-1">
                    <Settings className="w-4 h-4 text-gray-500" />
                    {car.transmission}
                  </p>

                  <p className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    {car.year}
                  </p>

                </div>
              </div>

              {/* VERIFIED BADGE */}
              <div className="shrink-0">
                <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                  Verified Dealer
                </span>
              </div>

            </div>

            {/* DIVIDER */}
            <hr className="border-gray-200" />

            {/* DEALER INFO */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              <div className="space-y-1">
                <h2 className="text-md font-semibold">
                  {car.dealer.name}
                </h2>

                <p className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {car.location}
                </p>
              </div>

              <div className="flex items-center gap-1 font-semibold text-sm">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                {car.rating}
                <span className="text-gray-500 font-normal">
                  (32 Reviews)
                </span>
              </div>

            </div>

            {/* INSPECTION CTA BOX */}
            <div className="flex items-center justify-between gap-6 border border-gray-200 rounded-lg p-5 bg-gray-50">

              <div className="space-y-1">
                <h2 className="font-semibold text-gray-800">
                  Why Request Inspection?
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Requesting an inspection allows you to physically verify the car's condition and helps you make a confident buying decision.
                </p>
              </div>

              <ShieldIcon className="w-12 h-12 text-green-600 shrink-0" />

            </div>

          </div>

        </div>
        {/* ----------Right Column-------*/}
        <div className="border border-gray-200 rounded-md px-4 py-6">
          <div className="flex items-start gap-3  mb-10">
            <div className="bg-amber-50 text-amber-500 p-2 rounded-full inline-flex items-center justify-center">
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-md sm:text-xl font-semibold">Requestion Inspection</h2>
              <p className="text-sm">Fill in the deatils below to schedule an inspection for this car</p>
            </div>
          </div>

          <form className="w-full">
            {/* ROW: Date + Time */}
            <div className="flex flex-col md:flex-row gap-3 w-full">

              {/* Preferred Date */}
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium">Preferred Date</label>

                <div className="relative mt-1 w-full">
                  <Calendar
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                    size={18}
                  />

                  <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    placeholderText="Select date"
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    wrapperClassName="w-full"
                    customInput={
                      <input className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    }
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="flex flex-col flex-1">
                <label className="text-sm font-medium">Preferred Time</label>

                <div className="relative mt-1 w-full">
                  <ChevronDown
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                    size={18}
                  />

                  <DatePicker
                    selected={time}
                    onChange={(time: Date | null) => setTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat="h:mm aa"
                    placeholderText="Select time"
                    wrapperClassName="w-full"
                    customInput={
                      <input className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
                    }
                  />
                </div>
              </div>

            </div>
            {/* Inspection Location */}
            <div className="w-full mt-4">
              <label className="text-sm font-medium">
                Inspection Location
              </label>

              <div className="relative mt-1">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                  size={18}
                />

                <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Select Location</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                </select>
              </div>
            </div>

            {/* Inspection Type */}
            <div className="w-full mt-4">
              <label className="text-sm font-medium">
                Inspection Type (Optional)
              </label>

              <div className="relative mt-1">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"
                  size={18}
                />

                <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Select Inspection Type</option>
                  <option value="on-site">On-Site Inspection (Dealer Location)</option>
                  <option value="home">Home Inspection</option>
                  <option value="virtual">Virtual Inspection</option>
                  <option value="third-party">Third-Party Inspection Center</option>
                  <option value="self">Self Inspection</option>
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="w-full mt-4">
              <label className="text-sm font-medium">
                Additional Notes (Optional)
              </label>

              <div className="relative mt-1">
                <textarea
                  rows={7}
                  maxLength={maxLength}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. I prefer a clean car, inspection should be in the morning..."
                  className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />

                <div className="absolute bottom-2 right-0 mr-4 text-xs text-gray-500">
                  {notes.length}/{maxLength}
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="flex items-start gap-2 py-4 px-6 border border-gray-200 bg-gray-50 rounded-md mt-5">
              <FileQuestionIcon />
              <div>
                <h2 className="text-md font-semibold text-amber-400">
                  What happens next?
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The dealer will review your request and get back to you to confirm the inspection date and time.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                type="button"
                className="flex-1 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-2 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-500 transition"
              >
                Submit Request
              </button>
            </div>

            {/* Trust Note */}
            <p className="flex items-center justify-center gap-2 text-xs text-gray-700 mt-8 text-center">
              <ShieldCheck />
              Your information is secure and will not be shared with third parties.
            </p>

          </form>
        </div>
      </div>
    </section>
  )
}

export default CarInspection