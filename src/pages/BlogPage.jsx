import React from 'react';
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from '../router/useRouter';

export default function BlogPage() {
  const posts = [
    {
      title: 'Optimizing C++20 Memory Pools for Sub-Millisecond Decision Trees',
      date: 'February 2025',
      author: 'Lead C++ Systems Architect',
      category: 'C++ & Low Latency',
      excerpt: 'How we eliminated dynamic heap allocations (`new`/`malloc`) in HyperEngine using fixed-capacity contiguous bitboards and custom arena allocators.',
      readTime: '6 min read'
    },
    {
      title: 'Designing Resilient ESP32 Firmware Mesh Networks over Encrypted MQTT',
      date: 'January 2025',
      author: 'Embedded IoT Engineering Lead',
      category: 'IoT & Firmware',
      excerpt: 'A deep dive into local flash state persistence, zero-packet-loss mesh handoffs, and battery-saving sleep states for industrial telemetry nodes.',
      readTime: '8 min read'
    },
    {
      title: 'Autonomous LLM Agent Workflows with LangChain & Vector Embeddings',
      date: 'January 2025',
      author: 'AI Operations Director',
      category: 'AI & Automations',
      excerpt: 'Building self-correcting RAG pipelines that automate customer lead enrichment, CRM status sync, and automated billing triggers.',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>IRONIX TECHNICAL INSIGHTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Engineering Blog & Benchmarks
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Deep technical dives into C++ memory optimization, ESP32 microcontroller firmware, LLM agent pipelines, and high-concurrency CRM architectures.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-6 border border-slate-800 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/30 font-bold">{post.category}</span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">{post.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1"><User className="w-3 h-3 text-slate-400" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-slate-400" /> {post.date}</span>
                </div>

                <Link
                  to="/setup"
                  className="w-full py-2 rounded-xl text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center justify-between group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Technical Note & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
