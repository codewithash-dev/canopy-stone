import { notFound } from 'next/navigation';
import KBLayout from '../../components/KBLayout';
import ArticleSidebar from '../ArticleSidebar';
import Link from 'next/link';
import { articles, sectionConfig, getArticlesForSection } from '../../articles-data';

const popularSlugsBySection: Record<string, string[]> = {
  'getting-started': [
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

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const section = sectionConfig[article.section];
  const sectionArticles = getArticlesForSection(article.section);
  const popularSlugs = popularSlugsBySection[article.section] ?? [];
  const popularArticles = popularSlugs
    .map((s) => sectionArticles.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <KBLayout
      breadcrumbItems={[
        { label: 'Knowledge Base', href: '/knowledge-base' },
        { label: section.title, href: section.href },
        { label: article.title },
      ]}
    >
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left – Article list (WVT primary) */}
          <ArticleSidebar currentSlug={slug} section={article.section} />

          {/* Right – Article content + sidebar (WVT) */}
          <div className="lg:w-[480px] xl:w-[540px] shrink-0 flex flex-col gap-6">
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h1>
                <p className="text-gray-600 mb-6">{article.description}</p>

                <button
                  type="button"
                  className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Follow
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Subscribe to receive notifications from this section.
                </p>

                <hr className="my-8 border-gray-200" />

                <div className="prose prose-sm max-w-none text-gray-700">
                  <ArticleContent slug={slug} />
                </div>
              </div>
            </article>

            {/* Popular Articles sidebar */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Popular Articles</h3>
              <ul className="space-y-2">
                {popularArticles.map((a) =>
                  a ? (
                    <li key={a.slug}>
                      <Link
                        href={`/knowledge-base/articles/${a.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#A67C52] hover:underline flex items-start gap-2"
                      >
                        <span className="text-gray-400">📄</span>
                        {a.title}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400 mt-12 bg-white">
        <p>Powered by Canopy Stone Support</p>
      </footer>
    </KBLayout>
  );
}

function ArticleContent({ slug }: { slug: string }) {
  const content: Record<string, React.ReactNode> = {
    'canopy-stone-referral-program': (
      <>
        <p>Earn rewards when you refer fellow real estate professionals to Canopy Stone. Share your unique referral link and receive credits or discounts for each new agent who signs up and completes their first order.</p>
        <h2>How the Canopy Stone Referral Program Works</h2>
        <p>When you refer another agent to Canopy Stone, you earn rewards once they create an account and complete their first video tour or photography order. There&apos;s no limit to how many agents you can refer.</p>
        <h2>How to Access Your Referral Link</h2>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Navigate to the <strong>Referral</strong> or <strong>Referral Program</strong> section in the menu or your account settings</li>
          <li>Copy your unique referral link from the page</li>
          <li>Share the link via email, social media, or in conversation with fellow agents</li>
        </ol>
        <h2>Tracking Your Referrals</h2>
        <p>In the Referral section of your portal, you can view how many agents have signed up using your link and track which referrals have completed their first order. Rewards are typically applied to your account once the referred agent&apos;s first order is completed.</p>
        <h2>Rewards</h2>
        <p>Referral rewards may include account credits or discounts on future Canopy Stone services. Contact your account representative or check the Referral section in your portal for the current program terms and reward details.</p>
      </>
    ),
    'how-to-sign-into-your-canopy-stone-portal': (
      <>
        <p>Visit the Canopy Stone support portal and click <strong>Sign In</strong> in the header. Enter the email address associated with your account and your password.</p>
        <p>If you have forgotten your password, use the &quot;Forgot password&quot; link to reset it. You will receive an email with instructions to create a new password.</p>
        <p>Once signed in, you can access your dashboard, place orders, manage your media library, and customize your single property websites.</p>
      </>
    ),
    'client-portal-basics': (
      <>
        <p>The Canopy Stone Portal is your central hub for managing video tours, photography, and property marketing. From the dashboard you can:</p>
        <ul>
          <li>Place and track orders</li>
          <li>Access your media library</li>
          <li>Manage listings and appointments</li>
          <li>Customize single property websites</li>
          <li>Update account and contact information</li>
        </ul>
        <p>Use the main navigation to move between sections. The search bar at the top helps you find specific articles and features quickly.</p>
      </>
    ),
    'client-portal-settings': (
      <>
        <p>To update your portal settings, sign in and go to <strong>Settings</strong> or <strong>Account</strong>. From there you can:</p>
        <ul>
          <li>Change your email address or password</li>
          <li>Update your company name and branding</li>
          <li>Manage notification preferences</li>
          <li>Add or remove account managers and contacts</li>
        </ul>
        <p>Save your changes before navigating away to ensure they are applied.</p>
      </>
    ),
    'adding-an-account-manager': (
      <>
        <p>Account managers can access your Canopy Stone Portal on your behalf. To add an account manager:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to Settings or Team</li>
          <li>Select &quot;Add Account Manager&quot;</li>
          <li>Enter their name and email address</li>
          <li>Set their permissions and send the invitation</li>
        </ol>
        <p>They will receive an email with a link to create their login and access your account.</p>
      </>
    ),
    'adding-an-additional-contact': (
      <>
        <p>Additional contacts can receive order updates and notifications. To add one:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Navigate to Settings or Contacts</li>
          <li>Click &quot;Add Contact&quot;</li>
          <li>Enter their name, email, and role</li>
          <li>Choose which notifications they should receive</li>
        </ol>
        <p>You can add multiple contacts for different team members or assistants.</p>
      </>
    ),
    'how-to-place-an-order': (
      <>
        <p>To place an order for video tours or photography:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Click &quot;Place Order&quot; or go to the Orders section</li>
          <li>Enter the property address and details</li>
          <li>Select your service type (video tour, photography, etc.)</li>
          <li>Choose your preferred date and time</li>
          <li>Review and submit your order</li>
        </ol>
        <p>You will receive a confirmation email and can track the order status in your portal.</p>
      </>
    ),
    'how-to-check-the-status-of-an-order': (
      <>
        <p>To check the status of an order:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to the Orders section</li>
          <li>Find your order in the list (you can filter by status or date)</li>
          <li>Click on the order to view details and current status</li>
        </ol>
        <p>Statuses typically include: Pending, Scheduled, In Progress, Completed, and Delivered. You may also receive email notifications as your order moves through each stage.</p>
      </>
    ),
    'how-to-reschedule-cancel-an-appointment': (
      <>
        <p>To reschedule or cancel a scheduled shoot:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to Orders or Appointments</li>
          <li>Find the order you want to change</li>
          <li>Click &quot;Reschedule&quot; or &quot;Cancel&quot;</li>
          <li>For reschedule: select a new date and time</li>
          <li>Confirm your changes</li>
        </ol>
        <p>Please reschedule or cancel as far in advance as possible. Cancellation policies may apply depending on timing.</p>
      </>
    ),
    'navigating-listings-in-the-portal-a-quick-reference': (
      <>
        <p>Your listings appear in the Canopy Stone Portal once orders are placed or linked. Quick tips:</p>
        <ul>
          <li><strong>List view</strong> – See all listings in a table with status, address, and date</li>
          <li><strong>Filters</strong> – Filter by status, date range, or address</li>
          <li><strong>Search</strong> – Use the search bar to find a specific property</li>
          <li><strong>Click a listing</strong> – Open details, media, and options</li>
        </ul>
        <p>From each listing you can view media, download files, and manage the single property website.</p>
      </>
    ),
    'how-to-access-your-media-library': (
      <>
        <p>To access your media library:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Click <strong>Media Library</strong> or <strong>My Media</strong> in the navigation</li>
          <li>Browse by listing or use search to find specific files</li>
        </ol>
        <p>Your media library contains all delivered video tours, photos, and other assets. You can view, download, and share them from this section.</p>
      </>
    ),
    'how-to-view-download-media': (
      <>
        <p>To view or download media:</p>
        <ol>
          <li>Go to your Media Library in the Canopy Stone Portal</li>
          <li>Select a listing or folder</li>
          <li>Click on a file to preview it (videos play in-browser)</li>
          <li>Use the Download button or right-click to save files to your device</li>
        </ol>
        <p>Formats available may include MP4 for video, JPG for photos, and links for sharing. You can also copy shareable links to use in listings and marketing.</p>
      </>
    ),
    'single-property-websites-branded-and-unbranded': (
      <>
        <p>Canopy Stone offers both branded and unbranded single property websites:</p>
        <ul>
          <li><strong>Branded</strong> – Displays your name, logo, and contact info. Ideal for agent marketing and lead capture.</li>
          <li><strong>Unbranded</strong> – No agent branding. Suitable for MLS or neutral presentations.</li>
        </ul>
        <p>Select your preferred option when placing an order or in your default settings. You can change this per listing if needed.</p>
      </>
    ),
    'single-property-website-how-to-customize': (
      <>
        <p>To customize your single property website:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to the listing and open its single property website</li>
          <li>Click &quot;Customize&quot; or the settings icon</li>
          <li>Update colors, logo, contact info, and layout</li>
          <li>Save your changes</li>
        </ol>
        <p>You can set default preferences so new sites match your brand automatically, or customize each site individually.</p>
      </>
    ),
    // Managing Your Media articles
    'steps-to-share-an-image-and-article-on-facebook-from-branded-website': (
      <>
        <p>To share an image and article from your branded property website to Facebook:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Open your branded single property website for the listing</li>
          <li>Find the image or article you want to share</li>
          <li>Right-click the image and select &quot;Copy image address&quot; or use the share button if available</li>
          <li>Go to Facebook and create a new post</li>
          <li>Paste the image or paste the property website URL to share the full page</li>
          <li>Add your caption and publish</li>
        </ol>
        <p>You can also use Facebook&apos;s sharing tools—paste your branded property URL into a new post and Facebook will generate a preview with the main image and description.</p>
      </>
    ),
    'download-photos': (
      <>
        <p>To download your property photos from the Canopy Stone Portal:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to Media Library or the specific listing</li>
          <li>Select the photos you want to download</li>
          <li>Click the Download button or right-click and choose &quot;Save image as&quot;</li>
          <li>Choose a location on your device and save</li>
        </ol>
        <p>For bulk downloads, look for a &quot;Download All&quot; or &quot;Download Zip&quot; option in the media library. Photos are typically provided in high-resolution JPG format suitable for listings and print.</p>
      </>
    ),
    'download': (
      <>
        <p>To download videos, photos, and other media from your Canopy Stone Portal:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Navigate to Media Library or open a listing</li>
          <li>For videos: click the video to open it, then use the Download button or menu option</li>
          <li>For photos: select the image(s) and click Download, or right-click and save</li>
          <li>For multiple files: use &quot;Download All&quot; or &quot;Download as Zip&quot; if available</li>
        </ol>
        <p>Video files are typically in MP4 format. You can use downloaded media in your MLS listings, social media, and marketing materials. Shareable links are also available for easy sharing without downloading.</p>
      </>
    ),
    // Customizing Single Property Website
    'display-page-overview': (
      <>
        <p>The branded display page is your single property website that showcases each listing with your branding. It includes sections for the hero image, property details, video tour, photo gallery, and contact information.</p>
        <p>Each section can be customized to match your brand. The display page is automatically generated when you place an order and can be shared via a unique URL for each listing.</p>
      </>
    ),
    'display-page-how-to-customize': (
      <>
        <p>To customize your branded display page:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to a listing and open its single property website</li>
          <li>Click &quot;Customize&quot; or the settings gear</li>
          <li>Edit each section: hero, colors, logo, contact info, and layout options</li>
          <li>Preview your changes before saving</li>
          <li>Click Save to apply</li>
        </ol>
        <p>You can set default preferences so new display pages automatically match your brand.</p>
      </>
    ),
    // Managing Your Info
    'updating-contact-information': (
      <>
        <p>To update your contact information:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to Settings or Account</li>
          <li>Update your phone number, email address, and website URL</li>
          <li>Save your changes</li>
        </ol>
        <p>Updated contact info will appear on your branded materials and display pages.</p>
      </>
    ),
    'managing-team-and-company': (
      <>
        <p>To manage your team and company information:</p>
        <ol>
          <li>Sign in to your Canopy Stone Portal</li>
          <li>Go to Settings or Team</li>
          <li>Update your company name, add or remove team members, and assign roles</li>
          <li>Save your changes</li>
        </ol>
      </>
    ),
    // Marketing
    'marketing-toolkit-overview': (
      <>
        <p>The Canopy Stone Marketing Toolkit includes your video tours, photos, single property websites, and shareable links. Use these assets to promote your listings across MLS, social media, and your website.</p>
      </>
    ),
    'marketing-best-practices': (
      <>
        <p>Best practices for marketing your listings with Canopy Stone:</p>
        <ul>
          <li>Share video tours on social media and in listing descriptions</li>
          <li>Use high-quality photos from your media library</li>
          <li>Link to your branded single property websites in emails and posts</li>
          <li>Post consistently and use relevant hashtags</li>
        </ul>
      </>
    ),
    // Orders & Billing
    'placing-orders-overview': (
      <>
        <p>To place an order, sign in to your Canopy Stone Portal and go to the Orders section. Enter the property address, select your service type (video tour, photography, etc.), choose your date and time, and submit. You&apos;ll receive a confirmation email.</p>
      </>
    ),
    'invoicing-and-payments': (
      <>
        <p>Canopy Stone sends invoices after services are completed. View past payments and invoices in the Billing or Orders section of your portal. Payment methods and terms are outlined in your account settings.</p>
      </>
    ),
    // Social Media
    'sharing-to-social-media': (
      <>
        <p>To share your Canopy Stone content to social media, copy the link to your branded single property website or use the share buttons in your media library. Paste the URL into a new post on Facebook, Instagram, or other platforms. The preview will pull your listing image and description.</p>
      </>
    ),
    'social-media-tips': (
      <>
        <p>Tips for using social media to market your brand and listings:</p>
        <ul>
          <li>Post video tours and photo highlights regularly</li>
          <li>Use eye-catching captions and call-to-actions</li>
          <li>Engage with comments and messages</li>
          <li>Share client testimonials and success stories</li>
        </ul>
      </>
    ),
  };

  return <>{content[slug] ?? <p>Content for this article is coming soon. Check back for updates.</p>}</>;
}
