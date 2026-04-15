
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, FileText, Briefcase } from "lucide-react";

export function BlogGrid() {
    const posts = [
        {
            title: "ANÁLISIS BOE: Guía Definitiva de la Regularización 2026",
            excerpt: "El Real Decreto 316/2026 ya es oficial. Te explicamos los plazos, las nuevas reglas y cómo obtener tu permiso.",
            icon: BookOpen,
            color: "bg-red-100 text-red-600",
            href: "/blog/boe-oficial-regularizacion-extraordinaria-2026"
        },
        {
            title: "El Nuevo Requisito Laboral: Contrato de 90 días",
            excerpt: "La gran sorpresa del BOE. Analizamos por qué el nuevo requisito temporal beneficia a miles de personas.",
            icon: Briefcase,
            color: "bg-emerald-100 text-emerald-600",
            href: "/blog/contrato-90-dias-regularizacion-2026"
        },
        {
            title: "¿Asilo pendiente? Guía para la Regularización 2026",
            excerpt: "Resolvemos la duda más frecuente: ¿Puedo acogerme a la nueva ley si tengo la 'tarjeta roja' o blanca?",
            icon: FileText,
            color: "bg-blue-100 text-blue-600",
            href: "/blog/asilo-y-regularizacion-masiva-2026-compatibles"
        },
        {
            title: "5 Errores Fatales al Solicitar la Regularización",
            excerpt: "Los fallos más comunes al presentar tus papeles y cómo el estudio de viabilidad evita denegaciones.",
            icon: ShieldAlert,
            color: "bg-amber-100 text-amber-600",
            href: "/blog/errores-fatales-regularizacion-2026"
        },
        {
            title: "Cómo demostrar los 5 meses de permanencia",
            excerpt: "Qué documentos tienen validez legal para acreditar que estabas en España antes del 1 de enero de 2026.",
            icon: BookOpen,
            color: "bg-emerald-100 text-emerald-600",
            href: "/blog/demostrar-permanencia-arraigo-extraordinario"
        },
        {
            title: "El Permiso de Trabajo Provisional en detalle",
            excerpt: "Descubre exactamente en qué momento del proceso consigues la habilitación legal para trabajar de forma inmediata.",
            icon: FileText,
            color: "bg-purple-100 text-purple-600",
            href: "/blog/permiso-trabajo-provisional-regularizacion"
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
