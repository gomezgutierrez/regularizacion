import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CalendarDays, Timer, Zap } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "[VÍDEO] 30 de Junio de 2026: El Plazo Improrrogable del BOE",
    description: "El Real Decreto establece una ventana de apenas 10 semanas para presentar solicitudes. No habrá prórrogas. Descubre por qué debes empezar hoy mismo.",
    keywords: ["plazo regularización 2026", "fecha límite papeles españa", "30 junio extranjería", "arraigo extraordinario plazos", "Inmaculada Moncho"],
    alternates: {
        canonical: "https://regularizacionmasiva.es/blog/plazo-final-30-junio"
    },
    openGraph: {
        title: "¡Última Oportunidad! Plazo Regularización 2026: 30 de Junio",
        description: "No te quedes fuera. El plazo oficial termina en junio.",
        type: "article",
        publishedTime: "2026-04-15T15:00:00Z",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "[VÍDEO] 30 de Junio de 2026: El Plazo Improrrogable del BOE",
    "description": "Alerta sobre el plazo de presentación de solicitudes para la regularización extraordinaria 2026 en España.",
    "datePublished": "2026-04-15T15:00:00Z",
    "author": {
        "@type": "Person",
        "name": "Inmaculada Moncho"
    },
    "video": {
        "@type": "VideoObject",
        "name": "Plazo Final Regularización 2026",
        "description": "Advertencia sobre la fecha límite del 30 de junio",
        "thumbnailUrl": "https://regularizacionmasiva.es/images/deadlines-thumbnail.jpg",
        "uploadDate": "2026-04-15T15:00:00Z",
        "contentUrl": "https://www.tiktok.com/@abogadoextranjeriaonline/video/7600044602241846550"
    }
};

export default function BlogPostPlazoFinal() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Inicio
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    <span className="text-accent">[VÍDEO]</span> 30 de Junio de 2026: El Plazo <span className="text-red-600">Improrrogable</span> del BOE
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-red-100 px-3 py-1 rounded-full text-red-700 font-bold">ALERTA ROJA</span>
                    <span>Lectura: 2 min</span>
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                        <AlertTriangle className="w-8 h-8 text-red-600 mr-3" /> Solo 10 semanas para decidir tu futuro
                    </h2>
                    <p className="lead text-xl text-slate-600 mb-8">
                        El BOE ha sido tajante. A diferencia de otras reformas legislativas que se mantienen en el tiempo, esta <strong>Regularización Extraordinaria</strong> tiene fecha de caducidad: el sistema se cerrará el 30 de junio de 2026.
                    </p>

                    <p className="text-slate-700 mb-12 text-center text-2xl font-black bg-slate-900 text-white p-8 rounded-3xl uppercase tracking-widest">
                        ¡QUEDAN 76 DÍAS!
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="shrink-0 p-3 bg-red-100 rounded-xl text-red-600 h-fit">
                                <CalendarDays className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">16 de abril: Apertura</h3>
                                <p className="text-slate-600 text-sm">Mañana se abre el grifo. Miles de personas intentarán acceder al sistema Mercurio a la vez.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 p-3 bg-red-100 rounded-xl text-red-600 h-fit">
                                <Timer className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">30 de junio: Cierre total</h3>
                                <p className="text-slate-600 text-sm">A las 23:59 del 30 de junio, la plataforma dejará de recibir nuevas solicitudes de arraigo extraordinario.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-3xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="w-6 h-6 text-yellow-500" /> ¿Por qué es un riesgo esperar?
                        </h3>
                        <p className="text-slate-600 text-sm mb-0">
                            Esperar a finales de junio para presentar tu expediente es un error fatal por tres motivos:
                            <br /><br />
                            1. <strong>Colapso informático:</strong> La web de Extranjería suele caerse en los últimos días.
                            <br />
                            2. <strong>Cadenas de documentos:</strong> Un antecedente penal puede tardar 2-3 semanas en llegar. Si lo pides tarde, no llegarás al plazo.
                            <br />
                            3. <strong>Preferencia de resolución:</strong> Los expedientes que entren en abril se resolverán meses antes que los de junio.
                        </p>
                    </div>
                </div>

                <div className="bg-red-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">No dejes tu vida para el último día</h2>
                    <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                        Inicia la recopilación de documentos ahora mismo. No permitas que un retraso administrativo te deje fuera de esta oportunidad histórica.
                    </p>
                    <WhatsAppButton 
                        message="Hola Inmaculada, he visto tu vídeo sobre el plazo del 30 de junio y no quiero perder tiempo. ¿Qué documentos necesito ya?"
                        className="bg-white text-red-700 hover:bg-red-50 font-black py-4 px-12 rounded-full text-xl shadow-lg hover:scale-105 transition-all"
                    >
                        Quiero empezar mi expediente HOY
                    </WhatsAppButton>
                </div>

                <RelatedPosts currentPath="/blog/plazo-final-30-junio" />
            </article>
        </main>
    );
}
