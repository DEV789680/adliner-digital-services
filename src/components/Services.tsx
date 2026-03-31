import { motion } from 'motion/react';
import { Smartphone, Monitor, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Performance Marketing',
    description: 'Drive scalable growth with data-driven ad strategies across Meta, Google, and more. We focus on maximizing ROI through continuous optimization, targeting, and performance tracking.',
    icon: Smartphone,
    image: '/assets/performancemarketing.jpeg', // ✅ FIXED
  },
  {
    title: 'App & Web Development',
    description: 'We build fast, responsive, and conversion-focused websites and applications designed to scale your business and deliver seamless user experiences.',
    icon: Monitor,
    image: '/assets/app&web.jpeg', // ✅ FIXED
  },
  {
    title: 'Google Ads',
    description: 'Launch and scale profitable campaigns with precision targeting and smart bidding strategies that generate high-quality leads and consistent results.',
    icon: Cloud,
    image: '/assets/googleads.jpeg', // ✅ FIXED
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 max-w-7xl mx-auto w-full py-16 md:py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-200/50 text-slate-600 text-sm font-medium mb-4">
          Features
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-900 max-w-2xl mx-auto">
          Streamline Business with our Flexible Options
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
          >

            {/* Image */}
            <div className="h-[420px] w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Icon */}
            <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-md z-20">
              <service.icon size={20} className="text-slate-900" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="transition-all duration-500 ease-out translate-y-6 group-hover:translate-y-0">

                <h3 className="text-white text-xl font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                  {service.description}
                </p>

              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}