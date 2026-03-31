'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const service = data.get('service');
    const message = data.get('message');

    // 🔥 Gmail
    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@adliner.com&su=${subject}&body=${body}`;

    // 🔥 WhatsApp
    const whatsappMsg = encodeURIComponent(
`Hi, I'm ${name}
Email: ${email}
Service: ${service}

${message}`
    );

    const whatsappLink = `https://wa.me/919399414394?text=${whatsappMsg}`;

    // 👉 Open Gmail + WhatsApp
    window.open(gmailLink, '_blank');
    window.open(whatsappLink, '_blank');

    // 🔥 Backup Formspree
    setLoading(true);

    await fetch('https://formspree.io/f/xyzabcd', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    setSuccess(true);
    form.reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[100px] -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900">
                Let's build something <span className="text-gradient-primary">extraordinary.</span>
              </h2>

              <p className="text-slate-600 text-lg mb-12 max-w-md">
                Ready to scale your brand? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Us</p>
                    <p className="text-slate-900 font-medium">hello@adliner.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="text-slate-900 font-medium">+91 9399414394</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Visit Us</p>
                    <p className="text-slate-900 font-medium">
                      Fourth Floor, 187-A, near Milan Resturant, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">

                {success ? (
                  <div className="text-center py-10">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      ✅ Message Sent!
                    </h3>
                    <p className="text-slate-600">
                      We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (

                  <form className="space-y-6" onSubmit={handleSubmit}>

                    <input type="hidden" name="_subject" value="New Client Inquiry!" />

                    {/* INPUTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                      <input 
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
                      />

                      <input 
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
                      />

                    </div>

                    <select 
                      name="service"
                      required
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
                    >
                      <option value="">Select a service...</option>
                      <option>Social Media Marketing</option>
                      <option>Performance Ads</option>
                      <option>Website Development</option>
                      <option>SEO Optimization</option>
                      <option>Branding</option>
                    </select>

                    <textarea 
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your goals..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none transition-all shadow-sm"
                    />

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition shadow-md hover:shadow-lg"
                      >
                        {loading ? 'Opening...' : 'Send via Gmail'}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const form = document.querySelector('form') as HTMLFormElement;
                          const data = new FormData(form);

                          const name = data.get('name');
                          const email = data.get('email');
                          const service = data.get('service');
                          const message = data.get('message');

                          const whatsappMsg = encodeURIComponent(
`Hi, I'm ${name}
Email: ${email}
Service: ${service}

${message}`
                          );

                          window.open(`https://wa.me/919399414394?text=${whatsappMsg}`, '_blank');
                        }}
                        className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition shadow-md hover:shadow-lg"
                      >
                        Chat on WhatsApp
                      </button>

                    </div>

                  </form>

                )}

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}