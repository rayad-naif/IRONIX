import React, { useState } from 'react';
import { Terminal, Check, Copy, Zap } from 'lucide-react';

function CodeBlock({ code, id, language = 'bash', copiedCode, onCopy }) {
  return (
    <div className="relative rounded-xl bg-[#05080e] border border-slate-800 font-mono text-xs overflow-hidden my-3">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0b0f19] border-b border-slate-800/80 text-[11px] text-slate-400">
        <span>{language}</span>
        <button
          onClick={() => onCopy(code, id)}
          className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          {copiedCode === id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedCode === id ? 'Copied!' : 'Copy Code'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed">{code}</pre>
    </div>
  );
}

export default function DetailedSetupPage() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="pt-28 pb-20 bg-[#080c14] min-h-screen">
      <section className="relative py-12 bg-grid border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPER & ARCHITECT MANUAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Detailed Technical Setup & Build Guide
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Complete step-by-step documentation for compiling the React 19 frontend, building the C++20 HyperEngine, flashing ESP32 IoT microcontrollers, and orchestrating Docker containers.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Environment Prerequisites */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">1. System Prerequisites & Dependencies</h2>
              <p className="text-xs text-slate-400 font-mono">Recommended toolchain versions for building Ironix products</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
              <div className="text-cyan-400 font-bold">Node.js Engine</div>
              <div className="text-slate-200">v20.0.0+ LTS</div>
              <div className="text-[10px] text-slate-500">npm v10.0.0+</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
              <div className="text-indigo-400 font-bold">C++ Compiler</div>
              <div className="text-slate-200">GCC 11+ or Clang 13+</div>
              <div className="text-[10px] text-slate-500">C++20 ISO standard</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
              <div className="text-purple-400 font-bold">IoT Toolchain</div>
              <div className="text-slate-200">PlatformIO Core v6+</div>
              <div className="text-[10px] text-slate-500">esptool v4.5+ for flashing</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-1">
              <div className="text-emerald-400 font-bold">Container Runtime</div>
              <div className="text-slate-200">Docker v24+ & Compose v2</div>
              <div className="text-[10px] text-slate-500">Kubernetes optional</div>
            </div>
          </div>
        </div>

        {/* Step 1: Web App Setup */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold text-sm">
              02
            </div>
            <h2 className="text-xl font-bold text-white">Frontend Web Application Setup (React 19 + Vite + Tailwind v4)</h2>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Execute the following shell commands in your terminal to clone the repository, install dependencies, spin up the local development server, run linter checks, and compile production assets.
          </p>

          <CodeBlock
            id="frontend-setup"
            copiedCode={copiedCode}
            onCopy={copyToClipboard}
            code={`# Clone the repository
git clone https://github.com/IR-Atelier/ironix-website.git
cd ironix-website

# Install dependencies (React 19, Tailwind CSS v4, Lucide React)
npm install

# Start local Vite development server at http://localhost:5173
npm run dev

# Run static code linting via Oxlint
npm run lint

# Build production bundle for GitHub Pages deployment
npm run build`}
          />

          <div className="p-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-xs font-mono text-slate-400">
            📁 Production outputs will be generated in <span className="text-cyan-300">/dist</span>, containing optimized JS/CSS chunks and static HTML ready for GitHub Pages hosting.
          </div>
        </div>

        {/* Step 2: C++ HyperEngine Build */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 font-mono font-bold text-sm">
              03
            </div>
            <h2 className="text-xl font-bold text-white">Compiling Modern C++20 HyperEngine Engine</h2>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            The HyperEngine decision module can be compiled natively as a low-latency shared binary or into WebAssembly (WASM) for browser-side move calculations.
          </p>

          <CodeBlock
            id="cpp-compilation"
            language="cpp"
            copiedCode={copiedCode}
            onCopy={copyToClipboard}
            code={`// Native C++20 Compilation with AVX2 SIMD Optimization & O3
g++ -std=c++20 -O3 -mavx2 -flto -march=native \\
    src/cpp/hyperengine.cpp \\
    -o dist/hyperengine_core

// Execute C++ Benchmarks
./dist/hyperengine_core --benchmark --depth 12

// Optional WebAssembly (WASM) Build via Emscripten
emcc -O3 -std=c++20 src/cpp/hyperengine.cpp \\
    -s WASM=1 -s EXPORTED_FUNCTIONS="['_evaluate_state','_reset_board']" \\
    -o public/wasm/hyperengine.js`}
          />
        </div>

        {/* Step 3: ESP32 IoT Firmware Flashing */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-purple-400 font-mono font-bold text-sm">
              04
            </div>
            <h2 className="text-xl font-bold text-white">ESP32 Microcontroller Firmware Flashing & Telemetry</h2>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Upload the Ironix Mesh telemetry firmware to connected ESP32 / STM32 hardware via USB serial using PlatformIO Core or esptool.
          </p>

          <CodeBlock
            id="esp32-flashing"
            copiedCode={copiedCode}
            onCopy={copyToClipboard}
            code={`# Install PlatformIO CLI
pip install platformio

# Compile ESP32 firmware binary
pio run -e esp32dev

# Flash firmware over USB Serial (/dev/ttyUSB0 or COM3)
pio run -e esp32dev -t upload

# Monitor live MQTT telemetry logs from device
pio device monitor --baud 115200

# Direct esptool flash binary fallback command
esptool.py --chip esp32 --port /dev/ttyUSB0 --baud 921600 write_flash 0x10000 firmware.bin`}
          />
        </div>

        {/* Step 4: Docker & Infrastructure */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-mono font-bold text-sm">
              05
            </div>
            <h2 className="text-xl font-bold text-white">Docker Services & Cloud Orchestration</h2>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Run the full stack locally including OmniCore PostgreSQL, Redis cache, InvoiceNow Stripe webhook handler, and MQTT telemetry broker using Docker Compose.
          </p>

          <CodeBlock
            id="docker-setup"
            language="yaml"
            copiedCode={copiedCode}
            onCopy={copyToClipboard}
            code={`# Spin up all background microservices in detached mode
docker-compose up -d --build

# Verify container statuses and healthchecks
docker-compose ps

# View live application logs
docker-compose logs -f ironix-api`}
          />
        </div>

        {/* Environment Configuration */}
        <div className="glass-card rounded-3xl p-8 border border-slate-700 space-y-4">
          <h2 className="text-xl font-bold text-white">6. Environment Variables (`.env.example`) Reference</h2>
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div><span className="text-cyan-400">VITE_SITE_DOMAIN</span>=ironix.dev</div>
            <div><span className="text-cyan-400">VITE_API_ENDPOINT</span>=https://api.ironix.dev/v4</div>
            <div><span className="text-cyan-400">VITE_MQTT_BROKER</span>=wss://telemetry.ironix.dev:8084/mqtt</div>
            <div><span className="text-cyan-400">STRIPE_PUBLISHABLE_KEY</span>=pk_live_ironix_example_key</div>
            <div><span className="text-cyan-400">OMNICORE_SECRET_TOKEN</span>=sk_live_omnicore_secure_token</div>
          </div>
        </div>

      </section>
    </div>
  );
}
