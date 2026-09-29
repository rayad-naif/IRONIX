import React from 'react';
import { Zap, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage({ onOpenContact }) {
  const values = [
    {
      title: 'Precision Engineering Over Bloat',
      desc: 'We build systems with high performance, memory efficiency, and minimal dependency overhead in mind. Whether C++20, Go, or React, every line is written for speed and clarity.'
    },
    {
      title: 'Full Lifecycle Ownership',
      desc: 'We don’t hand off untested code and walk away. Ironix manages design, firmware compilation, cloud orchestration, CI/CD, security audits, and 24/7 customer success.'
    },
    {
      title: 'Transparent Technical Standards',
      desc: 'Clients receive complete source code, automated test suites, architectural documentation, and zero vendor lock-in rights.'
    },
    {
      title: 'Relentless Reliability & SLAs',
      desc: 'Our 99.99% system uptime guarantees and sub-15 minute incident response SLAs ensure your business never stops running.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>ABOUT IRONIX (IRONIX.DEV)</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Next-Gen Software, IoT & AI Engineering
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Ironix is a premier software engineering and hardware technology atelier built to build, deploy, and scale high-concurrency systems globally.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Story / Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Engineering Excellence Without Compromise</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Founded on the belief that modern software should be fast, reliable, and deeply integrated with physical hardware and AI automation, Ironix builds technology infrastructure for companies that cannot afford failure.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Our multidisciplinary team spans low-latency C++ systems programmers, embedded IoT hardware engineers, full-stack web architects, autonomous AI pipeline specialists, and 24/7 cloud DevOps experts.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-slate-400">Client Code Rights Ownership</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
                <div className="text-2xl font-bold text-emerald-400">99.99%</div>
                <div className="text-slate-400">Managed System Uptime SLA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl glass-card border border-slate-700 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Global Presence</h3>
                  <p className="text-xs font-mono text-cyan-400">ironix.dev</p>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-500">Domain Host:</span>
                  <span>ironix.dev (CNAME verified)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-500">Deployment Pipeline:</span>
                  <span>GitHub Actions CI/CD</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-500">CDN Infrastructure:</span>
                  <span>Cloudflare Global Edge</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Primary Core Pillars:</span>
                  <span className="text-cyan-300">C++, IoT, AI, CRMs, IT</span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect With Lead Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-white">Our Engineering Manifesto</h2>
            <p className="text-slate-400 text-sm">The core principles guiding every software build and hardware firmware we deploy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Principle 0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
