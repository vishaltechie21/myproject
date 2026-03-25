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
      icon: <Zap className="w-8 h-8 text-yellow-600" />
    },
    {
      title: 'Advanced Data Analytics',
      desc: 'Real-time dashboards that give you actionable insights into customer behavior and sales performance.',
      icon: <BarChart3 className="w-8 h-8 text-yellow-600" />
    },
    {
      title: 'Multi-Channel Integration',
      desc: 'Seamlessly connect your CRM with email, WhatsApp, and social media platforms for unified communication.',
      icon: <Layers className="w-8 h-8 text-yellow-600" />
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Built-in encryption and role-based access control to keep your sensitive client data protected at all times.',
      icon: <ShieldCheck className="w-8 h-8 text-yellow-600" />
    }
  ];

  const steps = [
    { number: '01', title: 'Consultation', content: 'We sit down with your sales team to understand every bottleneck in your current process.' },
    { number: '02', title: 'Architecture', content: 'Our architects design a scalable database schema tailored to your specific data needs.' },
    { number: '03', title: 'Development', content: 'Using modern tech stacks, we build a responsive, fast, and intuitive CRM platform.' },
    { number: '04', title: 'Support', content: 'Post-launch, we provide 24/7 technical assistance and regular feature updates.' }
  ];

  return (
    <div ref={containerRef} className="bg-white pb-32">
      <div className="h-20" />
      
      {/* Hero Header */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 hero-content text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-500 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                     <Database className="w-4 h-4" /> Professional CRM Solutions
                  </div>
                  <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
                     Revolutionize Your <br/> <span className="text-yellow-400">Sales Ecosystem</span>
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                     We don&apos;t just build platforms; we engineer growth-driving assets. Our custom CRM solutions are designed to automate operations and maximize client retention.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <Link href="/contact" className="px-10 py-5 bg-yellow-400 text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95">
                        Start Your Project
                     </Link>
                     <button className="px-10 py-5 bg-slate-800 text-white rounded-full font-black uppercase tracking-widest hover:bg-slate-700 transition-all border border-slate-700">
                        View Demo
                     </button>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-lg lg:max-w-none relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl">
                  <Image src="/assets/blog-crm.png" alt="CRM Dashboard" fill className="object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* How we offer this */}
      <section className="py-32 max-w-7xl mx-auto px-6">
         <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
               <h2 className="text-xs font-black uppercase tracking-[0.3em] text-yellow-600">The Implementation Process</h2>
               <h3 className="text-4xl md:text-5xl font-black text-slate-900">How We Deliver <span className="italic">Excellence</span></h3>
            </div>
            <p className="text-slate-500 max-w-md font-medium text-lg leading-relaxed">
               Our 4-step deployment methodology ensures that your CRM is not just a tool, but a natural extension of your team.
            </p>
         </div>

         <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all">
                 <div className="text-6xl font-black text-slate-200 mb-6 group-hover:text-yellow-400 transition-colors">
                    {step.number}
                 </div>
                 <h4 className="text-xl font-black text-slate-900 mb-4">{step.title}</h4>
                 <p className="text-slate-500 font-medium leading-relaxed italic">{step.content}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32 bg-yellow-50 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h2 className="text-4xl font-black text-slate-900">Why choose our <span className="text-yellow-600 underline decoration-4 underline-offset-8">Custom CRM</span> development?</h2>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">
                        Say goodbye to monthly subscriptions and hello to total ownership of your data and tools.
                     </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8 features-grid">
                     {features.map((f, i) => (
                       <div key={i} className="feature-card p-6 bg-white rounded-3xl shadow-lg border border-yellow-100 space-y-4">
                          <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center">
                             {f.icon}
                          </div>
                          <h5 className="font-black text-slate-900">{f.title}</h5>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" />
                  <div className="bg-slate-900 p-8 rounded-[4rem] border-8 border-white shadow-2xl relative overflow-hidden">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 text-white">
                           <Lock className="w-6 h-6 text-yellow-400" />
                           <h4 className="text-xl font-bold uppercase tracking-widest">Ownership & Scale</h4>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed italic">
                           Most companies get stuck in a &quot;Subscription Trap.&quot; We build assets you own forever. No per-user fees, no limits on growth, just pure scalability.
                        </p>
                        <div className="pt-8 space-y-4">
                           {[1, 2, 3].map(i => (
                             <div key={i} className="flex items-center gap-4 text-sm text-yellow-400 font-black tracking-widest border-b border-slate-800 pb-3">
                                <CheckCircle2 className="w-4 h-4" /> LIFETIME ARCHITECTURE
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto bg-slate-900 p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-yellow-500/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 space-y-8">
               <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to Master Your <br/> Sales Operations?</h2>
               <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto italic">
                  Join 50+ businesses that have abandoned generic tools for Vishray&apos;s custom powerhouses.
               </p>
               <div className="pt-8">
                  <Link href="/contact" className="px-16 py-6 bg-yellow-400 text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-4 inline-flex group active:scale-95">
                     Book a Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
