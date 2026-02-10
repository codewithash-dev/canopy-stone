'use client';

import { useState, useEffect } from 'react';

type User = { email: string; name?: string } | null;

export default function ReferralModal({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState<'code' | 'link' | null>(null);
  const [origin, setOrigin] = useState('');
  const referralCode = `ref_${(user?.email || 'user').replace(/[^a-z0-9]/gi, '').slice(0, 8)}x2`;
  useEffect(() => {
    setOrigin(typeof window !== 'undefined' ? window.location.origin : '');
  }, []);
  const referralLink = origin ? `${origin}/book-now?referral=${referralCode}` : '';

  const copy = (text: string, which: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopied(which);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 bg-white rounded-xl border border-gray-200 shadow-xl z-50 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="referral-modal-title"
      >
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <h2 id="referral-modal-title" className="text-xl font-bold text-gray-900">
            Referral Program
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your referral code</label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={referralCode}
                className="flex-1 rounded-lg border border-dashed border-gray-400 px-4 py-3 text-gray-900 bg-gray-50 font-mono text-sm"
              />
              <button
                type="button"
                onClick={() => copy(referralCode, 'code')}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                {copied === 'code' ? (
                  'Copied'
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Referral link</label>
            <p className="text-sm text-gray-600 mb-2 break-all">{referralLink || '…'}</p>
            <button
              type="button"
              onClick={() => referralLink && copy(referralLink, 'link')}
              disabled={!referralLink}
              className="text-sm text-[#A67C52] font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {copied === 'link' ? 'Copied!' : '(Click to copy link)'}
            </button>
          </div>
          <div className="flex gap-3">
            <button type="button" className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-sm hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Text Message
            </button>
            <button type="button" className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-sm hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              Share Options
            </button>
          </div>
          <div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
            <p>Recipient must be a new agent to redeem this offer. They will get a discount of $50.00. You will earn $50.00 every time your referral code is used.</p>
          </div>
        </div>
      </div>
    </>
  );
}
