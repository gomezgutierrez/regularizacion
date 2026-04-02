import type { Metadata } from "next";
import { ShieldAlert, CheckCircle, ArrowRight, FileText, AlertTriangle, ChevronRight, ChevronDown, Home } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { AuthorBio } from "@/components/author-bio";

export const metadata: Metadata = {
    title: "Guía Completa sobre Antecedentes Penales para la Regularización 2026",
    description: "La guía definitiva para entender y cancelar antecedentes penales y policiales antes de solicitar tu regularización en 2026. Evita denegaciones.",
    alternates: {
        canonical: "/blog/guia-antecedentes-penales-2026",
    },
};

// JSON-LD Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guía Completa sobre Antecedentes Penales para la Regularización 2026",
    "description": "La guía definitiva para entender y cancelar antecedentes penales y policiales antes de solicitar tu regularización en 2026.",
    "image": "https://regularizacionmasiva.es/images/antecedentes-penales-espana.png", // Placeholder until generated
    "author": {
        "@type": "Person",
        "name": "Inmaculada Moncho",
        "url": "https://regularizacionmasiva.es"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Regularización Masiva 2026",
        "logo": {
            "@type": "ImageObject",
            "url": "https://regularizacionmasiva.es/logo.png"
        }
    },
    "datePublished": "2026-02-06",
    "dateModified": "2026-02-06"
};

const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuánto tardan en cancelarse los antecedentes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los antecedentes policiales tardan entre 1 y 3 meses tras presentar la solicitud. Los penales dependen de la pena impuesta: desde 6 meses para penas leves hasta 10 años para las más graves, contando desde que se cumplió la condena."
            }
        },
        {
            "@type": "Question",
            "name": "¿Puedo tramitar la regularización si tengo antecedentes policiales?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No es recomendable. Aunque no son una condena judicial, Extranjería tiene acceso a ellos y puede denegar tu solicitud por falta de 'buena conducta cívica'. Debes cancelarlos antes de presentar tu expediente."
            }
        },
        {
            "@type": "Question",
            "name": "¿Caducan los antecedentes penales?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No caducan automáticamente. Debes solicitar su cancelación activamente ante el Ministerio de Justicia una vez cumplidos los plazos de cancelación establecidos por la ley."
            }
        }
    ]
};

export default function GuiaPenales() {
    return (
        <main className="min-h-screen bg-slate-50 py-12">

            {/* Structured Data Scripts */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-12">

                <article className="lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-slate-500 mb-8 not-prose overflow-x-auto whitespace-nowrap pb-2">
                        <a href="/" className="hover:text-primary flex items-center transition-colors">
                            <Home className="w-4 h-4 mr-1" /> Inicio
                        </a>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                        <span className="text-slate-800 font-medium">Blog</span>
                        <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                        <span className="text-primary font-medium">Guía Antecedentes Penales</span>
                    </nav>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Guía Completa sobre Antecedentes Penales para la Regularización 2026
                    </h1>

                    <p className="lead text-xl text-slate-600 mb-8">
                        El éxito de una solicitud de residencia en España no depende solo de cumplir los años de permanencia; el pilar fundamental que sostiene cualquier expediente de extranjería es la seguridad jurídica. En este sentido, el certificado de antecedentes penales no es un simple trámite burocrático, sino el documento que valida tu aptitud legal para residir en el país.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8 not-prose shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                            <FileText className="w-5 h-5 mr-2 text-primary" />
                            Índice de Contenidos
                        </h4>
                        <nav className="flex flex-col gap-2 text-sm text-slate-700">
                            <a href="#evaluacion" className="hover:text-primary hover:underline flex items-start group">
                                <span className="text-slate-400 mr-2 group-hover:text-primary">1.</span>
                                ¿Qué evalúa realmente la Oficina de Extranjería?
                            </a>
                            <a href="#apostilla" className="hover:text-primary hover:underline flex items-start group">
                                <span className="text-slate-400 mr-2 group-hover:text-primary">2.</span>
                                El Certificado del País de Origen
                            </a>
                            <a href="#caducidad" className="hover:text-primary hover:underline flex items-start group">
                                <span className="text-slate-400 mr-2 group-hover:text-primary">3.</span>
                                La Caducidad: El factor tiempo
                            </a>
                            <a href="#diferencia" className="hover:text-primary hover:underline flex items-start font-semibold text-primary group">
                                <span className="text-primary mr-2">4.</span>
                                Antecedentes Penales vs. Policiales
                            </a>
                            <a href="#ultimos-5-anos" className="hover:text-primary hover:underline flex items-start group">
                                <span className="text-slate-400 mr-2 group-hover:text-primary">5.</span>
                                Los antecedentes de los últimos 5 años
                            </a>
                            <a href="#consecuencias" className="hover:text-primary hover:underline flex items-start group">
                                <span className="text-slate-400 mr-2 group-hover:text-primary">6.</span>
                                Consecuencias de presentación incorrecta
                            </a>
                            <a href="#faq" className="hover:text-primary hover:underline flex items-start group mt-2 pt-2 border-t border-slate-200">
                                <span className="text-slate-400 mr-2 group-hover:text-primary">?</span>
                                Preguntas Frecuentes (FAQ)
                            </a>
                        </nav>
                    </div>

                    <h2 id="evaluacion" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">1. ¿Qué evalúa realmente la Oficina de Extranjería?</h2>
                    <p>
                        Cuando presentas tu solicitud para la Regularización 2026, la Administración española busca confirmar que no representas una amenaza para la seguridad pública. Para ello, analizan dos vertientes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>La conducta en el país de origen:</strong> A través del certificado internacional.</li>
                        <li><strong>La conducta en España:</strong> A través del Registro Central de Penados.</li>
                    </ul>
                    <p>
                        Es importante entender que Extranjería no solo mira si has cumplido condena, sino el tipo de delito y la vigencia de la responsabilidad penal.
                    </p>

                    <h2 id="apostilla" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">2. El Certificado del País de Origen: La importancia de la Apostilla</h2>
                    <p>
                        Este es el punto donde más expedientes fallan. No basta con tener el documento; debe ser legalmente válido en España.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Países del Convenio de la Haya:</strong> El documento debe llevar la Apostilla de la Haya. Sin este sello, el documento no existe legalmente para España.</li>
                        <li><strong>Países fuera del Convenio:</strong> Requieren una legalización vía diplomática (Ministerio de Exteriores del país de origen y Consulado de España).</li>
                        <li><strong>Traducción Jurada:</strong> Si tu certificado no está en castellano, debe ser traducido por un traductor jurado autorizado por el MAEC. Una traducción simple será motivo de denegación.</li>
                    </ul>

                    <h2 id="caducidad" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">3. La Caducidad: El factor tiempo</h2>
                    <p>
                        El certificado de antecedentes penales es un documento con una "vida útil" muy corta.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Regla general:</strong> Tienen una vigencia de 90 días, a menos que el documento indique expresamente otra cosa (algunos países marcan 3 o 6 meses).</li>
                        <li><strong>El riesgo del envío:</strong> Si solicitas el certificado en tu país demasiado pronto y tarda en llegar por correo, es posible que cuando vayas a presentar tu regularización ya esté caducado.</li>
                    </ul>

                    {/* Text Link CTA */}
                    <div className="my-8 p-4 bg-primary/5 rounded-lg border-l-4 border-primary text-sm not-prose">
                        <p className="m-0 text-slate-700">
                            ¿Tienes dudas sobre la validez de tus documentos? <a href="#contacto" className="text-primary font-bold hover:underline">Consulta con nuestro equipo legal</a> antes de presentar nada.
                        </p>
                    </div>

                    <h2 id="diferencia" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">4. Antecedentes Penales vs. Antecedentes Policiales</h2>
                    <p>Este es un matiz técnico que genera mucha confusión y muchas denegaciones inesperadas:</p>

                    {/* Highlight Box */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl my-8 not-prose shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertTriangle className="w-24 h-24 text-yellow-500" />
                        </div>
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="p-3 bg-yellow-100 rounded-full shrink-0 text-yellow-700">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-yellow-900 mt-0 mb-3">Diferencia Crítica</h3>
                                <p className="text-slate-800 mb-4 text-sm leading-relaxed">
                                    <strong className="block mb-1 text-slate-900">Antecedentes Penales:</strong> Aparecen tras una sentencia firme de un juez.
                                </p>
                                <hr className="border-yellow-200 my-3" />
                                <p className="text-slate-800 text-sm leading-relaxed">
                                    <strong className="block mb-1 text-slate-900">Antecedentes Policiales (PERCUP):</strong>
                                    Son registros de detenciones o investigaciones de la Policía Nacional o Guardia Civil.
                                </p>
                                <div className="mt-4 bg-white/60 p-4 rounded-lg text-sm text-yellow-900 italic font-medium border border-yellow-100">
                                    ¿Por qué es crítico? Porque aunque un juez te haya declarado inocente o haya archivado tu caso, el antecedente policial permanece activo. Extranjería tiene acceso a estas bases y puede denegar la residencia alegando falta de "buena conducta".
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="ultimos-5-anos" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">5. Los antecedentes de los últimos 5 años</h2>
                    <p>
                        La normativa suele exigir el historial de los últimos 5 años de residencia. Si has vivido en varios países en ese periodo, es posible que necesites certificados de cada uno de ellos. Este análisis previo es lo que determina si un expediente es "limpio" o si requiere una estrategia jurídica específica antes de ser enviado.
                    </p>

                    <h2 id="consecuencias" className="scroll-mt-24 text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">6. Consecuencias de una presentación incorrecta</h2>
                    <p>
                        Presentar un certificado con antecedentes activos o mal legalizado no solo conlleva la denegación. También implica:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Pérdida de las tasas pagadas.</strong></li>
                        <li><strong>Anotación en tu expediente:</strong> Una denegación por antecedentes queda registrada y dificulta enormemente cualquier solicitud posterior.</li>
                        <li><strong>Riesgo de expulsión:</strong> Al notificar tu situación y ser denegada por motivos penales, te sitúas en el radar de la administración con una valoración negativa.</li>
                    </ul>

                    {/* FAQ Section */}
                    <div className="my-12 not-prose" id="faq">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <span className="bg-slate-100 p-2 rounded-lg mr-3">
                                <span className="text-primary">?</span>
                            </span>
                            Preguntas Frecuentes
                        </h3>
                        <div className="space-y-4">
                            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-800 list-none">
                                    ¿Cuánto tardan en cancelarse los antecedentes?
                                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                    Los antecedentes policiales tardan entre 1 y 3 meses tras presentar la solicitud. Los penales dependen de la pena impuesta: desde 6 meses para penas leves hasta 10 años para las más graves, contando desde que se cumplió la condena.
                                </div>
                            </details>

                            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-800 list-none">
                                    ¿Puedo tramitar la regularización si tengo antecedentes policiales?
                                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                    No es recomendable. Aunque no son una condena judicial, Extranjería tiene acceso a ellos y puede denegar tu solicitud por falta de "buena conducta cívica". Debes cancelarlos antes de presentar tu expediente.
                                </div>
                            </details>

                            <details className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-800 list-none">
                                    ¿Caducan los antecedentes penales?
                                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                    No caducan automáticamente. Debes solicitar su cancelación activamente ante el Ministerio de Justicia una vez cumplidos los plazos de cancelación establecidos por la ley.
                                </div>
                            </details>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 my-12 text-center shadow-2xl relative overflow-hidden not-prose">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                🚀 Asegura tu futuro con una gestión profesional
                            </h3>
                            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                                La regularización de 2026 es una oportunidad única. No dejes que un error de forma en tus antecedentes eche a perder años de espera en España.
                            </p>

                            <a
                                href="https://buy.stripe.com/cNi7sEfpOg4oalw53f6Ri00"
                                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-green-500/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                            >
                                INICIAR PROCEDIMIENTO DE REGULARIZACIÓN - 39€
                            </a>
                            <p className="text-slate-400 text-xs mt-4">
                                Realizamos un análisis profesional de tu situación documental para que presentes tu expediente con total seguridad. Este pago inicial se descuenta de la gestión completa (350€).
                            </p>
                        </div>
                    </div>

                    <hr className="my-12 border-slate-200" />

                    <AuthorBio />

                    <div className="mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
                        <p className="italic">Contenido redactado y supervisado por el equipo legal de Inmaculada Moncho, Colegiada ICAV 14318</p>
                    </div>

                </article>

                <aside className="lg:w-1/3" id="contacto">
                    <div className="sticky top-8 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center">
                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Limpiamos tu expediente</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Si tienes dudas sobre si constan antecedentes, podemos averiguarlo y cancelarlos por ti antes de la regularización.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
