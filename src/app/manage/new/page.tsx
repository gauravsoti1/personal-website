import PostForm from '../PostForm';

export default function NewPostPage() {
  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold text-blue-950">New post</h1>
      <PostForm mode="new" />
    </div>
  );
}
