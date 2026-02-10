'use client';

import SupportHeader from '../../components/SupportHeader';

const categories = [
  { title: 'Getting Started – Basic intro to using your Portal', description: 'How to access and use your Canopy Stone Portal.', articles: '14 Articles', icon: '🏁' },
  { title: 'Managing Your Media', description: 'Changing the look for the branded display page (each section of the page).', articles: '3 Articles', icon: '🖼️' },
  { title: 'Customizing Your Single Property Website', description: 'Walkthroughs, tips, and tricks on how to get the most out of your single property website.', articles: '4 Articles', icon: '💻' },
  { title: 'Managing Your Info', description: 'Updating your phone, email, website, team, company, etc.', articles: '2 Articles', icon: '👤' },
  { title: 'Marketing Your Listings', description: 'View our guides, tips and tricks, and best practices for marketing your listings.', articles: '5 Articles · 1 Section', icon: '📈' },
  { title: 'Orders & Billing', description: 'Placing orders, how invoicing works, and viewing past payments.', articles: '4 Articles', icon: '🧾' },
  { title: 'Social Media', description: 'Guides and tips on how to utilize social media to market your brand and share your listings.', articles: '9 Articles · 5 Sections', icon: '📱' },
];

export default function KnowledgeBaseBrowse() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <SupportHeader activeTab="knowledge-base" showSearch={true} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-gray-500 text-sm mb-6">Knowledge Base</p>
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center rounded-full bg-[#A67C52] px-4 py-1.5 text-xs font-semibold text-white">
            Knowledge Base
          </span>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <button type="button" className="w-8 h-8 flex items-center justify-center rounded border-2 border-[#A67C52] text-[#A67C52]" aria-label="Grid view">▦</button>
            <button type="button" className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500" aria-label="List view">☰</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#"
              className="block rounded-xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#A67C52]/60 transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">{cat.icon}</div>
                <h2 className="text-sm font-semibold text-gray-900 leading-snug">{cat.title}</h2>
              </div>
              <p className="text-xs text-gray-600 mb-3">{cat.description}</p>
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{cat.articles}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400 mt-12">
        <p>Powered by Canopy Stone Support</p>
      </footer>
    </div>
  );
}
