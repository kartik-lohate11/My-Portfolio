import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  X, 
  Sparkles, 
  Eye, 
  CheckCircle2, 
  Layers, 
  Server, 
  Layout, 
  Database, 
  Wrench, 
  ArrowUpRight,
  Zap,
  Code2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Image,
  Cloud
} from 'lucide-react';

export default function ProjectsSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  // Extract unique categories for filter tabs
  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Keyboard navigation for Modal & Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen && selectedProject) {
        const totalScreenshots = selectedProject.screenshots?.length || 1;
        if (e.key === 'Escape') {
          setIsLightboxOpen(false);
        } else if (e.key === 'ArrowRight') {
          setLightboxIdx((prev) => (prev + 1) % totalScreenshots);
        } else if (e.key === 'ArrowLeft') {
          setLightboxIdx((prev) => (prev - 1 + totalScreenshots) % totalScreenshots);
        }
      } else if (selectedProject) {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      }
    };

    if (selectedProject || isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, isLightboxOpen]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setActiveScreenshotIdx(0);
    setIsLightboxOpen(false);
  };

  const handleOpenLightbox = (index = 0) => {
    setLightboxIdx(index);
    setIsLightboxOpen(true);
  };

  const currentScreenshots = selectedProject?.screenshots && selectedProject.screenshots.length > 0
    ? selectedProject.screenshots
    : selectedProject ? [selectedProject.image] : [];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-3">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Featured Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-3" />
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-purple-500/20 backdrop-blur-md"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group flex cursor-pointer"
                onClick={() => handleOpenModal(project)}
              >
                <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-purple-950/20 via-slate-900/80 to-slate-900/60 border border-purple-500/25 hover:border-cyan-400/60 transition-all duration-400 flex flex-col justify-between backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10">
                  
                  {/* Top Image & Visual Banner */}
                  <div>
                    <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-purple-500/40 text-[11px] font-semibold text-cyan-300 shadow-md">
                        <Layers size={12} className="text-cyan-400" />
                        {project.category || 'Featured'}
                      </div>

                      {/* Hover Quick View Trigger */}
                      <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-cyan-500/20 backdrop-blur-md p-2 rounded-xl text-cyan-300 border border-cyan-400/50 transform translate-y-1 group-hover:translate-y-0">
                        <Eye size={18} />
                      </div>

                      {/* Screenshot count chip if available */}
                      {project.screenshots && project.screenshots.length > 1 && (
                        <div className="absolute top-3.5 right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-gray-300 border border-white/10 text-[11px] font-medium flex items-center gap-1.5">
                          <Image size={12} className="text-cyan-400" />
                          <span>{project.screenshots.length} Screens</span>
                        </div>
                      )}

                      {/* Bottom Image Metric Badges */}
                      {project.metrics && (
                        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
                          {project.metrics.map((m, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-950/90 text-gray-300 border border-white/10 backdrop-blur-md whitespace-nowrap"
                            >
                              {m.value}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                        <span>{project.name}</span>
                        <ArrowUpRight size={18} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>

                      {project.tagline && (
                        <p className="text-xs font-medium text-purple-300/90 mb-3 line-clamp-1">
                          {project.tagline}
                        </p>
                      )}

                      <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] bg-purple-500/15 text-purple-300 px-2.5 py-1 rounded-lg border border-purple-500/30 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[11px] bg-cyan-500/15 text-cyan-300 px-2 py-1 rounded-lg border border-cyan-500/30 font-semibold">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="px-6 pb-6 pt-3 border-t border-white/5 flex gap-2.5" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="flex-1 text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 py-2.5 rounded-xl border border-cyan-500/30 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye size={14} />
                      View Details & Screens
                    </button>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="px-3 py-2.5 rounded-xl bg-slate-800/80 hover:bg-purple-500/20 text-gray-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-center"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Widescreen Rectangular Modal with Refined Border Radius */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900/95 border border-purple-500/30 rounded-[28px] max-w-5xl w-full h-full max-h-[88vh] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.15)] flex flex-col lg:flex-row overflow-hidden relative backdrop-blur-2xl"
            >
              {/* Close Floating Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close Project Modal"
                className="absolute top-4 right-4 bg-slate-950/80 border border-white/15 p-2.5 rounded-full hover:bg-slate-800 text-gray-300 hover:text-white transition-all shadow-xl z-30"
              >
                <X size={18} />
              </button>

              {/* LEFT PANE (44% on desktop): Media, Visual Preview, Quick Metrics & Actions */}
              <div className="lg:w-[44%] bg-slate-950/70 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between p-6 sm:p-7 overflow-y-auto custom-scrollbar shrink-0">
                <div className="space-y-5">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-semibold text-cyan-300">
                    <Layers size={13} className="text-cyan-400" />
                    <span>{selectedProject.category || 'Featured Engineering'}</span>
                  </div>

                  {/* Main Preview Image Container with Click to Enlarge */}
                  <div>
                    <div 
                      onClick={() => handleOpenLightbox(activeScreenshotIdx)}
                      className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-inner group aspect-[16/10] cursor-zoom-in"
                      title="Click to open big screenshot viewer"
                    >
                      <img
                        src={currentScreenshots[activeScreenshotIdx] || selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Hover Zoom Overlay Banner */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="px-4 py-2 rounded-xl bg-cyan-500/30 border border-cyan-400/60 text-cyan-200 text-xs font-bold flex items-center gap-2 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <Maximize2 size={16} />
                          <span>Click to View Full Size</span>
                        </div>
                      </div>

                      {/* Image Index Tag */}
                      <div className="absolute bottom-2.5 left-3 bg-slate-950/80 px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
                        <Image size={12} className="text-cyan-400" />
                        <span>Screenshot {activeScreenshotIdx + 1} of {currentScreenshots.length}</span>
                      </div>
                    </div>

                    {/* Screenshot Switcher Thumbnails Strip */}
                    {currentScreenshots.length > 1 && (
                      <div className="mt-3 flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
                        {currentScreenshots.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveScreenshotIdx(idx)}
                            className={`relative h-14 w-20 rounded-xl overflow-hidden border shrink-0 transition-all ${
                              activeScreenshotIdx === idx 
                                ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-105 opacity-100 shadow-md' 
                                : 'border-white/15 opacity-60 hover:opacity-100 hover:border-purple-400'
                            }`}
                          >
                            <img src={s} alt={`screenshot thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-slate-950/80 text-white px-1 rounded">
                              {idx + 1}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Architecture Metrics Grid */}
                  {selectedProject.metrics && (
                    <div>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Zap size={13} className="text-cyan-400" />
                        System Highlights
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProject.metrics.map((metric, i) => (
                          <div 
                            key={i}
                            className="p-2.5 rounded-xl bg-slate-900/90 border border-purple-500/20 text-center flex flex-col justify-center"
                          >
                            <span className="text-[10px] text-gray-400 font-medium uppercase">{metric.label}</span>
                            <span className="text-xs font-bold text-white mt-0.5 leading-tight">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Left Action Buttons Bar */}
                <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-center flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo / Project Link
                    </a>
                  )}
                  
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 border border-purple-500/40 text-purple-300 hover:bg-purple-500/15 hover:text-white font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2 text-sm bg-slate-900/60"
                  >
                    <Github size={16} />
                    View GitHub Repository
                  </a>
                </div>
              </div>

              {/* RIGHT PANE (56% on desktop): Scrollable Bullet Points & Detailed Stack */}
              <div className="lg:w-[56%] p-6 sm:p-8 lg:p-9 overflow-y-auto custom-scrollbar flex flex-col justify-between space-y-7">
                <div className="space-y-6">
                  {/* Title & Tagline */}
                  <div className="pr-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {selectedProject.name}
                    </h3>
                    {selectedProject.tagline && (
                      <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                        {selectedProject.tagline}
                      </p>
                    )}
                    <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                      {selectedProject.overview || selectedProject.description}
                    </p>
                  </div>

                  {/* Bullet-Point Explanation Section */}
                  {selectedProject.bulletPoints && selectedProject.bulletPoints.length > 0 && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/60 border border-purple-500/25 shadow-md">
                      <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                        <CheckCircle2 size={16} className="text-cyan-400" />
                        Engineering Features & Workflow
                      </h4>
                      <ul className="space-y-3.5">
                        {selectedProject.bulletPoints.map((point, idx) => {
                          const hasColon = point.includes(':');
                          const title = hasColon ? point.split(':')[0] : '';
                          const desc = hasColon ? point.split(':').slice(1).join(':') : point;

                          return (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 ring-4 ring-cyan-400/20" />
                              <div>
                                {hasColon ? (
                                  <>
                                    <span className="text-white font-bold">{title}:</span>
                                    <span className="text-gray-300 ml-1">{desc}</span>
                                  </>
                                ) : (
                                  <span>{point}</span>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* Categorized Tech Stack */}
                  <div>
                    <h4 className="text-sm font-bold text-white mb-3.5 flex items-center gap-2 uppercase tracking-wider">
                      <Code2 size={16} className="text-purple-400" />
                      Technologies & Tools
                    </h4>

                    {selectedProject.techCategorized ? (
                      <div className="grid sm:grid-cols-2 gap-3">
                        {/* Backend */}
                        {selectedProject.techCategorized.backend && (
                          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-purple-500/20">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-300 mb-2 uppercase tracking-wider">
                              <Server size={12} className="text-purple-400" />
                              Backend Architecture
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.techCategorized.backend.map(item => (
                                <span key={item} className="text-xs bg-purple-500/15 text-purple-200 px-2.5 py-1 rounded-lg border border-purple-500/30">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Frontend */}
                        {selectedProject.techCategorized.frontend && (
                          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-cyan-500/20">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-300 mb-2 uppercase tracking-wider">
                              <Layout size={12} className="text-cyan-400" />
                              Frontend & UI
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.techCategorized.frontend.map(item => (
                                <span key={item} className="text-xs bg-cyan-500/15 text-cyan-200 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Database */}
                        {selectedProject.techCategorized.database && (
                          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-emerald-500/20">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300 mb-2 uppercase tracking-wider">
                              <Database size={12} className="text-emerald-400" />
                              Database & Storage
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.techCategorized.database.map(item => (
                                <span key={item} className="text-xs bg-emerald-500/15 text-emerald-200 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Cloud & Object Storage */}
                        {selectedProject.techCategorized.cloud && (
                          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-blue-500/20">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-300 mb-2 uppercase tracking-wider">
                              <Cloud size={12} className="text-blue-400" />
                              Cloud & Storage
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.techCategorized.cloud.map(item => (
                                <span key={item} className="text-xs bg-blue-500/15 text-blue-200 px-2.5 py-1 rounded-lg border border-blue-500/30">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tools / APIs */}
                        {selectedProject.techCategorized.devops && (
                          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-amber-500/20">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 mb-2 uppercase tracking-wider">
                              <Wrench size={12} className="text-amber-400" />
                              Tools & APIs
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.techCategorized.devops.map(item => (
                                <span key={item} className="text-xs bg-amber-500/15 text-amber-200 px-2.5 py-1 rounded-lg border border-amber-500/30">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-500/20 text-cyan-300 text-xs px-3 py-1 rounded-lg border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BIG MID-SIZE SCREENSHOT LIGHTBOX / PREVIEW WINDOW */}
      <AnimatePresence>
        {isLightboxOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 bg-black/92 backdrop-blur-xl z-[60] flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[88vh] max-h-[820px] bg-slate-950/95 border border-purple-500/40 rounded-[28px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(6,182,212,0.25)] flex flex-col overflow-hidden backdrop-blur-2xl"
            >
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/20 text-cyan-400 border border-purple-500/30">
                    <Image size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                      {selectedProject.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium">
                      Screenshot {lightboxIdx + 1} of {currentScreenshots.length}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    aria-label="Close Lightbox"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div className="relative flex-1 bg-slate-950 flex items-center justify-center overflow-hidden p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIdx}
                    src={currentScreenshots[lightboxIdx]}
                    alt={`${selectedProject.name} full screenshot ${lightboxIdx + 1}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                </AnimatePresence>

                {/* Left Navigation Arrow */}
                {currentScreenshots.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIdx((prev) => (prev - 1 + currentScreenshots.length) % currentScreenshots.length);
                    }}
                    aria-label="Previous Screenshot"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-cyan-400 hover:text-white border border-purple-500/30 backdrop-blur-md shadow-xl transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}

                {/* Right Navigation Arrow */}
                {currentScreenshots.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIdx((prev) => (prev + 1) % currentScreenshots.length);
                    }}
                    aria-label="Next Screenshot"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-cyan-400 hover:text-white border border-purple-500/30 backdrop-blur-md shadow-xl transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
              </div>

              {/* Lightbox Footer Thumbnail Bar */}
              {currentScreenshots.length > 1 && (
                <div className="flex items-center justify-center gap-2.5 px-6 py-3.5 border-t border-white/10 bg-slate-900/80 backdrop-blur-md shrink-0 overflow-x-auto no-scrollbar">
                  {currentScreenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIdx(idx)}
                      className={`relative h-12 w-18 sm:h-14 sm:w-22 rounded-xl overflow-hidden border shrink-0 transition-all ${
                        lightboxIdx === idx 
                          ? 'border-cyan-400 ring-2 ring-cyan-400/60 scale-105 opacity-100 shadow-md' 
                          : 'border-white/15 opacity-50 hover:opacity-100 hover:border-purple-400'
                      }`}
                    >
                      <img src={s} alt={`preview thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-slate-950/90 text-white px-1.5 py-0.5 rounded">
                        {idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
