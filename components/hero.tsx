
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { CaseCounter } from "@/components/case-counter";

export function Hero() {
    return (
        <section id="contacto" className="relative bg-gradient-to-b from-slate-50 to-white pt-10 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-bold tracking-wide mb-8 border border-blue-100 shadow-sm animate-in fade-in zoom-in duration-500">
                        <ShieldCheck className="w-4 h-4" />
                        Abogada Colegiada ICAV 14318
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Tu Residencia en España 2026: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Gestión Profesional de Principio a Fin
                        </span>
                    </h1>

                    <h2 className="text-xl lg:text-2xl font-medium text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                        Como abogada colegiada (ICAV 14318), te acompaño en todo el proceso de regularización. Un servicio integral, transparente y sin sorpresas.
                    </h2>

                    <div className="flex flex-col items-center gap-4 w-full justify-center mb-12">
                        <a
                            href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-lg font-bold py-5 px-10 rounded-full shadow-xl shadow-accent/20 transition-all transform hover:scale-105 flex items-center justify-center group"
                        >
                            INICIAR ESTUDIO DE VIABILIDAD - 39€
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="bg-purple-50 px-6 py-3 rounded-xl border border-purple-100 flex flex-col md:flex-row items-center gap-2 text-center md:text-left mt-2 max-w-xl">
                            <div className="bg-white p-1 rounded-full shadow-sm">
                                <CheckCircle className="w-5 h-5 text-purple-600" />
                            </div>
                            <p className="text-sm text-purple-900 leading-snug">
                                <strong>Importe 100% deducible del trámite completo (350€).</strong><br />
                                <span className="text-purple-700/80">Tu seguridad jurídica empieza aquí.</span>
                            </p>
                        </div>
                    </div>

                    <CaseCounter />

                    <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
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
            </div>
        </section>
    );
}
