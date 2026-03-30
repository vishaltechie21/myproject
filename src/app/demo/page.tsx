'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Layout, Users, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Demo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5 text-center">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-500/80 hover:text-emerald-400 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex flex-col items-center gap-6 mb-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight leading-none italic uppercase text-center">Visual <span className="text-emerald-500">Showcase.</span></h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed text-center">
              Experience the high-fidelity logic of Vishray Technologies in action. Sub-second speed and raw precision.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video/Mockup Section */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="relative group">
           <div className="glass-dark aspect-video rounded-[4rem] border border-white/10 shadow-3xl overflow-hidden relative shadow-emerald-500/5">
              <Image src="/assets/emerald-hero.png" alt="Demo Video Placeholder" fill className="object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/10 transition-colors duration-500">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-90 cursor-pointer group/btn">
                    <Play className="w-10 h-10 lg:w-14 lg:h-14 ml-1 group-hover/btn:scale-110 transition-transform" />
                 </div>
              </div>
           </div>
           <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-[120px] -z-0" />
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 lg:py-40 border-y border-white/5 bg-slate-900 shadow-2xl">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { icon: <Layout className="w-6 h-6 text-emerald-500" />, title: "Precision UI", desc: "A dashboard designed for professional clarity." },
                 { icon: <Database className="w-6 h-6 text-emerald-500" />, title: "Live Sync", desc: "Sub-second data updates across all agents." },
                 { icon: <Users className="w-6 h-6 text-emerald-500" />, title: "Lead AI", desc: "Intelligent scoring and auto-routing logic." },
                 { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, title: "Bank Grade", desc: "Industry-leading security as standard." }
               ].map((h, i) => (
                 <div key={i} className="space-y-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500">
                     {h.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{h.title}</h3>
                   <p className="text-slate-400 font-medium leading-relaxed italic">{h.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 px-6 text-center">
         <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 italic uppercase tracking-tight leading-none">Ready for a Full <span className="text-emerald-500">Mission Audit?</span></h2>
         <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Our architects are ready to draft a custom operational blueprint for your firm. Join the high-fidelity ecosystem.
         </p>
         <Link href="/contact" className="inline-flex bg-emerald-500 text-slate-950 py-5 px-12 rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/30 group">
            Speak to an Architect <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
         </Link>
      </section>
    </div>
  );
}
