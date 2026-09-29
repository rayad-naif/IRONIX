import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WorkflowsShowcase from '../components/WorkflowsShowcase';
import WhyUs from '../components/WhyUs';
import { ArrowRight, Terminal, BookOpen, ShieldCheck, Cpu, Code2, Sparkles } from 'lucide-react';
import { Link } from '../router/useRouter';

export default function HomePage({ onOpenContact }) {
  return (
    <div>
      <Hero onOpenContact={onOpenContact} />

      {/* Quick Navigation / Ecosystem Banner */}
      <section className="py-8 bg-[#060a12] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/setup"
              className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-cyan-500/50 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white group-hover:text-cyan-300">Detailed Setup Guide</div>
                <div className="text-[11px] text-slate-400">Local Dev, C++ & IoT Flashing</div>
              </div>
            </Link>

            <Link
              to="/docs"
              className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-indigo-950/80 text-indigo-400 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white group-hover:text-indigo-300">Developer Docs</div>
                <div className="text-[11px] text-slate-400">APIs, SDKs & Webhooks</div>
              </div>
            </Link>

            <Link
              to="/products"
              className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-purple-500/50 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-purple-950/80 text-purple-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white group-hover:text-purple-300">OmniCore & Products</div>
                <div className="text-[11px] text-slate-400">CRMs, FinTech & IoT Mesh</div>
              </div>
            </Link>

            <Link
              to="/security"
              className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-950/80 text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white group-hover:text-emerald-300">Security & Compliance</div>
                <div className="text-[11px] text-slate-400">SOC2, Encryption & SLAs</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Services onOpenContact={onOpenContact} />
      <Portfolio onOpenContact={onOpenContact} />
      <WorkflowsShowcase onOpenContact={onOpenContact} />
      <WhyUs />

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-[#080c14] to-[#04070d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>READY TO SCALE YOUR INFRASTRUCTURE?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Your Next Engineering Milestone
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Whether you need low-latency C++ engines, IoT hardware firmware, autonomous AI agents, or enterprise OmniCore CRMs, Ironix delivers guaranteed success.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20 cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/setup"
              className="px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Explore Technical Setup Guide</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
