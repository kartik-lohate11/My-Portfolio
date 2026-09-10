import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Code, Sparkles, Send } from 'lucide-react';

export default function ContactSection({ data }) {
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

  const contactMethods = [
    { 
      icon: Mail, 
      label: 'Email Address', 
      value: data.personal.email, 
      href: `mailto:${data.personal.email}`,
      actionText: 'Send Email'
    },
    { 
      icon: Phone, 
      label: 'Phone / WhatsApp', 
      value: data.personal.phone, 
      href: `tel:${data.personal.phone}`,
      actionText: 'Call Direct'
    },
    { 
      icon: MapPin, 
      label: 'Current Location', 
      value: data.personal.location, 
      href: '#',
      actionText: 'Based in India'
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950/40 via-purple-950/10 to-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-3">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Reach Out</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mt-3" />
          
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            I am always open to discussing new opportunities, backend architecture challenges, full-stack projects, or collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-4 flex flex-col justify-center"
          >
            {contactMethods.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/20 via-slate-900/70 to-slate-900/50 border border-purple-500/25 hover:border-cyan-500/50 transition-all duration-300 group flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-purple-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-white transition-all">
                    <contact.icon size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                  <span>{contact.actionText}</span>
                  <Send size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Profiles & Quick Connect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-purple-950/30 via-slate-900/80 to-cyan-950/20 border border-purple-500/30 flex flex-col justify-between shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Connect Across Platforms</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Check out my open-source repositories, developer articles, and LinkedIn profile.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {data.social.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-purple-500/30 hover:border-cyan-500/50 flex items-center gap-3 text-gray-200 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-purple-600/20 transition-all group"
                  >
                    <div className="text-cyan-400 group-hover:text-cyan-300">
                      {getSocialIcon(social.icon)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={`mailto:${data.personal.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-95 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all"
              >
                <Mail size={16} />
                Send an Email Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
