
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, ShieldCheck, FileText, AlertTriangle } from "lucide-react";
import { WaitingListModal } from "@/components/waiting-list-modal";
import { PricingCardAsylum } from "./pricing-card-asylum"; // Extracted component

export const metadata: Metadata = {
    title: "[VÍDEO] ¿Tienes Asilo o Protección Internacional? Así te afecta la Regularización 2026",
    description: "¿Eres solicitante de asilo (tarjeta roja/blanca) y quieres saber si puedes acogerte a la Regularización Masiva? Analizamos la compatibilidad para colombianos, peruanos y argentinos.",
};

export default function BlogPostAsilo() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">

            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Volver al Inicio
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">

                {/* H1 Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    <span className="text-accent">[VÍDEO]</span> ¿Tienes Asilo o Protección Internacional? Así te afecta la Regularización 2026
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">Actualidad Jurídica</span>
                    <span>Lectura: 3 min</span>
                </div>

                {/* BLOQUE 1: El Gancho Visual (TikTok Embed) */}
                <div className="mb-16 flex justify-center">
                    <div className="relative w-full max-w-[340px] md:max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-black">
                        <blockquote
                            className="tiktok-embed"
                            cite="https://www.tiktok.com/@abogadoextranjeriaonline/video/7601253213345549590"
                            data-video-id="7601253213345549590"
                            style={{ maxWidth: "605px", minWidth: "325px" }}
                        >
                            <section>
                                <a target="_blank" title="@abogadoextranjeriaonline" href="https://www.tiktok.com/@abogadoextranjeriaonline?refer=embed">@abogadoextranjeriaonline</a>
                            </section>
                        </blockquote>
                        <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                </div>

                {/* BLOQUE 2: La Solución Inmediata (Pricing) - Custom Component */}
                <div className="mb-16">
                    <PricingCardAsylum />
                </div>

                {/* BLOQUE 3: Análisis del Vídeo (Texto SEO) */}
                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Protección Internacional y Papeles: Lo que debes saber</h2>

                    <p className="lead text-xl text-slate-600 mb-8">
                        En este vídeo abordo una de las preguntas más frecuentes que recibo en el despacho, especialmente de la comunidad de <strong>Colombia, Perú y Argentina</strong>: ¿Qué pasa con mi solicitud de asilo ante la nueva Regularización Masiva?
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-start mb-4">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">La Estrategia Doble</h3>
                            </div>
                            <p className="text-slate-600">
                                Muchos solicitantes de Protección Internacional llevan años esperando. La Regularización 2026 puede ser tu <strong>"Plan B" seguro</strong>, pero hay que saber cuándo presentarla para no perder derechos adquiridos.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-start mb-4">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600 mr-3">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Compatibilidad</h3>
                            </div>
                            <p className="text-slate-600">
                                Exploramos las vías legales para cambiar de estatus sin quedar en un limbo jurídico. Es crucial mantener tu estatus actual hasta tener la nueva resolución en mano.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                        <h4 className="font-bold text-amber-900 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Importante: Nacionalidad
                        </h4>
                        <p className="text-amber-800 m-0">
                            Cómo afecta este cambio a tu futuro trámite de nacionalidad española es un factor decisivo. Renunciar al asilo antes de tiempo podría reiniciar el contador de años de residencia legal necesarios.
                        </p>
                    </div>
                </div>

                {/* BLOQUE 4: Llamada a la Acción para Latinos */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                        ¿Llegaste buscando protección y sigues esperando?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        Si tu expediente sigue pendiente, la nueva reforma migratoria es tu oportunidad para consolidar tu situación legal y trabajar sin renovaciones constantes de la tarjeta roja.
                        <br /><br />
                        <strong>Cada expediente de asilo es un mundo. Déjame revisar tus fechas y antecedentes antes de dar el paso.</strong>
                    </p>

                    <PricingCardAsylum buttonOnly />

                </div>

            </article>
        </main>
    );
}
