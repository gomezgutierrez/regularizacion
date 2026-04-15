"use client";

import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/contexts/whatsapp-context";

export function FinalCta() {
    const { openWhatsApp } = useWhatsApp();
    return (
        <section className="py-16 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    No dejes que se pase la oportunidad
                </h2>
                <p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                    La abogada revisará tu caso personalmente. Sin bots, sin esperas innecesarias.
                    Solo información real y honesta.
                </p>

                <button
                    aria-label="Hablar ahora con una abogada por WhatsApp"
                    onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).dataLayer) {
                            (window as any).dataLayer.push({ event: 'whatsapp_bottom_click' });
                        }
                        openWhatsApp("Hola, deseo recibir asesoramiento e iniciar mi trámite de Regularización Extraordinaria 2026.");
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/20 transition-all transform hover:-translate-y-1 min-h-[56px]"
                >
                    <MessageCircle className="w-6 h-6" />
                    Hablar ahora con una abogada por WhatsApp
                </button>

                <p className="mt-6 text-sm text-slate-400">
                    Respuesta media: Menos de 2 horas en horario laboral.
                </p>
            </div>
        </section>
    );
}
