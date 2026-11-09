import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { profileData } from '../data/profile';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a10] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Academic Context */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-[#0e1422] border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-blue-400">
              NV
            </div>
            <div>
              <div className="font-semibold text-slate-200">
                {profileData.name} • {profileData.role}
              </div>
              <div className="text-[11px] text-slate-400">
                Sagar Institute of Science and Technology (B.Tech • Expected 2028)
              </div>
            </div>
          </div>

          {/* Social & Code Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.links.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-xs">Top</span>
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
