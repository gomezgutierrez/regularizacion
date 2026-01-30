import { FileText, Users, Clock, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

export function InfoSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold tracking-wide mb-4 border border-green-200">
                        ✅ Acuerdo Confirmado Gobierno - Podemos
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Regularización de medio millón de migrantes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Se aprobará por <strong>Real Decreto</strong> para agilizar el trámite. Es la medida más importante en 20 años.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">¿Quién puede aplicar?</h3>
                        <p className="text-muted-foreground text-sm">
                            Personas que vivan en España antes del <strong>31 de diciembre de 2025</strong> (fecha por confirmar/actualizada según acuerdo).
                        </p>
                        <p className="text-xs text-slate-400 mt-2 italic">Sin antecedentes penales.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">¿Qué se consigue?</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                Permiso de residencia y trabajo por 1 año.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                Suspensión de órdenes de expulsión.
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Fechas Clave</h3>
                        <p className="text-muted-foreground text-sm">
                            Se prevé abrir solicitudes en <strong>Primavera (Abril)</strong> hasta finales de <strong>Junio</strong>.
                        </p>
                        <div className="mt-3 bg-amber-50 text-amber-800 text-xs p-2 rounded border border-amber-100 flex gap-2">
                            <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" />
                            Plazo muy corto. Prepara documentos YA.
                        </div>
                    </div>
                </div>

                {/* SEO Content & FAQ */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                        <HelpCircle className="w-6 h-6 text-accent" />
                        Preguntas Frecuentes sobre la Regularización (FAQ)
                    </h3>

                    <div className="space-y-4">
                        <details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md hover:bg-white">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-800 hover:text-primary list-none">
                                <span>¿Cuándo empieza la regularización extraordinaria 2026?</span>
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 pt-0 text-slate-600 leading-relaxed text-sm">
                                Según el acuerdo entre Gobierno y Podemos, la tramitación se hará vía Real Decreto. Se espera que el plazo de solicitudes se abra en <strong>abril de 2026</strong> y dure 3 meses. Es fundamental tener la documentación lista antes de esa fecha.
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md hover:bg-white">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-800 hover:text-primary list-none">
                                <span>¿Qué documentos necesito para demostrar mi arraigo?</span>
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 pt-0 text-slate-600 leading-relaxed text-sm">
                                Para esta regularización masiva o el nuevo reglamento, necesitarás pruebas de estancia en España anteriores a finales de 2025. Los documentos más válidos son:
                                <ul className="list-disc ml-5 mt-2 space-y-1">
                                    <li>Certificado de empadronamiento histórico.</li>
                                    <li>Informes médicos de la Seguridad Social.</li>
                                    <li>Justificantes de envío de dinero.</li>
                                    <li>Abonos de transporte público nominales.</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md hover:bg-white">
                            <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-slate-800 hover:text-primary list-none">
                                <span>¿Afecta esta regularización masiva a los solicitantes de asilo?</span>
                                <span className="transition-transform group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 pt-0 text-slate-600 leading-relaxed text-sm">
                                Sí, esta regularización masiva es compatible y muy beneficiosa para personas con solicitud de asilo pendiente o denegada, siempre que cumplan el requisito de estancia temporal en el país. Permite cambiar a un permiso de residencia y trabajo estable.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}
