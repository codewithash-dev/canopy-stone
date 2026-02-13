export type ArticleSection = 'getting-started' | 'managing-media' | 'customizing-website' | 'managing-info' | 'marketing' | 'orders-billing' | 'social-media';

export const articles: Array<{
  slug: string;
  title: string;
  description: string;
  section: ArticleSection;
}> = [
  {
    slug: 'canopy-stone-referral-program',
    title: 'Canopy Stone Referral Program',
    description: 'Earn rewards by referring fellow real estate professionals to Canopy Stone. Learn how to get your referral link, track referrals, and receive credits or discounts.',
    section: 'getting-started',
  },
  {
    slug: 'how-to-sign-into-your-canopy-stone-portal',
    title: 'How to Sign into your Canopy Stone Portal',
    description: 'Step-by-step guide to accessing your Canopy Stone Portal account.',
    section: 'getting-started',
  },
  {
    slug: 'client-portal-basics',
    title: 'Client Portal Basics',
    description: 'An overview of the Canopy Stone client portal and its main features.',
    section: 'getting-started',
  },
  {
    slug: 'client-portal-settings',
    title: 'Client Portal Settings',
    description: 'How to configure and customize your portal settings.',
    section: 'getting-started',
  },
  {
    slug: 'adding-an-account-manager',
    title: 'Adding an Account Manager',
    description: 'Add an account manager to your Canopy Stone portal.',
    section: 'getting-started',
  },
  {
    slug: 'adding-an-additional-contact',
    title: 'Adding an Additional Contact',
    description: 'Add additional contacts to your portal account.',
    section: 'getting-started',
  },
  {
    slug: 'how-to-place-an-order',
    title: 'How to Place an Order',
    description: 'Place orders for video tours, photography, and other services.',
    section: 'orders-billing',
  },
  {
    slug: 'how-to-check-the-status-of-an-order',
    title: 'How to Check the Status of an Order',
    description: 'Track and monitor the status of your orders.',
    section: 'getting-started',
  },
  {
    slug: 'how-to-reschedule-cancel-an-appointment',
    title: 'How to Reschedule/Cancel an Appointment',
    description: 'Reschedule or cancel your scheduled shoot appointments.',
    section: 'getting-started',
  },
  {
    slug: 'navigating-listings-in-the-portal-a-quick-reference',
    title: 'Navigating Listings in the Portal – A Quick Reference',
    description: 'A quick guide to finding and managing your listings.',
    section: 'getting-started',
  },
  {
    slug: 'how-to-access-your-media-library',
    title: 'How to Access your Media Library',
    description: 'Access and browse your media library in the Canopy Stone Portal.',
    section: 'managing-media',
  },
  {
    slug: 'how-to-view-download-media',
    title: 'How to View & Download Media',
    description: 'View, download, and share your media files.',
    section: 'managing-media',
  },
  {
    slug: 'single-property-websites-branded-and-unbranded',
    title: 'Single Property Websites – Branded and Unbranded',
    description: 'Learn about branded vs. unbranded single property website options.',
    section: 'customizing-website',
  },
  {
    slug: 'single-property-website-how-to-customize',
    title: 'Single Property Website – How to Customize',
    description: 'Customize your single property website to match your brand.',
    section: 'customizing-website',
  },
  // Managing Your Media articles
  {
    slug: 'steps-to-share-an-image-and-article-on-facebook-from-branded-website',
    title: 'Steps to Share an Image and Article on Facebook from Branded Website',
    description: 'Share your branded property content to Facebook.',
    section: 'managing-media',
  },
  {
    slug: 'download-photos',
    title: 'Download Photos',
    description: 'Download your property photos from the Canopy Stone Portal.',
    section: 'managing-media',
  },
  {
    slug: 'download',
    title: 'Download',
    description: 'How to download videos, photos, and media from your portal.',
    section: 'managing-media',
  },
  // Customizing Single Property Website
  {
    slug: 'display-page-overview',
    title: 'Display Page – Overview',
    description: 'Overview of the branded display page and its sections.',
    section: 'customizing-website',
  },
  {
    slug: 'display-page-how-to-customize',
    title: 'Display Page – How to Customize',
    description: 'Step-by-step guide to customizing your display page.',
    section: 'customizing-website',
  },
  // Managing Your Info
  {
    slug: 'updating-contact-information',
    title: 'Updating Contact Information',
    description: 'Update your phone, email, website, and other contact details.',
    section: 'managing-info',
  },
  {
    slug: 'managing-team-and-company',
    title: 'Managing Team and Company',
    description: 'Update your team, company name, and organizational settings.',
    section: 'managing-info',
  },
  // Marketing Your Listings
  {
    slug: 'marketing-toolkit-overview',
    title: 'Marketing Toolkit – Overview',
    description: 'Introduction to the Canopy Stone marketing toolkit.',
    section: 'marketing',
  },
  {
    slug: 'marketing-best-practices',
    title: 'Marketing Best Practices',
    description: 'Tips and best practices for marketing your listings.',
    section: 'marketing',
  },
  // Orders & Billing
  {
    slug: 'placing-orders-overview',
    title: 'Placing Orders – Overview',
    description: 'How to place orders for video tours and photography.',
    section: 'orders-billing',
  },
  {
    slug: 'invoicing-and-payments',
    title: 'Invoicing and Payments',
    description: 'How invoicing works and viewing past payments.',
    section: 'orders-billing',
  },
  // Social Media
  {
    slug: 'sharing-to-social-media',
    title: 'Sharing to Social Media',
    description: 'How to share your listings and media to social platforms.',
    section: 'social-media',
  },
  {
    slug: 'social-media-tips',
    title: 'Social Media Tips',
    description: 'Guides and tips for utilizing social media to market your brand.',
    section: 'social-media',
  },
];

export function getArticlesForSection(section: ArticleSection) {
  return articles.filter((a) => a.section === section);
}

export const sectionConfig = {
  'getting-started': {
    title: 'Getting Started – Basic intro to using your Portal',
    href: '/knowledge-base/using-your-portal',
  },
  'managing-media': {
    title: 'Managing Your Media',
    href: '/knowledge-base/media-how-to-access',
  },
  'customizing-website': {
    title: 'Customizing Your Single Property Website',
    href: '/knowledge-base/customizing-single-property-website',
  },
  'managing-info': {
    title: 'Managing Your Info',
    href: '/knowledge-base/managing-your-info',
  },
  'marketing': {
    title: 'Marketing Your Listings',
    href: '/knowledge-base/marketing-your-listings',
  },
  'orders-billing': {
    title: 'Orders & Billing',
    href: '/knowledge-base/orders-billing',
  },
  'social-media': {
    title: 'Social Media',
    href: '/knowledge-base/social-media',
  },
} as const;

export type ArticleSlug = (typeof articles)[number]['slug'];
