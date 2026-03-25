'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Loader2
} from 'lucide-react';
import React, { useRef, useLayoutEffect } from 'react';
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
      gsap.from('.contact-hero > *', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.contact-info > *', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.contact-form-card', {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
        },
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
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
    .then((result) => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        formRef.current?.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    }, (error) => {
        setError('Failed to send message. Please try again later.');
        setIsSubmitting(false);
    });
  };

  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5 text-yellow-600" />,
      label: 'Email Us',
      value: 'hello@vishray.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-yellow-600" />,
      label: 'Call Us',
      value: '+91 123 456 7890'
    },
    {
      icon: <MapPin className="w-5 h-5 text-yellow-600" />,
      label: 'Our Office',
      value: 'Tech Square, Smart City, India'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col w-full pb-24 bg-white pt-32 lg:pt-40">
      {/* Contact Hero */}
      <section className="bg-yellow-400 py-24 border-b border-yellow-500/20 contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Let&apos;s <span className="underline decoration-yellow-600 underline-offset-8">Build</span> Together
          </h1>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto font-medium">
            Ready for your digital transformation? Reach out to our team of experts and let&apos;s turn your vision into a high-performance reality.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 contact-section">
        <div className="grid lg:grid-cols-2 gap-20">
           {/* Left Info Column */}
           <div className="contact-info space-y-12">
             <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
                <p className="text-slate-600 leading-relaxed text-lg italic">
                   &ldquo;We believe in open lines of communication. Whether you have a specific project inquiry or just want to explore how we can help, our team is standing by.&rdquo;
                </p>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactOptions.map((option, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-yellow-50 rounded-[2rem] border border-yellow-100 shadow-sm group hover:scale-[1.02] transition-transform">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors duration-300 shadow-sm">
                        {option.icon}
                     </div>
                     <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{option.label}</div>
                        <div className="text-slate-900 font-bold">{option.value}</div>
                     </div>
                  </div>
                ))}
             </div>

             {/* Map Placeholder */}
             <div className="aspect-[16/9] w-full bg-slate-50 rounded-[2rem] overflow-hidden relative border border-yellow-101 group shadow-inner">
                 <div className="flex-1 w-full h-[450px] bg-slate-100 rounded-[3.5rem] overflow-hidden border-2 border-slate-50 relative group shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.487802161358!2d77.60833134999999!3d12.98006275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670cdc10973%3A0xf09304151fa1f608!2sMG%20Road%20Metro%20Station!5e0!3m2!1sen!2sin!4v1711383400512!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg text-center font-bold text-slate-800 pointer-events-none group-hover:translate-y-20 transition-transform">
                       Visit our Innovation Hub in Bangalore
                    </div>
                 </div>
             </div>
           </div>

           {/* Right Form Column */}
           <div className="lg:pt-12">
             <div className="contact-form-card bg-white p-8 md:p-12 rounded-[3.5rem] border border-yellow-100 shadow-2xl shadow-yellow-400/5 relative">
               {isSubmitted && (
                 <div className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center p-8 text-center rounded-[3.5rem]">
                    <CheckCircle2 className="w-20 h-20 text-yellow-500 mb-6 drop-shadow-lg" />
                    <h3 className="text-2xl font-black mb-2 text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-slate-600">Our solution architects will get back to you within 24 hours.</p>
                 </div>
               )}

               <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-slate-900 shadow-lg">
                     <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Send us a Message</h3>
               </div>

               {error && (
                 <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
                   {error}
                 </div>
               )}

               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                   <input 
                     required
                     name="from_name"
                     type="text" 
                     placeholder="John Doe" 
                     className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900"
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                   <input 
                     required
                     name="reply_to"
                     type="email" 
                     placeholder="john@example.com" 
                     className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900"
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 ml-1">Your Project Detail</label>
                   <textarea 
                     required
                     name="message"
                     rows={5} 
                     placeholder="Tell us about your requirements..." 
                     className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-yellow-400 focus:ring-0 outline-none transition-all text-slate-900 resize-none"
                   ></textarea>
                 </div>

                 <button 
                   disabled={isSubmitting}
                   type="submit"
                   className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? (
                     <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                     </>
                   ) : (
                     <>
                        Send Message <Send className="w-5 h-5" />
                     </>
                   )}
                 </button>
               </form>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
