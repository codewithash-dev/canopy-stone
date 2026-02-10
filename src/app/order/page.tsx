'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/signin');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
      <p className="text-gray-500">Redirecting to sign in...</p>
    </div>
  );
}
