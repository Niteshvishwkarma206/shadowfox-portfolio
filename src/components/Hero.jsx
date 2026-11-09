import React from 'react';
import { ArrowDown, Mail, Terminal } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background radial ambient lights - restrained and refined */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-slate-700/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101726] border border-blue-500/25 text-xs text-blue-300 font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{profileData.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Engineering robust <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                  Full Stack Systems
                </span> & AI.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 pt-1">
                {profileData.name} — B.Tech Undergrad (2024–2028)
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Pursuing Bachelor of Technology at{' '}
              <span className="text-slate-200 font-medium">Sagar Institute of Science and Technology</span>. 
              Bridging robust backend engineering, intuitive React interfaces, and intelligent automation with Python and Google Gemini.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-900/20 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white bg-[#0e1422] hover:bg-slate-800 border border-slate-700/80 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <span>CV / Resume</span>
              </button>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white bg-[#0e1422] hover:bg-slate-800 border border-slate-800 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Core Languages Strip */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-2">
                Core Stack & Languages:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {['Python', 'C++', 'Java', 'JavaScript', 'SQL', 'React', 'C#', 'C'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#101625] text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Engineering Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0b101a] border border-slate-800 shadow-xl overflow-hidden group">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-slate-800/90 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="ml-2 text-slate-300">developer.profile.ts</span>
                </div>
                <span className="text-[10px] text-blue-400/90 font-mono">v3.0.0</span>
              </div>

              {/* Code / Architecture Inspection Block */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto select-none">
                <div className="text-slate-400">// Academic & Development Snapshot</div>
                <div>
                  <span className="text-blue-400">const</span>{' '}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{profileData.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">institution:</span>{' '}
                  <span className="text-emerald-300">"Sagar Inst. of Science & Tech"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">graduation:</span>{' '}
                  <span className="text-amber-300">2028</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">activeProjects:</span> [
                </div>
                <div className="pl-8 text-sky-300">
                  <span className="text-emerald-300">"CivicConnect"</span>, <span className="text-slate-400">// Citizen reporting</span>
                </div>
                <div className="pl-8 text-sky-300">
                  <span className="text-emerald-300">"SERA"</span> <span className="text-slate-400">// Gemini Windows Assistant</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">primaryToolchain:</span> [
                </div>
                <div className="pl-8 text-slate-300">
                  "Python", "C++", "Java", "JS", "SQL", "React"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">seeking:</span>{' '}
                  <span className="text-emerald-300">"Internships & SDE Roles"</span>
                </div>
                <div>&#125;;</div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>status: ready_for_deployment</span>
                  </span>
                  <span className="text-slate-400">Node / Py3 / C++20</span>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="grid grid-cols-2 border-t border-slate-800 bg-[#090d16]/70 divide-x divide-slate-800">
                <div className="p-3 text-center">
                  <div className="text-sm font-bold text-white">3rd Year B.Tech</div>
                  <div className="text-[11px] text-slate-400">SISTec, Bhopal</div>
                </div>
                <div className="p-3 text-center">
                  <div className="text-sm font-bold text-blue-400">2 Flagship Apps</div>
                  <div className="text-[11px] text-slate-400">Web & Gemini AI</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
