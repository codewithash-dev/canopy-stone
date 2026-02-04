'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-[#8B6F47]">◆</span> CANOPY STONE
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#8B6F47] hover:text-white transition">HOME</a>
            <a href="#services" className="text-white hover:text-[#8B6F47] transition">SERVICES</a>
            <a href="#portfolio" className="text-white hover:text-[#8B6F47] transition">PORTFOLIO</a>
            <button className="bg-[#8B6F47] text-white px-6 py-2 rounded hover:bg-[#7A5E3A] transition">
              SIGN IN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-screen pt-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-6xl font-bold mb-4">Not Just Real Estate Photography…</h1>
          <p className="text-2xl mb-8 text-gray-300">Professional listing media for serious agents</p>
          <button className="bg-[#8B6F47] text-white px-8 py-4 text-lg font-bold rounded hover:bg-[#7A5E3A]">
            VIEW SERVICES
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">EVERYTHING YOU NEED TO MARKET YOUR LISTINGS & YOUR BRAND</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-[#D4A574] to-[#8B6F47] rounded-lg"></div>
            <div>
              <p className="text-gray-600 text-lg mb-6">Professional real estate media is critical for attracting homebuyers and staying top-of-mind with homeowners.</p>
              <button className="w-full bg-[#8B6F47] text-white py-3 font-bold rounded mb-4 hover:bg-[#7A5E3A]">VIEW SERVICES & PRICING →</button>
              <button className="w-full border-2 border-[#8B6F47] text-[#8B6F47] py-3 font-bold rounded hover:bg-[#8B6F47] hover:text-white">VIEW PORTFOLIO →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-[#8B6F47] mb-4">CANOPY STONE</h3>
          <p className="text-gray-400">contact@canopystone.com</p>
          <p className="text-gray-400">Miami, FL 33177</p>
        </div>
      </footer>
    </div>
  );
}