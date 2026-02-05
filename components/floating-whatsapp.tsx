"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export function FloatingWhatsApp() {
    const pathname = usePathname();

    // Default message (ES)
    let message = "Hola, quisiera información sobre el estudio de viabilidad.";

    // English message
    if (pathname?.startsWith("/en")) {
        message = "Hello, I would like information about the Amnesty/Regularization 2026.";
    }

    // French message
    if (pathname?.startsWith("/fr")) {
        message = "Bonjour, je voudrais des informations sur la Régularisation 2026.";
    }

    const encodedMessage = encodeURIComponent(message);

    return (
        <a
            href={`https://wa.me/34642717109?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full shadow-2xl transition-all transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-500"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:inline">Abogado Online</span>
        </a>
    );
}
