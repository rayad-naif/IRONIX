import React, { useState } from 'react';
import { Layers, CreditCard, Cpu, Activity, ExternalLink, Image as ImageIcon, ChevronRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function Portfolio({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'omnicore',
      title: 'OmniCore',
      category: 'crm',
      subtitle: 'Next-Gen Enterprise CRM, Funnel & AI Omnichannel Platform',
      badge: 'Flagship Platform',
      description: 'Unified customer success platform combining automated funnel triggers, omni-channel messaging (Email, SMS, WhatsApp), AI conversation agents, and real-time revenue analytics.',
      tags: ['Enterprise CRM', 'Sales Funnels', 'AI Agents', 'Omnichannel API'],
      icon: Layers,
      color: 'from-purple-500 via-indigo-500 to-cyan-500',
      stats: [
        { label: 'Lead Conversion', val: '+142%' },
        { label: 'Avg Support Time', val: '< 2 mins' },
        { label: 'Active Users', val: '50k+' }
      ]
    },
    {
      id: 'invoicenow',
      title: 'InvoiceNow',
      category: 'saas',
      subtitle: 'Smart Automated Invoicing, Recurring Billing & Cashflow AI',
      badge: 'Fintech Product',
      description: 'Autonomous financial billing system with automated recurring invoice generation, smart payment links, multi-currency support, and predictive cashflow analytics.',
      tags: ['Automated Invoicing', 'Stripe/PayPal API', 'Cashflow AI', 'Financial Reports'],
      icon: CreditCard,
      color: 'from-emerald-400 via-teal-500 to-cyan-500',
      stats: [
        { label: 'Invoices Processed', val: '$18M+' },
        { label: 'Payment Velocity', val: '3x Faster' },
        { label: 'Dispute Reduction', val: '94%' }
      ]
    },
    {
      id: 'hyperengine-chess',
      title: 'HyperEngine C++ Engine',
      category: 'software',
      subtitle: 'Low-Latency C++ Engine & Minimax Decision Framework',
      badge: 'High Performance C++',
      description: 'Custom optimized C++ chess engine featuring Minimax decision tree evaluation, Alpha-Beta pruning, state recovery logs, and instant move calculations in sub-milliseconds.',
      tags: ['C++20', 'Minimax & Alpha-Beta', 'Algorithmic Optimization', 'State Recovery'],
      icon: Cpu,
      color: 'from-blue-500 via-cyan-400 to-indigo-500',
      stats: [
        { label: 'Depth Evaluation', val: '300k nps' },
        { label: 'Memory Footprint', val: '< 15MB' },
        { label: 'Move Latency', val: '0.2ms' }
      ]
    },
    {
      id: 'iot-telemetry-hub',
      title: 'Ironix IoT Mesh Command',
      category: 'iot',
      subtitle: 'Hardware Mesh Controller & Edge Telemetry Dashboard',
      badge: 'Embedded Hardware',
      description: 'Industrial IoT monitoring infrastructure receiving sensor streams across thousands of distributed ESP32/STM32 devices with real-time alerting and firmware OTA.',
      tags: ['ESP32 / Firmware', 'MQTT & WebSockets', 'Edge Computing', 'OTA Updates'],
      icon: Activity,
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      stats: [
        { label: 'Connected Nodes', val: '12,500+' },
        { label: 'Uptime SLA', val: '99.99%' },
        { label: 'Packet Processing', val: '50k/sec' }
      ]
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative bg-grid">
      {/* Radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & PRODUCTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered Products & Case Studies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore our featured software platforms, fin-tech automation engines, C++ algorithms, and industrial IoT mesh implementations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'crm', label: 'CRM & Funnels' },
            { id: 'saas', label: 'Fintech & SaaS' },
            { id: 'software', label: 'C++ & Custom Software' },
            { id: 'iot', label: 'IoT & Hardware' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                filter === btn.id
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-8 border border-slate-700/60 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          {project.badge}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-4 rounded-xl bg-[#0b0f19] border border-slate-800 mb-6 font-mono text-center">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                        <div className="text-base font-bold text-cyan-300">{stat.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Built by Ironix Team
                  </span>
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery / Upcoming Workflows Placeholder */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white">Visual Workflows & Dashboard Gallery</h3>
            <p className="text-slate-400 text-sm">
              We regularly update our showcase with live screenshots, workflow diagrams, CRM dashboard templates, and custom IoT sensor interfaces.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
            {['CRM Automation Pipeline', 'IoT Sensor Mesh UI', 'InvoiceNow Analytics', 'C++ Engine Benchmark'].map((name, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800/80 flex flex-col items-center justify-center gap-2 group hover:border-cyan-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-cyan-400">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200">{name}</span>
                <span className="text-[10px] text-cyan-400 font-mono">[Ready for Media]</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
