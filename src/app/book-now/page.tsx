'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const testimonials = [
  {
    name: 'Gary Cook',
    time: '3 years ago',
    rating: 5,
    text: "We wouldn't use any other company for our pictures an...",
    avatar: 'GC',
  },
  {
    name: 'Beth',
    time: '3 years ago',
    rating: 5,
    text: '...beer Wow Video exclusively.',
    avatar: 'B',
  },
  {
    name: 'Janie S.',
    time: '3 years ago',
    rating: 5,
    text: 'A picture is worth a thousand words ad as REALTORS our jo...',
    avatar: 'JS',
  },
  {
    name: 'Team WOW',
    time: '3 years ago',
    rating: 5,
    text: '...team WOW.',
    avatar: 'TW',
  },
];

export default function BookNowPage() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    // Store user data and redirect
    localStorage.setItem('user', JSON.stringify({ email: emailOrPhone, name: emailOrPhone }));
    router.push('/portal/order-now');
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    // Store user data and redirect
    localStorage.setItem('user', JSON.stringify({ email, name: fullName }));
    router.push('/portal/order-now');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Section - Form */}
        <div className="w-full lg:w-[60%] bg-white flex flex-col">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 relative">
            {/* Back Button - Top Left (only on create account) */}
            {showCreateAccount && (
              <button
                onClick={() => setShowCreateAccount(false)}
                className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Go Back
              </button>
            )}
            
            {/* Logo - Top Right (WVT style) */}
            <div className={`flex ${showCreateAccount ? 'justify-end' : 'justify-center'} mb-8`}>
              <a href="/" className="inline-block">
                <img src="/images/logo.png" alt="Canopy Stone" className="h-12 w-auto" />
              </a>
            </div>

            {!showCreateAccount ? (
              <>
                {/* Sign In Form */}
                <div className="max-w-md mx-auto">
                  <p className="text-gray-600 text-center mb-8">
                    Welcome to Canopy Stone — everything you need to showcase your listing, all in one place!
                  </p>
                  
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">Sign In</h1>
                  
                  <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email or Phone Number
                      </label>
                      <input
                        type="text"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        placeholder="Email or Phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!emailOrPhone.trim()}
                      className={`w-full py-3 rounded-lg font-semibold transition ${
                        emailOrPhone.trim()
                          ? 'bg-[#A67C52] text-white hover:bg-[#8B6341]'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue
                    </button>
                  </form>

                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-sm text-gray-500">Or Login With OTP</span>
                    <div className="flex-1 h-px bg-gray-300" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <a
                      href="/book-now/login-sms"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Login via SMS
                    </a>
                    <a
                      href="/book-now/login-email"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-700 font-medium"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Login via Email
                    </a>
                  </div>

                  <p className="text-center text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <button
                      onClick={() => setShowCreateAccount(true)}
                      className="text-[#A67C52] font-semibold hover:underline"
                    >
                      Create Account
                    </button>
                  </p>

                  <p className="text-xs text-gray-500 text-center mt-8">
                    By signing up to create an account, I accept Company&apos;s{' '}
                    <a href="#" className="text-[#A67C52] hover:underline">Terms of use</a> &{' '}
                    <a href="#" className="text-[#A67C52] hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Create Account Form */}
                <div className="max-w-md mx-auto">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Create Account</h1>
                  <p className="text-gray-600 text-center mb-8">Please enter your details to get started</p>

                  <form onSubmit={handleCreateAccount} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="First and Last name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+61">🇦🇺 +61</option>
                        </select>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Phone"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition"
                    >
                      Sign Up
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-8">
                    By signing up to create an account, I accept Company&apos;s{' '}
                    <a href="#" className="text-[#A67C52] hover:underline">Terms of use</a> &{' '}
                    <a href="#" className="text-[#A67C52] hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Section - Marketing Visuals */}
        <div className="hidden lg:flex lg:w-[40%] bg-gray-100 relative overflow-hidden">
          {/* Property Image */}
          <div className="absolute inset-0">
            <img
              src="/images/home/house-backdrop.png"
              alt="Property listing"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Testimonials Carousel Overlay on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              {/* See Pricing Button - Just above reviews */}
              <div className="mb-4 flex justify-center z-30">
                <a
                  href="/pricing"
                  className="bg-[#A67C52] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#8B6341] transition shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  See Pricing
                </a>
              </div>
              <div className="relative">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:bg-white transition"
                  aria-label="Previous review"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-4 px-12 overflow-hidden">
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        idx === currentTestimonial ? 'w-full opacity-100' : 'w-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#A67C52]/20 text-[#8B6341] font-bold flex items-center justify-center text-sm flex-shrink-0">
                            {testimonial.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-semibold text-gray-900">{testimonial.name}</p>
                              <span className="text-xs text-gray-500">{testimonial.time}</span>
                            </div>
                            <div className="flex gap-0.5 mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>
                            <p className="text-sm text-gray-700">{testimonial.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:bg-white transition"
                  aria-label="Next review"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentTestimonial ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
