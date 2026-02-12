'use client';

import { useState } from 'react';
import HomeAnimations from './components/HomeAnimations';

const whyChooseUs = [
  {
    title: 'One Partner. Every Visual.',
    description:
      'Photography, video, drone, floor plans, and 3D tours—all coordinated by one trusted team so nothing falls through the cracks.',
  },
  {
    title: 'Shows Up Like a Pro',
    description:
      'Our photographers represent you in front of your sellers with professionalism, punctuality, and respect—every single time.',
  },
  {
    title: 'Tight Timelines, Handled',
    description:
      "High volume. Fast turnarounds. Clear communication. We're built to move at the speed of real estate without sacrificing quality.",
  },
  {
    title: 'Consistent, Brand-Ready Media',
    description:
      'Clean, polished visuals that help your listings—and your personal brand—look sharp and consistent across every platform.',
  },
  {
    title: 'Scaled for Any Business',
    description:
      "From one-off listings to high-volume teams, we're trusted to handle thousands of homes a year without cutting corners.",
  },
  {
    title: 'Real People. Real Accountability.',
    description:
      "No call centers. No guessing. You'll always know who you're working with and who's showing up to your listing.",
  },
];

const faqItems = [
  {
    q: 'How do I schedule an appointment?',
    a: 'Click Order Now and enter your phone number if you are a returning client, or click \'Create Account\' if you are a new client. Choose your preferred package and available add-ons, enter the listing information, enter your information (this will pre-fill for returning clients), choose your desired date and time, and submit your order.',
  },
  {
    q: 'How soon can I get scheduled?',
    a: 'While we typically strive to have availability for most appointments within 1-3 days, choosing certain services (ex. Matterport), picking a specific photographer, inclement weather, or increased volume during peak season may impact our availability and you may see times extend from this window.',
  },
  {
    q: 'How do I prepare for my appointment?',
    a: "Great media requires teamwork and cooperation. Let us make it count and provide stunning visuals for Prospective buyers by ensuring your home is ready. Download our 'Getting Ready' checklist for tips to help prepare for your appointment!",
  },
];

const testimonials = [
  { name: 'Blake B.', quote: 'Fast scheduling and incredible results. Canopy Stone made my listing stand out.', initials: 'BB' },
  { name: 'Kent H.', quote: 'Professional team and consistent quality. I recommend them to every agent.', initials: 'KH' },
  { name: 'Kelli S.', quote: 'My listings look premium and sell faster. Worth every penny.', initials: 'KS' },
];

export default function Home() {
  const [activeOffer, setActiveOffer] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const offerItems = [
    {
      title: 'Listing Photography',
      description:
        'Clean, consistent, high-quality photography that sets the tone for your listing and reflects your brand with professionalism.',
    },
    {
      title: 'Cinematic & Social Video',
      description:
        'From cinematic walkthroughs to vertical and agent-on-camera videos, we create motion content that connects with buyers—and sellers.',
    },
    {
      title: 'Aerial & Drone Media',
      description:
        'FAA-compliant aerial photography and video that highlights location, scale, and the features sellers care about most.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HomeAnimations />
      {/* Nav - mimic WVT: logo left, links center, BOOK NOW right */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo.png" alt="Canopy Stone" className="h-16 w-auto" />
          </a>
          <div className="hidden md:flex items-center justify-center gap-8 text-[14px] text-gray-500 flex-1">
            <a href="/" className="font-semibold text-gray-900 hover:text-gray-700">Home</a>
            <a href="/#services" className="hover:text-gray-900 transition">Services</a>
            <a href="/#about" className="hover:text-gray-900 transition">About</a>
            <a href="/#faq" className="hover:text-gray-900 transition">FAQ&apos;s</a>
            <a href="/#contact" className="hover:text-gray-900 transition">Contact</a>
            <a href="/knowledge-base" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition">
              Knowledge Base
            </a>
          </div>
          <a
            href="/book-now"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#A67C52] text-white px-6 py-2.5 rounded-lg hover:bg-[#8B6341] transition font-semibold text-sm"
            data-gsap-button
          >
            <span className="h-2 w-2 bg-green-400 rounded-full flex-shrink-0" />
            BOOK NOW
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </nav>

      {/* Hero - full-width like WVT */}
      <section id="home" className="relative pt-24 min-h-[600px] scroll-mt-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-house.jpg)' }}
          data-gsap-hero-bg
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 min-h-[600px] flex flex-col justify-between" data-gsap="hero">
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" data-gsap-hero-item>
              THE MARKETING SELLERS EXPECT.
              <br />
              <span className="text-[#C9A06A]" data-gsap-bronze-text>THE PARTNER AGENTS TRUST.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl" data-gsap-hero-item>
              Tight timelines, high expectations, and zero room for mistakes—we get it. That&apos;s why our team treats every listing like it&apos;s their own.
            </p>
            <a
              href="/book-now"
              className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-6 py-3 font-semibold rounded-full hover:bg-[#8B6341] transition mt-8"
              data-gsap-hero-item
              data-gsap-button
            >
              <span className="h-2 w-2 bg-green-400 rounded-full" />
              ELEVATE YOUR LISTING
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="flex flex-wrap gap-8 lg:gap-10 text-white" data-gsap-hero-item>
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-light">50 States</p>
                <p className="text-white/80 text-sm mt-1 font-light">Nationwide Coverage</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-light">24-Hour</p>
                <p className="text-white/80 text-sm mt-1 font-light">Turnaround Time</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-light">1000</p>
                <p className="text-white/80 text-sm mt-1 font-light">Listings Captured Annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer / Services - Interactive Slider */}
      <section id="services" className="py-20 bg-white scroll-mt-24" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4" data-gsap-bronze>
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase">
              Professional Listing Media, Done Right
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Everything you need to market a listing confidently—captured by one trusted team that understands tight timelines and high expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{offerItems[activeOffer].title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{offerItems[activeOffer].description}</p>
            </div>

            {/* Right Column - Stacked Cards Slider */}
            <div className="lg:col-span-7 relative">
              <div className="relative flex items-stretch" style={{ minHeight: '500px' }}>
                {/* Left Card - Previous or First */}
                {activeOffer > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveOffer(activeOffer - 1)}
                    onMouseEnter={() => setActiveOffer(activeOffer - 1)}
                    className="relative z-10 flex items-center group transition-all duration-500"
                    style={{ width: '80px' }}
                  >
                    <div className="relative w-full h-full bg-white/90 shadow-lg flex flex-col items-center justify-center px-2 transition-all duration-500 group-hover:bg-white"
                      style={{
                        borderRadius: '12px 0 0 12px',
                        height: '500px',
                      }}
                    >
                      {/* Arrow */}
                      <div className="absolute top-4">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      
                      {/* Large Number */}
                      <div className="mt-8 mb-2">
                        <span className="text-gray-300 text-6xl font-light leading-none">{String(activeOffer).padStart(2, '0')}</span>
                      </div>
                      
                      {/* Vertical Text */}
                      <div className="flex-1 flex items-center">
                        <span
                          className="text-gray-400 text-xs font-medium uppercase"
                          style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            transform: 'rotate(180deg)',
                            lineHeight: '1.4',
                          }}
                        >
                          {offerItems[activeOffer - 1].title.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </button>
                )}

                {/* Center Active Card */}
                <div className="flex-1 relative z-20 mx-2 transition-all duration-500" style={{ height: '500px' }}>
                  <div
                    className="relative w-full h-full overflow-hidden bg-white shadow-2xl"
                    style={{
                      borderRadius: '20px 80px 20px 20px',
                    }}
                  >
                    <img
                      src="/images/home/house-backdrop.png"
                      alt={offerItems[activeOffer].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Active Label - Bottom Right */}
                    <div className="absolute bottom-4 right-4 flex flex-col items-end">
                      <span className="text-gray-300 text-5xl font-light leading-none">{String(activeOffer + 1).padStart(2, '0')}</span>
                      <span className="text-gray-900 font-semibold text-sm uppercase tracking-wide mt-1">{offerItems[activeOffer].title}</span>
                    </div>
                  </div>
                </div>

                {/* Right Card - Next or Last */}
                {activeOffer < offerItems.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveOffer(activeOffer + 1)}
                    onMouseEnter={() => setActiveOffer(activeOffer + 1)}
                    className="relative z-10 flex items-center group transition-all duration-500"
                    style={{ width: '80px' }}
                  >
                    <div className="relative w-full h-full bg-white/90 shadow-lg flex flex-col items-center justify-center px-2 transition-all duration-500 group-hover:bg-white"
                      style={{
                        borderRadius: '0 12px 12px 0',
                        height: '500px',
                      }}
                    >
                      {/* Arrow */}
                      <div className="absolute top-4">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                      
                      {/* Large Number */}
                      <div className="mt-8 mb-2">
                        <span className="text-gray-300 text-6xl font-light leading-none">{String(activeOffer + 2).padStart(2, '0')}</span>
                      </div>
                      
                      {/* Vertical Text */}
                      <div className="flex-1 flex items-center">
                        <span
                          className="text-gray-400 text-xs font-medium uppercase"
                          style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            lineHeight: '1.4',
                          }}
                        >
                          {offerItems[activeOffer + 1].title.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards grid - 6 cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-gsap="stagger">
            {[
              {
                title: '3D Virtual Tours',
                description:
                  'Immersive Zillow and Matterport tours that let buyers explore the home anytime—helping sellers feel confident their listing is being shown at its best.',
                image: '/0003.jpg',
              },
              {
                title: 'Floor Plans',
                description:
                  'Clean, easy-to-read floor plans that give buyers instant clarity on layout and flow—reducing confusion and setting better expectations before showings.',
                image: '/0003.jpg',
              },
              {
                title: 'Virtual Staging',
                description:
                  'Professionally staged visuals that help buyers imagine the potential of a space—without the cost or logistics of physical staging.',
                image: '/0003.jpg',
              },
              {
                title: 'Twilight Edits',
                description:
                  'Twilight-style exterior edits that add warmth, depth, and curb appeal—creating a striking first impression without the need for a separate twilight shoot.',
                image: '/0003.jpg',
              },
              {
                title: 'Image Enhancements',
                description:
                  'Subtle, realistic edits—like green grass enhancement—that elevate your photos while keeping the home authentic.',
                image: '/0003.jpg',
              },
              {
                title: 'Subdivision & Amenities',
                description:
                  'Ground and aerial photos and video showcasing nearby community amenities—clubhouses, pools, parks, and more—to help sell the lifestyle, not just the home.',
                image: '/0003.jpg',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <div className="aspect-[4/3] bg-gray-100">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - grey bg, 6 cards */}
      <section className="py-20 bg-gray-100" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4" data-gsap-bronze>
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            How Canopy Stone Solves Agent Problems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-gsap="stagger">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are / About */}
      <section id="about" className="py-20 bg-white scroll-mt-24" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4" data-gsap-bronze>
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Experienced. Reliable. Human.
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-4">
                For over 20 years, Canopy Stone has partnered with real estate agents to deliver professional listing media at scale—without losing the personal touch.
              </p>
              <p className="text-gray-600 mb-8">
                Our team understands tight timelines, high expectations, and the responsibility that comes with representing you in front of your sellers. That&apos;s why we approach every listing with care, consistency, and accountability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  ['20+', 'Years In Business'],
                  ['14,000+', 'Listings Captured Annually'],
                  ['$5.6B+', 'Listing Value Marketed Annually'],
                  ['2,500', 'Agents & Teams Served Annually'],
                ].map(([num, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-gray-900">{num}</p>
                    <p className="text-gray-500 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/home/house-backdrop.png"
                alt="Canopy Stone team"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[280px] mb-6"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">
                    To be the most trusted media partner for real estate agents—known for consistency, professionalism, and showing up the right way on every listing.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">
                    To help agents succeed by delivering high-quality listing media through a dependable team, clear communication, and a commitment to representing their brand with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Agents Are Saying */}
      <section className="py-20 bg-white" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div>
              <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4" data-gsap-bronze>
                What Agents Are Saying
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase leading-tight">
                What It&apos;s Like to Work
                <br />
                with Canopy Stone
              </h2>
              <p className="text-gray-600 max-w-xl">
                Agents don&apos;t just hire us for photos and video—they trust us to show up on their behalf. Here&apos;s what they say about working with our team.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold text-gray-900">5.0</p>
                <p className="text-gray-900 font-medium">Google Reviews</p>
              </div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-1">(83)</p>
              <a
                href="#"
                className="mt-4 bg-[#A67C52] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#8B6341] transition text-sm"
                data-gsap-button
              >
                Review us on Google
              </a>
            </div>
          </div>
          <div className="flex gap-6 mt-12 overflow-x-auto pb-4" data-gsap="stagger">
            {[
              { name: 'Blake B.', quote: 'A must have for REP\'s.', initials: 'BB', verified: true },
              { name: 'Kent H.', quote: 'I would give six stars if I was able. I own a property management company and their pictures and Video Tours has helped me out...', initials: 'KH', verified: true, long: true },
              { name: 'Kelli S.', quote: 'This company was recommended to me by another agent when I had a photographer not show up. I scheduled and they were out...', initials: 'KS', verified: true, long: true },
            ].map((t) => (
              <div
                key={t.name}
                className="min-w-[320px] max-w-[380px] bg-gray-50 rounded-xl p-6 border border-gray-200 flex-shrink-0 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#A67C52]/20 text-[#8B6341] font-bold flex items-center justify-center text-sm">
                      {t.initials}
                    </div>
                    {/* Google G Icon */}
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-gray-200">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      {t.verified && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-900 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                {t.long && (
                  <button type="button" className="text-gray-500 font-medium text-sm mt-2 hover:text-gray-900 transition">
                    Read more
                  </button>
                )}
              </div>
            ))}
            <div className="min-w-[48px] flex items-center justify-center flex-shrink-0">
              <button type="button" className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition" aria-label="More reviews">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Help Center / FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-gray-100 scroll-mt-24" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4" data-gsap-bronze>
                Help Center
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase leading-tight">
                Frequently
                <br />
                Asked Questions
              </h2>
            </div>
            <div className="space-y-0">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="border-b border-gray-200 py-5 first:pt-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex items-center justify-between w-full cursor-pointer list-none font-semibold text-gray-900 text-left"
                      data-gsap-button
                    >
                      <span>{item.q}</span>
                      <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 transition ${isOpen ? 'rotate-45' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-3 pl-0">
                        <p className="text-gray-600">{item.a}</p>
                        {item.q === 'How do I prepare for my appointment?' && (
                          <a
                            href="/getting-ready-checklist.pdf"
                            download
                            className="inline-flex items-center gap-2 text-[#A67C52] hover:text-[#8B6341] font-medium mt-3 transition"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Getting Ready Checklist
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch / Contact */}
      <section id="contact" className="bg-black py-20 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <a
              href="#contact-form"
              className="inline-block bg-[#A67C52] text-white text-sm font-bold uppercase tracking-wide px-6 py-2.5 rounded-full mb-6 hover:bg-[#8B6341] transition"
              data-gsap-button
            >
              Get in Touch
            </a>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">
              Let&apos;s Make Your Next Listing Easy
            </h2>
            <p className="text-white/80 mb-10 text-lg max-w-3xl mx-auto">
              Have a question, need a quote, or ready to book media? Our team is here to help—real people who understand tight timelines and high expectations. Tell us what you need, and we&apos;ll take it from there.
            </p>
          </div>
          
          {/* 50/50 Split: Contact Form and Areas We Serve */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Left Side */}
            <div>
              <form id="contact-form" className="bg-white rounded-2xl p-8 md:p-10 text-left shadow-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#A67C52] focus:outline-none" placeholder="First Name" />
                  </div>
                  <div>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#A67C52] focus:outline-none" placeholder="Last Name" />
                  </div>
                  <div>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#A67C52] focus:outline-none" placeholder="Email" />
                  </div>
                  <div>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#A67C52] focus:outline-none" placeholder="Phone" />
                  </div>
                </div>
                <div className="mt-6">
                  <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#A67C52] focus:outline-none min-h-[120px] resize-none" placeholder="What Can We Help You?" />
                </div>
                <button type="submit" className="w-full mt-8 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition" data-gsap-button>
                  Send Message
                </button>
              </form>
            </div>

            {/* Areas We Serve - Right Side */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                We Don&apos;t Just Serve Nationwide—We Fly Nationwide
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Licensed pilots delivering real estate media anywhere in the U.S. Fast turnaround, professional results, zero geography limits.
              </p>
              <div className="flex justify-center">
                <img src="/images/home/service-area-map.png" alt="Service area" className="max-h-72 w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - WVT style: logo + contact left, social + copyright right */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            <div className="flex flex-col gap-4">
              <a href="/" className="inline-block">
                <img src="/images/logo-transparent.png" alt="Canopy Stone" className="h-16 w-auto" />
              </a>
              <div className="text-sm text-white/90 space-y-1">
                <p>(937) 505-0444</p>
                <p>support@canopystone.com</p>
                <p>13727 SW 152 Street 1027, Miami, FL 33177</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-4 md:self-start md:pt-20">
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white hover:bg-[#8B6341] transition" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white hover:bg-[#8B6341] transition" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white hover:bg-[#8B6341] transition" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white hover:bg-[#8B6341] transition" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#A67C52] flex items-center justify-center text-white hover:bg-[#8B6341] transition" aria-label="TikTok">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                </a>
              </div>
              <p className="text-white/70 text-sm md:text-right">
                © Copyright {new Date().getFullYear()}. All Rights Reserved by Canopy Stone
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
