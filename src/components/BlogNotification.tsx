'use client';

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { X, Bell, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const BlogNotification = () => {
  const [show, setShow] = useState(false);
  const [newBlog, setNewBlog] = useState<any>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if a new blog was added via the admin panel
    const newBlogAdded = localStorage.getItem('vishray_new_blog_added');
    const dismissed = sessionStorage.getItem('vishray_blog_dismissed');

    if (newBlogAdded === 'true' && !dismissed) {
      const blogs = JSON.parse(localStorage.getItem('vishray_blogs') || '[]');
      if (blogs.length > 0) {
        setNewBlog(blogs[0]);
        setShow(true);
        
        // Request Browser Notification Permission
        if ('Notification' in window && Notification.permission === 'default') {
          setTimeout(() => {
            Notification.requestPermission();
          }, 3000);
        }
      }
    }
  }, []);

  useLayoutEffect(() => {
    if (show) {
      gsap.from('.popup-container', {
        x: 400,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 2
      });
    }
  }, [show]);

  const closePopup = () => {
    sessionStorage.setItem('vishray_blog_dismissed', 'true');
    gsap.to('.popup-container', {
      x: 400,
      opacity: 0,
      duration: 0.5,
      ease: 'power4.in',
      onComplete: () => setShow(false)
    });
  };

  if (!show || !newBlog) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] max-w-sm w-full popup-container">
      <div className="glass-dark rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 relative">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 bg-white/5 text-slate-400 p-2 rounded-full hover:bg-emerald-500/20 hover:text-emerald-500 transition-all z-20"
        >
           <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col">
           {newBlog.image && (
             <div className="relative w-full h-40">
                <Image src={newBlog.image || "/assets/emerald-abstract-geometric.png"} alt={newBlog.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
                   <Sparkles className="w-3 h-3" /> New Release
                </div>
             </div>
           )}
           
           <div className="p-6 pt-4 space-y-4">
              <div className="space-y-1">
                 <h4 className="text-xl font-bold text-white leading-tight line-clamp-2">
                    {newBlog.title}
                 </h4>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Bell className="w-3 h-3 text-emerald-500" /> Notifications Active
                 </p>
              </div>

              <p className="text-slate-400 text-sm line-clamp-2 font-medium leading-relaxed">
                 {newBlog.content}
              </p>

              <Link 
                href="/blog" 
                onClick={closePopup}
                className="w-full py-4 bg-emerald-500 text-slate-950 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
              >
                 Read Full Insight <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNotification;
