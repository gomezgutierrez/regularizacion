
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, ShieldCheck, Scale, FileText } from "lucide-react";
import { WaitingListModal } from "@/components/waiting-list-modal";

export default function EstudioViabilidadPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-slate-50 pt-20">

            {/* Background decoration */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-slate-900 -z-10"></div>

            <div className="container mx-auto px-4 py-12">

                {/* Breadcrumb / Back Link */}
                <div className="mb-8">
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors flex items-center text-sm font-medium">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Volver al Inicio
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* PRODUCT IMAGE / VISUAL */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12 relative z-10 border border-slate-100">
                            <div className="absolute top-0 right-0 bg-accent text-white font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider text-xs">
                                Producto Destacado
                            </div>

                            <div className="flex justify-center mb-8 text-accent">
                                <Scale className="w-24 h-24 opacity-90" />
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight text-center">
                                Estudio de Viabilidad<br />
                                <span className="text-accent">Regularización 2026</span>
                            </h1>

                            <div className="text-center mb-8">
                                <span className="text-5xl font-bold text-slate-900 block mb-2">39,00 €</span>
                                <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">IVA Incluido</span>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
                                <p className="text-blue-800 text-sm font-medium text-center">
                                    🔥 <strong>Oferta de Lanzamiento:</strong> El coste de este estudio (39€) se <u>descontará íntegramente</u> si decides contratar el trámite completo con nosotros.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-5 rounded-xl shadow-xl shadow-red-600/20 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                            >
                                CONTRATAR CONSULTA
                                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-center text-slate-400 mt-4">
                                Pago seguro. Garantía de satisfacción.
                            </p>
                        </div>

                        {/* Decorative blob behind */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="text-white pt-4 lg:pl-10">

                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <ShieldCheck className="w-8 h-8 text-accent mr-3" />
                                ¿Qué incluye este servicio?
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                No arriesgues tu futuro. Antes de iniciar cualquier trámite, realizamos un <strong>análisis jurídico exhaustivo</strong> de tu situación personal para confirmar que cumples con todos los requisitos del nuevo Reglamento de Extranjería.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-xl mb-2 text-white">1. Análisis Documental</h3>
                                <p className="text-slate-400">Revisión de tu empadronamiento, antecedentes y fechas de entrada para asegurar viabilidad.</p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-xl mb-2 text-white">2. Informe de Opciones</h3>
                                <p className="text-slate-400">Te confirmamos por escrito cuál es la vía más segura para regularizarte (Arraigo Socio-Laboral, 2ª Oportunidad, etc.).</p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-xl mb-2 text-white">3. Hoja de Ruta Personalizada</h3>
                                <p className="text-slate-400">Te explicamos paso a paso qué documentos necesitarás y los plazos estimados.</p>
                            </div>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                            <h3 className="font-bold text-white mb-4 flex items-center">
                                <FileText className="w-5 h-5 mr-2 text-slate-400" />
                                Garantía de Profesionalidad
                            </h3>
                            <p className="text-slate-400 text-sm">
                                Servicio prestado directamente por <strong>Inmaculada Moncho Giner</strong>, abogada colegiada especialista en extranjería. Toda la información tratada está protegida por el secreto profesional.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
