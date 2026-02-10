'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ReferralParamListener({ onOpenReferral }: { onOpenReferral: () => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get('referral') === '1') {
      onOpenReferral();
      router.replace(pathname || '/portal', { scroll: false });
    }
  }, [searchParams, pathname, router, onOpenReferral]);

  return null;
}
