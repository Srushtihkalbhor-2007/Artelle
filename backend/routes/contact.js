import { Router } from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = Router();

// Prevent the form from being used to spam-blast the inbox
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 8,
  message: { error: 'Too many messages sent recently — please try again a little later.' },
});

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

router.post('/', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  // Server-side validation mirrors the frontend, since the frontend can be bypassed
  const errors = {};
  if (!name || !name.trim()) errors.name = 'Name is required.';
  if (!email || !isValidEmail(email)) errors.email = 'A valid email is required.';
  if (!message || !message.trim()) errors.message = 'Message is required.';
  if (name && name.length > 100) errors.name = 'Name is too long.';
  if (message && message.length > 5000) errors.message = 'Message is too long.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Please check the form for errors.', fields: errors });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password, not the account password
      },
       tls: {
    rejectUnauthorized: false,
  },
    });

    await transporter.sendMail({
      from: `"Artelle Studio" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Artelle] ${subject?.trim() || 'New message from the site'}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; color: #2F2A28;">
          <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || '(no subject)')}</p>
          <hr style="border: none; border-top: 1px solid #E9E0D8;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err.message);
    res.status(502).json({ error: 'The letter could not be delivered right now. Please try again soon.' });
  }
});

// Minimal HTML escaping so message content can't inject markup into the email
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default router;
