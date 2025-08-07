'use client';

import { SearchBox, SearchResults } from '@/components/ui';
import { sampleRecipes } from '@/data/recipes';
import { useSearch } from '@/hooks';
import { Recipe } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export interface SearchPageProps {
  initialQuery?: string;
  onRecipeClick?: (recipe: Recipe) => void;
  className?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  initialQuery = '',
  onRecipeClick,
  className,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    query,
    results,
    isLoading,
    error,
    setQuery,
    search,
    suggestions,
    spellingSuggestions,
    hasMore,
    loadMore,
    totalResults,
    searchTime,
  } = useSearch({
    autoSearch: true,
    enableAnalytics: true,
    maxResults: 10,
  });

  // Initialize query from URL params or props
  useEffect(() => {
    const urlQuery = searchParams?.get('q') || initialQuery;
    if (urlQuery && urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [searchParams, initialQuery, query, setQuery]);

  // Update URL when query changes
  useEffect(() => {
    if (query) {
      const params = new URLSearchParams(searchParams || '');
      params.set('q', query);
      router.replace(`/search?${params.toString()}`, { scroll: false });
    } else {
      router.replace('/search', { scroll: false });
    }
  }, [query, router, searchParams]);

  // Handle search
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  // Handle recipe click
  const handleRecipeClick = (recipe: Recipe) => {
    if (onRecipeClick) {
      onRecipeClick(recipe);
    } else {
      // Default behavior: navigate to recipe page
      router.push(`/recipes/${recipe.slug}`);
    }
  };

  // Get popular recipes for no-results fallback
  const popularRecipes = sampleRecipes.map(recipe => ({
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

  return (
    <div className={className}>
      {/* Search header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Search Recipes
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Find the perfect Grow a Garden recipe for your next cooking adventure
        </p>

        {/* Search box */}
        <div className="max-w-2xl">
          <SearchBox
            placeholder="Search for recipes, ingredients, or cooking tips..."
            onSearch={handleSearch}
            onSuggestionSelect={handleSuggestionClick}
            autoFocus={!query}
            maxSuggestions={8}
          />
        </div>
      </div>

      {/* Search results */}
      {query && (
        <div>
          {/* Search metadata */}
          {!isLoading && results.length > 0 && (
            <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Search completed in {searchTime.toFixed(0)}ms
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-center">
                <div className="text-red-600 dark:text-red-400 text-sm">
                  <strong>Search Error:</strong> {error}
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          <SearchResults
            results={results}
            query={query}
            isLoading={isLoading}
            onRecipeClick={handleRecipeClick}
            onSuggestionClick={handleSuggestionClick}
            showLoadMore={hasMore}
            onLoadMore={loadMore}
            totalResults={totalResults}
            suggestions={spellingSuggestions}
            popularRecipes={popularRecipes}
          />
        </div>
      )}

      {/* Default state when no query */}
      {!query && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Start Your Recipe Search
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Enter a recipe name, ingredient, or cooking technique to find
              exactly what you're looking for.
            </p>

            {/* Popular searches */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Popular Searches
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'donut',
                  'burger',
                  'pizza',
                  'cake',
                  'ice cream',
                  'sandwich',
                ].map(term => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
