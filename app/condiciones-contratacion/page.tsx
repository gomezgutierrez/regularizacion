
import Link from 'next/link';

export const metadata = {
    title: 'Condiciones de Contratación | Regularización 2026',
    description: 'Términos y condiciones del servicio de asesoramiento jurídico.',
};

export default function ContratacionPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Condiciones de Contratación</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6 text-slate-700">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">1. Objeto del Servicio</h2>
                        <p>
                            Prestación de servicios de <strong>asesoramiento jurídico</strong> telemático para la evaluación de viabilidad de expedientes de extranjería, específicamente en el marco del nuevo Reglamento de Extranjería (ROEX).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">2. Precio y Forma de Pago</h2>
                        <p className="mb-2">
                            El coste de la consulta inicial de viabilidad es de <strong>39,00 € (IVA incluido)</strong>.
                        </p>
                        <p className="bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-100">
                            <strong>Importante:</strong> El importe abonado por esta consulta (39€) será <u>descontado íntegramente</u> del precio total del trámite si el cliente decide contratar la gestión completa del expediente con nuestro despacho.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">3. Identificación del Prestador</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Titular:</strong> Inmaculada Moncho Giner</li>
                            <li><strong>N.I.F.:</strong> 24376978Z</li>
                            <li><strong>Colegiación:</strong> Abogada ejerciente.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-3">4. Política de Devoluciones</h2>
                        <p>
                            Al tratarse de un servicio de asesoramiento inmediato y personalizado, una vez realizado el análisis no se admiten devoluciones. Si por causas técnicas imputables al despacho no pudiera realizarse el servicio, se reintegrará el importe íntegro.
                        </p>
                    </section>

                    <div className="pt-8 mt-8 border-t border-slate-100">
                        <Link href="/" className="text-primary hover:underline font-medium">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
