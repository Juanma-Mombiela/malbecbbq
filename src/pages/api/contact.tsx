import sendgrid from '@sendgrid/mail';

// Configura SendGrid con tu API Key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, about, menu, message } = req.body;

    // Validar campos
    if (!name || !email || !about || !menu || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Configura el correo
      await sendgrid.send({
        to: process.env.TO_EMAIL, // El correo donde recibes
        from: process.env.FROM_EMAIL, // El remitente
        subject: `Nuevo mensaje de ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Event: ${about}
          Menu: ${menu}
          Message: ${message}
        `,
      });

      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
