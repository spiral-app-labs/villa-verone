"use client";

import { motion } from "framer-motion";

export default function WineSpectatorBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-24 h-24",
    md: "w-36 h-36",
    lg: "w-48 h-48",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className={`${sizes[size]} relative flex items-center justify-center`}
    >
      <div className="absolute inset-0 rounded-full border-2 border-brass/60" />
      <div className="absolute inset-2 rounded-full border border-brass/30" />
      <div className="text-center px-3">
        <div className="text-brass text-[10px] uppercase tracking-[0.2em] font-sans font-bold">
          Wine Spectator
        </div>
        <div className="font-serif text-cream text-sm md:text-base font-bold leading-tight mt-1">
          Award of
          <br />
          Excellence
        </div>
        <div className="w-8 h-px bg-brass/60 mx-auto my-1.5" />
        <div className="text-brass/70 text-[9px] uppercase tracking-wider font-sans">
          McHenry County&apos;s Only
        </div>
      </div>
    </motion.div>
  );
}
