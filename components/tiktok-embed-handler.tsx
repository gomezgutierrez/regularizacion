"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function TikTokEmbedHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const scriptUrl = "https://www.tiktok.com/embed.js";

        const loadTikTokScript = () => {
            const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement("script");
            script.src = scriptUrl;
            script.async = true;
            document.body.appendChild(script);
        };

        // MutationObserver to watch for new TikTok embeds being added to the DOM
        const observer = new MutationObserver((mutations) => {
            let shouldReload = false;
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        if (node.classList.contains('tiktok-embed') || node.querySelector('.tiktok-embed')) {
                            shouldReload = true;
                        }
                    }
                });
            });

            if (shouldReload) {
                loadTikTokScript();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Initial check and on path change
        loadTikTokScript();

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
