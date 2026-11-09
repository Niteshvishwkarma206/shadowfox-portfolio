import React from 'react';
import { GraduationCap, BookOpen, Target, CheckCircle2, Award, Calendar, MapPin, Compass } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#07070a] border-y border-zinc-900 relative">
      {/* Subtle red ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-xs font-mono text-red-400 mb-3">
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering foundation grounded in computer science & practical execution.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am a third-year undergraduate engineering student with a dedicated focus on Full Stack Development, systems architecture, and intelligent application design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#09090d] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-red-500" />
                <span>My Journey & Development Approach</span>
              </h3>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Currently in my third year of Bachelor of Technology at <strong className="text-white font-medium">Sagar Institute of Science and Technology</strong> (graduating 2028), I approach software engineering by connecting strong algorithmic fundamentals with modern full-stack workflows.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Rather than treating languages as isolated silos, I leverage each tool where it excels: utilizing <strong className="text-zinc-200">C and C++</strong> for low-level memory efficiency and algorithmic problem solving, <strong className="text-zinc-200">Java and C#</strong> for object-oriented architectural patterns, <strong className="text-zinc-200">SQL</strong> for relational data integrity, and <strong className="text-zinc-200">Python & JavaScript (React/Node)</strong> for building end-to-end full-stack applications and integrating cutting-edge LLMs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-850 border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-0.5 border border-red-500/20">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">Problem First</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Designing architecture around real user pain points before writing code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-0.5 border border-red-500/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">Reliable & Maintainable</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Writing readable code, clean schemas, and predictable API endpoints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Pillars Card */}
            <div className="bg-[#09090d] border border-zinc-800/90 rounded-2xl p-6 space-y-3 shadow-xl">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-red-400" />
                <span>Core Academic Coursework</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {profileData.education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#0e0e14] border border-zinc-800 text-xs text-zinc-300 font-medium hover:border-red-500/40 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card & Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#09090d] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-red-600/8 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/25">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/30">
                  Expected 2028
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {profileData.education.degree}
              </h3>
              <p className="text-sm font-medium text-red-400 mb-4">
                {profileData.education.institution}
              </p>

              <div className="space-y-3 text-xs text-zinc-300 border-t border-zinc-800/80 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    Academic Timeline
                  </span>
                  <span className="font-mono text-zinc-200">2024 – 2028</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-zinc-400" />
                    Current Academic Year
                  </span>
                  <span className="font-mono text-red-400 font-semibold">3rd Year (Active)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    Location
                  </span>
                  <span className="text-zinc-200">{profileData.links.location}</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#0e0e14] border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
                <strong className="text-zinc-200 block mb-1">Career Objective:</strong>
                Targeting summer/full-time Full Stack Software Engineering internships and entry-level developer roles where I can contribute to mission-critical codebases and scale high-performance web products.
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {profileData.highlights.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#09090d] border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-xs text-zinc-400">{item.label}</div>
                  <div className="text-base font-bold text-white mt-1">{item.value}</div>
                  <div className="text-[11px] text-red-400/90 font-mono mt-0.5">{item.note}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
