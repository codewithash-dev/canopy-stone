'use client';

import SupportHeader from '../components/SupportHeader';
import { CategoryIcon, type CategoryIconKey } from './components/CategoryIcons';

const categories: Array<{ title: string; description: string; articles: string; iconKey: CategoryIconKey; href: string }> = [
  { title: 'Getting Started – Basic intro to using your Portal', description: 'How to access and use your Canopy Stone Portal.', articles: '14 Articles', iconKey: 'getting-started', href: '/knowledge-base/using-your-portal' },
  { title: 'Managing Your Media', description: 'Access, view, download, and share your property media.', articles: '5 Articles', iconKey: 'managing-media', href: '/knowledge-base/media-how-to-access' },
  { title: 'Customizing Your Single Property Website', description: 'Walkthroughs, tips, and tricks on how to get the most out of your single property website.', articles: '4 Articles', iconKey: 'single-property', href: '/knowledge-base/customizing-single-property-website' },
  { title: 'Managing Your Info', description: 'Updating your phone, email, website, team, company, etc.', articles: '2 Articles', iconKey: 'managing-info', href: '/knowledge-base/managing-your-info' },
  { title: 'Marketing Your Listings', description: 'View our guides, tips and tricks, and best practices for marketing your listings.', articles: '2 Articles', iconKey: 'marketing', href: '/knowledge-base/marketing-your-listings' },
  { title: 'Orders & Billing', description: 'Placing orders, how invoicing works, and viewing past payments.', articles: '3 Articles', iconKey: 'orders-billing', href: '/knowledge-base/orders-billing' },
  { title: 'Social Media', description: 'Guides and tips on how to utilize social media to market your brand and share your listings.', articles: '2 Articles', iconKey: 'social-media', href: '/knowledge-base/social-media' },
];

export default function KnowledgeBaseHome() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <SupportHeader activeTab="home" showSearch={true} />

      {/* Hero with welcome + search (blurred bg) */}
      <section className="relative bg-gray-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'url(/0003.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Canopy Stone Support</h1>
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search articles"
              className="w-full rounded-lg border-0 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-[#A67C52] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Categories on white */}
      <main className="max-w-6xl mx-auto px-6 py-10 bg-white">
        <div className="flex items-center justify-between mb-6">
          <a
            href="/knowledge-base/browse"
            className="inline-flex items-center rounded-full bg-[#A67C52] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#8B6341] transition"
          >
            Knowledge Base
          </a>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <button type="button" className="w-8 h-8 flex items-center justify-center rounded border-2 border-[#A67C52] text-[#A67C52]" aria-label="Grid view">▦</button>
            <button type="button" className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500" aria-label="List view">☰</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href || '/knowledge-base/browse'}
              className="block rounded-xl bg-gray-50 border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#A67C52]/60 transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <CategoryIcon name={cat.iconKey} />
                <h2 className="text-sm font-semibold text-gray-900 leading-snug">{cat.title}</h2>
              </div>
              <p className="text-xs text-gray-600 mb-3">{cat.description}</p>
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{cat.articles}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400 bg-white">
        <p>Powered by Canopy Stone Support</p>
      </footer>
    </div>
  );
}
