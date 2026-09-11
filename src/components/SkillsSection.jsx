import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Wrench, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Cpu,
  Gauge
} from 'lucide-react';

export default function SkillsSection({ skills }) {
  const getCategoryIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'languages':
        return <Code2 size={20} className="text-cyan-400" />;
      case 'backend':
        return <Server size={20} className="text-pink-400" />;
      case 'microservices':
        return <Layers size={20} className="text-purple-400" />;
      case 'testing_observability':
        return <Activity size={20} className="text-emerald-400" />;
      case 'databases':
        return <Database size={20} className="text-blue-400" />;
      case 'frontend':
        return <Layout size={20} className="text-teal-400" />;
      case 'tools':
        return <Wrench size={20} className="text-amber-400" />;
      default:
        return <Cpu size={20} className="text-cyan-400" />;
    }
  };

  const skillCategories = [
    { 
      key: 'languages', 
      title: 'Languages', 
      subtitle: 'Core Foundation', 
      items: skills.languages || [] 
    },
    { 
      key: 'backend', 
      title: 'Backend Frameworks', 
      subtitle: 'Spring Boot & APIs', 
      items: skills.backend || [] 
    },
    { 
      key: 'microservices', 
      title: 'Microservices & Resiliency', 
      subtitle: 'Resilience4j, Kafka & Cloud', 
      items: skills.microservices || [] 
    },
    { 
      key: 'testing_observability', 
      title: 'Testing & Observability', 
      subtitle: 'Grafana, Prometheus & JUnit', 
      items: skills.testing_observability || [] 
    },
    { 
      key: 'databases', 
      title: 'Databases & Storage', 
      subtitle: 'SQL & Object Storage', 
      items: skills.databases || [] 
    },
    { 
      key: 'frontend', 
      title: 'Frontend Development', 
      subtitle: 'Modern React & Web UI', 
      items: skills.frontend || [] 
    },
    { 
      key: 'tools', 
      title: 'DevOps & Tooling', 
      subtitle: 'CI/CD, Containers & VCS', 
      items: skills.tools || [] 
    }
  ];

  const expertiseList = [
    { name: 'Java & Spring Boot Microservices Architecture', level: 92, badge: 'Advanced' },
    { name: 'Fault Tolerance & Resiliency (Resilience4j, Circuit Breakers)', level: 86, badge: 'Proficient' },
    { name: 'Monitoring & Observability (Grafana, Prometheus, Micrometer)', level: 84, badge: 'Proficient' },
    { name: 'Testing & Code Quality (JUnit 5, Mockito, SonarQube)', level: 88, badge: 'Advanced' },
    { name: 'Event Streaming & Messaging (Apache Kafka)', level: 85, badge: 'Proficient' },
    { name: 'Database Design & Optimization (PostgreSQL, MySQL, JPA)', level: 85, badge: 'Proficient' },
    { name: 'React.js & Full-Stack Frontend Engineering', level: 80, badge: 'Intermediate' }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Expertise & Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/20 via-slate-900/80 to-slate-900/60 border border-purple-500/25 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                    {getCategoryIcon(category.key)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300 hover:text-cyan-300 transition-colors group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:scale-130 transition-transform shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress / Core Competencies Meter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-purple-950/25 via-slate-900/85 to-slate-900/65 border border-purple-500/30 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <Gauge size={22} className="text-cyan-400" />
              Core Competencies & Engineering Depth
            </h3>
            <span className="text-xs text-purple-300 font-medium bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
              Production Verified
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {expertiseList.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200 text-xs sm:text-sm font-semibold truncate pr-2">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] uppercase font-bold text-purple-300/80 bg-slate-950 px-2 py-0.5 rounded border border-white/5">
                      {skill.badge}
                    </span>
                    <span className="text-cyan-400 text-xs sm:text-sm font-bold">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: i * 0.06 + 0.15, duration: 1.2, ease: "easeOut" }}
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
