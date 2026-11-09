import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { profileData } from '../data/profile';

export default function Navbar({ activeSection, onOpenResume }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050507]/92 backdrop-blur-md border-b border-zinc-900 shadow-xl shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
            aria-label="Nitesh Vishwakarma - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0d0d12] border border-zinc-800 flex items-center justify-center font-mono font-bold text-sm text-red-500 group-hover:border-red-500/50 group-hover:text-red-400 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-all">
              NV
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors leading-tight tracking-tight">
                {profileData.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0a0a0e]/80 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600/15 text-red-400 border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.15)]'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Editorial Tag & Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <span className="hidden lg:inline text-[10px] font-mono uppercase tracking-widest text-zinc-400 mr-1">
              DESIGN // DEVELOP // CREATE
            </span>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-[#0e0e12] hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-red-400" />
              <span>Resume</span>
            </button>

            <a
              href={profileData.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-all shadow-md shadow-red-950/50 hover:shadow-red-600/25 active:scale-95"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-75" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 text-xs font-medium text-zinc-300 bg-[#0d0d12] border border-zinc-800 rounded-lg"
              aria-label="View Resume"
            >
              Resume
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white bg-[#0d0d12] border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0a0a0e] border border-zinc-800 rounded-xl shadow-2xl space-y-3">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-red-600/15 text-red-400 border border-red-500/30'
                        : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors shadow-md shadow-red-950/50"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
