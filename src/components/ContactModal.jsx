import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Building, Mail, User, Phone, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'software',
    budget: '$10k - $25k',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Project Proposal Requested!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you for reaching out to <span className="text-cyan-400 font-mono">Ironix</span>. One of our technical architects will review your requirements and get back to you within 4 business hours.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT WITH IRONIX</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Let’s Engineer Something Extraordinary</h3>
              <p className="text-slate-400 text-xs">Fill out the brief below and our team will prepare a custom proposal & architecture outline.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    required
                    type="text"
                    placeholder="Rayad Farooqi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    required
                    type="email"
                    placeholder="rayad@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Company / Organization</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Ironix Atelier"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Primary Area of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500"
                >
                  <option value="software">Custom Software & C++ Development</option>
                  <option value="iot">IoT Embedded Systems & Telemetry</option>
                  <option value="ai">Autonomous AI & LLM Workflows</option>
                  <option value="crm">OmniCore CRM & Growth Funnels</option>
                  <option value="invoicing">InvoiceNow & Fintech Automation</option>
                  <option value="support">Dedicated IT Support & Success</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500"
                >
                  <option value="<$10k">Under $10,000</option>
                  <option value="$10k - $25k">$10,000 – $25,000</option>
                  <option value="$25k - $50k">$25,000 – $50,000</option>
                  <option value="$50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Project Requirements & Scope</label>
              <textarea
                rows="3"
                placeholder="Briefly describe your goals, timeline, or key technical features..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
