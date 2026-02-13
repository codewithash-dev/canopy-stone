'use client';

import SectionPage from '../components/SectionPage';
import { IconSingleProperty } from '../components/CategoryIcons';

const popularSlugs = [
  'single-property-website-how-to-customize',
  'single-property-websites-branded-and-unbranded',
  'display-page-how-to-customize',
  'display-page-overview',
] as const;

export default function CustomizingSinglePropertyWebsitePage() {
  return (
    <SectionPage
      section="customizing-website"
      title="Customizing Your Single Property Website"
      description="Walkthroughs, tips, and tricks on how to get the most out of your single property website."
      icon={<IconSingleProperty />}
      popularSlugs={popularSlugs}
      introContent={
        <>
          <p>Your single property website is a powerful marketing tool for each listing. Customize the display page to match your brand, showcase your property media, and capture leads.</p>
          <p>Click any article in the list above to view detailed instructions on customizing your branded display page and getting the most from your single property websites.</p>
        </>
      }
    />
  );
}
