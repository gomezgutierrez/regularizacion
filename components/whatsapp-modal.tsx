"use client";

import React, { useState } from "react";
import { X, MessageCircle, Phone, ArrowRight } from "lucide-react";

interface WhatsAppModalProps {
    message: string;
    onClose: () => void;
}

export function WhatsAppModal({ message, onClose }: WhatsAppModalProps) {
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!phone.trim()) return;

        setIsSubmitting(true);

        try {
            // Register lead in Jira via backend
            await fetch('/api/track-whatsapp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    phoneNumber: phone,
                    message: message,
                    originUrl: typeof window !== 'undefined' ? window.location.href : 'Desconocida'
                })
            });

            // Redirect to typical WA Link
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/34614731773?text=${encodedMessage}`, '_blank');
            
            // Close after opening WA
            onClose();

        } catch (err) {
            console.error("Error tracker whatsapp", err);
            // Fallback, just open WA anyway
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/34614731773?text=${encodedMessage}`, '_blank');
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300 relative border border-slate-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="bg-green-500 p-6 text-white text-center rounded-b-[40px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-transparent opacity-50"></div>
                    <MessageCircle className="w-12 h-12 mx-auto mb-3 relative z-10 animate-bounce" style={{animationDuration: '2s'}}/>
                    <h2 className="text-xl font-bold relative z-10">Chat de Asesoramiento</h2>
                    <p className="text-sm text-green-100 mt-1 relative z-10">Habla con uno de nuestros abogados ahora.</p>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Antes de abrir WhatsApp, indícanos tu número:
                        </label>
                        <div className="relative mb-6">
                            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                            <input 
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+34 600 000 000"
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting || !phone.trim()}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-green-500/30 transition-all active:scale-[0.98] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Abrir WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-slate-400 mt-4">
                            Tus datos están protegidos por secreto profesional.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
