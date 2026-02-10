'use client';

export default function GettingReady() {
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
            <a href="/getting-ready" className="text-[#A67C52] font-medium">GETTING READY</a>
            <a href="/knowledge-base" className="text-gray-700 hover:text-[#A67C52] transition font-medium">KNOWLEDGE BASE</a>
            <a href="/gift-shop" className="text-gray-700 hover:text-[#A67C52] transition font-medium">GIFT SHOP</a>
            <a
              href="/order"
              className="bg-[#A67C52] text-white px-5 py-2 rounded hover:bg-[#8B6341] transition font-medium"
            >
              PLACE ORDER / SIGN-IN
            </a>
          </div>
        </div>
      </nav>

      <section className="relative h-96 pt-24 flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(/0003.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Getting Ready</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Make the First Impression Count</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Help your sellers prepare with a simple checklist that makes every appointment smoother.
          </p>
          <a
            href="/getting-ready-checklist.pdf"
            className="inline-flex items-center justify-center mt-6 bg-[#A67C52] text-white px-8 py-4 text-lg font-bold rounded hover:bg-[#8B6341] transition"
          >
            DOWNLOAD CHECKLIST
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#A67C52] font-semibold mb-4 text-lg">Not Just Real Estate Photography…</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Everything You Need to Market Your Listings</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Great media requires teamwork and preparation. Use these tips to make sure every room is photo-ready
              and your listing looks its best on day one.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#A67C52] text-xl">✓</span>
                <span>Declutter surfaces, hide personal items, and clear walkways.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A67C52] text-xl">✓</span>
                <span>Turn on all lights and replace burnt bulbs for a consistent glow.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A67C52] text-xl">✓</span>
                <span>Open blinds and curtains to maximize natural light.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A67C52] text-xl">✓</span>
                <span>Remove vehicles from driveways and tidy curb appeal areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A67C52] text-xl">✓</span>
                <span>Secure pets and keep the home quiet during the shoot.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-10 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Day-of Appointment Tips</h3>
            <p className="text-gray-700 mb-6">
              Provide access instructions, confirm any special angles, and plan for 60–90 minutes on-site depending
              on size and services.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded border border-gray-200">
                <p className="font-semibold text-gray-900">Estimated Turnaround</p>
                <p className="text-gray-600 text-sm mt-1">Most media delivered the next business day.</p>
              </div>
              <div className="p-4 bg-white rounded border border-gray-200">
                <p className="font-semibold text-gray-900">Weather Contingency</p>
                <p className="text-gray-600 text-sm mt-1">Drone and twilight sessions reschedule as needed.</p>
              </div>
              <div className="p-4 bg-white rounded border border-gray-200">
                <p className="font-semibold text-gray-900">Quick Questions?</p>
                <p className="text-gray-600 text-sm mt-1">Email us at contact@canopystone.com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need help before your shoot?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Browse common questions or reach out for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/knowledge-base"
              className="inline-flex items-center justify-center border-2 border-[#A67C52] text-[#A67C52] px-8 py-4 text-lg font-bold rounded hover:bg-[#A67C52] hover:text-white transition"
            >
              VISIT KNOWLEDGE BASE
            </a>
            <a
              href="/order"
              className="inline-flex items-center justify-center bg-[#A67C52] text-white px-8 py-4 text-lg font-bold rounded hover:bg-[#8B6341] transition"
            >
              PLACE ORDER / SIGN-IN
            </a>
          </div>
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
