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
    <section id="about" className="py-16 px-6 max-w-4xl mx-auto w-full">

      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-900"
        >
          About the Founder
        </motion.h2>
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Ashutosh is a performance marketing expert specializing in Meta Ads and influencer marketing...
        </p>

        {/* Goals */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 w-full">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Our Goals
          </h3>

          <ul className="space-y-4">
            {goals.map((goal, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

    </section>
  );
}