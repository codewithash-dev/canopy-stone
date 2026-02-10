'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortalInvoicesIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/portal/invoices/pending');
  }, [router]);
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-gray-500">Loading...</p>
    </div>
  );
}
