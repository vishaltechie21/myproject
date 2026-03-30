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
  Globe
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Marketing & Engagement',
      href: '/solutions/marketing',
      desc: 'High-fidelity campaign logic and lead acceleration tools for modern agencies.',
      icon: <Target className="w-8 h-8 text-emerald-500" />,
      tag: 'Scale'
    },
    {
      title: 'Service & Help Desk',
      href: '/solutions/service',
      desc: 'Precision-engineered support workflows and sub-second ticket routing.',
      icon: <Settings className="w-8 h-8 text-emerald-500" />,
      tag: 'Optimize'
    },
    {
      title: 'Operations & HR',
      href: '/solutions/operations',
      desc: 'Intelligent workforce management and high-velocity operational protocols.',
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      tag: 'Execute'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-950 tracking-tight leading-none italic uppercase">Product <span className="text-emerald-600">Solutions.</span></h1>
          </div>
          <p className="text-slate-600 text-sm md:text-lg font-medium italic">
            Architectural frameworks for high-velocity real estate growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <Link key={idx} href={item.href} className="group">
                <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 h-[450px] flex flex-col justify-between hover:border-emerald-200 hover:bg-white transition-all duration-500 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                   <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                      {item.tag}
                   </div>
                   <div>
                      <div className="w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-emerald-100">
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8 text-emerald-600' } as any)}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-950 mb-6 uppercase tracking-tighter leading-none">{item.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed font-medium italic group-hover:text-slate-900 transition-colors">
                        {item.desc}
                      </p>
                   </div>
                   <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                      Explore Solution <ArrowRight className="w-4 h-4" />
                   </div>
                   {/* Background visual */}
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Platform CTA */}
      <section className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-10 text-emerald-600">
               <Globe className="w-10 h-10 animate-pulse" />
               <Zap className="w-8 h-8 rotate-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-8 tracking-tight italic">Universal Operational Velocity.</h2>
            <p className="text-slate-600 text-lg mb-12 font-medium italic">
               Whether you need a full-scale CRM or a targeted marketing suite, Vishray Technologies provides the high-fidelity ecosystem to dominate your market.
            </p>
            <Link href="/contact" className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-500/20">
               Request Architectural Audit
            </Link>
         </div>
      </section>
    </div>
  );
}
