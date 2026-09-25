import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'AI & IoT Workflows', href: '#workflows' },
    { name: 'Why Ironix', href: '#why-us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
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
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 glass-panel px-6 py-2 rounded-full border border-slate-800/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Systems Operational
            </div>
            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:brightness-110 transition-all duration-300 shadow-lg shadow-cyan-500/25 active:scale-95 cursor-pointer"
            >
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
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
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/50"
            >
              {link.name}
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20"
            >
              Start Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
