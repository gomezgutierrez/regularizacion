import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import posts from "@/content/posts.json";

export const metadata: Metadata = {
    title: "Noticias y Guías: Regularización Extraordinaria España 2026",
    description: "Mantente informado sobre el proceso de regularización 2026. Análisis del BOE, guías paso a paso y últimas noticias para conseguir tus papeles.",
    keywords: ["noticias extranjería 2026", "blog regularización", "guía arraigo extraordinario", "actualidad boe"],
    alternates: {
        canonical: "https://regularizacionmasiva.es/blog"
    }
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-16 md:py-24 overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Centro de <span className="text-accent">Actualidad</span> Jurídica
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-0">
                        Análisis experto sobre la Regularización Extraordinaria 2026. Tu fuente oficial de guías y noticias actualizadas minuto a minuto.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Posts Grid */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Link 
                            key={index}
                            href={post.href}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100"
                        >
                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${post.color}`}>
                                        {post.title.includes("VIDEO") ? "Vídeo Análisis" : "Guía Oficial"}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-accent transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center text-slate-400 text-xs gap-3">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> 15 Abr
                                        </span>
                                        <span className="flex items-center gap-1 text-accent font-bold">
                                            Leer más <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter / CTA */}
            <div className="container mx-auto px-4 mt-20">
                <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Te avisamos de los cambios?</h2>
                        <p className="text-slate-600 text-lg">
                            Suscríbete a nuestra lista de difusión para recibir las alertas del BOE y cambios en el sistema Mercurio antes que nadie.
                        </p>
                    </div>
                    <Link 
                        href="https://wa.me/34614731773" 
                        target="_blank"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-5 px-10 rounded-2xl shadow-lg transition-all flex items-center gap-3 shrink-0"
                    >
                        Unirme al Canal de WhatsApp
                    </Link>
                </div>
            </div>
        </main>
    );
}
