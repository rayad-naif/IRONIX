import React from 'react';
import { Server } from 'lucide-react';

export default function SlaGuaranteesPage({ onOpenContact }) {
  const tiers = [
    {
      name: 'Tier 1 Standard SLA',
      response: 'Within 4 Business Hours',
      uptime: '99.9% Uptime SLA',
      esc: 'Email & Developer Ticket Portal',
      credit: '10% Monthly Fee Credit per 1% Downtime'
    },
    {
      name: 'Tier 2 Managed Retainer SLA',
      response: 'Within 1 Hour (24/7 Monitored)',
      uptime: '99.95% Uptime SLA',
      esc: 'Dedicated Slack Channel & PagerDuty',
      credit: '25% Monthly Fee Credit per 0.5% Downtime'
    },
    {
      name: 'Tier 3 Enterprise Critical SLA',
      response: 'Sub-15 Minutes Guarantee',
      uptime: '99.99% Guaranteed SLA',
      esc: 'Direct Phone Escalation to Senior Lead Architect',
      credit: '50% Monthly Fee Credit for breach of response window'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
            <Server className="w-3.5 h-3.5" />
            <span>CONTRACTUAL SLA GUARANTEES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Service Level Agreements (SLAs) & Credits
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Ironix back our managed infrastructure and technical support commitments with contractual financial credits and sub-15 minute incident escalation timelines.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((t, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 border border-slate-700 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded border border-cyan-500/30">
                  {t.name}
                </span>

                <div className="space-y-2 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
                    <span className="text-slate-500">Incident Response Time:</span>
                    <div className="text-base font-bold text-emerald-400">{t.response}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
                    <span className="text-slate-500">Infrastructure Availability:</span>
                    <div className="text-base font-bold text-cyan-300">{t.uptime}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
                    <span className="text-slate-500">Escalation Protocol:</span>
                    <div className="text-slate-200">{t.esc}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
                    <span className="text-slate-500">Breach Credit Penalty:</span>
                    <div className="text-amber-400">{t.credit}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
              >
                Inquire About SLA
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
