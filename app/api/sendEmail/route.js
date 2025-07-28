// pages/api/send-email.ts
import sendgrid from '@sendgrid/mail';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    return res.status(200).json({message:'send the mail'});
  if (req.method === 'POST') {
    const { email, message } = req.body;

    try {
      await sendgrid.send({
        to: email, // Send to the user's email address
        from: process.env.EMAIL_USER, // Your verified email address
        subject: 'New Contact Form Submission',
        text: message,
      });

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
