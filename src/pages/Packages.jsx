import { Link } from 'react-router-dom'

const packages = [
  {
    name: 'The Glow Starter',
    price: '225',
    original: '280',
    desc: 'Perfect for first-timers. Get a full experience with three essential treatments designed to kick-start your skincare journey.',
    items: ['24K Nano Gold Recovery Facial', 'Vitamin C Boost', 'Express Facial'],
    popular: false,
    image: 'facial-1.jpg',
  },
  {
    name: 'The Radiance Routine',
    price: '375',
    original: '470',
    desc: 'Our most popular package. A powerful combination of resurfacing and hydration for dramatic visible results.',
    items: ['Oxygen Jet Facial', 'Cryogenic Correction', 'LED Light Therapy'],
    popular: true,
    image: 'facial-2.jpg',
  },
  {
    name: 'The Full Moon Ritual',
    price: '550',
    original: '690',
    desc: 'The ultimate indulgence. A complete skin transformation with advanced treatments and therapeutic relaxation.',
    items: ['Collagen Regeneration Facial', 'Lymphatic Facial Lift', 'Therapeutic Heat Facial'],
    popular: false,
    image: 'facial-4.jpg',
  },
  {
    name: 'Monthly Membership',
    price: '99',
    original: null,
    desc: 'One facial per month plus 15% off all add-on treatments and retail products. Cancel anytime.',
    items: ['1 Facial Treatment / month', '15% off add-ons', '10% off retail', 'Birthday treatment'],
    popular: false,
    monthly: true,
    image: 'spa-1.jpg',
  },
]

export default function Packages() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-luna-dark via-luna-midnight to-luna-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Value</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Packages and Memberships</h1>
          <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">
            Save more when you bundle. Our curated packages pair perfectly together, and our membership makes monthly glow-ups effortless.
          </p>
        </div>
      </section>

      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map(pkg => (
              <div key={pkg.name} className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                pkg.popular
                  ? 'bg-luna-dark text-luna-cream border-luna-gold/30 shadow-xl scale-105 lg:scale-105'
                  : 'bg-white text-luna-charcoal border-luna-gold/5 shadow-sm hover:shadow-md'
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={'/images/' + pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  {pkg.popular && (
                    <div className="bg-luna-gold text-luna-dark text-xs tracking-widest uppercase font-semibold px-4 py-1 rounded-full inline-block mb-3">Most Popular</div>
                  )}
                  {pkg.monthly && (
                    <div className="bg-luna-mauve text-white text-xs tracking-widest uppercase font-semibold px-4 py-1 rounded-full inline-block mb-3">Membership</div>
                  )}
                  <h3 className={`text-lg font-playfair ${pkg.popular ? 'text-luna-cream' : 'text-luna-charcoal'}`}>{pkg.name}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-3xl font-playfair ${pkg.popular ? 'text-luna-gold' : 'text-luna-charcoal'}`}>${pkg.price}</span>
                    {pkg.original && <span className="text-sm line-through text-luna-gray">${pkg.original}</span>}
                    {!pkg.monthly && <span className="text-sm text-luna-gray">/ total</span>}
                    {pkg.monthly && <span className="text-sm text-luna-gray">/ month</span>}
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${pkg.popular ? 'text-luna-cream/60' : 'text-luna-gray'}`}>{pkg.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <svg viewBox="0 0 24 24" className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.popular ? 'text-luna-gold' : 'text-luna-mauve'}`} fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className={pkg.popular ? 'text-luna-cream/70' : 'text-luna-gray'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact" className={`block text-center py-3 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-luna-gold text-luna-dark hover:bg-luna-gold-light'
                        : 'border border-luna-gold/30 text-luna-mauve hover:bg-luna-gold/5'
                    }`}>
                      {pkg.monthly ? 'Join Now' : 'Get This Package'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-luna-gold/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs text-luna-gray leading-relaxed">
            * Package prices are pre-tax. Packages must be used within 6 months of purchase and are non-refundable but transferable.
            Membership auto-renews monthly and can be canceled anytime with 30 days notice.
            Gift cards also available -- contact us for details.
          </p>
        </div>
      </section>
    </div>
  )
}
