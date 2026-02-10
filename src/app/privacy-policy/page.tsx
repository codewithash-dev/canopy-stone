'use client';

export default function PrivacyPolicy() {
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

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A67C52] mb-4">Privacy Policy</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            This policy explains how Canopy Stone collects, uses, and protects your information.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Information We Collect</h2>
            <p>Contact information, order details, billing data, and communications with our team.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How We Use Information</h2>
            <p>To schedule services, deliver media, manage accounts, and improve customer experience.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sharing & Disclosure</h2>
            <p>We do not sell your information. We share data only with service providers as needed to fulfill orders.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Choices</h2>
            <p>You can request access, updates, or deletion of your information by contacting our team.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Security</h2>
            <p>We use reasonable administrative and technical measures to protect your data.</p>
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
