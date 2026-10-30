'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PostType } from '@/lib/posts';

export default function PostList({ posts }: { posts: PostType[] }) {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);

  const togglePublish = async (post: PostType) => {
    setPendingSlug(post.slug);
    await fetch(`/api/manage/posts/${post.slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...post, hide: !post.hide }),
    });
    setPendingSlug(null);
    router.refresh();
  };

  const handleDelete = async (post: PostType) => {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setPendingSlug(post.slug);
    await fetch(`/api/manage/posts/${post.slug}`, { method: 'DELETE' });
    setPendingSlug(null);
    router.refresh();
  };

  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b border-slate-200 text-left text-slate-500">
          <th className="py-2 pr-4">Title</th>
          <th className="py-2 pr-4">Date</th>
          <th className="py-2 pr-4">Tags</th>
          <th className="py-2 pr-4">Status</th>
          <th className="py-2 pr-4" />
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="border-b border-slate-100">
            <td className="py-2 pr-4 font-medium text-blue-950">
              <Link href={`/manage/${post.slug}/edit`} className="hover:underline">
                {post.title}
              </Link>
            </td>
            <td className="py-2 pr-4 text-slate-500">{post.date}</td>
            <td className="py-2 pr-4 text-slate-500">{post.tags}</td>
            <td className="py-2 pr-4">
              <span
                className={
                  post.hide
                    ? 'rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500'
                    : 'rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700'
                }
              >
                {post.hide ? 'Draft' : 'Published'}
              </span>
            </td>
            <td className="py-2 pr-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={pendingSlug === post.slug}
                  onClick={() => togglePublish(post)}
                  className="text-blue-600 hover:underline disabled:opacity-50"
                >
                  {post.hide ? 'Publish' : 'Unpublish'}
                </button>
                <Link
                  href={`/manage/${post.slug}/edit`}
                  className="text-slate-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={pendingSlug === post.slug}
                  onClick={() => handleDelete(post)}
                  className="text-red-600 hover:underline disabled:opacity-50"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
        {posts.length === 0 && (
          <tr>
            <td colSpan={5} className="py-6 text-center text-slate-400">
              No posts yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
