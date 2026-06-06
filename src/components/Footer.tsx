import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Gradient divider */}
      <div className="section-divider" />

      <div className="py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
            <img src="/logo.jpg" alt="Forever 48 Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover shadow-lg shadow-pink-soft/10 group-hover:scale-105 transition-transform duration-300" />
            <span className="text-2xl font-heading font-bold gradient-text">
              Forever 48
            </span>
          </Link>

          {/* Tagline */}
          <p className="text-cream/40 text-sm mb-6 font-light tracking-wide">
            Two worlds. One heart. Forever grateful.
          </p>

          {/* Nav Links */}
          <div className="flex justify-center gap-6 mb-8">
            <Link
              href="/jkt48"
              className="text-xs text-cream/30 hover:text-pink-soft transition-colors duration-300 uppercase tracking-widest"
            >
              JKT48
            </Link>
            <span className="text-cream/10">/</span>
            <Link
              href="/klp48"
              className="text-xs text-cream/30 hover:text-purple-gentle transition-colors duration-300 uppercase tracking-widest"
            >
              KLP48
            </Link>
            <span className="text-cream/10">/</span>
            <Link
              href="/journey"
              className="text-xs text-cream/30 hover:text-gold-light transition-colors duration-300 uppercase tracking-widest"
            >
              Journey
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-cream/20 text-xs font-light">
            Made with love. A heartfelt tribute to the 48 family.
          </p>
        </div>
      </div>
    </footer>
  );
}
