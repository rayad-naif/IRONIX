import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL & GOVERNANCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-sm font-mono">
            Master Master Service Agreement (MSA) • Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-300 text-sm leading-relaxed">

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website, software applications, API endpoints, C++ software modules, IoT telemetry hubs, OmniCore CRM platform, or InvoiceNow billing services provided by Ironix ("ironix.dev"), you agree to be bound by these Terms of Service ("Terms") and our Master Services Agreement (MSA).
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">2. Intellectual Property & Code Ownership</h2>
          <p>
            <strong className="text-cyan-300">Client Code Rights:</strong> Upon receipt of full milestone payment for bespoke software development, C++ custom engines, or IoT firmware, Ironix transfers <strong className="text-white">100% full unencumbered ownership of all client-specific source code, documentation, and compiled binaries</strong> to the Client.
          </p>
          <p>
            <strong className="text-cyan-300">Background IP & Products:</strong> Pre-existing frameworks (such as OmniCore CRM base platform, InvoiceNow billing core, and HyperEngine C++ core primitives) remain the intellectual property of Ironix, licensed to the Client under commercial non-exclusive worldwide perpetual usage licenses.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">3. Acceptable Use Policy (AUP)</h2>
          <p>You agree not to utilize Ironix software, IoT gateways, or cloud APIs for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Conducting denial-of-service (DoS/DDoS) attacks or unauthorized network vulnerability probes.</li>
            <li>Distributing malicious firmware binaries or unauthorized IoT botnet node software.</li>
            <li>Engaging in fraudulent billing, unauthorized credit card charges, or spam messaging via OmniCore APIs.</li>
          </ul>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Ironix shall not be liable for indirect, incidental, special, or consequential damages resulting from hardware sensor failure, third-party internet gateway outages, or un-backed client database loss. Our total liability under any claim shall not exceed the fees paid by Client to Ironix in the twelve (12) months preceding the incident.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">5. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction specified in your signed Statement of Work (SOW), without regard to conflict of law principles.
          </p>
        </div>

      </section>
    </div>
  );
}
