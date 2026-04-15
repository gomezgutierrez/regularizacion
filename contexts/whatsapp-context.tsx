"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { WhatsAppModal } from "@/components/whatsapp-modal";

interface WhatsAppContextProps {
    openWhatsApp: (message: string) => void;
}

const WhatsAppContext = createContext<WhatsAppContextProps | undefined>(undefined);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const openWhatsApp = (msg: string) => {
        setMessage(msg);
        setIsOpen(true);
    };

    const closeWhatsApp = () => {
        setIsOpen(false);
    };

    return (
        <WhatsAppContext.Provider value={{ openWhatsApp }}>
            {children}
            {isOpen && <WhatsAppModal message={message} onClose={closeWhatsApp} />}
        </WhatsAppContext.Provider>
    );
}

export function useWhatsApp() {
    const context = useContext(WhatsAppContext);
    if (!context) {
        throw new Error("useWhatsApp must be used within a WhatsAppProvider");
    }
    return context;
}
