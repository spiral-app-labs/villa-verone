'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-2xl py-3' : 'py-5'
      }`}
      style={{ backgroundColor: scrolled ? '#2C1810' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="font-playfair text-xl sm:text-2xl font-bold tracking-wide leading-tight" style={{ color: '#C9A84C' }}>
              Villa Verone
            </span>
            <span className="text-xs tracking-[0.2em] uppercase opacity-80" style={{ color: '#E8D5A3' }}>
              Ristorante Italiano
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase font-light transition-all duration-300 ${
                  pathname === link.href
                    ? 'border-b pb-0.5'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: pathname === link.href ? '#C9A84C' : '#F5F0E8',
                  borderColor: pathname === link.href ? '#C9A84C' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6302323322"
              className="ml-4 text-sm tracking-wider uppercase px-5 py-2.5 border font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8', borderColor: '#C9A84C' }}
            >
              Reserve: (630) 232-3322
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            style={{ color: '#C9A84C' }}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ backgroundColor: '#C9A84C' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                style={{ backgroundColor: '#C9A84C' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ backgroundColor: '#C9A84C' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: '#2C1810', borderTop: '1px solid rgba(201,168,76,0.2)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-widest uppercase py-2"
                  style={{
                    color: pathname === link.href ? '#C9A84C' : '#F5F0E8',
                    borderBottom: '1px solid rgba(201,168,76,0.1)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:6302323322"
                className="mt-2 text-sm tracking-wider uppercase px-5 py-3 text-center border"
                style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8', borderColor: '#C9A84C' }}
              >
                Call (630) 232-3322
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
