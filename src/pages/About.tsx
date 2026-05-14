import { ArrowRight, Store, UserRound } from "lucide-react";
import { assets } from "../assets/asset";
import WhyChoose from "../components/WhyChoose";


interface serveProps {
    icon: React.ElementType,
    title: string,
    description: string,
    button: string
}

const About = () => {


    const serve: serveProps[] = [
        {
            icon: UserRound,
            title: "For customers",
            description: "Discover a wide range of verified vehicles, compare options and connect with trusted dealers with confidence",
            button: "Explore Cars"
        },
        {
            icon: Store,
            title: "For Dealers",
            description: "Showcase Your Inventory to thousands of potential buyers and grow your business withe Drive Hub",
            button: "Join as Dealer"
        }
    ]


    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* About Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24 py-12">
                {/* Left Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    {/* badge */}
                    <div className="inline-flex items-center justify-center lg:justify-start">
                        <span className="px-4 py-1 text-xs font-semibold tracking-wide bg-amber-100 text-amber-600 rounded-full font-sans">
                            ABOUT DRIVE HUB
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-heading">
                        Building Trust.
                        <br /><span className="text-amber-500">Building Connections</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-sans">
                        DriveHb is a Modern Automotive marketplace that connects buyers with trusted Dealers
                        and quality vechiles across nigeria
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-3">
                        <button className="flex items-center px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition font-sans">
                            Browse Cars <ArrowRight size={18} className="ml-1" />
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:border-amber-400 hover:text-amber-500 transition font-sans">Join as Dealer</button>
                    </div>



                </div>

                <div className="relative flex justify-center lg:justify-end">



                    <img
                        src={assets.about_img}
                        alt="Hero Car"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
                    />

                </div>


            </div>

            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 bg-gray-50 rounded-2xl py-16">

                {/* Left content */}
                <div className="max-w-xl">

                    <h1 className="text-2xl md:text-4xl text-black font-bold font-heading">
                        Our Story
                    </h1>

                    <hr className="my-3 w-14 h-1 bg-amber-400 border-0" />

                    <p className="my-4 text-base font-sans text-gray-700">
                        DriveHub was created to simplify how people buy and rent cars.
                    </p>

                    <p className="my-4 text-base font-sans text-gray-700">
                        We saw the challenges in the traditional process — limited choices, lack of transparency,
                        and difficult communication.
                    </p>

                    <p className="my-4 text-base font-sans text-gray-700">
                        So we built a platform that brings everything together in one place:
                        verified dealers, quality listings, and a better experience to buy or rent cars.
                    </p>

                </div>

                <div className="relative flex justify-center lg:justify-end">

                    {/* glow */}
                    <div className="absolute w-[320px] h-80 bg-amber-400/20 rounded-full blur-3xl -z-10"></div>

                    {/* image wrapper */}
                    <div className="relative">

                        {/* dark overlay */}
                        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                        <img
                            className="w-full max-w-md object-cover rounded-2xl shadow-lg"
                            src={assets.our_story}
                            alt="Our story"
                        />

                    </div>
                </div>

            </div>

            {/* Who we serve */}
            <div className="text-center py-12 overflow-x-hidden">

                <h1 className="text-2xl md:text-4xl text-black font-bold font-heading">
                    Who we serve
                </h1>

                <hr className="my-3 w-14 h-1 bg-amber-400 mx-auto border-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {serve.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="relative p-8 rounded-2xl text-center bg-white/60 backdrop-blur-md border 
          border-white/40 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            >

                                {/* safe glow (clipped inside card) */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-300/20 rounded-full blur-2xl pointer-events-none"></div>

                                {/* icon */}
                                <div className="flex justify-center mb-5">
                                    <div className="bg-amber-100/70 p-4 rounded-full">
                                        <Icon className="text-amber-500" size={32} />
                                    </div>
                                </div>

                                {/* title */}
                                <h2 className="text-xl font-bold text-black mb-2">
                                    {item.title}
                                </h2>

                                {/* description */}
                                <p className="text-gray-600 mb-6">
                                    {item.description}
                                </p>

                                {/* button */}
                                <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
                                    {item.button}
                                    <ArrowRight size={18} />
                                </button>

                            </div>
                        );
                    })}

                </div>
            </div>

            <WhyChoose/>

        </section>
    )
}

export default About