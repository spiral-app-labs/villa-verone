import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2C1810', color: '#F5F0E8' }}>
      {/* Top ornamental border */}
      <div className="h-1" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-playfair text-2xl font-bold" style={{ color: '#C9A84C' }}>Villa Verone</h3>
              <p className="text-xs tracking-[0.2em] uppercase mt-1" style={{ color: '#E8D5A3' }}>Ristorante Italiano</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.7)' }}>
              Authentic Southern Italian cuisine served in a historic 1849 limestone building
              in the heart of Geneva, Illinois. Family-owned for over 27 years.
            </p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-sm" style={{ color: '#C9A84C' }}>★★★★½</span>
              <span className="text-xs ml-1" style={{ color: 'rgba(245,240,232,0.6)' }}>4.5 (300+ reviews)</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-playfair text-lg mb-6" style={{ color: '#C9A84C' }}>Explore</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Our Menu' },
                { href: '/about', label: 'Our Story' },
                { href: '/contact', label: 'Contact & Reservations' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm tracking-wide transition-colors hover:opacity-80"
                    style={{ color: 'rgba(245,240,232,0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-playfair text-lg mb-6" style={{ color: '#C9A84C' }}>Visit Us</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(245,240,232,0.5)' }}>Address</p>
                <p style={{ color: 'rgba(245,240,232,0.8)' }}>8 S 3rd St</p>
                <p style={{ color: 'rgba(245,240,232,0.8)' }}>Geneva, IL 60134</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(245,240,232,0.5)' }}>Phone</p>
                <a href="tel:6302323322" className="transition-colors hover:opacity-80" style={{ color: '#C9A84C' }}>
                  (630) 232-3322
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(245,240,232,0.5)' }}>Hours</p>
                <p style={{ color: 'rgba(245,240,232,0.8)' }}>Mon–Thu: 11am – 9pm</p>
                <p style={{ color: 'rgba(245,240,232,0.8)' }}>Fri–Sat: 11am – 10pm</p>
                <p style={{ color: 'rgba(245,240,232,0.8)' }}>Sunday: 12pm – 9pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
          <p className="text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>
            © {new Date().getFullYear()} Villa Verone Ristorante Italiano. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(245,240,232,0.4)' }}>
            8 S 3rd St, Geneva, IL 60134
          </p>
        </div>
      </div>
    </footer>
  );
}
