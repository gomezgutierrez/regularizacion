import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Calendar, CheckCircle, Info } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "[VÍDEO] La Flexibilidad del BOE: Solo Necesitas 90 Días de Contrato",
    description: "Una de las grandes sorpresas de la Regularización 2026 es el requisito laboral. Te explicamos cómo sumar contratos cortos para llegar al mínimo exigido.",
    keywords: ["90 días contrato regularización", "flexibilidad laboral extranjería 2026", "arraigo laboral extraordinario", "Inmaculada Moncho", "contratos cortos papeles"],
    alternates: {
        canonical: "https://regularizacionmasiva.es/blog/90-dias-contrato-video"
    },
    openGraph: {
        title: "Contrato de 90 Días: La Clave de la Regularización 2026",
        description: "Cómo conseguir tus papeles con solo 3 meses de trabajo.",
        type: "article",
        publishedTime: "2026-04-14T20:00:00Z",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "[VÍDEO] La Flexibilidad del BOE: Solo Necesitas 90 Días de Contrato",
    "description": "Análisis del nuevo requisito laboral de 90 días para la regularización extraordinaria en España.",
    "datePublished": "2026-04-14T20:00:00Z",
    "author": {
        "@type": "Person",
        "name": "Inmaculada Moncho"
    },
    "video": {
        "@type": "VideoObject",
        "name": "Requisito 90 Días Contrato",
        "description": "Explicación de la flexibilidad laboral 2026",
        "thumbnailUrl": "https://regularizacionmasiva.es/images/contrato-thumbnail.jpg",
        "uploadDate": "2026-04-14T20:00:00Z",
        "contentUrl": "https://www.tiktok.com/@abogadoextranjeriaonline/video/7600044602241846550"
    }
};

export default function BlogPost90DiasVideo() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Atrás
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    <span className="text-accent">[VÍDEO]</span> La Gran Flexibilidad del BOE: Solo Necesitas <span className="text-emerald-600">90 Días de Contrato</span>
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-emerald-100 px-3 py-1 rounded-full text-emerald-800 font-bold">REQUISITOS</span>
                    <span>Lectura: 3 min</span>
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
                        <Briefcase className="w-8 h-8 text-emerald-600 mr-3" /> Sumar contratos: La clave del éxito
                    </h2>
                    <p className="lead text-xl text-slate-600 mb-8">
                        Muchos teníais miedo de no poder regularizaros por no tener un contrato de un año. Sin embargo, el Real Decreto publicado hoy confirma que la suma de contratos cortos es válida.
                    </p>

                    <div className="bg-white p-8 rounded-2xl border border-dotted border-slate-300 mb-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">¿Qué significa exactamente "90 días"?</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            No es necesario que los 90 días sean continuos ni con el mismo empleador. Puedes sumar:
                        </p>
                        <div className="space-y-4 text-slate-700">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>30 días en hostelería + 60 días en limpieza = <strong>VÁLIDO</strong></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>Un contrato de 3 meses a media jornada = <strong>VÁLIDO</strong></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>Intención de alta como autónomo = <strong>VÁLIDO</strong> (Vía especial)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mb-12">
                        <div className="flex-1 bg-slate-100 p-6 rounded-xl">
                            <h4 className="font-bold flex items-center gap-2 mb-2">
                                <Calendar className="w-5 h-5" /> ¿En qué período?
                            </h4>
                            <p className="text-slate-600 text-sm">
                                Debes acreditar que has trabajado ese tiempo dentro del año anterior a la solicitud o presentar una oferta de empleo que garantice ese tiempo mínimo.
                            </p>
                        </div>
                        <div className="flex-1 bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="font-bold flex items-center gap-2 mb-2 text-blue-900">
                                <Info className="w-5 h-5" /> ¡Ojo con el SMI!
                            </h4>
                            <p className="text-blue-800 text-sm">
                                El contrato debe cumplir con el Salario Mínimo Interprofesional proporcional a las horas trabajadas. No nos valen "medias jornadas" con sueldos de 200€.
                            </p>
                        </div>
                    </div>

                    <p className="text-slate-700">
                        Esta medida es revolucionaria porque reconoce la realidad del mercado laboral en España, donde la temporalidad es muy común entre la población inmigrante. En mi despacho, te ayudamos a cuadrar estas fechas para que tu informe de vida laboral sea perfecto ante Extranjería.
                    </p>
                </div>

                <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">¿No sabes si tus contratos suman los 90 días?</h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        Mándanos tu vida laboral o tus contratos actuales y haremos el cálculo oficial por ti para asegurar que cumples con el Real Decreto.
                    </p>
                    <WhatsAppButton 
                        message="Hola, quiero que calculéis si mis contratos suman los 90 días necesarios según el nuevo BOE."
                        className="bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold py-4 px-10 rounded-full text-lg transition-all"
                    >
                        Calcular mi tiempo trabajado
                    </WhatsAppButton>
                </div>

                <RelatedPosts currentPath="/blog/90-dias-contrato-video" />
            </article>
        </main>
    );
}
