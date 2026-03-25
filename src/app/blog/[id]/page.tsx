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

  if (!post) return <div className="min-h-screen flex items-center justify-center font-bold text-slate-400">Loading Insight...</div>;

  return (
    <div ref={containerRef} className="min-h-screen bg-white pb-16 md:pb-32">
      <div className="h-16 md:h-20" />
      
      {/* Article Hero */}
      <section className="relative h-[50vh] min-h-[300px] md:h-[60vh] md:min-h-[400px] overflow-hidden">
        <Image src={post.image || '/assets/blog-crm.png'} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-end">
           <div className="max-w-4xl mx-auto px-6 pb-12 md:pb-16 w-full article-header">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 font-black transition-all hover:-translate-x-2 text-[10px] md:text-xs uppercase tracking-widest">
                 <ArrowLeft className="w-4 h-4" /> Back to Insights
              </Link>
              <div className="space-y-4">
                 <div className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                 </div>
                 <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl tracking-tighter uppercase">
                    {post.title}
                 </h1>
                 <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-white/90 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] pt-2 md:pt-4">
                    <div className="flex items-center gap-2">
                       <User className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" /> {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                       <Calendar className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" /> {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                       <Clock className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" /> {post.readTime}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 -mt-16 md:-mt-10 relative z-10">
         <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-50 article-content">
            <div className="prose prose-sm sm:prose-lg max-w-none text-slate-600 font-medium leading-[2]">
               {post.content.split('\n').map((para: string, i: number) => (
                 <p key={i} className="mb-8 first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-yellow-600 first-letter:mr-3 first-letter:float-left">
                    {para}
                 </p>
               ))}
            </div>
 
            <div className="mt-12 md:mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-slate-200">
                     <Image src="/assets/logo.png" alt={post.author} width={48} height={48} className="object-cover p-2" />
                  </div>
                  <div>
                     <p className="text-[9px] md:text-xs text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Written By</p>
                     <p className="font-bold text-slate-900 text-sm md:text-base">{post.author}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-yellow-50 hover:text-yellow-600 transition-all">
                     <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-lg">
                     <MessageCircle className="w-4 h-4" /> Comments
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Suggested Reading */}
      <section className="max-w-7xl mx-auto px-6 mt-20 md:mt-32">
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase">Suggested Reading</h2>
            <Link href="/blog" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-yellow-600 decoration-2 underline-offset-8 decoration-yellow-400 transition-all">
               Browse All Insights
            </Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer">
                 <div className="aspect-[16/10] bg-slate-100 rounded-[2rem] overflow-hidden mb-6 relative shadow-sm border border-slate-50">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:opacity-0 transition-opacity z-10" />
                    <Image src={`/assets/blog-mobile.png`} alt="Suggested" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <h4 className="text-base md:text-lg font-black text-slate-900 leading-snug group-hover:text-yellow-600 transition-colors uppercase tracking-tight">
                    Scaling with Precision: The New Architecture Patterns
                 </h4>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
