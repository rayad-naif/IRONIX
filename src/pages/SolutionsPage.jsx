import React from 'react';
import { Building2, Rocket, Cpu, TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from '../router/useRouter';

export default function SolutionsPage({ onOpenContact }) {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Digital Transformation',
      target: 'Large Enterprises & Cloud Infrastructure Teams',
      description: 'Modernize legacy systems with microservice architectures, high-performance C++ compute modules, and enterprise-grade SLA monitoring.',
      benefits: [
        'Legacy C/C++ or Monolith Modernization into Cloud-Native Microservices',
        'Bank-Grade End-to-End TLS 1.3 & SOC2 Compliance Frameworks',
        'Sub-15 Minute Emergency Escalation SLA Response Guarantees',
        'Custom OmniCore CRM Integrations with Existing SAP / Salesforce Pipelines'
      ]
    },
    {
      icon: Rocket,
      title: 'High-Growth Tech Startups',
      target: 'SaaS Founders & VC-Backed Companies',
      description: 'Rapidly go from prototype to production with scalable React 19 web applications, automated InvoiceNow payment billing, and AI customer care agents.',
      benefits: [
        'Rapid MVP to Production Engineering Sprints',
        'Automated Recurring Revenue Billing via InvoiceNow',
        'Autonomous AI Lead Enrichment & Automated Customer Support',
        'Scalable Serverless & Docker Cloud Infrastructure Setup'
      ]
    },
    {
      icon: Cpu,
      title: 'Hardware OEMs & Industrial IoT',
      target: 'Smart Building, Robotics & Telemetry Providers',
      description: 'End-to-end hardware firmware development, low-power mesh connectivity, and live telemetry dashboards.',
      benefits: [
        'Custom Microcontroller Firmware for ESP32, STM32 & Nordic Chips',
        'Secure Over-The-Air (OTA) Remote Firmware Upgrade Infrastructure',
        'Low-Power Sleep Optimization for Remote Battery & Solar Sensors',
        'Real-time MQTT Telemetry Processing & Anomaly Alerting'
      ]
    },
    {
      icon: TrendingUp,
      title: 'E-Commerce & Funnel Scaling',
      target: 'Direct-to-Consumer Brands & High-Volume Merchants',
      description: 'High-velocity sales funnels, dynamic checkout experiences, and automated customer retention campaigns engineered for maximum LTV.',
      benefits: [
        'Conversion-Engineered Custom Checkout & Landing Pages',
        'Automated Abandoned Cart & Post-Purchase Upsell Sequences',
        'Multi-Currency Stripe/PayPal & Localized Payment Gateways',
        'Real-time Cohort Analytics & Ad Campaign Attribution'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>TAILORED INDUSTRY SOLUTIONS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Engineering Solutions for Every Stage
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Whether you are an enterprise scaling high-throughput APIs, a startup launching a SaaS, or an OEM deploying IoT mesh networks, Ironix provides custom architectures.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="glass-card rounded-3xl p-8 border border-slate-700 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase font-bold">{s.target}</span>
                      <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{s.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Key Deliverables & Value Props:</h4>
                    {s.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20 cursor-pointer flex items-center gap-2"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link to="/pricing" className="text-xs font-mono text-cyan-400 hover:text-cyan-300">
                    View Pricing Models →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
