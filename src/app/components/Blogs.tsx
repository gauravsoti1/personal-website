'use client';
import { PostType } from '@/lib/posts';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import Card from './Card';
import { generateBlogDetailPath } from '@/lib/urlHelper';

const CATEGORIES = [
  { id: 'coding', label: 'coding' },
  { id: 'life', label: 'life' },
] as const;

function Blogs({ posts }: { posts: PostType[] }) {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]['id']>(
    'coding',
  );
  const filteredPosts = useMemo(
    () => posts.filter(({ tags }) => tags.includes(category)),
    [posts, category],
  );

  return (
    <section className="p-4 sm:p-8">
      <div className="mx-auto lg:container">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          field notes
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Notes on code, and occasionally on everything that isn&apos;t.
        </p>

        <div
          role="group"
          aria-label="Filter posts by category"
          className="mb-8 mt-6 flex flex-wrap gap-2"
        >
          {CATEGORIES.map(({ id, label }) => {
            const isSelected = category === id;
            const count = posts.filter(({ tags }) => tags.includes(id)).length;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setCategory(id)}
                className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'border-amber-400 bg-amber-50 text-amber-700'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {label}
                <span className={isSelected ? 'text-amber-600/70' : 'text-slate-400'}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="grid list-none gap-6 pl-0 sm:grid-cols-2">
          {filteredPosts.map(({ id, title, slug, description, date }) => (
            <li key={id}>
              <Link
                className="block h-full no-underline"
                href={generateBlogDetailPath(slug)}
              >
                <Card>
                  <div className="flex h-full flex-col gap-2 p-4">
                    <span className="text-xs text-slate-400">{date}</span>
                    <h3 className="text-lg font-semibold text-blue-950">{title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {description}
                    </p>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
          {filteredPosts.length === 0 && (
            <li className="text-sm text-slate-400">Nothing here yet.</li>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
