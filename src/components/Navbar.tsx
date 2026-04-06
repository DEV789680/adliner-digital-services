'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksLeft = [
    { name: 'Prebuilt', href: '#services' },
    { name: 'Customized', href: '#portfolio' },
  ];

  const navLinksRight = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`pointer-events-auto flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 w-full max-w-4xl ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-md border border-slate-200'
            : 'bg-white/60 backdrop-blur-md border border-slate-200/40'
        }`}
      >

        {/* LEFT NAV */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          {navLinksLeft.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ✅ CENTER LOGO + BRAND */}
        <a
          href="/"
          className="flex items-center gap-2 text-lg md:text-xl font-bold tracking-tight text-slate-900 text-center flex-shrink-0"
        >
          <img
            src="/assets/logo.png"   // ✅ FIXED (NO IMPORT)
            alt="Adliner Logo"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
          <span>Adliner Digital Services</span>
        </a>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center justify-end gap-6 flex-1">
          {navLinksRight.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white border border-slate-100 shadow-xl rounded-2xl p-6 flex flex-col gap-4 md:hidden pointer-events-auto"
          >
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}