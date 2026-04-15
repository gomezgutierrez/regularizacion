import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, FileText } from "lucide-react";

interface RelatedPostsProps {
    currentPath: string;
}

export function RelatedPosts({ currentPath }: RelatedPostsProps) {
    const allPosts = [
        {
            title: "¿Asilo pendiente? Guía para la Regularización 2026",
            excerpt: "¿Puedo acogerme a la nueva ley si tengo la 'tarjeta roja' o blanca?",
            icon: FileText,
            color: "bg-blue-100 text-blue-600",
            href: "/blog/asilo-y-regularizacion-masiva-2026-compatibles"
        },
        {
            title: "5 Errores Fatales al Solicitar la Regularización",
            excerpt: "Los fallos de papeleo más comunes y cómo el estudio preventivo evita denegaciones.",
            icon: ShieldAlert,
            color: "bg-amber-100 text-amber-600",
            href: "/blog/errores-fatales-regularizacion-2026"
        },
        {
            title: "Cómo demostrar los 5 meses de permanencia",
            excerpt: "Lista definitiva oficial de los documentos necesarios para aprobar.",
            icon: BookOpen,
            color: "bg-emerald-100 text-emerald-600",
            href: "/blog/demostrar-permanencia-arraigo-extraordinario"
        },
        {
            title: "El Permiso de Trabajo Provisional en detalle",
            excerpt: "Conoce el momento exacto en el que obtienes la habilitación laboral.",
            icon: FileText,
            color: "bg-purple-100 text-purple-600",
            href: "/blog/permiso-trabajo-provisional-regularizacion"
        }
    ];

    // Filter out current post and get maximum 2 posts
    const related = allPosts.filter(post => post.href !== currentPath).slice(0, 2);

    return (
        <section className="bg-slate-50 border-t border-slate-200 py-12 mt-16 rounded-3xl mb-8" aria-labelledby="related-posts-heading">
            <div className="px-8">
                <h2 id="related-posts-heading" className="text-2xl font-bold text-slate-900 mb-8">
                    Mantente informado: Artículos Relacionados
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {related.map((post, index) => (
                        <Link
                            key={index}
                            href={post.href}
                            className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col"
                            aria-label={`Leer artículo completo: ${post.title}`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${post.color}`}>
                                    <post.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-slate-900 leading-tight group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-4">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto font-bold text-accent text-sm flex items-center">
                                Leer análisis <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
