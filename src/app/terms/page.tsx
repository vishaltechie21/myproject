'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsConditions() {
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-950 tracking-tight leading-none italic uppercase">Terms of <span className="text-emerald-600">Service.</span></h1>
          </div>
          <p className="text-slate-600 text-sm md:text-lg font-medium italic">
            Last Updated: March 29, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-50 p-8 md:p-20 rounded-[3rem] border border-slate-100 shadow-xl space-y-20">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 01. Protocol Acceptance
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                By accessing and using vishray.io and our services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these protocols, please refrain from interacting with our ecosystem.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 02. Service Architecture
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Vishray Technologies provides high-fidelity custom CRM, mobile, and web development architectures. All project timelines, costs, and deliverables are specified in separate operational agreements signed by both parties.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 03. Intellectual Logic
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                All content on this website, including but not limited to designs, logos, text, and graphics, is the property of Vishray Technologies or our licensors and is protected by copyright and intellectual property laws of our jurisdiction.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 04. Interaction Rules
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
                <p>Users agree NOT to:</p>
                <ul className="list-none space-y-3 pl-4 border-l border-emerald-500/20 py-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" /> Interact with the system for any illegal or unauthorized purpose.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" /> Attempt to bridge unauthorized access to our secure systems.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" /> Submit misleading or fraudulent mission data.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 05. Liability Threshold
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Vishray Technologies shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of our architectural services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 06. Jurisdictional Law
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes will be settled within the designated security jurisdiction.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-200">
              <p className="text-slate-600 text-lg">
                For complete terms and conditions of engagement, contact <span className="text-emerald-600 font-bold border-b border-emerald-500/30">precision@vishray.io</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
