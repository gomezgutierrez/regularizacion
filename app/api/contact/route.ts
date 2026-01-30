import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { JiraClient } from '@/lib/jira';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, origin, yearsInSpain, status, whatsApp, email, language } = body;

        // Basic server-side validation
        if (!name || (!whatsApp && !email)) {
            return NextResponse.json(
                { success: false, error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        // ... existing debug ...

        // Email Content
        const mailOptions = {
            from: `Regularización <${process.env.SMTP_USER}>`,
            to: 'info@regularizacionextranjeros.es',
            subject: `Nueva solicitud de regularización [${language?.toUpperCase() || 'ES'}]`,
            text: `
        Nueva solicitud de regularización:
        
        Idioma: ${language || 'es'}
        Nombre: ${name}
        Email: ${email || 'No especificado'}
        País de Origen: ${origin || 'No especificado'}
        Años en España: ${yearsInSpain || 'No especificado'}
        Situación Actual: ${status || 'No especificado'}
        WhatsApp: ${whatsApp || 'No especificado'}
        
        -----------------------------------
        Este mensaje fue enviado desde el formulario de la web.
      `,
            html: `
        <h2>Nueva solicitud de regularización</h2>
        <ul>
          <li><strong>Idioma:</strong> ${language || 'es'}</li>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email || 'No especificado'}</li>
          <li><strong>País de Origen:</strong> ${origin || 'No especificado'}</li>
          <li><strong>Años en España:</strong> ${yearsInSpain || 'No especificado'}</li>
          <li><strong>Situación Actual:</strong> ${status || 'No especificado'}</li>
          <li><strong>WhatsApp:</strong> ${whatsApp || 'No especificado'}</li>
        </ul>
        <br>
        <p><small>Este mensaje fue enviado desde el formulario de la web.</small></p>
      `,
        };

        // ... verify ...

        // ... sendMail ...

        // Create Jira Task (Fire and forget style, but awaited here to ensure execution)
        try {
            const jira = new JiraClient();
            const description = `Idioma: ${language || 'es'}\nNombre: ${name}\nEmail/Origen: ${origin}\nSituación: ${status}\nAños en España: ${yearsInSpain}\n\nEnviado desde el formulario web.`;
            await jira.createIssue(whatsApp, description);
        } catch (jiraError) {
            console.error('Failed to create Jira issue:', jiraError);
            // Don't block the success response if Jira fails
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Error desconocido al enviar el correo',
                details: error.toString()
            },
            { status: 500 }
        );
    }
}
