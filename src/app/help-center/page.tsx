'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, FileText, MessageCircle, Phone, Book, Zap, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const categories = [
  { icon: <Zap className="w-8 h-8" />, title: "Getting Started", desc: "Setting up your CRM nodes and cluster configurations.", count: "12 articles" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Security & Data", desc: "Encryption standards and institutional data protocols.", count: "8 articles" },
  { icon: <FileText className="w-8 h-8" />, title: "Documentation", desc: "Deep-dives into API logic and service integrations.", count: "25 articles" },
  { icon: <Book className="w-8 h-8" />, title: "Billing & Audit", desc: "Subscription management and operational tax reports.", count: "5 articles" },
];

const faqs = [
  { q: "How fast is the Meta Ads lead capture?", a: "Our sync protocol captures and injects leads into your CRM cluster in sub-2 seconds, ensuring zero lead leakage." },
  { q: "Can I migrate existing DSA data?", a: "Yes, our institutional migration bridge supports bulk imports from CSV, Excel, and legacy Zoho/Salesforce exports." },
  { q: "Does Vishray provide managed hosting?", a: "Absolutely. All 'Website Development' clients get managed institutional-grade hosting included with their SLA." },
  { q: "Is the Auto-Dialer integrated?", a: "Yes, our 'Calling System' module includes a natively integrated auto-dialer with IVR and recording capabilities." }
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header & Search Cluster */}
      <section className="pt-48 pb-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-success/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-xl bg-success/5 border border-success/10 mb-8"
            >
               <HelpCircle className="w-4 h-4 text-success" />
               <span className="text-[10px] font-black tracking-[0.3em] text-success uppercase">Vishray Intelligence Node</span>
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase italic leading-none mb-12"
            >
               How can we <span className="text-success">Assist</span>?
            </motion.h1>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="max-w-2xl mx-auto relative group"
            >
               <input 
                  type="text" 
                  placeholder="Search articles, protocols, logic..." 
                  className="w-full bg-white border-2 border-slate-100 rounded-[2rem] px-10 py-6 text-lg font-bold focus:outline-none focus:border-success transition-all shadow-2xl shadow-slate-100/50 placeholder:text-slate-300"
               />
               <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-success rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <Search className="w-6 h-6" />
               </div>
            </motion.div>
        </div>
      </section>

      {/* 2. Knowledge Categories */}
      <section className="py-24 lg:py-48 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-success/30 hover:shadow-2xl hover:shadow-success/5 transition-all group cursor-pointer"
              >
                 <div className="w-16 h-16 bg-success/5 text-success rounded-2xl flex items-center justify-center mb-8 group-hover:bg-success group-hover:text-white transition-all duration-500">
                    {cat.icon}
                 </div>
                 <h3 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter mb-4">{cat.title}</h3>
                 <p className="text-slate-500 font-medium italic mb-8 leading-relaxed">{cat.desc}</p>
                 <div className="text-[10px] font-black text-success uppercase tracking-widest">{cat.count}</div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 3. FAQ Cluster */}
      <section className="py-24 lg:py-48 bg-slate-950 relative overflow-hidden rounded-t-[5rem]">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-success/5 rounded-full blur-[140px] pointer-events-none" />
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-[10px] font-black text-success uppercase tracking-[0.4em] mb-12 text-center">Operational FAQ</h2>
            <div className="space-y-6">
                {faqs.map((f, i) => (
                   <motion.div 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all"
                   >
                      <h4 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4 flex justify-between items-center">
                         {f.q} <span className="text-success group-hover:translate-x-1 transition-transform">→</span>
                      </h4>
                      <p className="text-slate-400 font-medium italic">{f.a}</p>
                   </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* 4. Support Contact Modules */}
      <section className="py-24 lg:py-48">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-14 rounded-[4rem] group hover:bg-white hover:shadow-2xl transition-all border border-slate-100 items-center justify-center flex flex-col text-center">
                <MessageCircle className="w-16 h-16 text-success mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter mb-4">Direct Live Audit</h3>
                <p className="text-slate-500 font-medium italic mb-10">Connect with an operational expert for sub-second responses.</p>
                <button className="bg-success text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
                   Connect Now <ArrowRight className="w-4 h-4" />
                </button>
            </div>
            <div className="bg-slate-50 p-14 rounded-[4rem] group hover:bg-white hover:shadow-2xl transition-all border border-slate-100 items-center justify-center flex flex-col text-center">
                <Mail className="w-16 h-16 text-success mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black text-slate-950 uppercase italic tracking-tighter mb-4">Email Protocol</h3>
                <p className="text-slate-500 font-medium italic mb-10">Submit a ticket for complex institutional configurations.</p>
                <button className="border-2 border-slate-200 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3">
                   Get Support <ArrowRight className="w-4 h-4" />
                </button>
            </div>
         </div>
      </section>
    </div>
  );
}
