import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, Layout, Server, Wrench } from 'lucide-react';

export default function SkillsSection({ skills }) {
  const getCategoryIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'languages':
        return <Code2 size={20} className="text-cyan-400" />;
      case 'frontend':
        return <Layout size={20} className="text-purple-400" />;
      case 'backend':
        return <Server size={20} className="text-pink-400" />;
      case 'databases':
        return <Database size={20} className="text-emerald-400" />;
      case 'tools & devops':
        return <Wrench size={20} className="text-amber-400" />;
      default:
        return <Code2 size={20} className="text-cyan-400" />;
    }
  };

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Backend', items: skills.backend },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Databases', items: skills.databases },
    { title: 'Tools & DevOps', items: skills.tools }
  ];

  const expertiseList = [
    { name: 'Java & Spring Boot Ecosystem', level: 90 },
    { name: 'RESTful API & Microservices Architecture', level: 88 },
    { name: 'Database Design & Optimization (SQL, PostgreSQL)', level: 82 },
    { name: 'React.js & Modern Frontend', level: 80 },
    { name: 'Event Streaming (Apache Kafka) & CI/CD', level: 78 }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/20 via-slate-900/70 to-slate-900/50 border border-purple-500/20 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-cyan-300 transition-colors group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:scale-125 transition-transform" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress / Expertise Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-purple-950/25 via-slate-900/80 to-slate-900/60 border border-purple-500/25 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            Core Competencies & Proficiency
          </h3>

          <div className="space-y-6">
            {expertiseList.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200 text-sm sm:text-base font-medium">{skill.name}</span>
                  <span className="text-cyan-400 text-sm sm:text-base font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
