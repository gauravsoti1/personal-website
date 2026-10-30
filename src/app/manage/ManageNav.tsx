'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function ManageNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/manage/login') {
    return null;
  }

  const handleLogout = async () => {
    await fetch('/api/manage/logout', { method: 'POST' });
    router.push('/manage/login');
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-8">
      <Link href="/manage" className="text-sm font-semibold text-blue-950">
        Manage posts
      </Link>
      <button
        type="button"
        onClick={handleLogout}
        className="text-sm text-slate-500 hover:text-blue-950"
      >
        Log out
      </button>
    </div>
  );
}
