'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Layout, Users, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Demo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100 text-center">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex flex-col items-center gap-6 mb-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-slate-950 tracking-tight leading-none italic uppercase text-center">Visual <span className="text-emerald-600">Showcase.</span></h1>
            <p className="text-slate-600 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed text-center">
              Experience the high-fidelity logic of Vishray Technologies in action. Sub-second speed and raw precision.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video/Mockup Section */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="relative group">
           <div className="bg-slate-100 aspect-video rounded-[3rem] lg:rounded-[4rem] border border-slate-200 shadow-3xl overflow-hidden relative shadow-emerald-500/5">
              <Image src="/assets/emerald-hero.png" alt="Demo Video Placeholder" fill className="object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors duration-500">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-90 cursor-pointer group/btn">
                    <Play className="w-10 h-10 lg:w-14 lg:h-14 ml-1 group-hover/btn:scale-110 transition-transform" />
                 </div>
              </div>
           </div>
           <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 lg:py-40 border-y border-slate-100 bg-slate-50 shadow-2xl relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
               {[
                 { icon: <Layout className="w-6 h-6" />, title: "Precision UI", desc: "A dashboard designed for professional clarity." },
                 { icon: <Database className="w-6 h-6" />, title: "Live Sync", desc: "Sub-second data updates across all agents." },
                 { icon: <Users className="w-6 h-6" />, title: "Lead AI", desc: "Intelligent scoring and auto-routing logic." },
                 { icon: <ShieldCheck className="w-6 h-6" />, title: "Bank Grade", desc: "Industry-leading security as standard." }
               ].map((h, i) => (
                 <div key={i} className="space-y-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto md:mx-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 text-emerald-600 shadow-sm group-hover:shadow-lg">
                     {React.cloneElement(h.icon as React.ReactElement, { className: 'w-7 h-7' } as any)}
                   </div>
                   <h3 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">{h.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed italic">{h.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 px-6 text-center bg-slate-950 rounded-[4rem] mx-6 mb-24 overflow-hidden relative group">
         <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 -z-0" />
         <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000" />
         <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 italic uppercase tracking-tight leading-none relative z-10">Ready for a Full <span className="text-emerald-500">Mission Audit?</span></h2>
         <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed relative z-10">
            Our architects are ready to draft a custom operational blueprint for your firm. Join the high-fidelity ecosystem.
         </p>
         <Link href="/contact" className="relative z-10 inline-flex bg-emerald-600 text-white py-5 px-12 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/30 group">
            Speak to an Architect <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
         </Link>
      </section>
    </div>
  );
}
