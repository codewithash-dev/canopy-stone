'use client';

import KBLayout from '../components/KBLayout';
import Link from 'next/link';
import { getArticlesForSection } from '../articles-data';

const sidebarArticles = getArticlesForSection('getting-started');

const popularSlugs = [
  'canopy-stone-referral-program',
  'how-to-sign-into-your-canopy-stone-portal',
  'navigating-listings-in-the-portal-a-quick-reference',
  'client-portal-basics',
  'how-to-check-the-status-of-an-order',
] as const;

const popularArticles = popularSlugs
  .map((slug) => sidebarArticles.find((a) => a.slug === slug))
  .filter(Boolean);

export default function UsingYourPortalPage() {
  return (
    <KBLayout
      breadcrumbItems={[
        { label: 'Knowledge Base', href: '/knowledge-base' },
        { label: 'Getting Started – Basic intro to using your Portal' },
      ]}
    >
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* WVT layout: Left = article list (primary), Right = sidebar (contextual) */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left – Article list (WVT primary display area, plain list) */}
          <div className="lg:flex-1 lg:min-w-0">
            <ul className="space-y-0 divide-y divide-gray-200 bg-white border border-gray-200 rounded-lg overflow-hidden">
{sidebarArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                    href={`/knowledge-base/articles/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-4 text-gray-900 hover:bg-gray-50 hover:text-[#A67C52] transition"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – Sidebar (WVT contextual panel) */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl" aria-hidden>🏠</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Getting Started – Basic intro to using your Portal
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    How to access and use your Canopy Stone Portal
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Follow
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Subscribe to receive notifications from this section.
              </p>

              <hr className="my-6 border-gray-200" />

              <section className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">KB Sections</h3>
                <p className="text-sm text-gray-700">– Getting Started – Basic intro to using your Portal</p>
              </section>

              <section>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Popular Articles</h3>
                <ul className="space-y-2">
                  {popularArticles.map((article) =>
                    article ? (
                      <li key={article.slug}>
                        <Link
                          href={`/knowledge-base/articles/${article.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#A67C52] hover:underline flex items-start gap-2"
                        >
                          <span className="text-gray-400">📄</span>
                          {article.title}
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
              </section>
            </div>
          </aside>
        </div>

        {/* Intro content below the two-column layout */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
          <div className="prose prose-sm max-w-none text-gray-700">
            <p>
              Welcome to the Canopy Stone Portal. This guide will help you get started with accessing and using your portal to manage your listings, media, and property marketing.
            </p>
            <p>
              From your portal, you can sign in to view and manage your account, place orders for video tours and photography, access your media library, and customize your single property websites.
            </p>
            <p>
              Click any article in the list above to view detailed instructions.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400 mt-12 bg-white">
        <p>Powered by Canopy Stone Support</p>
      </footer>
    </KBLayout>
  );
}
