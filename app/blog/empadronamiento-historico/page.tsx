import type { Metadata } from "next";
import { AlertCircle, FileCheck, XCircle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { AuthorBio } from "@/components/author-bio";

export const metadata: Metadata = {
    title: "Cómo demostrar estancia sin Empadronamiento para Regularización 2026",
    description: "Guía de 15 documentos alternativos al padrón para la Regularización Extraordinaria. Informes médicos, envíos de dinero y pruebas válidas.",
    alternates: {
        canonical: "/blog/empadronamiento-historico",
    },
};

export default function ArticleEmpadronamiento() {
    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-12">

                <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        ¿No tienes Empadronamiento? Cómo demostrar tu estancia para la Regularización 2026
                    </h1>
                    <p className="lead text-xl text-slate-600 mb-8">
                        El padrón histórico es la prueba reina, pero no la única. El Reglamento de Extranjería permite otros medios de prueba admitidos en Derecho. Te explicamos cuáles funcionan.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                            <XCircle className="w-5 h-5" />
                            Lo que NO sirve
                        </h3>
                        <ul className="list-disc ml-5 text-red-800 space-y-1">
                            <li>Cartas de amigos o familiares (declaraciones juradas privadas).</li>
                            <li>Tickets de compra de supermercado sin nombre.</li>
                            <li>Billete de transporte no nominal (metro anónimo).</li>
                        </ul>
                    </div>

                    <h2>Lista Oficial: 15 Pruebas Admitidas para Arraigo (Sin Padrón)</h2>
                    <p>Si no tienes empadronamiento, la Oficina de Extranjería admite estos medios de prueba (art. 124 Reglamento):</p>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-6">
                        <ol className="list-decimal ml-5 space-y-2 font-medium text-slate-800">
                            <li><strong>Historia Clínica de la Seguridad Social</strong> (Urgencias o consultas).</li>
                            <li><strong>Facturas de Remesas de Dinero</strong> (con tu nombre y fecha).</li>
                            <li><strong>Abono Transporte Público</strong> (Tarjeta nominal con certificado de movimientos).</li>
                            <li><strong>Extractos Bancarios</strong> (Pagos en comercios físicos en España).</li>
                            <li><strong>Facturas de Suministros</strong> (Luz, agua, internet a tu nombre).</li>
                            <li><strong>Inscripción en Biblioteca Municipal</strong> (Carnet de lector).</li>
                            <li><strong>Cursos de Formación</strong> (Diplomas o matrículas).</li>
                            <li><strong>Notificaciones de Multas</strong> o sanciones administrativas.</li>
                            <li><strong>Registro en ONGs</strong> (Cáritas, Cruz Roja, Servicios Sociales).</li>
                            <li><strong>Envíos de Correos/Paquetería</strong> (Recibos firmados).</li>
                            <li><strong>Compras Online</strong> (Amazon/etc con dirección de entrega española).</li>
                            <li><strong>Alta en Gimnasios</strong> o centros deportivos municipales.</li>
                            <li><strong>Actas Notariales</strong> de presencia (Testigos).</li>
                            <li><strong>Tarjeta de Solicitante de Asilo</strong> (Roja/Blanca) o resguardo.</li>
                            <li><strong>Citas Previas en Extranjería</strong> (aunque no se llegaran a realizar).</li>
                        </ol>
                    </div>

                    <h2>¿Qué hago si tengo "huecos" en el tiempo?</h2>
                    <p>
                        La regularización de 2026 exige continuidad. Si tienes meses sin pruebas, intenta buscar testigos (actas notariales) o fotos en redes sociales geolocalizadas (aunque tienen menos valor probatorio, pueden sumar en conjunto).
                    </p>

                    <p>
                        <strong>Consejo de Abogado:</strong> No descartes nada. Recopila todo en una carpeta cronológica. Cuantas más pruebas, menos margen de duda para el funcionario.
                    </p>

                    <hr className="my-12 border-slate-200" />

                    <AuthorBio />

                    <div className="bg-slate-100 p-6 rounded-xl">
                        <h4 className="font-bold text-slate-800 mb-2">Más información relacionada:</h4>
                        <ul className="space-y-2 list-none p-0">
                            <li>
                                <ArrowRight className="inline w-4 h-4 text-primary mr-2" />
                                <a href="/guia-regularizacion-2026" className="text-primary hover:underline font-medium">Volver a la Guía Definitiva 2026</a>
                            </li>
                            <li>
                                <ArrowRight className="inline w-4 h-4 text-primary mr-2" />
                                <a href="/blog/antecedentes-penales" className="text-primary hover:underline font-medium">Cómo cancelar antecedentes penales</a>
                            </li>
                        </ul>
                    </div>

                </article>

                <aside className="lg:w-1/3">
                    <div className="sticky top-8 space-y-8">

                        {/* Lead Magnet - PDF Checklist */}
                        <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold mb-3">🎁 Descarga Gratis</h3>
                            <p className="text-indigo-200 text-sm mb-4">
                                Checklist con los 15 documentos admitidos para regularización (sin padrón).
                            </p>
                            <a
                                href="/checklist-regularizacion-2026.txt"
                                download="Checklist-Regularizacion-2026.txt"
                                className="block w-full text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-colors"
                            >
                                Descargar PDF
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center">
                            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">¿Dudas con tus pruebas?</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Evaluamos tus documentos GRATIS para decirte si son suficientes para la regularización.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
