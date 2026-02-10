'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type PortfolioItem = {
  id: string;
  title: string;
  location: string;
  category: string;
  src: string;
};

const filters = [
  'All',
  'HDR Photography',
  'Cinematic Video',
  'Aerial/Drone',
  'Matterport 3D',
  'Virtual Staging',
  'Twilight',
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 'hdr-1',
    title: 'Modern Waterfront Estate',
    location: 'Miami, FL',
    category: 'HDR Photography',
    src: '/images/portfolio/hdr-1.jpg',
  },
  {
    id: 'hdr-2',
    title: 'Luxury High-Rise Living',
    location: 'Brickell, FL',
    category: 'HDR Photography',
    src: '/images/portfolio/hdr-2.jpg',
  },
  {
    id: 'cinematic-1',
    title: 'Cinematic Walkthrough',
    location: 'Coral Gables, FL',
    category: 'Cinematic Video',
    src: '/images/portfolio/cinematic-1.jpg',
  },
  {
    id: 'aerial-1',
    title: 'Aerial Neighborhood Showcase',
    location: 'Pinecrest, FL',
    category: 'Aerial/Drone',
    src: '/images/portfolio/aerial-1.jpg',
  },
  {
    id: 'matterport-1',
    title: '3D Immersive Tour',
    location: 'Miami Beach, FL',
    category: 'Matterport 3D',
    src: '/images/portfolio/matterport-1.jpg',
  },
  {
    id: 'staging-1',
    title: 'Virtual Staging Preview',
    location: 'Doral, FL',
    category: 'Virtual Staging',
    src: '/images/portfolio/staging-1.jpg',
  },
  {
    id: 'twilight-1',
    title: 'Twilight Exterior Edit',
    location: 'Key Biscayne, FL',
    category: 'Twilight',
    src: '/images/portfolio/twilight-1.jpg',
  },
  {
    id: 'hdr-3',
    title: 'Open Concept Living',
    location: 'Miami Lakes, FL',
    category: 'HDR Photography',
    src: '/images/portfolio/hdr-3.jpg',
  },
  {
    id: 'aerial-2',
    title: 'Resort-Style Grounds',
    location: 'South Miami, FL',
    category: 'Aerial/Drone',
    src: '/images/portfolio/aerial-2.jpg',
  },
  {
    id: 'cinematic-2',
    title: 'City Condo Showcase',
    location: 'Downtown Miami, FL',
    category: 'Cinematic Video',
    src: '/images/portfolio/cinematic-2.jpg',
  },
  {
    id: 'matterport-2',
    title: 'New Construction Tour',
    location: 'Weston, FL',
    category: 'Matterport 3D',
    src: '/images/portfolio/matterport-2.jpg',
  },
  {
    id: 'twilight-2',
    title: 'Sunset Pool Retreat',
    location: 'Fort Lauderdale, FL',
    category: 'Twilight',
    src: '/images/portfolio/twilight-2.jpg',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeIndex = filteredItems.findIndex((item) => item.id === activeItemId);
  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null;

  useEffect(() => {
    setActiveItemId(null);
  }, [activeFilter]);

  useEffect(() => {
    document.body.style.overflow = activeItem ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  const showNext = () => {
    if (!activeItem || filteredItems.length === 0) return;
    const nextIndex = (activeIndex + 1) % filteredItems.length;
    setActiveItemId(filteredItems[nextIndex].id);
  };

  const showPrev = () => {
    if (!activeItem || filteredItems.length === 0) return;
    const prevIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItemId(filteredItems[prevIndex].id);
  };

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
            <a href="/portfolio" className="text-[#A67C52] font-medium">PORTFOLIO</a>
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Featured Listings</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore a curated collection of listing media crafted to help your marketing stand out.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full border transition text-sm font-semibold ${
                  activeFilter === filter
                    ? 'bg-[#A67C52] text-white border-[#A67C52]'
                    : 'border-gray-300 text-gray-700 hover:border-[#A67C52] hover:text-[#A67C52]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItemId(item.id)}
                className="group text-left border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-56 bg-gray-100">
                  <Image
                    src={item.src}
                    alt={`${item.title} - ${item.category}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A67C52] mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.location}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to elevate your next listing?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We combine strategy, production, and post to deliver media that helps you win more clients.
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center bg-[#A67C52] text-white px-8 py-4 text-lg font-bold rounded hover:bg-[#8B6341] transition"
          >
            VIEW SERVICES & PRICING
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

      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="absolute inset-0" onClick={() => setActiveItemId(null)} />
          <div className="relative z-10 bg-white max-w-4xl w-full rounded-lg overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A67C52]">{activeItem.category}</p>
                <h3 className="text-2xl font-bold text-gray-900">{activeItem.title}</h3>
                <p className="text-sm text-gray-600">{activeItem.location}</p>
              </div>
              <button
                onClick={() => setActiveItemId(null)}
                className="text-gray-500 hover:text-gray-900 text-2xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="relative h-[60vh] bg-gray-100">
              <Image
                src={activeItem.src}
                alt={`${activeItem.title} - ${activeItem.category}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
              <button
                onClick={showPrev}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:border-[#A67C52] hover:text-[#A67C52] transition"
              >
                Previous
              </button>
              <button
                onClick={showNext}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:border-[#A67C52] hover:text-[#A67C52] transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
