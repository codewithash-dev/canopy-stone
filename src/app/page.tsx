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
    a: 'Click Place Order / Sign-In and enter your phone number if you are a returning client, or click Create Account if you are a new client. Choose your preferred package and available add-ons, enter the listing information, enter your information, choose your desired date and time, and submit your order.',
  },
  {
    q: 'How soon can I get scheduled?',
    a: 'While we typically strive to have availability for most appointments within 1–3 days, choosing certain services (e.g. Matterport), inclement weather, or increased volume during peak season may impact our availability.',
  },
  {
    q: 'How do I prepare for my appointment?',
    a: "Great media requires teamwork and cooperation. Let us make it count and provide stunning visuals for prospective buyers by ensuring your home is ready. Download our 'Getting Ready' checklist for tips to help prepare for your appointment!",
  },
];

const testimonials = [
  { name: 'Blake B.', quote: 'Fast scheduling and incredible results. Canopy Stone made my listing stand out.', initials: 'BB' },
  { name: 'Kent H.', quote: 'Professional team and consistent quality. I recommend them to every agent.', initials: 'KH' },
  { name: 'Kelli S.', quote: 'My listings look premium and sell faster. Worth every penny.', initials: 'KS' },
];

export default function Home() {
  const [activeOffer, setActiveOffer] = useState(0);
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
            <img src="/images/logo.png" alt="Canopy Stone" className="h-11 w-auto" />
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
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#A67C52] text-white px-6 py-2.5 rounded-lg hover:bg-[#8B6341] transition font-semibold text-sm tracking-wide"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full flex-shrink-0" />
            BOOK NOW
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </nav>

      {/* Hero - card layout like WVT */}
      <section id="home" className="relative pt-24 pb-16 bg-[#f4f5f8] scroll-mt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-black" data-gsap-hero-card>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/0003.jpg)' }}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 px-8 sm:px-12 lg:px-16 pt-16 pb-14 flex flex-col justify-between min-h-[420px]" data-gsap="hero">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-gsap-hero-item>
                  THE MARKETING SELLERS EXPECT.
                  <br />
                  <span className="text-[#C9A06A]">THE PARTNER AGENTS TRUST.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl" data-gsap-hero-item>
                  Tight timelines, high expectations, and zero room for mistakes—we get it. That&apos;s why our team treats every listing like it&apos;s their own.
                </p>
            <a
              href="/book-now"
              className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-6 py-3 font-semibold rounded-full hover:bg-[#8B6341] transition mt-8"
              data-gsap-hero-item
            >
                  <span className="h-2 w-2 bg-green-400 rounded-full" />
                  BOOK NOW
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-10 text-white" data-gsap-hero-item>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">20+</p>
                  <p className="text-white/80 text-sm mt-1">Years In Business</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">14,000+</p>
                  <p className="text-white/80 text-sm mt-1">Listings Captured Annually</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">$5.6B+</p>
                  <p className="text-white/80 text-sm mt-1">Listing Value Marketed Annually</p>
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 bottom-10" data-gsap-hero-item>
                <div className="bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">80+ Agent Reviews</p>
                    <p className="text-amber-500 text-sm">★★★★★ 5/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer / Services */}
      <section id="services" className="py-20 bg-white scroll-mt-24" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Listing Media, Done Right
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            Everything you need to market a listing confidently—captured by one trusted team that understands tight timelines and high expectations.
          </p>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{offerItems[activeOffer].title}</h3>
              <p className="text-gray-600">{offerItems[activeOffer].description}</p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/home/house-backdrop.png"
                alt="Listing media"
                className="w-full rounded-2xl shadow-lg object-cover max-h-[360px]"
              />
            </div>
            <div className="lg:col-span-3 border-l border-gray-200 pl-6 space-y-4">
              {offerItems.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveOffer(idx)}
                  className={`block text-left w-full py-2 ${activeOffer === idx ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}
                >
                  <span className="text-2xl text-gray-300 font-light">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="ml-2 align-middle">{item.title}</span>
                </button>
              ))}
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
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
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
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
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

      {/* Areas We Serve */}
      <section id="areas-serve" className="bg-black py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-gsap="slide-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Areas We Serve</h2>
              <p className="text-white/80 mb-6">
                Licensed in NC, SC, GA, VA, TN, FL, WV, OK, MO, LA with travel available by private pilot for select projects.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {['NC', 'SC', 'GA', 'VA', 'TN', 'FL', 'WV', 'OK', 'MO', 'LA'].map((state) => (
                  <div key={state} className="border border-white/20 rounded-lg py-2 text-center">{state}</div>
                ))}
              </div>
            </div>
            <div className="flex justify-center" data-gsap="slide-right">
              <img src="/images/home/service-area-map.png" alt="Service area" className="max-h-72 w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* What Agents Are Saying */}
      <section className="py-20 bg-white" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div>
              <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
                What Agents Are Saying
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What It&apos;s Like to Work with Canopy Stone
              </h2>
              <p className="text-gray-600 max-w-xl">
                Agents don&apos;t just hire us for photos and video—they trust us to show up on their behalf. Here&apos;s what they say about working with our team.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-4xl font-bold text-gray-900">5.0</p>
              <p className="text-gray-600">Google Reviews</p>
              <p className="text-amber-500 text-sm mt-1">★★★★★</p>
              <p className="text-gray-400 text-sm mt-1">(83)</p>
              <a
                href="#"
                className="mt-4 bg-[#A67C52] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#8B6341] transition text-sm"
              >
                Review us on Google
              </a>
            </div>
          </div>
          <div className="flex gap-6 mt-12 overflow-x-auto pb-4" data-gsap="stagger">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[280px] max-w-[320px] bg-gray-50 rounded-xl p-6 border border-gray-100 flex-shrink-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#A67C52]/20 text-[#8B6341] font-bold flex items-center justify-center text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-amber-500 text-xs">★★★★★</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <button type="button" className="text-[#A67C52] font-semibold text-sm mt-2 hover:underline">
                  Read more
                </button>
              </div>
            ))}
            <div className="min-w-[48px] flex items-center justify-center flex-shrink-0">
              <button type="button" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#A67C52] hover:text-[#A67C52] transition" aria-label="More reviews">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-16 bg-gray-50 scroll-mt-24" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
            Knowledge Base
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources &amp; Guides</h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Get the most out of your appointment with our guides, portfolio, and answers to common questions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-gsap="stagger">
            <a href="/getting-ready" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#A67C52]/30 transition">
              <h3 className="font-bold text-gray-900 mb-2">Getting Ready</h3>
              <p className="text-gray-600 text-sm">Checklist and tips to prepare your listing for the shoot.</p>
            </a>
            <a href="/portfolio" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#A67C52]/30 transition">
              <h3 className="font-bold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600 text-sm">See our work: photography, video, aerial, and more.</p>
            </a>
            <a href="/gift-shop" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#A67C52]/30 transition">
              <h3 className="font-bold text-gray-900 mb-2">Gift Shop</h3>
              <p className="text-gray-600 text-sm">Gift cards and packages for clients and colleagues.</p>
            </a>
            <a href="/#faq" className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#A67C52]/30 transition">
              <h3 className="font-bold text-gray-900 mb-2">FAQs</h3>
              <p className="text-gray-600 text-sm">Scheduling, preparation, and common questions.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Help Center / FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-gray-100 scroll-mt-24" data-gsap="reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
                Help Center
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-0">
              {faqItems.map((item, idx) => (
                <details
                  key={item.q}
                  className="group border-b border-gray-200 py-5 first:pt-0"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-gray-900">
                    <span>{item.q}</span>
                    <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-open:rotate-45 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 pl-0">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch / Contact */}
      <section id="contact" className="bg-black py-20 text-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Make Your Next Listing Easy
          </h2>
          <p className="text-white/80 mb-10">
            Have a question, need a quote, or ready to book media? Our team is here to help—real people who understand tight timelines and high expectations. Tell us what you need, and we&apos;ll take it from there.
          </p>
          <form className="bg-white rounded-2xl p-8 text-left shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 text-gray-900 focus:border-[#A67C52] focus:outline-none" placeholder="First Name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 text-gray-900 focus:border-[#A67C52] focus:outline-none" placeholder="Last Name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 text-gray-900 focus:border-[#A67C52] focus:outline-none" placeholder="Email" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 text-gray-900 focus:border-[#A67C52] focus:outline-none" placeholder="Phone" />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">What Can We Help You?</label>
              <textarea className="w-full border-b border-gray-300 py-2 text-gray-900 focus:border-[#A67C52] focus:outline-none min-h-[100px]" placeholder="Your message..." />
            </div>
            <button type="submit" className="w-full mt-8 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer - WVT style: logo + contact left, social + copyright right */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="flex flex-col gap-4">
              <a href="/" className="inline-block">
                <img src="/images/logo-transparent.png" alt="Canopy Stone" className="h-10 w-auto" />
              </a>
              <div className="text-sm text-white/90 space-y-1">
                <p>(937) 505-0444</p>
                <p>support@canopystone.com</p>
                <p>13727 SW 152 Street 1027, Miami, FL 33177</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-6">
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#A67C52] transition" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#A67C52] transition" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#A67C52] transition" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="mailto:support@canopystone.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#A67C52] transition" aria-label="Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
              </div>
              <p className="text-white/70 text-sm text-right">
                © Copyright {new Date().getFullYear()}. All Rights Reserved by Canopy Stone
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
