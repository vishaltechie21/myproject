'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white rounded-[2rem] w-full max-w-lg relative z-10 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-black text-slate-950 mb-2 uppercase italic leading-none">
            Book <span className="text-success text-4xl">Demo.</span>
          </h2>
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
            Take the architectural leap with Vishray's high-fidelity CRM ecosystems.
          </p>

          <LeadForm />
        </div>

        <div className="bg-slate-50/50 p-6 text-center border-t border-slate-100">
           <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Confidentiality Assured • ISO 27001 Compliant</div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
