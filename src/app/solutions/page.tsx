'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Target, 
  Settings, 
  Users, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Building2,
  HandCoins,
  BarChart3
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Real Estate CRM',
      href: '/solutions/operations',
      desc: 'High-fidelity project tracking, lead scoring, and automated inventory sync for builders.',
      icon: <Building2 className="w-8 h-8" />,
      tag: 'Developers'
    },
    {
      title: 'Loan / DSA CRM',
      href: '/solutions/service',
      desc: 'Sub-second lead routing, doc tracking, and payout automation for loan agencies.',
      icon: <HandCoins className="w-8 h-8" />,
      tag: 'Finance'
    },
    {
      title: 'Marketing Velocity',
      href: '/solutions/marketing',
      desc: 'Seamless Meta & Google Ads sync with intelligent automated lead capture.',
      icon: <BarChart3 className="w-8 h-8" />,
      tag: 'Acquisition'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-success/10 selection:text-success">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-success hover:text-success/80 mb-12 font-black transition-all hover:-translate-x-2 text-[10px] uppercase tracking-[0.3em] group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-success/5 rounded-2xl flex items-center justify-center text-success border border-success/10">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">Industry <span className="text-success">Focus.</span></h1>
          </div>
          <p className="text-slate-500 text-lg md:text-xl font-medium italic max-w-2xl leading-relaxed">
            Architecting specialized high-fidelity logic for the most demanding real estate and financial projects.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="group">
                <div className="bg-slate-50/50 p-12 rounded-[40px] border border-slate-100 h-[450px] flex flex-col justify-between hover:border-success/30 hover:bg-white transition-all duration-500 shadow-xl shadow-slate-200/20 relative overflow-hidden">
                   <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-success group-hover:bg-success/5 transition-colors">
                      {item.tag}
                   </div>
                   <div>
                      <div className="w-20 h-20 rounded-2xl bg-success/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-success/10 text-success">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-none italic">{item.title}</h3>
                      <p className="text-slate-500 text-lg leading-relaxed font-medium italic group-hover:text-slate-900 transition-colors">
                        {item.desc}
                      </p>
                   </div>
                   <div className="flex items-center gap-2 text-success font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                      Deploy Solution <ArrowRight className="w-4 h-4" />
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-success/5 rounded-full blur-3xl group-hover:bg-success/10 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Platform CTA */}
      <section className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-10 text-success">
               <Globe className="w-10 h-10 animate-pulse" />
               <Zap className="w-8 h-8 rotate-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tighter italic uppercase underline decoration-success/20 underline-offset-8">Universal Sector Velocity.</h2>
            <p className="text-slate-500 text-lg mb-12 font-medium italic leading-relaxed">
               Whether you need a full-scale Loan Hub or a targeted Real Estate project manager, Vishray Technologies provides the high-fidelity ecosystem to dominate your sector.
            </p>
            <Link href="/" className="bg-success text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-success/20 uppercase tracking-widest">
               Initiate System Audit
            </Link>
         </div>
      </section>
    </div>
  );
}
