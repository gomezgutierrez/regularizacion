
"use client";

import { ArrowRight, Check, Scale } from "lucide-react";

export function PricingSection() {
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
                    {/* Left: Value Prop */}
                    <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Estudio de Viabilidad</h3>
                        <p className="text-accent font-bold mb-6">Regularización 2026</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">Análisis documental previo (Empadronamiento, etc.)</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">Confirmación de cumplimiento de requisitos ROEX</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">Informe de vías disponibles para tu perfil</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">Hoja de ruta personalizada y plazos</span>
                            </li>
                        </ul>

                        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-start">
                            <Scale className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                            <p className="text-sm text-purple-900">
                                <strong>100% DEDUCIBLE:</strong> Si tras el estudio contratamos el trámite completo (350€), <span className="underline decoration-purple-400 decoration-2 underline-offset-2">te descontamos estos 39€</span>.
                            </p>
                        </div>
                    </div>

                    {/* Right: Pricing & CTA */}
                    <div className="bg-slate-900 p-8 md:p-12 md:w-2/5 flex flex-col justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>

                        <div className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wide">Servicio Integral</div>
                        <div className="text-5xl font-bold text-white mb-2">350€</div>
                        <div className="text-slate-400 text-xs mb-8">IVA Incluido</div>

                        <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
                            <li className="flex items-start"><Check className="w-4 h-4 text-accent mr-2 mt-0.5" /> <span>Análisis de viabilidad (incluido)</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 text-accent mr-2 mt-0.5" /> <span>Preparación y presentación</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 text-accent mr-2 mt-0.5" /> <span>Respuesta a requerimientos</span></li>
                            <li className="flex items-start"><Check className="w-4 h-4 text-accent mr-2 mt-0.5" /> <span>Recurso de Reposición incluido</span></li>
                        </ul>

                        <a
                            href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                        >
                            INICIAR POR 39€
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-xs text-center text-slate-500 mt-3 font-medium">
                            * Pagas 39€ hoy y el resto al tramitar.
                        </p>

                        <p className="text-xs text-slate-500 mt-4">
                            Pago 100% seguro.
                            <br />
                            Servicio prestado por Inmaculada Moncho (ICAV 14318).
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
