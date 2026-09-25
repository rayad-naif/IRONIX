import React, { useState } from 'react';
import { Code2, Cpu, Bot, ShoppingCart, Headphones, Check, ArrowRight, ShieldAlert, Sparkles, Layers, Zap } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'software',
      icon: Code2,
      title: 'Custom Software Development',
      badge: 'Full-Stack & High Performance',
      description: 'We build enterprise web platforms, cloud microservices, and high-throughput desktop applications engineered for massive scale.',
      highlights: [
        'Custom Web & Mobile Applications (React, Next.js, Node, Go, C++)',
        'High-Performance Algorithmic Engines & Real-time Processing',
        'Scalable REST & GraphQL Cloud APIs',
        'Legacy System Modernization & Microservices'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'iot',
      icon: Cpu,
      title: 'IoT & Embedded Systems',
      badge: 'Hardware & Edge Intelligence',
      description: 'Complete IoT solutions spanning embedded firmware, sensor mesh networks, edge computing devices, and real-time cloud management.',
      highlights: [
        'Custom Microcontroller & Firmware Development (ESP32, STM32, C/C++)',
        'Real-time Telemetry & MQTT/HTTP Mesh Networks',
        'IoT Cloud Dashboards & Remote Device Diagnostics',
        'Industrial Automation & Smart Sensors'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'AI Automations & Workflows',
      badge: 'Autonomous Enterprise AI',
      description: 'Replace tedious manual tasks with intelligent LLM pipelines, autonomous agents, document extraction, and seamless API integrations.',
      highlights: [
        'Custom AI Agent Workflows & LLM Orchestration',
        'Automated Customer Communication & Lead Processing',
        'Document Processing & Predictive Data Analytics',
        'Multi-App Zapier/Make & Custom Webhook Automations'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'crm-ecom',
      icon: ShoppingCart,
      title: 'CRMs, Funnels & E-Commerce',
      badge: 'Revenue Growth Engine',
      description: 'High-converting sales funnels, custom CRM platforms like OmniCore, and scalable e-commerce infrastructure built to maximize customer LTV.',
      highlights: [
        'Custom CRM Platform Architectures (OmniCore Suite)',
        'Conversion-Engineered High Velocity Sales Funnels',
        'Custom E-Commerce & Payment Gateway Integrations',
        'Automated Lead Nurturing & Email/SMS Sequences'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'it-support',
      icon: Headphones,
      title: 'IT Support & Customer Success',
      badge: '24/7 Managed Success',
      description: 'End-to-end technical support, cloud infrastructure management, security auditing, and white-glove customer success management.',
      highlights: [
        '24/7 Infrastructure Monitoring & SLA Guarantees',
        'Dedicated Technical Account & Customer Success Managers',
        'Cybersecurity, Backups & Disaster Recovery Strategy',
        'User Onboarding, Documentation & Training'
      ],
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#080c14]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Digital Engineering Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From embedded hardware and low-latency C++ engines to AI-driven enterprise CRMs and 24/7 customer support, Ironix covers your entire tech lifecycle.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{service.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detail Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700/60 relative overflow-hidden">
          {/* Subtle color highlight */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${services[activeTab].color}`}></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-cyan-400 text-xs font-mono border border-slate-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{services[activeTab].badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white">
                {services[activeTab].title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {services[activeTab].description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Capabilities & Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeTab].highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <div className="mt-1 w-4 h-4 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-cyan-400" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  <span>Request Custom Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    {React.createElement(services[activeTab].icon, { className: 'w-6 h-6 text-cyan-400' })}
                    <span className="font-mono text-xs text-slate-300 font-bold">IRONIX SPECIFICATION</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">READY TO DEPLOY</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Execution Speed:</span>
                    <span className="text-cyan-300">Optimized Sub-ms</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Architecture:</span>
                    <span className="text-slate-200">Cloud-Native / Edge Mesh</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Scalability:</span>
                    <span className="text-slate-200">Infinite Auto-Scaling</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Support Model:</span>
                    <span className="text-emerald-400">24/7 Dedicated Team</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-[11px] leading-snug">
                  💡 Every Ironix project includes automated CI/CD pipelines, security compliance checks, and real-time monitoring analytics.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
