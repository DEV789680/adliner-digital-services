'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const service = data.get('service');
    const message = data.get('message');

    setLoading(true);

    // ✅ SEND TO GOOGLE SHEETS
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwvcWf7poArYyVsDZC7A6tg1127DbHyWB5lNt6X2jTt2Fl3N5ewdrd6DR0ekW67sibsKQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
        }),
      });
    } catch (error) {
      console.error('Error saving to sheet:', error);
    }

    // ✅ OPEN GMAIL
    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`
    );

    window.open(`mailto:adlinerdigitalservices@gmail.com?subject=${subject}&body=${body}`);

    setSuccess(true);
    form.reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's build something <span className="text-blue-600">extraordinary.</span>
            </h2>

            <div className="space-y-6 mt-10">
              <div className="flex gap-3"><Mail /> adlinerdigitalservices@gmail.com</div>
              <div className="flex gap-3"><Phone /> +91 9752014394</div>
              <div className="flex gap-3"><MapPin /> Fourth Floor, 187-A, near Milan Resturant, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011</div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >

            {success ? (
              <div className="text-green-600 text-xl">✅ Message Sent</div>
            ) : (

              <form className="space-y-6" onSubmit={handleSubmit}>

                <input name="name" required placeholder="Name" className="border p-3 w-full rounded-xl" />
                <input name="email" required type="email" placeholder="Email" className="border p-3 w-full rounded-xl" />
                <input name="phone" required placeholder="Phone" className="border p-3 w-full rounded-xl" />

                <select name="service" required className="border p-3 w-full rounded-xl">
                  <option value="">Select service</option>
                  <option>Marketing</option>
                  <option>Ads</option>
                  <option>Website Development</option>
                  <option>App Development</option>
                </select>

                <textarea name="message" required placeholder="Message" className="border p-3 w-full rounded-xl" />

                <div className="flex gap-4">

                  <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                    {loading ? 'Sending...' : 'Send'}
                  </button>

                  {/* ✅ FIXED WHATSAPP */}
                  <button
                    type="button"
                    onClick={() => {
                      const form = document.querySelector('form');
                      const data = new FormData(form);

                      const whatsappMsg = encodeURIComponent(
`Hi, I'm ${data.get('name')}
Email: ${data.get('email')}
Phone: ${data.get('phone')}
Service: ${data.get('service')}

${data.get('message')}`
                      );

                      window.open(`https://wa.me/919752014394?text=${whatsappMsg}`);
                    }}
                    className="bg-green-500 text-white px-6 py-3 rounded-xl"
                  >
                    WhatsApp
                  </button>

                </div>

              </form>

            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}