"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteData } from "@/lib/site-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled
            ? "border-[#f2d9bf]/20 bg-[#160d10]/88 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-transparent bg-[#12090b]/30 backdrop-blur-sm"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold tracking-[0.08em] text-[#f7e6d3] md:text-3xl">
            Villa Verone
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.35em] text-white/55 sm:block">
            Geneva
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-white/72 transition-colors hover:text-[#f4ddbb]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteData.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#f4ddbb] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#2d1717] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff0dd]"
          >
            Reserve
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-[#f2d9bf]/15 bg-[#221214]/70 lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-[#f4ddbb] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-[#f4ddbb] transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-[#f4ddbb] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-[#f2d9bf]/15 bg-[#160d10]/96 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-white/8 px-4 py-3 text-sm uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-[#f4ddbb]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteData.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-2xl bg-[#f4ddbb] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#2d1717]"
              >
                Reserve on OpenTable
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
