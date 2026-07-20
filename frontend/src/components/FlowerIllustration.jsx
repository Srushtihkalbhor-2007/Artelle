import { motion } from 'framer-motion';

/**
 * Hand-painted-style sunflower bouquet, echoing the original Artelle hero.
 * Sways very subtly so the whole scene feels alive, not static.
 */
export default function FlowerIllustration({ className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
    >
      <motion.img
        src="/images/flower.png"
        alt=""
        draggable="false"
        width="100%"
        height="100%"
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% 100%', width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </motion.div>
  );
}
