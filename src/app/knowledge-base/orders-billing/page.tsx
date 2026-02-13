'use client';

import SectionPage from '../components/SectionPage';
import { IconOrdersBilling } from '../components/CategoryIcons';

const popularSlugs = [
  'placing-orders-overview',
  'how-to-place-an-order',
  'invoicing-and-payments',
] as const;

export default function OrdersBillingPage() {
  return (
    <SectionPage
      section="orders-billing"
      title="Orders & Billing"
      description="Placing orders, how invoicing works, and viewing past payments."
      icon={<IconOrdersBilling />}
      popularSlugs={popularSlugs}
      introContent={
        <>
          <p>Place orders for video tours and photography, understand how invoicing works, and access your payment history. Everything you need to manage orders and billing is in this section.</p>
          <p>Click any article above for detailed instructions.</p>
        </>
      }
    />
  );
}
