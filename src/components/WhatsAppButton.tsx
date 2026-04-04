'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "919999999999"; // Placeholder
  const message = "Hi Vishray, I'm interested in your CRM solutions. Can we discuss?";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-sm whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
