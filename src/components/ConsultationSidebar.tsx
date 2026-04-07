'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar, X, Send, User, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import SuccessPopup from './SuccessPopup';

const ConsultationSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const panelRef = useRef(null);
  const backdropRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Residential',
    message: '',
  });

  const propertyTypes = ['Residential', 'Commercial', 'Land', 'Industrial', 'Luxury'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, display: 'block' });
      gsap.to(panelRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(panelRef.current, { x: '-100%', opacity: 0, duration: 0.5, ease: 'power3.in' });
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.3, onComplete: () => {
        if (backdropRef.current) (backdropRef.current as any).style.display = 'none';
      }});
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual Email.js credentials: service_id, template_id, public_key
    // Note: I'm using placeholders as standard implementation practice
    try {
      await emailjs.send(
        'service_id', // Add your service ID
        'template_id', // Add your template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          property_type: formData.propertyType,
          message: formData.message,
          to_email: 'precision@vishray.io', // Your email
        },
        'public_key' // Add your public key
      );
      
      setShowSuccessPopup(true);
      setIsOpen(false);
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', propertyType: 'Residential', message: '' });
    } catch (error) {
      console.error('Email.js Error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      {/* Floating Trigger - Left Side */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60]">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-2xl py-6 px-3 shadow-2xl transition-all duration-300 active:scale-95 border-r border-t border-b border-emerald-500/50"
        >
          <div className="flex flex-col items-center gap-4">
             <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
             <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
               Book Consultation
             </span>
          </div>
        </button>
      </div>

      {/* Backdrop */}
      <div 
        ref={backdropRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[70] hidden"
        style={{ opacity: 0 }}
      />

      {/* Side Panel */}
      <div 
        ref={panelRef}
        className="fixed top-0 left-0 h-full w-full max-w-md bg-white z-[80] shadow-[30px_0_60px_-15px_rgba(0,0,0,0.3)] border-r border-slate-100 flex flex-col"
        style={{ transform: 'translateX(-100%)', opacity: 0 }}
      >
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="text-2xl font-black text-slate-950 tracking-tight uppercase">High-Fidelity</h2>
            <p className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em]">Consultation Protocol</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-3 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-xl transition-all border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <User className="w-3 h-3 text-emerald-500" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 outline-none focus:border-emerald-500 transition-colors font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Mail className="w-3 h-3 text-emerald-500" /> Professional Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="e.g., john@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 outline-none focus:border-emerald-500 transition-colors font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                   Property Type
                 </label>
                 <div className="grid grid-cols-2 gap-2">
                    {propertyTypes.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, propertyType: type})}
                        className={`p-3 rounded-lg text-xs font-bold border transition-all ${
                          formData.propertyType === type 
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                   <MessageSquare className="w-3 h-3 text-emerald-500" /> Message (Optional)
                 </label>
                 <textarea
                   rows={4}
                   placeholder="Tell us about your requirements..."
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 outline-none focus:border-emerald-500 transition-colors font-medium resize-none"
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                 />
              </div>

              <button
                disabled={status === 'sending'}
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-emerald-500/20 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Request <Send className="w-5 h-5" /></>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-xs font-bold text-center">Protocol failed. Please try again or contact support.</p>
              )}
            </form>
        </div>

        <div className="p-8 border-t border-slate-100 bg-slate-50/50">
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
            By initiating this protocol, you agree to our 24h operational response SLA.
          </p>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Thank you!"
        message="Consultation request submitted. We will contact you soon."
      />
    </>
  );
};

export default ConsultationSidebar;
