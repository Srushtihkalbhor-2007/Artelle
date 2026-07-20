import { useState } from 'react';
import PageTransition from '../components/PageTransition.jsx';
import Doodle from '../components/Doodles.jsx';
import ArtworkCard from '../components/ArtworkCard.jsx';
import ArtworkModal from '../components/ArtworkModal.jsx';
import { artworks, collectionNames } from '../data/artworks.js';

const tiltCycle = [-2, 1.5, -1, 2, -1.5, 1];

export default function Collections() {
  const [active, setActive] = useState(null);

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-14 md:pt-20 pb-10">
        <div className="text-center mb-6 relative">
          <Doodle type="sparkle" className="hidden md:block absolute left-10 top-0 w-6" />
          <p className="section-eyebrow mb-3">a collection</p>
          <h1 className="font-heading text-5xl md:text-6xl text-ink">collections</h1>
          <p className="font-hand text-xl text-accent mt-3">
            step through the rooms of the studio, one theme at a time
          </p>
        </div>
      </section>

      {collectionNames.length === 0 ? (
        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-32 text-center">
          <p className="font-heading text-3xl text-accent">nothing here yet</p>
          <p className="font-body text-ink/70 mt-2">new pieces are on their way ♡</p>
        </div>
      ) : (
        collectionNames.map((name, sectionIndex) => {
          const pieces = artworks.filter((a) => a.collection === name);
          return (
            <section
              key={name}
              className={`mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20 ${
                sectionIndex % 2 === 1 ? 'bg-paper/60 rounded-[2rem]' : ''
              }`}
            >
              <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
                <h2 className="font-heading text-3xl md:text-4xl text-ink">{name}</h2>
                <span className="font-hand text-lg text-accent">{pieces.length} pieces</span>
              </div>

              <div
                className={`grid gap-8 md:gap-10 ${
                  pieces.length === 1
                    ? 'max-w-sm mx-auto'
                    : pieces.length === 2
                    ? 'sm:grid-cols-2 max-w-3xl mx-auto'
                    : 'sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {pieces.map((art, i) => (
                  <ArtworkCard
                    key={art.id}
                    artwork={art}
                    onOpen={setActive}
                    tilt={tiltCycle[(i + sectionIndex) % tiltCycle.length]}
                    index={i}
                  />
                ))}
              </div>
            </section>
          );
        })
      )}

      <ArtworkModal artwork={active} onClose={() => setActive(null)} />
    </PageTransition>
  );
}
