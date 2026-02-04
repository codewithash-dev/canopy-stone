'use client';

export default function Services() {
  const services = [
    {
      title: 'HDR Photography',
      description: 'Multiple exposures to capture every detail with perfect lighting',
      price: 'Starting at $160',
      link: '/services/listing-media?service=hdr'
    },
    {
      title: 'Cinematic Video',
      description: 'Fast-paced tours showcasing layout and flow of the home',
      price: 'Starting at $200',
      link: '/services/listing-media?service=cinematic'
    },
    {
      title: 'Aerial/Drone',
      description: 'High-altitude photography positioning listings above competition',
      price: 'Starting at $149',
      link: '/services/listing-media?service=aerial'
    },
    {
      title: 'Matterport 3D',
      description: 'Immersive 3D tours with floor plans for virtual walkthrough',
      price: 'Starting at $199',
      link: '/services/listing-media?service=matterport'
    },
    {
      title: 'Virtual Staging',
      description: 'Digitally furnish spaces to help buyers visualize potential',
      price: 'Starting at $65',
      link: '/services/listing-media?service=branding'
    },
    {
      title: 'Twilight Edits',
      description: 'Convert daytime photos into stunning dusk views',
      price: 'Starting at $25',
      link: '/services/listing-media?service=branding'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-[#A67C52]">◆</span> CANOPY STONE
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-[#A67C52] transition font-medium">HOME</a>
            <a href="/services" className="text-[#A67C52] font-medium">SERVICES & PRICING</a>
            <a href="/portfolio" className="text-gray-700 hover:text-[#A67C52] transition font-medium">PORTFOLIO</a>
            <a href="/getting-ready" className="text-gray-700 hover:text-[#A67C52] transition font-medium">GETTING READY</a>
            <button className="bg-[#A67C52] text-white px-6 py-2 rounded hover:bg-[#8B6341] transition font-medium">
              SIGN IN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 pt-24 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Services & Pricing</h1>
          <p className="text-xl text-gray-700">Professional real estate media solutions for serious agents</p>
        </div>
      </section>

      {/* Included With Every Order */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Included With Every Order...</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Fast Scheduling & Quick Delivery</h3>
              <p className="text-gray-700">Appointments typically available within 1-3 business days and most media is delivered the next business day.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Personalized Property Website</h3>
              <p className="text-gray-700">Market your listing with a dedicated property website with built-in lead capture capabilities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Customizable Marketing Toolkit</h3>
              <p className="text-gray-700">Quickly create branded flyers, postcards, and social media content for each of your listings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <a
                key={idx}
                href={service.link}
                className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#A67C52] hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#A67C52] transition">{service.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[#A67C52] font-bold">{service.price}</p>
                  <span className="text-[#A67C52] text-xl group-hover:translate-x-1 transition">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#A67C52]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8 opacity-90">Explore our services and find the perfect package for your listings</p>
          <button className="bg-white text-[#A67C52] px-8 py-4 text-lg font-bold rounded hover:bg-gray-100 transition">
            PLACE ORDER NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#A67C52] mb-4">CANOPY STONE</h3>
              <p className="text-gray-400">Professional real estate media & marketing for serious agents.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-[#A67C52] transition">Home</a></li>
                <li><a href="/services" className="hover:text-[#A67C52] transition">Services</a></li>
                <li><a href="/portfolio" className="hover:text-[#A67C52] transition">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">CONTACT</h3>
              <p className="text-gray-400">contact@canopystone.com</p>
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