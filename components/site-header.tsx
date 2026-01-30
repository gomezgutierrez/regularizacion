"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Helpers to determine active language
    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname?.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* --- Logo --- */}
                <Link href="/" className="font-bold text-xl text-slate-900 hover:opacity-80 transition-opacity z-50" onClick={closeMenu}>
                    Regularización<span className="text-accent">2026</span>
                </Link>

                {/* --- DESKTOP NAV --- */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Language Selector */}
                    {/* Language Selector (Simple Code) */}
                    <div className="flex items-center gap-4 mr-4">
                        <Link href="/" className="font-bold text-sm hover:underline text-slate-900">ES</Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/en" className="font-bold text-sm hover:underline text-slate-900">EN</Link>
                        <span className="text-slate-300">|</span>
                        <Link href="/fr" className="font-bold text-sm hover:underline text-slate-900">FR</Link>
                    </div>

                    {/* Contact Button */}
                    <Link
                        href="#contacto"
                        className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full font-bold text-sm transition-colors flex items-center"
                    >
                        Contactar
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    className="md:hidden z-50 p-2 text-slate-600 hover:text-slate-900"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* --- MOBILE OVERLAY --- */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                        {/* Mobile Languages */}
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                                <Globe className="w-4 h-4 mr-2" /> Idioma / Language
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                                        isActive("/") ? "border-accent bg-accent/5" : "border-slate-100 hover:border-slate-300"
                                    )}
                                >
                                    <span className="text-2xl mb-1">🇪🇸</span>
                                    <span className={cn("text-xs font-bold", isActive("/") ? "text-accent" : "text-slate-600")}>Español</span>
                                </Link>
                                <Link
                                    href="/en"
                                    onClick={closeMenu}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                                        isActive("/en") ? "border-accent bg-accent/5" : "border-slate-100 hover:border-slate-300"
                                    )}
                                >
                                    <span className="text-2xl mb-1">🇬🇧</span>
                                    <span className={cn("text-xs font-bold", isActive("/en") ? "text-accent" : "text-slate-600")}>English</span>
                                </Link>
                                <Link
                                    href="/fr"
                                    onClick={closeMenu}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                                        isActive("/fr") ? "border-accent bg-accent/5" : "border-slate-100 hover:border-slate-300"
                                    )}
                                >
                                    <span className="text-2xl mb-1">🇫🇷</span>
                                    <span className={cn("text-xs font-bold", isActive("/fr") ? "text-accent" : "text-slate-600")}>Français</span>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Links */}
                        <nav className="space-y-2 mb-8">
                            <Link
                                href="/"
                                onClick={closeMenu}
                                className="block text-lg font-medium text-slate-800 py-3 border-b border-slate-50 hover:text-accent"
                            >
                                Inicio
                            </Link>
                            {/* Hidden for now until blog is ready
                            <Link
                                href="/blog"
                                onClick={closeMenu}
                                className="block text-lg font-medium text-slate-800 py-3 border-b border-slate-50 hover:text-accent"
                            >
                                Noticias
                            </Link>
                            */}
                        </nav>

                        {/* Mobile CTA */}
                        <Link
                            href="#contacto"
                            onClick={closeMenu}
                            className="w-full bg-slate-900 text-white font-bold text-center py-4 rounded-xl shadow-lg flex items-center justify-center"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Contactar Abogada
                        </Link>

                        <div className="mt-auto mb-8 text-center text-xs text-slate-400">
                            Regularización 2026 <br />
                            100% Online Legal Services
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
}
