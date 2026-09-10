import React from 'react';
import { motion } from 'framer-motion';
import { calculateExperience } from '../utils/helpers';
import { Briefcase, Calendar, Target, Sparkles } from 'lucide-react';

export default function AboutSection({ data }) {
  const experience = calculateExperience(data.personal.joinDate);

  const stats = [
    { label: 'Featured Projects', value: `${data.projects.length}+` },
    { label: 'Core Languages', value: `${data.skills.languages.length}` },
    { label: 'Experience', value: experience.display },
    { label: 'Tech Stack Skills', value: '15+' }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Professional Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                <Briefcase size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
            </div>

            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 via-slate-900/60 to-slate-900/40 border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.position}
                      </h4>
                      <p className="text-purple-300 font-medium text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 rounded-full self-start sm:self-auto font-medium">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-purple-500/15 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Quick Facts & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quick Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/20 via-slate-900/60 to-cyan-950/20 border border-purple-500/25 text-center group hover:border-cyan-500/40 transition-all duration-300 shadow-md"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                With a strong foundation in backend engineering, database optimization, and modern React frontend interfaces, I focus on crafting scalable, reliable, and high-performance software. I prioritize clean code principles, testable architecture, and seamless user experiences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/25 to-cyan-900/25 border border-purple-500/30 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 mt-1">
                <Target size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-1">Current Focus</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Deepening expertise in event-driven microservices architecture with Apache Kafka, Docker/Kubernetes container orchestration, and cloud-native Java deployment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
