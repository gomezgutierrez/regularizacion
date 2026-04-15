import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileCheck2, Scale } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "BOE Oficial 2026: El Real Decreto para la Regularización Extraordinaria",
    description: "Análisis completo del BOE (RD 316/2026). Descubre el texto oficial, los plazos, y los nuevos requisitos de 90 días para obtener tu residencia en España.",
};

export default function BlogPostBOE() {


    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Volver a la portada
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Publicado en el BOE la <span className="text-primary">Regularización Extraordinaria 2026</span> (Real Decreto 316/2026)
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold">ÚLTIMA HORA</span>
                    <span>Lectura: 4 min</span>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <p className="lead text-xl text-slate-700 mb-8 font-medium">
                        Finalmente se ha publicado en el Boletín Oficial del Estado (BOE) el esperado Real Decreto 316/2026, de 14 de abril. Este texto pone fin a meses de rumores y establece las bases legales definitivas para regularizar a casi medio millón de extranjeros en España.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                        <Scale className="w-6 h-6 text-primary mr-2" /> Los 3 Puntos Clave del BOE
                    </h2>
                    
                    <p className="text-slate-700 mb-6">
                        El Gobierno ha escuchado parcialmente a los agentes sociales, reduciendo las trabas burocráticas previstas inicialmente. Estas son las tres grandes alegrías del texto aprobado:
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-lg shrink-0">1</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Contrato Laboral Ridículamente Bajo</h3>
                                <p className="text-slate-600 m-0">Adiós al requisito de 6 o 12 meses cotizados. El BOE solo pide acreditar la intención de trabajar mediante una <strong>oferta o contrato superior a 90 días</strong> (3 meses) dentro de un año para el Arraigo Extraordinario.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-lg shrink-0">2</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Permiso de Trabajo Inmediato</h3>
                                <p className="text-slate-600 m-0">No hay que esperar tres meses a la resolución. Desde el mismo día en que presentas la solicitud (y es admitida a trámite), el Estado te otorga una <strong>Habilitación Provisional</strong> para trabajar por cuenta ajena o propia.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="p-3 bg-blue-100 text-blue-700 rounded-lg shrink-0">3</div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Salida de Emergencia para Solicitantes de Asilo</h3>
                                <p className="text-slate-600 m-0">La nueva <i>Disposición Adicional Vigésima</i> permite que los que tengan asilo en proceso puedan acogerse al arraigo sin tener que renunciar preventivamente a su protección internacional.</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                        <Clock className="w-6 h-6 text-primary mr-2" /> Cronología Fatal: 30 de Junio
                    </h2>
                    <p className="text-slate-700 mb-4">
                        Toda esta flexibilización viene acompañada de una advertencia drástica en el BOE. El plazo de presentación de expedientes es inamovible: **finaliza el 30 de Junio de 2026**.
                    </p>
                    <p className="text-slate-700 mb-8">
                        Además, el texto señala que la Administración tendrá 3 meses para resolver y que operará el <strong>silencio administrativo negativo</strong>. Es decir, si tu expediente está mal planteado o tiene lagunas en el cumplimiento de los 5 meses previos ininterrumpidos en España, terminará denegado automáticamente al cumplirse el trimestre.
                    </p>

                    <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8 mt-12 text-center shadow-xl shadow-slate-900/20 md:text-left flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:pr-8">
                            <h3 className="text-2xl font-bold mb-2">Ya no hay rumores, es la Ley</h3>
                            <p className="text-slate-300">
                                Como despacho especialista en la Regularización, procedemos ya a presentar telemáticamente los expedientes bajo el nuevo Real Decreto. 
                            </p>
                        </div>
                        <WhatsAppButton 
                            message="Hola, he visto el BOE de la Regularización y quiero iniciar trámites urgentes."
                            className="shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-center transition-transform hover:scale-105 min-h-[56px] flex items-center shadow-lg"
                        >
                            Hablar con un Abogado 
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </WhatsAppButton>
                    </div>
                </div>

                <RelatedPosts currentPath="/blog/boe-oficial-regularizacion-extraordinaria-2026" />
            </article>
        </main>
    );
}
