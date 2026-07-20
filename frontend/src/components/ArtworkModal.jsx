import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArtworkModal({ artwork, onClose }) {
  // Close on ESC, and lock body scroll while the modal is open
  useEffect(() => {
    if (!artwork) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [artwork, onClose]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto paper-card grid md:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-paper/90 shadow-soft flex items-center justify-center text-ink hover:text-accent transition-colors"
            >
              ✕
            </button>

            <div className="bg-blush/30">
              <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-7 md:p-8 flex flex-col">
              <h2 id="modal-title" className="font-heading text-3xl text-ink">
                {artwork.title}
              </h2>
              <p className="font-hand text-xl text-accent mt-1">{artwork.caption}</p>

              <div className="flex gap-4 mt-4 font-body text-sm text-ink/70">
                <span>{artwork.year}</span>
                <span>·</span>
                <span>{artwork.medium}</span>
                <span>·</span>
                <span>{artwork.collection}</span>
              </div>

              <p className="font-body text-[15px] leading-relaxed text-ink/85 mt-5">
                {artwork.description}
              </p>

              <div className="mt-5 pt-5 border-t border-border">
                <p className="section-eyebrow mb-2">the story</p>
                <p className="font-body text-[15px] leading-relaxed text-ink/85 italic">
                  {artwork.story}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
