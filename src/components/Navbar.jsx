import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap, ChevronRight, Terminal, BookOpen, ShieldCheck } from 'lucide-react';
import { useRouter, Link } from '../router/useRouter';
import { NAV_LINKS } from '../data/siteData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  IRONIX
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-md">
                  DEV
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                software & iot
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800/80">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/status"
              className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono hover:bg-emerald-900/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              99.99% Systems Active
            </Link>

            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:brightness-110 transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-95 cursor-pointer font-mono"
            >
              Start Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-3 space-y-3 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider pb-1 border-b border-slate-800">
            Navigation Menu
          </div>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          ))}

          <div className="pt-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800">
            Developer & Legal Links
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
            <Link to="/setup" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 py-1">
              <Terminal className="w-3 h-3 text-cyan-400" /> Setup Guide
            </Link>
            <Link to="/docs" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 py-1">
              <BookOpen className="w-3 h-3 text-cyan-400" /> Developer Hub
            </Link>
            <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white py-1">
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white py-1">
              Terms of Service
            </Link>
            <Link to="/security" onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white py-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400 inline mr-1" /> Security
            </Link>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20 text-xs font-mono"
            >
              Start Project Inquiry
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
