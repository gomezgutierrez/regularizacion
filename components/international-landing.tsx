
"use client";

import { CheckCircle } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

interface InternationalLandingProps {
    language: "en" | "fr";
    title: string;
    subtitle: string;
    keyPoints: string[];
    ctaText: string;
}

export function InternationalLanding({
    language,
    title,
    subtitle,
    keyPoints,
    ctaText,
}: InternationalLandingProps) {

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wide uppercase mb-6">
                        {language === 'en' ? 'Official Update 2026' : 'Mise à jour Officielle 2026'}
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        {title}
                    </h1>

                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {subtitle}
                    </p>

                    <a
                        href="#assessment"
                        className="inline-block bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        {ctaText}
                    </a>
                </div>
            </section>

            {/* Main Content & Form */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left: Key Points */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-accent pl-4">
                                {language === 'en' ? 'Why Apply Now?' : 'Pourquoi postuler maintenant ?'}
                            </h2>

                            <div className="space-y-6">
                                {keyPoints.map((point, index) => (
                                    <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                                        <p className="text-slate-700 font-medium text-lg leading-relaxed">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Trust signals */}
                            <div className="mt-12 p-6 bg-slate-100 rounded-2xl">
                                <p className="text-slate-600 text-sm">
                                    {language === 'en'
                                        ? "Service provided by Inmaculada Moncho, Registered Lawyer (ICAV 14318). All data is protected by professional secrecy."
                                        : "Service fourni par Inmaculada Moncho, Avocate inscrite (ICAV 14318). Toutes les données sont protégées par le secret professionnel."}
                                </p>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div id="assessment" className="relative">
                            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-xl border border-slate-200">
                                <h3 className="text-xl font-bold text-center mb-2">
                                    {language === 'en' ? 'Free Eligibility Check' : 'Vérification Gratuite'}
                                </h3>
                                <p className="text-center text-slate-500 text-sm mb-6">
                                    {language === 'en' ? 'Confidential & Secure' : 'Confidentiel et Sécurisé'}
                                </p>
                                <LeadForm language={language} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
