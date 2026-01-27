import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
    title: "Asilo Denegado y Regularización 2026: ¿Puedo pedir papeles?",
    description: "Si eres solicitante de asilo (tarjeta roja o blanca) o te lo han denegado, la Regularización Extraordinaria 2026 es tu oportunidad. Te explicamos cómo cambiar de régimen.",
    alternates: {
        canonical: "/blog/asilo-y-regularizacion",
    },
};

export default function ArticleAsilo() {
    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-12">

                <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Tengo Asilo (o solicitud denegada): ¿Puedo acogerme a la Regularización 2026?
                    </h1>
                    <p className="lead text-xl text-slate-600 mb-8">
                        Miles de personas en España están atrapadas en el limbo de la solicitud de Asilo. La Regularización Extraordinaria ("Ventanilla Única") es la vía de escape legal más segura.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 not-prose">
                        <h3 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                            <ShieldCheck className="w-5 h-5" />
                            Respuesta Corta: SÍ
                        </h3>
                        <p className="text-green-800">
                            Es totalmente compatible. Puedes (y debes) solicitar la regularización extraordinaria aunque tengas un expediente de asilo abierto o recién denegado. Es un cambio de régimen jurídico muy beneficioso.
                        </p>
                    </div>

                    <h2>Situación 1: Solicitante con Tarjeta Roja/Blanca (En trámite)</h2>
                    <p>
                        Si llevas años esperando respuesta y tienes tu tarjeta renovada, puedes presentar la solicitud de regularización por arraigo extraordinario.
                    </p>
                    <ul>
                        <li><strong>Ventaja:</strong> Pasas de un permiso precario (asilo) a una Residencia y Trabajo de régimen general, que computa para Nacionalidad Iberoamericana (2 años).</li>
                        <li><strong>Trámite:</strong> Al concederte la regularización, deberás renunciar al asilo voluntariamente para evitar duplicidad de expedientes.</li>
                    </ul>

                    <h2>Situación 2: Asilo Denegado y con Carta de Expulsión</h2>
                    <p>
                        Si te han denegado el asilo y te has quedado en situación irregular sobrevenida:
                    </p>
                    <p>
                        La Regularización 2026 exige haber entrado antes del 31/12/2025. Tu estancia como solicitante de asilo <strong>SÍ CUENTA</strong> como tiempo de permanencia, aunque te lo hayan denegado después.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-sm mb-6 not-prose">
                        <strong className="text-amber-900 flex items-center gap-2 mb-1">
                            <AlertTriangle className="w-4 h-4" /> Importante:
                        </strong>
                        El resguardo de presentación de la Regularización paraliza la ejecución de cualquier orden de expulsión derivada de la denegación del asilo.
                    </div>

                    <h2>Documentación específica para Asilados</h2>
                    <p>
                        Aparte de los requisitos generales (penales, etc.), necesitarás acreditar tu estancia. Tu mejor prueba es:
                    </p>
                    <ul>
                        <li>Resguardo de presentación de la solicitud de Asilo.</li>
                        <li>Tarjeta Roja caducada o en vigor.</li>
                        <li>Volante de empadronamiento (que suele exigirse para pedir asilo).</li>
                    </ul>

                    <h2>¿Tengo que renunciar al Asilo antes de pedirlo?</h2>
                    <p>
                        <strong>NO.</strong> Recomendamos mantener la solicitud de asilo viva hasta que tengas en la mano la resolución FAVORABLE de la regularización. No te quedes sin cobertura legal en ningún momento.
                    </p>

                    <hr className="my-12 border-slate-200" />

                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h4 className="font-bold text-slate-800 mb-2">Artículos relacionados:</h4>
                        <ul className="space-y-2 list-none p-0">
                            <li>
                                <ArrowRight className="inline w-4 h-4 text-primary mr-2" />
                                <a href="/blog/plazos-solicitud-2026" className="text-primary hover:underline font-medium">Revisa los plazos de presentación</a>
                            </li>
                        </ul>
                    </div>

                </article>

                <aside className="lg:w-1/3">
                    <div className="sticky top-8 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Asegura tu estatus legal</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Analizamos gratuitamente si te conviene cambiar de Asilo a Régimen General con la nueva ley.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
