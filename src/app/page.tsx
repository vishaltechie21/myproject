'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Database, 
  Clock, 
  ShieldCheck, 
  BadgeDollarSign,
  Users,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const offerings = [
    "NEXT-GEN REAL ESTATE LOGIC",
    "HIGH-VELOCITY PIPELINE TOOLS",
    "INTELLIGENT WORKFLOW ENGINE",
    "DATA-DRIVEN DEAL FLOW"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIdx((prev) => (prev + 1) % offerings.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current, 
        { y: 10, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentTextIdx]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-title', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
      gsap.from('.hero-btns', { y: 20, opacity: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' });
      gsap.from('.hero-image-container', { scale: 0.95, opacity: 0, duration: 1.2, delay: 0.8, ease: 'power2.out' });
      
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.2, duration: 1, ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="hero-badge inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span ref={textRef} className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
              {offerings[currentTextIdx]}
            </span>
          </div>

          <h1 className="hero-title text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[0.9]">
            The Intelligent CRM for <span className="text-emerald-500">Real Estate Precision</span>
          </h1>

          <p className="hero-desc text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Eliminate the chaos of traditional property management. Vishray Technologies leverages high-velocity logic to streamline your pipeline and maximize deal flow.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 active:scale-95 flex items-center gap-2 group">
              Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/demo" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95">
              Book a Demo
            </Link>
          </div>

          <div className="hero-image-container relative max-w-6xl mx-auto">
             <div className="absolute inset-0 bg-emerald-500/20 rounded-[2rem] blur-[80px] -z-10 scale-90" />
             <div className="glass-dark rounded-[2rem] p-4 border border-white/10 shadow-2xl overflow-hidden aspect-[16/10]">
               <Image 
                 src="/assets/emerald-hero.png" 
                 alt="Emerald CRM Dashboard Mockup" 
                 fill
                 className="object-cover rounded-2xl"
                 priority
               />
             </div>
             {/* Efficiency Badge Mockup */}
             <div className="absolute top-1/4 -left-12 hidden lg:flex glass rounded-2xl p-4 border border-white/10 shadow-xl items-center space-x-4 animate-bounce-slow">
               <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                 <ArrowRight className="w-5 h-5 text-emerald-500 -rotate-45" />
               </div>
               <div className="text-left">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency</div>
                 <div className="text-xl font-bold text-white">+42%</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-12">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
             <span className="text-xl font-black text-white tracking-widest">VERIDIAN</span>
             <span className="text-xl font-black text-white tracking-widest">SKYLINE</span>
             <span className="text-xl font-black text-white tracking-widest">OAKRIDGE</span>
             <span className="text-xl font-black text-white tracking-widest">MERIDIAN</span>
             <span className="text-xl font-black text-white tracking-widest">AXIOM</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Engineered for Results</h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            The traditional CRM is a database. Emerald Precision is an engine. Every feature is tuned for operational velocity.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
           {/* Long Card */}
           <div className="feature-card lg:col-span-7 bg-white rounded-[2rem] p-10 flex flex-col justify-between group h-[400px] overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Smart Lead Management</h3>
                <p className="text-slate-600 max-w-md leading-relaxed">
                  Automatically categorize and prioritize inbound leads using our proprietary scoring algorithm. Never miss a high-value opportunity again.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between border border-slate-100">
                   <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
                     <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white" />
                     <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">JD</div>
                   </div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Assigned</span>
                </div>
              </div>
              {/* Abstract visual */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
           </div>

           {/* Vertical Card */}
           <div className="feature-card lg:col-span-5 bg-white rounded-[2rem] p-10 flex flex-col group h-[400px]">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Pipeline Intelligence</h3>
              <p className="text-slate-600 leading-relaxed mb-10">
                Real-time analytics and forecasting that show you exactly where your deals stand and where the bottlenecks are.
              </p>
              <div className="mt-auto space-y-4">
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-emerald-500 rounded-full animate-pulse-slow" />
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-emerald-400 rounded-full" />
                 </div>
              </div>
           </div>

           {/* Dark Card */}
           <div className="feature-card lg:col-span-4 bg-slate-900 rounded-[2rem] p-10 flex flex-col group h-[400px] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Secure Architecture</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Bank-grade encryption and ISO-compliant data handling for enterprise-level peace of mind.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                 {['AES-256', 'HIPAA', 'GDPR'].map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
           </div>

           {/* Integration Card */}
           <div className="feature-card lg:col-span-8 bg-white rounded-[2rem] p-10 flex flex-col lg:flex-row items-center gap-10 group h-[400px]">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Integrated Ecosystem</h3>
                <p className="text-slate-600 leading-relaxed">
                  Connect your entire tech stack—MLS, Gmail, Slack, and Zapier—directly into your Emerald workflow.
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                 <div className="grid grid-cols-3 gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm transition-transform group-hover:scale-110" />
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-sm transition-transform group-hover:scale-125">
                       <ArrowRight className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 lg:py-40 bg-slate-950 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="relative bg-emerald-500 rounded-[3rem] p-10 lg:p-24 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600" />
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
               <div className="relative z-10 text-center">
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-950 mb-8 leading-[0.9]">Transform Your <br /> Workflow Today</h2>
                  <p className="text-slate-900/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                    Join over 1,500 premium agencies already driving precision growth with Vishray Technologies.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact" className="w-full sm:w-auto bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl">
                      Start Your Free Trial
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto border-2 border-slate-950/20 text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-950/5 transition-colors">
                      Contact Sales
                    </Link>
                  </div>
                  <p className="mt-8 text-slate-900/50 text-[10px] font-bold uppercase tracking-widest">No credit card required. Cancel anytime.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

