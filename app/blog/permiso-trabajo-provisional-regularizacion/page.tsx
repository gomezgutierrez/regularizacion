import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, FileCheck2, Clock, Info } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
    title: "Permiso de Trabajo Provisional: Regularización Extraordinaria España 2026",
    description: "Análisis Jurídico: Descubre en qué momento exacto de tu trámite de arraigo extraordinario consigues la habilitación provisional legal para trabajar en España.",
};

export default function BlogPostPermiso() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Volver al menú principal
                    </Link>
                </div>
            </div>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Permiso de Trabajo Provisional en la Regularización 2026: <span className="text-accent">¿Cómo y cuándo se activa?</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-12">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Análisis Jurídico</span>
                    <span>Lectura: 6 min</span>
                </div>

                <div className="prose prose-slate prose-lg max-w-none mb-16">
                    <p className="lead text-xl text-slate-600 mb-8">
                        La principal novedad -y ventaja- del definitivo <strong>Real Decreto 316/2026 de Extranjería (BOE del 15 de abril)</strong> no es solo la posibilidad de regularizar a miles de personas, sino la introducción oficial y confirmada de la <strong>Habilitación Provisional para Trabajar</strong>.
                    </p>

                    <p className="text-slate-700 mb-6">
                        Anteriormente, los solicitantes de arraigo debían enfrentar meses de angustia técnica y financiera mientras la Administración resolvía sus expedientes. Si recibían una oferta laboral durante ese tiempo de espera, muchas veces la perdían porque no podían darse de alta en la Seguridad Social. 
                    </p>

                    <p className="text-slate-700 mb-8">
                        La nueva Disposición Adicional del Reglamento de Extranjería ha puesto fin a este problema. A continuación, desgranamos su funcionamiento técnico y los plazos exactos.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                        <Clock className="w-6 h-6 text-accent mr-2" /> 1. El momento exacto de la habilitación
                    </h2>
                    <p className="text-slate-700 mb-6">
                        El texto legal es diáfano: <em>«hasta que se resuelva el procedimiento, se habilitará, de forma provisional, a las personas solicitantes a residir y a trabajar por cuenta ajena y por cuenta propia en todo el territorio nacional...»</em>.
                    </p>
                    <p className="text-slate-700 mb-6">
                        Pero la clave está en el cuándo. ¿Ocurre en el instante de hacer clic en enviar la solicitud telemática? <strong>No exactamente.</strong>
                    </p>
                    <p className="text-slate-700 mb-6">
                        La habilitación arranca formalmente <strong>cuando la solicitud es admitida a trámite</strong> y se expide la <strong>comunicación de inicio de tramitación</strong>. En ese resguardo oficial constará por escrito que el extranjero queda habilitado provisionalmente para trabajar.
                    </p>

                    <div className="bg-slate-100 border-l-4 border-slate-400 p-6 my-8 rounded-r-xl">
                        <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <Info className="w-5 h-5 mr-2 text-slate-600" /> El embudo inicial: Defectos de forma
                        </h4>
                        <p className="text-slate-700 m-0 text-sm">
                            Si presentas tu solicitud de Arraigo Extraordinario y está incompleta (faltan tasas, pasaporte sin copias completas), la Unidad de Tramitación te enviará un <em>requerimiento</em> de subsanación de 15 días. Durante ese "limbo" de tiempo, <strong>todavía no estarás habilitado para trabajar</strong>. De ahí la importancia suprema de presentar expedientes perfectos desde el primer intento.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <Briefcase className="w-6 h-6 text-accent mr-2" /> 2. Limitaciones sectoriales y geográficas
                    </h2>
                    <p className="text-slate-700 mb-4">
                        A diferencia de otras figuras migratorias o permisos de trabajo estacionales, el Arraigo Extraordinario de 2026, y por extensión su permiso provisional, viene <strong>sin limitaciones</strong>. 
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                        <li><strong>Por Sector:</strong> Puedes trabajar en construcción, hostelería, IT, o cualquier sector de actividad de la economía.</li>
                        <li><strong>Por Cuenta:</strong> Se te autoriza simultáneamente tanto para Cuenta Ajena (con contrato para un empleador) como para Cuenta Propia (para darte de alta como empleado autónomo).</li>
                        <li><strong>Territorial:</strong> El permiso es válido en cualquier parte, Comunidad Autónoma, o isla del territorio nacional de España.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8 flex items-center">
                        <FileCheck2 className="w-6 h-6 text-accent mr-2" /> 3. ¿Qué ocurre si me deniegan la solicitud principal?
                    </h2>
                    <p className="text-slate-700 mb-6">
                        Este es el riesgo legal inherente. La autorización de trabajo provisional está orgánicamente atada a la solicitud de arraigo.
                    </p>
                    <p className="text-slate-700 mb-6">
                        El Real Decreto indica: <em>«La denegación de la solicitud supondrá la automática pérdida de la habilitación provisional para trabajar sin necesidad de pronunciamiento administrativo expreso»</em>. 
                    </p>
                    <p className="text-slate-700 mb-8">
                        Más importante aún, introduce un deber directo hacia las empresas contratantes. Si la resolución a los tres meses resulta denegatoria y constas empleado como trabajador por cuenta ajena, el decreto te impone la obligación legal de informarlo <strong>«inmediatamente a la persona empleadora»</strong>. Mantener ese empleo después de la notificación de denegación te convertiría a ti y a la empresa en infractores sujetos a multas graves por ley.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Impacto a largo plazo</h2>
                    <p className="text-slate-700 mb-8">
                        En conclusión, el Permiso de Trabajo Provisional es una de las reformas más humanistas integradas en la legislación del 2026. Transforma el paradigma del "arraigo pasivo" a una "integración laboral activa". La responsabilidad de cada extranjero, no obstante, recae en garantizar que su expediente no solo sea admitido, sino <strong>finalmente aprobado</strong>, para que este permiso provisional se transforme exitosamente en el permiso titular de residencia y trabajo de 1 año de duración inicial.
                    </p>

                    <div className="border-t border-slate-200 pt-8 mt-12 text-center text-sm text-slate-500">
                        <p>Las interpretaciones desglosadas en este artículo tienen base estricta en el texto oficial publicado en el BOE (Real Decreto 316/2026) que modifica el RD 1155/2024 para la regularización extraordinaria en España.</p>
                    </div>
                </div>

                <RelatedPosts currentPath="/blog/permiso-trabajo-provisional-regularizacion" />

            </article>
        </main>
    );
}
