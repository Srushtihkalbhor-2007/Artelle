# Artelle 🌻

A cozy digital art gallery — handmade paintings, sketches, and stories.
Not a shop. A studio you can wander through.

## Stack

- **Frontend:** React + Vite + Tailwind CSS + React Router + Framer Motion
- **Backend:** Node + Express + Nodemailer (contact form only — no database, no auth, no cart)

## Project structure

```
artelle/
├── frontend/
│   ├── public/artworks/        ← put your painting images here
│   ├── src/
│   │   ├── data/artworks.js    ← the ONLY file to touch when adding art
│   │   ├── components/         ← Navbar, Footer, ArtworkCard, Modal, illustrations...
│   │   └── pages/               Home, Gallery, Collections, About, Contact
│   └── ...
└── backend/
    ├── server.js
    ├── routes/contact.js
    └── .env.example
```

## Running it locally

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### 2. Backend (for the contact form)

```bash
cd backend
npm install
cp .env.example .env
# then edit .env with your Gmail address + Gmail App Password
npm run dev
```

Runs at `http://localhost:5000`. The Vite dev server already proxies `/api/*`
requests to it (see `frontend/vite.config.js`), so the contact form just works
once both are running.

### Getting a Gmail App Password

Nodemailer can't use your normal Gmail password. Instead:

1. Turn on 2-Step Verification on the Gmail account: https://myaccount.google.com/security
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Put that 16-character password in `backend/.env` as `GMAIL_APP_PASSWORD`.

## Adding a new painting

This is the only workflow you should ever need:

1. Copy the image into `frontend/public/artworks/`.
2. Add one object to the array in `frontend/src/data/artworks.js`:

```js
{
  id: 'unique-slug',
  title: 'Painting Title',
  image: '/artworks/your-file.jpg',
  caption: 'a short, warm caption',
  description: 'a sentence or two about the piece',
  story: 'the story behind it, in your voice',
  year: 2026,
  medium: 'Watercolor',
  collection: 'Nature',
}
```

The Home page (first 3), Gallery page (all), and Collections page
(grouped by `collection`) update automatically — nothing else to edit.

## Placeholder artwork

The twelve pieces currently in `public/artworks/` are hand-coded SVG
placeholders in the site's own palette, standing in for real paintings until
you swap in photos of your actual work. Replace them any time using the
workflow above — the file format (svg, jpg, png, webp) doesn't matter.

## Deploying

- **Frontend:** build with `npm run build` inside `frontend/`, then host the
  `dist/` folder anywhere static (Vercel, Netlify, GitHub Pages).
- **Backend:** deploy `backend/` to any Node host (Render, Railway, Fly.io) and
  set the same environment variables from `.env.example` there. Update
  `CLIENT_ORIGIN` to your deployed frontend URL, and point the frontend's
  fetch calls at the deployed backend URL (or keep using a proxy/rewrite).

Made with love, for Srushti's studio ♡
