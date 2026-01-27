import type { Metadata } from "next";
import { Clock, CalendarCheck, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
    title: "Plazos Regularización Extraordinaria 2026: Calendario Oficial",
    description: "Fechas clave para la Regularización Masiva. Cuándo abre el plazo, cuánto dura la solicitud y tiempos de resolución de Expedientes.",
    alternates: {
        canonical: "/blog/plazos-solicitud-2026",
    },
};

export default function ArticlePlazos() {
    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-12">

                <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Calendario de la Regularización 2026: Fechas Improrrogables
                    </h1>
                    <p className="lead text-xl text-slate-600 mb-8">
                        El Real Decreto establece una "ventanilla única temporal". Conocer los plazos es cuestión de supervivencia legal. Aquí tienes el cronograma estimado según el acuerdo de Gobierno.
                    </p>

                    <div className="flex items-center gap-4 bg-blue-50 p-6 rounded-xl border border-blue-200 not-prose mb-8">
                        <Clock className="w-8 h-8 text-blue-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-blue-900 m-0 text-lg">Duración del proceso: 3 Meses</h3>
                            <p className="text-blue-800 text-sm m-0">No habrá prórrogas. Si no presentas a tiempo, quedas fuera.</p>
                        </div>
                    </div>

                    <h2>Fase 1: Preparación (Enero - Marzo 2026)</h2>
                    <p>
                        <strong>ESTADO: ACTIVA AHORA.</strong><br />
                        Es el momento de la "cocina". No puedes presentar nada aún, pero debes tener el plato listo.
                    </p>
                    <ul>
                        <li>Conseguir certificado digital / Cl@ve (Imprescindible para el trámite online).</li>
                        <li>Solicitar penales al país de origen (calculando que no caduquen antes de abril).</li>
                        <li>Recopilar pruebas de arraigo (padrón, médicos, etc.).</li>
                        <li>Cancelar antecedentes en España si los hubiera.</li>
                    </ul>

                    <h2>Fase 2: Presentación (Abril - Junio 2026)</h2>
                    <p>
                        <strong>ESTADO: PENDIENTE.</strong><br />
                        Se abre la plataforma telemática. Se espera un aluvión de solicitudes el primer día.
                    </p>
                    <p>
                        <strong>Importante:</strong> Al presentar la solicitud, obtienes un resguardo. Este documento <strong>paraliza cualquier expediente de expulsión</strong> en curso y acredita tu estancia regular temporal mientras se resuelve.
                    </p>

                    <h2>Fase 3: Resolución (Julio 2026 en adelante)</h2>
                    <p>
                        La Oficina de Extranjería tendrá un plazo (normalmente 3 a 6 meses) para resolver.
                        <ul>
                            <li><strong>Si es Favorable:</strong> Te conceden autorización de residencia y trabajo por 1 año. Deberás ir a poner huellas para la TIE.</li>
                            <li><strong>Si es Desfavorable:</strong> Podrás recurrir, pero es un camino más difícil. Mejor hacerlo bien a la primera.</li>
                        </ul>
                    </p>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 my-8 not-prose">
                        <h3 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
                            <CalendarCheck className="w-5 h-5" />
                            El Silencio Administrativo
                        </h3>
                        <p className="text-amber-800 text-sm">
                            En procesos de regularización extraordinaria, el silencio administrativo suele ser <strong>negativo</strong>. Es decir, si no responden en el plazo máximo (que fijará el Real Decreto), se entiende denegada. Por eso es vital presentar un expediente perfecto que facilite la respuesta expresa rápida.
                        </p>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h4 className="font-bold text-slate-800 mb-2">Enlaces útiles:</h4>
                        <ul className="space-y-2 list-none p-0">
                            <li>
                                <ArrowRight className="inline w-4 h-4 text-primary mr-2" />
                                <a href="/guia-regularizacion-2026" className="text-primary hover:underline font-medium">Volver a la Guía Definitiva</a>
                            </li>
                        </ul>
                    </div>

                </article>

                <aside className="lg:w-1/3">
                    <div className="sticky top-8 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center">
                            <CalendarCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No se te pase el plazo</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Déjanos tus datos y te avisaremos el DÍA EXACTO que abra el plazo para presentar tu solicitud el primero.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
