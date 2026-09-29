import React from 'react';
import { Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CareersPage({ onOpenContact }) {
  const roles = [
    {
      title: 'Senior Low-Latency C++ Systems Architect',
      type: 'Full-Time / Remote',
      category: 'Systems Engineering',
      desc: 'Architect memory-efficient decision algorithms, custom arena allocators, and sub-millisecond execution engines in C++20.',
      reqs: ['7+ Years C++17/20', 'SIMD / AVX2 Optimization', 'Multithreading & Lock-free Data Structures', 'Linux Perf / Valgrind Mastery']
    },
    {
      title: 'Embedded IoT Firmware Lead (ESP32 / FreeRTOS)',
      type: 'Full-Time / Remote',
      category: 'Hardware & Firmware',
      desc: 'Design low-power MQTT mesh sensor firmware, hardware OTA update systems, and encrypted peripheral protocols.',
      reqs: ['5+ Years C/C++', 'ESP-IDF & FreeRTOS', 'MQTT / WebSockets / BLE Mesh', 'PCB Schematics & Oscilloscope Debugging']
    },
    {
      title: 'Full-Stack React 19 & Node.js Cloud Engineer',
      type: 'Full-Time / Remote',
      category: 'Product Engineering',
      desc: 'Build high-performance web applications, OmniCore CRM dashboards, and real-time WebSocket telemetry interfaces.',
      reqs: ['TypeScript & React 19', 'Node.js & Go Microservices', 'Tailwind CSS v4', 'PostgreSQL & Redis Scaling']
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>CAREERS AT IRONIX</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Build the Future of Systems Engineering
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Join a remote-first team of hard-core systems programmers, IoT firmware developers, and AI architects building high-scale technology.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Open Engineering Positions</h2>

          <div className="space-y-6">
            {roles.map((r, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase font-bold">{r.category}</span>
                    <h3 className="text-2xl font-bold text-white">{r.title}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 h-fit w-fit">
                    {r.type}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{r.desc}</p>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">Key Qualifications:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {r.reqs.map((req, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
