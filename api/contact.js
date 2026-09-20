import { Resend } from 'resend';

export default async function handler(req, res) {
  // CORS & Method check
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { subject, message } = req.body || {};

    const cleanSubject = typeof subject === 'string' ? subject.trim() : '';
    const cleanMessage = typeof message === 'string' ? message.trim() : '';

    if (!cleanSubject || !cleanMessage || cleanMessage.length < 5) {
      return res.status(400).json({ success: false, error: 'Validation failed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RECIPIENT_EMAIL || 'kyushkumar@gmail.com';

    // Development mode fallback if API key is not yet configured locally
    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is not configured.');
      return res.status(200).json({
        success: true,
        devMode: true,
        message: 'Message captured in dev mode. Set RESEND_API_KEY in environment variables for production delivery.',
      });
    }

    const resend = new Resend(apiKey);

    const emailBody = `
New Portfolio Contact

Subject: ${cleanSubject}

Message:
${cleanMessage}
    `.trim();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Portfolio Contact: ${cleanSubject}`,
      text: emailBody,
    });

    if (data.error) {
      console.error('Resend delivery error:', data.error);
      return res.status(500).json({ success: false, error: 'Delivery failed' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
