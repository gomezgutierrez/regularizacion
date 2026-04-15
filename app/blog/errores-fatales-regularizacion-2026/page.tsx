import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { useWhatsApp } from "@/contexts/whatsapp-context";

export const metadata: Metadata = {
    title: "5 Errores Fatales al Solicitar la Regularización 2026 | Abogados Extranjería",
    description: "Evita que te denieguen el Nuevo Arraigo Extraordinario. Conoce los fallos más comunes con pasaportes, antecedentes y pagos de tasas, y asegura tus papeles.",
};

export default function BlogPostErrores() {
    const { openWhatsApp } = useWhatsApp();

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Volver al Inicio
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    5 Errores Fatales al Solicitar la <span className="text-accent">Regularización 2026</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">Guías Prácticas</span>
                    <span>Lectura: 4 min</span>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <p className="lead text-xl text-slate-600 mb-8">
                        La nueva vía del <strong>Arraigo Extraordinario</strong> es una oportunidad histórica, pero la oficina de Extranjería no perdona errores. Un pequeño fallo burocrático puede paralizar tu expediente de residencia y hacerte perder el plazo final del 30 de junio de 2026.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-2" /> Error 1: Presentar Antecedentes Penales Caducados
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Este es el motivo de denegación número uno. Los certificados de antecedentes penales de tu país de origen tienen una validez específica (normalmente 3 o 6 meses desde su expedición). Si los presentas fuera de plazo, Extranjería archivará automáticamente tu solicitud.
                        <br/><br/>
                        <em>*Ojo: Si tu país está tardando más de un mes en emitirlos, la nueva ley incluye una cláusula para usar un justificante temporal, ¡pero hay que saber cómo aplicarlo!</em>
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-2" /> Error 2: Fallos en el Padrón y "Cortes" de Residencia
                    </h2>
                    <p className="text-slate-600 mb-6">
                        El requisito exige demostrar <strong>5 meses de permanencia ininterrumpida</strong> previa a la solicitud. Muchas personas pierden sus papeles porque su empadronamiento fue dado de baja temporalmente sin que se dieran cuenta. Si tienes un "hueco" en tu padrón de más de unos días, necesitarás aportar pruebas periciales adicionales o recibos que demuestren que nunca saliste de España.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-2" /> Error 3: El Pasaporte Incompleto
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Muchos solicitantes envían solo la primera página del pasaporte (donde sale la foto). El reglamento exige la <strong>copia completa del pasaporte</strong> (todas las páginas, incluyendo las que están en blanco). Este es un error tonto que retrasa expedientes durante semanas.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-2" /> Error 4: Elegir mal el tipo de Arraigo
                    </h2>
                    <p className="text-slate-600 mb-6">
                        Algunas personas solicitan el "Arraigo Extraordinario" cuando en realidad son "Solicitantes de Asilo". Cada una de las dos vías excepcionales tiene un formulario (Modelo EX) diferente y requisitos distintos. Equivocarte de vía puede implicar que el funcionario tire tu expediente atrás porque "no encajas" jurídica ni administrativamente.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-2" /> Error 5: Tramitarlo solo sin revisión previa
                    </h2>
                    <p className="text-slate-600 mb-8">
                        La desesperación hace que muchos intenten subir los documentos rápidamente al sistema MERCURIO sin revisión. Si te equivocas en el abono de la tasa (Orden PJC/617/2025) o te falta una declaración responsable, entrarás en el limbo de los "Requerimientos" donde los plazos se congelan.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">¿Cómo asegurar que tu expediente se aprueba rápido?</h3>
                        <p className="text-blue-800 mb-6">
                            La ventaja de hacer las cosas bien a la primera es que <strong>nada más comunicar el inicio del trámite, obtienes permiso provisional para trabajar legalmente</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                             <button 
                                onClick={() => openWhatsApp("Hola, deseo recibir asesoramiento e iniciar mi trámite de Regularización Extraordinaria 2026.")}
                                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
                            >
                                Hablar con Abogada
                            </button>
                        </div>
                    </div>
                </div>
                
                <RelatedPosts currentPath="/blog/errores-fatales-regularizacion-2026" />

            </article>
        </main>
    );
}
