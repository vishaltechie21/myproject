'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Zap, Rocket, Building2 } from 'lucide-react';
import DemoModal from '@/components/DemoModal';

export default function Pricing() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const plans = [
    {
      name: "Starter SaaS",
      price: "₹1,499",
      desc: "Perfect for independent agents and single project builders.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Up to 5 Users", "Basic Lead Management", "Auto Dialer Integration", "WhatsApp Sync"],
      cta: "Get Started"
    },
    {
      name: "Professional CRM",
      price: "₹4,999",
      desc: "The standard for high-performance Real Estate & Loan teams.",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Unlimited Users", "Advanced Lead Scoring", "Call Recording & Analytics", "Meta Ads Sync", "Inventory Tracking"],
      cta: "Elite Choice",
      popular: true
    },
    {
      name: "Enterprise Hub",
      price: "Custom",
      desc: "Custom-built clusters for large-scale financial enterprises.",
      icon: <Building2 className="w-8 h-8" />,
      features: ["Multi-Project Sync", "Custom Integrations", "Dedicated Relationship Manager", "Whitelabel Dashboard", "24/7 Strategic Support"],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-success/10 selection:text-success">
      {/* Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100 text-center">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-success/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-success hover:text-success/80 mb-12 font-black transition-all hover:-translate-x-2 text-[10px] uppercase tracking-[0.3em] group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO HOME
          </Link>
          <div className="flex flex-col items-center gap-6 mb-8">
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">SaaS <span className="text-success underline decoration-4 decoration-success/20 underline-offset-8">Pricing.</span></h1>
            <p className="text-slate-500 text-lg md:text-2xl max-w-2xl font-medium italic leading-relaxed">
              Transparent, scalable plans designed for Real Estate & Finance velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white p-12 rounded-[3.5rem] border flex flex-col items-center text-center transition-all duration-500 group relative ${plan.popular ? 'border-success shadow-2xl scale-105 z-10' : 'border-slate-100 hover:border-success/30 shadow-sm hover:shadow-xl'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-success text-white text-[10px] font-black px-8 py-2 rounded-full uppercase tracking-widest shadow-xl">Best ROI</div>
              )}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 border ${plan.popular ? 'bg-success text-white' : 'bg-success/5 text-success border-success/10'}`}>
                {plan.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase tracking-tighter italic">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-10 font-medium italic leading-relaxed">{plan.desc}</p>
              <div className="mb-12 flex items-baseline gap-2">
                <span className="text-6xl font-black text-slate-950 tracking-tighter">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">/Month</span>}
              </div>
              <ul className="w-full space-y-5 mb-14 text-left bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 text-slate-600 font-bold text-sm transition-colors group-hover:text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-success" /> {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setIsDemoOpen(true)}
                className={`w-full py-6 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 ${plan.popular ? 'bg-success text-white hover:bg-success shadow-success/30' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-slate-950 rounded-[4rem] mx-6 mb-24 overflow-hidden relative group">
         <div className="absolute top-0 left-0 w-full h-full bg-success/5 -z-0" />
         <div className="absolute top-0 right-0 w-96 h-96 bg-success/10 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-1000" />
         <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 italic uppercase tracking-tighter relative z-10">Scale Your Niche Today.</h2>
         <p className="text-slate-400 mb-12 max-w-xl mx-auto font-medium italic leading-relaxed relative z-10">
            Request a personalized architectural logic audit for your Real Estate project or Loan DSA.
         </p>
         <button 
           onClick={() => setIsDemoOpen(true)}
           className="relative z-10 inline-flex py-6 px-14 rounded-2xl font-black text-white border-2 border-success/50 hover:bg-success transition-all uppercase tracking-widest"
         >
            Talk to Expert
         </button>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
