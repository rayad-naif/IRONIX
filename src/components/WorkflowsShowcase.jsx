import React from 'react';
import { GitBranch, Cpu, Database, Bot, Zap, CheckCircle2 } from 'lucide-react';

export default function WorkflowsShowcase({ onOpenContact }) {
  const steps = [
    {
      step: '01',
      title: 'Ingestion & Telemetry',
      subtitle: 'IoT Sensors & Omnichannel Triggers',
      desc: 'Raw telemetry from IoT microcontrollers (ESP32/STM32) and incoming customer events from Web, Email, and Social APIs are captured by Ironix edge gateways.',
      icon: Cpu,
      color: 'text-cyan-400'
    },
    {
      step: '02',
      title: 'Autonomous AI Processing',
      subtitle: 'LLM Agents & Rule Engines',
      desc: 'Ironix AI orchestrators parse, categorize, and enrich event data using specialized LLM models, predictive scoring, and real-time validation.',
      icon: Bot,
      color: 'text-indigo-400'
    },
    {
      step: '03',
      title: 'CRM & Invoice Core Sync',
      subtitle: 'OmniCore & InvoiceNow Engine',
      desc: 'Enriched insights automatically populate OmniCore CRM pipelines, trigger instant lead responses, or generate smart invoices in InvoiceNow.',
      icon: Database,
      color: 'text-purple-400'
    },
    {
      step: '04',
      title: 'Customer Success & Alerting',
      subtitle: '24/7 Support & Real-time Action',
      desc: 'Automated Slack/SMS notifications alert your operations team, while high-priority customer tickets automatically route to dedicated IT success reps.',
      icon: Zap,
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="workflows" className="py-24 relative bg-[#080c14] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Autonomous Ecosystem Architecture
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how Ironix connects embedded IoT devices, custom AI workflows, and CRM platforms into an unstoppable automated business engine.
          </p>
        </div>

        {/* Workflow steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-400/50 transition-colors">
                      {s.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3">{s.subtitle}</div>

                  <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Latency: Sub-50ms</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white">Need a Custom Automation or IoT Pipeline?</h4>
            <p className="text-slate-300 text-sm">Our engineers can design, build, and deploy your custom system in record time.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20 shrink-0 cursor-pointer"
          >
            Schedule Architecture Call
          </button>
        </div>

      </div>
    </section>
  );
}
