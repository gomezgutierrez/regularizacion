"use client";

import { useWhatsApp } from "@/contexts/whatsapp-context";

interface WhatsAppButtonProps {
    message: string;
    children: React.ReactNode;
    className?: string;
}

export function WhatsAppButton({ message, children, className }: WhatsAppButtonProps) {
    const { openWhatsApp } = useWhatsApp();

    return (
        <button 
            onClick={() => openWhatsApp(message)}
            className={className}
        >
            {children}
        </button>
    );
}
