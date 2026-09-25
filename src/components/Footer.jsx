import React from 'react';
import { Zap, Mail, ArrowUp, Globe, Shield, Terminal, Code, Share2, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenContact }) {
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

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering high-throughput software, IoT embedded solutions, autonomous AI workflows, OmniCore CRMs, and InvoiceNow billing systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/IR-Atelier" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="GitHub">
                <Code className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Social">
                <Share2 className="w-4 h-4" />
              </a>
              <button onClick={onOpenContact} className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Contact Us">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Custom Software & C++</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">IoT Systems & Hardware</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI & LLM Workflows</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">CRMs & E-Commerce</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">IT Support & Success</a></li>
            </ul>
          </div>

          {/* Featured Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Platforms & Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">OmniCore CRM Suite</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">InvoiceNow Cashflow AI</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">C++ Minimax AI Engine</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">IoT Mesh Telemetry</a></li>
              <li><a href="#workflows" className="hover:text-cyan-400 transition-colors">Autonomous Funnels</a></li>
            </ul>
          </div>

          {/* Domain & Infrastructure */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Domain & Infrastructure</h4>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Globe className="w-3.5 h-3.5" />
                <span>ironix.dev</span>
              </div>
              <div className="text-[11px] text-slate-400">Hosted via GitHub Pages + Cloudflare Edge CDN</div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                <Shield className="w-3 h-3" />
                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-bold">Ironix</span> (ironix.dev). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
