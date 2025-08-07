'use client';

import { sampleRecipes } from '@/data/recipes';
import { Recipe } from '@/types';
import {
  advancedSearch,
  generateSpellingSuggestions,
  SearchOptions,
  SearchResult,
  trackSearchAnalytics,
} from '@/utils/search';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface UseSearchOptions extends SearchOptions {
  debounceMs?: number;
  enableAnalytics?: boolean;
  autoSearch?: boolean;
}

export interface UseSearchReturn {
  // Search state
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;

  // Search actions
  setQuery: (query: string) => void;
  search: (searchQuery?: string, options?: SearchOptions) => void;
  clearSearch: () => void;

  // Suggestions
  suggestions: string[];
  spellingSuggestions: string[];

  // Pagination
  hasMore: boolean;
  loadMore: () => void;

  // Analytics
  totalResults: number;
  searchTime: number;
}

export function useSearch(options: UseSearchOptions = {}): UseSearchReturn {
  const {
    debounceMs = 300,
    enableAnalytics = true,
    autoSearch = true,
    maxResults = 20,
    ...searchOptions
  } = options;

  // State
  const [query, setQueryState] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [spellingSuggestions, setSpellingSuggestions] = useState<string[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTime, setSearchTime] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Convert sample recipes to full Recipe objects
  const fullRecipes: Recipe[] = useMemo(() => {
    return sampleRecipes.map(recipe => ({
      ...recipe,
      ingredients: recipe.ingredients || [],
      steps: recipe.steps || [],
      tips: recipe.tips || [],
      images: recipe.images || [],
      tags: recipe.tags || [],
      seoKeywords: recipe.seoKeywords || [],
      createdAt: recipe.createdAt || new Date(),
      updatedAt: recipe.updatedAt || new Date(),
      isActive: recipe.isActive ?? true,
    })) as Recipe[];
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery: string, searchOpts: SearchOptions) => {
      performSearch(searchQuery, searchOpts);
    }, debounceMs),
    [fullRecipes, enableAnalytics]
  );

  // Perform the actual search
  const performSearch = useCallback(
    async (searchQuery: string, searchOpts: SearchOptions = {}) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setSuggestions([]);
        setSpellingSuggestions([]);
        setTotalResults(0);
        setSearchTime(0);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      const startTime = performance.now();

      try {
        // Perform search
        const searchResults = advancedSearch(fullRecipes, searchQuery, {
          ...searchOptions,
          ...searchOpts,
          maxResults: maxResults * currentPage,
        });

        // Generate spelling suggestions if no results
        let spellingSugs: string[] = [];
        if (searchResults.length === 0) {
          spellingSugs = generateSpellingSuggestions(
            searchQuery,
            fullRecipes,
            3
          );
        }

        const endTime = performance.now();
        const duration = endTime - startTime;

        // Update state
        setResults(searchResults);
        setSpellingSuggestions(spellingSugs);
        setTotalResults(searchResults.length);
        setSearchTime(duration);

        // Track analytics
        if (enableAnalytics) {
          trackSearchAnalytics(searchQuery, searchResults.length);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Search failed');
        setResults([]);
        setSpellingSuggestions([]);
        setTotalResults(0);
      } finally {
        setIsLoading(false);
      }
    },
    [fullRecipes, searchOptions, maxResults, currentPage, enableAnalytics]
  );

  // Public search function
  const search = useCallback(
    (searchQuery?: string, searchOpts?: SearchOptions) => {
      const finalQuery = searchQuery || query;
      setCurrentPage(1);
      performSearch(finalQuery, searchOpts);
    },
    [query, performSearch]
  );

  // Set query with optional auto-search
  const setQuery = useCallback(
    (newQuery: string) => {
      setQueryState(newQuery);
      setCurrentPage(1);

      if (autoSearch) {
        if (newQuery.trim()) {
          debouncedSearch(newQuery, searchOptions);
        } else {
          setResults([]);
          setSuggestions([]);
          setSpellingSuggestions([]);
          setTotalResults(0);
          setSearchTime(0);
          setError(null);
        }
      }
    },
    [autoSearch, debouncedSearch, searchOptions]
  );

  // Clear search
  const clearSearch = useCallback(() => {
    setQueryState('');
    setResults([]);
    setSuggestions([]);
    setSpellingSuggestions([]);
    setTotalResults(0);
    setSearchTime(0);
    setError(null);
    setCurrentPage(1);
  }, []);

  // Load more results (pagination)
  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      setCurrentPage(prev => prev + 1);
    }
  }, [isLoading]);

  // Check if there are more results to load
  const hasMore = useMemo(() => {
    return (
      results.length >= maxResults * currentPage &&
      results.length < totalResults
    );
  }, [results.length, maxResults, currentPage, totalResults]);

  // Update results when page changes
  useEffect(() => {
    if (currentPage > 1 && query.trim()) {
      performSearch(query, searchOptions);
    }
  }, [currentPage, query, performSearch, searchOptions]);

  // Generate suggestions for current query
  useEffect(() => {
    if (query.length >= 2) {
      const newSuggestions = generateSearchSuggestions(fullRecipes, query, 5);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, fullRecipes]);

  return {
    // Search state
    query,
    results,
    isLoading,
    error,

    // Search actions
    setQuery,
    search,
    clearSearch,

    // Suggestions
    suggestions,
    spellingSuggestions,

    // Pagination
    hasMore,
    loadMore,

    // Analytics
    totalResults,
    searchTime,
  };
}

// Utility function for debouncing
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Helper function to generate search suggestions (moved from utils for better organization)
function generateSearchSuggestions(
  recipes: Recipe[],
  partialQuery: string,
  maxSuggestions: number = 5
): string[] {
  if (!partialQuery || partialQuery.length < 2) {
    return [];
  }

  const suggestions = new Set<string>();
  const normalizedQuery = partialQuery.toLowerCase();

  recipes.forEach(recipe => {
    // Check recipe titles
    if (recipe.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(recipe.title);
    }

    // Check tags
    recipe.tags.forEach(tag => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(tag);
      }
    });

    // Check SEO keywords
    recipe.seoKeywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(keyword);
      }
    });
  });

  return Array.from(suggestions).slice(0, maxSuggestions);
}
