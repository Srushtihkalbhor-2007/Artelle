import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '20kb' }));

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'artelle-backend' });
});

// The only real backend feature: the contact form
app.use('/api/contact', contactRouter);

// Fallback error handler so nothing ever leaks a raw stack trace to the client
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong. Please try again shortly.' });
});
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("APP PASSWORD:", process.env.GMAIL_APP_PASSWORD ? "Loaded" : "Missing");
app.listen(PORT, () => {
  console.log(`Artelle backend listening on port ${PORT}`);
});
