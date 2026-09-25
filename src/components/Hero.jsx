import React from 'react';
import { ShieldCheck, Cpu, Bot, Rocket, ArrowRight, Terminal, Sparkles, Database, Layers, CheckCircle } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-inner">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>IRONIX.DEV — SOFTWARE • IOT • AI AUTOMATIONS • CRMs</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Engineering Next-Gen <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Software, IoT & AI</span> Ecosystems
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Ironix transforms businesses through hyper-scalable custom software, IoT embedded systems, automated AI workflows, high-converting growth funnels, and dedicated IT customer success.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:brightness-110 transition-all duration-300 shadow-xl shadow-cyan-500/25 group cursor-pointer"
            >
              <span>Build With Ironix</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-slate-200 glass-card hover:bg-slate-800/80 transition-all duration-300"
            >
              Explore Portfolio & Products
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>OmniCore & InvoiceNow Suites</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Custom Hardware & IoT Mesh</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Autonomous AI Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>24/7 Enterprise IT Support</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Graphic */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl glass-card p-2 sm:p-4 border border-slate-700/60 shadow-2xl shadow-cyan-950/40">
          <div className="rounded-xl bg-[#0b0f19] border border-slate-800/80 overflow-hidden">
            {/* Window bar */}
            <div className="px-4 py-3 bg-[#0d1322] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-slate-400">ironix-cloud-hub.v4.2 — system_status: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                LIVE TELEMETRY
              </div>
            </div>

            {/* Terminal / Dashboard metrics simulation */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>AI AUTOMATION QUEUE</span>
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">99.98%</div>
                <div className="text-xs text-emerald-400">142,890 Tasks Execution/hr</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[94%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>CONNECTED IOT NODES</span>
                  <Cpu className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-white">12,450</div>
                <div className="text-xs text-indigo-400">Sub-10ms Mesh Latency</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[98%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>CRM & FUNNEL REVENUE</span>
                  <Layers className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">$4.28M</div>
                <div className="text-xs text-purple-400">+34.2% Growth YoY</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[88%]"></div>
                </div>
              </div>
            </div>

            {/* Code / Workflow snippet stream */}
            <div className="px-6 pb-6 pt-0">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-1 overflow-x-auto">
                <div className="text-slate-500">// Ironix Automated Ecosystem Deployment</div>
                <div><span className="text-purple-400">import</span> &#123; <span className="text-cyan-300">OmniCore</span>, <span className="text-cyan-300">InvoiceNow</span>, <span className="text-cyan-300">IoTTelemetry</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@ironix/core'</span>;</div>
                <div><span className="text-blue-400">const</span> <span className="text-yellow-300">system</span> = <span className="text-purple-400">new</span> <span className="text-cyan-300">IronixEngine</span>(&#123; domain: <span className="text-emerald-300">'ironix.dev'</span>, aiAutomations: <span className="text-amber-400">true</span> &#125;);</div>
                <div className="text-emerald-400">✔ Connected to IoT Edge Gateway | 0 Packet Loss | CRM Funnels Active</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
