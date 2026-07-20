import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/about', label: 'about' },
  { to: '/gallery', label: 'gallery' },
];
const rightLinks = [
  { to: '/collections', label: 'collections' },
  { to: '/contact', label: 'contact' },
];

// Shared underline-on-hover link, matches the soft animated hover from the reference design
function NavItem({ to, label }) {
  return (
    <NavLink to={to} className="relative group py-2 font-body text-[17px] tracking-wide">
      {({ isActive }) => (
        <>
          <span className={isActive ? 'text-accent' : 'text-ink/80 group-hover:text-accent transition-colors duration-300'}>
            {label}
          </span>
          <span
            className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-accent transition-all duration-300 ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          />
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF7F3]/95 backdrop-blur-sm shadow-soft">
      <nav className="mx-auto max-w-[1600px] px-10 md:px-20 lg:px-28">
        {/* Desktop: about / gallery — logo — collections / contact, all centered as a set */}
        <div className="hidden md:grid grid-cols-3 items-center h-20">
          <div className="flex items-center gap-16">
            {links.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </div>

          <NavLink to="/" className="justify-self-center">
            <span className="font-logo text-5xl text-ink">artelle</span>
          </NavLink>

          <div className="flex items-center gap-16 justify-self-end">
            {rightLinks.map((l) => (
              <NavItem key={l.to} {...l} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between h-18 py-4">
          <NavLink to="/">
            <span className="font-logo text-3xl text-ink">artelle</span>
          </NavLink>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="w-6 h-[1.5px] bg-ink block" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="w-6 h-[1.5px] bg-ink block" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="w-6 h-[1.5px] bg-ink block" />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-5 pb-6 pt-2">
                {[...links, ...rightLinks].map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-body text-lg ${isActive ? 'text-accent' : 'text-ink/80'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
