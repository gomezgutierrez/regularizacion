import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

        // Configure SMTP Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.dondominio.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email Content
        const mailOptions = {
            from: `Regularización de Extranjeros <${process.env.SMTP_USER}>`,
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

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, error: 'Error al enviar el correo' },
            { status: 500 }
        );
    }
}
