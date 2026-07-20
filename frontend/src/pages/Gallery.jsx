import { useState } from 'react';
import PageTransition from '../components/PageTransition.jsx';
import Doodle from '../components/Doodles.jsx';
import ArtworkCard from '../components/ArtworkCard.jsx';
import ArtworkModal from '../components/ArtworkModal.jsx';
import { artworks } from '../data/artworks.js';

// A small, fixed rotation cycle so each card feels hand-pinned, not random-looking on every render
const tiltCycle = [-2, 1.5, -1, 2, -1.5, 1];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-14 md:pt-20 pb-24 md:pb-32">
        <div className="text-center mb-16 relative">
          <Doodle type="sparkle" className="hidden md:block absolute left-10 top-0 w-6" />
          <Doodle type="star" className="hidden md:block absolute right-10 top-2 w-8" delay={1} />
          <p className="section-eyebrow mb-3">the full collection</p>
          <h1 className="font-heading text-5xl md:text-6xl text-ink">gallery</h1>
          <p className="font-hand text-xl text-accent mt-3">a glimpse into my creations</p>
        </div>

        {/* Masonry-inspired: columns with varied spans, generous gaps */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 md:gap-10 [column-fill:_balance]">
          {artworks.map((art, i) => (
            <div key={art.id} className="mb-8 md:mb-10 break-inside-avoid">
              <ArtworkCard artwork={art} onOpen={setActive} tilt={tiltCycle[i % tiltCycle.length]} index={i} />
            </div>
          ))}
        </div>
      </section>

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </PageTransition>
  );
}
