'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Zap, Rocket, Building2 } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Standard Precision",
      price: "$299",
      desc: "Ideal for growing independent agencies seeking operational velocity.",
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
      features: ["Up to 10 Agents", "Smart Lead Scoring", "Email Automation", "Basic Analytics"],
      cta: "Initiate Plan"
    },
    {
      name: "High Velocity",
      price: "$899",
      desc: "The professional standard for high-performance real estate teams.",
      icon: <Rocket className="w-8 h-8 text-emerald-500" />,
      features: ["Unlimited Agents", "AI Lead Predictions", "Custom Integrations", "Advanced Forecasting", "Priority Support"],
      cta: "Elite Protocol",
      popular: true
    },
    {
      name: "Enterprise Architecture",
      price: "Custom",
      desc: "Tailored high-fidelity solutions for cross-regional enterprises.",
      icon: <Building2 className="w-8 h-8 text-emerald-500" />,
      features: ["Full White Labeling", "Multi-Org Sync", "Custom Engineering", "24/7 Dedicated Architect", "On-Prem Options"],
      cta: "Speak to Architect"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5 text-center">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-500/80 hover:text-emerald-400 mb-12 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex flex-col items-center gap-6 mb-8">
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight leading-none italic uppercase">Pricing <span className="text-emerald-500">Architecture.</span></h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed">
              Invest in high-fidelity operational logic. No hidden costs, just raw precision.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`glass-dark p-12 rounded-[40px] border flex flex-col items-center text-center transition-all duration-500 group ${plan.popular ? 'border-emerald-500/50 shadow-2xl scale-105 z-10' : 'border-white/5 hover:border-emerald-500/20'}`}>
              {plan.popular && (
                <div className="bg-emerald-500 text-slate-950 text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest mb-10 shadow-xl">Most Effective</div>
              )}
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-all duration-500">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-8 font-medium leading-relaxed">{plan.desc}</p>
              <div className="mb-10 flex items-baseline gap-2">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">/Month</span>}
              </div>
              <ul className="w-full space-y-4 mb-12 text-left bg-white/5 p-8 rounded-3xl border border-white/5">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 text-slate-400 font-medium text-sm group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 ${plan.popular ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/30' : 'bg-white/5 text-white hover:bg-white/10 hover:border-emerald-500/50 border border-white/10'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ/CTA */}
      <section className="py-24 px-6 text-center">
         <h2 className="text-3xl font-bold text-white mb-8 italic uppercase tracking-tight">Need a Custom Logic Audit?</h2>
         <p className="text-slate-400 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
            Our architects can draft a custom operational blueprint for your firm.
         </p>
         <Link href="/contact" className="inline-flex py-5 px-12 rounded-2xl font-bold text-white border-2 border-emerald-500/50 hover:bg-emerald-500/10 transition-all">
            Initiate Consultation
         </Link>
      </section>
    </div>
  );
}
