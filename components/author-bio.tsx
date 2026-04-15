import { MessageCircle, Award } from "lucide-react";
import { useWhatsApp } from "@/contexts/whatsapp-context";

export function AuthorBio() {
    const { openWhatsApp } = useWhatsApp();
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-12 flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 relative">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-md">
                    IM
                </div>
            </div>

            <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                    Revisado por Abogada
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Inmaculada Moncho
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                    Colegiada nº 14318 (ICAV). Especialista en Regularización y Extranjería.
                    Garantizamos tu trámite con seguridad jurídica.
                </p>

                <button
                    onClick={() => openWhatsApp("Hola Inmaculada, he leído tu artículo y quiero revisar mi caso.")}
                    className="inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200 transition-colors"
                >
                    <MessageCircle className="w-4 h-4" />
                    Consultar viabilidad por WhatsApp
                </button>
            </div>
        </div>
    );
}
