import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { JiraClient } from '@/lib/jira';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, origin, yearsInSpain, status, whatsApp } = body;

        // Basic server-side validation
        if (!name || !whatsApp || !origin) {
            return NextResponse.json(
                { success: false, error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        // Debug: Log config (masking password)
        console.log('SMTP Config:', {
            host: process.env.SMTP_HOST || 'default: smtp.dondominio.com',
            port: Number(process.env.SMTP_PORT) || 587,
            user: process.env.SMTP_USER,
            secure: process.env.SMTP_SECURE === 'true',
            hasPassword: !!process.env.SMTP_PASS
        });

        // Configure SMTP Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.dondominio.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            // Fix for some shared hosting certificate providers
            tls: {
                ciphers: 'SSLv3'
            }
        });

        // Email Content
        const mailOptions = {
            from: `Regularización <${process.env.SMTP_USER}>`, // Simplified name to avoid char encoding issues
            to: 'info@regularizacionextranjeros.es',
            subject: 'Nueva solicitud de regularización recibida',
            text: `
        Nueva solicitud de regularización:
        
        Nombre: ${name}
        País de Origen: ${origin}
        Años en España: ${yearsInSpain}
        Situación Actual: ${status}
        WhatsApp: ${whatsApp}
        
        -----------------------------------
        Este mensaje fue enviado desde el formulario de la web.
      `,
            html: `
        <h2>Nueva solicitud de regularización</h2>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>País de Origen:</strong> ${origin}</li>
          <li><strong>Años en España:</strong> ${yearsInSpain}</li>
          <li><strong>Situación Actual:</strong> ${status}</li>
          <li><strong>WhatsApp:</strong> ${whatsApp}</li>
        </ul>
        <br>
        <p><small>Este mensaje fue enviado desde el formulario de la web.</small></p>
      `,
        };

        // Verify connection configuration
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.error("Transporter Verify Error:", error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        // Send Email
        await transporter.sendMail(mailOptions);

        // Create Jira Task (Fire and forget style, but awaited here to ensure execution)
        try {
            const jira = new JiraClient();
            const description = `Nombre: ${name}\nEmail/Origen: ${origin}\nSituación: ${status}\nAños en España: ${yearsInSpain}\n\nEnviado desde el formulario web.`;
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
