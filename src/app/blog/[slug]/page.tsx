import { getSinglePostData } from '@/lib/posts';
import { BASE_URL } from '@/lib/constants';
import { generateBlogDetailPath } from '@/lib/urlHelper';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSinglePostData(params.slug);

  if (!data) {
    return { title: 'Post not found' };
  }

  const path = generateBlogDetailPath(data.slug);

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      url: path,
      title: data.title,
      description: data.description,
      publishedTime: new Date(data.date).toISOString(),
    },
    twitter: {
      card: 'summary',
      title: data.title,
      description: data.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getSinglePostData(params.slug);

  if (!data) {
    return (
      <div className="mx-auto max-w-3xl p-4 sm:p-8">
        <p className="text-sm text-slate-500">
          Couldn&apos;t find a post for &quot;{params.slug}&quot;.
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-amber-600 hover:underline"
        >
          <span aria-hidden="true">←</span> Back to blog
        </Link>
      </div>
    );
  }

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    datePublished: new Date(data.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Gaurav Sobti',
      url: BASE_URL,
    },
    url: `${BASE_URL}${generateBlogDetailPath(data.slug)}`,
  };

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-amber-600 hover:underline"
      >
        <span aria-hidden="true">←</span> Back to blog
      </Link>

      <article>
        <p className="mb-2 text-xs text-slate-400">
          {new Date(data.date).toDateString()}
        </p>
        <h1 className="mb-6 !text-3xl !font-bold text-blue-950">{data.title}</h1>
        <div className="md-content">
          <Markdown>{data.content}</Markdown>
        </div>
      </article>
    </div>
  );
}
