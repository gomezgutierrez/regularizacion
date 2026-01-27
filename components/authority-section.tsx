import { ShieldCheck, Star } from "lucide-react";

export function AuthoritySection() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    <div className="w-full md:w-1/3 flex justify-center">
                        {/* Placeholder for lawyer image - using a nice gradient div or generic avatar if no image */}
                        <div className="w-64 h-64 rounded-full bg-slate-200 overflow-hidden relative border-4 border-white shadow-xl flex items-center justify-center">
                            <span className="text-6xl">⚖️</span>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start gap-3">
                            Experta en Extranjería e Inmigración
                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Hola, soy <strong>Inmaculada Moncho</strong> (Abogada Colegiada). Mi despacho ha asesorado con éxito a cientos de personas para regularizar su situación administrativa en España.
                            Sabemos que el proceso genera incertidumbre. Por eso, mi objetivo es ofrecerte seguridad jurídica y una gestión transparente.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-3xl font-bold text-primary mb-1">+15</p>
                                <p className="text-sm text-muted-foreground">Años de experiencia</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-3xl font-bold text-primary mb-1">98%</p>
                                <p className="text-sm text-muted-foreground">Éxito en expedientes</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-slate-800 flex items-center justify-center md:justify-start gap-2">
                                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                "Gracias a ella pude traer a mis hijos" - Carlos M.
                            </p>
                            <p className="font-medium text-slate-800 flex items-center justify-center md:justify-start gap-2">
                                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                "Me explicaron todo muy claro en la primera llamada" - Sarah L.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
