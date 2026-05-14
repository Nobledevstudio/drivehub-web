import { useState } from "react";
import { assets } from "../assets/asset"
import { Headset, BadgeCheck, Handshake, Clock, Send, ChevronDown } from "lucide-react";

interface helpProps {
  icon: React.ElementType,
  title: string,
  description: string,
  email: string
  phone: string
}

interface faqProps {
  question: string,
  answer: string
}


const Contact = () => {

  const [open, setOpen] = useState<number | null>(0);

  const help: helpProps[] = [
    {
      icon: Headset,
      title: "Customer Support",
      description: "Questions about listings, buying or renting a car, or using DriveHub",
      email: "support@drivehub.com",
      phone: "+2349066545625",
    },
    {
      icon: BadgeCheck,
      title: "Dealer Support",
      description: "Need help with your dealer account, listings, or verifications",
      email: "dealers@drivehub.com",
      phone: "+2349011246467",
    },
    {
      icon: Handshake,
      title: "Partnership & Others",
      description: "For partnerships, feedback, and general inquiries",
      email: "partnerships@drivehub.com",
      phone: "+2349054378654",
    },
  ];


  const faqs: faqProps[] = [
    {
      question: "How do I list my car on DriveHub?",
      answer:
        "Create a dealer account, verify your details, and upload your vehicle information."
    },
    {
      question: "Does DriveHub verify dealers?",
      answer:
        "Yes. All dealer accounts go through identity and business verification."
    },
    {
      question: "Can I finance a vehicle on DriveHub?",
      answer:
        "Yes. Financing options are available on selected listings."
    },
    {
      question: "How long does support take?",
      answer:
        "Our support team usually responds within 24 hours."
    }
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Conact Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24 py-12">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* badge */}
          <div className="inline-flex items-center justify-center lg:justify-start">
            <span className="px-4 py-1 text-xs font-semibold tracking-wide bg-amber-100 text-amber-600 rounded-full font-sans">
              CONTACT
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-heading">
            GET IN TOUCH.
            <br /><span className="text-amber-500">WITH US</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-sans">
            we'd love to hear from you. Choose a way to reach us or send a message
          </p>

        </div>

        <div className="relative flex justify-center lg:justify-end">



          <img
            src={assets.about_img}
            alt="Hero Car"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
          />

        </div>


      </div>

      {/* Help */}

      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl text-gray-900 font-bold">How can we help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {help.map((item, index) => (
            <div key={index} className="bg-white/45 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-5">
                <div className="bg-amber-100/70 p-5 rounded-full">
                  <item.icon className="text-amber-500" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-amber-400 px-2 py-1 rounded">{item.email}</span>
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold"> {item.phone}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-6 sm:p-10">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Send us a message
        </h2>

        <hr className="my-4 w-16 h-1 bg-amber-400 border-0 rounded-full" />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* Left Column */}
          <div className="lg:col-span-2">
            <form className="space-y-5">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>


              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>

                  <select className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-400">
                    <option>Select an option</option>
                    <option>Customer</option>
                    <option>Dealer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Enter your message here..."
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>


              {/* Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition w-full"
              >
                Send Message <Send className="-rotate-360" size={18} />
              </button>

            </form>
          </div>


          {/* Right Column */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-center text-center">

            <div className="mx-auto bg-amber-100 p-4 rounded-full w-fit">
              <Clock className="text-amber-600" size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              We Usually Respond
              <br />
              Within 24 Hours
            </h3>

            <hr className="my-4 w-14 h-1 bg-amber-400 border-0 mx-auto rounded-full" />

            <p className="text-gray-600 leading-relaxed">
              Thank you for reaching out to DriveHub.
              Our support team will get back to you as soon as possible.
            </p>

          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16s">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <hr className="my-4 w-16 h-1 bg-amber-400 border-0 rounded-full" />

        <div className="space-y-4 mt-8">
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">

                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <h3 className="font-semibold text-gray-900">
                    {item.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform ${open === index ? "rotate-180" : ""
                      }`}
                    size={20}
                  />
                </button>

                {open === index && (
                  <div className="mt-4 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact