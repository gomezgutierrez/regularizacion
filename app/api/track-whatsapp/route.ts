import { NextResponse } from 'next/server';
import { JiraClient } from '@/lib/jira';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { originUrl } = body;

        const now = new Date();
        const dateStr = now.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const summary = `WhatsApp Lead - ${dateStr}`;
        const description = `Interacción iniciada desde WhatsApp.\nURL de origen: ${originUrl || 'Desconocida'}`;

        const jira = new JiraClient();

        // We do NOT wait for this to finish to avoid blocking, 
        // but since Vercel serverless functions might freeze execution after response,
        // we should ideally await it or use `programmatic wait`.
        // Given the requirement "asíncrona o lo suficientemente rápida", we await it.
        // It's usually fast enough (<500ms).
        await jira.createIssue(summary, description);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('WhatsApp Tracking Error:', error);
        // Always return success to client so we don't block navigation
        return NextResponse.json({ success: true }, { status: 200 });
    }
}
