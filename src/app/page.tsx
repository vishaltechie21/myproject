'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Database, 
  PhoneCall, 
  Target, 
  Layout, 
  CheckCircle2, 
  ArrowRight, 
  BadgeDollarSign, 
  Clock, 
  ShieldCheck, 
  Users,
  Zap,
  Globe
} from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import Hero from '@/components/Hero';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const services = [
    {
      id: 'crm',
      title: "CRM Features",
      icon: <Database className="w-8 h-8" />,
      features: ["Lead Management", "Pipeline Tracking", "Follow-ups & Reminders", "Team Management"],
      color: "bg-success/10 text-success"
    },
    {
      id: 'calling',
      title: "Calling System",
      icon: <PhoneCall className="w-8 h-8" />,
      features: ["Auto Dialer", "Call Recording", "Call Analytics", "IVR Integration"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 'marketing',
      title: "Marketing Sync",
      icon: <Target className="w-8 h-8" />,
      features: ["Meta Ads Integration", "Google Ads Integration", "Lead Capture Automation", "Campaign Analytics"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 'inventory',
      title: "Inventory Mgmt",
      icon: <Layout className="w-8 h-8" />,
      features: ["Property Listings", "Availability Tracking", "Project Management", "Floor Plans Sync"],
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const useCases = [
    {
      id: 'real-estate',
      title: "Real Estate CRM",
      desc: "Architected for Builders, Developers, and Channel Partners to manage projects and sales velocity.",
      icon: "🏢"
    },
    {
      id: 'loan',
      title: "Loan / DSA CRM",
      desc: "Perfect for DSA partners to track loan applications, documents, and payout status with ease.",
      icon: "💰"
    },
    {
      id: 'finance',
      title: "Finance CRM",
      desc: "Specialized for Financial Advisors and Insurance agents to manage client portfolios and renewals.",
      icon: "📊"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white selection:bg-success/10 selection:text-success overflow-x-hidden">
      
      {/* 1. New Animated Hero Component */}
      <Hero />

      {/* 2. Services / Features Section */}
      <section className="py-24 lg:py-48 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-6">Institutional Pillars</h2>
             <h3 className="text-4xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">Unified <span className="text-success">Logic</span> Ecosystem.</h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((s, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                className="bg-white p-10 rounded-[3.5rem] border border-slate-100 hover:border-success/40 hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.15)] transition-all group flex flex-col h-full bg-gradient-to-b from-white to-slate-50/50"
              >
                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                   {s.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic group-hover:text-success transition-colors">{s.title}</h4>
                <ul className="space-y-4 mt-auto">
                   {s.features.map(f => (
                     <li key={f} className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest leading-none group-hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success" /> {f}
                     </li>
                   ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Industry Use Cases */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
              <div className="max-w-xl">
                 <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-6">Precision Verticals</h2>
                 <h3 className="text-4xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-none italic uppercase">Institutional <span className="text-success">Grade</span> Portals.</h3>
              </div>
              <p className="text-slate-500 text-lg font-medium italic max-w-sm mb-4">
                Generic CRMs are noisy. Vishray is engineered for the high-fidelity needs of Real Estate and Finance sectors.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {useCases.map((uc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="relative group h-[550px] bg-slate-50 rounded-[4rem] p-14 border border-slate-100 hover:bg-white hover:border-success/30 hover:shadow-2xl transition-all overflow-hidden"
                >
                   <div className="text-7xl mb-10 transform group-hover:rotate-12 transition-transform duration-500">{uc.icon}</div>
                   <h4 className="text-3xl font-black text-slate-950 mb-6 uppercase tracking-tighter italic">{uc.title}</h4>
                   <p className="text-slate-500 text-lg md:text-xl font-medium italic mb-10 leading-relaxed">
                     {uc.desc}
                   </p>
                   <Link href="/solutions" className="absolute bottom-14 left-14 inline-flex items-center gap-2 text-success font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                      Review Architecture <ArrowRight className="w-4 h-4" />
                   </Link>
                   <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-success/5 rounded-full blur-3xl group-hover:bg-success/10 transition-all pointer-events-none" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Why Choose Vishray */}
      <section className="py-24 lg:py-48 bg-slate-950 relative overflow-hidden rounded-t-[5rem]">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-success/5 rounded-full blur-[140px] pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-12">The Vishray Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { title: "SaaS Hosting", desc: "Institutional grade web hosting included for your firm's identity.", icon: <Globe className="w-10 h-10" /> },
                 { title: "Niche Logic", desc: "Built specifically for Real Estate & Finance project velocity.", icon: <Target className="w-10 h-10" /> },
                 { title: "Sub-Second UX", desc: "Optimized interface for high-frequency lead management.", icon: <Zap className="w-10 h-10" /> },
                 { title: "Client First", desc: "Dedicated support nodes for your operational success.", icon: <Users className="w-10 h-10" /> }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                 >
                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-success group hover:bg-success hover:text-white transition-all duration-500 hover:rotate-12">
                       {item.icon}
                    </div>
                    <h5 className="text-xl font-black uppercase italic mb-4 tracking-tighter">{item.title}</h5>
                    <p className="text-slate-400 font-medium italic">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Demo / Call to Action Section */}
      <section className="py-24 lg:py-48 bg-white">
        <div className="max-w-6xl mx-auto px-6">
           <div className="bg-slate-50 border border-slate-100 rounded-[5rem] p-8 md:p-24 overflow-hidden relative group shadow-2xl transition-all">
              <div className="absolute top-[-20%] left-[-20%] w-80 h-80 bg-success/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl md:text-8xl font-black text-slate-950 mb-10 tracking-tighter uppercase italic leading-[0.85]">बुक करें अपना <span className="text-success underline decoration-success/10 decoration-8 underline-offset-8">फ्री</span> डेमो.</h2>
                    <p className="text-slate-500 text-lg md:text-2xl font-medium italic leading-relaxed mb-14">
                      Deploy vishray logic today. Join 1.2k+ firms scaling their DSA and Real Estate assets with institutional velocity.
                    </p>
                    <div className="flex items-center gap-6">
                       <div className="flex -space-x-4">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-50 bg-slate-200 overflow-hidden relative">
                               <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="user" fill />
                            </div>
                          ))}
                       </div>
                       <div className="text-xs font-black text-success uppercase tracking-[0.3em]">
                          Joined by 1.2k+ Experts
                       </div>
                    </div>
                 </div>
                 
                 <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="bg-white rounded-[4rem] p-12 lg:p-16 border border-slate-100 shadow-2xl relative overflow-hidden"
                 >
                    <form className="space-y-8">
                        <div className="space-y-4">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Identity</label>
                           <input className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-success transition-all font-bold placeholder:text-slate-300" placeholder="Agent Name" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Secure Link</label>
                           <input className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-success transition-all font-bold placeholder:text-slate-300" placeholder="Phone Number" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Sector Logic</label>
                           <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-success transition-all font-bold text-slate-500 appearance-none">
                              <option>Business Type</option>
                              <option>Real Estate Platform</option>
                              <option>Loan Agent / DSA Hub</option>
                              <option>Finance Specialization</option>
                           </select>
                        </div>
                        <button type="button" onClick={() => setIsDemoOpen(true)} className="w-full bg-success text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl shadow-success/30 active:scale-95 transition-all mt-6">Initiate Audit</button>
                    </form>
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-success/0 via-success to-success/0" />
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
