'use client';

import React, { useState } from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Real Estate',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to capture lead');
      }
    } catch (error) {
      console.error('Network Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-success" />
        </div>
        <h4 className="text-2xl font-black text-slate-950 mb-2 italic">SUCCESS.</h4>
        <p className="text-slate-500 font-medium">Wait for our protocol experts to reach out.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Agent Name</label>
        <input
          required
          type="text"
          placeholder="Enter full name"
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-success transition-all font-bold placeholder:text-slate-300"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
        <input
          required
          type="tel"
          placeholder="91-XXXXX-XXXXX"
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-success transition-all font-bold placeholder:text-slate-300"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Niche</label>
        <select
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-success transition-all font-bold text-slate-500 appearance-none bg-no-repeat bg-[right_1.5rem_center]"
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
        >
          <option>Real Estate</option>
          <option>Loan Agent / DSA</option>
          <option>Finance Sector</option>
          <option>Tech Advisor</option>
        </select>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-success text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl shadow-success/20 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        बुक करें फ्री डेमो
      </button>
    </form>
  );
};

export default LeadForm;
