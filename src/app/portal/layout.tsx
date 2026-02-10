'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState, Suspense } from 'react';
import ReferralModal from '../components/ReferralModal';
import ReferralParamListener from './ReferralParamListener';

const navItems = [
  { href: '/portal/order-now', label: 'Order Now', icon: 'cart' },
  { referral: true, label: 'Referral Program', icon: 'link' },
  { href: '/portal/listings', label: 'Listings', icon: 'house' },
  { href: '/portal/invoices', label: 'Invoices', icon: 'doc' },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user, isReady, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [referralOpen, setReferralOpen] = useState(false);

  useEffect(() => {
    if (!isReady) return;
    if (!user) {
      router.replace('/signin?redirect=' + encodeURIComponent(pathname || '/portal'));
      return;
    }
  }, [isReady, user, router, pathname]);

  if (!isReady || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const initials = (user.name || user.email).slice(0, 2).toUpperCase();
  const displayName = user.name || user.email || 'Account';

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <ReferralParamListener onOpenReferral={() => setReferralOpen(true)} />
      </Suspense>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo.png" alt="Canopy Stone" className="h-9 w-auto" />
          </a>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              if ('referral' in item && item.referral) {
                const isActive = referralOpen;
                return (
                  <button
                    key="referral"
                    type="button"
                    onClick={() => setReferralOpen(true)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <LinkIcon />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                );
              }
              const href = (item as { href: string }).href;
              const isActive = pathname === href || pathname?.startsWith(href + '/');
              return (
                <a
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.icon === 'cart' && <CartIcon />}
                  {item.icon === 'house' && <HouseIcon />}
                  {item.icon === 'doc' && <DocIcon />}
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="relative flex-shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100"
            >
              <span className="w-9 h-9 rounded-full bg-[#A67C52]/20 text-[#8B6341] font-bold text-sm flex items-center justify-center">
                {initials}
              </span>
              <span className="max-w-[100px] truncate text-sm text-gray-700 hidden sm:inline">{displayName}</span>
              <svg className={`w-4 h-4 text-gray-500 transition ${menuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} aria-hidden="true" />
                <div className="absolute right-0 top-full mt-1 w-52 py-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <p className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100 truncate">{user.email}</p>
                  <a href="/portal/settings" className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                    <SettingsIcon />
                    Settings
                  </a>
                  <button type="button" onClick={() => { setReferralOpen(true); setMenuOpen(false); }} className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left">
                    <LinkIcon />
                    Referral Program
                  </button>
                  <button type="button" onClick={() => { signOut(); setMenuOpen(false); router.push('/signin'); }} className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left">
                    <LogoutIcon />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      <main>{children}</main>

      {referralOpen && user && (
        <ReferralModal user={user} onClose={() => setReferralOpen(false)} />
      )}
    </div>
  );
}

function CartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  );
}
function LinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
  );
}
function HouseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  );
}
function DocIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  );
}
function SettingsIcon() {
  return (
    <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  );
}
function LogoutIcon() {
  return (
    <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
  );
}
