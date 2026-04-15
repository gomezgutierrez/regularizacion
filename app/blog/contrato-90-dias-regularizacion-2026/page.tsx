import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays, CheckCircle2 } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { useWhatsApp } from "@/contexts/whatsapp-context";

export const metadata: Metadata = {
    title: "El Nuevo Requisito Laboral: Solo 90 Días de Contrato para Regularizarte",
    description: "El BOE confirma una rebaja sin precedentes en el Arraigo Extraordinario 2026. Necesitarás únicamente acreditar una relación laboral de 90 días en el año para tramitar tu residencia.",
};

export default function BlogPostContrato() {
    const { openWhatsApp } = useWhatsApp();

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Menú de artículos
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    El Requisito Bomba de la Regularización: <span className="text-emerald-600">Solo 90 Días de Contrato</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">Análisis Laboral</span>
                    <span>Lectura: 3 min</span>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <p className="lead text-xl text-slate-700 mb-8 font-medium">
                        Durante meses, los borradores iniciales de la reforma y los juristas advertíamos que el aspecto laboral del nuevo <strong>Arraigo Extraordinario 2026</strong> iba a penalizar a muchos inmigrantes que trabajaban de manera intermitente. Sin embargo, el texto oficial del Boletín Oficial del Estado (BOE) nos ha dado una inmensa tregua.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                        <Briefcase className="w-6 h-6 text-emerald-600 mr-2" /> De los temidos 6 meses, a solo 3 meses de contrato
                    </h2>
                    
                    <p className="text-slate-700 mb-6">
                        El requisito laboral se enmarca bajo la Disposición Adicional Vigesimoprimera para acreditar el "arraigo extraordinario". Históricamente, las regularizaciones en España exigían demostrar contratos consistentes de 6 a 12 meses de cotización previa o futura continua.
                    </p>
                    
                    <p className="text-slate-700 mb-8 rounded-xl bg-slate-100 border-l-4 border-emerald-500 p-6 italic">
                        El BOE exige literalmente: «Haber trabajado, por cuenta ajena o por cuenta propia... o acreditar la intención de trabajar... siempre que se acredite que el contrato o la suma de contratos tengan una duración superior a noventa días en un año».
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                        <CalendarDays className="w-6 h-6 text-emerald-600 mr-2" /> ¿Qué implicaciones tiene el plazo de 90 días?
                    </h2>
                    
                    <ul className="space-y-4 mb-10 text-slate-700 list-none pl-0">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                            <div>
                                <strong>La temporalidad está permitida:</strong> A diferencia de otros trámites muy estrictos en Extranjería que repudian los contratos de fijos discontinuos muy breves o contratos por circunstancias de la producción, el RD 316/2026 permite la suma de pequeños contratos. Todo el tiempo que sumes en diferentes empleos a lo largo de un año natural te contará.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                            <div>
                                <strong>Mínima barrera de entrada para empleadores:</strong> Antes era un problema conseguir que un empleador apostara por ofrecer un contrato largo a una persona sin papeles solo con promesas. Ahora, convencer a un empleador de firmar una oferta inicial de apenas un trimestre lo cambia todo a la hora de buscar trabajo pre-regularización.
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Por Cuenta Propia? Es aún más sencillo</h2>
                    <p className="text-slate-700 mb-8">
                        Otra sorpresa mayúscula del BOE es la equiparación de este tiempo si tu intención es emprender o ser 'autónomo'. El texto establece que para acreditar la intención de trabajar por cuenta propia tan solo debes presentar una <strong>"declaración responsable"</strong> en modelo específico.
                    </p>

                    <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8 mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:pr-4">
                            <h3 className="text-xl font-bold mb-2">Ya no hay excusas para no iniciar el trámite</h3>
                            <p className="text-slate-300 text-sm">
                                Tienes hasta el 30 de junio de 2026. Revisaremos de forma impecable el perfil laboral que puedas aportar para meterte en esa ventaja de los 90 días.
                            </p>
                        </div>
                        <button 
                            onClick={() => openWhatsApp("Hola, he visto lo del contrato de 90 días y quiero iniciar mi trámite.")}
                            className="shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
                        >
                            Preparar Expediente
                        </button>
                    </div>
                </div>

                <RelatedPosts currentPath="/blog/contrato-90-dias-regularizacion-2026" />
            </article>
        </main>
    );
}
