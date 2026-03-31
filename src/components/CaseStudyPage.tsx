'use client';

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const caseStudyData: any = {

  'sk-fit-gym': {
    title: 'SK Fit Gym Growth System',
    subtitle: 'Scaling a Local Gym in Bhopal to 8X Sales',
    category: 'Performance Marketing',
    result: '8X Sales Growth',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80',
    description:
      'We transformed SK Fit Gym’s marketing into a predictable revenue engine using performance marketing.',
    problem:
      'Inconsistent leads, low conversions, and dependency on offline promotions.',
    solution:
      'Full-funnel strategy, hyper-local targeting, and high-converting creatives.',
    bullets: [
      '70–100 high-quality leads/day',
      '8X increase in sales',
      'Reduced cost per lead',
      'Strong brand visibility',
      'Predictable growth system',
    ],
    beforeAfter: {
      before: '10–15 inconsistent leads/day, unstable revenue',
      after: '70–100 daily leads, scalable growth',
    },
  },

  'jewellery-growth': {
    title: 'Jewellery Brand Growth Campaign',
    subtitle: 'Scaling a Premium Jewellery Brand in Bhopal',
    category: 'Performance Marketing',
    result: 'Lead & Sales Boost',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1600&q=80',
    description:
      'Executed performance campaigns to drive leads and offline conversions.',
    problem:
      'Low lead consistency and weak conversion into store visits.',
    solution:
      'Meta & Google Ads with optimized creatives and targeting.',
    bullets: [
      'High-quality leads',
      'More store visits',
      'Lower CPL',
      'Stronger branding',
      'Better ROI',
    ],
  },

  'aranya-real-estate': {
    title: 'Real Estate Sales Growth System',
    subtitle: 'Driving Multi-Project Sales for Aranya Pvt. Ltd., Raipur',
    category: 'Performance Marketing',
    result: 'Multi-Project Sales Growth',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80',
    description:
      'Built a scalable system to generate high-quality leads and drive real estate sales.',
    problem:
      'Low-quality leads and poor conversion into site visits and bookings.',
    solution:
      'Full-funnel campaigns, retargeting, and hyper-targeted segmentation.',
    bullets: [
      'High-intent property leads',
      'Multiple projects sold',
      'Improved ROI',
      'Better audience targeting',
      'Strong market presence',
    ],
    extra: [
      'Hyper-targeted campaigns',
      'Funnel: Awareness → Lead → Visit → Booking',
      'Retargeting strategy',
      'WhatsApp & call integration',
    ],
    impact: [
      'More site visits & serious inquiries',
      'Faster inventory clearance',
      'Scalable system for future projects',
    ],
  },
};

export function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = caseStudyData[id as string];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => navigate('/')} className="text-primary-600">
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">

        {!imgError && (
          <img
            src={data.image}
            alt={data.title}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Fallback background */}
        {imgError && (
          <div className="absolute inset-0 bg-slate-800"></div>
        )}

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white px-6"
        >
          <p className="text-sm uppercase opacity-80">{data.category}</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">{data.title}</h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        <button onClick={() => navigate(-1)} className="text-sm text-slate-600 hover:text-black">
          ← Back to Projects
        </button>

        {/* RESULT */}
        <div className="bg-primary-50 p-8 rounded-2xl text-center shadow-sm">
          <h2 className="text-3xl font-bold text-primary-600">{data.result}</h2>
        </div>

        {/* OVERVIEW */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Overview</h2>
          <p className="text-slate-600 leading-relaxed">{data.description}</p>
        </div>

        {/* PROBLEM */}
        <div>
          <h2 className="text-2xl font-bold mb-3">The Challenge</h2>
          <p className="text-slate-600 leading-relaxed">{data.problem}</p>
        </div>

        {/* SOLUTION */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Strategy</h2>
          <p className="text-slate-600 leading-relaxed">{data.solution}</p>
        </div>

        {/* RESULTS */}
        <div className="bg-slate-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="space-y-2 text-slate-600">
            {data.bullets.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* BEFORE AFTER */}
        {data.beforeAfter && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="font-bold text-red-600">Before</h3>
              <p>{data.beforeAfter.before}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-bold text-green-600">After</h3>
              <p>{data.beforeAfter.after}</p>
            </div>
          </div>
        )}

        {/* EXTRA */}
        {data.extra && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What We Did</h2>
            <ul className="space-y-2 text-slate-600">
              {data.extra.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* IMPACT */}
        {data.impact && (
          <div className="bg-green-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Impact</h2>
            <ul className="space-y-2 text-slate-600">
              {data.impact.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        )}

      </section>
    </div>
  );
}