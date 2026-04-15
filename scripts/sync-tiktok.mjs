import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from "@google/generative-ai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../app/blog');
const MANIFEST_PATH = path.join(__dirname, '../content/posts.json');

// INITIALIZE AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const SYSTEM_PROMPT = `
Eres Inmaculada Moncho, una abogada experta en extranjería en España. 
Tu tono es profesional, riguroso legalmente, pero cercano y empático con la comunidad inmigrante.
Tu objetivo es transformar un contexto de vídeo de TikTok en un artículo de blog premium para tu web 'Regularización 2026'.

Sigue estas reglas:
1. Usa el Real Decreto 316/2026 como base jurídica (Arraigo Extraordinario).
2. Los plazos son: Inicio 16 Abril 2026, Fin 30 Junio 2026.
3. El requisito laboral es de 90 días (suma de contratos).
4. Estructura el post con H2 potentes, listas de CheckCircle y advertencias legales.
5. Devuelve EXCLUSIVAMENTE el código de un componente de React (Next.js) que exporte por defecto la página.
6. Usa Lucide icons: ArrowRight, HelpCircle, FileCheck, Scale, AlertCircle, Info, Briefcase, Calendar, CheckCircle.
7. Incluye el componente WhatsAppButton con un mensaje personalizado.
8. No incluyas Markdown fancey (fences \`\`\`tsx), solo el código plano que se guardará en un archivo .tsx.
`;

async function generateAIContent(videoData) {
    if (!process.env.GEMINI_API_KEY) {
        console.warn("⚠️ No GEMINI_API_KEY found. Using basic template.");
        return null; // Fallback to basic template logic
    }

    const prompt = `
    DATOS DEL VÍDEO:
    Título: ${videoData.title}
    Contexto/Descripción: ${videoData.description}
    Slug: ${videoData.slug}
    ID TikTok: ${videoData.id}

    Genera el código para 'app/blog/${videoData.slug}/page.tsx'.
    Asegúrate de que incluya:
    - Metadata export (title, description, keywords, canonical).
    - JSON-LD para BlogPosting y VideoObject.
    - El diseño con el blockquote de TikTok embed con el ID ${videoData.id}.
    - Una sección de FAQ o consejos prácticos basados en el título.
    `;

    const result = await model.generateContent([SYSTEM_PROMPT, prompt]);
    let code = result.response.text();
    
    // Clean up if the model includes markers
    code = code.replace(/^```tsx\n/, '').replace(/^```javascript\n/, '').replace(/^```\n/, '').replace(/\n```$/, '');
    
    return code;
}

async function syncPost(videoData) {
    const { id, title, slug, description, date, type, icon, color } = videoData;

    const targetDir = path.join(BLOG_DIR, slug);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const pagePath = path.join(targetDir, 'page.tsx');
    
    let pageContent = await generateAIContent(videoData);

    if (!pageContent) {
        // FALLBACK TEMPLATE (Original logic)
        pageContent = `
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, FileCheck, Scale, AlertCircle, Info, Briefcase, Calendar, CheckCircle } from "lucide-react";
import { RelatedPosts } from "@/components/related-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
    title: "[VÍDEO] ${title}",
    description: "${description.substring(0, 160)}",
    alternates: { canonical: "https://regularizacionmasiva.es/blog/${slug}" }
};

export default function BlogPost() {
    return (<main className="p-8"><h1>${title}</h1><p>${description}</p><RelatedPosts currentPath="/blog/${slug}" /></main>);
}
`;
    }

    fs.writeFileSync(pagePath, pageContent);

    // UPDATE MANIFEST
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    const exists = manifest.find(p => p.href === `/blog/${slug}`);
    
    if (!exists) {
        manifest.unshift({
            title: `[VIDEO] ${title}`,
            excerpt: description.substring(0, 100) + '...',
            icon: icon || 'FileText',
            color: color || 'bg-slate-100 text-slate-600',
            href: `/blog/${slug}`
        });
        fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 4));
    }

    console.log(`✅ Blog post sync complete: ${slug}`);
}

const args = process.argv.slice(2);
if (args[0]) {
    try {
        let rawData;
        if (fs.existsSync(args[0])) {
            rawData = fs.readFileSync(args[0], 'utf8');
        } else {
            rawData = args[0];
        }
        const data = JSON.parse(rawData);
        syncPost(data);
    } catch (e) {
        console.error("❌ Error: Invalid input.", e);
        process.exit(1);
    }
}
