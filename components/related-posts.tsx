import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, FileText } from "lucide-react";
import posts from "@/content/posts.json";

const IconMap = {
    FileText: FileText,
    BookOpen: BookOpen,
    ShieldAlert: ShieldAlert
};

interface RelatedPostsProps {
    currentPath: string;
}

export function RelatedPosts({ currentPath }: RelatedPostsProps) {
    const allPosts = posts;

    // Filter out current post and get maximum 2 posts
    const related = allPosts.filter(post => post.href !== currentPath).slice(0, 2);

    return (
        <section className="bg-slate-50 border-t border-slate-200 py-12 mt-16 rounded-3xl mb-8" aria-labelledby="related-posts-heading">
            <div className="px-8">
                <h2 id="related-posts-heading" className="text-2xl font-bold text-slate-900 mb-8">
                    Mantente informado: Artículos Relacionados
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {related.map((post, index) => {
                        const Icon = IconMap[post.icon as keyof typeof IconMap] || FileText;
                        return (
                            <Link
                                key={index}
                                href={post.href}
                                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col"
                                aria-label={`Leer artículo completo: ${post.title}`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${post.color}`}>
                                        <Icon className="w-5 h-5" />
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
