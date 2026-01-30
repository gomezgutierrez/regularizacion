
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Brand / Logo */}
                <Link href="/" className="font-bold text-xl text-slate-900 hover:opacity-80 transition-opacity">
                    Regularización<span className="text-accent">2026</span>
                </Link>

                {/* Language Selector */}
                <nav className="flex items-center space-x-1 text-sm font-medium">
                    <Link
                        href="/"
                        className={cn(
                            "px-3 py-1 rounded-full transition-colors",
                            pathname === "/" ? "bg-slate-100 text-slate-900 font-bold" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                        )}
                    >
                        🇪🇸 ES
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                        href="/en"
                        className={cn(
                            "px-3 py-1 rounded-full transition-colors",
                            pathname === "/en" ? "bg-slate-100 text-slate-900 font-bold" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                        )}
                    >
                        🇬🇧 EN
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                        href="/fr"
                        className={cn(
                            "px-3 py-1 rounded-full transition-colors",
                            pathname === "/fr" ? "bg-slate-100 text-slate-900 font-bold" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                        )}
                    >
                        🇫🇷 FR
                    </Link>
                </nav>

            </div>
        </header>
    );
}
