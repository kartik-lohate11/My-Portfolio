import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, ChevronDown, Github, Linkedin, FileText, Code, Sparkles, Layers } from 'lucide-react';
import { calculateExperience } from '../utils/helpers';

export default function HeroSection({ data }) {
  const experience = calculateExperience(data.personal.joinDate);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'medium':
        return <FileText size={20} />;
      case 'stackoverflow':
        return <Code size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 -z-10" />
      <motion.div
        animate={{ y: [0, 25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-10 w-96 h-96 bg-cyan-600/15 rounded-full filter blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/40 mb-6 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-cyan-400" />
              <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
                Welcome to my portfolio
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                {data.personal.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-medium text-gray-200 mb-6"
            >
              {data.personal.title}
            </motion.p>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl px-5 py-2.5 mb-6 backdrop-blur-md"
            >
              <Award size={20} className="text-cyan-400" />
              <span className="text-gray-200 text-sm sm:text-base font-medium">
                <span className="font-bold text-cyan-400">{experience.display}</span> of professional experience
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              {data.personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button 
                onClick={scrollToProjects}
                className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-transform duration-200 hover:scale-105"
              >
                View My Work
              </button>
              <a
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 border border-purple-500/40 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/15 hover:border-purple-400 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 sm:gap-6 mt-10 pt-6 border-t border-purple-500/20"
            >
              <span className="text-gray-400 text-xs sm:text-sm font-medium">Follow me:</span>
              <div className="flex items-center gap-3">
                {data.social.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-cyan-400 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all shadow-sm"
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-25 animate-pulse" />

              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
                <img
                  src={data.personal.photo}
                  alt={data.personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 - Spring Boot & Java */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-4 sm:-left-8 bg-slate-900/90 border border-purple-500/40 rounded-xl px-4 py-2.5 backdrop-blur-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Core Stack</p>
                  <p className="text-sm font-bold text-white">Java & Spring Boot</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Scalable Systems */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-4 sm:-right-8 bg-slate-900/90 border border-cyan-500/40 rounded-xl px-4 py-2.5 backdrop-blur-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Layers size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Architecture</p>
                  <p className="text-sm font-bold text-white">Kafka & Microservices</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
          onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-gray-400 text-xs font-medium">Scroll to explore</span>
          <ChevronDown size={18} className="text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
