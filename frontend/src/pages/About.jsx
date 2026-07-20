import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition.jsx';
import Doodle from '../components/Doodles.jsx';

const timeline = [
  { label: 'Started Drawing', note: 'margins of school notebooks, mostly' },
  { label: 'First Painting', note: 'a wobbly still life, kept forever' },
  { label: 'Today', note: 'still chasing the same quiet feeling' },
];

const facts = [
  { title: 'why i paint', text: 'to slow down a feeling long enough to actually look at it.' },
  { title: 'favourite mediums', text: 'gouache for control, digital for forgiveness.' },
  { title: 'inspirations', text: 'quiet mornings, old postcards, the way light sits on paper.' },
];

export default function About() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 md:pt-20 pb-10 text-center relative">
        <Doodle type="squiggle" className="hidden md:block absolute left-16 top-10 w-14" />
        <p className="section-eyebrow mb-3">the person behind the paintings</p>
        <h1 className="font-heading text-5xl md:text-6xl text-ink">about</h1>
      </section>

      {/* Journal spread: photo + intro note */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-20 grid md:grid-cols-[1fr_1.3fr_1fr] gap-10 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="font-hand text-2xl text-accent mb-4">excited to know more?</p>
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-full border-2 border-dashed border-accent/60 flex items-center justify-center bg-blush/30">
            {/* Photo placeholder — swap the div below for an <img> of your own portrait */}
            <span className="font-hand text-lg text-ink/60 px-4 text-center">your photo goes here</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative paper-card p-8 md:p-10"
        >
          <span className="tape left-8" />
          <h2 className="font-heading text-3xl text-ink mb-1">a little about me</h2>
          <div className="w-14 h-0.5 bg-accent mb-5" />
          <p className="font-body text-[15px] leading-relaxed text-ink/85">
            I'm <strong className="text-accent">Srushti</strong>, a self-taught artist who loves creating
            cozy, expressive pieces inspired by emotions, colors, and little moments from everyday life.
          </p>
          <p className="font-body text-[15px] leading-relaxed text-ink/85 mt-4">
            My art lives somewhere between a quiet morning sketch and a midnight thought, made slowly with
            my favourite cup of chai close by.
          </p>
         {/* <p className="font-hand text-xl text-accent mt-6">♡ soft &amp; honest</p> */}
          <p className="font-logo text-3xl text-ink mt-6 text-right">Srushti</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left relative"
        >
          <span className="tape left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0" />
          <div className="w-32 h-32 mx-auto md:mx-0 rounded-full bg-blush/40 border border-border flex items-center justify-center relative">
            <span className="text-5xl">🐈‍⬛</span>
            <Doodle type="sparkle" className="absolute -top-2 -right-2 w-5" />
          </div>
          <p className="font-hand text-lg text-ink/70 mt-3">   </p>
        </motion.div>
      </section>

      {/* Studio facts — why I paint, mediums, inspirations */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-20 grid md:grid-cols-3 gap-6 md:gap-8">
        {facts.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="paper-card p-6"
          >
            <p className="font-heading text-xl text-accent mb-2">{f.title}</p>
            <p className="font-body text-[15px] text-ink/80 leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Tiny timeline 
      <section className="mx-auto max-w-4xl px-6 md:px-10 pb-24">
        <h2 className="font-heading text-3xl text-center text-ink mb-14">a little timeline</h2>
        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-4">
          <div className="hidden md:block absolute top-2 left-0 right-0 h-px bg-border" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex-1 text-center"
            >
              <div className="mx-auto mb-3 w-4 h-4 rounded-full bg-accent border-4 border-background relative z-10" />
              <p className="font-heading text-xl text-ink">{t.label}</p>
              <p className="font-hand text-lg text-accent mt-1">{t.note}</p>
            </motion.div>
          ))}
        </div>
      </section>*/}
    </PageTransition>
  );
}
