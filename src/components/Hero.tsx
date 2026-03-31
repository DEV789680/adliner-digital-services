import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-10 px-6 flex flex-col items-center text-center overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,116,139,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,116,139,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Fade */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white via-white/80 to-white"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-0"
        >
          <img
            src="src/assets/ashu.png"
            alt="Founder"
            className="w-[220px] md:w-[280px] lg:w-[320px] mx-auto object-contain drop-shadow-2xl"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)"
            }}
          />
        </motion.div>

        {/* 🔥 OVERLAP TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            text-4xl md:text-6xl lg:text-7xl 
            font-display font-bold 
            tracking-tight text-slate-900 
            max-w-4xl 
            -mt-10 md:-mt-16   /* 👈 MAGIC */
            relative z-20
          "
        >
          Grow your Business with <br /> Adliner
        </motion.h1>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <a
            href="#explore"
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Let's Explore <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
          >
            Contact Us
          </a>
        </motion.div>

        {/* CLIENTS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mt-6"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                className="w-10 h-10 rounded-full border-2 border-[#f8f9fb]"
              />
            ))}
          </div>

          <p className="text-sm font-medium text-slate-600 whitespace-nowrap">
            Trusted by <span className="text-blue-600 font-semibold">1K+</span> Clients
          </p>
        </motion.div>

      </div>
    </section>
  );
}