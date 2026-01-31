"use client";

import Script from "next/script";
import { MessageCircle } from "lucide-react";

export function VideoCtaSection() {
    return (
        <section className="py-16 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

                    {/* SEO Heading */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8 max-w-2xl px-4">
                        Todo lo que se sabe sobre la Regularización de Extranjeros 2026: Requisitos y Perfiles
                    </h2>

                    {/* TikTok Embed */}
                    <div className="w-full max-w-[340px] sm:max-w-md mx-auto mb-8 shadow-2xl rounded-xl overflow-hidden bg-black">
                        <blockquote
                            className="tiktok-embed"
                            cite="https://www.tiktok.com/@abogadoextranjeriaonline/video/7600044602241846550"
                            data-video-id="7600044602241846550"
                            style={{ maxWidth: "605px", minWidth: "325px", margin: "0" }}
                        >
                            <section>
                                <a
                                    target="_blank"
                                    title="@abogadoextranjeriaonline"
                                    href="https://www.tiktok.com/@abogadoextranjeriaonline?refer=embed"
                                >
                                    @abogadoextranjeriaonline
                                </a>
                            </section>
                        </blockquote>
                    </div>

                    {/* TikTok Script - Lazy Loaded */}
                    <Script
                        src="https://www.tiktok.com/embed.js"
                        strategy="lazyOnload"
                    />

                    {/* Context Text */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 max-w-2xl">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Inmaculada, abogada experta en extranjería, explica en primicia los detalles de la nueva plataforma de regularización masiva.
                            <span className="font-semibold text-slate-800"> Descubre si cumples los requisitos de arraigo, formación o empleo para acceder al proceso este 2026.</span>
                        </p>
                    </div>

                    {/* CTA Button */}


                </div>
            </div>
        </section>
    );
}
