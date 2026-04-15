import { FileText, Users, Clock, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

export function InfoSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold tracking-wide mb-4 border border-green-200">
                        ✅ Real Decreto Oficialmente Aprobado
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Regularización de medio millón de migrantes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Se aprobará por <strong>Real Decreto</strong> para agilizar el trámite. Es la medida más importante en 20 años.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Tarjeta 1: Requisitos Base */}
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-700">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Requisitos Base (RD 316/2026)</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 mt-4 text-left">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                Estar en España <strong>antes del 1 de Enero de 2026</strong>.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                Demostrar permanencia de <strong>5 meses consecutivos</strong> previos a la solicitud.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                Carecer de antecedentes penales graves (nacionales o en su país de origen).
                            </li>
                        </ul>
                    </div>

                    {/* Tarjeta 2: Vías de acceso (Arraigo) */}
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-green-700">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Vías de Excepcionalidad (Cumplir 1)</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 mt-4 text-left">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                <strong>Laboral:</strong> Contrato de trabajo o promesa de trabajo de solo <strong>90 días</strong> en 1 año.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                <strong>Familiar:</strong> Unidad familiar con menores, ascendientes o dependientes en España.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                <strong>Vulnerabilidad:</strong> Informe emitido por entidades locales competentes.
                            </li>
                        </ul>
                    </div>

                    {/* Tarjeta 3: Vía de Asilo */}
                    <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-amber-200 text-amber-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                            DISP. ADICIONAL 20
                        </div>
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-700">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2">Solicitantes de Asilo</h3>
                        <p className="text-sm text-amber-800 mb-3">Si solicitaste o estabas en trámite de asilo antes de 2026 tienes una vía directa.</p>
                        <ul className="text-sm text-amber-800/80 space-y-2 mt-2 text-left">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <strong>No tienes que renunciar al asilo</strong> para iniciar el expediente, solo tras la aprobación definitiva.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                Suspensión Inmediata de órdenes de devolución o cartas extintivas en vigor.
                            </li>
                        </ul>
                    </div>

                    {/* Tarjeta 4: Fechas y Permiso */}
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-red-700">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Permiso Inmediato y Límite</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 mt-4 text-left">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <strong>Trabajo inmediato:</strong> Solo con la "comunicación de inicio de trámite" ya tienes habilitación provisional de trabajo.
                            </li>
                            <li className="flex items-start gap-2 font-bold text-red-600">
                                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                Plazo Máximo: 30 de Junio de 2026. Al transcurrir 3 meses sin resolución de la Administración hay silencio administrativo negativo.
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    );
}
