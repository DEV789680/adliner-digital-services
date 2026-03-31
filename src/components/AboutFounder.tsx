import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function AboutFounder() {
  const goals = [
    'Generate high-quality leads and sales through targeted Meta Ads campaigns',
    'Maximize ROI with continuous data-driven ad optimization',
    'Build high-converting websites and landing pages that drive results',
    'Create fast, scalable, and user-friendly digital experiences for long-term growth',
  ];

  return (
    <section id="about" className="py-16 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-900"
        >
          About the Founder
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">

              {/* ✅ FIXED */}
              <img
                src="/assets/ashu.png"
                alt="Founder"
                className="w-full h-[540px] object-cover object-top"
              />

            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-100 rounded-full -z-10 blur-2xl opacity-60"></div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Ashutosh is a performance marketing expert specializing in Meta Ads and influencer marketing...
          </p>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Goals</h3>

            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 text-slate-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}