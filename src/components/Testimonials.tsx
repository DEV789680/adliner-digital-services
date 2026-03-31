import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const videoTestimonials = [
  {
    name: 'Siddharth ',
    role: 'Bhuvika Blue LLP',
    video: 'src/assets/siddharthvideo.mp4',
    thumbnail: 'src/assets/siddharthphoto.jpeg',
  },
  {
    name: 'Vivek Rajput',
    role: 'Real Estate',
    video: 'src/assets/vivekrajputvideo.mp4',
    thumbnail: 'src/assets/vivekphoto.jpeg',
  },
  {
    name: 'Vipin Sharma',
    role: 'Blue IMF Private Limited',
    video: 'src/assets/vipinsharmavideo.mp4',
    thumbnail: 'src/assets/vipinphoto.jpeg',
  },
  {
    name: 'Ajay Agarwal',
    role: 'AVEENA CO-FOUNDER',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
];

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Happy Clients <span className="text-blue-600">Testimonials</span>
          </h2>
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {videoTestimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveVideo(item.video)}
              className="relative group rounded-3xl overflow-hidden cursor-pointer"
            >

              <div className="relative w-full aspect-[9/16]">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play className="text-black w-6 h-6 ml-1" />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 p-4">
                  <h4 className="text-white font-semibold text-sm">
                    {item.name}
                  </h4>
                  <p className="text-white/70 text-xs">
                    {item.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* 🎬 VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)} // click outside
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // prevent closing inside
              className="relative w-full max-w-xl md:max-w-2xl bg-black rounded-2xl overflow-hidden"
            >

              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 z-10 bg-white/90 rounded-full px-3 py-1 text-black font-bold hover:bg-white transition"
              >
                ✕
              </button>

              {/* Video */}
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain"
              />

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}