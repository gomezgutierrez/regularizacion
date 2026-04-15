import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, FileText, Briefcase } from "lucide-react";
import postsManifest from "@/content/posts.json";

const IconMap = {
    BookOpen: BookOpen,
    ShieldAlert: ShieldAlert,
    FileText: FileText,
    Briefcase: Briefcase
};

export function BlogGrid() {
    // Show only the latest 6 posts on the homepage
    const recentPosts = postsManifest.slice(0, 6);

    return (
        <section className="py-20 bg-white" id="noticias">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Últimas Actualizaciones</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Analizamos minuto a minuto los cambios en la Ley de Extranjería para que siempre tengas la información oficial.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {recentPosts.map((post, index) => {
                        const Icon = IconMap[post.icon as keyof typeof IconMap] || FileText;
                        return (
                            <Link
                                key={index}
                                href={post.href}
                                className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${post.color} group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-accent font-bold text-sm mt-auto">
                                    Ver análisis experto <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-4 px-10 rounded-full transition-all text-sm uppercase tracking-widest"
                    >
                        Ver todas las noticias <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
