import React, { useState } from 'react';
import { Layers, CreditCard, Cpu, Activity, ArrowRight, Sparkles, Check, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from '../router/useRouter';

export default function ProductsPage({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('omnicore');

  const products = [
    {
      id: 'omnicore',
      title: 'OmniCore Suite',
      category: 'Enterprise CRM & Omnichannel AI',
      icon: Layers,
      color: 'from-purple-500 via-indigo-500 to-cyan-500',
      badge: 'FLAGSHIP CRM PLATFORM',
      tagline: 'Unified Customer Intelligence, Conversion Funnels & Automated AI Agents',
      overview: 'OmniCore is Ironix’s flagship enterprise CRM suite engineered for high-growth businesses. It consolidates lead tracking, automated funnel triggers, multi-channel customer communications (Email, SMS, WhatsApp), and real-time revenue analytics into a single high-performance dashboard.',
      features: [
        'Omnichannel Conversation Hub (Email, SMS, WhatsApp, Web Chat)',
        'Custom Drag-and-Drop Sales Funnel Builder',
        'Autonomous AI Lead Scoring & Intent Recognition',
        'Automated Email & SMS Follow-Up Sequences',
        'Built-in InvoiceNow Payment Link Integration',
        'Detailed Cohort Retention & Lifetime Value (LTV) Analytics'
      ],
      metrics: [
        { label: 'Avg Lead Conversion Lift', value: '+142%' },
        { label: 'Customer First Response', value: '< 2 mins' },
        { label: 'Active Monthly Leads', value: '500k+' }
      ],
      specs: {
        'API Rate Limit': '10,000 req/min',
        'Database Engine': 'PostgreSQL + Redis Cache',
        'Encryption': 'AES-256 at rest, TLS 1.3 in transit',
        'Integrations': 'Stripe, PayPal, Zapier, Webhooks, Twilio'
      }
    },
    {
      id: 'invoicenow',
      title: 'InvoiceNow',
      category: 'Fintech & Cashflow AI',
      icon: CreditCard,
      color: 'from-emerald-400 via-teal-500 to-cyan-500',
      badge: 'AUTOMATED BILLING ENGINE',
      tagline: 'Smart Invoice Automation, Recurring Subscriptions & Cashflow Predictive AI',
      overview: 'InvoiceNow automates your financial billing pipeline. Generate automated recurring invoices, send instant payment links via SMS/email, reconcile payments with zero manual effort, and utilize AI cashflow prediction to eliminate late payments.',
      features: [
        'Automated Recurring Invoice Generation & Schedule Dispatch',
        'One-Click Instant Payment Links (Credit Card, ACH, Crypto)',
        'Predictive Cashflow Forecasting & Defaulter Risk Scoring',
        'Multi-Currency Support & Automated Tax Calculation',
        'Real-Time Webhook Notifications on Payment Events',
        'Automated dunning & Gentle Overdue Payment Reminders'
      ],
      metrics: [
        { label: 'Processed Transaction Vol', value: '$18M+' },
        { label: 'Payment Velocity Acceleration', value: '3.2x Faster' },
        { label: 'Invoice Dispute Reduction', value: '94%' }
      ],
      specs: {
        'Payment Gateways': 'Stripe, PayPal, Plaid, Bank Wire',
        'Compliance': 'PCI-DSS Level 1 Compliant',
        'Supported Currencies': '135+ Fiat & Crypto',
        'Export Formats': 'PDF, CSV, Quickbooks XML, JSON API'
      }
    },
    {
      id: 'hyperengine',
      title: 'HyperEngine C++',
      category: 'Low-Latency Decision Engine',
      icon: Cpu,
      color: 'from-blue-500 via-cyan-400 to-indigo-500',
      badge: 'HIGH-PERFORMANCE C++20',
      tagline: 'Sub-millisecond Minimax & Alpha-Beta Game Tree Decision Optimization',
      overview: 'HyperEngine is a C++20 optimized algorithmic evaluation engine built for ultra-fast decision-tree processing. Perfect for high-frequency algorithmic decision making, state tree search, and memory-constrained compute environments.',
      features: [
        'C++20 Native Engine with zero dynamic heap allocations during evaluation',
        'Parallelized Alpha-Beta Pruning with Transposition Table Caching',
        'Custom Bitboard State Representation for instant move generation',
        'Sub-millisecond latency evaluation (< 0.2ms per move decision)',
        'State Recovery Logs & Deterministic Replay Buffers',
        'C API & WebAssembly bindings for Web/Mobile execution'
      ],
      metrics: [
        { label: 'Tree Depth Search Speed', value: '300,000 nps' },
        { label: 'Memory Footprint', value: '< 15 MB' },
        { label: 'Evaluation Latency', value: '0.2 ms' }
      ],
      specs: {
        'Language Standard': 'C++20 (GCC, Clang, MSVC)',
        'Architecture': 'x86_64, ARM64, WASM',
        'SIMD Acceleration': 'AVX2 / NEON Optimized',
        'License': 'Custom Enterprise Commercial License'
      }
    },
    {
      id: 'iot-mesh',
      title: 'IoT Mesh Command',
      category: 'Embedded Hardware & Telemetry',
      icon: Activity,
      color: 'from-cyan-400 via-blue-500 to-purple-600',
      badge: 'INDUSTRIAL IOT HUB',
      tagline: 'Distributed ESP32/STM32 Sensor Mesh Controller & Live Telemetry Panel',
      overview: 'IoT Mesh Command provides centralized device management for enterprise sensor networks. Connect thousands of microcontrollers over MQTT, monitor live battery and signal health, stream low-latency metrics, and execute encrypted OTA firmware upgrades.',
      features: [
        'High-Scale MQTT / WebSockets Sensor Data Stream Ingestion',
        'Automated Over-The-Air (OTA) Firmware Upgrades in Batches',
        'Real-Time Anomaly Detection & Immediate Alert Dispatch',
        'Low-Power Sleep Cycle Optimization for Remote Solar Nodes',
        'Hardware Security Key Validation & Tamper Alerts',
        'InfluxDB Time-Series Archiving & Grafana Visualizations'
      ],
      metrics: [
        { label: 'Connected Sensor Nodes', value: '12,500+' },
        { label: 'Mesh Network Uptime', value: '99.99%' },
        { label: 'Event Throughput', value: '50k pkts/sec' }
      ],
      specs: {
        'Microcontrollers': 'ESP32, STM32, NRF52, Raspberry Pi',
        'Protocols': 'MQTT, CoAP, WebSockets, TLS 1.3',
        'Database': 'InfluxDB + ScyllaDB',
        'Telemetry Lag': 'Sub-10ms Mesh Propagation'
      }
    }
  ];

  const currentProduct = products.find(p => p.id === activeTab);

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERED PRODUCTS & PLATFORMS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Ironix Proprietary Software & Hardware
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Discover our market-tested software suites, low-latency C++ engines, and industrial IoT mesh platforms designed for high scalability.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Product Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 border-2 border-cyan-400 text-white shadow-xl shadow-cyan-500/10'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    {p.badge.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-slate-400">{p.category}</p>
              </button>
            );
          })}
        </div>

        {/* Product Details Display */}
        {currentProduct && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-md border border-cyan-500/30">
                    {currentProduct.badge}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
                    {currentProduct.title}
                  </h2>
                  <p className="text-slate-300 font-mono text-sm sm:text-base mt-2">
                    {currentProduct.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {currentProduct.overview}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 px-6 rounded-2xl bg-[#0b0f19] border border-slate-800 font-mono text-center">
                  {currentProduct.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-2xl font-extrabold text-cyan-300">{m.value}</div>
                      <div className="text-[11px] text-slate-400 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Key Functional Capabilities:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProduct.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={onOpenContact}
                    className="px-6 py-3 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20 cursor-pointer flex items-center gap-2"
                  >
                    <span>Request Product License & Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    to="/setup"
                    className="px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 glass-panel hover:bg-slate-800 transition-colors flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>View Setup Documentation</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar Technical Specs */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="font-bold text-slate-200 uppercase">SYSTEM SPECIFICATIONS</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </div>

                  {Object.entries(currentProduct.specs).map(([key, val], idx) => (
                    <div key={idx} className="space-y-1 pb-2 border-b border-slate-800/60">
                      <div className="text-slate-500 text-[11px]">{key}</div>
                      <div className="text-cyan-300 font-bold">{val}</div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-snug">
                      💡 Includes full white-label deployment support, custom API endpoints, and SLA backup protection.
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-cyan-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Enterprise SLA Guarantee</span>
                  </div>
                  <p>All Ironix products come with optional 24/7 technical support, quarterly security audits, and dedicated customer success managers.</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </section>
    </div>
  );
}
