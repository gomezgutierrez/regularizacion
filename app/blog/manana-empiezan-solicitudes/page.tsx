import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Laptop, Send } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "[VÍDEO] Mañana 16 de Abril: Guía para Iniciar tu Regularización 2026",
    description: "Prepárate para el inicio del plazo de solicitud. Pasos para presentar tu expediente telemáticamente a través del sistema Mercurio y obtener tu permiso de trabajo.",
    keywords: ["solicitud regularización 16 abril", "Mercurio Extranjería", "presentación telemática", "papeles españa 2026", "Inmaculada Moncho"],
    alternates: {
        canonical: "https://regularizacionmasiva.es/blog/manana-empiezan-solicitudes"
    },
    openGraph: {
        title: "Guía: Inicio de Solicitudes Regularización 2026",
        description: "Prepárate para presentar tu expediente mañana 16 de abril.",
        type: "article",
        publishedTime: "2026-04-15T12:00:00Z",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "[VÍDEO] Mañana 16 de Abril: Guía para Iniciar tu Regularización 2026",
    "description": "Instrucciones paso a paso para la presentación telemática de expedientes de extranjería el 16 de abril de 2026.",
    "datePublished": "2026-04-15T12:00:00Z",
    "author": {
        "@type": "Person",
        "name": "Inmaculada Moncho"
    },
    "video": {
        "@type": "VideoObject",
        "name": "Guía Presentación 16 Abril",
        "description": "Cómo usar el sistema Mercurio para la regularización",
        "thumbnailUrl": "https://regularizacionmasiva.es/images/mercurio-thumbnail.jpg",
        "uploadDate": "2026-04-15T12:00:00Z",
        "contentUrl": "https://www.tiktok.com/@abogadoextranjeriaonline/video/7495914945484852504"
    }
};

export default function BlogPostInicioMañana() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Portada
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    <span className="text-accent">[VÍDEO]</span> Mañana 16 de Abril: Guía para Iniciar tu <span className="text-emerald-600">Regularización 2026</span>
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-emerald-100 px-3 py-1 rounded-full text-emerald-800 font-bold">FECHA CRÍTICA</span>
                    <span>Lectura: 3 min</span>
                </div>

                {/* TikTok Embed */}
                <div className="mb-16 flex justify-center">
                    <div className="relative w-full max-w-[340px] md:max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-black">
                        <blockquote
                            className="tiktok-embed"
                            cite="https://www.tiktok.com/@abogadoextranjeriaonline/video/7495914945484852504"
                            data-video-id="7495914945484852504"
                            style={{ maxWidth: "605px", minWidth: "325px" }}
                        >
                            <section>
                                <a target="_blank" title="@abogadoextranjeriaonline" href="https://www.tiktok.com/@abogadoextranjeriaonline?refer=embed">@abogadoextranjeriaonline</a>
                            </section>
                        </blockquote>
                    </div>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                        <Clock className="w-8 h-8 text-emerald-600 mr-3" /> Cuenta Atrás: Menos de 24 Horas
                    </h2>
                    <p className="lead text-xl text-slate-600 mb-8">
                        Si estás leyendo esto, estás a solo unas horas de poder cambiar tu situación legal en España. Mañana <strong>16 de abril</strong> se activa la plataforma oficial para recibir los miles de expedientes de la Regularización 2026.
                    </p>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-slate-900">1</div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Presentación Telemática Prioritaria</h3>
                                <p className="text-slate-600 text-sm">El sistema <strong>Mercurio</strong> estará habilitado 24/7. Es la vía más rápida y la que te otorga el resguardo de presentación al instante.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-slate-900">2</div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Carga de Documentos</h3>
                                <p className="text-slate-600 text-sm">Asegúrate de tener tu pasaporte completo, antecedentes penales apostillados y pruebas de permanencia escaneadas en PDF (máximo 5MB por archivo).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-slate-900">3</div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Habilitación de Trabajo</h3>
                                <p className="text-slate-600 text-sm">Desde el momento en que recibes el justificante de admisión a trámite, el BOE te otorga una habilitación provisional para empezar a trabajar legalmente.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-slate-700">
                        No satures el sistema en los primeros minutos si no tienes el expediente completo. Tienes hasta el 30 de junio, pero es vital hacerlo bien a la primera. No nos permiten errores tontos como una tasa sin pagar o un pasaporte caducado.
                    </p>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Laptop className="w-32 h-32" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Preparado para mañana?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Iniciaremos la presentación de los expedientes de nuestros clientes por orden de llegada a partir de las 09:00 AM. Asegura tu plaza en nuestra lista de mañana.
                    </p>
                    <WhatsAppButton 
                        message="Hola, quiero estar en la lista de presentaciones de mañana 16 de abril. Tengo mi documentación lista."
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg flex items-center mx-auto gap-2"
                    >
                        <Send className="w-5 h-5" />
                        Asegurar mi Presentación Mañana
                    </WhatsAppButton>
                </div>

                <RelatedPosts currentPath="/blog/mañana-empiezan-solicitudes" />
            </article>
        </main>
    );
}
