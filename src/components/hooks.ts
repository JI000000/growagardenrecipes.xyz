'use client';

import { allRecipes, popularRecipes } from '@/data/recipes';
import { useCallback, useState } from 'react';

// 简化的搜索hook
export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const search = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchTerm = searchQuery.toLowerCase();
    const allData = [...popularRecipes, ...allRecipes];

    const filtered = allData.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.slug.toLowerCase().includes(searchTerm)
    );

    setResults(filtered);
  }, []);

  return {
    query,
    setQuery,
    results,
    search,
  };
}

// 简化的主题hook
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
    document.documentElement.classList.toggle('dark');
  }, []);

  return {
    isDark,
    toggleTheme,
  };
}
