import { Calendar1Icon, ChevronDown, IdCard, MessageSquare, ShieldCheck, User, User2 } from "lucide-react"
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import CheckOutLeft from "../components/CheckOutLeft";


const CheckOutPage = () => {

  const [countryCode, setCountryCode] = useState("+234");


  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/*-------------- Right Side----------------- */}
        <div>
          <h2 className="text-3xl font-semibold">Checkout</h2>
          <p className="text-sm text-gray-600 my-2">Enter Your details and complete your payment to confirm booking</p>
          <div className="border border-gray-200 rounded-2xl p-4 mt-2">

            <form>
              <div className="flex items-center gap-4">
                <div className="bg-amber-50 text-amber-500 p-2 rounded-full inline-flex items-center justify-center">
                  <User2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-md font-semibold">Customer Information</h3>
                  <p>Please Enter Your details below</p>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>

                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your Full name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="name" className="text-sm font-medium">
                  Email
                </label>

                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your Email Address"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label className="text-sm font-medium">Phone</label>

                <div className="relative mt-1 flex items-center border border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-amber-400">

                  {/* Country Selector */}
                  <div className="relative flex items-center bg-gray-50 px-3 border-r border-gray-200">

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

                  {/* Flag display */}
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
                      style={{
                        width: "1.2em",
                        height: "1.2em",
                      }}
                    />
                  </div>

                  {/* Phone input */}
                  <input
                    type="tel"
                    placeholder="801 234 5678"
                    className="w-full px-3 py-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="dob" className="text-sm font-medium">
                  Date of Birth(Optional)
                </label>

                <div className="relative mt-1">
                  <Calendar1Icon
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <input
                    id="dob"
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="driverLicense" className="text-sm font-medium">
                  Driver’s License Number
                </label>

                <div className="relative mt-1">
                  <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                  <input
                    id="driverLicense"
                    type="text"
                    placeholder="Enter your driver’s license number"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="dealerNote" className="text-sm font-medium">
                  Note to Dealer (Optional)
                </label>

                <div className="relative mt-1">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />

                  <textarea
                    id="dealerNote"
                    rows={4}
                    placeholder="Write any special instructions, preferences, or requests for the dealer..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  />
                </div>
              </div>
            </form>
            <p className="flex gap-2 text-sm text-gray-700 my-8"><ShieldCheck/> Your information is secure and will only be used for this booking.</p>
          </div>
        </div>

        {/*--------------- Left Side----------------- */}
        <div>
            <CheckOutLeft/>
        </div>
      </div>
    </section>
  )
}

export default CheckOutPage