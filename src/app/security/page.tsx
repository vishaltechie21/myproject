'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, Key } from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-950 tracking-tight leading-none italic uppercase">System <span className="text-emerald-600">Security.</span></h1>
          </div>
          <p className="text-slate-600 text-sm md:text-lg font-medium italic">
            Ensuring high-fidelity architectural integrity.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 lg:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Encryption",
                desc: "All mission-critical data is protected with AES-256 bank-grade encryption at rest and TLS 1.3 in transit.",
                icon: <Lock className="w-6 h-6" />
              },
              {
                title: "Threat Monitoring",
                desc: "Our systems run 24/7 hyper-vigilant monitoring protocols to detect and eliminate any potential architectural threats.",
                icon: <Eye className="w-6 h-6" />
              },
              {
                title: "Access Logic",
                desc: "Granular role-based access controls (RBAC) ensure only authorized mission personnel can interact with secure data layers.",
                icon: <Key className="w-6 h-6" />
              },
              {
                title: "Compliance Protocols",
                desc: "Vishray Technologies adheres to global security standards including SOC2, GDPR, and HIPAA logic frameworks.",
                icon: <ShieldCheck className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-[30px] border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all group shadow-sm hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 border border-emerald-100">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' } as any)}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-slate-950 p-12 lg:p-20 rounded-[50px] border border-slate-900 text-center shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000" />
             <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">Report a Vulnerability</h2>
             <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
                Our bug bounty program and disclosure policy ensure a transparent and high-velocity security posture.
             </p>
             <Link href="/contact" className="inline-flex bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-500/20">
                Contact Security Council
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
