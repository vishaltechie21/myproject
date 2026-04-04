'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  BarChart4,
  Code2,
  ArrowRight,
  PhoneCall,
  Layout,
  Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "CRM Integration",
      desc: "Connect your entire operational workflow into a single, high-fidelity source of truth for Real Estate & Finance.",
      icon: <Database className="w-8 h-8" />,
      tags: ["Real Estate", "DSA", "Finance"],
      color: "bg-success/5 text-success"
    },
    {
      title: "Auto-Dialer & Calling",
      desc: "High-velocity logic that prioritizes and routes leads to your agents at sub-second speeds.",
      icon: <PhoneCall className="w-8 h-8" />,
      tags: ["Auto-Dialer", "Call Tracking", "Recording"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Marketing Automation",
      desc: "Seamless Meta & Google Ads sync with intelligent automated lead capture and campaign analytics.",
      icon: <Target className="w-8 h-8" />,
      tags: ["Lead Capture", "Meta Ads", "Google Ads"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Inventory Intelligence",
      desc: "Architectural property listing and project management ecosystems for institutional-grade control.",
      icon: <Layout className="w-8 h-8" />,
      tags: ["Listings", "Availability", "Unit Tracking"],
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white selection:bg-success/10 selection:text-success">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-success/5 border border-success/10 mb-8"
           >
             <span className="text-[10px] font-black tracking-widest text-success uppercase">Architectural Capabilities</span>
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-8 max-w-6xl mx-auto italic uppercase"
           >
              Specialized <span className="text-success underline decoration-8 decoration-success/10 underline-offset-8">SaaS</span> Solutions.
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto mb-20 leading-relaxed font-medium italic"
           >
              Vishray provides the high-fidelity SaaS architecture required for high-velocity firm growth. Our CRM and calling ecosystems are optimized for Real Estate & Finance sectors.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative max-w-6xl mx-auto"
           >
              <div className="bg-white rounded-[3.5rem] p-4 border border-slate-100 shadow-2xl overflow-hidden aspect-[16/7] relative">
                 <Image src="/assets/services-hero.png" alt="Data Intelligence" fill className="object-cover rounded-[3rem]" priority />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-success/10 rounded-full blur-3xl -z-10" />
           </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-48 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50/50 p-14 rounded-[3.5rem] border border-slate-100 hover:border-success/30 hover:bg-white transition-all group flex flex-col justify-between h-[450px] shadow-sm hover:shadow-2xl"
              >
                 <div>
                    <div className={`w-20 h-20 rounded-2xl ${s.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-current/10`}>
                       {s.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-slate-950 mb-6 uppercase tracking-tighter italic leading-none">{s.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium italic group-hover:text-slate-900 transition-colors">
                       {s.desc}
                    </p>
                 </div>
                 <div className="mt-10 pt-10 border-t border-slate-200 flex flex-wrap gap-3">
                    {s.tags.map(tag => (
                       <span key={tag} className="px-5 py-2 rounded-xl bg-white border border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none group-hover:text-success group-hover:border-success/20 transition-all">
                          {tag}
                       </span>
                    ))}
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Final Performance Call */}
      <section className="py-24 lg:py-48 px-6 text-center bg-slate-950 rounded-[4rem] mx-6 mb-24 overflow-hidden relative group">
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter leading-none">Transform Your <br /> Sector <span className="text-success">Velocity</span></h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium italic">
               Join the elite echelon of firms using Vishray SaaS architecture to dominate their Real Estate & Finance markets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="/contact" className="w-full sm:w-auto bg-success text-white px-14 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-success/20">
                  Book Demo Hub
               </Link>
               <Link href="/pricing" className="w-full sm:w-auto px-14 py-6 rounded-2xl font-black text-white border-2 border-white/10 hover:bg-white/5 transition-all uppercase tracking-widest">
                  View SaaS Plans
               </Link>
            </div>
         </div>
         <div className="absolute top-0 left-0 w-full h-full bg-success/5 -z-0" />
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success/10 rounded-full blur-[140px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
      </section>
    </div>
  );
}
