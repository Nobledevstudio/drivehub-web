import { useParams } from "react-router-dom";
import { carData } from "../data/carData";
import { BadgeDollarSign, Car, ChevronDown, Fuel, Headset, Heart, Lock, MailIcon, MapPin, MessageSquareMore, Palette, Phone, SendIcon, Settings, Shield, ShieldCheck, Star, User, User2Icon, Users } from "lucide-react";
import { ReactCountryFlag } from "react-country-flag";
import { useState } from "react";

const ContactDealer = () => {
  const [countryCode, setCountryCode] = useState("+234");
  const [notes, setNotes] = useState("");
  const maxLength = 500;
  const { id } = useParams();
  const car = carData.find((car) => car._id === id);


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

      {/* CAR + INFO SECTION */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8 border border-gray-200 rounded-md p-4 lg:p-6">

        {/* Car Image */}
        <div className="w-full lg:w-auto">
          <img
            src={car.image}
            alt={car.name}
            className="w-full lg:w-96 object-cover rounded-md"
          />
        </div>

        {/* Car Info */}
        <div className="flex-1 w-full">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {car.name}
          </h2>

          {/* Price */}
          {car.pricing.buy ? (
            <p className="text-xl md:text-2xl font-semibold text-amber-500 mb-4">
              ₦{car.pricing.buy.toLocaleString()}
            </p>
          ) : (
            <p className="text-xl md:text-2xl font-semibold text-amber-500 mb-4">
              ₦{car.pricing.rent?.toLocaleString()}
              <span className="text-sm text-gray-500 ml-1">/ per day</span>
            </p>
          )}

          {/* Specs */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-sm">

            <div className="flex items-center gap-2">
              <Fuel size={18} /> {car.fuel}
            </div>

            <div className="flex items-center gap-2">
              <Settings size={18} /> {car.transmission}
            </div>

            <div className="flex items-center gap-2">
              <Palette size={18} /> {car.color}
            </div>

            <div className="flex items-center gap-2">
              <Users size={18} /> {car.seats} Seats
            </div>

          </div>

          {/* Location + Save */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-200 pt-4">

            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <MapPin size={18} />
              {car.location}
            </p>

            <button className="flex items-center justify-center gap-2 border border-amber-300 px-4 py-2 rounded-md text-amber-500 hover:bg-amber-50 transition">
              <Heart size={18} />
              Save Car
            </button>

          </div>

        </div>
      </div>

      {/* CONTACT + DEALER SECTION */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">

        {/* CONTACT FORM */}
        <div className="w-full lg:flex-2 border border-gray-200 rounded-2xl px-4 sm:px-6 py-6">

          <form>

            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              <SendIcon size={22} className="text-amber-500 inline-block mr-2" />
              Send a Message
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Fill out the form below and the dealer will get back to you shortly
            </p>

            {/* Name */}
            <div className="flex flex-col mt-4">
              <label className="text-sm font-medium">Full Name</label>

              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col my-5">
              <label className="text-sm font-medium">Phone</label>

              <div className="flex items-center border border-gray-300 rounded-md mt-1 focus-within:ring-2 focus-within:ring-amber-400">

                {/* Country Code */}
                <div className="relative flex items-center bg-gray-50 px-3 border-r border-gray-300">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
                  >
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>

                  <ChevronDown className="w-4 h-4 absolute right-1 text-gray-500 pointer-events-none" />
                </div>

                {/* Flag */}
                <div className="pl-2">
                  <ReactCountryFlag
                    countryCode={
                      countryCode === "+234"
                        ? "NG"
                        : countryCode === "+1"
                          ? "US"
                          : "GB"
                    }
                    svg
                    style={{ width: "1.2em", height: "1.2em" }}
                  />
                </div>

                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="801 234 5678"
                  className="w-full px-3 py-2 border-0 focus:outline-none"
                />

              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col my-5">
              <label className="text-sm font-medium">Email</label>

              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="text-sm font-medium">Your Message</label>

              <div className="relative mt-1">
                <textarea
                  rows={7}
                  maxLength={maxLength}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-amber-400 outline-none"
                  placeholder={`I am interested in this ${car.name}...`}
                />

                <div className="absolute bottom-2 right-3 text-xs text-gray-500">
                  {notes.length}/{maxLength}
                </div>
              </div>
            </div>

            {/* Privacy */}
            <p className="flex items-center gap-2 text-sm bg-amber-50 p-4 rounded-md mt-4">
              <Lock size={18} className="text-amber-500" />
              Your data is shared only for this inquiry
            </p>

            {/* Submit */}
            <button className="w-full mt-4 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-2">
              <SendIcon size={18} />
              Send Message
            </button>

            <p className="text-xs text-center mt-4 text-gray-600 flex flex-wrap justify-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              By proceeding you agree to
              <span className="text-amber-500">Terms & Conditions</span>
              and
              <span className="text-amber-500">Privacy Policy</span>
            </p>

          </form>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:flex-1 space-y-4">

          {/* Dealer Info */}
          <div className="border border-gray-200 rounded-2xl px-6 py-4">

            <h3 className="text-xl font-semibold mb-3">
              <User2Icon className="text-amber-500 inline-block mr-2" size={22} />
              Dealer Information
            </h3>

            <h2 className="text-lg font-semibold">{car.dealer.name}</h2>

            <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Verified Dealer
            </span>

            <div className="flex items-center gap-2 mt-3">
              <Star className="text-amber-500 w-4 h-4" />
              <Star className="text-amber-500 w-4 h-4" />
              <Star className="text-amber-500 w-4 h-4" />
              <Star className="text-amber-500 w-4 h-4" />

              <p className="text-sm font-semibold ml-2">
                {car.rating} <span className="text-gray-500">(126 reviews)</span>
              </p>
            </div>

            <hr className="my-4 border border-gray-200" />

            <div className="space-y-3 text-sm">

              <p className="flex items-center gap-2">
                <Phone className="text-amber-500 w-4 h-4" />
                +2349077654323
              </p>

              <p className="flex items-center gap-2">
                <MailIcon className="text-amber-500 w-4 h-4" />
                sales@olamotors.ng
              </p>

              <p className="flex items-center gap-2">
                <MapPin className="text-amber-500 w-4 h-4" />
                Lekki, Lagos
              </p>

            </div>

            <button className="w-full mt-5 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-lg cursor-pointer">
              View Dealer Profile
            </button>

          </div>

          {/* WHY VERIFIED (RESTORED) */}
          <div className="px-4 py-6 border border-gray-200 rounded-2xl">

            <p className="flex items-center gap-2 font-semibold mb-3">
              <Shield className="w-4 h-4 text-amber-500" />
              Why buy from verified dealers?
            </p>

            <div className="space-y-2 text-sm text-gray-700">

              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                Trusted and verified sellers
              </p>

              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                Quality inspected vehicles
              </p>

              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                Secure transactions
              </p>

              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                Dedicated support
              </p>

            </div>
          </div>

          {/* HELP */}
          <div className="px-4 py-6 border border-gray-200 rounded-2xl">

            <div className="flex items-center gap-3">
              <Headset className="text-amber-500" size={36} />
              <div>
                <h2 className="font-semibold">Need Help?</h2>
                <p className="text-sm text-gray-700">Support team is here</p>
              </div>
            </div>

            <button className="w-full mt-4 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-lg cursor-pointer">
              Contact Support
            </button>

          </div>

        </div>
      </div>

      {/* BOTTOM FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 border border-gray-200 rounded-2xl p-6">

        <div className="flex items-start gap-4">
          <ShieldCheck size={40} className="text-amber-400" />
          <div>
            <h2 className="font-semibold">Safe & Secure</h2>
            <p className="text-sm text-gray-600">Protected data</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MessageSquareMore size={40} className="text-amber-400" />
          <div>
            <h2 className="font-semibold">Fast Response</h2>
            <p className="text-sm text-gray-600">Quick replies</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <BadgeDollarSign size={40} className="text-amber-400" />
          <div>
            <h2 className="font-semibold">Best Price</h2>
            <p className="text-sm text-gray-600">Great deals</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Car size={40} className="text-amber-400" />
          <div>
            <h2 className="font-semibold">Quality Cars</h2>
            <p className="text-sm text-gray-600">Wide selection</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ContactDealer;