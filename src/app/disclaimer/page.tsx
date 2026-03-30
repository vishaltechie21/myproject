'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
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
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-950 tracking-tight leading-none italic uppercase">Operational <span className="text-emerald-600">Disclaimer.</span></h1>
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
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 01. External Vectors
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. These external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by Vishray Technologies.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 02. Data Accuracy
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The information provided on this Site is for general informational purposes only. While we attempt to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 03. Performance Metrics
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                As a software development company, our results and project success are heavily dependent on specific client requirements and collaboration. Case studies and success stories presented on the Site are illustrative and do not guarantee identical results for every project.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 04. System Errors
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Vishray Technologies assumes no responsibility for errors or omissions in the contents of the Service. We reserve the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-widest border-b border-slate-200 pb-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-600 rounded-full" /> 05. Technical Advice
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The Site cannot and does not contain legal/financial/medical/etc. advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
              </p>
            </section>

            <div className="pt-10 border-t border-slate-200">
              <p className="text-slate-600 text-lg">
                For legal inquiries regarding these protocols, contact our counsel at <span className="text-emerald-600 font-bold border-b border-emerald-500/30">precision@vishray.io</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
