
import { Check, Shield, FileText, Scale, Eye, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IntegralServiceSection() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide uppercase mb-4 border border-accent/20">
                        Propuesta de Valor Única
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Servicio Jurídico Integral <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">"Llave en Mano"</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Tu tranquilidad no tiene precio, pero sí un coste claro y transparente.
                        Sin sorpresas. Gestión profesional de principio a fin.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Price & Promise */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 text-center relative group hover:bg-white/10 transition-colors">
                        <div className="text-sm text-slate-400 uppercase tracking-wider mb-2">Coste Trámite Completo</div>
                        <div className="text-6xl lg:text-7xl font-bold text-white mb-2">350€</div>
                        <div className="text-accent font-medium mb-8">IVA Incluido</div>

                        <div className="bg-green-500/10 text-green-400 p-4 rounded-xl border border-green-500/20 mb-8 max-w-sm mx-auto">
                            <span className="font-bold block mb-1">💡 Importante:</span>
                            Los 39€ del estudio inicial se descuentan de este importe.
                        </div>

                        <Link
                            href="#contacto"
                            className="inline-flex items-center text-white font-bold hover:text-accent transition-colors"
                        >
                            Comienza con el Estudio de Viabilidad <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>

                    {/* Right: Features */}
                    <div className="space-y-6">
                        <FeatureRow
                            icon={MessageCircle}
                            title="Asesoramiento Experto"
                            desc="Análisis personalizado de tu situación para elegir la mejor estrategia."
                        />
                        <FeatureRow
                            icon={FileText}
                            title="Preparación y Revisión"
                            desc="Verificamos meticulosamente cada documento para evitar errores y retrasos."
                        />
                        <FeatureRow
                            icon={Eye}
                            title="Presentación y Seguimiento"
                            desc="Nosotros realizamos el registro y vigilamos el estado del expediente diariamente."
                        />
                        <FeatureRow
                            icon={Scale}
                            title="Defensa Jurídica Incluida"
                            desc="Contestación de requerimientos y Recurso de Reposición incluido si fuera necesario."
                            highlight
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureRow({ icon: Icon, title, desc, highlight = false }: { icon: any, title: string, desc: string, highlight?: boolean }) {
    return (
        <div className={`flex items-start gap-4 p-4 rounded-xl transition-all ${highlight ? 'bg-accent/10 border border-accent/20' : 'hover:bg-white/5'}`}>
            <div className={`mt-1 p-2 rounded-lg ${highlight ? 'bg-accent text-white' : 'bg-slate-800 text-slate-300'}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className={`font-bold text-lg mb-1 ${highlight ? 'text-white' : 'text-slate-200'}`}>{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
            </div>
        </div>
    )
}
