'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Loader2
} from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

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
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        setIsSubmitting(false);
        formRef.current?.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    }, (error) => {
        console.log('Email failed to send:', error.text);
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
    <div className="flex flex-col w-full pb-24 bg-white">
      {/* Contact Hero */}
      <section className="bg-yellow-400 py-24 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Let&apos;s <span className="underline decoration-yellow-600 underline-offset-8">Build</span> Together
          </motion.h1>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto font-medium">
            Ready for your digital transformation? Reach out to our team of experts and let&apos;s turn your vision into a high-performance reality.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
           {/* Left Info Column */}
           <div className="space-y-12">
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
                <div className="absolute inset-0 bg-yellow-400/5 group-hover:opacity-10 opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                   <div className="space-y-4">
                      <MapPin className="w-12 h-12 text-slate-300 mx-auto" />
                      <div className="text-slate-400 font-bold uppercase tracking-widest text-sm">Interactive Map Placeholder</div>
                      <div className="text-xs text-slate-300 italic">123 Tech Square, Cyber City, Zip 1100XX</div>
                   </div>
                </div>
             </div>
           </div>

           {/* Right Form Column */}
           <div className="lg:pt-12">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-yellow-100 shadow-2xl shadow-yellow-400/5 relative"
             >
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
             </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
