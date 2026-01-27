import { FileText, Users, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                            Documentos necesarios (Previsión)
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Para demostrar que estabas en España antes de la fecha límite, ve recopilando:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Certificado de Empadronamiento (Histórico)",
                                "Citas médicas o informes de urgencias",
                                "Contratos de alquiler o recibos de suministros",
                                "Envíos de dinero o abonos de transporte"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-lg mb-3 text-primary">¿Por qué ahora?</h4>
                        <p className="text-slate-600 text-sm mb-4">
                            El Gobierno busca dar seguridad jurídica, facilitar la entrada en el mercado laboral y responder a la demanda social.
                        </p>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <p className="font-semibold text-primary text-sm mb-1">⚠️ Importante</p>
                            <p className="text-xs text-slate-500">
                                Un error en la solicitud o presentarla fuera de plazo (Abril-Junio) podría dejarte fuera.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
