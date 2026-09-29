import React from 'react';
import { Shield } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL & GOVERNANCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Cookie & Local Storage Policy
          </h1>
          <p className="text-slate-300 text-sm font-mono">
            How ironix.dev uses cookies and browser local storage for optimal performance.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-300 text-sm leading-relaxed">
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">1. What Are Cookies & Local Storage?</h2>
          <p>
            Cookies and browser local storage are small data files saved to your web browser. Ironix uses minimal essential cookies and local storage items solely to store user UI preferences (such as selected code syntax theme or route hash state) and manage session tokens for authenticated developers.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">2. Table of Cookies & Storage Keys Used</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-cyan-400">
                  <th className="py-2">Key Name</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Purpose</th>
                  <th className="py-2">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-2 text-white font-bold">ironix_session</td>
                  <td className="py-2">Essential Cookie</td>
                  <td className="py-2">Encrypted user session token</td>
                  <td className="py-2">Session / 24 Hours</td>
                </tr>
                <tr>
                  <td className="py-2 text-white font-bold">ironix_route_state</td>
                  <td className="py-2">Local Storage</td>
                  <td className="py-2">Stores client router hash state</td>
                  <td className="py-2">Persistent</td>
                </tr>
                <tr>
                  <td className="py-2 text-white font-bold">__cf_bm</td>
                  <td className="py-2">Cloudflare CDN</td>
                  <td className="py-2">Bot protection & DDoS mitigation</td>
                  <td className="py-2">30 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white font-mono">3. No Third-Party Cross-Site Ad Trackers</h2>
          <p>
            <strong className="text-cyan-300">Zero Commercial Ad Tracking:</strong> Ironix does <strong className="text-white">not</strong> utilize third-party advertising cookies, Facebook Pixel trackers, or cross-site behavioral marketing cookies. Your browsing activity on ironix.dev is completely private.
          </p>
        </div>
      </section>
    </div>
  );
}
