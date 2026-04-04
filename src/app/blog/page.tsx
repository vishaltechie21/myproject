'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  BookOpen,
  Zap,
  Target,
  Smartphone
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Blog() {
  const [allPosts, setAllPosts] = useState<any[]>([]);

  useEffect(() => {
    const defaultPosts = [
      {
        id: 1,
        title: 'Real Estate Sales Velocity in 2024',
        excerpt: 'Why modern builders are switching to niche CRM systems to automate project inventory and lead tracking.',
        date: 'June 15, 2024',
        author: 'Vishray Team',
        category: 'Market Strategy',
        image: '/assets/blog-crm.png',
        readTime: '5 min read'
      },
      {
        id: 2,
        title: 'Maximizing Payouts for Loan Agents',
        excerpt: 'How automated lead routing and document tracking can double your DSA business efficiency.',
        date: 'June 10, 2024',
        author: 'Finance Expert',
        category: 'Loan / DSA',
        image: '/assets/services-hero.png',
        readTime: '7 min read'
      },
      {
        id: 3,
        title: 'Meta Ads Sync: The CRM Secret',
        excerpt: 'Breaking down the logic of 2-second lead capture from Meta ads directly into your agent pipeline.',
        date: 'June 05, 2024',
        author: 'Ad Ops specialized',
        category: 'Automation',
        image: '/assets/blog-automation.png',
        readTime: '6 min read'
      }
    ];
    setAllPosts(defaultPosts);
  }, []);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen selection:bg-success/10 selection:text-success">
      {/* Blog Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-success/5 border border-success/10 mb-8"
           >
             <span className="text-[10px] font-black tracking-[0.2em] text-success uppercase">Insight Protocol</span>
           </motion.div>
           <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-8 italic uppercase">
              The <span className="text-success underline decoration-4 decoration-success/10 underline-offset-8">SaaS</span> Intelligence Index.
           </h1>
           <p className="text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed italic">
              Strategic updates, high-fidelity engineering logic, and sector-specific insights from the Vishray CRM ecosystem.
           </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Feed */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
               {allPosts.map((post) => (
                 <motion.article 
                   key={post.id} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group flex flex-col h-[650px] bg-slate-50/50 rounded-[4rem] border border-slate-100 overflow-hidden hover:border-success/30 hover:bg-white hover:shadow-2xl transition-all"
                 >
                    <div className="aspect-video relative overflow-hidden h-72">
                       <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                       <div className="absolute top-8 right-8 px-5 py-2 rounded-2xl bg-success text-white text-[10px] font-black uppercase tracking-widest leading-none z-10 shadow-2xl">
                          {post.category}
                       </div>
                    </div>
                    <div className="p-12 flex flex-col justify-between flex-grow">
                       <div>
                          <div className="flex items-center gap-5 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">
                             <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-success" /> {post.date}</span>
                             <span className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-success" /> {post.author}</span>
                          </div>
                          <h3 className="text-3xl font-black text-slate-950 mb-6 group-hover:text-success transition-colors leading-none italic uppercase tracking-tighter">{post.title}</h3>
                          <p className="text-slate-500 font-medium italic leading-relaxed line-clamp-3">{post.excerpt}</p>
                       </div>
                       <div className="pt-10 mt-10 border-t border-slate-200 flex items-center justify-between">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.readTime}</span>
                          <Link href={`/blog`} className="inline-flex items-center gap-2 text-success font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                             Read Logic <ArrowRight className="w-4 h-4" />
                          </Link>
                       </div>
                    </div>
                 </motion.article>
               ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-10">
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100"
               >
                  <h3 className="text-xl font-black text-slate-950 mb-8 uppercase tracking-widest italic leading-none">High-Fidelity Intel</h3>
                  <p className="text-slate-500 mb-10 font-medium italic text-sm leading-relaxed">Subscribe to receive institutional-grade updates on sector velocity and CRM engineering.</p>
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                     <input type="email" placeholder="agent@vishray.io" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-5 text-slate-950 focus:border-success/50 outline-none transition-all font-bold placeholder:text-slate-300" />
                     <button className="w-full bg-success hover:bg-success text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-success/20 active:scale-95 uppercase tracking-widest text-sm">
                        Initiate Sync
                     </button>
                  </form>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-900 overflow-hidden relative group"
               >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-2xl -z-0" />
                  <div className="relative z-10">
                     <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest italic leading-none">Strategic Audit</h3>
                     <p className="text-slate-400 mb-10 font-medium italic text-sm leading-relaxed">Ready to scale? Our architectural team is available for firm consultations.</p>
                     <Link href="/contact" className="inline-flex items-center gap-3 text-success font-black uppercase tracking-widest text-[10px] hover:gap-5 transition-all">
                        Talk to expert <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </motion.div>
            </aside>
         </div>
      </section>
    </div>
  );
}
