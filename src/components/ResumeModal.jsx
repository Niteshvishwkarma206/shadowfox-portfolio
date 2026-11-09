import React from 'react';
import { X, Download, Printer, ExternalLink, GraduationCap, Code2, FolderGit2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillCategories } from '../data/skills';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1019] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#090d16]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <h2 id="resume-title" className="text-sm font-semibold tracking-wide uppercase text-slate-300">
              Curriculum Vitae / Developer Profile
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700/60"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-slate-300 print:text-black print:bg-white">
          {/* Header */}
          <div className="border-b border-slate-800/80 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {profileData.name}
                </h1>
                <p className="text-blue-400 font-medium text-sm md:text-base mt-1">
                  {profileData.role} • {profileData.subRole}
                </p>
              </div>
              <div className="text-xs md:text-sm text-slate-400 space-y-1">
                <div>{profileData.links.location}</div>
                <div>{profileData.links.email}</div>
                <a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  github.com/Niteshvishwkarma206
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs md:text-sm text-slate-400 leading-relaxed max-w-3xl">
              {profileData.bio}
            </p>
          </div>

          {/* Education */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h3>Education</h3>
            </div>
            <div className="bg-[#101623] border border-slate-800/80 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="font-semibold text-white">
                  {profileData.education.institution}
                </span>
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 w-fit">
                  {profileData.education.duration}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 mt-1">
                {profileData.education.degree} — Current Status: {profileData.education.year} ({profileData.education.status})
              </p>
              <div className="mt-3">
                <span className="text-xs font-medium text-slate-400 block mb-1.5">Relevant Coursework:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-800/60 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/40"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
              <Code2 className="w-4 h-4 text-blue-400" />
              <h3>Technical Competencies</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="bg-[#101623] border border-slate-800/80 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wide mb-2">
                    {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-md border ${
                          skill.highlight
                            ? 'bg-blue-500/10 text-blue-300 border-blue-500/25 font-medium'
                            : 'bg-slate-800/60 text-slate-300 border-slate-700/50'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <h3>Engineered Projects</h3>
            </div>
            <div className="space-y-3">
              {projectsData.map((project) => (
                <div key={project.id} className="bg-[#101623] border border-slate-800/80 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <span className="font-semibold text-white text-base">
                      {project.title} <span className="text-xs font-normal text-slate-400">— {project.tagline}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.timeline}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800/80 bg-[#090d16] flex items-center justify-between">
          <span className="text-xs text-slate-400 hidden sm:inline">
            Verified academic profile • Sagar Institute of Science and Technology
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              Save as PDF / Print
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
