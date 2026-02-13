'use client';

import KBLayout from '../components/KBLayout';
import Link from 'next/link';
import { getArticlesForSection } from '../articles-data';
import { IconManagingMedia } from '../components/CategoryIcons';

const mediaArticles = getArticlesForSection('managing-media');

const popularSlugs = [
  'how-to-access-your-media-library',
  'download-photos',
  'how-to-view-download-media',
  'steps-to-share-an-image-and-article-on-facebook-from-branded-website',
  'download',
] as const;

export default function MediaHowToAccessPage() {
  const popularArticles = popularSlugs
    .map((slug) => mediaArticles.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <KBLayout
      breadcrumbItems={[
        { label: 'Knowledge Base', href: '/knowledge-base' },
        { label: 'Managing Your Media' },
      ]}
    >
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left – Article list (WVT primary) */}
          <div className="lg:flex-1 lg:min-w-0">
            <ul className="space-y-0 divide-y divide-gray-200 bg-white border border-gray-200 rounded-lg overflow-hidden">
              {mediaArticles.map((article) => (
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

          {/* Right – Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <IconManagingMedia />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Managing Your Media</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Access, view, download, and share your property media
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
                <p className="text-sm text-gray-700">– Managing Your Media</p>
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
                          <span className="text-gray-400 shrink-0">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                          </span>
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

        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
          <div className="prose prose-sm max-w-none text-gray-700">
            <p>
              Your Canopy Stone media library contains all delivered video tours, photos, and marketing assets. From this section you can access your files, download them for listings and social media, and learn how to share content from your branded property websites.
            </p>
            <p>Click any article in the list above to view detailed instructions.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400 mt-12 bg-white">
        <p>Powered by Canopy Stone Support</p>
      </footer>
    </KBLayout>
  );
}
