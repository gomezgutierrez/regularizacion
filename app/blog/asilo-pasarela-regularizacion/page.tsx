import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, FileCheck, Scale, AlertCircle } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "[VÍDEO] Solicitantes de Asilo: La Vía Especial de la Regularización 2026",
    description: "Si tienes tarjeta roja o blanca, el nuevo BOE contempla una pasarela directa hacia el Arraigo Extraordinario. Te explicamos cómo acogerte sin perder tus derechos.",
    keywords: ["asilo a regularización 2026", "tarjeta roja españa", "tarjeta blanca", "disposición adicional vigésima", "arraigo asilo", "Inmaculada Moncho"],
    alternates: {
        canonical: "https://regularizacionmasiva.es/blog/asilo-pasarela-regularizacion"
    },
    openGraph: {
        title: "Pasarela Asilo -> Regularización 2026: Guía Completa",
        description: "Cómo regularizarte sin perder tu protección de asilo.",
        type: "article",
        publishedTime: "2026-04-15T14:00:00Z",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "[VÍDEO] Solicitantes de Asilo: La Vía Especial de la Regularización 2026",
    "description": "Explicación de la pasarela legal para solicitantes de protección internacional hacia el Arraigo Extraordinario 2026.",
    "datePublished": "2026-04-15T14:00:00Z",
    "author": {
        "@type": "Person",
        "name": "Inmaculada Moncho"
    },
    "video": {
        "@type": "VideoObject",
        "name": "Pasarela Asilo Regularización",
        "description": "Instrucciones para solicitantes de asilo",
        "thumbnailUrl": "https://regularizacionmasiva.es/images/asilo-thumbnail.jpg",
        "uploadDate": "2026-04-15T14:00:00Z",
        "contentUrl": "https://www.tiktok.com/@abogadoextranjeriaonline/video/7601253213345549590"
    }
};

export default function BlogPostAsiloPasarela() {
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
                    <span className="text-accent">[VÍDEO]</span> Solicitantes de Asilo: La <span className="text-blue-600">Vía Especial</span> de la Regularización
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-700 font-medium">Asilo y Protección</span>
                    <span>Lectura: 4 min</span>
                </div>

                {/* TikTok Embed */}
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

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                        <HelpCircle className="w-8 h-8 text-blue-600 mr-3" /> ¿Tengo que renunciar al asilo?
                    </h2>
                    <p className="lead text-xl text-slate-600 mb-8">
                        Es la duda que más me habéis dejado en los comentarios. El BOE publicado el 15 de abril trae por fin la respuesta definitiva en su <strong>Disposición Adicional Vigésima</strong>.
                    </p>

                    <p className="text-slate-700">
                        La buena noticia es que el Gobierno ha habilitado una "pasarela". No es obligatorio renunciar al asilo <em>antes</em> de presentar la solicitud de regularización, lo cual te permite mantener tu protección internacional mientras esperas la resolución del permiso de residencia por Arraigo Extraordinario.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                                <FileCheck className="w-5 h-5 mr-2" /> Para Tarjeta Roja
                            </h3>
                            <p className="text-blue-800 text-sm">
                                Si tienes permiso de trabajo activo por asilo, este se mantiene vigente. Al concederte el Arraigo, tu situación pasará a ser de residente estable.
                            </p>
                        </div>
                        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                                <Scale className="w-5 h-5 mr-2" /> Para Tarjeta Blanca
                            </h3>
                            <p className="text-slate-700 text-sm">
                                Aunque aún no tengas permiso de trabajo por asilo, la regularización extraordinaria te lo otorgará de forma inmediata tras la aprobación.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-12">
                        <h4 className="font-bold text-amber-900 flex items-center mb-2">
                            <AlertCircle className="w-5 h-5 mr-2" /> Advertencia Legal
                        </h4>
                        <p className="text-amber-800 text-sm m-0">
                            Presentar la regularización 2026 siendo solicitante de asilo requiere una estrategia cuidadosa para evitar problemas de duplicidad en el NIE. Es fundamental que el abogado verifique que tus datos en la base de datos de ADADE coinciden exactamente.
                        </p>
                    </div>

                    <p className="text-slate-700">
                        El plazo es corto (apenas 10 semanas) y los solicitantes de asilo son un grupo prioritario. Mi consejo es que inicies tu expediente cuanto antes aprovechando que ya tienes un NIE asignado.
                    </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Tienes tarjeta de asilo y quieres regularizarte?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Analizamos si te conviene más seguir con el proceso de asilo o saltar a esta regularización definitiva. El BOE nos da las herramientas, nosotros la experiencia.
                    </p>
                    <WhatsAppButton 
                        message="Hola Inmaculada, soy solicitante de asilo y quiero informarme sobre la pasarela a la regularización que explicaste en tu vídeo."
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl"
                    >
                        Gestionar mi Pasarela por WhatsApp
                    </WhatsAppButton>
                </div>

                <RelatedPosts currentPath="/blog/asilo-pasarela-regularizacion" />
            </article>
        </main>
    );
}
