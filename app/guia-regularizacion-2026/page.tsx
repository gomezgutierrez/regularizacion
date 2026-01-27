import type { Metadata } from "next";
import { CheckCircle2, AlertTriangle, FileText, Calendar, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
    title: "Guía Definitiva Regularización 2026: Requisitos y Trámites",
    description: "Todo sobre la Regularización Extraordinaria de Extranjeros 2026 (Real Decreto). Plazos, documentos para arraigo y cómo solicitarla paso a paso.",
    alternates: {
        canonical: "/guia-regularizacion-2026",
    },
};

export default function GuiaPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Guía Definitiva para la Regularización Extraordinaria 2026",
        "datePublished": "2026-01-20",
        "dateModified": "2026-01-27",
        "author": {
            "@type": "Organization",
            "name": "Despacho Legal Extranjería"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Despacho Legal Extranjería",
            "logo": {
                "@type": "ImageObject",
                "url": "https://regularizacionya.es/logo.png"
            }
        },
        "description": "Explicación detallada del proceso de regularización masiva de 2026 en España.",
        "faqPage": {
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "¿Cuándo se puede solicitar la regularización de 2026?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El plazo de solicitud se abrirá previsiblemente en abril de 2026 y permanecerá abierto durante 3 meses, hasta junio. Es un plazo improrrogable."
                }
            }, {
                "@type": "Question",
                "name": "¿Qué requisitos son necesarios?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Principalmente: estar en España antes del 31 de diciembre de 2025, carecer de antecedentes penales y demostrar arraigo socio-laboral o familiar."
                }
            }]
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero de Contenido */}
            <header className="bg-slate-900 text-white pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-amber-400 font-bold tracking-wider text-sm uppercase mb-4 block">
                        Actualizado Enero 2026
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Guía Definitiva: Regularización Extraordinaria de Extranjeros 2026
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        El manual completo para entender el Real Decreto, preparar tu expediente y evitar errores que denieguen tus papeles.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">

                {/* Columna Principal - Contenido */}
                <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none">

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10 not-prose">
                        <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5" />
                            Advertencia Urgente
                        </h3>
                        <p className="text-amber-900">
                            Esta es una oportunidad única ("Ventanilla Única"). Si no presentas tu solicitud entre <strong>Abril y Junio de 2026</strong>, perderás el derecho a esta vía extraordinaria.
                        </p>
                    </div>

                    <h2>1. ¿Qué es la Regularización Extraordinaria 2026?</h2>
                    <p>
                        Es un proceso aprobado por el Gobierno de España mediante Real Decreto que permite a miles de personas extranjeras en situación administrativa irregular obtener una autorización de residencia y trabajo.
                    </p>
                    <p>
                        A diferencia de los arraigos tradicionales, este proceso está diseñado para ser <strong>masivo y ágil</strong>, reduciendo los requisitos de tiempo de estancia y facilitando la tramitación telemática.
                    </p>

                    <h2>2. Requisitos Clave para Aplicar</h2>
                    <p>Para tener éxito en tu solicitud, debes cumplir con tres pilares fundamentales:</p>
                    <ul>
                        <li><strong>Estancia Continuada:</strong> Haber entrado en España antes del 31 de diciembre de 2025.</li>
                        <li><strong>Buena Conducta:</strong> No tener antecedentes penales ni en España ni en tu país de origen.</li>
                        <li><strong>Arraigo:</strong> Demostrar vínculos con el país (empadronamiento, lazos familiares, o oferta de empleo).</li>
                    </ul>

                    <h2>3. Documentación Imprescindible</h2>
                    <p>
                        La carga de la prueba recae sobre ti. Empieza a recopilar estos documentos hoy mismo:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                                <FileText className="w-4 h-4" /> Identidad
                            </h4>
                            <p className="text-sm">Pasaporte completo (todas las hojas) en vigor. Copia de todas las páginas.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                                <Calendar className="w-4 h-4" /> Estancia
                            </h4>
                            <p className="text-sm">Certificado de empadronamiento histórico. Si no tienes, guarda informes médicos, envíos de dinero, etc.</p>
                        </div>
                    </div>

                    <h2>4. El Proceso Paso a Paso</h2>
                    <ol>
                        <li><strong>Recopilación (Enero-Marzo):</strong> Prepara tu carpeta de documentos. Traduce y legaliza antecedentes penales.</li>
                        <li><strong>Solicitud (Abril-Junio):</strong> Presentación telemática del expediente. Al presentarlo, se suspenden las órdenes de expulsión.</li>
                        <li><strong>Resolución:</strong> La Administración tiene un plazo para responder. Si es favorable, obtendrás tu TIE.</li>
                    </ol>

                    <div className="bg-blue-50 p-8 rounded-2xl my-12 text-center not-prose">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">¿Tienes dudas sobre tu caso particular?</h3>
                        <p className="text-blue-800 mb-6 max-w-xl mx-auto">
                            Cada expediente es un mundo. Un error en un documento puede significar la denegación y el cierre de esta oportunidad.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Consultar con una Abogada <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <h2>5. Preguntas Frecuentes (FAQ)</h2>
                    <p>
                        Hemos recopilado las dudas más comunes de nuestros clientes en el despacho.
                    </p>

                    {/* Aquí iría más contenido de Artículos de Soporte (interlinking) */}
                    <div className="not-prose grid gap-4 mt-6">
                        <a href="/blog/empadronamiento-historico" className="block p-4 border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all group">
                            <h4 className="font-bold text-lg group-hover:text-primary mb-1">Guía: Cómo demostrar estancia sin empadronamiento →</h4>
                            <p className="text-slate-500 text-sm">Alternativas legales aceptadas en 2026.</p>
                        </a>
                        <a href="/blog/antecedentes-penales" className="block p-4 border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all group">
                            <h4 className="font-bold text-lg group-hover:text-primary mb-1">Guía: Cancelar antecedentes penales →</h4>
                            <p className="text-slate-500 text-sm">No dejes que una multa te impida regularizarte.</p>
                        </a>
                    </div>

                </article>

                {/* Columna Lateral - Conversión (Sticky) */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-8 space-y-8">

                        {/* Lead Magnet - Checklist */}
                        <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-xl">
                            <h3 className="text-xl font-bold mb-3">🎁 Descarga Gratis</h3>
                            <p className="text-indigo-200 text-sm mb-4">
                                Checklist con los 15 documentos que sustituyen al padrón para demostrar tu estancia.
                            </p>
                            <a
                                href="/checklist-regularizacion-2026.txt"
                                download="Checklist-Regularizacion-2026.txt"
                                className="block w-full text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-colors"
                            >
                                Descargar Checklist PDF
                            </a>
                            <p className="text-xs text-center text-indigo-300 mt-3">Descarga inmediata. Sin spam.</p>
                        </div>

                        {/* Formulario Principal */}
                        <div id="contacto">
                            <LeadForm />
                        </div>

                    </div>
                </aside>

            </div>
        </main>
    );
}
