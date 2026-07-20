export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blush/70 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-ink/80 order-2 md:order-1">
          © {year} · made with love by Srushti ♡
        </p>
        <div className="flex items-center gap-6 order-1 md:order-2 font-body text-sm">
          <a
            href="https://instagram.com/artelle.studio"
            target="_blank"
            rel="noreferrer"
            className="text-ink/70 hover:text-accent transition-colors duration-300"
          >
            instagram
          </a>
          <a
            href="https://github.com/artellestudio"
            target="_blank"
            rel="noreferrer"
            className="text-ink/70 hover:text-accent transition-colors duration-300"
          >
            github
          </a>
          <a
            href="mailto:hello@artelle.studio"
            className="text-ink/70 hover:text-accent transition-colors duration-300"
          >
            hello@artelle.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
