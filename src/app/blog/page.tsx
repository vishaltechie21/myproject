'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How a Custom CRM Can Revolutionize Your Sales Process',
      excerpt: 'Discover why off-the-shelf CRM solutions might be holding your business back and how custom systems drive growth.',
      date: 'May 15, 2024',
      author: 'Aman Sharma',
      category: 'CRM Systems',
      image: '/assets/blog-crm.png',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Future of Mobile App Development in 2024',
      excerpt: 'From AI integration to 5G optimization, we explore the top trends shaping the mobile application landscape.',
      date: 'May 10, 2024',
      author: 'Priya Verma',
      category: 'App Development',
      image: '/assets/blog-mobile.png',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Scaling Your Business Automation with Modern Tech',
      excerpt: 'Learn how to automate repetitive tasks and focus on what truly matters for your company&apos;s scaling journey.',
      date: 'May 05, 2024',
      author: 'Vikram Singh',
      category: 'Business Automation',
      image: '/assets/blog-automation.png',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Web Performance: Why Page Speed is Non-Negotiable',
      excerpt: 'A deep dive into how website speed affects your SEO rankings and user conversion rates in the competitive market.',
      date: 'April 28, 2024',
      author: 'Rahul Mehta',
      category: 'Web Tech',
      image: '/assets/blog-web-speed.png',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-24 bg-white">
      {/* Blog Hero */}
      <section className="bg-yellow-400 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-900/10">
              <Image 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJqZ3Q1eXpwOHRnMzlqOHRnMzlqOHRnMzlqOHRnMzlqOHRnMzlqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMG78o7C3hW1yM/giphy.gif" 
                alt="Reading Insights" 
                width={80} 
                height={80} 
                className="object-cover"
              />
           </div>
           <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Vishray Insights</h1>
           <p className="text-slate-800 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
             Latest trends, guides, and updates from our team of expert developers and business strategists.
           </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* Main Feed */}
           <div className="flex-1 space-y-12">
             <div className="grid md:grid-cols-2 gap-8">
               {posts.map((post, idx) => (
                 <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col group bg-white rounded-2xl border border-yellow-101 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-yellow-500/5 transition-all"
                 >
                   {/* Card Visual with Image */}
                   <div className="aspect-video bg-yellow-50 relative group-hover:grayscale-0 transition-all">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-400 text-slate-900 text-[10px] font-bold uppercase tracking-widest leading-none z-10 shadow-lg">
                         {post.category}
                      </div>
                   </div>
                   
                   <div className="p-6 md:p-8 flex flex-col flex-grow">
                     <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-4 uppercase tracking-tighter">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-yellow-600" /> {post.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3 text-yellow-600" /> {post.author}</span>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors leading-snug">
                       {post.title}
                     </h3>
                     <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 italic">
                       &ldquo;{post.excerpt}&rdquo;
                     </p>
                     <div className="mt-auto flex items-center justify-between border-t border-yellow-50 pt-4">
                        <span className="text-xs font-medium text-slate-400 italic">{post.readTime}</span>
                        <Link href={`#`} className="inline-flex items-center text-yellow-600 text-sm font-black uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                          Read Full Article <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                     </div>
                   </div>
                 </motion.article>
               ))}
             </div>
           </div>

           {/* Sidebar */}
           <aside className="w-full lg:w-80 space-y-10">
              {/* Search Widget */}
              <div className="p-6 bg-yellow-50 rounded-3xl border border-yellow-100">
                 <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest opacity-60">Search</h4>
                 <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-yellow-100 text-sm focus:ring-2 focus:ring-yellow-400 outline-none transition-all text-slate-900 shadow-sm"
                    />
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                 </div>
              </div>

              {/* Newsletter Widget */}
              <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-xl overflow-hidden relative border border-slate-800">
                 <div className="relative z-10">
                   <h4 className="font-bold text-xl mb-3 text-yellow-400">Get Dev Updates</h4>
                   <p className="text-slate-400 text-sm mb-6 leading-relaxed italic">
                     Weekly newsletter on CRM automation and mobile app trends. Join 2,000+ readers.
                   </p>
                   <form className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 placeholder:text-slate-500 text-sm focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                      />
                      <button className="w-full bg-yellow-400 text-slate-900 font-black py-4 rounded-xl hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/20 active:scale-95">
                        Subscribe Now
                      </button>
                   </form>
                 </div>
                 <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-3xl" />
              </div>
           </aside>
        </div>
      </section>
    </div>
  );
}
