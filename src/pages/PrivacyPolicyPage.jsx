import React from 'react';
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL & GOVERNANCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm font-mono">
            Official Data Protection Policy for Ironix (ironix.dev) • Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-300 text-sm leading-relaxed">

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-400" />
            <span>1. Commitment to Data Privacy</span>
          </h2>
          <p>
            At Ironix ("Ironix", "ironix.dev", "we", "us", or "our"), safeguarding client confidential information, telemetry data, and user personal data is paramount. This Privacy Policy details how we collect, process, store, and protect data acquired through our website (<code className="text-cyan-300 font-mono">ironix.dev</code>), OmniCore CRM platform, InvoiceNow billing services, C++ software modules, and IoT telemetry networks.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">2. Information We Collect</h2>
          <div className="space-y-3">
            <p><strong className="text-white">A. Directly Provided Contact Data:</strong> Name, work email address, company name, phone number, project requirements, and budget specifications submitted via project inquiry forms or contact modals.</p>
            <p><strong className="text-white">B. System & IoT Telemetry Data:</strong> Microcontroller hardware MAC addresses, MQTT packet headers, sensor frequency metrics, firmware OTA compilation logs, and device IP addresses connected to Ironix IoT Command gateways.</p>
            <p><strong className="text-white">C. OmniCore & InvoiceNow Financial Data:</strong> Transaction metadata, payment link event triggers, invoice state logs, and encrypted payment gateway tokens (processed under PCI-DSS Level 1 compliance via Stripe/PayPal).</p>
            <p><strong className="text-white">D. Technical Web Analytics:</strong> Anonymized browser agent strings, page referrer logs, performance timing data, and Cloudflare CDN routing headers.</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">3. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To engineer, deliver, and maintain custom software applications, C++ engines, and IoT firmware builds.</li>
            <li>To process financial transactions, recurring billing schedules, and automated invoicing in InvoiceNow.</li>
            <li>To route high-priority customer support tickets and enforce our sub-15 minute SLA incident response commitments.</li>
            <li>To train custom AI agents and LLM automation pipelines strictly isolated to your private tenant (zero cross-client data leakage).</li>
            <li>To comply with statutory legal requirements, cybersecurity audits, and SOC2 compliance standards.</li>
          </ul>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">4. Data Isolation & AI Training Disclaimer</h2>
          <p>
            <strong className="text-cyan-300">No Model Training on Client Code or Telemetry:</strong> Code written for clients, proprietary C++ algorithms, private databases, and IoT telemetry streams processed by Ironix are <strong className="text-white">never</strong> used to train public LLM models or third-party AI frameworks. All AI models operate within isolated client tenant containers.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">5. Your GDPR & CCPA Rights</h2>
          <p>
            Under GDPR (EU) and CCPA (California), you possess full rights to request access to your data, demand correction of inaccuracies, request permanent deletion ("Right to be Forgotten"), and export your data in machine-readable JSON format.
          </p>
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs font-mono text-cyan-300">
            For Data Protection Officer (DPO) inquiries, submit a request directly to: <span className="text-white font-bold">privacy@ironix.dev</span>
          </div>
        </div>

      </section>
    </div>
  );
}
