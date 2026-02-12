'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginSMSPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    localStorage.setItem('user', JSON.stringify({ email: `${countryCode}${phoneNumber}`, name: phoneNumber }));
    router.push('/portal/order-now');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Section - Form */}
        <div className="w-full lg:w-[60%] bg-white flex flex-col">
          <div className="px-8 pt-8 pb-6">
            {/* Back Button */}
            <a
              href="/book-now"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </a>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <a href="/" className="inline-block">
                <img src="/images/logo.png" alt="Canopy Stone" className="h-12 w-auto" />
              </a>
            </div>

            {/* Login via SMS Form */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Login via SMS</h1>
              <p className="text-gray-500 text-center mb-8">OTP Sign In</p>

              <form onSubmit={handleSignIn} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A67C52] focus:border-transparent"
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

                <button
                  type="submit"
                  disabled={!phoneNumber.trim()}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    phoneNumber.trim()
                      ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Sign In
                </button>

                <button
                  type="button"
                  className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Update Phone Number
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-8">
                By signing up to create an account I accept Company&apos;s{' '}
                <a href="#" className="text-[#A67C52] hover:underline">Terms of Use</a> &{' '}
                <a href="#" className="text-[#A67C52] hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Marketing Visuals */}
        <div className="hidden lg:flex lg:w-[40%] bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/home/house-backdrop.png"
              alt="Property listing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Reviews Carousel */}
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
                <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:bg-white transition">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg mx-12">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#A67C52]/20 text-[#8B6341] font-bold flex items-center justify-center text-sm flex-shrink-0">
                      GC
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">Gary Cook</p>
                        <span className="text-xs text-gray-500">3 years ago</span>
                      </div>
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700">We wouldn&apos;t use any other company for our pictures an...</p>
                    </div>
                  </div>
                </div>

                <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:bg-white transition">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {[1, 2, 3, 4].map((dot, idx) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === 0 ? 'bg-white' : 'bg-white/50'
                    }`}
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
