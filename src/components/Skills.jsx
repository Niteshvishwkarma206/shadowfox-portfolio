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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <span>02 // Technical Competency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills, Languages & Technologies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Engineered with a strong foundation in low-level and high-level programming languages, modern full-stack web frameworks, and computer science principles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0c111c] border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
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
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`group relative p-4 rounded-xl bg-[#0c111c] border transition-all duration-200 hover:-translate-y-0.5 ${
                      skill.highlight
                        ? 'border-slate-800 hover:border-blue-500/50 shadow-sm'
                        : 'border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101726] text-blue-400 border border-blue-500/20">
                        {skill.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {skill.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Proficiency:</span>
                      <span className="font-mono text-slate-300 font-medium">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Languages Matrix Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0d1424] to-[#0a0f1d] border border-blue-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                Verified Language Foundation
              </span>
              <p className="text-sm text-slate-300 max-w-2xl">
                Trained in core systems programming and application engineering: Python, C, C++, Java, JavaScript, C#, and SQL.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['Python', 'C', 'C++', 'Java', 'JavaScript', 'C#', 'SQL'].map((lang) => (
                <div
                  key={lang}
                  className="px-3 py-1 rounded-lg bg-[#0e1628] border border-blue-500/30 text-blue-300 text-xs font-mono font-medium"
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
