
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle, Check, Scale } from "lucide-react";
import { CaseCounter } from "@/components/case-counter";

export function Hero() {
    return (
        <section id="contacto" className="relative bg-gradient-to-b from-slate-50 to-white pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

                    {/* Left Column: Hero Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-bold tracking-wide mb-8 border border-blue-100 shadow-sm animate-in fade-in zoom-in duration-500">
                            <ShieldCheck className="w-4 h-4" />
                            Abogada Colegiada ICAV 14318
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Regularización Masiva 2026 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Tu Trámite de Extranjería
                            </span>
                        </h1>

                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                            Presenta tu expediente con máximas garantías legales
                        </h2>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            La ventana de solicitud será breve y estricta. <br className="hidden md:inline" />
                            No arriesgues tu futuro con errores burocráticos.
                        </p>

                        <div className="flex flex-col items-center lg:items-start gap-4 w-full mb-12">
                            <a
                                href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-lg font-bold py-5 px-10 rounded-full shadow-xl shadow-accent/20 transition-all transform hover:scale-105 flex items-center justify-center group"
                            >
                                INICIAR ESTUDIO DE VIABILIDAD - 39€
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2 text-sm text-slate-500">
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Trámite 100% Online
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Colegiada ICAV 14318
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Respuesta en 24h
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Pricing Card (Exact Replica) */}
                    <div className="w-full">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row">
                            {/* Left side of Card: Features */}
                            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between bg-white relative z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Estudio de Viabilidad</h3>
                                    <p className="text-[#E91E63] font-bold mb-6 text-sm">Regularización 2026</p>

                                    <ul className="space-y-4 mb-8 text-sm">
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
                                </div>

                                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-start">
                                    <Scale className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                                    <p className="text-xs text-purple-900 leading-relaxed">
                                        <strong>100% DEDUCIBLE:</strong> Si tras el estudio contratamos el trámite completo (350€), <span className="underline decoration-purple-400 decoration-2 underline-offset-2">te descontamos estos 39€</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Right side of Card: Dark Offers */}
                            <div className="bg-[#0f172a] p-6 md:p-8 md:w-2/5 flex flex-col justify-center text-center relative overflow-hidden text-white">
                                <div className="absolute top-0 right-0 bg-[#E91E63] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                                    POPULAR
                                </div>

                                <div className="text-slate-400 text-xs font-medium mb-1 uppercase tracking-wide mt-2">Servicio Integral</div>
                                <div className="text-5xl font-bold text-white mb-2">350€</div>
                                <div className="text-slate-400 text-[10px] mb-6">IVA Incluido</div>

                                <ul className="text-left space-y-3 mb-8 text-[11px] text-slate-300 hidden md:block pl-2">
                                    <li className="flex items-start"><Check className="w-3 h-3 text-[#E91E63] mr-2 mt-0.5" /> <span>Análisis de viabilidad (incluido)</span></li>
                                    <li className="flex items-start"><Check className="w-3 h-3 text-[#E91E63] mr-2 mt-0.5" /> <span>Preparación y presentación</span></li>
                                    <li className="flex items-start"><Check className="w-3 h-3 text-[#E91E63] mr-2 mt-0.5" /> <span>Respuesta a requerimientos</span></li>
                                    <li className="flex items-start"><Check className="w-3 h-3 text-[#E91E63] mr-2 mt-0.5" /> <span>Recurso de Reposición incluido</span></li>
                                </ul>

                                <a
                                    href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#E91E63] hover:bg-[#d81b60] text-white font-bold py-3 rounded-xl shadow-lg shadow-pink-900/20 transition-all transform hover:scale-[1.02] flex items-center justify-center group"
                                >
                                    INICIAR POR 39€
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <p className="text-[10px] text-center text-slate-500 mt-3 font-medium">
                                    * Pagas 39€ hoy y el resto al tramitar.
                                </p>

                                <p className="text-[10px] text-slate-600 mt-4 leading-tight">
                                    Pago 100% seguro.
                                    <br />
                                    Servicio prestado por Inmaculada Moncho (ICAV 14318).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
