"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  GlassWater,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import {
  experiencePillars,
  guestQuotes,
  menuHighlights,
  serviceMoments,
  siteData,
} from "@/lib/site-data";

function PrimaryLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[#f4ddbb] text-[#2d1717] hover:bg-[#fff0dd]"
      : "border border-white/20 bg-white/8 text-white hover:bg-white/14";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#170d0f]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${siteData.heroImage})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(187,45,59,0.42),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(250,222,180,0.22),transparent_24%),linear-gradient(135deg,rgba(14,7,8,0.96),rgba(34,13,18,0.78)_48%,rgba(84,31,29,0.66))]" />
        <div className="absolute inset-y-0 right-0 hidden w-[42vw] bg-[linear-gradient(270deg,rgba(247,229,205,0.12),transparent)] lg:block" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_390px] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl"
            >
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">
                Southern Italian family cooking in an 1849 stone home
              </p>
              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] text-[#fff8f0] sm:text-6xl lg:text-[6.4rem]">
                Geneva&apos;s most romantic Italian dining room deserves a website
                that feels like the reservation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Villa Verone already has the atmosphere, the patio, the family
                story, and the menu depth. This rebuild puts the reservation
                path, dinner menu, wine list, and address exactly where guests
                need them while making the room itself feel memorable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryLink href={siteData.reservationUrl}>
                  Reserve On OpenTable
                </PrimaryLink>
                <PrimaryLink href={siteData.menuUrl} variant="secondary">
                  View Dinner Menu
                </PrimaryLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/74">
                <Link
                  href={siteData.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <MapPin className="h-4 w-4 text-[#f4ddbb]" />
                  {siteData.addressLines[0]}
                </Link>
                <Link
                  href={siteData.phoneHref}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#f4ddbb]" />
                  {siteData.phone}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="overflow-hidden rounded-[2rem] border border-white/14 bg-black/18 p-6 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center justify-between border-b border-white/12 pb-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4ddbb]">
                  Tonight at Villa Verone
                </p>
                <Clock3 className="h-4 w-4 text-white/65" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {siteData.signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-3"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.03em] text-white">
                      {signal.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/62">
                      {signal.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-white/72">
                {serviceMoments.map((moment) => (
                  <p key={moment}>{moment}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-b border-white/10 bg-[#f3e8dc] text-[#311612]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9f4c3f]">
              Why This Direction Works
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
              The restaurant already has the ingredients. The website just needs
              to stage them with more confidence.
            </h2>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-[#664740] sm:grid-cols-3">
            {experiencePillars.map((pillar) => (
              <div key={pillar.title}>
                <p className="font-semibold uppercase tracking-[0.18em] text-[#311612]">
                  {pillar.title}
                </p>
                <p className="mt-2">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="atmosphere"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24"
      >
        <SectionReveal>
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8a97a]">
              Atmosphere
            </p>
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-[#fff6ed] sm:text-5xl">
              A historic stone-house dinner that already feels like an occasion
              before the first course lands.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/72">
              Villa Verone doesn&apos;t need louder branding. It needs a calmer,
              more cinematic frame around the patio, the candlelight, the wine
              list, and the family-story details that make people reserve for
              birthdays, anniversaries, and Saturday nights out.
            </p>
            <div className="grid gap-4 pt-4 text-sm text-white/78 sm:grid-cols-3">
              {guestQuotes.map((item) => (
                <div
                  key={item.quote}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="leading-7">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#d8a97a]">
                    {item.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                src: siteData.featureImages.award,
                label: "Best Italian food in Kane County 2025",
              },
              {
                src: siteData.featureImages.pasta,
                label: "Classic pasta and family recipes",
              },
              {
                src: siteData.featureImages.seafood,
                label: "Fresh seafood and celebration plates",
              },
              {
                src: siteData.featureImages.wine,
                label: "Full wine list and occasion dining",
              },
            ].map((image, index) => (
              <motion.div
                key={image.label}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#241316] shadow-[0_30px_60px_rgba(0,0,0,0.24)] ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`min-h-[260px] bg-cover bg-center transition duration-700 group-hover:scale-[1.04] ${
                    index === 0 ? "sm:min-h-[320px]" : ""
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(17, 7, 8, 0.12), rgba(17, 7, 8, 0.72)), url(${image.src})`,
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(14,7,8,0.96))] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f4ddbb]">
                    {image.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section id="menu" className="bg-[#f7efe6] py-16 text-[#311612] lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:px-12">
          <SectionReveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9f4c3f]">
              Menu
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Full dinner and wine menus, plus the dishes guests already ask for
              by name.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#664740]">
              This site keeps Villa Verone&apos;s official dinner menu and wine
              list one tap away while surfacing the signatures that help guests
              decide to reserve.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={siteData.menuUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#311612] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#4a211d]"
              >
                Open Dinner Menu
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.wineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#311612]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#311612] transition hover:border-[#311612]/40 hover:bg-white"
              >
                Open Wine List
                <GlassWater className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.curbsideUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#311612]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#311612] transition hover:border-[#311612]/40 hover:bg-white"
              >
                Dining + Curbside
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {menuHighlights.map((item, index) => (
                <article
                  key={item.name}
                  className={`rounded-[1.75rem] border p-5 shadow-[0_18px_50px_rgba(76,42,31,0.08)] ${
                    index % 2 === 0
                      ? "border-[#d9c3b4] bg-white"
                      : "border-[#d8b9a1] bg-[#fff6ec]"
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#b05b4c]">
                    <Star className="h-4 w-4 fill-current" />
                    <p className="text-[11px] uppercase tracking-[0.24em]">
                      Guest favorite
                    </p>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl tracking-[-0.03em] text-[#311612]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#664740]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#d9c3b4] bg-[#2a1719] shadow-[0_28px_60px_rgba(53,20,21,0.18)]">
              <div className="border-b border-white/10 px-6 py-5 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4ddbb]">
                  Official Dinner Menu
                </p>
                <p className="mt-2 max-w-2xl text-sm text-white/72">
                  The actual Villa Verone dinner menu stays visible instead of
                  getting buried behind legacy navigation and tiny links.
                </p>
              </div>
              <div className="bg-[#f5ece3] p-4 sm:p-6">
                <div className="relative aspect-[1080/1920] w-full overflow-hidden rounded-[1.5rem] border border-[#d9c3b4]">
                  <Image
                    src={siteData.featureImages.menu}
                    alt="Villa Verone dinner menu"
                    fill
                    sizes="(min-width: 1024px) 52rem, 100vw"
                    className="object-contain bg-[#f5ece3]"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section
        id="visit"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-24"
      >
        <SectionReveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#1f1113] shadow-[0_32px_70px_rgba(0,0,0,0.24)]">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#f4ddbb]">
                Visit Villa Verone
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] text-[#fff6ed]">
                {siteData.addressFull}
              </h2>
            </div>
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Villa Verone map"
                src={siteData.googleMapsEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#f3e8dc] p-6 text-[#311612] shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9f4c3f]">
                Hours
              </p>
              <div className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#d9c3b4] bg-[#d9c3b4]">
                {siteData.hours.map((entry) => (
                  <div
                    key={entry.day}
                    className="grid grid-cols-[1fr_auto] gap-4 bg-[#fffaf4] px-4 py-3 text-sm"
                  >
                    <p className="uppercase tracking-[0.18em] text-[#8e6b63]">
                      {entry.day}
                    </p>
                    <p className="font-medium text-[#311612]">{entry.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#2e1719] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f4ddbb]">
                Reserve, Call, Or Plan An Event
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/76">
                Reservations should be a first-class action, and private events
                deserve the same visibility. Guests should be able to book,
                call, or open the party-room details without hunting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryLink href={siteData.reservationUrl}>Reserve Now</PrimaryLink>
                <PrimaryLink href={siteData.partyRoomUrl} variant="secondary">
                  Private Events
                </PrimaryLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/74">
                <Link
                  href={siteData.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#f4ddbb]" />
                  {siteData.phone}
                </Link>
                <Link
                  href={siteData.aboutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4 text-[#f4ddbb]" />
                  Family story
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="bg-[#8c4338] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <SectionReveal className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffe7c8]">
              Final Take
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              The Villa Verone brand already feels established. The web
              experience just needs to rise to the level of the room.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/82">
              This build keeps the warmth, makes menu and reservations immediate,
              and gives Geneva diners a first impression that finally feels as
              memorable as the patio, the wine, and the room itself.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryLink href={siteData.reservationUrl}>Book A Table</PrimaryLink>
            <PrimaryLink href={siteData.officialSite} variant="secondary">
              Visit Official Site
            </PrimaryLink>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
