import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

export function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Instagram */}
      <motion.a 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        href="https://www.instagram.com/adlinerdigitalservices?igsh=MXJpamF4eGxtcWs2bA=="
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Instagram"
      >
        <Instagram className="text-pink-500" size={22} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://wa.me/message/B2VZOGLUNP5TE1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-green-500" size={22} />
      </motion.a>

    </div>
  );
}