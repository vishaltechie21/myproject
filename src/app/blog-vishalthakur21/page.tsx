'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, FileText, CheckCircle2, ArrowLeft, Send, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function AdminPostBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isPosting, setIsPosting] = useState(false);
  const [posted, setPosted] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.admin-card > *', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPosting(true);

    // Simulate network delay
    setTimeout(() => {
      const newBlog = {
        id: Date.now(),
        title,
        content,
        image,
        date: new Date().toLocaleDateString(),
        isNew: true
      };

      // Save to local storage for demo purposes
      const existingBlogs = JSON.parse(localStorage.getItem('vishray_blogs') || '[]');
      localStorage.setItem('vishray_blogs', JSON.stringify([newBlog, ...existingBlogs]));
      localStorage.setItem('vishray_new_blog_added', 'true');

      setIsPosting(false);
      setPosted(true);

      // Animation for success
      gsap.from('.success-icon', {
        scale: 0,
        rotate: -180,
        duration: 1,
        ease: 'back.out(1.7)'
      });
    }, 1500);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-32">
      <div className="absolute top-0 left-0 w-full h-80 bg-yellow-400 -z-10 rounded-b-[4rem]" />
      
      <div className="max-w-3xl w-full admin-card">
         <div className="mb-8 flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all">
               <ArrowLeft className="w-5 h-5" /> Back to Blog
            </Link>
            <div className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest">
               Admin Console
            </div>
         </div>

         <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/20 relative overflow-hidden">
            {posted ? (
              <div className="text-center py-12 success-msg">
                 <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 success-icon">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4">Blog Posted Successfully!</h2>
                 <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    Your new insight is now live. New users will receive a popup notification when they visit the site.
                 </p>
                 <button 
                  onClick={() => router.push('/blog')}
                  className="px-10 py-4 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl"
                 >
                    View Blog Feed
                 </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                      <Sparkles className="w-6 h-6" />
                   </div>
                   <div>
                      <h1 className="text-2xl font-black text-slate-900">Post New Insight</h1>
                      <p className="text-sm text-slate-500 font-medium">Share your expert knowledge with the world.</p>
                   </div>
                </div>

                <form onSubmit={handlePost} className="space-y-8">
                   <div className="space-y-4">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-400 block ml-1">Upload Featured Image</label>
                      <div className="relative group">
                         {image ? (
                           <div className="relative w-full h-64 rounded-3xl overflow-hidden border-2 border-dashed border-yellow-400 group">
                              <Image src={image} alt="Preview" fill className="object-cover" />
                              <button 
                                type="button"
                                onClick={() => setImage(null)}
                                className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-red-500 transition-colors z-10"
                              >
                                 <ArrowLeft className="w-4 h-4 rotate-90" />
                              </button>
                           </div>
                         ) : (
                           <label className="w-full h-64 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:border-yellow-400 hover:bg-yellow-50/50 transition-all group">
                              <Upload className="w-10 h-10 text-slate-300 group-hover:text-yellow-600 mb-4 transition-colors" />
                              <span className="text-slate-500 font-bold">Select high-quality PNG or JPG</span>
                              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                           </label>
                         )}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-400 block ml-1">Insight Title</label>
                      <div className="relative">
                         <FileText className="absolute left-5 top-5 w-5 h-5 text-slate-400" />
                         <input 
                           required
                           type="text" 
                           placeholder="Enter a catchy title..." 
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900 font-bold"
                         />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-400 block ml-1">Blog Content</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Write your article content here..." 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900 font-medium"
                      />
                   </div>

                   <button 
                     disabled={isPosting}
                     type="submit"
                     className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                   >
                      {isPosting ? (
                        <>Processing...</>
                      ) : (
                        <>Publish Insight <Send className="w-5 h-5" /></>
                      )}
                   </button>
                </form>
              </>
            )}
         </div>
      </div>
    </div>
  );
}
