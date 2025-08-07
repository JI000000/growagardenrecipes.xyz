import { Recipe } from '@/types';
import { cn } from '@/utils';
import React from 'react';
import { RecipeCard } from './RecipeCard';

export interface RecipeGridProps {
  recipes: Partial<Recipe>[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Partial<Recipe>) => void;
  favoriteRecipes?: string[];
  showActions?: boolean;
  emptyState?: React.ReactNode;
}

const RecipeGrid = React.forwardRef<HTMLDivElement, RecipeGridProps>(
  (
    {
      recipes,
      className,
      columns = 3,
      gap = 'md',
      loading = false,
      onFavorite,
      onShare,
      favoriteRecipes = [],
      showActions = true,
      emptyState,
      ...props
    },
    ref
  ) => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    };

    const gaps = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    };

    if (loading) {
      return (
        <div
          ref={ref}
          className={cn('grid', gridCols[columns], gaps[gap], className)}
          {...props}
        >
          {Array.from({ length: columns * 2 }).map((_, index) => (
            <RecipeCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (recipes.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          {emptyState || (
            <div className="text-center">
              <div className="text-6xl mb-4">🍳</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                No recipes found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or browse our categories
              </p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('grid', gridCols[columns], gaps[gap], className)}
        {...props}
      >
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            showActions={showActions}
            onFavorite={onFavorite}
            onShare={onShare}
            isFavorited={
              recipe.id ? favoriteRecipes.includes(recipe.id) : false
            }
          />
        ))}
      </div>
    );
  }
);

RecipeGrid.displayName = 'RecipeGrid';

// Skeleton component for loading state
const RecipeCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700" />

      {/* Content skeleton */}
      <div className="p-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3" />

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        </div>

        {/* Metadata skeleton */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
        </div>

        {/* Footer skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-12" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16" />
          </div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
        </div>
      </div>
    </div>
  );
};

export { RecipeGrid };
