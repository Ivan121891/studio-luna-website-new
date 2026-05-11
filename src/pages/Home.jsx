import { Link } from 'react-router-dom'

const services = [
  { name: '24K Nano Gold Recovery Facial', desc: 'Deeply nourish and revitalize your skin with 24K gold. Soft, smooth, beautifully illuminated.', price: '$175' },
  { name: 'Oxygen Jet Facial', desc: 'Ultra-hydrating facial that instantly refreshes and soothes. Plump, youthful, luminous.', price: '$145' },
  { name: 'Collagen Regeneration Facial', desc: 'Restore smooth, supple, and youthful bounce with collagen-enhancing treatment.', price: '$155' },
  { name: 'Cryogenic Correction', desc: 'Cooling wave tightens, brightens, and revitalizes your complexion in an instant.', price: '$165' },
]

const testimonials = [
  { quote: 'My skin has never looked this radiant. The facial changed everything -- I am a client for life.', name: 'Sarah M.', title: 'Regular since 2022' },
  { quote: 'Studio Luna is pure magic. The atmosphere is so calming, and my complexion is glowing after every visit.', name: 'Jessica K.', title: 'Monthly member' },
  { quote: 'I was nervous about my first facial, but the estheticians made me feel so comfortable. The results were incredible.', name: 'Amanda R.', title: 'New client' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/facial-1.jpg" alt="Facial treatment at Studio Luna" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-luna-dark/85 via-luna-dark/60 to-luna-midnight/70" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-luna-gold/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-luna-gold/60" />
              <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Daly City Spa</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair text-luna-cream leading-tight">
              Your Skin<br /><span className="text-luna-gold">Deserves the Moon</span>
            </h1>
            <p className="mt-6 text-lg text-luna-cream/70 leading-relaxed max-w-xl">
              At Studio Luna, we craft personalized facial experiences that restore, renew, and reveal your natural radiance. Our mission is to promote health and well-being through advanced aesthetic treatments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 bg-luna-gold text-luna-dark font-medium tracking-wider uppercase text-sm rounded-full hover:bg-luna-gold-light transition-all duration-200">
                Explore Services
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border border-luna-gold/40 text-luna-gold-light tracking-wider uppercase text-sm rounded-full hover:bg-luna-gold/10 transition-all duration-200">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Treatments</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-dark">Signature Facial Services</h2>
            <p className="mt-4 text-luna-gray max-w-xl mx-auto">Each treatment is tailored to your unique skin concerns, combining clinical techniques with holistic care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.name} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-luna-gold/5">
                <div className="w-12 h-12 rounded-full bg-luna-blush flex items-center justify-center mb-5 group-hover:bg-luna-gold/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-luna-mauve" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-playfair text-luna-charcoal">{s.name}</h3>
                <p className="mt-2 text-sm text-luna-gray leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-luna-gold font-semibold">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-luna-mauve hover:text-luna-dark transition-colors text-sm tracking-wider uppercase">
              View All Treatments
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 bg-luna-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-luna-gold via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-cream">Where Light Meets Skin</h2>
              <p className="mt-6 text-luna-cream/60 leading-relaxed">
                Studio Luna Body Sculpting was born from a simple belief -- that skincare is self-care. Our team of licensed estheticians brings years of experience and a deep passion for helping you feel beautiful in your own skin.
              </p>
              <p className="mt-4 text-luna-cream/60 leading-relaxed">
                We use only the highest-quality products and cutting-edge technology, all wrapped in a warm, tranquil atmosphere designed to melt your stress away.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-luna-gold hover:text-luna-gold-light transition-colors text-sm tracking-wider uppercase">
                Learn More About Us
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-luna-midnight to-luna-dark border border-luna-gold/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/logo.webp" alt="Studio Luna" className="h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-luna-cream/40 text-sm italic max-w-xs mx-auto">"Skincare is not just about appearance -- it's a ritual of self-love and renewal."</p>
                  <p className="mt-3 text-luna-gold text-sm font-playfair">-- Studio Luna Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Testimonials</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-dark">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-xl p-8 border border-luna-gold/5 shadow-sm">
                <svg className="w-8 h-8 text-luna-gold/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-luna-charcoal/80 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-luna-gold/10">
                  <p className="text-sm font-semibold text-luna-charcoal">{t.name}</p>
                  <p className="text-xs text-luna-gray">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-luna-dark to-luna-midnight">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-playfair text-luna-cream">Ready to <span className="text-luna-gold">Glow</span>?</h2>
          <p className="mt-4 text-luna-cream/60">Your journey to radiant skin begins with a single appointment. Let us take care of the rest.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-luna-gold text-luna-dark font-medium tracking-wider uppercase text-sm rounded-full hover:bg-luna-gold-light transition-all duration-200">
            Book Your Appointment
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
