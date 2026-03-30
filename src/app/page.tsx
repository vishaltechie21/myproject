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
    "ELITE PROPERTY ADVISORY",
    "INSTITUTIONAL INVESTMENT LOGIC",
    "HIGH-VELOCITY ASSET FLOW",
    "GLOBAL MARKET INTELLIGENCE"
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
    <div ref={containerRef} className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="hero-badge inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span ref={textRef} className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
              {offerings[currentTextIdx]}
            </span>
          </div>

          <h1 className="hero-title text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-slate-950 mb-8 max-w-5xl mx-auto leading-[0.9] uppercase italic">
            Defining <span className="text-emerald-600">Global</span> Real Estate Excellence.
          </h1>

          <p className="hero-desc text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Redefining luxury and commercial advisory through high-fidelity market intelligence and high-velocity investment logic. We architect the future of real estate.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-xl shadow-emerald-500/20 active:scale-95 flex items-center gap-2 group uppercase tracking-widest">
              Institutional Entry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="bg-slate-50 hover:bg-slate-100 text-slate-950 border border-slate-200 px-10 py-5 rounded-xl font-bold text-lg transition-all active:scale-95 uppercase tracking-widest">
              View Portfolios
            </Link>
          </div>

          <div className="hero-image-container relative max-w-6xl mx-auto">
             <div className="absolute inset-0 bg-emerald-500/10 rounded-[2rem] blur-[80px] -z-10 scale-90" />
             <div className="bg-white rounded-[2rem] p-4 border border-slate-200 shadow-2xl overflow-hidden aspect-[16/10] relative">
               <Image 
                 src="/assets/emerald-crm-dashboard-hero.png" 
                 alt="Real Estate Performance Intelligence" 
                 fill
                 className="object-cover rounded-2xl grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
                 priority
               />
             </div>
             {/* Asset Value Badge */}
             <div className="absolute top-1/4 -left-12 hidden lg:flex bg-white rounded-2xl p-6 border border-slate-200 shadow-xl items-center space-x-4 animate-bounce-slow">
               <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                 <BadgeDollarSign className="w-6 h-6 text-emerald-600" />
               </div>
               <div className="text-left">
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AuM Managed</div>
                 <div className="text-2xl font-black text-slate-900">$1.48B+</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Market Leaders Section */}
      <section className="py-20 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-12">Institutional Partners & Global Alliances</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-30 grayscale group hover:grayscale-0 transition-all duration-1000">
             <span className="text-xl font-black text-slate-950 tracking-widest uppercase">Veridian</span>
             <span className="text-xl font-black text-slate-950 tracking-widest uppercase">Skyline</span>
             <span className="text-xl font-black text-slate-950 tracking-widest uppercase">Oakridge</span>
             <span className="text-xl font-black text-slate-950 tracking-widest uppercase">Meridian</span>
             <span className="text-xl font-black text-slate-950 tracking-widest uppercase">Axiom</span>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
             <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Core Competencies</h2>
             <h3 className="text-4xl lg:text-7xl font-black text-slate-950 tracking-tight leading-none italic uppercase">Strategic <span className="text-emerald-600">Assets.</span></h3>
          </div>
          <p className="text-slate-600 text-lg max-w-md leading-relaxed font-medium">
            We don't just broker deals; we architect high-fidelity investment structures backed by high-velocity market data.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
           {/* Asset Management */}
           <div className="feature-card lg:col-span-7 bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between group h-[450px] overflow-hidden relative border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-100">
                  <Database className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-4xl font-black text-slate-950 mb-6 tracking-tight uppercase italic">Portfolio Logic</h3>
                <p className="text-slate-600 max-w-md leading-relaxed text-lg font-medium">
                  High-fidelity asset tracking and performance optimization. We maximize yield through automated operational precision and data-driven intelligence.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-between border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                         <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Yield Optimization Active</span>
                   </div>
                   <span className="text-xl font-black text-emerald-600">+18.4%</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-1000" />
           </div>

           {/* Market Intelligence */}
           <div className="feature-card lg:col-span-5 bg-white rounded-[3rem] p-12 flex flex-col group h-[450px] border border-slate-200 hover:border-emerald-200 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 border border-emerald-100">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-black text-slate-950 mb-6 tracking-tight uppercase italic">Risk Protocol</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium mb-10">
                Proprietary risk mitigation engines and real-time market volatility forecasting for enterprise-grade asset safety.
              </p>
              <div className="mt-auto space-y-4">
                 <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-emerald-600 rounded-full animate-pulse" />
                 </div>
                 <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Market Stability</span>
                    <span>Institutional Grade</span>
                 </div>
              </div>
           </div>

           {/* Global Network */}
           <div className="feature-card lg:col-span-4 bg-slate-950 rounded-[3rem] p-12 flex flex-col group h-[450px] overflow-hidden relative shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-white/5">
                <Globe className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 tracking-tight uppercase italic leading-none">Global <br/> Reach</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-medium mb-8">
                Seamless connectivity to institutional capital across 14 global financial hubs.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                 {['London', 'New York', 'Dubai', 'Singapore'].map(city => (
                   <span key={city} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-slate-300 uppercase tracking-widest">{city}</span>
                 ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
           </div>

           {/* Advisory Ecosystem */}
           <div className="feature-card lg:col-span-8 bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 group h-[450px] border border-slate-200 hover:border-emerald-200 hover:shadow-2xl transition-all">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h3 className="text-4xl font-black text-slate-950 tracking-tight uppercase italic">Advisory <span className="text-emerald-600">Matrix.</span></h3>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  High-velocity integration with your existing financial frameworks—MLS, ESG tracking, and Private Equity portals.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all pt-4">
                   Explore Full Matrix <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center">
                 <div className="grid grid-cols-2 gap-6 scale-90 md:scale-100">
                    <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center border border-slate-200 shadow-sm transition-transform group-hover:scale-110" />
                    <div className="w-24 h-24 rounded-3xl bg-emerald-50 flex items-center justify-center border border-emerald-200 shadow-sm transition-transform group-hover:scale-125">
                       <ArrowRight className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div className="w-24 h-24 rounded-3xl bg-slate-50/50 flex items-center justify-center border border-slate-100" />
                    <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-xl" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final Performance Call */}
      <section className="py-24 lg:py-40 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="relative bg-slate-950 rounded-[4rem] p-12 lg:p-24 overflow-hidden group shadow-2xl border border-white/5">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_40%)]" />
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000" />
               <div className="relative z-10 text-center">
                  <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white mb-12 leading-[0.85] uppercase italic">Accelerate Your <br /> Asset Flow.</h2>
                  <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                     Join the elite echelon of firms that have traded generic brokerage for Precision's architectural powerhouses.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/contact" className="w-full sm:w-auto bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-emerald-500/40 uppercase tracking-widest active:scale-95">
                      Initiate Protocol
                    </Link>
                    <button 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="w-full sm:w-auto border-2 border-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/5 transition-all uppercase tracking-widest"
                    >
                      Back to Matrix
                    </button>
                  </div>
                  <p className="mt-12 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Confidentiality Assured • ISO 27001 Compliant</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

