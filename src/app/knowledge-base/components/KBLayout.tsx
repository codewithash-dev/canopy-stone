'use client';

import SupportHeader from '../../components/SupportHeader';
import Link from 'next/link';

type KBLayoutProps = {
  children: React.ReactNode;
  breadcrumbItems: { label: string; href?: string }[];
  /** WVT-style: large centered search bar below header */
  showSearchBar?: boolean;
};

export default function KBLayout({ children, breadcrumbItems, showSearchBar = true }: KBLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <SupportHeader activeTab="knowledge-base" showSearch={false} />

      {/* WVT-style: large Search articles bar + breadcrumbs */}
      <div className="bg-[#f5f7fb] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {showSearchBar && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search articles"
                className="w-full max-w-2xl mx-auto block rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-[#A67C52] focus:border-[#A67C52]"
              />
            </div>
          )}
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            {breadcrumbItems.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#A67C52]">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {children}
    </div>
  );
}
