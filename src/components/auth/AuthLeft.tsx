import { CarIcon, ShieldCheck, Sparkles, } from "lucide-react";
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";

interface WelcomeStatsProps {
  icon: React.ElementType;
  title: string;
  
  description: string;
}

interface AuthLeftProps {
   title: string
   text?: string
   description: string
}


const AuthLeft = ({ title, text, description }: AuthLeftProps) => {
  const welcomeStats: WelcomeStatsProps[] = [
    {
      icon: CarIcon,
      title: "Premium Cars",
      description: "Explore verified listings from trusted dealers",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Dealers",
      description: "Connect with professional dealers near you",
    },
    {
      icon: Sparkles,
      title: "Smart Experience",
      description: "Enjoy a seamless and intuitive user experience",
    },
  ];

  return (
    <div className="text-white flex flex-col gap-10 z-20 px-10">

      {/* Header */}
      <div className="flex flex-col gap-4 ">
        <Link to="/">
          <img
            className="w-56 z-10"
            src={assets.logo}
            alt="Drive Hub Logo"
          />
        </Link>

        <h1 className="text-5xl font-heading leading-tight">
           {title}<br />
          <span className="text-amber-300 font-bold">DriveHub</span> <span>{text}</span>
        </h1>

        <p className="text-white/70 text-sm max-w-sm">
          {description}
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-6">
        {welcomeStats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index}   className="flex items-start gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
              {/* Icon */}
              <div className="p-2 rounded-lg bg-white/10">
                <Icon className="w-5 h-5 text-white" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AuthLeft;