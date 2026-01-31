
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
                    <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Estudio de Viabilidad</h3>
                        <div className="max-w-md mx-auto relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 border border-slate-100 overflow-hidden">

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-xs tracking-wider uppercase mb-4">
                                        Llave en Mano
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                        Plan de Regularización Integral 2026
                                    </h3>
                                    <div className="flex justify-center items-baseline gap-2 mb-1">
                                        <span className="text-5xl font-extrabold text-slate-900">39€</span>
                                        <span className="text-slate-500 font-medium">/ inicio</span>
                                    </div>
                                    <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-[11px] font-bold border border-purple-200 mt-2">
                                        ✨ 100% DEDUCIBLE DEL TRÁMITE FINAL (350€)
                                    </div>
                                </div>

                                {/* Features List (Body) */}
                                <ul className="space-y-4 mb-8 text-left">
                                    <li className="flex items-start">
                                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-800 block">Estudio de Viabilidad Personalizado</span>
                                            <span className="text-xs text-slate-500">Paso 1: Análisis de requisitos.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-800 block">Preparación y Revisión</span>
                                            <span className="text-xs text-slate-500">Criterio Abogada ICAV 14318.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-800 block">Presentación y Seguimiento</span>
                                            <span className="text-xs text-slate-500">Registro telemático y vigilancia diaria.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                            <Check className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-slate-800 block text-blue-800">Defensa Jurídica Completa</span>
                                            <span className="text-xs text-slate-500">Respuesta a requerimientos y Recurso incluido.</span>
                                        </div>
                                    </li>
                                </ul>

                                {/* CTA */}
                                <a
                                    href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                                >
                                    PAGAR ESTUDIO DE VIABILIDAD - 39€
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <p className="text-xs text-center text-slate-500 mt-4 leading-relaxed max-w-xs mx-auto">
                                    Este pago se restará del coste total (350€).<br />
                                    <strong>Inicia hoy por solo 39€. Transparencia total.</strong>
                                </p>

                            </div>
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

                        <a
                            href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/20 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                        >
                            PAGAR ESTUDIO DE VIABILIDAD - 39€
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-xs text-center text-slate-500 mt-3 font-medium">
                            * Importe 100% deducible del trámite final (350€)
                        </p>

                        <p className="text-xs text-slate-500 mt-4">
                            Pago 100% seguro.
                            <br />
                            Servicio prestado por Inmaculada Moncho.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
