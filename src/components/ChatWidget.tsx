'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Zap, Bot, User, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Welcome to Vishray Hub. I am your operational intelligence node. How can I assist with your Real Estate or Finance firm today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });
            const data = await res.json();
            if (data.message) {
                setMessages(prev => [...prev, data.message]);
            }
        } catch (error) {
            console.error('Chat Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Operational logic oscillation. Please re-synchronize or try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-10 right-10 z-[200]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-24 right-0 w-[450px] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col h-[700px] max-h-[85vh] transition-all"
                    >
                        {/* Compact Header */}
                        <div className="bg-slate-950 p-6 text-white relative shrink-0">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-3xl pointer-events-none" />
                             <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                             </button>
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center shadow-lg shadow-success/20">
                                   <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                   <h3 className="text-lg font-black uppercase italic tracking-tighter leading-none mb-1">Vishray Hub AI</h3>
                                   <div className="flex items-center gap-1.5 text-[7px] font-black uppercase tracking-[0.2em] text-success">
                                      <div className="w-1 h-1 rounded-full bg-success animate-pulse" /> Operational Intelligence
                                   </div>
                                </div>
                             </div>
                        </div>

                        {/* Maximized Message Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-white custom-scrollbar">
                            {messages.map((m, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${m.role === 'user' ? 'bg-slate-950 border-slate-900 text-white shadow-xl' : 'bg-success/5 border-success/10 text-success px-2 py-2 shadow-sm'}`}>
                                        {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] font-semibold italic leading-relaxed ${m.role === 'user' ? 'bg-slate-50 border border-slate-100 text-slate-900 rounded-tr-none' : 'bg-success/5 border border-success/10 text-slate-800 rounded-tl-none ring-1 ring-success/5 shadow-sm'}`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                                   <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center shadow-lg shadow-success/20">
                                      <Bot className="w-4 h-4 text-white animate-bounce" />
                                   </div>
                                   <div className="flex gap-1">
                                      <div className="w-1.5 h-1.5 bg-success/30 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                      <div className="w-1.5 h-1.5 bg-success/30 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                      <div className="w-1.5 h-1.5 bg-success/30 rounded-full animate-bounce" />
                                   </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Refined Input Area */}
                        <form onSubmit={handleSend} className="p-6 bg-slate-50/50 border-t border-slate-100 shrink-0">
                             <div className="relative group">
                                <input 
                                   value={input} 
                                   onChange={(e) => setInput(e.target.value)} 
                                   placeholder="Query vishray protocols..." 
                                   className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-[13px] font-black italic focus:outline-none focus:border-success transition-all pr-16 uppercase tracking-tight shadow-sm" 
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-success text-white rounded-xl flex items-center justify-center shadow-lg shadow-success/20 hover:scale-105 active:scale-95 transition-all">
                                   <Send className="w-5 h-5" />
                                </button>
                             </div>
                             <div className="mt-4 flex items-center justify-between text-[7px] font-black uppercase tracking-[0.3em] text-slate-400">
                                <span className="flex items-center gap-1"><Zap className="w-2.5 h-2.5 text-success" /> Node V-v2 Master</span>
                                <span className="flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5" /> Institutional Security Node</span>
                             </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bubble */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 overflow-hidden relative group ${isOpen ? 'bg-slate-900 border-4 border-white' : 'bg-success border-4 border-success/10'}`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="x" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                            <X className="w-8 h-8" />
                        </motion.div>
                    ) : (
                        <motion.div key="msg" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                            <MessageSquare className="w-8 h-8" />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                   <motion.div 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                   />
                )}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
            </motion.button>
        </div>
    );
};

export default ChatWidget;
