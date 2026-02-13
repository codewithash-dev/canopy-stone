'use client';

import SectionPage from '../components/SectionPage';
import { IconMarketing } from '../components/CategoryIcons';

const popularSlugs = [
  'marketing-toolkit-overview',
  'marketing-best-practices',
] as const;

export default function MarketingYourListingsPage() {
  return (
    <SectionPage
      section="marketing"
      title="Marketing Your Listings"
      description="View our guides, tips and tricks, and best practices for marketing your listings."
      icon={<IconMarketing />}
      popularSlugs={popularSlugs}
      introContent={
        <>
          <p>Get the most out of your video tours and photography with our marketing guides. Learn best practices for utilizing the Canopy Stone marketing toolkit to promote your listings and grow your reach.</p>
          <p>Click any article above for step-by-step guides and marketing tips.</p>
        </>
      }
    />
  );
}
