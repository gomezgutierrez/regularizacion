"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function TikTokEmbedHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Function to reload TikTok embeds
        const reloadTikTok = () => {
            // If the script is already loaded, it adds a global object or we can re-trigger it
            // The most robust way in Next.js is to find the blockquotes and re-trigger the script
            const embeds = document.querySelectorAll(".tiktok-embed");
            if (embeds.length > 0) {
                // If the script isn't in the head, we add it. 
                // If it is, we remove and re-add to force a scan of the new DOM elements
                const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
                if (existingScript) {
                    existingScript.remove();
                }

                const script = document.createElement("script");
                script.src = "https://www.tiktok.com/embed.js";
                script.async = true;
                document.body.appendChild(script);
            }
        };

        // Run on mount and on every pathname change
        reloadTikTok();
    }, [pathname]);

    return null; // This component doesn't render anything
}
