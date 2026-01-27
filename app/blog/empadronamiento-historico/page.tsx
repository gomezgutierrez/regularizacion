import type { Metadata } from "next";
import { AlertCircle, FileCheck, XCircle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

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

                    <h2>Los 3 Medios de Prueba más sólidos (Alternativas)</h2>

                    <h3>1. Historial Médico (Sanidad Pública)</h3>
                    <p>
                        Cualquier consulta en urgencias, asistencia primaria o ingreso hospitalario genera un registro. Solicita tu <strong>Historia Clínica</strong> en tu centro de salud. Es una prueba oficial de tu presencia física en España en esa fecha.
                    </p>

                    <h3>2. Envíos de Dinero (Remesas)</h3>
                    <p>
                        Los recibos de envíos de dinero a tu país (Western Union, MoneyGram, Ria) suelen incluir tu nombre, pasaporte y fecha. Si has enviado dinero regularmente, tienes un calendario de pruebas muy potente.
                    </p>

                    <h3>3. Abono Transporte Nominal</h3>
                    <p>
                        La tarjeta de transporte público personalizada (con tu foto y DNI/Pasaporte) registra validaciones y recargas. Solicita un certificado de movimientos al consorcio de transportes.
                    </p>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200 my-8 not-prose">
                        <h3 className="font-bold text-green-900 flex items-center gap-2 mb-3">
                            <FileCheck className="w-5 h-5" />
                            Otros documentos admitidos
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3 text-sm text-green-800">
                            <li>• Facturas de móvil/internet a tu nombre.</li>
                            <li>• Cuenta bancaria (movimientos en cajeros).</li>
                            <li>• Inscripción en biblioteca municipal.</li>
                            <li>• Cursos de formación (públicos/privados).</li>
                            <li>• Multas o sanciones administrativas.</li>
                            <li>• Registro en ONGs (Cáritas, Cruz Roja).</li>
                        </ul>
                    </div>

                    <h2>¿Qué hago si tengo "huecos" en el tiempo?</h2>
                    <p>
                        La regularización de 2026 exige continuidad. Si tienes meses sin pruebas, intenta buscar testigos (actas notariales) o fotos en redes sociales geolocalizadas (aunque tienen menos valor probatorio, pueden sumar en conjunto).
                    </p>

                    <p>
                        <strong>Consejo de Abogado:</strong> No descartes nada. Recopila todo en una carpeta cronológica. Cuantas más pruebas, menos margen de duda para el funcionario.
                    </p>

                    <hr className="my-12 border-slate-200" />

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
