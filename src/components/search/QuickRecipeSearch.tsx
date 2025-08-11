'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export interface QuickRecipeSearchProps {
  recipes: Array<{
    name: string;
    slug: string;
    icon?: string;
    description?: string;
  }>;
  className?: string;
}

export default function QuickRecipeSearch({
  recipes,
  className,
}: QuickRecipeSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const popularShortcuts = [
    { label: 'Donut', slug: 'donut' },
    { label: 'Burger', slug: 'burger' },
    { label: 'Sushi', slug: 'sushi' },
  ];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as QuickRecipeSearchProps['recipes'];
    return recipes
      .filter((r) =>
        [r.name, r.slug, r.description]
          .filter(Boolean)
          .some((t) => (t as string).toLowerCase().includes(q))
      )
      .slice(0, 8);
  }, [query, recipes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      router.push(`/recipes/${results[0].slug}`);
    }
  };

  const handleSelect = (slug: string) => {
    router.push(`/recipes/${slug}`);
  };

  return (
    <div className={className}>
      <div id="search" />
      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder="Search recipes by name or ingredients..."
          aria-label="Search recipes"
          className="w-full px-5 py-4 rounded-2xl bg-white/90 border border-white/40 shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700"
        >
          Search
        </button>
      </form>

      {/* Popular shortcuts */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {popularShortcuts.map((s) => (
          <button
            key={s.slug}
            onClick={() => handleSelect(s.slug)}
            className="px-3 py-1.5 rounded-full bg-neutral-800/80 text-white text-sm hover:bg-neutral-900"
          >
            #{s.label}
          </button>
        ))}
      </div>

      {isFocused && results.length > 0 && (
        <div className="max-w-2xl mx-auto mt-3 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
          <ul className="divide-y divide-neutral-100">
            {results.map((r) => (
              <li key={r.slug}>
                <button
                  onClick={() => handleSelect(r.slug)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-3 hover:bg-neutral-50 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{r.icon ?? '🍳'}</span>
                    <div>
                      <div className="font-semibold text-neutral-800">
                        {r.name}
                      </div>
                      {r.description && (
                        <div className="text-sm text-neutral-500 line-clamp-1">
                          {r.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-primary-600">View</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
