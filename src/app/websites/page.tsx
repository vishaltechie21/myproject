'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Server, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Smartphone, 
  Search, 
  ArrowRight,
  Code2,
  Cpu,
  Trophy,
  ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import DemoModal from '@/components/DemoModal';

export default function WebsitesPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const features = [
    {
      title: "Managed Hosting",
      desc: "Institutional-grade hosting cluster in Mumbai for sub-second latency across India.",
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: "SEO Optimized",
      desc: "Built-in indexing protocol for Google search visibility in Real Estate sectors.",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Mobile First",
      desc: "100% responsive architecture designed for property browsing on any device.",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: "Secure SSL",
      desc: "Enterprise-level security certificates to build trust with your high-value leads.",
      icon: <ShieldCheck className="w-8 h-8" />,
    }
  ];

  const types = [
    {
      title: "Real Estate Portals",
      desc: "High-fidelity websites for builders & developers with project inventory sync.",
      image: "/assets/blog-crm.png",
      tag: "Institutional"
    },
    {
      title: "DSA / Loan Portals",
      desc: "Lead capture focused landing pages for loan agents with EMI calculators.",
      image: "/assets/blog-automation.png",
      tag: "Sales Focused"
    },
    {
      title: "Corporate Websites",
      desc: "Premium identity for finance firms and agencies with operational clarity.",
      image: "/assets/blog-web-speed.png",
      tag: "Identity"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-success/10 selection:text-success overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden items-center justify-center flex flex-col border-b border-slate-100">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-success/5 rounded-full blur-[140px] -z-10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-success/5 border border-success/10 mb-10"
              >
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] text-success uppercase">The Managed Hosting Stack</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.85] uppercase italic mb-10"
              >
                 High-Velocity <br/> <span className="text-success underline decoration-8 decoration-success/10 underline-offset-8">SaaS</span> Websites.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-lg md:text-2xl font-medium italic leading-relaxed mb-14 max-w-xl"
              >
                 We build and host high-fidelity websites for Real Estate and Finance firms. Institutional grade performance with zero maintenance on your side.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6">
                 <button onClick={() => setIsDemoOpen(true)} className="bg-success text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-success/20 uppercase tracking-widest flex items-center justify-center gap-3">
                    Start Building <ArrowRight className="w-5 h-5" />
                 </button>
                 <Link href="/pricing" className="border-2 border-slate-100 text-slate-950 px-12 py-6 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all uppercase tracking-widest text-center">
                    View Hosting
                 </Link>
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative aspect-[16/10] rounded-[3rem] overflow-hidden group shadow-2xl border border-slate-100"
           >
              <Image 
                src="/assets/emerald-hero.png" 
                alt="High Velocity Web Stack" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
           </motion.div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="py-24 lg:py-48 bg-slate-950 rounded-b-[5rem] overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-success/10 rounded-full blur-[100px] -z-0" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {features.map((f, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="text-white group"
                 >
                    <div className="w-16 h-16 rounded-2xl bg-success/10 text-success flex items-center justify-center mb-10 border border-success/20 group-hover:scale-110 group-hover:bg-success group-hover:text-white transition-all duration-500">
                       {f.icon}
                    </div>
                    <h3 className="text-xl font-black uppercase italic mb-6 tracking-tighter">{f.title}</h3>
                    <p className="text-slate-400 font-medium italic italic leading-relaxed">{f.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Showcase Grid */}
      <section className="py-24 lg:py-48 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-12">
               <div className="max-w-xl">
                  <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-10">High-Fidelity Showcase</h2>
                  <h3 className="text-4xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-none italic uppercase leading-[0.85]">Strategic <br /> <span className="text-success">Website</span> Types.</h3>
               </div>
               <p className="text-slate-500 text-lg font-medium italic max-w-sm mb-4 leading-relaxed">
                  Every website we build is optimized for your specific sector's operational velocity and logic.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
               {types.map((type, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group flex flex-col h-[600px] rounded-[4rem] bg-slate-50/50 border border-slate-100 overflow-hidden hover:border-success/30 hover:bg-white hover:shadow-2xl transition-all"
                 >
                    <div className="aspect-[16/9] relative overflow-hidden h-72">
                       <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                       <div className="absolute top-8 right-8 px-5 py-2 rounded-2xl bg-success text-white text-[10px] font-black uppercase tracking-widest leading-none z-10 shadow-2xl">
                          {type.tag}
                       </div>
                    </div>
                    <div className="p-12 flex flex-col justify-between flex-grow">
                       <div>
                          <h4 className="text-3xl font-black text-slate-950 mb-6 group-hover:text-success transition-colors leading-none italic uppercase tracking-tighter">{type.title}</h4>
                          <p className="text-slate-500 font-medium italic leading-relaxed">{type.desc}</p>
                       </div>
                       <div className="pt-10 mt-10 border-t border-slate-100 flex items-center justify-between">
                          <Link href="/contact" className="inline-flex items-center gap-2 text-success font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                             Deploy Stack <ArrowRight className="w-4 h-4" />
                          </Link>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Host Managed Section */}
      <section className="py-24 lg:py-48 px-6 bg-slate-50 border-y border-slate-100">
         <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-success/5 rounded-[2rem] flex items-center justify-center text-success mx-auto mb-12 border border-success/10 group animate-bounce">
               <Globe className="w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-10 tracking-tighter leading-[0.85] uppercase italic">The Zero Maintenance <br /> <span className="text-success">Hosting</span> Cluster.</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium italic leading-relaxed mb-14">
               We don't just build your website, we maintain it. High-uptime, sub-second speed, and 24/7 security monitoring. Managed by Vishray Architects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-left bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
               <div>
                  <div className="text-[10px] font-black text-success uppercase tracking-[0.3em] mb-4">India Region</div>
                  <div className="text-2xl font-black text-slate-950 uppercase italic leading-tight">Mumbai DC Cluster</div>
               </div>
               <div>
                  <div className="text-[10px] font-black text-success uppercase tracking-[0.3em] mb-4">Uptime SLA</div>
                  <div className="text-2xl font-black text-slate-950 uppercase italic leading-tight">99.9% Velocity</div>
               </div>
               <div>
                  <div className="text-[10px] font-black text-success uppercase tracking-[0.3em] mb-4">Security Protocol</div>
                  <div className="text-2xl font-black text-slate-950 uppercase italic leading-tight">Elite Firewall</div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 lg:py-48 bg-white">
         <div className="max-w-5xl mx-auto bg-slate-950 p-12 lg:p-24 rounded-[4rem] text-center relative overflow-hidden group shadow-2xl mx-6">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success/10 rounded-full blur-[140px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase italic">Ready to <span className="text-success underline decoration-success/20 underline-offset-8 decoration-8">Scale</span> Your Web Identity?</h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium italic leading-relaxed mb-14 max-w-xl mx-auto">
               Request a high-velocity website architecture audit from our team today.
            </p>
            <button onClick={() => setIsDemoOpen(true)} className="bg-success text-white px-14 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-success/30 uppercase tracking-widest flex items-center justify-center gap-3 mx-auto">
               Initiate Deployment <ArrowRight className="w-6 h-6" />
            </button>
         </div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
