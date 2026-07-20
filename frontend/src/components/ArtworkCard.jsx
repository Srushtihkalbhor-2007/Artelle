import { motion } from 'framer-motion';

/**
 * A single painting card. `tilt` gives each card a tiny, fixed rotation so the
 * gallery reads like pinned-up paintings rather than a rigid product grid.
 */
export default function ArtworkCard({ artwork, onOpen, tilt = 0, index = 0 }) {
  return (
    <motion.button
      onClick={() => onOpen(artwork)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -8, rotate: 0, scale: 1.015 }}
      style={{ rotate: tilt }}
      className="group text-left paper-card overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="aspect-[4/5] overflow-hidden bg-blush/40">
        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl text-ink">{artwork.title}</h3>
        <p className="font-hand text-lg text-accent mt-0.5">{artwork.caption}</p>
      </div>
    </motion.button>
  );
}
