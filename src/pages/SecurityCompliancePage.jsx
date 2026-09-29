import React from 'react';
import { ShieldCheck, Lock, Key, Award, AlertTriangle } from 'lucide-react';

export default function SecurityCompliancePage() {
  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENTERPRISE SECURITY & COMPLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Security Architecture & SOC2 Posture
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Bank-grade encryption, zero-trust hardware access controls, SOC2 compliance frameworks, and vulnerability disclosure programs.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 w-fit">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Encryption Standards</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              All data in transit is enforced via TLS 1.3 encryption. All database stores and IoT telemetry logs are encrypted at rest with AES-256 keys.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="p-3 rounded-xl bg-indigo-950 border border-indigo-500/30 text-indigo-400 w-fit">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Hardware Key Verification</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              ESP32 and STM32 IoT devices connect to Ironix mesh nodes strictly via pre-flashed hardware cryptographic keys and mutual TLS (mTLS) verification.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 w-fit">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">SOC2 & PCI-DSS Compliance</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              OmniCore and InvoiceNow architectures adhere to SOC2 Type II trust principles and PCI-DSS Level 1 compliance guidelines.
            </p>
          </div>
        </div>

        {/* Vulnerability Disclosure Program */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-bold text-white">Vulnerability Disclosure Program (VDP) & Bug Bounty</h2>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ironix values responsible security research. If you discover a security vulnerability in our web applications, APIs, or C++ firmware modules, please submit a detailed report to <span className="text-cyan-300 font-mono font-bold">security@ironix.dev</span> before public disclosure. PGP key available upon request.
          </p>
        </div>
      </section>
    </div>
  );
}
