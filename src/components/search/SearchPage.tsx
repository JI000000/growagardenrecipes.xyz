'use client';

import { allRecipes, popularRecipes } from '@/data/recipes';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { useSearch } from '../hooks';

export interface SearchPageProps {
  className?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({ className }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>(
    'all'
  );
  const { search } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  const allData = [...popularRecipes, ...allRecipes];

  const filteredResults = useMemo(() => {
    let results = allData;

    // Filter by difficulty
    if (filter !== 'all') {
      results = results.filter((recipe) => {
        const difficulty = recipe.difficulty?.toLowerCase() || 'medium';
        return difficulty === filter;
      });
    }

    // Filter by search query
    if (query) {
      results = results.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.slug.toLowerCase().includes(query.toLowerCase())
      );
    }

    return results;
  }, [allData, query, filter]);

  const difficultyCounts = useMemo(() => {
    const counts = { easy: 0, medium: 0, hard: 0 };
    allData.forEach((recipe) => {
      const difficulty = recipe.difficulty?.toLowerCase() || 'medium';
      if (counts[difficulty as keyof typeof counts] !== undefined) {
        counts[difficulty as keyof typeof counts]++;
      }
    });
    return counts;
  }, [allData]);

  return (
    <div className={className}>
      {/* Search header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-800 mb-4">
          Search Recipes
        </h1>
        <p className="text-neutral-600">
          Find the perfect recipe for your cooking adventure
        </p>
      </div>

      {/* Search and filter controls */}
      <div className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for recipes, ingredients, or cooking times..."
            value={query}
            onChange={handleSearch}
            className="w-full px-4 py-3 pl-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
            🔍
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-100 text-primary-700'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All ({allData.length})
          </button>
          <button
            onClick={() => setFilter('easy')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'easy'
                ? 'bg-green-100 text-green-700'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Easy ({difficultyCounts.easy})
          </button>
          <button
            onClick={() => setFilter('medium')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'medium'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Medium ({difficultyCounts.medium})
          </button>
          <button
            onClick={() => setFilter('hard')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'hard'
                ? 'bg-red-100 text-red-700'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Hard ({difficultyCounts.hard})
          </button>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-neutral-600">
          Found {filteredResults.length} recipe
          {filteredResults.length !== 1 ? 's' : ''}
          {query && ` for "${query}"`}
          {filter !== 'all' && ` (${filter} difficulty)`}
        </p>
      </div>

      {/* Results */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((recipe) => (
            <Link
              key={recipe.slug}
              href={`/recipes/${recipe.slug}`}
              className="group block p-6 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {recipe.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2 text-center group-hover:text-primary-600 transition-colors">
                {recipe.name}
              </h3>
              {recipe.description && (
                <p className="text-neutral-600 text-sm text-center mb-3 line-clamp-2">
                  {recipe.description}
                </p>
              )}
              {recipe.difficulty && (
                <div className="flex justify-center items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      recipe.difficulty.toLowerCase() === 'easy'
                        ? 'bg-green-100 text-green-700'
                        : recipe.difficulty.toLowerCase() === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                  {recipe.cookingTime && (
                    <span className="text-xs text-neutral-500">
                      ⏱️ {recipe.cookingTime}
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍳</div>
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">
            No recipes found
          </h3>
          <p className="text-neutral-600 mb-6">
            Try adjusting your search terms or filters
          </p>
          <button
            onClick={() => {
              setQuery('');
              setFilter('all');
            }}
            className="btn-primary px-6 py-3 rounded-xl"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Quick links */}
      <div className="mt-12 pt-8 border-t border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">
          Quick Access
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/recipes"
            className="p-4 bg-neutral-50 rounded-lg text-center hover:bg-neutral-100 transition-colors"
          >
            <div className="text-2xl mb-2">📖</div>
            <div className="text-sm font-medium text-neutral-800">
              All Recipes
            </div>
          </Link>
          <Link
            href="/faq"
            className="p-4 bg-neutral-50 rounded-lg text-center hover:bg-neutral-100 transition-colors"
          >
            <div className="text-2xl mb-2">❓</div>
            <div className="text-sm font-medium text-neutral-800">FAQ</div>
          </Link>
          <Link
            href="/recipes/donut"
            className="p-4 bg-neutral-50 rounded-lg text-center hover:bg-neutral-100 transition-colors"
          >
            <div className="text-2xl mb-2">🍩</div>
            <div className="text-sm font-medium text-neutral-800">
              How to Make
            </div>
          </Link>
          <Link
            href="/"
            className="p-4 bg-neutral-50 rounded-lg text-center hover:bg-neutral-100 transition-colors"
          >
            <div className="text-2xl mb-2">🏠</div>
            <div className="text-sm font-medium text-neutral-800">Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
