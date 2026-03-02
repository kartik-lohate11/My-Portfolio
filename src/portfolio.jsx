import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail, Code, Briefcase, Award, FileText, ChevronDown, Menu, X } from 'lucide-react';

// ==================== UTILITIES ====================
const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();


  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  console.log(" year = ", years, " months = ", months)

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
};

// ==================== SAMPLE DATA ====================
const portfolioData = {
  personal: {
    name: "Kartik Lohate",
    title: "Java Developer",
    joinDate: "2025-02-01",
    photo: "/document/kartik_img.png",
    email: "kartiklohate2003@gmail.com",
    phone: "+91 7415950037",
    location: "Gurgaon, India",
    bio: "Passionate developer crafting elegant solutions with Spring Boot and React. Building scalable applications with modern tech stack."
  },

  resume: "/document/kartik_java_developer.pdf",

  social: [
    { icon: "github", label: "GitHub", url: "https://github.com/kartik-lohate11" },
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/kartik-lohate-java-developer/" },
    { icon: "medium", label: "Medium", url: "https://medium.com/@kartiklohate8" },
    { icon: "stackoverflow", label: "Stack Overflow", url: "https://stackoverflow.com/users/27486399/kartik-lohate" }
  ],

  skills: {
    languages: ["Java (8/11/17/21)", "JavaScript", "SQL"],
    frontend: ["React JS", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Spring Boot", "Hibernate", "REST APIs", "Spring Data JPA", "Sepring Security", "JWT & Oauth2", "Apache Kafka"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Docker", "kubernetes", "Jenkins", "Git & CI/CD", "Maven", "Postman"]
  },

  projects: [
    {
      id: 1,
      name: "Enterprise Ticket Management System",
      description: "Developed a Ticket Management System to streamline task tracking, assignment workflows, and status monitoring across teams. Implemented secure role-based access, RESTful APIs, and real-time updates to improve transparency and operational efficiency. Designed a scalable backend architecture to handle concurrent users and ensure smooth ticket lifecycle management.",
      techStack: ["Spring Boot", "React", "PostgreSQL", "REST Api", "Apache Kafka","JWT"],
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db7d?w=500&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-adf4e565db7d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
      ],
      link: "#",
      github: "https://github.com"
    },
    {
      id: 2,
      name: "Pharmease- Location Based Search",
      description: "Developed a Pharmacy Locator Web Application that allows users to find nearby medical stores, view distance and estimated travel time, and search pharmacies by medicine name or shop name. Implemented OTP-based email verification for secure user authentication, and enabled pharmacy owners to register, manage accounts, and add available medicines. Designed a scalable backend to handle real-time location-based queries and secure data management.",
      techStack: ["Spring Boot", "MySQL", "Docker", "Mail & Map APIs"],
      image: "/document/pharmacy_project.png",
      screenshots: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
      ],
      link: "https://github.com/kartik-lohate11/Nearest-Pharmacist",
      github: "https://github.com/kartik-lohate11/Nearest-Pharmacist"
    },
    {
      id: 3,
      name: "Zip File Project",
      description: "Developed Zip, a desktop application for compressing and decompressing text files using the Huffman Coding algorithm. Implemented priority queues and binary tree data structures to efficiently generate optimal prefix codes and achieve effective file size reduction. Focused on algorithm optimization and performance-driven implementation.",
      techStack: ["Java","Swing","AWT"],
      image: "https://images.unsplash.com/photo-1432405972618-c60b0b0f5e08?w=500&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1432405972618-c60b0b0f5e08?w=500&h=300&fit=crop"
      ],
      link: "#",
      github: "https://github.com/kartik-lohate11/Zip-File-Project"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Avendum Technology Private Limited",
      position: "Software Developer",
      period: "Feb 2025 - Present",
      description: "Architected and optimized an enterprise-grade backend using Java and Spring Boot, automating network asset tracking and improving operational efficiency. Implemented real-time Kafka pipelines, secured APIs with Spring Security (RBAC & JWT), and enhanced database performance, increasing throughput and ensuring high data consistency.",
      highlights: ["Spring Boot", "Hibernate", "Spring Security", "JWT", "Spring Data JPA", "REST API Development", "React Component Design", "Database Optimization"]
    },
    {
      id: 2,
      company: "Netlink Software Private Limited",
      position: "Java Developer Intern",
      period: "Sep 2024– Dec 2024",
      description: "Built scalable backend modules and RESTful APIs, developed a custom Java-based ETL tool for financial data migration, and ensured high accuracy in data processing. Processed 500K+ daily records using Apache Spark, optimizing performance and reducing data integration latency in high-concurrency environments.",
      highlights: ["REST API Development", "Scala", "Apache Spark", "Apache Kafka", "SQL", "Play framework"]
    }
  ]
};

// ==================== COMPONENTS ====================

// Loading Animation
const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500 border-t-cyan-400 rounded-full mb-6"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              Hello! 👋 <br /> I am Kartik
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mt-4 text-sm"
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Navigation
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-900/40 border-b border-purple-500/20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            KL
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                  ? 'bg-purple-500/30 text-cyan-400'
                  : 'text-gray-400 hover:text-cyan-400'
                  }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400 hover:text-purple-400 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-purple-500/20"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-purple-500/10 transition"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ data }) => {
  const experience = calculateExperience(data.personal.joinDate);

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-40 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 mb-6"
            >
              <p className="text-cyan-400 text-sm font-semibold">Welcome to my portfolio</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {data.personal.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-6"
            >
              {data.personal.title}
            </motion.p>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg px-6 py-3 mb-8 backdrop-blur-sm"
            >
              <Award size={20} className="text-cyan-400" />
              <span className="text-gray-200">
                <span className="font-bold text-cyan-400">{experience.years}.{experience.months == 0 ? 1 : experience.months}</span> years of experience
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              {data.personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
                View My Work
              </button>
              <a
                href={data.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-purple-500/50 rounded-lg font-semibold text-purple-300 hover:bg-purple-500/10 transition flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-purple-500/20"
            >
              <span className="text-gray-500 text-sm">Follow me:</span>
              {data.social.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-cyan-400 hover:bg-purple-500/40 transition"
                >
                  {social.icon === 'github' && <Github size={20} />}
                  {social.icon === 'linkedin' && <Linkedin size={20} />}
                  {social.icon === 'stackoverflow' && <Code size={20} />}
                  {social.icon === 'medium' && <FileText size={20} />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden md:flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-30" />

              {/* Image Container */}
              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-purple-500/50 backdrop-blur-xl">
                <img
                  src={data.personal.photo}
                  alt={data.personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/50 rounded-xl px-6 py-4 backdrop-blur-xl"
            >
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-10 -right-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-xl px-6 py-4 backdrop-blur-xl"
            >
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <ChevronDown size={20} className="text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = ({ data }) => {
  const experience = calculateExperience(data.personal.joinDate);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Professional Journey</h3>

            {data.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 hover:border-cyan-500/50 transition group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                      {exp.position}
                    </h4>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-purple-500/20 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Quick Facts</h3>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Projects', value: data.projects.length },
                { label: 'Languages', value: data.skills.languages.length },
                { label: 'Experience', value: `${experience.years} years` },
                { label: 'Skills', value: '15+' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-center group hover:border-cyan-500/50 transition cursor-pointer"
                >
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              With a passion for clean code and user-centric design, I'm dedicated to building applications that not only solve problems but create memorable experiences. My journey in tech started with curiosity and has evolved into a commitment to continuous learning and excellence.
            </p>

            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
              <p className="text-gray-300">
                🎯 <strong>Current Focus:</strong> Deepening expertise in microservices architecture, containerization, and cloud deployment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 hover:border-cyan-500/50 transition h-full flex flex-col backdrop-blur-xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full border border-purple-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full border border-purple-500/50">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                    <button className="flex-1 text-sm bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 py-2 rounded-lg transition flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      View
                    </button>
                    <button className="flex-1 text-sm bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 py-2 rounded-lg transition flex items-center justify-center gap-2">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded-lg hover:bg-slate-900 transition"
                >
                  <X size={24} className="text-cyan-400" />
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.name}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-cyan-300 px-4 py-2 rounded-lg border border-cyan-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
                    Live Demo
                  </button>
                  <button className="flex-1 border border-purple-500/50 text-purple-300 font-semibold py-3 rounded-lg hover:bg-purple-500/10 transition flex items-center justify-center gap-2">
                    <Github size={20} />
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Skills Section
const SkillsSection = ({ skills }) => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'Tools & DevOps', items: skills.tools }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 hover:border-cyan-500/50 transition"
            >
              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-purple-500/30">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (catIndex * 0.1) + (i * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                    <span className="text-gray-300 hover:text-cyan-400 transition cursor-pointer">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Expertise Level</h3>

          {[
            { name: 'Java & Backend Development', level: 85 },
            { name: 'React & Frontend', level: 80 },
            { name: 'Database Design', level: 75 },
            { name: 'API Development', level: 85 }
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-semibold">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = ({ data }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-12" />
        </motion.div>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: 'Email', value: data.personal.email, href: `mailto:${data.personal.email}` },
              { icon: Briefcase, label: 'Phone', value: data.personal.phone, href: `tel:${data.personal.phone}` },
              { icon: Code, label: 'Location', value: data.personal.location, href: '#' }
            ].map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 hover:border-cyan-500/50 transition group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/30 to-purple-500/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition">
                    <contact.icon size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {data.social.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-purple-500/50 hover:border-cyan-500/50 flex items-center justify-center gap-2 text-white font-semibold hover:text-cyan-400 transition group"
                >
                  {social.icon === 'github' && <Github size={20} />}
                  {social.icon === 'linkedin' && <Linkedin size={20} />}
                  {social.icon === 'stackoverflow' && <Code size={20} />}
                  {social.icon === 'medium' && <FileText size={20} />}
                  <span className="text-sm group-hover:text-cyan-400">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="relative border-t border-purple-500/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025 Kartik Lohate. Crafted with passion and modern technologies.
        </motion.p>
      </div>
    </footer>
  );
};

// ==================== MAIN APP ====================
export default function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/5 to-slate-900" />
      </div>

      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <>
          <Navigation />
          <main>
            <HeroSection data={portfolioData} />
            <AboutSection data={portfolioData} />
            <ProjectsSection projects={portfolioData.projects} />
            <SkillsSection skills={portfolioData.skills} />
            <ContactSection data={portfolioData} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
