import Link from "next/link";
import { navLinks, siteData } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#12090b]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.7fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl text-[#f5e2cc] md:text-5xl">
            Villa Verone
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
            Historic Geneva Italian dining in an 1849 stone home, shaped by
            Southern Italian family recipes, candlelit patio energy, and a
            reservation-first evening experience.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#f2d9bf]/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/72 hover:text-[#f4ddbb]"
            >
              Facebook
            </a>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#f2d9bf]/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/72 hover:text-[#f4ddbb]"
            >
              OpenTable
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#d8a97a]">
            Explore
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/62">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#f4ddbb]">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#d8a97a]">
            Visit
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/62">
            {siteData.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a
              href={siteData.phoneHref}
              className="block transition-colors hover:text-[#f4ddbb]"
            >
              {siteData.phone}
            </a>
            <a
              href={siteData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-[#f4ddbb]"
            >
              Get directions
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#d8a97a]">
            Menus
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/62">
            <a
              href={siteData.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-[#f4ddbb]"
            >
              Dinner menu
            </a>
            <a
              href={siteData.wineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-[#f4ddbb]"
            >
              Wine list
            </a>
            <a
              href={siteData.curbsideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-[#f4ddbb]"
            >
              Dining and curbside
            </a>
            <a
              href={siteData.partyRoomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#f4ddbb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2d1717]"
            >
              Private events
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/36">
        {new Date().getFullYear()} Villa Verone Ristorante Italiano. Historic
        Geneva Italian dining with reservations, patio seating, and live dinner
        and wine menus.
      </div>
    </footer>
  );
}
