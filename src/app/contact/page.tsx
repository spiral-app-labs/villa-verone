'use client';

import { motion } from 'framer-motion';

const hours = [
  { day: 'Monday', hours: '11:00am – 9:00pm' },
  { day: 'Tuesday', hours: '11:00am – 9:00pm' },
  { day: 'Wednesday', hours: '11:00am – 9:00pm' },
  { day: 'Thursday', hours: '11:00am – 9:00pm' },
  { day: 'Friday', hours: '11:00am – 10:00pm' },
  { day: 'Saturday', hours: '11:00am – 10:00pm' },
  { day: 'Sunday', hours: '12:00pm – 9:00pm' },
];

export default function ContactPage() {
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
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, #C9A84C 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="tracking-[0.4em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>Vieni a Trovarci</p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
            Contact & Visit
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
            <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          </div>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.6)' }}>
            We look forward to welcoming you. Call for reservations or find us in the heart of historic Geneva.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-24" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Details */}
            <div className="flex flex-col gap-8">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 transition-colors"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center text-xl" style={{ backgroundColor: '#8B1A1A' }}>📞</div>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>Reservations & Inquiries</p>
                    <h3 className="font-playfair text-xl font-semibold" style={{ color: '#2C1810' }}>Phone</h3>
                  </div>
                </div>
                <a
                  href="tel:6302323322"
                  className="block font-playfair text-3xl transition-colors hover:opacity-80"
                  style={{ color: '#C9A84C' }}
                >
                  (630) 232-3322
                </a>
                <p className="text-sm mt-2" style={{ color: '#6B6B6B' }}>
                  We recommend calling ahead for dinner reservations, especially on weekends.
                </p>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 transition-colors"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center text-xl" style={{ backgroundColor: '#8B1A1A' }}>📍</div>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>Find Us</p>
                    <h3 className="font-playfair text-xl font-semibold" style={{ color: '#2C1810' }}>Address</h3>
                  </div>
                </div>
                <p className="font-playfair text-xl mb-1" style={{ color: '#2C1810' }}>8 S 3rd Street</p>
                <p className="mb-4" style={{ color: '#6B6B6B' }}>Geneva, IL 60134</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=8+S+3rd+St+Geneva+IL+60134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs tracking-widest uppercase px-5 py-3 border transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8', borderColor: '#C9A84C' }}
                  >
                    Google Maps
                  </a>
                  <a
                    href="https://maps.apple.com/?q=8+S+3rd+St+Geneva+IL+60134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs tracking-widest uppercase px-5 py-3 border transition-all duration-300 hover:opacity-80"
                    style={{ backgroundColor: 'transparent', color: '#2C1810', borderColor: 'rgba(201,168,76,0.4)' }}
                  >
                    Apple Maps
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 transition-colors"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center text-xl" style={{ backgroundColor: '#8B1A1A' }}>🕐</div>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>When to Visit</p>
                    <h3 className="font-playfair text-xl font-semibold" style={{ color: '#2C1810' }}>Hours</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {hours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                      <span className="font-medium text-sm" style={{ color: '#2C1810' }}>{item.day}</span>
                      <span className="text-sm" style={{ color: '#6B6B6B' }}>{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4 italic" style={{ color: 'rgba(107,107,107,0.6)' }}>
                  Hours may vary on holidays. Please call ahead to confirm.
                </p>
              </motion.div>
            </div>

            {/* Right: Map + Additional info */}
            <div className="flex flex-col gap-8">
              {/* Google Maps embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden"
                style={{ height: '400px', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.7776085234!2d-88.30636148454564!3d41.88760057921839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ede84f4fde365%3A0xb5aa5b5b5b5b5b5b!2s8%20S%203rd%20St%2C%20Geneva%2C%20IL%2060134!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Villa Verone location map"
                />
              </motion.div>

              {/* Reservation info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8"
                style={{ backgroundColor: '#2C1810', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <h3 className="font-playfair text-2xl font-semibold mb-4" style={{ color: '#C9A84C' }}>
                  Reservations
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,240,232,0.7)' }}>
                  We welcome walk-ins but recommend reservations for dinner service and parties of 4 or more.
                  For private events or large groups, please call us directly to discuss arrangements.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:6302323322"
                    className="flex items-center justify-center gap-2 font-medium text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#C9A84C', color: '#2C1810' }}
                  >
                    📞 Call (630) 232-3322
                  </a>
                </div>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9A84C' }}>Getting Here</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    Located in historic downtown Geneva on Third Street, just steps from the Fox River.
                    Street parking available on 3rd St and nearby lots. We are easily accessible from
                    Route 38 and Route 25.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-4" style={{ color: '#F5F0E8' }}>
              We Look Forward to Seeing You
            </h2>
            <p className="text-base mb-8" style={{ color: 'rgba(245,240,232,0.7)' }}>
              <span className="font-playfair italic" style={{ color: '#C9A84C' }}>&ldquo;A tavola non si invecchia&rdquo;</span>
              <br />
              <span className="text-sm mt-1 block">At the table, one does not grow old. — Italian proverb</span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
