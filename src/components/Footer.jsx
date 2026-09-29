import React from 'react';
import { Zap, Mail, ArrowUp, Globe, Shield, Code, Terminal, BookOpen, Server } from 'lucide-react';
import { Link } from '../router/useRouter';
import { FOOTER_SECTIONS } from '../data/siteData';

export default function Footer({ onOpenContact }) {
  const currentYear = 2025; // Constant to maintain pure rendering

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white font-sans tracking-tight">IRONIX</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded">ironix.dev</span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering high-throughput software, C++ HyperEngine algorithms, IoT embedded systems, autonomous AI workflows, OmniCore CRMs, and InvoiceNow billing systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/IR-Atelier" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="GitHub">
                <Code className="w-4 h-4" />
              </a>
              <Link to="/setup" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Detailed Setup Guide">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </Link>
              <Link to="/docs" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Developer Docs">
                <BookOpen className="w-4 h-4 text-indigo-400" />
              </Link>
              <button onClick={onOpenContact} className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer" title="Contact Us">
                <Mail className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Marketing Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Solutions & Marketing</h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_SECTIONS.marketing.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer & Technical Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Developer & Setup</h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_SECTIONS.nonMarketing.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Legal & Governance</h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_SECTIONS.legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono space-y-1.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Globe className="w-3.5 h-3.5" />
                  <span>ironix.dev</span>
                </div>
                <div className="text-slate-500 text-[10px]">Cloudflare Edge CDN + GitHub Pages</div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                  <Shield className="w-3 h-3" />
                  <span>SOC2 & TLS 1.3 Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} <span className="text-slate-300 font-bold">Ironix</span> (ironix.dev). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link to="/security" className="hover:text-slate-300 transition-colors">Security</Link>
            <Link to="/status" className="hover:text-slate-300 transition-colors text-emerald-400 flex items-center gap-1">
              <Server className="w-3 h-3" /> Status
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer ml-2"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
