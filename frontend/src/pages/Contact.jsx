import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition.jsx';
import Doodle from '../components/Doodles.jsx';

const contactLinks = [
  { label: 'email', value: 'hello@artelle.studio', href: 'mailto:cafehues7@gmail.com' },
  { label: 'instagram', value: '@artelle.studio', href: 'https://www.instagram.com/artelle.s_?igsh=MTRqa2R2Z3Z5bDM3MA==' },
  { label: 'github', value: '@artellestudio', href: 'https://github.com/Srushtihkalbhor-2007/Artelle' },
  { label: 'pinterest', value: '@artellestudio', href: 'https://in.pinterest.com/cafehues7' },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'a name would be lovely';
    if (!form.email.trim()) next.email = 'this one\u2019s needed so I can write back';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'that email looks a little off';
    if (!form.message.trim()) next.message = 'tell me a little something';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 md:pt-20 pb-10 text-center relative">
        <Doodle type="heart" className="hidden md:block absolute right-16 top-8 w-8" />
        <p className="section-eyebrow mb-3">let's talk</p>
        <h1 className="font-heading text-5xl md:text-6xl text-ink">say hello</h1>
        <p className="font-hand text-xl text-accent mt-3">i love a good letter, even a tiny one</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 md:px-10 pb-28 grid md:grid-cols-[1fr_1.4fr] gap-8">
        {/* Left: contact links */}
        <div className="flex flex-col justify-between gap-4 h-full py-1">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="paper-card p-6 flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="w-10 h-10 rounded-full bg-blush/60 flex items-center justify-center text-accent">
                ✉
              </span>
              <span>
                <span className="block font-heading text-lg text-accent">{c.label}</span>
                <span className="block font-body text-sm text-ink/70">{c.value}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Right: form */}
        <div className="paper-card p-7 md:p-9 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center"
              >
                <p className="text-5xl mb-4">🌻</p>
                <h3 className="font-heading text-3xl text-ink mb-2">letter sent</h3>
                <p className="font-body text-ink/70">
                  Thank you for writing — I'll read it with my morning chai and reply soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-8"
                >
                  write another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="name" className="font-heading text-lg text-accent">
                    name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="what should i call you?"
                    className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-accent/60"
                  />
                  {errors.name && <p className="font-body text-sm text-accent mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="font-heading text-lg text-accent">
                    email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@something.com"
                    className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-accent/60"
                  />
                  {errors.email && <p className="font-body text-sm text-accent mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="font-heading text-lg text-accent">
                    subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="what's this about?"
                    className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-accent/60"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-heading text-lg text-accent">
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="tell me a little story..."
                    className="mt-2 w-full rounded-xl border border-border bg-paper px-4 py-3 font-body text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-accent/60 resize-y"
                  />
                  {errors.message && <p className="font-body text-sm text-accent mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="font-body text-sm text-accent">
                    something went astray — mind trying again in a moment?
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary mt-2 disabled:opacity-70">
                  {status === 'loading' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-4 h-4 border-2 border-paper/40 border-t-paper rounded-full"
                      />
                      sending...
                    </>
                  ) : (
                    'send a note'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}
