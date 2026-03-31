import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business, analyzing your market, competitors, and audience to craft a bespoke digital roadmap.',
  },
  {
    num: '02',
    title: 'Design & Development',
    description: 'Our creative and technical teams bring the strategy to life with stunning visuals and robust, scalable architecture.',
  },
  {
    num: '03',
    title: 'Launch & Execution',
    description: 'We deploy your campaigns and platforms with precision, ensuring everything tracks perfectly from day one.',
  },
  {
    num: '04',
    title: 'Scale & Optimize',
    description: 'Continuous A/B testing, data analysis, and refinement to maximize your ROI and drive exponential growth.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                Our proven <br />
                <span className="text-gradient-primary">workflow.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                A systematic approach to digital growth that eliminates guesswork and delivers consistent, scalable results.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md"
              >
                Start Your Project
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[23px] md:left-[39px] top-16 bottom-[-48px] w-[2px] bg-slate-200"></div>
                  )}
                  
                  {/* Number Circle */}
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-xl md:text-2xl font-display font-bold text-primary-600 border border-slate-100">
                    {step.num}
                  </div>
                  
                  <div className="pt-2 md:pt-5">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
