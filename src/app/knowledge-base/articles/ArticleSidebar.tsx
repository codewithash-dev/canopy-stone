'use client';

import Link from 'next/link';
import { articles, getArticlesForSection, type ArticleSection } from '../articles-data';

const popularSlugsBySection: Record<ArticleSection, readonly string[]> = {
  'getting-started': [
    'how-to-access-your-media-library',
    'single-property-website-how-to-customize',
    'canopy-stone-referral-program',
    'how-to-sign-into-your-canopy-stone-portal',
    'navigating-listings-in-the-portal-a-quick-reference',
  ],
  'managing-media': [
    'how-to-access-your-media-library',
    'download-photos',
    'how-to-view-download-media',
    'steps-to-share-an-image-and-article-on-facebook-from-branded-website',
    'download',
  ],
  'customizing-website': [
    'single-property-website-how-to-customize',
    'single-property-websites-branded-and-unbranded',
    'display-page-how-to-customize',
    'display-page-overview',
  ],
  'managing-info': ['updating-contact-information', 'managing-team-and-company'],
  'marketing': ['marketing-toolkit-overview', 'marketing-best-practices'],
  'orders-billing': ['placing-orders-overview', 'how-to-place-an-order', 'invoicing-and-payments'],
  'social-media': ['sharing-to-social-media', 'social-media-tips'],
};

export default function ArticleSidebar({ currentSlug, section }: { currentSlug?: string; section: ArticleSection }) {
  const sectionArticles = getArticlesForSection(section);
  const popularSlugs = popularSlugsBySection[section] ?? [];
  const popularArticles = popularSlugs
    .map((slug) => sectionArticles.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <aside className="lg:flex-1 lg:min-w-0">
      <ul className="space-y-0 divide-y divide-gray-200 bg-white border border-gray-200 rounded-lg overflow-hidden">
        {sectionArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/knowledge-base/articles/${article.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block px-6 py-4 transition ${
                currentSlug === article.slug
                  ? 'text-[#A67C52] font-semibold bg-[#A67C52]/5'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-[#A67C52]'
              }`}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
