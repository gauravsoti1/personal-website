'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { PostType } from '@/lib/posts';

type Props = {
  mode: 'new' | 'edit';
  initialPost?: PostType;
};

export default function PostForm({ mode, initialPost }: Props) {
  const router = useRouter();
  const [slug, setSlug] = useState(initialPost?.slug ?? '');
  const [title, setTitle] = useState(initialPost?.title ?? '');
  const [description, setDescription] = useState(initialPost?.description ?? '');
  const [date, setDate] = useState(
    initialPost?.date ?? new Date().toISOString().slice(0, 10),
  );
  const [tags, setTags] = useState(initialPost?.tags ?? '');
  const [content, setContent] = useState(initialPost?.content ?? '');
  const [hide, setHide] = useState(initialPost?.hide ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const save = async (publish: boolean) => {
    setSaving(true);
    setError(null);

    const body = { slug, title, description, date, tags, content, hide: !publish };
    const url =
      mode === 'new'
        ? '/api/manage/posts'
        : `/api/manage/posts/${initialPost!.slug}`;
    const method = mode === 'new' ? 'POST' : 'PUT';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.error ?? 'Something went wrong.');
      return;
    }

    router.push('/manage');
    router.refresh();
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          save(!hide);
        }}
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col gap-1 text-sm text-slate-600">
          Slug
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-slate-600">
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-slate-600">
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
            rows={2}
            required
          />
        </label>
        <div className="flex gap-4">
          <label className="flex flex-1 flex-col gap-1 text-sm text-slate-600">
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </label>
          <label className="flex flex-1 flex-col gap-1 text-sm text-slate-600">
            Tags
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="rounded border border-slate-300 px-3 py-2 text-sm"
              placeholder="coding, life"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1 text-sm text-slate-600">
          Content (markdown)
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px] rounded border border-slate-300 px-3 py-2 font-mono text-sm"
            required
          />
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={() => {
              setHide(true);
              save(false);
            }}
            className="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-50"
          >
            Save as draft
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => {
              setHide(false);
              save(true);
            }}
            className="rounded bg-blue-950 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {hide ? 'Publish' : 'Save & keep published'}
          </button>
          {!hide && (
            <button
              type="button"
              disabled={saving}
              onClick={() => {
                setHide(true);
                save(false);
              }}
              className="rounded border border-amber-400 px-4 py-2 text-sm font-medium text-amber-700 disabled:opacity-50"
            >
              Unpublish
            </button>
          )}
        </div>
      </form>

      <div className="md-content rounded border border-slate-200 p-4">
        <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">
          Preview
        </p>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
