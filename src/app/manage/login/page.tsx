'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch('/api/manage/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    setSubmitting(false);

    if (!res.ok) {
      setError('Invalid username or password.');
      return;
    }

    router.push('/manage');
    router.refresh();
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col justify-center p-4 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold text-blue-950">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm text-slate-600">
          Username
          <input
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-slate-600">
          Password
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded border border-slate-300 px-3 py-2 text-sm"
            required
          />
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="rounded bg-blue-950 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
