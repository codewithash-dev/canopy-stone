'use client';

import SectionPage from '../components/SectionPage';
import { IconSocialMedia } from '../components/CategoryIcons';

const popularSlugs = [
  'sharing-to-social-media',
  'social-media-tips',
] as const;

export default function SocialMediaPage() {
  return (
    <SectionPage
      section="social-media"
      title="Social Media"
      description="Guides and tips on how to utilize social media to market your brand and share your listings."
      icon={<IconSocialMedia />}
      popularSlugs={popularSlugs}
      introContent={
        <>
          <p>Learn how to share your Canopy Stone content to Facebook, Instagram, and other social platforms. Our guides and tips will help you market your brand and promote your listings effectively.</p>
          <p>Click any article above to get started.</p>
        </>
      }
    />
  );
}
