import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const highlights = [
    'Data-driven strategies',
    'Award-winning design team',
    'Transparent reporting',
    'Scalable growth models',
  ];

  return (
    <section id="about" className="py-16 md:py20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Graphic Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl shadow-slate-200/50">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Adliner Team Collaboration" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-primary-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-4xl font-display font-bold text-slate-900 mb-1">250+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Brands Scaled</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
              We don't just build, <br />
              <span className="text-gradient-primary">we accelerate.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Adliner Digital Services is a premium digital agency focused on one thing: measurable growth. We combine stunning aesthetics with ruthless performance marketing to turn your digital presence into your most valuable asset.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              See Our Work
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
