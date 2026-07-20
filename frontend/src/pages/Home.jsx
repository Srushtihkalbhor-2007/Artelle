import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition.jsx';
import FlowerIllustration from '../components/FlowerIllustration.jsx';
import Butterfly from '../components/Butterfly.jsx';
import Doodle from '../components/Doodles.jsx';
import ArtworkCard from '../components/ArtworkCard.jsx';
import ArtworkModal from '../components/ArtworkModal.jsx';
import { artworks } from '../data/artworks.js';

const featured = artworks.slice(0, 3);
const tilts = [-2, 1.5, -1];

export default function Home() {
  const [active, setActive] = useState(null);

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <Doodle type="squiggle" className="absolute left-6 top-6 w-14 opacity-80" />
        <Butterfly className="hidden md:block absolute left-[53%] top-24 w-24" delay={0.5} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
className="text-7xl sm:text-7xl md:text-8xl leading-[0.95] text-[#CC7A5B]"
style={{
  fontFamily: 'HeroHeadingFont, sans-serif',
  textShadow: '0.4px 0 #CC7A5B',
}}
            >
              ART THAT
              <br />
              TELLS A
              <br />
              STORY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="font-body text-lg text-ink/75 mt-8"
            >
              handmade pieces crafted with emotion
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="flex flex-wrap gap-4 mt-9"
            >
              <Link to="/gallery" className="btn-primary">
                view gallery
              </Link>
              <Link to="/collections" className="btn-secondary">
                explore collections
              </Link>
            </motion.div>
          </div>

          <FlowerIllustration className="w-full max-w-md mx-auto md:max-w-none" />
        </div>
      </section>

      {/* FEATURED GALLERY */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32">
        <div className="text-center mb-14 relative">
          <Doodle type="star" className="hidden md:block absolute right-8 -top-6 w-8" />
          <p className="section-eyebrow mb-3">a few favourites</p>
          <h2 className="font-heading text-4xl md:text-5xl text-ink">featured gallery</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((art, i) => (
            <ArtworkCard key={art.id} artwork={art} onOpen={setActive} tilt={tilts[i]} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/gallery" className="btn-secondary">
            see the full gallery
          </Link>
        </div>
      </section>

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </PageTransition>
  );
}
