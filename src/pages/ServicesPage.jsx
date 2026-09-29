import React, { useState } from 'react';
import { Code2, Cpu, Bot, ShoppingCart, Headphones, CheckCircle2, ArrowRight, Terminal, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Link } from '../router/useRouter';

export default function ServicesPage({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState('cpp');

  const serviceCategories = [
    {
      id: 'cpp',
      icon: Code2,
      name: 'Custom Software & Low-Latency C++',
      tagline: 'Sub-millisecond high-throughput engines & scalable web applications',
      description: 'We architect and build enterprise software systems from the metal up. Whether you require real-time financial order matching, game logic trees in C++20, or microservices handling 100,000+ requests/sec in Go and Node, Ironix provides bulletproof execution.',
      features: [
        'High-Throughput C++20 / Rust Algorithmic Engines',
        'State Machine & Memory Pool Optimizations',
        'Scalable Microservice Architectures (Go, Node, Python, Rust)',
        'Low-Latency WebSockets & gRPC API Backends',
        'Cross-Platform Desktop Apps (Electron, Tauri, Native C++)',
        'Database Optimization (PostgreSQL, Redis, ScyllaDB, ClickHouse)'
      ],
      techStack: ['C++20', 'Rust', 'Go', 'React 19', 'TypeScript', 'Node.js', 'Docker', 'gRPC', 'PostgreSQL', 'Redis'],
      deliverables: 'Source code with 100% test coverage, CI/CD pipeline configuration, Docker container specs, full API documentation, performance benchmarks.'
    },
    {
      id: 'iot',
      icon: Cpu,
      name: 'IoT & Embedded Hardware',
      tagline: 'Custom hardware microcontrollers, sensor mesh networks & edge computing',
      description: 'From circuit schematics to field-tested microcontroller firmware, Ironix engineers edge-to-cloud IoT ecosystems. We handle ESP32, STM32, and Nordic BLE chips, providing live telemetry, encrypted MQTT channels, and over-the-air (OTA) firmware update infrastructure.',
      features: [
        'Custom Microcontroller Firmware (ESP32, STM32, AVR, Nordic NRF52)',
        'Low-Power Sensor Mesh Networking (MQTT, CoAP, BLE Mesh, LoRaWAN)',
        'Edge Computing & Real-Time Sensor Processing',
        'Encrypted OTA (Over-The-Air) Firmware Flashing Architecture',
        'Hardware-in-the-Loop (HIL) Testing & Quality Assurance',
        'Industrial Web Dashboard Telemetry & Real-Time Alerting'
      ],
      techStack: ['C/C++', 'ESP-IDF', 'PlatformIO', 'FreeRTOS', 'MQTT', 'WebSockets', 'InfluxDB', 'Grafana', 'STM32Cube'],
      deliverables: 'Flashing-ready firmware binaries, PCB schematics, PlatformIO project files, MQTT protocol specifications, cloud telemetry dashboard.'
    },
    {
      id: 'ai',
      icon: Bot,
      name: 'Autonomous AI & LLM Workflows',
      tagline: 'Intelligent AI agents, vector retrieval & automated business processes',
      description: 'Eliminate repetitive manual operations with custom LLM orchestrations, multi-agent frameworks, and autonomous document processing pipelines. We build self-correcting workflows that integrate with your existing CRM, database, and messaging platforms.',
      features: [
        'Custom AI Agent Architectures (LangChain, LlamaIndex, AutoGen)',
        'Vector Search & RAG (Retrieval-Augmented Generation) Pipelines',
        'Automated Customer Communication & Lead Qualification Agents',
        'Document Processing, OCR & Structured Data Extraction',
        'Fine-Tuned LLMs for Specialized Domain Knowledge',
        'Multi-App Automation via Webhooks & Zapier/Make Connectors'
      ],
      techStack: ['Python', 'PyTorch', 'OpenAI API', 'Claude API', 'Pinecone', 'Qdrant', 'FastAPI', 'Celery', 'LangChain'],
      deliverables: 'Deployed AI API endpoints, vector database indexes, prompt templates, monitoring dashboards, fallback mechanisms.'
    },
    {
      id: 'crm',
      icon: ShoppingCart,
      name: 'OmniCore CRMs, Funnels & E-Commerce',
      tagline: 'High-converting sales funnels, custom CRMs & automated billing',
      description: 'Maximize customer lifetime value with custom CRM solutions built specifically for your revenue model. OmniCore provides unified lead tracking, automated email/SMS sequences, dynamic pricing checkout funnels, and integrated InvoiceNow billing.',
      features: [
        'OmniCore Enterprise CRM Platform Deployment',
        'High-Velocity Sales Funnel Engine & Landing Pages',
        'Omnichannel Messaging (Email, SMS, WhatsApp, Telegram API)',
        'Custom Checkout & Multi-Currency Payment Gateways (Stripe, PayPal)',
        'Automated Lead Scoring, Routing & Pipeline Management',
        'Revenue Analytics & Customer Retention Dashboards'
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Stripe API', 'Twilio API', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
      deliverables: 'Fully branded CRM portal, custom funnel templates, payment gateway configuration, automated email/SMS triggers, staff training.'
    },
    {
      id: 'support',
      icon: Headphones,
      name: '24/7 Managed IT Support & Success',
      tagline: 'SLA-backed cloud infrastructure management & dedicated account success',
      description: 'Ensure your mission-critical applications maintain 99.99% uptime. Our dedicated IT customer success managers and DevOps engineers provide round-the-clock server monitoring, automated backups, security patching, and instant incident resolution.',
      features: [
        '24/7/365 Proactive Infrastructure Monitoring & Alerting',
        'Sub-15 Minute Emergency SLA Incident Response',
        'Automated Backup, Failover & Disaster Recovery Procedures',
        'Cybersecurity Audits, Penetration Testing & Vulnerability Patching',
        'Dedicated Technical Account Manager & Success Reps',
        'DevOps CI/CD Automation & Kubernetes/Docker Orchestration'
      ],
      techStack: ['AWS', 'Google Cloud', 'Cloudflare', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Terraform'],
      deliverables: 'Signed SLA agreement, 24/7 monitoring access, monthly security & performance reports, dedicated Slack/Teams communication channel.'
    }
  ];

  const activeData = serviceCategories.find(s => s.id === selectedService);

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>IRONIX SERVICE PILLARS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Engineering & Technology Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            From bare-metal C++ algorithmic engines and embedded IoT microcontrollers to AI-driven CRMs and 24/7 cloud support, explore our technical competencies.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {serviceCategories.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedService === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800 text-white border-2 border-cyan-400 shadow-xl shadow-cyan-500/10'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div>
                  <div className={`p-3 rounded-xl inline-block mb-3 ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-1">{s.name.split(' ')[0]} {s.name.split(' ')[1]}</h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{s.tagline}</p>
                </div>
                <div className={`text-[10px] font-mono mt-4 flex items-center justify-between ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        {activeData && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-md border border-cyan-500/30">
                    SERVICE SPECIFICATION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                    {activeData.name}
                  </h2>
                  <p className="text-cyan-300 font-mono text-sm mt-1">{activeData.tagline}</p>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {activeData.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Core Engineering Features & Capabilities:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeData.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Deliverables & Code Handover</span>
                  </div>
                  <p className="text-xs text-slate-300">{activeData.deliverables}</p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-3 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20 cursor-pointer flex items-center gap-2"
                  >
                    <span>Request Technical Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    to="/setup"
                    className="px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 glass-panel hover:bg-slate-800 transition-colors flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>View Setup & Architecture Guide</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar Tech Specs */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">TECH STACK ARCHITECTURE</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeData.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 space-y-3 font-mono text-xs border-t border-slate-800">
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-500">Quality Guarantee:</span>
                      <span className="text-emerald-400">100% Test Pass</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-500">Code Rights:</span>
                      <span className="text-slate-200">100% Client IP</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/60">
                      <span className="text-slate-500">SLA Support:</span>
                      <span className="text-slate-200">24/7 Tier 3 Included</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Deployment Model:</span>
                      <span className="text-cyan-300">Cloud or On-Prem</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center gap-2 text-slate-200 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Ironix Quality Protocol</span>
                  </div>
                  <p>All projects undergo automated linting, security vulnerability scans, and stress-testing prior to production handover.</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </section>
    </div>
  );
}
