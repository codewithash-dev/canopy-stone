'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SupportHeader from '../components/SupportHeader';
import { useAuth } from '../context/AuthContext';

function SignInForm() {
  const [email, setEmail] = useState('');
  const { setUser } = useAuth();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/portal';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setUser({ email: trimmed, name: trimmed });
    // Full navigation so portal layout reads auth from localStorage
    window.location.href = redirect;
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <SupportHeader activeTab="signin" showSearch={true} />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left: Sign In */}
            <div className="p-8 md:p-10">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Already a member?</h2>
              <p className="text-gray-500 text-sm mb-2">Sign in with your email. No account yet? Just enter your email—no sign-up required.</p>
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email or Phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/20 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#A67C52] text-white py-3 rounded-lg font-semibold hover:bg-[#8B6341] transition"
                >
                  Next
                </button>
              </form>
            </div>

            {/* Right: Forgot Password + Agent Login */}
            <div className="p-8 md:p-10 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Forgot Password? Reset</h3>
                  <p className="text-gray-600 text-sm">We will send a password reset link to your email address.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Are you an Agent? Login here</h3>
                  <p className="text-gray-600 text-sm">You will be taken to the Agent Interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400 mt-12">
        <p>Powered by Canopy Stone Support</p>
      </footer>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>}>
      <SignInForm />
    </Suspense>
  );
}
