'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-500/80 hover:text-emerald-400 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none italic uppercase">Cookie <span className="text-emerald-500">Protocols.</span></h1>
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
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 01. What Are Cookies?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Cookies are small data fragments stored on your device that allow Vishray Technologies to recognize your architectural session and preferences. They are vital for the operational velocity of our platform.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 02. Usage Logic
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We use cookies to understand system interaction, optimize performance metrics, and maintain secure authentication across the Vishray ecosystem.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 03. Control & Opt-Out
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                You can manage your cookie preferences through your browser settings. Note that disabling essential cookies may impact the high-fidelity logic of certain platform features.
              </p>
            </section>

            <div className="pt-10 border-t border-white/5">
              <p className="text-slate-400 text-lg">
                For detailed technical data on our cookie implementation, contact <span className="text-emerald-500 font-bold border-b border-emerald-500/30">precision@vishray.io</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
