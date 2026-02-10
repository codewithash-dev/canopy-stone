'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const SETTINGS_TABS = [
  { id: 'personal', label: 'My Profile' },
  { id: 'contacts', label: 'Account Managers & Contacts' },
  { id: 'order-pages', label: 'Order Pages' },
  { id: 'credit', label: 'Credit History' },
  { id: 'billing', label: 'Billing Details' },
  { id: 'payment', label: 'Payment Methods' },
];

export default function PortalSettings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [copied, setCopied] = useState<'code' | 'link' | null>(null);
  const [origin, setOrigin] = useState('');
  const [agentTitle, setAgentTitle] = useState('');
  const [smsPref, setSmsPref] = useState('never');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [url, setUrl] = useState('');
  const [imageType, setImageType] = useState('');

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

  const displayName = user?.name || user?.email || '';
  const nameParts = displayName.split('@')[0]?.split(/[._]/) || ['', ''];
  const firstName = nameParts[0] || '';
  const lastName = nameParts[1] || nameParts[0] || '';

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-8">
        {SETTINGS_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition ${
              activeTab === tab.id
                ? 'border-[#A67C52] text-[#8B6341]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'personal' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Your Profile */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Your Profile</h2>
            <p className="text-sm text-gray-600 mb-4">Please contact us if you need to update any of these details.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email Address *</label>
                <input type="email" readOnly value={user?.email || ''} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-600 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" placeholder="+1 (___) ___-____" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                <input type="text" value={firstName} readOnly className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-600 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
                <input type="text" value={lastName} readOnly className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-600 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input type="text" placeholder="Company (Unassigned)" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
            </div>
          </div>

          {/* Phone Number Management */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Phone Number Management</h2>
            <p className="text-sm text-gray-600 mb-4">Update your phone number by filling in the details below. We use your phone number to send you your verification PIN for logging in to the platform.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Phone Number *</label>
                <input type="tel" placeholder="+1" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Phone Number *</label>
                <input type="tel" placeholder="+1" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <button type="button" className="w-full py-2.5 rounded-lg bg-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-300 transition">
                Update Phone Number
              </button>
            </div>
          </div>

          {/* Profile Picture Management */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Profile Picture Management</h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#A67C52]/20 text-[#8B6341] font-bold text-2xl flex items-center justify-center mb-4">
                {(user?.name || user?.email || 'CS').slice(0, 2).toUpperCase()}
              </div>
              <button type="button" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50">
                Update Profile Picture
              </button>
            </div>
          </div>

          {/* Agent Title */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Agent Title</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your agent title *</label>
                <input type="text" value={agentTitle} onChange={(e) => setAgentTitle(e.target.value)} placeholder="e.g. Realtor, Broker" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <button type="button" className="w-full py-2.5 rounded-lg bg-[#A67C52] text-white font-medium text-sm hover:bg-[#8B6341] transition">
                Save
              </button>
            </div>
          </div>

          {/* Notification Preference */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Notification Preference</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SMS Delivery Notification Preference *</label>
                <select value={smsPref} onChange={(e) => setSmsPref(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm">
                  <option value="never">Never</option>
                  <option value="always">Always</option>
                  <option value="orders">Orders only</option>
                </select>
              </div>
              <button type="button" className="w-full py-2.5 rounded-lg bg-[#A67C52] text-white font-medium text-sm hover:bg-[#8B6341] transition">
                Save
              </button>
            </div>
          </div>

          {/* Referral Program */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Referral Program</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your referral code</label>
                <div className="flex gap-2">
                  <input type="text" readOnly value={referralCode} className="flex-1 rounded-lg border border-dashed border-gray-400 px-3 py-2 bg-gray-50 font-mono text-sm" />
                  <button type="button" onClick={() => copy(referralCode, 'code')} className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-50 flex items-center gap-1">
                    {copied === 'code' ? 'Copied' : '(copy)'}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-600 break-all mb-1">{referralLink || '…'}</p>
                <button type="button" onClick={() => referralLink && copy(referralLink, 'link')} disabled={!referralLink} className="text-sm text-[#A67C52] font-medium hover:underline disabled:opacity-50">
                  {copied === 'link' ? 'Copied!' : '(Click to copy link)'}
                </button>
              </div>
              <div className="flex gap-2">
                <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Text Message
                </button>
                <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                  Share Options
                </button>
              </div>
              <p className="text-sm text-gray-600 pt-2 border-t border-gray-100">
                Recipient must be a new agent to redeem this offer. They will get a discount of $50.00. You will earn $50.00 every time your referral code is used.
              </p>
            </div>
          </div>

          {/* Agent Info & Summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm md:col-span-2">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Agent Info & Summary</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <input type="checkbox" id="show-desc" checked={showDescription} onChange={(e) => setShowDescription(e.target.checked)} className="rounded border-gray-300 text-[#A67C52] focus:ring-[#A67C52]" />
                <label htmlFor="show-desc" className="text-sm text-gray-700">Show description</label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button text</label>
                <input type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Image type</label>
                <select value={imageType} onChange={(e) => setImageType(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm">
                  <option value="">Image Type Preference</option>
                  <option value="photo">Photo</option>
                  <option value="logo">Logo</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="py-2.5 px-4 rounded-lg bg-[#A67C52] text-white font-medium text-sm hover:bg-[#8B6341] transition">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Display Page Logo Management */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Display Page Logo Management</h2>
            <button type="button" className="w-full py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50">
              Update Display Page Logo
            </button>
          </div>

          {/* Analytics Providers */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Analytics Providers</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Google Analytics Code: Enter ID/Script</label>
                <textarea rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm font-mono" placeholder="G-XXXXXXXXXX or script" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Pixel Code: Enter ID/Script</label>
                <textarea rows={3} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 text-sm font-mono" placeholder="Enter ID or script" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="py-2.5 px-4 rounded-lg bg-[#A67C52] text-white font-medium text-sm hover:bg-[#8B6341] transition">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab !== 'personal' && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500">
          <p>{SETTINGS_TABS.find((t) => t.id === activeTab)?.label} section coming soon.</p>
        </div>
      )}
    </div>
  );
}
