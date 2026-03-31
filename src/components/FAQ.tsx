import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer performance marketing, Google Ads, app development, web development, and content creation services to help businesses grow online.',
  },
  {
    question: 'How soon can I see results?',
    answer: 'You can start seeing results within a few days of running ads, but consistent and scalable growth typically takes a few weeks of optimization.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Pricing depends on your requirements. We provide a custom quote after understanding your business goals and scope.',
  },
  {
    question: 'How do you generate leads for my business?',
    answer: 'We use targeted ads, data-driven strategies, high-converting creatives, and optimized funnels to generate high-quality leads.',
  },
  {
    question: 'Why should I choose your agency?',
    answer: 'We focus on real results, data-driven decisions, and long-term business growth. Our goal is not just traffic, but actual conversions and revenue.',
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-slate-600">
            Everything you need to know before working with us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >

                {/* Question */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-slate-900">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}