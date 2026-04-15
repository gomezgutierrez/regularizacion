import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = path.join(__dirname, '../content/posts.json');
const USERNAME = 'abogadoextranjeriaonline';

// We use multiple RSS bridges for redundancy
const BRIDGES = [
    `https://rssbox.herokuapp.com/tiktok/@${USERNAME}`,
    `https://proxitok.pabloferreiro.xyz/@${USERNAME}/rss`,
    `https://tok.artemislena.eu/@${USERNAME}/rss`,
    `https://proxitok.pussthecat.org/@${USERNAME}/rss`,
    `https://tok.habedieehre.me/@${USERNAME}/rss`
];

async function scan() {
    console.log(`🔍 Scanning TikTok profile: @${USERNAME}...`);
    
    let text = "";
    for (const bridge of BRIDGES) {
        try {
            console.log(`📡 Trying bridge: ${bridge}`);
            const response = await fetch(bridge, { signal: AbortSignal.timeout(10000) });
            if (response.ok) {
                text = await response.text();
                if (text.includes("video/")) break;
            }
        } catch (e) {
            console.warn(`⚠️ Bridge failed: ${bridge} - ${e.message}`);
        }
    }

    if (!text) {
        console.error("❌ All RSS bridges failed. Abortion scan.");
        return;
    }

    try {
        // Find ALL video IDs in the feed
        const videoMatches = [...text.matchAll(/video\/(\d+)/g)];
        const allIds = [...new Set(videoMatches.map(m => m[1]))];
        
        if (allIds.length === 0) {
            console.warn("⚠️ No video IDs found in the feed content.");
            return;
        }
        
        console.log(`⭐ Detected IDs in feed: ${allIds.join(', ')}`);

        // Check manifest
        const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
        const existingIds = manifest.map(p => {
            const match = p.href.match(/auto-(\d+)/) || p.href.match(/video\/(\d+)/);
            return match ? match[1] : null;
        }).filter(Boolean);

        const newIds = allIds.filter(id => !existingIds.includes(id));

        if (newIds.length > 0) {
            console.log(`🚀 ${newIds.length} NEW videos found! Processing...`);
            
            for (const id of newIds) {
                console.log(`📝 Generating post for video: ${id}`);
                const newData = {
                    id: id,
                    title: "Actualización Urgente: Arraigo 2026",
                    slug: `auto-${id}`,
                    description: "Última hora detectada en TikTok sobre la regularización de extranjeros 2026. Análisis generado automáticamente.",
                    date: new Date().toISOString(),
                    type: "ACTUALIDAD",
                    icon: "ShieldAlert",
                    color: "bg-amber-100 text-amber-600"
                };

                try {
                    execSync(`node scripts/sync-tiktok.mjs '${JSON.stringify(newData)}'`, { stdio: 'inherit' });
                    console.log(`✅ Success for ${id}`);
                } catch (e) {
                    console.error(`❌ Failed to sync ${id}:`, e.message);
                }
            }
        } else {
            console.log("✅ No new videos to sync.");
        }

    } catch (e) {
        console.error("❌ Error processing feed:", e.message);
    }
}

scan();
