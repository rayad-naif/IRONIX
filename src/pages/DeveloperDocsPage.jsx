import React, { useState } from 'react';
import { BookOpen, Terminal, Globe, Layers, Cpu } from 'lucide-react';

export default function DeveloperDocsPage() {
  const [activeTab, setActiveTab] = useState('api');

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DEVELOPER PORTAL & API DOCUMENTATION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Ironix API, SDKs & Webhook Reference
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Integrate OmniCore CRMs, InvoiceNow payment triggers, HyperEngine decision trees, and IoT telemetry directly into your stack.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'api', label: 'REST & GraphQL APIs', icon: Globe },
            { id: 'webhooks', label: 'Webhook Subscriptions', icon: Layers },
            { id: 'cpp-sdk', label: 'C++ HyperEngine SDK', icon: Cpu },
            { id: 'cli', label: 'Ironix CLI Tool', icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700 space-y-8">
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 text-xs font-mono border border-cyan-500/30">
                  POST /v4/omnicore/leads
                </span>
                <h2 className="text-2xl font-bold text-white">Create & Ingest Lead into OmniCore CRM</h2>
                <p className="text-xs text-slate-300">Ingest raw lead event data, trigger automated AI qualification, and send instant SMS/email sequences.</p>
              </div>

              <div className="rounded-2xl bg-[#05080e] border border-slate-800 p-4 font-mono text-xs overflow-x-auto">
                <div className="text-slate-500 mb-2">// Request Header & Bearer Auth</div>
                <div className="text-cyan-300">Authorization: Bearer sk_live_ironix_secret_token</div>
                <div className="text-cyan-300">Content-Type: application/json</div>
                <br />
                <div className="text-slate-500">// Example JSON Payload</div>
                <pre className="text-emerald-300">{`{
  "name": "Rayad Farooqi",
  "email": "rayad@company.com",
  "company": "Ironix Atelier",
  "source": "website_funnel",
  "triggerAiQualification": true,
  "automationTags": ["high_priority_lead", "software_inquiry"]
}`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'webhooks' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 text-xs font-mono border border-indigo-500/30">
                  EVENT: invoice.paid
                </span>
                <h2 className="text-2xl font-bold text-white">InvoiceNow Automated Webhook Handler</h2>
                <p className="text-xs text-slate-300">Listen for instant payment events across multi-currency gateways.</p>
              </div>

              <div className="rounded-2xl bg-[#05080e] border border-slate-800 p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-cyan-300">{`{
  "event": "invoicenow.payment_succeeded",
  "timestamp": 1708300000,
  "data": {
    "invoiceId": "INV-2025-9982",
    "amount": 12500.00,
    "currency": "USD",
    "customer": "client_enterprise_99",
    "status": "paid"
  }
}`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'cpp-sdk' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-400 text-xs font-mono border border-purple-500/30">
                  C++20 NATIVE SDK
                </span>
                <h2 className="text-2xl font-bold text-white">HyperEngine State Evaluation Integration</h2>
                <p className="text-xs text-slate-300">Header-only modern C++20 library for zero-allocation decision tree calculation.</p>
              </div>

              <div className="rounded-2xl bg-[#05080e] border border-slate-800 p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-purple-300">{`#include <ironix/hyperengine.hpp>

int main() {
    ironix::Engine engine({ .threads = 8, .max_depth = 12 });
    auto state = engine.load_fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    auto move = engine.get_best_move(state, std::chrono::milliseconds(5));

    std::cout << "Best move: " << move.to_string() << " (eval: " << move.score << ")\\n";
    return 0;
}`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'cli' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-mono border border-emerald-500/30">
                  npm install -g @ironix/cli
                </span>
                <h2 className="text-2xl font-bold text-white">Ironix Command Line Tools</h2>
                <p className="text-xs text-slate-300">Manage deployments, firmware flashing, and IoT mesh monitoring directly from your CLI.</p>
              </div>

              <div className="rounded-2xl bg-[#05080e] border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-emerald-300">
                <div>$ ironix login --domain ironix.dev</div>
                <div>$ ironix iot flash --port /dev/ttyUSB0 --device esp32-mesh</div>
                <div>$ ironix omnicore sync --funnel production_v4</div>
                <div>✔ Connected to Ironix Telemetry Gateway [SLA 99.99%]</div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
