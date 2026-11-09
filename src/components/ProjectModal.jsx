import React from 'react';
import { X, ExternalLink, CheckCircle, Layers, Cpu, Database, Server, Terminal, Shield } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#08080c] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/90 bg-[#060608]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-red-400 uppercase tracking-wider bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/25">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">{project.timeline}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-zinc-300">
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-red-400 font-medium text-sm sm:text-base mt-1">
              {project.tagline}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e0e14] border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
            <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Problem & Solution Overview</strong>
            {project.overview}
          </div>

          {/* Architecture Deep Dive */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-400" />
              <span>Technical Architecture</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.architecture.client && (
                <div className="p-4 rounded-xl bg-[#0b0b10] border border-zinc-800/90">
                  <div className="text-xs font-mono text-red-400 mb-1 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" /> Frontend Client
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.architecture.client}
                  </p>
                </div>
              )}
              {project.architecture.server && (
                <div className="p-4 rounded-xl bg-[#0b0b10] border border-zinc-800/90">
                  <div className="text-xs font-mono text-rose-400 mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Backend API
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.architecture.server}
                  </p>
                </div>
              )}
              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-[#0b0b10] border border-zinc-800/90">
                  <div className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" /> Data Schema
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.architecture.database}
                  </p>
                </div>
              )}

              {/* SERA Specific Architecture */}
              {project.architecture.audioPipeline && (
                <div className="p-4 rounded-xl bg-[#0b0b10] border border-zinc-800/90">
                  <div className="text-xs font-mono text-red-400 mb-1 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> Audio Pipeline
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.architecture.audioPipeline}
                  </p>
                </div>
              )}
              {project.architecture.reasoningEngine && (
                <div className="p-4 rounded-xl bg-[#0b0b10] border border-zinc-800/90">
                  <div className="text-xs font-mono text-rose-400 mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Gemini LLM Reasoning
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.architecture.reasoningEngine}
                  </p>
                </div>
              )}
              {project.architecture.executionModule && (
                <div className="p-4 rounded-xl bg-[#0b0b10] border border-zinc-800/90">
                  <div className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" /> Windows OS Dispatcher
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.architecture.executionModule}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-red-400" />
              <span>Key Implemented Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0b0b10] border border-zinc-800/80">
                  <div className="text-xs font-semibold text-white mb-1">
                    {feat.title}
                  </div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    {feat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0e0e14] text-zinc-200 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-800/80 bg-[#060608] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
            <span>Status: {project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors shadow-md shadow-red-950/60"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white bg-[#0e0e14] hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
