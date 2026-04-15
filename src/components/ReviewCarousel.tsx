"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "A delightful gem of a restaurant. From the time we entered till we left our experience was wonderful. The food was excellent! The pacing of the service from appetizers to dessert and to the check was perfect. We never felt rushed.",
    author: "Linda",
    source: "OpenTable",
    rating: 5,
  },
  {
    text: "The wine and the food were both superb along with the atmosphere and staff. We invited friends from Chicago to join us and they also raved about the experience.",
    author: "Verified Diner",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "Semi-new owner Rhienna and her new chef have turned the menu over and done a wonderful job. Did I mention everything is gluten free?",
    author: "Verified Diner",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "My favorite go-to restaurant to bring out of town guests to dinner.",
    author: "Debra G.",
    source: "OpenTable",
    rating: 5,
  },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto text-center min-h-[280px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex justify-center mb-6">
            {[...Array(reviews[current].rating)].map((_, i) => (
              <span key={i} className="text-brass text-2xl">
                ★
              </span>
            ))}
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-cream/90 italic leading-relaxed mb-8">
            &ldquo;{reviews[current].text}&rdquo;
          </blockquote>
          <div className="text-brass font-sans text-sm uppercase tracking-[0.2em]">
            — {reviews[current].author}, {reviews[current].source}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-brass w-6" : "bg-cream/20 hover:bg-cream/40"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
