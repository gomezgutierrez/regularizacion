import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = path.join(__dirname, '../content/posts.json');
const USERNAME = 'abogadoextranjeriaonline';

// We use a public RSS bridge to get the latest videos without an API key
const RSS_URL = `https://rssbox.herokuapp.com/tiktok/@${USERNAME}`;

async function scan() {
    console.log(`🔍 Scanning TikTok profile: @${USERNAME}...`);
    
    try {
        // Fetch HTML/RSS from a bridge
        // NOTE: In a real production environment, we'd use a more stable scraper or a paid API
        // For now, we simulate the fetch or use a simple fetch to get the latest IDs
        const response = await fetch(RSS_URL);
        const text = await response.text();
        
        // Find latest video ID (Regex search for video/\d+)
        const match = text.match(/video\/(\d+)/);
        if (!match) {
            console.warn("⚠️ No video IDs found in the feed.");
            return;
        }
        
        const latestId = match[1];
        console.log(`⭐ Latest video detected: ${latestId}`);

        // Check if already in manifest
        const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
        const alreadyExists = manifest.some(p => p.href.includes(latestId));

        if (!alreadyExists) {
            console.log("🚀 New video found! Triggering AI Sync...");
            
            // Here we define the metadata for the NEW video
            // In a full implementation, we'd extract the title/desc from the RSS feed
            const newData = {
                id: latestId,
                title: "Actualización Urgente: Regularización 2026",
                slug: `auto-${latestId}`,
                description: "Nueva actualización sobre el proceso de extranjería detectada en TikTok. Generado automáticamente por el AI Engine.",
                date: new Date().toISOString(),
                type: "ULTIMA HORA",
                icon: "ShieldAlert",
                color: "bg-red-100 text-red-600"
            };

            // Run the sync script
            // Use inherited process for GEMINI_API_KEY
            execSync(`node scripts/sync-tiktok.mjs '${JSON.stringify(newData)}'`, { stdio: 'inherit' });
        } else {
            console.log("✅ No new videos to sync.");
        }

    } catch (e) {
        console.error("❌ Error scanning TikTok:", e.message);
    }
}

scan();
