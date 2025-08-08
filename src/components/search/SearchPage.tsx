'use client';

import { allRecipes, popularRecipes } from '@/data/recipes';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSearch } from '../hooks';

export interface SearchPageProps {
  className?: string;
}

export const SearchPage: React.FC<SearchPageProps> = ({ className }) => {
  const [query, setQuery] = useState('');
  const { search } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    search(value);
  };

  const allData = [...popularRecipes, ...allRecipes];
  const filteredResults = query
    ? allData.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.slug.toLowerCase().includes(query.toLowerCase())
      )
    : allData;

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

      {/* Search input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={handleSearch}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="block p-6 border border-neutral-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{recipe.icon}</div>
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              {recipe.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
