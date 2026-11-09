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
      {/* Cinematic Red Ambient Backlight - exactly like the reference theme */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-red-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[260px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Background Geometric Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2708_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Status & Editorial Marker */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10080a] border border-red-500/30 text-xs text-red-400 font-medium shadow-sm shadow-red-950/40">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
                <span>{profileData.status}</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 tracking-wider hidden sm:inline">
                // CLASS OF 2028 • SISTEC
              </span>
            </div>

            {/* Main Headline styled like the reference mockup */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                A Portfolio Built to Be{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600 drop-shadow-[0_0_25px_rgba(239,68,68,0.25)]">
                  Explored.
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-300 pt-1">
                Hi, I'm <strong className="text-white font-semibold">{profileData.name}</strong> — {profileData.role} & Engineer.
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              Where code, systems architecture, and intelligent automation come together to build meaningful digital experiences. Third-year undergraduate at <span className="text-zinc-200 font-medium">Sagar Institute of Science and Technology</span>.
            </p>

            {/* Quick Tech Badges (like the pill badges in reference: React, JavaScript, Figma, etc.) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Python', 'C++', 'Java', 'JavaScript', 'React', 'SQL', 'Gemini AI'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#0d0d12] text-zinc-300 border border-zinc-800 hover:border-red-500/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 transition-all shadow-lg shadow-red-950/60 hover:shadow-red-600/30 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-[#0e0e14] hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white bg-[#0a0a0e] hover:bg-zinc-900 border border-zinc-800 transition-all"
              >
                <span>CV / Resume</span>
              </button>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 p-3 rounded-xl text-sm font-medium text-zinc-400 hover:text-white bg-[#0e0e14] hover:bg-zinc-900 border border-zinc-800 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Editorial Footer Tagline */}
            <div className="pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span className="tracking-wider uppercase">Turning Ideas into Reliable Engineering Experiences.</span>
            </div>
          </div>

          {/* Cinematic Interactive Snapshot Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#09090d] border border-zinc-800 shadow-2xl overflow-hidden group hover:border-red-500/40 transition-all duration-300">
              
              {/* Card Ambient Glow Accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-red-600/20 transition-all" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#060608] border-b border-zinc-800/90 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  </div>
                  <span className="ml-2 text-zinc-300">nitesh.profile.ts</span>
                </div>
                <span className="text-[10px] text-red-400 font-mono tracking-widest">// 01 CORE</span>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs leading-relaxed text-zinc-300 overflow-x-auto select-none">
                <div className="text-zinc-400">// Verified Full Stack Profile</div>
                <div>
                  <span className="text-red-400">const</span>{' '}
                  <span className="text-zinc-100">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{' '}
                  <span className="text-rose-300">"{profileData.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">institution:</span>{' '}
                  <span className="text-zinc-200">"Sagar Inst. of Science & Tech"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">graduation:</span>{' '}
                  <span className="text-red-400 font-semibold">2028</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span>{' '}
                  <span className="text-rose-300">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">flagshipProjects:</span> [
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-red-400">"CivicConnect"</span>, <span className="text-zinc-400">// Citizen reporting</span>
                </div>
                <div className="pl-8 text-zinc-300">
                  <span className="text-red-400">"SERA"</span> <span className="text-zinc-400">// Gemini Windows Assistant</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-zinc-400">coreStack:</span> [
                </div>
                <div className="pl-8 text-zinc-300">
                  "Python", "C++", "Java", "JS", "React", "SQL"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-zinc-400">status:</span>{' '}
                  <span className="text-rose-400">"Open for Internships"</span>
                </div>
                <div>&#125;;</div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-red-400 font-mono">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>status: active_and_building</span>
                  </span>
                  <span className="text-zinc-400">Node / Py3 / C++20</span>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="grid grid-cols-2 border-t border-zinc-800 bg-[#060608]/80 divide-x divide-zinc-800 text-center">
                <div className="p-3">
                  <div className="text-sm font-bold text-white">3rd Year B.Tech</div>
                  <div className="text-[11px] text-zinc-400">SISTec (2024–2028)</div>
                </div>
                <div className="p-3">
                  <div className="text-sm font-bold text-red-400">2 Flagship Apps</div>
                  <div className="text-[11px] text-zinc-400">CivicConnect & SERA</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
