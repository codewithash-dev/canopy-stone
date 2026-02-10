'use client';

const giftCards = [
  {
    title: 'Starter Listing Bundle',
    description: 'Perfect for new agents looking to elevate their first listings.',
    price: '$250',
  },
  {
    title: 'Premium Media Package',
    description: 'Includes HDR photography and cinematic walkthrough video.',
    price: '$450',
  },
  {
    title: 'Luxury Showcase',
    description: 'Add drone coverage, twilight edits, and social media content.',
    price: '$750',
  },
];

export default function GiftShop() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <img src="/images/logo.png" alt="Canopy Stone logo" className="h-10 w-auto" />
            
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-[#A67C52] transition font-medium">HOME</a>
            <a href="/services" className="text-gray-700 hover:text-[#A67C52] transition font-medium">SERVICES & PRICING</a>
            <a href="/portfolio" className="text-gray-700 hover:text-[#A67C52] transition font-medium">PORTFOLIO</a>
            <a href="/getting-ready" className="text-gray-700 hover:text-[#A67C52] transition font-medium">GETTING READY</a>
            <a href="/knowledge-base" className="text-gray-700 hover:text-[#A67C52] transition font-medium">KNOWLEDGE BASE</a>
            <a href="/gift-shop" className="text-[#A67C52] font-medium">GIFT SHOP</a>
            <a
              href="/order"
              className="bg-[#A67C52] text-white px-5 py-2 rounded hover:bg-[#8B6341] transition font-medium"
            >
              PLACE ORDER / SIGN-IN
            </a>
          </div>
        </div>
      </nav>

      <section className="relative h-80 pt-24 flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(/0003.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Gift Shop</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Give the Gift of Great Media</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Surprise an agent or team with curated media packages they can redeem anytime.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 mb-6">{card.description}</p>
                <p className="text-3xl font-bold text-[#A67C52] mb-6">{card.price}</p>
                <button className="w-full bg-[#A67C52] text-white py-3 font-bold rounded hover:bg-[#8B6341] transition">
                  PURCHASE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want a custom package?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We can build a tailored gift card for your team, brokerage, or event.
          </p>
          <a
            href="/knowledge-base"
            className="inline-flex items-center justify-center border-2 border-[#A67C52] text-[#A67C52] px-8 py-4 text-lg font-bold rounded hover:bg-[#A67C52] hover:text-white transition"
          >
            CONTACT US
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/images/logo.png" alt="Canopy Stone logo" className="h-10 w-auto mb-4" />
              <p className="text-gray-400">Professional real estate media & marketing for serious agents.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-[#A67C52] transition">Home</a></li>
                <li><a href="/services" className="hover:text-[#A67C52] transition">Services & Pricing</a></li>
                <li><a href="/portfolio" className="hover:text-[#A67C52] transition">Portfolio</a></li>
                <li><a href="/getting-ready" className="hover:text-[#A67C52] transition">Getting Ready</a></li>
                <li><a href="/knowledge-base" className="hover:text-[#A67C52] transition">Knowledge Base</a></li>
                <li><a href="/gift-shop" className="hover:text-[#A67C52] transition">Gift Shop</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/marketing-resources" className="hover:text-[#A67C52] transition">Marketing Resources</a></li>
                <li><a href="/videographer-resources" className="hover:text-[#A67C52] transition">Videographer Resources</a></li>
                <li><a href="/terms-of-service" className="hover:text-[#A67C52] transition">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#A67C52] transition">Privacy Policy</a></li>
                <li><a href="/cookie-policy" className="hover:text-[#A67C52] transition">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">CONTACT</h3>
              <p className="text-gray-400">contact@canopystone.com</p>
              <p className="text-gray-400">13727 SW 152 Street 1027</p>
              <p className="text-gray-400">Miami, FL 33177</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Canopy Stone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
