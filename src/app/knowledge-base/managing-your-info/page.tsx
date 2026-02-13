'use client';

import SectionPage from '../components/SectionPage';
import { IconManagingInfo } from '../components/CategoryIcons';

const popularSlugs = [
  'updating-contact-information',
  'managing-team-and-company',
] as const;

export default function ManagingYourInfoPage() {
  return (
    <SectionPage
      section="managing-info"
      title="Managing Your Info"
      description="Updating your phone, email, website, team, company, etc."
      icon={<IconManagingInfo />}
      popularSlugs={popularSlugs}
      introContent={
        <>
          <p>Keep your Canopy Stone Portal account up to date with your latest contact information, company details, and team members. Accurate info ensures your branded materials and communications reflect your current business.</p>
          <p>Click any article above to learn how to update your profile, contact details, and organizational settings.</p>
        </>
      }
    />
  );
}
