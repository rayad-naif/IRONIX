import React from 'react';
import { ShieldCheck, Clock, Award, TrendingUp, Users2, Headphones, Terminal } from 'lucide-react';

export default function WhyUs({ onOpenContact }) {
  const metrics = [
    { label: 'Uptime SLA Guarantee', value: '99.99%', detail: 'High availability cloud mesh' },
    { label: 'Avg Customer ROI', value: '4.2x', detail: 'Measured across automation deployments' },
    { label: 'Support Response Time', value: '< 15m', detail: '24/7 dedicated IT support' },
    { label: 'Code Quality Score', value: '100%', detail: 'Strict unit tests & CI/CD pipelines' },
  ];

  const pillars = [
    {
      title: 'Full Lifecycle Ownership',
      desc: 'We don’t just write code; we design embedded hardware, architect AI algorithms, deploy cloud servers, and manage long-term customer success.',
      icon: ShieldCheck
    },
    {
      title: 'Zero Latency Performance',
      desc: 'From custom C++ engines to low-power IoT microcontrollers, our engineering prioritizes speed, efficiency, and bulletproof stability.',
      icon: Clock
    },
    {
      title: 'Built-in Security & Compliance',
      desc: 'Bank-grade encryption for all financial transactions in InvoiceNow, secure token authentication in OmniCore, and audited IoT device mesh keys.',
      icon: Award
    },
    {
      title: 'Growth-Focused Funnels',
      desc: 'Every funnel, CRM feature, and AI agent we build is directly mapped to business metrics: higher conversions, lower churn, and maximized LTV.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <span>THE IRONIX DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Leading Businesses Trust Ironix
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering precision, rapid execution, and unrelenting commitment to customer success.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan font-mono">
                {m.value}
              </div>
              <div className="text-sm font-bold text-white">{m.label}</div>
              <div className="text-xs text-slate-400 font-mono">{m.detail}</div>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-8 border border-slate-800 flex gap-5">
                <div className="p-3.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0 h-fit">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
