'use client';

import React from 'react';
import { Target, Eye, Rocket, Sparkles, ShieldCheck, Zap, Globe, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      title: "High Fidelity",
      desc: "We don't do 'good enough'. Every pixel of our CRM and every line of code in our dialer is tuned for high-fidelity performance.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Sector Velocity",
      desc: "In Real Estate & Finance, speed is survival. We build SaaS tools that move your leads at the speed of institutional logic.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Absolute Precision",
      desc: "Data-driven decisions only. Our systems provide the clarity you need to execute property sales and loan tracking with precision.",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white selection:bg-success/10 selection:text-success overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-success/5 border border-success/10"
              >
                <span className="text-[10px] font-black tracking-[0.2em] text-success uppercase">The Vishray Manifesto</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] max-w-xl uppercase italic"
              >
                 The <span className="text-success underline decoration-8 decoration-success/10 underline-offset-8">Intelligent</span> Hub for Sector Growth.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-lg md:text-2xl max-w-lg leading-relaxed font-medium italic"
              >
                 Vishray was founded to bridge the gap between chaotic spreadsheets and high-velocity CRM clarity. We build specialized SaaS logic for Real Estate & Finance leaders.
              </motion.p>
           </div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative aspect-[4/5] lg:aspect-[4/3] rounded-[4rem] overflow-hidden group shadow-2xl border border-slate-100"
           >
              <Image 
                src="/assets/about-hero.png" 
                alt="High Fidelity Logic" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
           </motion.div>
        </div>
      </section>

    {/* Mission & Values */}
      <section className="py-24 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-10">Our Strategic Protocol</h2>
              <h3 className="text-4xl lg:text-7xl font-black text-slate-950 mb-10 tracking-tighter uppercase italic leading-[0.85]">Mission & <br /> <span className="text-success">Principles.</span></h3>
              <p className="text-slate-500 text-lg font-medium italic leading-relaxed mb-14">
                We believe that CRM technology should be an accelerator, not a bottleneck. Every tool we build at Vishray is guided by institutional grade engineering.
              </p>
              <div className="space-y-6">
                <div className="p-10 bg-success rounded-[3rem] text-white shadow-2xl shadow-success/30 relative overflow-hidden group">
                  <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter relative z-10">Precision over Volume</h3>
                  <p className="font-bold italic opacity-90 leading-relaxed relative z-10">
                    We don't build generic features. We build precise SaaS solutions that solve high-impact Real Estate problems.
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((v, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50/50 p-12 rounded-[3.5rem] border border-slate-100 hover:border-success/30 hover:bg-white transition-all group shadow-sm hover:shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-success/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-success/10 text-success">
                    {v.icon}
                  </div>
                  <h4 className="text-3xl font-black text-slate-950 mb-6 uppercase tracking-tighter italic leading-none">{v.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium italic group-hover:text-slate-900 transition-colors">{v.desc}</p>
                </motion.div>
              ))}
              <div className="bg-slate-50/50 p-12 rounded-[3.5rem] border border-slate-100 shadow-sm flex items-center justify-center text-center">
                <div className="space-y-6">
                  <div className="text-success text-7xl font-black italic tracking-tighter">99.9%</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Operational Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-48 bg-slate-50/50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-10">The Specialized Collective</h2>
            <h3 className="text-4xl lg:text-7xl font-black text-slate-950 mb-10 uppercase tracking-tighter italic leading-[0.85]">Meet the <span className="text-success">Experts.</span></h3>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-24 font-medium italic">
               The team behind Vishray is a collective of sector specialists and SaaS engineers obsessed with high-velocity CRM logic.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                 { name: "Rahul Sharma", role: "Product Strategy", img: "https://i.pravatar.cc/600?u=1" },
                 { name: "Aditi Gupta", role: "Engineering Head", img: "https://i.pravatar.cc/600?u=2" },
                 { name: "Vikram Singh", role: "Lead UI Architect", img: "https://i.pravatar.cc/600?u=3" }
               ].map((member, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group"
                 >
                    <div className="aspect-[4/5] rounded-[4rem] overflow-hidden mb-10 relative border border-slate-100 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000">
                       <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-950 mb-3 uppercase italic tracking-tighter">{member.name}</h4>
                    <p className="text-success text-[10px] font-black uppercase tracking-[0.4em]">{member.role}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-48 px-6 bg-white">
         <div className="max-w-5xl mx-auto bg-slate-950 p-12 md:p-24 rounded-[4rem] border border-slate-900 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-success/10 rounded-full blur-[140px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase italic">Ready for <br /> <span className="text-success">Institutional</span> Logic?</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-14 max-w-xl mx-auto font-medium italic">
               Join the forward-thinking firms who have abandoned the noise for the precision of Vishray CRM ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto bg-success text-white px-14 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-success/20 uppercase tracking-widest">
                 Book Demo
              </Link>
              <Link href="/" className="w-full sm:w-auto px-14 py-6 rounded-2xl font-black text-white border-2 border-white/10 hover:bg-white/5 transition-all uppercase tracking-widest">
                 System Overview
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
