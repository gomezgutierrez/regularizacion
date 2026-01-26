import { FileText, Users, Clock, CheckCircle2 } from "lucide-react";

export function InfoSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        ¿En qué consiste la Regularización Masiva?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        El gobierno de España debate una Iniciativa Legislativa Popular (ILP) para la
                        <strong className="text-primary font-semibold"> regularización extraordinaria de más de 500.000 extranjeros</strong>.
                        Infórmate antes de que sea tarde.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">¿A quién beneficia?</h3>
                        <p className="text-muted-foreground">
                            Principalmente a inmigrantes que ya residen en España sin papeles o con permisos caducados desde antes de noviembre de 2021 (fecha estimada, sujeta a aprobación).
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Requisitos probables</h3>
                        <p className="text-muted-foreground">
                            Empadronamiento previo, carencia de antecedentes penales y arraigo en el país.
                            <span className="font-semibold block mt-2">Tener los documentos listos es crucial.</span>
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Plazos de solicitud</h3>
                        <p className="text-muted-foreground">
                            De aprobarse, los plazos suelen ser cortos (3 a 6 meses). Si no presentas tu solicitud a tiempo, podrías perder la oportunidad.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-blue-50 p-8 rounded-3xl border border-blue-100">
                    <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                        ¿Por qué es urgente actuar?
                    </h3>
                    <ul className="space-y-4 max-w-2xl mx-auto">
                        {[
                            "El volumen de solicitudes colapsará el sistema.",
                            "Conseguir citas de extranjería será casi imposible.",
                            "Los antecedentes penales de tu país tardan en llegar.",
                            "Un error en el formulario puede denegar tu trámite."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
