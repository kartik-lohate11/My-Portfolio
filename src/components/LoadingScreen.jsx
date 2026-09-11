import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center z-50 pointer-events-auto"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500/30 border-t-cyan-400 rounded-full mb-6"
            />
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-center"
            >
              Hello! 👋 <br /> I am Kartik
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-4 text-sm font-medium tracking-wide"
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
