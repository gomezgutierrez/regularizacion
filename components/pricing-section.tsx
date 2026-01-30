
"use client";

import { useState } from "react";
import { ArrowRight, Check, Scale } from "lucide-react";
import { WaitingListModal } from "@/components/waiting-list-modal";

export function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200" id="estudio-viabilidad">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Empieza con Seguridad</h2>
                    <p className="text-lg text-slate-600">
                        Valida tu caso antes de arriesgarte. Nuestros expertos confirman si cumples los requisitos.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row">

                    {/* Left: Value Prop */}
                    <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Estudio de Viabilidad</h3>
                        <p className="text-accent font-bold mb-6">Regularización 2026</p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Análisis documental previo (Empadronamiento, etc.)",
                                "Confirmación de cumplimiento de requisitos ROEX",
                                "Informe de vías disponibles para tu perfil",
                                "Hoja de ruta personalizada y plazos",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                            <Scale className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                            <p className="text-sm text-blue-800">
                                <strong>Garantía de Inversión:</strong> El importe de 39€ es <u>100% descontable</u> de tus honorarios finales si contratas el trámite con nosotros.
                            </p>
                        </div>
                    </div>

                    {/* Right: Pricing & CTA */}
                    <div className="bg-slate-900 p-8 md:p-12 md:w-2/5 flex flex-col justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>

                        <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">Precio Servicio</div>
                        <div className="text-5xl font-bold text-white mb-2">39€</div>
                        <div className="text-slate-400 text-xs mb-8">IVA Incluido</div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                        >
                            SOLICITAR ESTUDIO
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-xs text-slate-500 mt-4">
                            Pago 100% seguro.
                            <br />
                            Servicio prestado por Inmaculada Moncho.
                        </p>
                    </div>

                </div>
            </div>

            <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
