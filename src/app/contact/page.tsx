'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Future: Integrate with backend /api/leads or EmailJS
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-success/10 selection:text-success">
      {/* Contact Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-success/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 w-full">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-1.5 bg-success/5 text-success rounded-xl text-[10px] font-black uppercase tracking-widest border border-success/10 mb-4 lg:mb-0"
               >
                  <Mail className="w-4 h-4" /> Strategic Assistance
               </motion.div>
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="text-4xl md:text-6xl lg:text-9xl font-black text-slate-950 tracking-tighter leading-[0.9] italic uppercase"
               >
                  Initiate <br/> <span className="text-success underline decoration-8 decoration-success/10 underline-offset-8">Connection.</span>
               </motion.h1>
               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-500 text-lg md:text-2xl font-medium italic leading-relaxed max-w-2xl mx-auto lg:mx-0"
               >
                  Ready for premium sector velocity? Our team is available for firm consultations on your digital CRM blueprint.
               </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-white p-10 lg:p-20 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden"
               >
                  {isSubmitted && (
                    <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in zoom-in-95">
                       <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-10 h-10 text-success" />
                       </div>
                       <h3 className="text-3xl font-black text-slate-950 mb-2 uppercase italic">Success.</h3>
                       <p className="text-slate-500 font-medium italic">Our architectural team will respond within one business cycle.</p>
                       <button onClick={() => setIsSubmitted(false)} className="mt-8 text-success font-black uppercase tracking-widest text-[10px] hover:underline">Send Another Protocol</button>
                    </div>
                  )}

                  <h2 className="text-3xl font-black text-slate-950 mb-12 flex items-center gap-4 uppercase italic tracking-tighter">
                     <span className="w-12 h-12 rounded-2xl bg-success/5 flex items-center justify-center text-success border border-success/10">
                        <MessageSquare className="w-6 h-6" />
                     </span>
                     Direct Inbound
                  </h2>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                           <input required type="text" placeholder="Julian Thorne" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-950 focus:border-success outline-none transition-all font-bold placeholder:text-slate-300" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Protocol</label>
                           <input required type="email" placeholder="agent@vishray.io" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-950 focus:border-success outline-none transition-all font-bold placeholder:text-slate-300" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Sector Vertical</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-500 focus:border-success outline-none transition-all font-bold appearance-none">
                           <option>Real Estate Platform</option>
                           <option>Loan / DSA Hub</option>
                           <option>Finance Automation</option>
                           <option>Custom SaaS Logic</option>
                        </select>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message Body</label>
                        <textarea required rows={5} placeholder="Describe your operational requirements..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-950 focus:border-success outline-none transition-all font-bold resize-none placeholder:text-slate-300"></textarea>
                     </div>
                     <button disabled={isSubmitting} type="submit" className="w-full bg-success text-white font-black py-6 rounded-2xl transition-all shadow-xl shadow-success/20 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 uppercase tracking-widest text-lg">
                        {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Transmitting Logic <ArrowRight className="w-5 h-5" /></>}
                     </button>
                  </form>
               </motion.div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-10">
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100"
               >
                  <h3 className="text-xl font-black text-slate-950 mb-10 uppercase tracking-widest italic leading-none">Global HQ</h3>
                  <div className="space-y-10">
                     {[
                       { icon: <Mail className="w-5 h-5" />, label: "Direct Inbound", value: "hello@vishray.io" },
                       { icon: <Phone className="w-5 h-5" />, label: "Strategic Voice", value: "+91 999 000 8888" },
                       { icon: <MapPin className="w-5 h-5" />, label: "Operations Hub", value: "Skyline Tower, Mumbai, IN" }
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border border-slate-100 text-success shadow-sm group-hover:bg-success group-hover:text-white transition-all duration-500">
                             {item.icon}
                          </div>
                          <div>
                             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                             <div className="text-slate-950 font-black text-xl italic tracking-tighter">{item.value}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-success text-white p-12 rounded-[3.5rem] relative overflow-hidden group shadow-2xl shadow-success/20"
               >
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck className="w-8 h-8" />
                        <h3 className="text-xl font-black uppercase tracking-widest italic leading-none">Priority Support</h3>
                     </div>
                     <p className="text-white/80 mb-10 font-medium italic text-sm leading-relaxed">Existing institutional clients can initiate high-priority logic tickets through the enterprise cluster.</p>
                     <Link href="/" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] hover:gap-5 transition-all">
                        Portal Login <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
               </motion.div>

               {/* Map Mockup */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="aspect-video bg-slate-100 rounded-[3.5rem] border border-slate-100 overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 shadow-xl"
               >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.33230491873!2d72.808083!3d19.082197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625470000000!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  />
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
