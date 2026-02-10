'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function PortalHome() {
  const { user } = useAuth();

  const links = [
    { href: '/portal/order-now', label: 'Order Now', description: 'Place a new order or manage your cart', icon: 'cart' },
    { href: '/portal?referral=1', label: 'Referral Program', description: 'Share your code and earn', icon: 'link' },
    { href: '/portal/listings', label: 'Listings', description: 'View and manage your listings', icon: 'house' },
    { href: '/portal/invoices/pending', label: 'Invoices', description: 'Pending and paid invoices', icon: 'doc' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Welcome back{user?.name ? `, ${user.name.split('@')[0]}` : ''}
        </h1>
        <p className="text-gray-600 mt-1">
          {user?.email}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-6 rounded-xl border border-gray-200 bg-white hover:border-[#A67C52]/50 hover:shadow-md transition text-left"
          >
            <span className="inline-flex w-10 h-10 rounded-lg bg-[#A67C52]/10 text-[#8B6341] mb-3">
              {item.icon === 'cart' && <CartIcon />}
              {item.icon === 'link' && <LinkIcon />}
              {item.icon === 'house' && <HouseIcon />}
              {item.icon === 'doc' && <DocIcon />}
            </span>
            <h2 className="text-lg font-bold text-gray-900">{item.label}</h2>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CartIcon() {
  return (
    <svg className="w-5 h-5 m-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  );
}
function LinkIcon() {
  return (
    <svg className="w-5 h-5 m-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
  );
}
function HouseIcon() {
  return (
    <svg className="w-5 h-5 m-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  );
}
function DocIcon() {
  return (
    <svg className="w-5 h-5 m-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  );
}
