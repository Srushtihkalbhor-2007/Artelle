import { motion } from 'framer-motion';

/**
 * A small hand-drawn-style butterfly that flutters gently.
 * Used on the Hero and as an ambient accent on other pages.
 */
export default function Butterfly({ className = '', size = 170, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: [0, -16, 0],
        x: [0, 8, -4, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
        x: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay },
        rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      style={{ width: size, height: size }}
    >
      <img src="/images/butterfly.png" alt="" className="w-full h-full object-contain" draggable="false" />
    </motion.div>
  );
}
