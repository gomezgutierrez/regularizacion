
import { CheckCircle2, FileText, Scale } from "lucide-react";

export function StepsSection() {
    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">El Plan de Gestión Integral</h2>
                    <p className="text-slate-500 mt-2">Tu camino hacia la regularización en 3 pasos claros</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                    {/* Step 1 */}
                    <div className="relative bg-white pt-4">
                        <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm z-10 relative">
                            <FileText className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="text-center px-4">
                            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PASO 1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Análisis de Viabilidad</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-3">39€</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Evaluamos tu caso para garantizar que cumples los requisitos antes de iniciar.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white pt-4">
                        <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm z-10 relative">
                            <CheckCircle2 className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="text-center px-4">
                            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PASO 2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Gestión y Presentación</h3>
                            <p className="text-2xl font-bold text-slate-900 mb-3">311€ <span className="text-xs text-slate-400 font-normal">(restantes)</span></p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Preparamos tu expediente y lo presentamos telemáticamente ante la administración.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-white pt-4">
                        <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm z-10 relative">
                            <Scale className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="text-center px-4">
                            <div className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PASO 3</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Éxito y Seguimiento</h3>
                            <p className="text-lg font-bold text-green-600 mb-3">INCLUIDO</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Vigilancia del expediente y respuesta a requerimientos (Recurso incluido).
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
