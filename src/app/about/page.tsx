'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  { year: '1849', event: 'The limestone building is constructed on Third Street, Geneva, becoming one of the oldest commercial structures in Kane County.' },
  { year: '1997', event: 'Villa Verone Ristorante Italiano opens its doors, bringing the authentic flavors of Southern Italy to the Fox River Valley.' },
  { year: '2005', event: 'Recognized by Chicago Magazine as one of the top Italian restaurants in the suburban Chicago area.' },
  { year: '2010', event: 'The wine cellar is expanded to feature over 150 Italian and domestic selections, curated to complement our cuisine.' },
  { year: '2015', event: 'Villa Verone celebrates 18 years of service, welcomed by a sold-out anniversary dinner and loyal guests from across the region.' },
  { year: '2024', event: "With over 300 five-star reviews and 27+ years of service, Villa Verone remains Geneva's premier destination for Italian fine dining." },
];

const values = [
  {
    icon: '🌿',
    title: 'Authentic Ingredients',
    description: 'We import the finest Italian products — San Marzano tomatoes, 00 flour, Parmigiano-Reggiano, prosciutto di Parma — and combine them with locally sourced seasonal produce.',
  },
  {
    icon: '👨‍🍳',
    title: 'Handcrafted Daily',
    description: 'Our pasta is made fresh every morning. Our sauces simmer for hours. Our bread is baked in-house. No shortcuts, no compromises.',
  },
  {
    icon: '🏛️',
    title: 'Historic Setting',
    description: 'Dining in our 1849 limestone building is an experience unto itself. The original stone walls, warm candlelight, and intimate rooms create an ambiance unlike any other.',
  },
  {
    icon: '🤝',
    title: 'Family Tradition',
    description: 'For over 27 years, we have welcomed our guests like extended family. Many of our team members have been with us for decades, and our regulars feel like old friends.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: 'linear-gradient(160deg, #2C1810 0%, #1A1A1A 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 30% 50%, #C9A84C 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, #8B1A1A 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="tracking-[0.4em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>La Nostra Storia</p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
            Our Story
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
            <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          </div>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.6)' }}>
            A legacy of authentic Italian hospitality, rooted in tradition and
            built upon the warmth of genuine connection.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-4xl font-bold mb-6" style={{ color: '#2C1810' }}>
                Where History Meets Hospitality
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1" style={{ backgroundColor: 'rgba(201,168,76,0.3)' }} />
                <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
              </div>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#6B6B6B' }}>
                Villa Verone Ristorante Italiano was born from a simple but profound desire:
                to bring the soul of Southern Italy to the American table. When our doors opened
                in 1997 along Geneva&apos;s historic Third Street, we made a promise — that every guest
                would experience the same warmth, generosity, and passion for food that defines
                the Italian way of life.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#6B6B6B' }}>
                Our home is a remarkable 1849 limestone building, one of the oldest surviving
                commercial structures in Kane County. Its thick stone walls, which have witnessed
                nearly two centuries of history, now envelop our guests in an atmosphere of
                timeless elegance and intimate warmth.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6B6B6B' }}>
                Over 27 years later, our kitchen remains guided by the same principles:
                authentic recipes, the finest ingredients, handmade pasta, and the belief
                that a shared meal is one of life&apos;s greatest pleasures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden" style={{ backgroundColor: '#2C1810', aspectRatio: '4/5' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-playfair italic text-3xl mb-2 opacity-40" style={{ color: '#C9A84C' }}>
                      &ldquo;L&apos;amore per il cibo è amore per la vita&rdquo;
                    </p>
                    <p className="text-xs tracking-wider uppercase mt-4" style={{ color: 'rgba(201,168,76,0.2)' }}>
                      Love for food is love for life
                    </p>
                    <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto mt-8 opacity-10" xmlns="http://www.w3.org/2000/svg">
                      {Array.from({ length: 5 }).map((_, row) =>
                        Array.from({ length: 3 }).map((_, col) => (
                          <rect
                            key={`${row}-${col}`}
                            x={col * 70 - (row % 2 === 0 ? 0 : 35)}
                            y={row * 42}
                            width="65"
                            height="38"
                            fill="none"
                            stroke="#C9A84C"
                            strokeWidth="1"
                          />
                        ))
                      )}
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-12 h-12" style={{ borderTop: '2px solid rgba(201,168,76,0.4)', borderLeft: '2px solid rgba(201,168,76,0.4)' }} />
                <div className="absolute top-4 right-4 w-12 h-12" style={{ borderTop: '2px solid rgba(201,168,76,0.4)', borderRight: '2px solid rgba(201,168,76,0.4)' }} />
                <div className="absolute bottom-4 left-4 w-12 h-12" style={{ borderBottom: '2px solid rgba(201,168,76,0.4)', borderLeft: '2px solid rgba(201,168,76,0.4)' }} />
                <div className="absolute bottom-4 right-4 w-12 h-12" style={{ borderBottom: '2px solid rgba(201,168,76,0.4)', borderRight: '2px solid rgba(201,168,76,0.4)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: '#2C1810' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="tracking-[0.3em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>La Nostra Filosofia</p>
            <h2 className="font-playfair text-4xl font-bold" style={{ color: '#F5F0E8' }}>Our Philosophy</h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
              <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 transition-all duration-300"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-playfair text-xl font-semibold mb-3" style={{ color: '#C9A84C' }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="tracking-[0.3em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>La Nostra Storia</p>
            <h2 className="font-playfair text-4xl font-bold" style={{ color: '#2C1810' }}>Our Journey</h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
              <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
              <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden sm:block" style={{ backgroundColor: 'rgba(201,168,76,0.2)' }} />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="sm:pl-20 relative"
                >
                  <div className="hidden sm:flex absolute left-0 w-16 h-16 border-2 items-center justify-center" style={{ backgroundColor: '#2C1810', borderColor: '#C9A84C' }}>
                    <span className="font-playfair text-xs font-bold" style={{ color: '#C9A84C' }}>{item.year}</span>
                  </div>
                  <div className="sm:hidden mb-2">
                    <span className="font-playfair text-lg font-bold" style={{ color: '#C9A84C' }}>{item.year}</span>
                  </div>
                  <div className="bg-white p-6 transition-colors" style={{ border: '1px solid rgba(201,168,76,0.1)' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-4" style={{ color: '#F5F0E8' }}>
              Come Write Your Chapter
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.7)' }}>
              Every table at Villa Verone has a story. We&apos;d love for yours to be part of ours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="font-medium text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C9A84C', color: '#2C1810' }}
              >
                Make a Reservation
              </Link>
              <Link
                href="/menu"
                className="border text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:opacity-80"
                style={{ backgroundColor: 'transparent', color: '#F5F0E8', borderColor: 'rgba(245,240,232,0.4)' }}
              >
                Explore the Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
