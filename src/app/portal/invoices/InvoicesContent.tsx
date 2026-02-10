'use client';

import Link from 'next/link';

export default function InvoicesContent({ tab }: { tab: 'pending' | 'paid' }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 border-b border-gray-200">
          <Link
            href="/portal/invoices/pending"
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition ${
              tab === 'pending' ? 'border-[#A67C52] text-[#8B6341]' : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Pending Invoices
          </Link>
          <Link
            href="/portal/invoices/paid"
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition ${
              tab === 'paid' ? 'border-[#A67C52] text-[#8B6341]' : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Paid Invoices
          </Link>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex gap-4 text-sm">
            <span className="text-gray-600">Balance Due: <strong className="text-gray-900">$0.00</strong></span>
            <span className="text-gray-600">Credits: <strong className="text-gray-900">-($0.00)</strong></span>
            <span className="text-gray-600">Total Balance Due: <strong className="text-gray-900">$0.00</strong></span>
          </div>
          <button type="button" disabled className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 text-sm font-medium cursor-not-allowed">
            Pay
          </button>
          <input
            type="search"
            placeholder="Search"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm w-40 focus:border-[#A67C52] focus:ring-1 focus:ring-[#A67C52] focus:outline-none"
          />
          <button type="button" className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636" /></svg>
        </div>
        <p className="text-gray-600 font-medium">There are no results available.</p>
      </div>
    </div>
  );
}
