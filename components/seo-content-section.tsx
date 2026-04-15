"use client";

import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqData = [
    {
        question: "¿Cuáles son los requisitos principales para la regularización extraordinaria en España (2026)?",
        answer: "Existen requisitos base obligatorios para todos: 1) Estar en España antes del 1 de enero de 2026, 2) Demostrar permanencia ininterrumpida de 5 meses previos y 3) Carecer de antecedentes penales. Además, deberás cumplir UNA de estas vías opcionales: tener un contrato de al menos 90 días, acreditar vulnerabilidad, tener vínculos familiares, o bien, ser solicitante de asilo. El plazo improrrogable termina el 30 de junio de 2026."
    },
    {
        question: "¿Qué pasa si mis antecedentes penales de mi país han caducado?",
        answer: "Debes aportar el certificado vigente o de lo contrario el trámite podría paralizarse o archivarse. Si existieran demoras demostrables ajenas a tu voluntad, el Reglamento prevé ciertas excepciones que valoraremos en la evaluación de viabilidad."
    },
    {
        question: "¿Se puede solicitar si ingresé a España después del 1 de enero de 2026?",
        answer: "No. El Real Decreto exige de manera explícita que la persona se encontrara en España antes del 1 de enero de 2026. Si llegaste después, tendrás que recurrir a otras vías de Extranjería ordinarias (Arraigo Social, Familiar, etc.)."
    },
    {
        question: "¿Es cierto que me dan permiso de trabajo desde el primer día?",
        answer: "Sí. Una vez extranjería admite a trámite la solicitud y emite la comunicación de inicio, quedarás habilitado provisionalmente para residir y trabajar (por cuenta ajena o propia) hasta que se resuelva tu expediente (plazo máximo de 3 meses)."
    }
];

export function SeoContentSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section className="py-16 bg-white text-slate-800" id="informacion">
            <div className="container mx-auto px-4 max-w-4xl">
                
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Novedades: Qué ha aprobado el Gobierno con el Arraigo Extraordinario y Asilo</h2>
                    <p className="text-lg mb-4 text-slate-600 leading-relaxed">
                        El proceso de <strong>Regularización Extraordinaria España 2026</strong> ha puesto en vigor dos nuevas autorizaciones de residencia excepcionales que pueden cambiar tu vida. Estos permisos están diseñados para regularizar la situación de miles de inmigrantes y solicitantes de asilo antes del <strong>30 de junio de 2026</strong>.
                    </p>
                    <p className="text-lg mb-6 text-slate-600 leading-relaxed">
                        Entender qué tipo de permiso de residencia (papeles en España) te corresponde es el primer paso vital para asegurar tu futuro. 
                    </p>

                    <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">Tipos de Permisos para Regularizar tu Situación en 2026</h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="text-xl font-bold text-accent mb-3">Nuevo Arraigo para Solicitantes de Asilo</h4>
                            <p className="text-sm text-slate-600 mb-4">Si pediste protección internacional (asilo) antes del 1 de enero de 2026 y aún no tienes respuesta definitiva, esta es tu vía.</p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" /> No requiere oferta de empleo.</li>
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Habilita para trabajar.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="text-xl font-bold text-primary mb-3">Arraigo Extraordinario para Inmigrantes</h4>
                            <p className="text-sm text-slate-600 mb-4">Para personas en situación administrativa irregular que entraron a territorio español antes del inicio de 2026.</p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Requiere demostrar 5 meses de estadía.</li>
                                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" /> Vínculo laboral, familiar o vulnerabilidad.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Requisitos Principales para Conseguir tus Papeles</h2>
                    <p className="text-lg text-slate-600 mb-6">Independientemente de la vía, la ley general de Extranjería impone condiciones que no puedes saltarte. Los expedientes rechazados suelen fallar por no cumplir con el rigor documental.</p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start p-4 bg-blue-50/50 rounded-xl">
                            <div className="bg-blue-100 p-2 rounded-full mr-4"><span className="font-bold text-blue-700">1</span></div>
                            <div>
                                <h4 className="font-bold text-slate-800">Fecha de Entrada Demostrable</h4>
                                <p className="text-slate-600 text-sm mt-1">Debes haber estado en España ininterrumpidamente antes del 1 de enero de 2026.</p>
                            </div>
                        </li>
                        <li className="flex items-start p-4 bg-blue-50/50 rounded-xl">
                            <div className="bg-blue-100 p-2 rounded-full mr-4"><span className="font-bold text-blue-700">2</span></div>
                            <div>
                                <h4 className="font-bold text-slate-800">5 Meses de Permanencia Continua</h4>
                                <p className="text-slate-600 text-sm mt-1">Es necesario demostrar (con padrón, recibos médicos, etc) que has vivido aquí los cinco meses anteriores a la entrega del expediente.</p>
                            </div>
                        </li>
                        <li className="flex items-start p-4 bg-blue-50/50 rounded-xl">
                            <div className="bg-blue-100 p-2 rounded-full mr-4"><span className="font-bold text-blue-700">3</span></div>
                            <div>
                                <h4 className="font-bold text-slate-800">Cero Antecedentes Penales</h4>
                                <p className="text-slate-600 text-sm mt-1">Expediente limpio tanto en España como en aquellos países donde residiste durante los últimos 5 años.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Trabaja Legalmente de Forma Inmediata: El Permiso Provisional</h2>
                    <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                        Uno de los grandes miedos suele ser el tiempo de espera. La principal novedad de este Real Decreto es que el Gobierno te otorga un <strong>permiso provisional de trabajo inmediato</strong>. 
                    </p>
                    <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                        Desde el mismo momento en el que extranjería te emite la comunicación de que ha iniciado el trámite (al presentar un expediente perfecto y sin fisuras), quedarás habilitado provisionalmente para <strong>residir y trabajar por cuenta ajena o propia</strong> en todo el territorio nacional, mientras esperas la resolución final que tardará máximo 3 meses.
                    </p>
                </div>

                {/* FAQ SECTION WITH SCHEMA MARKUP INSIDE */}
                <div className="mb-8" itemScope itemType="https://schema.org/FAQPage">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center pt-8 border-t border-slate-200">Preguntas Frecuentes (FAQ) sobre la Regularización 2026</h2>
                    
                    <div className="space-y-4">
                        {faqData.map((faq, idx) => (
                            <div 
                                key={idx} 
                                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                            >
                                <button 
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                                >
                                    <h3 itemProp="name" className="font-bold text-slate-800 pr-8">{faq.question}</h3>
                                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />}
                                </button>
                                <div 
                                    className={cn("px-6 overflow-hidden transition-all duration-300 ease-in-out", openFaq === idx ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0")}
                                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                                >
                                    <div itemProp="text" className="text-slate-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
