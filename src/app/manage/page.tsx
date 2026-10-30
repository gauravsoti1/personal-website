import Link from 'next/link';
import { getAllPostsData } from '@/lib/posts';
import PostList from './PostList';

export const dynamic = 'force-dynamic';

export default async function ManagePage() {
  const posts = await getAllPostsData();

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-950">Posts</h1>
        <Link
          href="/manage/new"
          className="rounded bg-blue-950 px-4 py-2 text-sm font-medium text-white"
        >
          New post
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
