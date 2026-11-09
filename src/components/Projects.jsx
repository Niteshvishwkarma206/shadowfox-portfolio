import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, Terminal, FileCode2, Info } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-[#090d16] border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>03 // Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered systems & real-world software applications.
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Highlighted software solutions focusing on full-stack web platforms, clean relational data tracking, and multimodal AI automation.
          </p>
        </div>

        {/* Project Cards (Large feature style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between bg-[#0c111c] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 relative group"
            >
              <div>
                {/* Project Header Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[#101726] border border-blue-500/20 text-blue-400">
                      {project.id === 'civicconnect' ? (
                        <Layers className="w-4 h-4" />
                      ) : (
                        <Terminal className="w-4 h-4" />
                      )}
                    </span>
                    <span className="text-xs font-mono text-blue-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    {project.timeline}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-1 mb-4">
                  {project.tagline}
                </p>

                {/* Project Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlighted Engineering Features preview */}
                <div className="space-y-2 mb-6">
                  {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                      <span>
                        <strong className="text-white font-medium">{feat.title}:</strong> {feat.detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#101625] text-slate-300 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect Architecture & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c111c] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              <FileCode2 className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Looking for more codebases and repositories?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Visit Nitesh Vishwakarma's GitHub profile to explore active commits, scripts, and coursework implementations.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Niteshvishwkarma206"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/Niteshvishwkarma206</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
