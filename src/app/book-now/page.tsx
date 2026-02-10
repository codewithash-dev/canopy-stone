'use client';

import OrderContent from '../components/OrderContent';

export default function BookNowPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - WVT style: black bar, logo left, Book Now center, Sign In + Pricing right */}
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo.png" alt="Canopy Stone" className="h-9 w-auto brightness-0 invert opacity-95" />
          </a>
          <a
            href="/book-now"
            className="hidden sm:flex items-center gap-2 text-white font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            Book Now
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/signin"
              className="hidden sm:inline-flex items-center gap-2 border border-white/50 bg-transparent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Sign In
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#8B6341]"
            >
              Pricing
            </a>
          </div>
        </div>
      </header>

      <OrderContent />
    </div>
  );
}
