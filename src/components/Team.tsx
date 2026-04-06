import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ashutosh Sharma',
    role: 'Founder & CEO',
    image: '/assets/ashu.jpeg', // ✅ FIXED
    position: 'object-[center_1%]',
    highlight: true,
  },
  {
    name: 'Omkar Sharma',
    role: 'Figma Designer + Frontend Developer',
    image: '/assets/omkar.png', // ✅ FIXED
    position: 'object-center',
  },
  {
    name: 'Paras Raghuvanshi',
    role: 'Chief Technical Officer',
    image: '/assets/paras.png', // ✅ FIXED
    position: 'object-[center_60%]',
  },
  {
    name: 'Divyansh Sharma',
    role: 'Full Stack Developer + UI/UX Designer',
    image: '/assets/divyansh.png', // ✅ FIXED
    position: 'object-center',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900"
          >
            Meet the <span className="text-gradient-primary">Experts</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            The minds behind the magic. Our team of specialists is dedicated to scaling your brand digitally.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden bg-white transition-all duration-500
              ${member.highlight ? 'scale-105 shadow-xl' : 'shadow-sm hover:shadow-xl'}`}
            >

              <div className="aspect-[3/4] w-full overflow-hidden relative">
                
                <img 
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.position} transition-transform duration-700 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">

                    <div className="inline-block px-4 py-1.5 mb-3 text-sm font-medium text-primary-900 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                      {member.role}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>

                    <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors">
                        <Linkedin size={16} />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors">
                        <Twitter size={16} />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}