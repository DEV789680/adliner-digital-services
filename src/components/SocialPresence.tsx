import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const posts = [
  { id: 1, image: '/assets/day1reel.jpeg', link: 'https://www.instagram.com/reel/DMadsQIzbnb/?igsh=MXd4aHc1Z254OWJrOA=='},
  { id: 2, image: '/assets/day2reel.jpeg', link: 'https://www.instagram.com/reel/DMdDoTLTPio/?igsh=MWVqcDN1aTZ3djU5Mw==' },
  { id: 3, image: '/assets/day3reel.jpeg', link: 'https://www.instagram.com/reel/DMfjjdCIDeT/?igsh=ZTU3NmZsbDI2dzlz' },
  { id: 4, image: '/assets/day4reel.jpeg', link: 'https://www.instagram.com/reel/DMkVpb7xAWv/?igsh=N3EzOW9qdzE5Y25i' },
  { id: 5, image: '/assets/day5reel.jpeg', link: 'https://www.instagram.com/reel/DMnDWNGRGDQ/?igsh=MXBnYzFjeWUzZ284Yw==' },
  { id: 6, image: '/assets/day6reel.jpeg', link: 'https://www.instagram.com/reel/DMr6r-csKJG/?igsh=aXp2NDJ4dTl2ejZw' },
];

export function SocialPresence() {
  const [index, setIndex] = useState(2);

  const next = () => setIndex((prev) => (prev + 1) % posts.length);
  const prev = () => setIndex((prev) => (prev - 1 + posts.length) % posts.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white text-center">

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">
        Trusted by 4000+ People
      </h2>

      <div className="relative h-[540px] flex items-center justify-center overflow-hidden">

        {posts.map((post, i) => {
          const total = posts.length;
          let offset = i - index;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          return (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute cursor-pointer"
              animate={{
                x: offset * 300,
                scale: offset === 0 ? 1 : 0.82,
                opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.5,
                zIndex: offset === 0 ? 10 : 5,
              }}
              transition={{
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <div
                className={`rounded-3xl overflow-hidden transition-all duration-500 ${
                  offset === 0
                    ? 'shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:scale-105'
                    : 'shadow-md'
                }`}
              >
                <img
                  src={post.image}
                  alt="social"
                  className={`object-cover ${
                    offset === 0
                      ? 'w-[340px] h-[480px]'
                      : 'w-[240px] h-[340px]'
                  }`}
                />
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-12">

        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-2">
          {posts.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-slate-900' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

      </div>
    </section>
  );
}