import React from 'react';
import { Server, Globe, CheckCircle2 } from 'lucide-react';
import { SYSTEM_METRICS } from '../data/siteData';

export default function StatusPage() {
  const regions = [
    { name: 'US-East (Virginia)', latency: '8ms', status: 'Operational', uptime: '100%' },
    { name: 'US-West (Oregon)', latency: '12ms', status: 'Operational', uptime: '99.99%' },
    { name: 'EU-Central (Frankfurt)', latency: '18ms', status: 'Operational', uptime: '100%' },
    { name: 'AP-East (Tokyo)', latency: '24ms', status: 'Operational', uptime: '99.98%' },
  ];

  const services = [
    { name: 'OmniCore CRM Gateway API', status: 'Operational', latency: '12ms' },
    { name: 'InvoiceNow Payment Webhooks', status: 'Operational', latency: '9ms' },
    { name: 'IoT MQTT Sensor Mesh Broker', status: 'Operational', latency: '4ms' },
    { name: 'HyperEngine C++ Decision Cluster', status: 'Operational', latency: '< 1ms' },
    { name: 'Cloudflare CDN & Edge Caching', status: 'Operational', latency: '2ms' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ALL SYSTEMS OPERATIONAL — 99.99% SLA ACTIVE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Ironix Live System Status
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Real-time telemetry, API latency benchmarks, and global infrastructure SLA monitoring for ironix.dev.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* System Overview Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-1">
            <div className="text-3xl font-extrabold text-cyan-400">{SYSTEM_METRICS.uptime}</div>
            <div className="text-xs text-slate-300">30-Day Average Uptime</div>
          </div>
          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-1">
            <div className="text-3xl font-extrabold text-emerald-400">{SYSTEM_METRICS.latency}</div>
            <div className="text-xs text-slate-300">Global Avg Latency</div>
          </div>
          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-1">
            <div className="text-3xl font-extrabold text-purple-400">12,450</div>
            <div className="text-xs text-slate-300">Connected IoT Mesh Nodes</div>
          </div>
          <div className="p-5 rounded-2xl glass-card border border-slate-800 text-center space-y-1">
            <div className="text-3xl font-extrabold text-indigo-400">142.8M</div>
            <div className="text-xs text-slate-300">Processed Daily Events</div>
          </div>
        </div>

        {/* Services Status Table */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-cyan-400" />
            <span>Service Operational Health</span>
          </h2>

          <div className="space-y-3 font-mono text-xs">
            {services.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200 font-bold">{s.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-slate-500">{s.latency}</span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Edge Regions */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" />
            <span>Global Edge Nodes & Regional Latency</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {regions.map((r, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
                <div className="flex justify-between font-bold text-slate-200">
                  <span>{r.name}</span>
                  <span className="text-emerald-400">{r.status}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Response Time: {r.latency}</span>
                  <span>Uptime: {r.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
