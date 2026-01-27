import type { Metadata } from "next";
import { ShieldAlert, CheckCircle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { AuthorBio } from "@/components/author-bio";

export const metadata: Metadata = {
    title: "Antecedentes Penales y Regularización 2026: Guía de Cancelación",
    description: "No podrás regularizarte si tienes antecedentes. Aprende cómo cancelar antecedentes policiales y penales a tiempo para la solicitud (Abril 2026).",
    alternates: {
        canonical: "/blog/antecedentes-penales",
    },
};

export default function ArticlePenales() {
    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-12">

                <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Antecedentes Penales: El obstáculo nº1 para tu Regularización en 2026
                    </h1>
                    <p className="lead text-xl text-slate-600 mb-8">
                        De nada sirve tener 10 años en España si tienes una ficha policial abierta. La buena conducta es un requisito obligatorio ("sine qua non") para el Real Decreto de 2026.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                            <ShieldAlert className="w-5 h-5" />
                            Diferencia Vital
                        </h3>
                        <p className="text-red-800">
                            <strong>Antecedentes Policiales:</strong> Te detuvo la policía pero no fuiste condenado (o fuiste absuelto). Aún así, constan en la base de datos de la Policía/Guardia Civil y <span className="underline">bloquean extranjería</span>.
                            <br /><br />
                            <strong>Antecedentes Penales:</strong> Fuiste condenado por un juez.
                        </p>
                    </div>

                    <h2>¿Se pueden cancelar? SÍ, y debes hacerlo YA.</h2>
                    <p>
                        Mucha gente cree que "caducan solos". <strong>Falso.</strong> Debes solicitar su cancelación activamente. Si sale el plazo de solicitud en abril y no los has cancelado, tu expediente será denegado.
                    </p>

                    {/* Sales Block CRO */}
                    <div className="bg-slate-900 text-white p-6 rounded-xl my-8 shadow-xl border border-slate-700">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="shrink-0 bg-green-500 rounded-full p-3">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">¿Quieres borrar tus antecedentes ya?</h3>
                                <p className="text-slate-300 text-sm mb-4">
                                    No arriesgues tu regularización. Nos encargamos de pedir la cancelación policial y penal express para que llegues a tiempo.
                                </p>
                                <a
                                    href="https://wa.me/34624945297?text=Quiero%20cancelar%20mis%20antecedentes%20para%20la%20Regularizaci%C3%B3n."
                                    target="_blank"
                                    className="inline-block bg-white text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-slate-200 transition-colors"
                                >
                                    Solicitar Limpieza de Expediente
                                </a>
                            </div>
                        </div>
                    </div>

                    <h3>Pasos para cancelar Antecedentes Policiales</h3>
                    <ol>
                        <li>Solicitar certificado al juzgado que demuestre que el caso está cerrado (archivado, absuelto o condena cumplida).</li>
                        <li>Presentar el modelo oficial de cancelación ante la Policía Nacional o Guardia Civil.</li>
                    </ol>
                    <p className="text-sm text-slate-500 italic">Tiempo estimado: 1 a 3 meses.</p>

                    <h3>Pasos para cancelar Antecedentes Penales</h3>
                    <p>
                        Debes haber cumplido la pena y un plazo extra de "limpieza" sin volver a delinquir (desde 6 meses hasta varios años según la gravedad). Se solicita ante el Ministerio de Justicia.
                    </p>

                    <h2>¿Y los antecedentes de mi país?</h2>
                    <p>
                        También necesitarás un <strong>Certificado de Antecedentes Penales de tu país de origen</strong>, apostillado (o legalizado) y traducido (si no es español).
                    </p>
                    <p>
                        <strong>OJO:</strong> Estos certificados tienen caducidad (normalmente 3 o 6 meses de validez). No los pidas demasiado pronto, pero asegúrate de saber cómo pedirlos rápido cuando se acerque abril.
                    </p>

                    <hr className="my-12 border-slate-200" />

                    <AuthorBio />

                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h4 className="font-bold text-slate-800 mb-2">Sigue leyendo:</h4>
                        <ul className="space-y-2 list-none p-0">
                            <li>
                                <ArrowRight className="inline w-4 h-4 text-primary mr-2" />
                                <a href="/guia-regularizacion-2026" className="text-primary hover:underline font-medium">Volver a la Guía Definitiva 2026</a>
                            </li>
                            <li>
                                <ArrowRight className="inline w-4 h-4 text-primary mr-2" />
                                <a href="/blog/empadronamiento-historico" className="text-primary hover:underline font-medium">Pruebas de estancia válidas</a>
                            </li>
                        </ul>
                    </div>

                </article>

                <aside className="lg:w-1/3">
                    <div className="sticky top-8 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center">
                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Limpiamos tu expediente</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Si tienes dudas sobre si constan antecedentes, podemos averiguarlo y cancelarlos por ti antes de la regularización.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
