'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-500/80 hover:text-emerald-400 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none italic uppercase">Privacy <span className="text-emerald-500">Policy.</span></h1>
          </div>
          <p className="text-slate-400 text-sm md:text-lg font-medium italic">
            Last Updated: March 29, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-dark p-8 md:p-20 rounded-[3rem] border border-white/5 shadow-2xl space-y-20">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 01. Information Logic
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed">
                <p>
                  Vishray Technologies collects operational data to ensure mission-critical performance. We collect information in the following architectural branches:
                </p>
                <ul className="list-none space-y-4 pl-4 border-l border-emerald-500/20 py-4">
                  <li><strong className="text-white">Core Identity:</strong> Name, secure email, and company logic metadata.</li>
                  <li><strong className="text-white">Operational Telemetry:</strong> High-velocity interaction data, IP routing, and system heuristics.</li>
                  <li><strong className="text-white">Neural Tokens:</strong> Small persistent data units to maintain state and optimize logic flow.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 02. Data Processing
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed">
                <p>
                  We utilize collected vectors to stabilize and accelerate our services. This includes:
                </p>
                <ul className="list-none space-y-4 pl-4 border-l border-emerald-500/20 py-4">
                  <li>Architecting solutions based on your specific inquiry parameters.</li>
                  <li>Broadcasting system updates and high-fidelity insights via opt-in protocols.</li>
                  <li>Analyzing throughput to optimize the operational backbone.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 03. Secure Architecture
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We work hard to protect Vishray Technologies and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use industry-standard encryption (SSL) and secure server environments with zero-latency protection.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 04. Data Sovereignty
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                You maintain total sovereignty over your data logic. To request extraction or deletion of your telemetry from our ecosystem, contact our security architect at <span className="text-emerald-500 font-bold border-b border-emerald-500/30">precision@vishray.io</span>.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 05. Protocol Updates
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our Privacy Protocol may periodically evolve. We will broadcast significant updates on this frequency to ensure complete operational transparency.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
