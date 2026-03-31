import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-10">
            Build Your Startup App at Affordable Cost
          </h2>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="text-slate-900 ml-1" size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
}
