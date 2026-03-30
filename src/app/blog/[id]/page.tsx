'use client';

import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Clock, User, Calendar, Share2, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const defaultPosts = [
      {
        id: '1',
        title: 'How a Custom CRM Can Revolutionize Your Sales Process',
        content: 'Custom CRM systems offer businesses a competitive edge by tailoring features to specific operational workflows. Unlike generic solutions, a custom-built platform can integrate seamlessly with your existing tools, automate repetitive tasks, and provide real-time insights that truly matter to your bottom line. We focus on building scalable architectures that grow with your company, ensuring that your data remains your most valuable asset.',
        date: 'May 15, 2024',
        author: 'Aman Sharma',
        category: 'CRM Systems',
        image: '/assets/blog-crm.png',
        readTime: '5 min read'
      },
      {
        id: '2',
        title: 'The Future of Mobile App Development in 2024',
        content: 'Mobile development is moving towards greater integration with AI and edge computing. Users now demand faster, more responsive apps that respect their privacy and offer personalized experiences. In 2024, we are seeing a massive shift towards cross-platform frameworks like React Native and Flutter, which allow for native-quality performance with significantly reduced development timelines.',
        date: 'May 10, 2024',
        author: 'Priya Verma',
        category: 'App Development',
        image: '/assets/blog-mobile.png',
        readTime: '7 min read'
      },
      {
        id: '3',
        title: 'Scaling Your Business Automation with Modern Tech',
        content: 'Automation is no longer a luxury for large corporations; it is a necessity for startups looking to scale efficiently. By automating core processes like lead generation, customer support, and project management, you free up your team to focus on strategic initiatives. Our approach focuses on identifing the most impactful bottlenecks and implementing robust, automated solutions that deliver immediate ROI.',
        date: 'May 05, 2024',
        author: 'Vikram Singh',
        category: 'Business Automation',
        image: '/assets/blog-automation.png',
        readTime: '6 min read'
      },
      {
        id: '4',
        title: 'Web Performance: Why Page Speed is Non-Negotiable',
        content: 'In the age of instant gratification, a one-second delay in page load time can lead to a significant drop in conversion rates. Google’s Core Web Vitals have made page speed a critical factor for SEO rankings. We utilize modern frameworks like Next.js and techniques like server-side rendering and edge caching to ensure that our clients’ websites are among the fastest on the internet.',
        date: 'April 28, 2024',
        author: 'Rahul Mehta',
        category: 'Web Tech',
        image: '/assets/blog-web-speed.png',
        readTime: '4 min read'
      }
    ];

    const storedBlogs = JSON.parse(localStorage.getItem('vishray_blogs') || '[]');
    const mappedStored = storedBlogs.map((b: any) => ({
      ...b,
      id: b.id.toString(),
      author: 'Vishray Editorial',
      category: 'New Insight',
      readTime: '3 min read'
    }));

    const all = [...mappedStored, ...defaultPosts];
    const found = all.find(p => p.id === id);
    setPost(found);
  }, [id]);

  useLayoutEffect(() => {
    if (post) {
      const ctx = gsap.context(() => {
        gsap.from('.article-header > *', {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out'
        });
        gsap.from('.article-content', {
          y: 40,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power3.out'
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [post]);

  if (!post) return <div className="min-h-screen flex items-center justify-center font-bold text-emerald-500 bg-slate-950 uppercase tracking-widest">Loading Insight...</div>;

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 pb-16 md:pb-32">
      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[500px] overflow-hidden border-b border-white/5">
        <Image src={post.image || '/assets/emerald-abstract-geometric.png'} alt={post.title} fill className="object-cover grayscale active:grayscale-0 hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 flex items-center">
           <div className="max-w-5xl mx-auto px-6 w-full article-header">
              <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-500/80 hover:text-emerald-400 mb-8 font-bold transition-all hover:-translate-x-2 text-[10px] uppercase tracking-widest">
                 <ArrowLeft className="w-4 h-4" /> Back to Insights
              </Link>
              <div className="space-y-6">
                 <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                    {post.category}
                 </div>
                 <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.9] italic uppercase">
                    {post.title}
                 </h1>
                 <div className="flex flex-wrap items-center gap-8 text-slate-400 font-bold uppercase tracking-widest text-[10px] pt-8 border-t border-white/5">
                    <div className="flex items-center gap-2">
                       <User className="w-4 h-4 text-emerald-500" /> {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-emerald-500" /> {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-emerald-500" /> {post.readTime}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-24 relative z-10">
         <div className="glass-dark p-8 md:p-20 rounded-[3rem] border border-white/5 article-content shadow-2xl">
            <div className="prose prose-invert max-w-none text-slate-400 font-medium leading-[1.8] text-lg">
               {post.content.split('\n').map((para: string, i: number) => (
                 <p key={i} className="mb-10 first-letter:text-6xl first-letter:font-bold first-letter:text-emerald-500 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
                    {para}
                 </p>
               ))}
            </div>
 
            <div className="mt-16 md:mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                     <Image src="/assets/logo.png" alt={post.author} width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                     <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mb-1">Architect</p>
                     <p className="font-bold text-white text-xl">{post.author}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-slate-400 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/5">
                     <Share2 className="w-5 h-5" /> Share Insight
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-slate-950 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                     <MessageCircle className="w-5 h-5" /> Discussions
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Suggested Reading */}
      <section className="max-w-7xl mx-auto px-6 mt-12 md:mt-24">
         <div className="flex flex-col md:flex-row justify-between lg:items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Related Logic</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none italic uppercase">Suggested <span className="text-emerald-500">Insights.</span></h3>
            </div>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-all border-b border-white/10 pb-2 hover:border-emerald-500/50">
               Explore Full Index
            </Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                 <div className="aspect-video glass-dark rounded-[2.5rem] overflow-hidden mb-8 relative border border-white/5 p-4">
                    <div className="w-full h-full relative rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                      <Image src={i === 1 ? '/assets/emerald-abstract-geometric.png' : '/assets/emerald-abstract-geometric.png'} alt="Suggested" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-500 transition-colors uppercase tracking-tight italic">
                    {i === 1 ? 'High-Velocity Scaling Patterns' : i === 2 ? 'The Next-Gen Architecture' : 'Predictive Pipeline Logic'}
                 </h4>
                 <div className="mt-4 w-12 h-0.5 bg-white/10 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
