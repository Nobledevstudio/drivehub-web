import { motion } from "framer-motion";
import { assets } from "../../assets/asset";

interface PageLoaderProps {
  title?: string;
  description?: string;
}

const PageLoader = ({
  title = "Loading...",
  description = "Please wait while we prepare everything.",
}: PageLoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#121417]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

      {/* Logo */}
      <motion.img
        src={assets.logo}
        alt="DriveHub"
        className="relative z-10 mb-6 w-32 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]"
        animate={{
          y: [0, -8, 0],
          scale: [0.98, 1.03, 0.98],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Title */}
      <motion.h2
        className="text-2xl font-semibold tracking-wide text-white"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-2 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {description}
      </motion.p>

      {/* Loading Dots */}
      <motion.div
        className="mt-4 flex gap-2"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-amber-400"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      <div className="relative mt-8 h-1.5 w-72 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          className="absolute left-0 top-0 h-full w-24 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.8)]"
          animate={{
            x: ["-120%", "320%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.3,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;