import { notFound } from 'next/navigation';
import { getSinglePostData } from '@/lib/posts';
import PostForm from '../../PostForm';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getSinglePostData(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold text-blue-950">Edit post</h1>
      <PostForm mode="edit" initialPost={post} />
    </div>
  );
}
