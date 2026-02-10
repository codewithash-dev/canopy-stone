'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortalReferral() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/portal?referral=1');
  }, [router]);
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-gray-500">Opening referral program...</p>
    </div>
  );
}
