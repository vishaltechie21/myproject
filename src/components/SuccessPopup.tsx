'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  autoCloseMs?: number;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({
  isOpen,
  onClose,
  title = 'Thank you!',
  message = 'Your form has been submitted successfully.',
  autoCloseMs = 2500,
}) => {
  useEffect(() => {
    if (!isOpen || autoCloseMs <= 0) return;
    const timer = setTimeout(onClose, autoCloseMs);
    return () => clearTimeout(timer);
  }, [isOpen, autoCloseMs, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-300">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close success popup"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-center text-2xl font-black italic tracking-tight text-slate-950">{title}</h3>
        <p className="mt-2 text-center text-slate-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default SuccessPopup;