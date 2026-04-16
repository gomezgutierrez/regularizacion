import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileCheck2, Info } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
    title: "Cómo demostrar los 5 meses de permanencia para el Arraigo Extraordinario 2026",
    description: "Guía jurídica informativa: Conoce qué documentos son válidos en derecho para acreditar tu estancia en España ininterrumpida y cumplir los requisitos del nuevo decreto.",
};

export default function BlogPostPermanencia() {
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
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Cómo demostrar los 5 meses de permanencia para el <span className="text-primary">Arraigo Extraordinario 2026</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Guía Legal / Informativa</span>
                    <span>Lectura: 5 min</span>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <p className="lead text-lg text-slate-700 mb-8">
                        La aprobación definitiva del <strong>Real Decreto 316/2026 (BOE)</strong> introduce el "Arraigo Extraordinario", el cual permite obtener autorización de residencia y trabajo exprés. Uno de los requisitos más técnicos y estrictos es demostrar la <strong>permanencia ininterrumpida en España</strong>.
                    </p>

                    {/* TikTok Embed */}
                    <div className="mb-12 flex justify-center not-prose">
                        <div className="relative w-full max-w-[340px] md:max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-black">
                            <blockquote
                                className="tiktok-embed"
                                cite="https://www.tiktok.com/@abogadoextranjeriaonline/video/7495861118123511046"
                                data-video-id="7495861118123511046"
                                style={{ maxWidth: "605px", minWidth: "325px" }}
                            >
                                <section>
                                    <a target="_blank" title="@abogadoextranjeriaonline" href="https://www.tiktok.com/@abogadoextranjeriaonline?refer=embed">@abogadoextranjeriaonline</a>
                                </section>
                            </blockquote>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <CalendarDays className="w-6 h-6 text-primary mr-2" /> El doble requisito temporal: 2026 y 5 meses
                    </h2>
                    <p className="text-slate-700 mb-6">
                        El texto legal especifica dos condiciones cronológicas que no debemos confundir:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-slate-700 mb-8">
                        <li><strong>Haber estado en España ANTES del 1 de enero de 2026:</strong> Es la fecha de "corte" absoluto impuesta por el BOE. Si entraste al país el 2 de enero de 2026, quedas excluido del Arraigo Extraordinario.</li>
                        <li><strong>Haber permanecido de forma ininterrumpida durante los 5 meses anteriores a la solicitud:</strong> Justo antes del momento de registrar tu trámite en Extranjería (antes del 30 de junio), debes contar con 5 meses seguidos sin haber salido de España.</li>
                    </ol>

                    <div className="bg-slate-100 border-l-4 border-slate-400 p-6 my-8 rounded-r-xl">
                        <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <Info className="w-5 h-5 mr-2 text-slate-600" /> ¿Qué significa "ininterrumpida"?
                        </h4>
                        <p className="text-slate-700 m-0">
                            A efectos legales en extranjería, las ausencias menores (unos pocos días) a veces se toleran en otros arraigos, pero en este proceso excepcional, la recomendación de los juristas es presentar un caso donde la continuidad sea absoluta y demostrable mes a mes.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <FileCheck2 className="w-6 h-6 text-primary mr-2" /> "Cualquier prueba válida en derecho"
                    </h2>
                    <p className="text-slate-700 mb-4">
                        El artículo establece literalmente que la circunstancia de permanencia <em>«podrá acreditarse mediante cualquier prueba válida en derecho, siempre que incluya datos personales que permitan acreditar su identidad»</em>.
                    </p>
                    <p className="text-slate-700 mb-6">
                        ¿Qué significa esto en la práctica documental? Significa que no basta con el Padrón. Oficinas de Extranjería de toda España analizan las pruebas de manera restrictiva. Aquí detallamos los documentos probatorios más robustos:
                    </p>

                    <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">1. Documentación Registral e Institucional (Alta Fuerza Probatoria)</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                        <li><strong>Certificado de Empadronamiento Histórico:</strong> Debe mostrar el alta inicial (antes del 1/1/2026) y que no te has dado de baja en los últimos 5 meses.</li>
                        <li><strong>Historia Clínica del Servicio Público de Salud:</strong> Informes de citas médicas, recetas prescritas electrónicamente con fecha, asistencias a urgencias.</li>
                        <li><strong>Certificados de Servicios Sociales:</strong> O asistencia a ONGs (Cruz Roja, Cáritas) que mantengan registros nominales de las personas que acuden a sus centros.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">2. Documentación Transaccional Constatable</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                        <li><strong>Envíos de Dinero oficiales:</strong> Recibos de Western Union, MoneyGram, Ria o similares donde conste tu identidad, tu pasaporte y la fecha del envío realizado desde una oficina española.</li>
                        <li><strong>Abonos de Transporte Nominativos:</strong> Tarjetas de transporte público (TTP, bonos mensuales) asociadas a tu pasaporte, acompañadas del extracto de recargas o uso.</li>
                        <li><strong>Movimientos Bancarios Básicos:</strong> Si conseguiste abrir una cuenta básica, los movimientos de pagos recurrentes geolocalizados en España.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3. Documentación Complementaria (Para rellenar meses vacíos)</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
                        <li><strong>Facturas a tu nombre:</strong> Líneas telefónicas pre-pago registradas a nombre del titular con pasaporte, compras de valor nominal, alquileres de habitación (contratos privados visados).</li>
                        <li><strong>Certificados de Biblioteca Pública, gimnasios o centros cívicos:</strong> Carnets nominales con registro de entrada o uso.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Conclusión Legal</h2>
                    <p className="text-slate-700 mb-8">
                        Ante la Delegación de Gobierno, <strong>la acumulación de pruebas es tu mejor defensa</strong>. El objetivo de un expediente sólido no es enviar un documento por cada mes, sino tejer una línea de tiempo inquebrantable mediante distintos organismos que demuestre de facto que era imposible que estuvieras fuera de España durante el tiempo requerido.
                    </p>

                    {/* Subtle footer CTA matching the informative tone */}
                    <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-bold text-slate-800 mb-1">¿Dudas sobre tus pruebas de arraigo?</h4>
                            <p className="text-sm text-slate-600">En nuestro despacho analizamos tu documentación previa a la presentación formal.</p>
                        </div>
                        <Link href="/" className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors">
                            Volver y Consultar Análisis
                        </Link>
                    </div>
                </div>

                <RelatedPosts currentPath="/blog/demostrar-permanencia-arraigo-extraordinario" />

            </article>
        </main>
    );
}
