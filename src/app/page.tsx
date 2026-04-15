'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const reviews = [
  {
    name: "Maria T.",
    rating: 5,
    date: "March 2024",
    text: "Villa Verone is an absolute gem in Geneva. The carbonara is the best I've had outside of Rome — perfectly silky, not a drop of cream in sight. The historic stone building adds such romance to the evening. We celebrated our anniversary here and it was perfect in every way.",
  },
  {
    name: "James K.",
    rating: 5,
    date: "February 2024",
    text: "I've been coming here for over a decade and the quality never wavers. The osso buco melts in your mouth and the tiramisu is legendary. Service is warm and attentive without being intrusive. This is what Italian dining is supposed to feel like.",
  },
  {
    name: "Sarah L.",
    rating: 5,
    date: "January 2024",
    text: "The atmosphere inside that 1849 limestone building is unlike anywhere else in the suburbs. Candlelit, intimate, and effortlessly romantic. The pappardelle with wild boar ragù was extraordinary — deeply flavored and beautifully balanced. Cannot recommend highly enough.",
  },
  {
    name: "Robert M.",
    rating: 5,
    date: "December 2023",
    text: "Outstanding from start to finish. The bruschetta al pomodoro was fresh and vibrant, the wood-fired pizza Margherita had the perfect char, and the tiramisu was heavenly. The staff treated us like family. Villa Verone is a treasure Geneva is lucky to have.",
  },
  {
    name: "Christine B.",
    rating: 5,
    date: "November 2023",
    text: "Wonderful hidden gem! The handmade pasta is clearly made with love and expertise — the gnocchi were like pillows. They accommodated our dietary needs without any fuss. The wine list is well-curated and fairly priced. This is our new go-to for special occasions.",
  },
  {
    name: "David P.",
    rating: 4,
    date: "October 2023",
    text: "Consistently excellent Italian food in a stunning historic setting. The veal piccata was delicate and perfectly lemony. Service was impeccable. We've been visiting Villa Verone for over 15 years and it remains one of the finest restaurants in the Fox River Valley.",
  },
];

const featuredDishes = [
  {
    name: "Pappardelle al Ragù",
    description: "Hand-cut egg pasta ribbons with slow-braised wild boar ragù, rosemary, and Parmigiano-Reggiano",
    category: "Pasta",
    price: "$26",
  },
  {
    name: "Osso Buco alla Milanese",
    description: "Braised veal shank in white wine and gremolata, served with saffron risotto",
    category: "Secondi",
    price: "$38",
  },
  {
    name: "Pizza Margherita DOC",
    description: "San Marzano tomatoes, fresh buffalo mozzarella, basil, extra virgin olive oil",
    category: "Pizza",
    price: "$18",
  },
  {
    name: "Tiramisù Classico",
    description: "Our legendary house recipe — espresso-soaked ladyfingers, mascarpone cream, dark cocoa",
    category: "Dolci",
    price: "$10",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2C1810 0%, #1A0A06 40%, #2C1810 100%)',
        }}
      >
        {/* Animated background pattern */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 50%, #8B1A1A 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, #C9A84C 0%, transparent 40%),
                radial-gradient(ellipse at 60% 80%, #8B1A1A 0%, transparent 40%)
              `,
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="stone" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="50" height="30" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              <rect x="50" y="0" width="50" height="30" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              <rect x="25" y="30" width="50" height="30" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              <rect x="-25" y="30" width="50" height="30" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              <rect x="75" y="30" width="50" height="30" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#stone)" />
          </svg>
        </motion.div>

        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-24 opacity-60" style={{ backgroundColor: '#C9A84C' }} />
            <span className="text-2xl" style={{ color: '#C9A84C' }}>✦</span>
            <div className="h-px w-24 opacity-60" style={{ backgroundColor: '#C9A84C' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="tracking-[0.4em] text-xs sm:text-sm uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Est. 1849 · Geneva, Illinois
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-bold"
            style={{ color: '#F5F0E8' }}
          >
            Villa Verone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-playfair italic text-xl sm:text-2xl md:text-3xl mt-3"
            style={{ color: '#C9A84C' }}
          >
            Ristorante Italiano
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex items-center justify-center gap-4 my-8"
          >
            <div className="h-px w-16" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            <span className="text-sm tracking-[0.3em] uppercase" style={{ color: 'rgba(201,168,76,0.6)' }}>Southern Italian Cuisine</span>
            <div className="h-px w-16" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(245,240,232,0.7)' }}
          >
            Where the warmth of Southern Italy meets the charm of historic Geneva.
            Over 27 years of authentic cuisine, family tradition, and unforgettable evenings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link
              href="/menu"
              className="border px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8', borderColor: '#C9A84C' }}
            >
              View Our Menu
            </Link>
            <a
              href="tel:6302323322"
              className="border px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: 'transparent', color: '#C9A84C', borderColor: '#C9A84C' }}
            >
              Reservations
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full flex items-start justify-center pt-2 mx-auto"
              style={{ border: '1px solid rgba(201,168,76,0.4)' }}
            >
              <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'rgba(201,168,76,0.6)' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 stone-texture" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="tracking-[0.3em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>Benvenuti</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: '#2C1810' }}>
                A Taste of Southern Italy<br />
                <span className="italic" style={{ color: '#8B1A1A' }}>in the Heart of Geneva</span>
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201,168,76,0.3)' }} />
                <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201,168,76,0.3)' }} />
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B6B6B' }}>
                Nestled within the walls of a magnificent 1849 limestone building on Geneva&apos;s historic
                Third Street, Villa Verone has been welcoming guests to an authentic Italian experience
                for over 27 years.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#6B6B6B' }}>
                Our kitchen is guided by the traditions of Southern Italy — slow-braised meats,
                handmade pasta, wood-fired pizzas, and recipes passed down through generations.
                Every dish is a love letter to the Italian table.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="text-center">
                  <p className="font-playfair text-4xl font-bold" style={{ color: '#C9A84C' }}>27+</p>
                  <p className="text-xs uppercase tracking-wider mt-1" style={{ color: '#6B6B6B' }}>Years of Excellence</p>
                </div>
                <div className="hidden sm:block w-px" style={{ backgroundColor: 'rgba(201,168,76,0.2)' }} />
                <div className="text-center">
                  <p className="font-playfair text-4xl font-bold" style={{ color: '#C9A84C' }}>300+</p>
                  <p className="text-xs uppercase tracking-wider mt-1" style={{ color: '#6B6B6B' }}>Five-Star Reviews</p>
                </div>
                <div className="hidden sm:block w-px" style={{ backgroundColor: 'rgba(201,168,76,0.2)' }} />
                <div className="text-center">
                  <p className="font-playfair text-4xl font-bold" style={{ color: '#C9A84C' }}>1849</p>
                  <p className="text-xs uppercase tracking-wider mt-1" style={{ color: '#6B6B6B' }}>Historic Building</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden" style={{ backgroundColor: '#2C1810', aspectRatio: '4/5' }}>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(160deg, #3D1F0E 0%, #2C1810 40%, #1A0A06 100%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg viewBox="0 0 300 400" className="w-48 h-64 mx-auto opacity-30" xmlns="http://www.w3.org/2000/svg">
                      <rect x="50" y="200" width="200" height="180" fill="#C9A84C" opacity="0.3"/>
                      <rect x="80" y="150" width="140" height="60" fill="#C9A84C" opacity="0.3"/>
                      <polygon points="80,150 220,150 200,80 100,80" fill="#8B1A1A" opacity="0.4"/>
                      <rect x="80" y="230" width="40" height="50" fill="#C9A84C" opacity="0.5"/>
                      <rect x="180" y="230" width="40" height="50" fill="#C9A84C" opacity="0.5"/>
                      <rect x="130" y="220" width="40" height="80" fill="#C9A84C" opacity="0.4"/>
                      <ellipse cx="100" cy="230" rx="20" ry="12" fill="#C9A84C" opacity="0.5"/>
                      <ellipse cx="200" cy="230" rx="20" ry="12" fill="#C9A84C" opacity="0.5"/>
                      <line x1="50" y1="200" x2="250" y2="200" stroke="#C9A84C" strokeWidth="2" opacity="0.6"/>
                      <line x1="80" y1="150" x2="220" y2="150" stroke="#C9A84C" strokeWidth="2" opacity="0.6"/>
                    </svg>
                    <p className="font-playfair italic text-xl mt-4 opacity-60" style={{ color: '#C9A84C' }}>
                      Est. 1849
                    </p>
                    <p className="text-xs tracking-widest uppercase mt-2" style={{ color: 'rgba(201,168,76,0.4)' }}>
                      Geneva, Illinois
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12" style={{ borderTop: '2px solid rgba(201,168,76,0.4)', borderLeft: '2px solid rgba(201,168,76,0.4)' }} />
                <div className="absolute top-4 right-4 w-12 h-12" style={{ borderTop: '2px solid rgba(201,168,76,0.4)', borderRight: '2px solid rgba(201,168,76,0.4)' }} />
                <div className="absolute bottom-4 left-4 w-12 h-12" style={{ borderBottom: '2px solid rgba(201,168,76,0.4)', borderLeft: '2px solid rgba(201,168,76,0.4)' }} />
                <div className="absolute bottom-4 right-4 w-12 h-12" style={{ borderBottom: '2px solid rgba(201,168,76,0.4)', borderRight: '2px solid rgba(201,168,76,0.4)' }} />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 border-2 w-24 h-24 flex items-center justify-center text-center rounded-full" style={{ backgroundColor: '#8B1A1A', borderColor: '#C9A84C' }}>
                <div>
                  <p className="font-playfair text-2xl font-bold leading-none" style={{ color: '#C9A84C' }}>4.5</p>
                  <p className="text-xs" style={{ color: '#C9A84C' }}>★★★★½</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-24" style={{ backgroundColor: '#2C1810' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="tracking-[0.3em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>La Nostra Cucina</p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold" style={{ color: '#F5F0E8' }}>
              Signature Dishes
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
              <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(26,26,26,0.4)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <p className="text-xs tracking-widest uppercase mb-3 opacity-70" style={{ color: '#C9A84C' }}>
                  {dish.category}
                </p>
                <h3 className="font-playfair text-xl font-semibold mb-3" style={{ color: '#F5F0E8' }}>
                  {dish.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(245,240,232,0.5)' }}>
                  {dish.description}
                </p>
                <p className="font-playfair text-xl" style={{ color: '#C9A84C' }}>{dish.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-block border px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: 'transparent', color: '#C9A84C', borderColor: '#C9A84C' }}
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="tracking-[0.3em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>Le Recensioni</p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold" style={{ color: '#2C1810' }}>
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
              <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-sm" style={{ color: '#C9A84C' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: '#6B6B6B' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-playfair font-semibold" style={{ color: '#2C1810' }}>{review.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(107,107,107,0.6)' }}>{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS & LOCATION BANNER */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#8B1A1A' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, #C9A84C 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="font-playfair text-xl font-semibold mb-4" style={{ color: '#F5F0E8' }}>Hours</h3>
              <div className="text-sm space-y-1" style={{ color: 'rgba(245,240,232,0.8)' }}>
                <p>Mon–Thu: 11:00am – 9:00pm</p>
                <p>Fri–Sat: 11:00am – 10:00pm</p>
                <p>Sunday: 12:00pm – 9:00pm</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-playfair text-xl font-semibold mb-4" style={{ color: '#F5F0E8' }}>Location</h3>
              <p className="text-sm" style={{ color: 'rgba(245,240,232,0.8)' }}>8 S 3rd St</p>
              <p className="text-sm" style={{ color: 'rgba(245,240,232,0.8)' }}>Geneva, IL 60134</p>
              <a
                href="https://maps.google.com/?q=8+S+3rd+St+Geneva+IL+60134"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm border px-5 py-2 transition-all duration-300 hover:opacity-80"
                style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.6)' }}
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-playfair text-xl font-semibold mb-4" style={{ color: '#F5F0E8' }}>Reservations</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(245,240,232,0.8)' }}>
                Call us to reserve your table or for any questions about our menu.
              </p>
              <a
                href="tel:6302323322"
                className="inline-block font-medium text-sm tracking-wider uppercase px-6 py-3 transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C9A84C', color: '#2C1810' }}
              >
                (630) 232-3322
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center" style={{ backgroundColor: '#2C1810' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
              <span className="text-2xl" style={{ color: '#C9A84C' }}>✦</span>
              <div className="h-px w-20" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
              Join Us for an<br />
              <span className="italic" style={{ color: '#C9A84C' }}>Unforgettable Evening</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Whether celebrating a special occasion or simply craving authentic Italian cuisine,
              Villa Verone is ready to welcome you. Buon appetito!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6302323322"
                className="font-medium text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C9A84C', color: '#2C1810' }}
              >
                Make a Reservation
              </a>
              <Link
                href="/about"
                className="border text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:opacity-80"
                style={{ backgroundColor: 'transparent', color: '#F5F0E8', borderColor: 'rgba(245,240,232,0.3)' }}
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
