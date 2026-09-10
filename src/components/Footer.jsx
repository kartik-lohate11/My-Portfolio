import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} <span className="text-white font-semibold">Kartik Lohate</span>. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all flex items-center gap-2 text-xs font-semibold"
        >
          <span>Back to top</span>
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
