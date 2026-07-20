import { motion } from 'framer-motion';

const shapes = {
  squiggle: (
    <svg viewBox="0 0 60 24" width="100%" height="100%">
      <path d="M2,12 Q12,2 22,12 T42,12 T58,12" stroke="#CC7A5B" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <path
        d="M20,2 L23,16 L38,20 L23,24 L20,38 L17,24 L2,20 L17,16 Z"
        fill="none"
        stroke="#CC7A5B"
        strokeWidth="2.5"
      />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 20 20" width="100%" height="100%">
      <path d="M10,0 L11.5,8.5 L20,10 L11.5,11.5 L10,20 L8.5,11.5 L0,10 L8.5,8.5 Z" fill="#CC7A5B" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 22" width="100%" height="100%">
      <path
        d="M12,20 C4,14 1,9 1,6 C1,2 4,0 7,0 C9.5,0 11,1.5 12,3 C13,1.5 14.5,0 17,0 C20,0 23,2 23,6 C23,9 20,14 12,20 Z"
        fill="none"
        stroke="#CC7A5B"
        strokeWidth="1.6"
      />
    </svg>
  ),
};

/**
 * A tiny hand-drawn accent mark. Used sparingly around headings and empty states
 * to keep the "doodled in a notebook margin" feeling without cluttering the page.
 */
export default function Doodle({ type = 'squiggle', className = '', size = 24, floaty = true, delay = 0 }) {
  const content = shapes[type] || shapes.squiggle;

  if (!floaty) {
    return (
      <div className={className} style={{ width: size, height: size }}>
        {content}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {content}
    </motion.div>
  );
}
