import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'skills', 'projects', 'contact'], 140);

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-200 flex flex-col font-sans selection:bg-red-600/35 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
