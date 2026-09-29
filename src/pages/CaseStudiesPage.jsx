import React from 'react';
import { Activity, Cpu, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

export default function CaseStudiesPage({ onOpenContact }) {
  const cases = [
    {
      title: 'Scaling FinTech Transaction Velocity with InvoiceNow',
      client: 'Global Logistics & Merchant Gateway Provider',
      category: 'FinTech & Automated Billing',
      icon: CreditCard,
      challenge: 'Client faced high payment default rates and delayed invoicing across 14 international regional hubs, causing a $4.2M working capital deficit.',
      solution: 'Ironix deployed InvoiceNow with automated multi-currency payment link dispatching, AI defaulter risk scoring, and automated dunning workflows.',
      impact: [
        '+320% Faster payment collection velocity',
        '94% Reduction in invoice disputes and manual reconciliation errors',
        '$18M+ Processed volume in first 6 months of rollout'
      ],
      techStack: ['InvoiceNow API', 'Stripe Connect', 'PostgreSQL', 'Redis', 'Twilio API']
    },
    {
      title: 'High-Density ESP32 Industrial Mesh Telemetry',
      client: 'Smart Agriculture & Cold Chain Logistics Enterprise',
      category: 'IoT & Hardware Firmware',
      icon: Activity,
      challenge: 'Sensors in remote refrigerated containers experienced 35% packet drop rates and severe battery drain during network outages.',
      solution: 'Ironix engineered custom ESP32/FreeRTOS firmware featuring local state caching, encrypted MQTT mesh fallback, and low-power sleep state cycles.',
      impact: [
        '12,500 Sensor nodes connected with 99.99% mesh uptime',
        'Sub-10ms telemetry propagation across distributed nodes',
        '4.5x Battery lifespan extension on solar/battery backup nodes'
      ],
      techStack: ['ESP32 C++', 'FreeRTOS', 'MQTT over TLS', 'InfluxDB', 'Grafana']
    },
    {
      title: 'Sub-Millisecond Minimax Decision Engine in C++20',
      client: 'High-Frequency Algorithmic Strategy Firm',
      category: 'Low-Latency C++ Engineering',
      icon: Cpu,
      challenge: 'Legacy Python algorithmic decision engine took 45ms per state evaluation, leading to missed execution windows during volatility spikes.',
      solution: 'Ironix re-architected the evaluation core into pure modern C++20 (HyperEngine architecture) utilizing custom bitboard representations and SIMD AVX2 acceleration.',
      impact: [
        'Reduced evaluation latency from 45ms to 0.2ms (225x speedup)',
        '300,000 Nodes/sec deep evaluation search capability',
        'Zero dynamic memory allocations during live decision passes'
      ],
      techStack: ['C++20', 'AVX2 SIMD', 'Google Benchmark', 'Clang', 'gRPC']
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <span>REAL WORLD ENGINEERING IMPACT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Case Studies & Architecture Impact
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Explore how Ironix transforms complex technical challenges into measurable business growth, bulletproof stability, and raw performance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div key={idx} className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-700 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{c.category}</span>
                      <h2 className="text-2xl font-bold text-white">{c.title}</h2>
                      <div className="text-xs text-slate-400 font-mono">{c.client}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <h3 className="font-mono font-bold text-slate-400 uppercase mb-1">The Technical Challenge:</h3>
                      <p className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800">{c.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-mono font-bold text-slate-400 uppercase mb-1">The Ironix Solution:</h3>
                      <p className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800">{c.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-mono font-bold text-cyan-400 uppercase text-xs">Measured Metrics & Impact:</h3>
                    <div className="space-y-2">
                      {c.impact.map((imp, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-200 font-mono">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="text-[10px] font-mono text-slate-500 uppercase mb-1.5">Tech Stack Used:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {c.techStack.map((t, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2 rounded-xl text-xs font-mono font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Similar Architecture Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
