import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Sparkles, Eye } from 'lucide-react';

export default function ProjectsSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 mb-3">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer flex"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-950/20 via-slate-900/70 to-slate-900/50 border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-300 flex flex-col backdrop-blur-xl shadow-xl">
                {/* Project Image Banner */}
                <div className="relative h-52 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 backdrop-blur-md p-2 rounded-xl text-cyan-400 border border-cyan-500/30">
                    <Eye size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-purple-500/15 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-xs bg-cyan-500/15 text-cyan-300 px-2.5 py-1 rounded-md border border-cyan-500/30 font-medium">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 text-xs sm:text-sm font-semibold bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-300 py-2.5 rounded-xl border border-cyan-500/30 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Eye size={16} />
                        Details
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-xs sm:text-sm font-semibold bg-purple-500/15 hover:bg-purple-500/30 text-purple-300 py-2.5 rounded-xl border border-purple-500/30 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-purple-500/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="relative h-64 sm:h-72 w-full bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close Modal"
                  className="absolute top-4 right-4 bg-slate-950/80 border border-white/10 p-2 rounded-full hover:bg-slate-900 text-gray-300 hover:text-white transition-all shadow-lg"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-500/20 text-cyan-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-xl border border-purple-500/40 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <ExternalLink size={18} />
                      View Live / Repo
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-purple-500/40 text-purple-300 hover:bg-purple-500/15 font-semibold py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Github size={18} />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
