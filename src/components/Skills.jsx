import React, { useState } from 'react';
import { Code2, Globe, Wrench, Binary, Layers } from 'lucide-react';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'web', name: 'Web & Full Stack', icon: Globe },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench },
    { id: 'concepts', name: 'CS Fundamentals', icon: Binary },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-xs font-mono text-red-400 mb-3">
              <span>02 // TECHNICAL COMPETENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills, Languages & Technologies
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Engineered with a strong foundation in low-level and high-level programming languages, modern full-stack web frameworks, and computer science principles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#09090d] border border-zinc-800 rounded-xl self-start md:self-auto shadow-lg">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-950/60'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories & Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-850 border-zinc-900 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-[#0d0d12] px-2.5 py-1 rounded-md border border-zinc-800">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`group relative p-4 rounded-xl bg-[#09090d] border transition-all duration-200 hover:-translate-y-0.5 ${
                      skill.highlight
                        ? 'border-zinc-800 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                        : 'border-zinc-850 border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-semibold text-white group-hover:text-red-400 transition-colors text-sm">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#130b0e] text-red-400 border border-red-500/25">
                        {skill.category}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                      {skill.description}
                    </p>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400">Proficiency:</span>
                      <span className="font-mono text-zinc-300 font-medium">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Languages Matrix Banner with Red Accent */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#12080a] via-[#09090d] to-[#0a0a0f] border border-red-500/25 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider block mb-1">
                Verified Language Foundation
              </span>
              <p className="text-sm text-zinc-300 max-w-2xl">
                Trained in core systems programming and application engineering: Python, C, C++, Java, JavaScript, C#, and SQL.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['Python', 'C', 'C++', 'Java', 'JavaScript', 'C#', 'SQL'].map((lang) => (
                <div
                  key={lang}
                  className="px-3 py-1 rounded-lg bg-[#0e0e14] border border-red-500/35 text-red-300 text-xs font-mono font-medium hover:border-red-400 transition-colors"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
