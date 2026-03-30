import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search
} from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-hero > *', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.blog-post', {
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from('.blog-sidebar > *', {
        scrollTrigger: {
          trigger: '.blog-sidebar',
          start: 'top 85%',
        },
        x: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [allPosts, setAllPosts] = useState<any[]>([]);

  useEffect(() => {
    const defaultPosts = [
      {
        id: 1,
        title: 'Operational Velocity: The New Real Estate Metric',
        excerpt: 'Why firms are ditching traditional KPIs for a more logical, high-fidelity approach to growth.',
        date: 'May 15, 2024',
        author: 'Julian Thorne',
        category: 'Strategy',
        image: '/assets/emerald-abstract-geometric.png',
        readTime: '5 min read'
      },
      {
        id: 2,
        title: 'Architecting for Precision in Leads Management',
        excerpt: 'A deep dive into the engineering logic behind sub-second lead routing systems.',
        date: 'May 10, 2024',
        author: 'Elena Voss',
        category: 'Engineering',
        image: '/assets/emerald-abstract-geometric.png',
        readTime: '7 min read'
      },
      {
        id: 3,
        title: 'High-Fidelity UI: The Future of Enterprise CRM',
        excerpt: 'How aesthetics and operational logic merge to create the next generation of professional tools.',
        date: 'May 05, 2024',
        author: 'Marcus Reed',
        category: 'Design',
        image: '/assets/emerald-abstract-geometric.png',
        readTime: '6 min read'
      }
    ];
    setAllPosts(defaultPosts);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-white min-h-screen">
      {/* Blog Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 blog-hero">
           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
             <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">Insights & Logic</span>
           </div>
           <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-950 tracking-tight leading-[0.9] mb-8 italic">
              The Logic of <span className="text-emerald-600">Precision</span> Index.
           </h1>
           <p className="text-slate-600 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Architectural updates, engineering deep dives, and strategic insights from the Vishray Technologies ecosystem.
           </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 blog-grid">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Feed */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
               {allPosts.map((post) => (
                 <article key={post.id} className="blog-post group flex flex-col h-[600px] bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all">
                    <div className="aspect-video relative overflow-hidden h-64 grayscale group-hover:grayscale-0 transition-all duration-700">
                       <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest leading-none z-10 shadow-lg">
                          {post.category}
                       </div>
                    </div>
                    <div className="p-10 flex flex-col justify-between flex-grow">
                       <div>
                          <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                             <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-emerald-600" /> {post.date}</span>
                             <span className="flex items-center gap-2"><User className="w-3 h-3 text-emerald-600" /> {post.author}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-950 mb-6 group-hover:text-emerald-600 transition-colors leading-tight italic uppercase">{post.title}</h3>
                          <p className="text-slate-600 font-medium leading-relaxed line-clamp-3">{post.excerpt}</p>
                       </div>
                       <div className="pt-8 mt-8 border-t border-slate-200 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.readTime}</span>
                          <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                             Read Logic <ArrowRight className="w-4 h-4" />
                          </Link>
                       </div>
                    </div>
                 </article>
               ))}
            </div>

            {/* Support/Newsletter Sidebar */}
            <aside className="lg:col-span-4 space-y-8 blog-sidebar">
               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-950 mb-6 uppercase tracking-tight">High-Fidelity Insights</h3>
                  <p className="text-slate-600 mb-8 font-medium">Subscribe and receive architectural updates on operational velocity and CRM logic.</p>
                  <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                     <input type="email" placeholder="email@protocol.io" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-950 focus:border-emerald-500/50 outline-none transition-all font-medium" />
                     <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.98]">
                        Join Index
                     </button>
                  </form>
               </div>

               <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-900 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -z-0" />
                  <div className="relative z-10">
                     <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">Speak to an Architect</h3>
                     <p className="text-slate-400 mb-8 font-medium italic text-sm">Ready for precision? Our architects are online for consultations.</p>
                     <Link href="/contact" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                        Initiate Protocol <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </div>
            </aside>
         </div>
      </section>
    </div>
  );
}
