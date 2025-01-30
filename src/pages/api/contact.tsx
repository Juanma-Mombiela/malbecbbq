import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

// Asegúrate de que las variables de entorno estén definidas
const apiKey = process.env.SENDGRID_API_KEY;
const toEmail = process.env.TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

// Verifica que las variables de entorno estén presentes
if (!apiKey || !toEmail || !fromEmail) {
  throw new Error('Missing environment variables for SendGrid.');
}

sendgrid.setApiKey(apiKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, about, eventDate, guests, message } = req.body;

    // Validación de campos
    if (!name || !email || !about || !eventDate || !guests || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      await sendgrid.send({
        to: toEmail!,  // Correo de destino
        from: fromEmail!,  // Correo remitente
        subject: 'New Contact Form Submission',
        html: `
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>About:</strong> ${about}</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
