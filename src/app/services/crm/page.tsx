'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Layers, 
  Users, 
  Zap,
  BarChart3,
  ShieldCheck,
  MessageSquare,
  Lock
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function CRMServicePage() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from('.feature-card', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: 'Custom Workflow Automation',
      desc: 'We map your existing sales processes and build automated workflows that eliminate manual data entry.',
      icon: <Zap className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'Advanced Data Analytics',
      desc: 'Real-time dashboards that give you actionable insights into customer behavior and sales performance.',
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'Multi-Channel Integration',
      desc: 'Seamlessly connect your CRM with email, WhatsApp, and social media platforms for unified communication.',
      icon: <Layers className="w-8 h-8 text-emerald-500" />
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Built-in encryption and role-based access control to keep your sensitive client data protected at all times.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />
    }
  ];

  const steps = [
    { number: '01', title: 'Consultation', content: 'We sit down with your sales team to understand every bottleneck in your current process.' },
    { number: '02', title: 'Architecture', content: 'Our architects design a scalable database schema tailored to your specific data needs.' },
    { number: '03', title: 'Development', content: 'Using modern tech stacks, we build a responsive, fast, and intuitive CRM platform.' },
    { number: '04', title: 'Support', content: 'Post-launch, we provide 24/7 technical assistance and regular feature updates.' }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen pb-32">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                     <Database className="w-4 h-4" /> Institutional Investment Logic
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-950 tracking-tight leading-[0.9] italic uppercase">
                     Master Your <span className="text-emerald-600">Asset Logic.</span>
                  </h1>
                  <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                     We don&apos;t just advise; we engineer high-yield architectural assets. Our investment protocols are designed to accelerate capital flow with high-fidelity precision.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
                     <Link href="/contact" className="px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-lg">
                        Initiate Protocol
                     </Link>
                     <button className="px-10 py-5 bg-slate-50 text-slate-950 rounded-2xl font-bold hover:bg-slate-100 transition-all border border-slate-200 text-lg">
                        View Demo
                     </button>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-lg lg:max-w-none bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-2xl relative overflow-hidden group">
                  <div className="aspect-video relative rounded-2xl overflow-hidden border border-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src="/assets/emerald-abstract-geometric.png" alt="CRM Logic" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="space-y-6">
               <h2 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">The Implementation Process</h2>
               <h3 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tight leading-none italic uppercase">Architectural <span className="text-emerald-600">Precision.</span></h3>
            </div>
            <p className="text-slate-600 max-w-md font-medium text-lg leading-relaxed">
               Our 4-step deployment methodology ensures that your CRM is an organic extension of your operational logic.
            </p>
         </div>
  
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all">
                 <div className="text-5xl font-bold text-slate-200 mb-8 group-hover:text-emerald-500/20 transition-colors">
                    {step.number}
                 </div>
                 <h4 className="text-xl font-bold text-slate-950 mb-4 uppercase tracking-tight">{step.title}</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">{step.content}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 lg:py-40 border-y border-slate-100 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="space-y-6">
                     <h2 className="text-3xl md:text-5xl font-bold text-slate-950 tracking-tight leading-tight italic uppercase">Why choose our <span className="text-emerald-600">Custom Logic?</span></h2>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">
                        Say goodbye to subscription decay and embrace total architectural ownership of your data ecosystem.
                     </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 features-grid">
                     {features.map((f, i) => (
                       <div key={i} className="feature-card p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all">
                          <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                             {React.cloneElement(f.icon as React.ReactElement, { className: 'w-8 h-8' } as any)}
                          </div>
                          <h5 className="font-bold text-slate-950 text-xl uppercase tracking-tight">{f.title}</h5>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-slate-950 p-12 rounded-[4rem] border border-slate-900 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10 space-y-8">
                     <div className="flex items-center gap-4 text-white">
                        <Lock className="w-6 h-6 text-emerald-500" />
                        <h4 className="text-xl font-bold uppercase tracking-widest">Ownership & Scale</h4>
                     </div>
                     <p className="text-slate-400 font-medium leading-relaxed text-lg">
                        Most enterprises are caught in a subscription loop. We architect assets you own. No seat fees, no latency, just pure operational velocity.
                     </p>
                     <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="flex items-center gap-4 text-sm text-emerald-500 font-bold tracking-widest border-b border-white/5 pb-4">
                             <CheckCircle2 className="w-4 h-4" /> LIFETIME ARCHITECTURE
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700" />
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-40 px-6">
         <div className="max-w-6xl mx-auto bg-slate-950 p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl border border-slate-900">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
            <div className="relative z-10 space-y-10">
               <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[0.9] italic uppercase">Master Your <br/> Sales Operations.</h2>
               <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto">
                  Join the elite echelon of firms that have traded generic modules for Vishray&apos;s architectural powerhouses.
               </p>
               <div className="pt-8 flex justify-center">
                  <Link href="/contact" className="px-12 py-6 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-4 group text-xl uppercase tracking-widest active:scale-95">
                     Book Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
