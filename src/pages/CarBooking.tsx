import { Link, useParams } from "react-router-dom"
import { carData } from "../data/carData";
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    Calendar,
    CalendarX2,
    Car,
    CreditCard,
    Fuel,
    Headset,
    InfoIcon,
    Lock,
    MapPin,
    NotebookIcon,
    NotebookText,
    Receipt,
    ShieldCheck
} from "lucide-react";

import BookingDate from "../components/BookingDate";
import PriceToggle from "../components/PriceToggle";

interface boookingStatsProps {
    icon: React.ElementType
    title: string,
    subtitle: string
}

const CarBooking = () => {

    const bookingStats: boookingStatsProps[] = [
        { icon: Headset, title: "24/7 Customer Support", subtitle: "We are here to help anytime" },
        { icon: BadgeCheck, title: "Verified Dealers", subtitle: "All Dealers are verified" },
        { icon: CalendarX2, title: "Easy Cancellation", subtitle: "Cancel or Modify your booking easily" }
    ]

    const { id } = useParams();
    const bookingCar = carData.find((c) => c?.id === Number(id))

    if (!bookingCar) return <div>Car not found</div>;

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* CAR CARD */}
                    <div className="border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        {/* LEFT SIDE */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full">

                            {/* IMAGE */}
                            <div className="w-full sm:w-40 md:w-48 lg:w-52 aspect-16/10 shrink-0">
                                <img
                                    src={bookingCar.image}
                                    alt=""
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* INFO */}
                            <div className="flex flex-col justify-between gap-2">

                                <div className="flex flex-col gap-1">
                                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                                        {bookingCar.name}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        by Luxury Wheels Dealer
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">

                                    <p className="flex gap-2 items-center">
                                        <Fuel className="w-4 h-4" />
                                        {bookingCar.year}
                                    </p>

                                    <p className="flex gap-2 items-center">
                                        <Fuel className="w-4 h-4" />
                                        {bookingCar.fuel}
                                    </p>

                                    <p className="flex gap-2 items-center">
                                        <Fuel className="w-4 h-4" />
                                        {bookingCar.seats}
                                    </p>

                                    <p className="flex gap-2 items-center">
                                        <Fuel className="w-4 h-4" />
                                        {bookingCar.transmission}
                                    </p>

                                </div>

                            </div>
                        </div>

                        {/* PRICE */}
                        <div className="w-full lg:w-auto flex lg:block justify-start lg:justify-end">

                            {bookingCar.pricing.buy ? (
                                <h2 className="text-amber-500 text-2xl font-semibold whitespace-nowrap">
                                    ₦{bookingCar.pricing.buy.toLocaleString()}
                                </h2>
                            ) : (
                                <h2 className="text-amber-500 text-2xl font-semibold whitespace-nowrap">
                                    ₦{bookingCar.pricing?.rent?.toLocaleString()}
                                    <br />
                                    <span className="text-xs text-black">/ Per Day</span>
                                </h2>
                            )}

                        </div>

                    </div>

                    {/* DATE CARD */}
                    <div className="border border-gray-200 rounded-2xl p-4 space-y-4">
                        <div className="flex items-start gap-4">
                            <Calendar size={30} className="text-amber-500" />
                            <div>
                                <h3 className="font-semibold">Select Booking Date</h3>
                                <p className="text-sm text-gray-500">
                                    Choose your start date and end date
                                </p>
                            </div>
                        </div>
                        <BookingDate />
                    </div>

                    {/* ADDITIONAL OPTIONS FIX */}
                    <div className="border border-gray-200 rounded-2xl p-4 space-y-4">

                        <div className="flex items-center gap-3">
                            <InfoIcon />
                            <h3 className="font-semibold text-md">
                                Additional Options <span className="font-sm font-light">(Optional)</span>
                            </h3>
                        </div>

                        {/* FIX: grid instead of flex */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                            {/* PICKUP */}
                            <div className="w-full border border-gray-300 rounded-md p-3 flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-700">
                                    Pick Up Location
                                </label>

                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-amber-500 shrink-0" />

                                    <select className="w-full outline-none bg-transparent text-sm text-gray-700 min-w-0">
                                        <option>Select Pick Up Location</option>
                                        <option value="lagos">Lagos</option>
                                        <option value="abuja">Abuja</option>
                                        <option value="port-harcourt">Port Harcourt</option>
                                    </select>
                                </div>
                            </div>

                            {/* NOTE */}
                            <div className="w-full border border-gray-300 rounded-md p-3 flex flex-col gap-3">
                                <label className="text-sm font-medium text-gray-700">
                                    Note to Dealer
                                </label>

                                <div className="flex items-center gap-2">
                                    <NotebookIcon className="w-5 h-5 text-amber-500 shrink-0" />

                                    <input
                                        type="text"
                                        placeholder="Write a Note(Optional)"
                                        className="w-full outline-none bg-transparent text-sm text-gray-700 min-w-0"
                                    />
                                </div>
                            </div>

                            {/* INSURANCE */}
                            <div className="w-full border border-gray-300 rounded-md p-3 flex flex-col gap-3">

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />

                                        <div className="flex flex-col">
                                            <h3 className="text-sm font-medium text-gray-700">
                                                Add Insurance
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                Protect your trip
                                            </p>
                                        </div>
                                    </div>

                                    <PriceToggle />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-1 lg:sticky lg:top-10 h-fit">

                    {/* SUMMARY */}
                    <div className="border border-gray-200 rounded-2xl p-5 space-y-5">

                        <div className="flex items-center gap-3">
                            <NotebookText className="w-6 h-6 text-amber-500" />
                            <h3 className="font-semibold text-lg">Booking Summary</h3>
                        </div>

                        <div className="space-y-3">

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Car className="w-4 h-4" />
                                    <p>Vehicle</p>
                                </div>
                                <p className="font-semibold">{bookingCar.name}</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Building2 className="w-4 h-4" />
                                    <p>Dealer</p>
                                </div>
                                <p className="font-semibold">{bookingCar.dealer}</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <p>Start Date</p>
                                </div>
                                <p className="font-semibold">Sun, 25 May, 2026</p>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <p>End Date</p>
                                </div>
                                <p className="font-semibold">Mon, 28 May, 2026</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-gray-600">Duration</p>
                                <p className="font-semibold">3 Days</p>
                            </div>

                        </div>

                        <hr />

                        <div className="space-y-3">

                            <h3 className="font-semibold flex items-center gap-2">
                                <Receipt className="w-4 h-4" />
                                Price Breakdown
                            </h3>

                            <div className="flex justify-between text-sm">
                                <p className="text-gray-700">₦25,000 × 3 days</p>
                                <p className="text-gray-700">₦75,000</p>
                            </div>

                            <div className="flex justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <CreditCard className="w-4 h-4" />
                                    <p>Service Charge</p>
                                </div>
                                <p>₦2,000</p>
                            </div>

                        </div>

                        <hr />

                        <div className="space-y-4">

                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-lg">Total Price</h2>
                                <h1 className="text-2xl font-bold text-amber-500">₦77,000</h1>
                            </div>

                            <div className="bg-amber-50 flex gap-3 p-4 rounded-lg">
                                <ShieldCheck className="w-5 h-5 text-amber-600" />
                                <div>
                                    <h2 className="font-semibold">Secure Booking</h2>
                                    <p className="text-sm text-gray-600">
                                        Your payment is secure and safe with DriveHub
                                    </p>
                                </div>
                            </div>

                            <Link to={`/car/${id}/book/checkout`} className="flex items-center justify-center gap-2 bg-amber-500 w-full text-white py-3 rounded-md hover:bg-amber-600 transition">
                                Confirm Booking <ArrowRight className="w-4 h-4" />
                            </Link>

                            <p className="flex justify-center items-center gap-2 text-sm text-gray-500">
                                <Lock className="w-4 h-4" />
                                You won't be charged yet
                            </p>

                        </div>

                    </div>

                    {/* STATS */}
                    <div className="border border-gray-200 rounded-2xl p-5 mt-4 space-y-4">

                        {bookingStats.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
                                <item.icon className="text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    <h2 className="text-sm font-semibold text-gray-900">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    )
}

export default CarBooking