import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { JiraClient } from '@/lib/jira';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, origin, yearsInSpain, status, whatsApp, email, language, type } = body;

        // Basic server-side validation
        if (!name || (!whatsApp && !email)) {
            return NextResponse.json(
                { success: false, error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        // Determine context (Doubts vs Viability)
        const isDoubt = type === 'doubts';
        const subjectPrefix = isDoubt ? "DUDAS" : "SOLICITUD";
        const emailSubject = isDoubt
            ? `Consulta/Dudas de Regularización [${language?.toUpperCase() || 'ES'}]`
            : `Nueva solicitud de regularización [${language?.toUpperCase() || 'ES'}]`;

        // Email Content
        const mailOptions = {
            from: `Regularización <${process.env.SMTP_USER}>`,
            to: 'info@regularizacionextranjeros.es',
            subject: emailSubject,
            text: `
        Nuevo Lead (${subjectPrefix}):
        
        Idioma: ${language || 'es'}
        Nombre: ${name}
        Email: ${email || 'No especificado'}
        País de Origen: ${origin || 'No especificado'}
        Años en España: ${yearsInSpain || 'No especificado'}
        Situación Actual: ${status || 'No especificado'}
        WhatsApp: ${whatsApp || 'No especificado'}
        Tipo: ${isDoubt ? 'Consulta de Dudas' : 'Estudio Viabilidad'}
        
        -----------------------------------
        Este mensaje fue enviado desde el formulario de la web.
      `,
            html: `
        <h2>Nuevo Lead (${subjectPrefix})</h2>
        <ul>
          <li><strong>Tipo:</strong> ${isDoubt ? 'Consulta de Dudas' : 'Estudio Viabilidad'}</li>
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

        // Send Email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // Fallback or use env
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        try {
            await transporter.verify();
            await transporter.sendMail(mailOptions);
        } catch (mailError) {
            console.error('Email sending failed:', mailError);
            // We continue to Jira even if mail fails, or return error?
            // Usually better to log and continue if possible, but for contact form, email is key.
            // But user emphasized Jira.
        }

        // Create Jira Task
        try {
            const jira = new JiraClient();
            const description = `[${subjectPrefix}]\nIdioma: ${language || 'es'}\nNombre: ${name}\nEmail: ${email || 'N/A'}\nPaís: ${origin}\nSituación: ${status}\nAños: ${yearsInSpain || 'N/A'}\n\nEnviado desde el formulario web.`;
            const summary = isDoubt ? `[DUDA] Lead ${whatsApp || name}` : `Lead ${whatsApp || name}`;

            await jira.createIssue(summary, description);
        } catch (jiraError) {
            console.error('Failed to create Jira issue:', jiraError);
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
