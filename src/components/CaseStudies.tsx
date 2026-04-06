import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 'jewellery-growth',
    title: 'Jewellery Brand Growth Campaign',
    category: 'Performance Marketing',
    result: 'High quality leads & sales boost',
    image: '/assets/jewelleryhero.jpeg', // ✅ FIXED
    featured: true,
  },
  {
    id: 'sk-fit-gym',
    title: 'SK Fit Gym Growth System',
    category: 'Performance Marketing',
    result: '8X Sales Growth',
    image: '/assets/gym.jpeg', // ✅ FIXED
  },
  {
    id: 'aranya-real-estate',
    title: 'Real Estate Sales Growth System',
    category: 'Performance Marketing',
    result: 'Multi-Project Sales',
    image: '/assets/realestatehero.jpeg', // ✅ FIXED
  },
];

export function CaseStudies() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Featured <span className="text-gradient-primary">Case Studies</span>
            </h2>
            <p className="text-slate-600 mt-3 max-w-lg">
              Explore how we've helped brands achieve real growth through strategy & execution.
            </p>
          </div>

          <button
            onClick={() => navigate('/case/all')}
            className="mt-4 md:mt-0 text-sm font-medium text-slate-700 hover:text-primary-600 transition"
          >
            View All Projects →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* BIG CARD */}
          <motion.div
            onClick={() => navigate(`/case/${caseStudies[0].id}`)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src={caseStudies[0].image}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                {caseStudies[0].category}
              </span>
              <h3 className="text-2xl font-bold mt-3">{caseStudies[0].title}</h3>
              <p className="text-sm text-white/80">{caseStudies[0].result}</p>
            </div>
          </motion.div>

          {/* SIDE CARDS */}
          <div className="flex flex-col gap-6">
            {caseStudies.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => navigate(`/case/${item.id}`)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={item.image}
                  className="w-full h-[190px] object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur">
                    {item.category}
                  </span>
                  <h4 className="font-semibold mt-2">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}