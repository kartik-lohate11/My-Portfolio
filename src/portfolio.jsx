import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import ChatApp from './components/ChatApp';

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative selection:bg-purple-500 selection:text-white">
      {/* Background Ambience Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950" />
      </div>

      <Navbar />
      <main>
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <ProjectsSection projects={portfolioData.projects} />
        <SkillsSection skills={portfolioData.skills} />
        <ContactSection data={portfolioData} />
        <ChatApp />
      </main>
      <Footer />
    </div>
  );
}
