'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Loader2,
  ArrowRight
} from 'lucide-react';
import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero > *', { y: 30, opacity: 0, stagger: 0.2, duration: 1, ease: 'power3.out' });
      gsap.from('.contact-card', {
        scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setError('');

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id', 
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        formRef.current?.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    }, () => {
        setError('Failed to send message. Please try again later.');
        setIsSubmitting(false);
    });
  };

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center contact-hero">
           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
             <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Contact Support</span>
           </div>
           <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-8 italic">
              The Logic of <span className="text-emerald-500">Precision</span> Starts Here.
           </h1>
           <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Connect with our architectural support team to discuss scaling your operational velocity with Vishray Technologies.
           </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 contact-grid">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7 contact-card">
               <div className="glass-dark p-10 lg:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
                  {isSubmitted && (
                    <div className="absolute inset-0 z-20 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
                       <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
                       <h3 className="text-3xl font-bold text-white mb-2">Message Transmitted</h3>
                       <p className="text-slate-400">Our architects will respond within one business cycle.</p>
                    </div>
                  )}

                  <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                     <span className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-emerald-500" />
                     </span>
                     Transmission Details
                  </h2>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                           <input required name="from_name" type="text" placeholder="Julian Thorne" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 outline-none transition-all font-medium" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Protocol</label>
                           <input required name="reply_to" type="email" placeholder="j.thorne@agency.io" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 outline-none transition-all font-medium" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service Vertical</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 outline-none transition-all font-medium appearance-none">
                           <option className="bg-slate-900">CRM Implementation</option>
                           <option className="bg-slate-900">Data Engineering</option>
                           <option className="bg-slate-900">High-Fidelity UI/UX</option>
                           <option className="bg-slate-900">Operational Audit</option>
                        </select>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message Body</label>
                        <textarea required name="message" rows={6} placeholder="Detail your operational requirements..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 outline-none transition-all font-medium resize-none"></textarea>
                     </div>
                     <button disabled={isSubmitting} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50">
                        {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Execute Transmission <Send className="w-5 h-5" /></>}
                     </button>
                  </form>
               </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-8 contact-card">
               <div className="glass-dark p-10 rounded-[3rem] border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-8">Architectural Support</h3>
                  <div className="space-y-8">
                     {[
                       { icon: <Mail className="w-5 h-5 text-emerald-500" />, label: "Direct Inbound", value: "precision@vishray.io" },
                       { icon: <Phone className="w-5 h-5 text-emerald-500" />, label: "Priority Voice", value: "+1 (888) 555-0129" },
                       { icon: <MapPin className="w-5 h-5 text-emerald-500" />, label: "Global HQ", value: "1200 Precision Way, SF" }
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-6">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                             {item.icon}
                          </div>
                          <div>
                             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                             <div className="text-white font-medium text-lg">{item.value}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="glass-dark p-10 rounded-[3rem] border border-white/5 bg-slate-900 relative overflow-hidden group">
                  <div className="relative z-10">
                     <h3 className="text-xl font-bold text-white mb-4">Priority Support Ticket</h3>
                     <p className="text-slate-400 mb-8 font-medium">Existing clients can initiate high-priority logic tickets through the enterprise portal.</p>
                     <Link href="/portal" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                        Enter Portal <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
               </div>

               {/* Map Mockup */}
               <div className="aspect-video lg:aspect-square bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1865045610842!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4451%3A0x7aa27303c20c0211!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625470000000!5m2!1sen!2sus"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="opacity-80"
                  />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
