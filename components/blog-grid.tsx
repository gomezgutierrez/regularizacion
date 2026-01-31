
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, FileText } from "lucide-react";

export function BlogGrid() {
    const posts = [
        {
            title: "¿Asilo pendiente? Guía para la Regularización 2026",
            excerpt: "Resolvemos la duda más frecuente: ¿Puedo acogerme a la nueva ley si tengo la 'tarjeta roja' o blanca?",
            icon: FileText,
            color: "bg-blue-100 text-blue-600",
            href: "/blog/asilo-y-regularizacion-masiva-2026-compatibles"
        },
        {
            title: "Cómo evitar la denegación de tu expediente",
            excerpt: "Los 3 errores más comunes y cómo el estudio de viabilidad es el primer paso para acceder a nuestra gestión integral garantizada.",
            icon: ShieldAlert,
            color: "bg-amber-100 text-amber-600",
            href: "/guia-regularizacion-2026"
        },
        {
            title: "Novedades de la Reforma de Extranjería",
            excerpt: "Análisis detallado de los cambios en los plazos de estancia y requisitos de arraigo para 2026.",
            icon: BookOpen,
            color: "bg-emerald-100 text-emerald-600",
            href: "/guia-regularizacion-2026" // Fallback to guide as requested
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Actualidad y Recursos</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Mantente informado con nuestros análisis legales expertos sobre la nueva normativa.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Link
                            key={index}
                            href={post.href}
                            className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-accent/20 hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${post.color} group-hover:scale-110 transition-transform`}>
                                <post.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center text-accent font-bold text-sm mt-auto">
                                Leer más <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
