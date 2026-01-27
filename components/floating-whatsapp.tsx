import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/34624945297?text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20la%20regularizaci%C3%B3n%202026."
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
