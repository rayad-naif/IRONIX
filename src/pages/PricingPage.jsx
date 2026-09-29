import React, { useState } from 'react';
import { Check, Zap, ArrowRight, Calculator } from 'lucide-react';

export default function PricingPage({ onOpenContact }) {
  const [calcScope, setCalcScope] = useState('fullstack');
  const [calcSla, setCalcSla] = useState('standard');

  const plans = [
    {
      name: 'Project Milestone Sprints',
      tagline: 'Ideal for custom software builds, C++ modules, or MVP launches',
      price: '$5,000',
      period: 'per sprint / project scope',
      badge: 'FIXED SCOPE',
      features: [
        'Dedicated Senior Lead Engineer & Architect',
        'Milestone-based delivery & bi-weekly code handovers',
        'Complete Source Code Rights & Documentation',
        'Automated CI/CD Pipeline & Docker setup',
        '30-Day Post-Launch Bug Warranty',
        'Direct Slack/Discord developer communication'
      ],
      cta: 'Request Project Quote',
      highlighted: false
    },
    {
      name: 'Managed Engineering Retainer',
      tagline: 'Dedicated full-stack, IoT hardware & AI pipeline engineering team',
      price: '$12,500',
      period: 'per month',
      badge: 'MOST POPULAR',
      features: [
        'Full Dedicated Squad (Backend, Frontend, IoT/Firmware, AI)',
        'Continuous Sprint Backlog execution & priority feature delivery',
        'OmniCore CRM & InvoiceNow Suite custom customizations',
        '24/7 Infrastructure Monitoring & Security Audits',
        '99.99% Guaranteed SLA Uptime & Tier 3 Engineer Escalation',
        'Weekly Architectural Reviews & Performance Tuning'
      ],
      cta: 'Start Retainer Engagement',
      highlighted: true
    },
    {
      name: 'Enterprise Hardware & SLA',
      tagline: 'Custom hardware PCB designs, global IoT mesh & 24/7 dedicated support',
      price: 'Custom',
      period: 'tailored annual contract',
      badge: 'ENTERPRISE',
      features: [
        'Custom Microcontroller PCB Design & Volume Firmware Flashing',
        'Sub-15 Minute SLA Incident Escalation Response Guarantee',
        'On-Premise or Private Cloud Dedicated Deployment',
        'SOC2 Type II & Security Penetration Test Certification',
        'Executive Advisory Board & Technical Account Manager',
        'Custom Hardware-in-the-Loop (HIL) Testing'
      ],
      cta: 'Contact Enterprise Team',
      highlighted: false
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT ENGAGEMENT MODELS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Predictable Pricing, Zero Hidden Fees
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Choose between milestone-based fixed scope builds, dedicated monthly engineering retainers, or enterprise SLA agreements.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border relative flex flex-col justify-between transition-all ${
                p.highlighted
                  ? 'glass-card border-cyan-400 shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-400/50 bg-slate-900/90'
                  : 'glass-panel border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-md ${p.highlighted ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-cyan-400 border border-slate-700'}`}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{p.tagline}</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl font-extrabold text-white font-mono">{p.price}</span>
                  <span className="text-xs text-slate-400 ml-2 font-mono">{p.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono font-bold uppercase text-slate-400">Included In Engagement:</div>
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  p.highlighted
                    ? 'text-black bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20'
                    : 'text-white bg-slate-800 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span>{p.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Budget Calculator Widget */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instant Project Estimate Calculator</h3>
              <p className="text-xs text-slate-400">Select your key engineering requirements to view an estimated budget range.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">Primary Engineering Scope</label>
              <select
                value={calcScope}
                onChange={(e) => setCalcScope(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs font-mono text-slate-100 focus:border-cyan-500 outline-none"
              >
                <option value="fullstack">Custom Web Platform / React 19 App ($5k - $12k)</option>
                <option value="cpp">Low-Latency C++ Engine / Algorithmic Core ($8k - $20k)</option>
                <option value="iot">IoT Microcontroller Firmware & Telemetry Hub ($7k - $18k)</option>
                <option value="ai">Autonomous AI Workflow & Vector Pipeline ($6k - $15k)</option>
                <option value="omnicore">OmniCore CRM Suite Custom Deployment ($10k - $25k)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">Support & SLA Tier</label>
              <select
                value={calcSla}
                onChange={(e) => setCalcSla(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs font-mono text-slate-100 focus:border-cyan-500 outline-none"
              >
                <option value="standard">Standard 30-Day Launch Support (Included)</option>
                <option value="business">24/7 Monitored SLA Support (+$1,500/mo)</option>
                <option value="enterprise">Sub-15m Escalation SLA + Dedicated Account Mgr (+$3,500/mo)</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div className="text-xs text-slate-300">
              Estimated Initial Range: <span className="text-cyan-400 font-bold text-base ml-1">
                {calcScope === 'fullstack' ? '$5,000 – $12,000' :
                 calcScope === 'cpp' ? '$8,000 – $20,000' :
                 calcScope === 'iot' ? '$7,000 – $18,000' :
                 calcScope === 'ai' ? '$6,000 – $15,000' : '$10,000 – $25,000'}
              </span>
            </div>
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20 cursor-pointer"
            >
              Get Custom Formal Scope
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
