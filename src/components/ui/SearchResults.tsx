'use client';

import { Recipe } from '@/types';
import { cn } from '@/utils';
import { SearchResult } from '@/utils/search';
import React from 'react';
import { Button } from './Button';
import { Card, CardContent } from './Card';
import { CookingTime, DifficultyBadge } from './GameElements';
import { Icon } from './Icon';

export interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading?: boolean;
  onRecipeClick?: (recipe: Recipe) => void;
  onSuggestionClick?: (suggestion: string) => void;
  className?: string;
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  totalResults?: number;
  suggestions?: string[];
  popularRecipes?: Recipe[];
}

export interface NoResultsProps {
  query: string;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
  popularRecipes?: Recipe[];
  onRecipeClick?: (recipe: Recipe) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  isLoading = false,
  onRecipeClick,
  onSuggestionClick,
  className,
  showLoadMore = false,
  onLoadMore,
  totalResults,
  suggestions = [],
}) => {
  if (isLoading) {
    return <SearchResultsLoading />;
  }

  if (results.length === 0) {
    return (
      <NoResults
        query={query}
        suggestions={suggestions}
        onSuggestionClick={onSuggestionClick}
        onRecipeClick={onRecipeClick}
      />
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Results header */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {totalResults ? (
            <>
              Showing {results.length} of {totalResults} results for{' '}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                "{query}"
              </span>
            </>
          ) : (
            <>
              {results.length} result{results.length !== 1 ? 's' : ''} for{' '}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                "{query}"
              </span>
            </>
          )}
        </div>
      </div>

      {/* Search results */}
      <div className="space-y-3">
        {results.map((result, index) => (
          <SearchResultCard
            key={result.recipe.id}
            result={result}
            onClick={() => onRecipeClick?.(result.recipe)}
            index={index}
          />
        ))}
      </div>

      {/* Load more button */}
      {showLoadMore && (
        <div className="flex justify-center pt-4">
          <Button variant="outline" onClick={onLoadMore} className="min-w-32">
            <Icon name="chevron-down" size={16} className="mr-2" />
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

const SearchResultCard: React.FC<{
  result: SearchResult;
  onClick: () => void;
  index: number;
}> = ({ result, onClick, index }) => {
  const {
    recipe,
    score,
    matchedFields,
    highlightedTitle,
    highlightedDescription,
  } = result;

  return (
    <Card
      className="hover:shadow-md transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          {/* Recipe image placeholder */}
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center">
            <Icon
              name="chef-hat"
              size={24}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>

          {/* Recipe details */}
          <div className="flex-1 min-w-0">
            {/* Title with highlighting */}
            <h3
              className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: highlightedTitle || recipe.title,
              }}
            />

            {/* Description with highlighting */}
            <p
              className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: highlightedDescription || recipe.description,
              }}
            />

            {/* Recipe metadata */}
            <div className="flex items-center space-x-4 mt-3">
              <DifficultyBadge difficulty={recipe.difficulty} size="sm" />
              <CookingTime time={recipe.cookingTime} size="sm" />
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {recipe.category.name}
              </div>
            </div>

            {/* Match indicators */}
            {matchedFields.length > 0 && (
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Matches:
                </span>
                {matchedFields.slice(0, 3).map(field => (
                  <span
                    key={field}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                  >
                    {field}
                  </span>
                ))}
                {matchedFields.length > 3 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    +{matchedFields.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Score indicator (for debugging, can be removed in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="flex-shrink-0 text-xs text-gray-400 dark:text-gray-500">
              {score.toFixed(1)}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const NoResults: React.FC<NoResultsProps> = ({
  query,
  suggestions = [],
  onSuggestionClick,
  popularRecipes = [],
  onRecipeClick,
}) => {
  return (
    <div className="text-center py-12">
      {/* No results icon */}
      <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <Icon
          name="search-x"
          size={32}
          className="text-gray-400 dark:text-gray-500"
        />
      </div>

      {/* No results message */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        No recipes found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
        We couldn't find any recipes matching{' '}
        <span className="font-medium">"{query}"</span>. Try adjusting your
        search or browse our popular recipes below.
      </p>

      {/* Search suggestions */}
      {suggestions.length > 0 && (
        <div className="mb-8">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Did you mean:
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map(suggestion => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => onSuggestionClick?.(suggestion)}
                className="text-sm"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Popular recipes fallback */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Popular Recipes
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {popularRecipes.slice(0, 6).map(recipe => (
            <Card
              key={recipe.id}
              className="hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => onRecipeClick?.(recipe)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="chef-hat"
                      size={20}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-gray-900 dark:text-gray-100 text-sm line-clamp-1">
                      {recipe.title}
                    </h5>
                    <div className="flex items-center space-x-2 mt-1">
                      <DifficultyBadge
                        difficulty={recipe.difficulty}
                        size="xs"
                      />
                      <CookingTime time={recipe.cookingTime} size="xs" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Search tips */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg max-w-md mx-auto">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Search Tips
        </h4>
        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 text-left">
          <li>
            • Try different keywords (e.g., "donut" instead of "doughnut")
          </li>
          <li>
            • Use simpler terms (e.g., "cake" instead of "chocolate cake
            recipe")
          </li>
          <li>• Check your spelling</li>
          <li>• Browse by category using the navigation menu</li>
        </ul>
      </div>
    </div>
  );
};

const SearchResultsLoading: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Loading header */}
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse" />
      </div>

      {/* Loading cards */}
      {Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              {/* Image placeholder */}
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />

              {/* Content placeholder */}
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                <div className="flex space-x-2 mt-3">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { NoResults, SearchResultsLoading };
