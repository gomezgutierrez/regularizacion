import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Scale, CheckCircle, AlertTriangle } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "[VÍDEO] El BOE ya es oficial: Análisis del Real Decreto 316/2026",
    description: "Hoy 15 de abril de 2026 se ha publicado el texto definitivo de la Regularización Extraordinaria. Analizamos el Real Decreto, requisitos y plazos oficiales.",
    keywords: ["BOE 15 abril 2026", "Real Decreto 316/2026", "regularización extraordinaria 2026", "arraigo extraordinario", "Inmaculada Moncho"],
    alternates: {
        canonical: "https://regularizacionmasiva.es/blog/boe-analisis-oficial"
    },
    openGraph: {
        title: "Análisis del BOE: Regularización 2026 | Texto Oficial",
        description: "Todo lo que necesitas saber sobre el nuevo Real Decreto publicado hoy.",
        type: "article",
        publishedTime: "2026-04-15T08:00:00Z",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "[VÍDEO] El BOE ya es oficial: Análisis del Real Decreto 316/2026",
    "description": "Análisis jurídico del Real Decreto 316/2026 sobre la Regularización Extraordinaria en España.",
    "datePublished": "2026-04-15T08:00:00Z",
    "author": {
        "@type": "Person",
        "name": "Inmaculada Moncho"
    },
    "video": {
        "@type": "VideoObject",
        "name": "Análisis BOE Regularización 2026",
        "description": "Explicación del Real Decreto 316/2026",
        "thumbnailUrl": "https://regularizacionmasiva.es/images/boe-thumbnail.jpg",
        "uploadDate": "2026-04-15T08:00:00Z",
        "contentUrl": "https://www.tiktok.com/@abogadoextranjeriaonline/video/7600044602241846550"
    }
};

export default function BlogPostAnalisisBOE() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Volver al Inicio
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    <span className="text-accent">[VÍDEO]</span> El BOE ya es oficial: Análisis del <span className="text-primary">Real Decreto 316/2026</span>
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700 font-medium">Última Hora</span>
                    <span>Lectura: 4 min</span>
                </div>

                {/* TikTok Embed */}
                <div className="mb-16 flex justify-center">
                    <div className="relative w-full max-w-[340px] md:max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-black">
                        <blockquote
                            className="tiktok-embed"
                            cite="https://www.tiktok.com/@abogadoextranjeriaonline/video/7600044602241846550"
                            data-video-id="7600044602241846550"
                            style={{ maxWidth: "605px", minWidth: "325px" }}
                        >
                            <section>
                                <a target="_blank" title="@abogadoextranjeriaonline" href="https://www.tiktok.com/@abogadoextranjeriaonline?refer=embed">@abogadoextranjeriaonline</a>
                            </section>
                        </blockquote>
                        <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Puntos Críticos del BOE</h2>
                    <p className="lead text-xl text-slate-600 mb-8">
                        Tras meses de espera, el Boletín Oficial del Estado (BOE) ha publicado hoy el texto definitivo que regula la <strong>Regularización Extraordinaria de 2026</strong>. Como abogada experta, he analizado las 40 páginas del decreto para traerte lo más importante.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-start mb-4">
                                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mr-3">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Fecha de Corte: 1 de Enero</h3>
                            </div>
                            <p className="text-slate-600 text-sm">
                                Se confirma que solo pueden acceder quienes estuvieran en España antes del 1 de enero de 2026.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-start mb-4">
                                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mr-3">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg">Habilitación para Trabajar</h3>
                            </div>
                            <p className="text-slate-600 text-sm">
                                El permiso concedido autoriza explícitamente a trabajar tanto por cuenta ajena como propia.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mb-12">
                        <h4 className="font-bold text-amber-900 flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 mr-2" /> Plazos Inamovibles
                        </h4>
                        <p className="text-amber-800 m-0">
                            El plazo de presentación de solicitudes comienza mañana <strong>16 de abril</strong> y finaliza el <strong>30 de junio</strong>. No habrá prórrogas.
                        </p>
                    </div>

                    <p className="text-slate-700">
                        Este Real Decreto busca integrar a cientos de miles de personas que se encuentran en situación de precariedad documental. La gran novedad es la simplificación de los medios económicos y la vía especial para los solicitantes de asilo.
                    </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                        ¿Quieres que analice tu perfil basado en el nuevo BOE?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        El sistema Mercurio abrirá mañana. Asegúrate de tener toda la documentación lista y revisada por un profesional para evitar denegaciones automáticas.
                    </p>
                    <WhatsAppButton 
                        message="Hola Inmaculada, he visto tu análisis del BOE y quiero que revises mi caso para empezar mañana."
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/20 transition-all transform hover:-translate-y-1"
                    >
                        Consultar Viabilidad por WhatsApp
                    </WhatsAppButton>
                </div>

                <RelatedPosts currentPath="/blog/boe-analisis-oficial" />
            </article>
        </main>
    );
}
