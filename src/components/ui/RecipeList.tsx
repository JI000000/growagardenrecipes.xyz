import { Recipe } from '@/types';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export interface RecipeListProps {
  recipes: Partial<Recipe>[];
  className?: string;
  loading?: boolean;
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Partial<Recipe>) => void;
  favoriteRecipes?: string[];
  showActions?: boolean;
  emptyState?: React.ReactNode;
}

const RecipeList = React.forwardRef<HTMLDivElement, RecipeListProps>(
  (
    {
      recipes,
      className,
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
    if (loading) {
      return (
        <div ref={ref} className={cn('space-y-4', className)} {...props}>
          {Array.from({ length: 6 }).map((_, index) => (
            <RecipeListItemSkeleton key={index} />
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
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        {recipes.map(recipe => (
          <RecipeListItem
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

RecipeList.displayName = 'RecipeList';

// Individual list item component
interface RecipeListItemProps {
  recipe: Partial<Recipe>;
  showActions?: boolean;
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Partial<Recipe>) => void;
  isFavorited?: boolean;
}

const RecipeListItem = React.forwardRef<HTMLDivElement, RecipeListItemProps>(
  (
    {
      recipe,
      showActions = true,
      onFavorite,
      onShare,
      isFavorited = false,
      ...props
    },
    ref
  ) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    const handleFavorite = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onFavorite && recipe.id) {
        onFavorite(recipe.id);
      }
    };

    const handleShare = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onShare) {
        onShare(recipe);
      }
    };

    const getDifficultyColor = (difficulty?: string) => {
      switch (difficulty) {
        case 'Easy':
          return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20';
        case 'Medium':
          return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20';
        case 'Hard':
          return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/20';
        default:
          return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20';
      }
    };

    const primaryImage =
      recipe.images?.find(img => img.isPrimary) || recipe.images?.[0];
    const imageUrl = primaryImage?.url || '/images/recipe-placeholder.svg';
    const imageAlt = primaryImage?.alt || `${recipe.title} recipe image`;

    return (
      <div
        ref={ref}
        className={cn(
          'group bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-gray-700',
          'hover:border-primary-500 hover:shadow-game-lg transition-all duration-300',
          'hover:-translate-y-1 hover:scale-[1.01]'
        )}
        {...props}
      >
        <Link href={`/recipes/${recipe.slug}`} className="block">
          <div className="flex gap-4 p-4">
            {/* Recipe Image */}
            <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              {!imageError ? (
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className={cn(
                    'object-cover transition-all duration-500',
                    'group-hover:scale-110 group-hover:brightness-110',
                    isImageLoading ? 'opacity-0' : 'opacity-100'
                  )}
                  onLoad={() => setIsImageLoading(false)}
                  onError={() => {
                    setImageError(true);
                    setIsImageLoading(false);
                  }}
                  sizes="128px"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <Icon
                    name="chef"
                    size="lg"
                    variant="default"
                    className="opacity-50"
                  />
                </div>
              )}

              {/* Loading overlay */}
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <Icon name="loader" size="sm" className="animate-spin" />
                </div>
              )}

              {/* Difficulty badge */}
              {recipe.difficulty && (
                <div className="absolute bottom-1 left-1">
                  <span
                    className={cn(
                      'px-1.5 py-0.5 rounded text-xs font-medium',
                      getDifficultyColor(recipe.difficulty)
                    )}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
              )}
            </div>

            {/* Recipe Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-orbitron font-semibold text-lg leading-tight text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-1 mb-2">
                    {recipe.title}
                  </h3>

                  {recipe.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                      {recipe.description}
                    </p>
                  )}

                  {/* Recipe metadata */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {recipe.cookingTime && (
                      <div className="flex items-center gap-1">
                        <Icon name="clock" size="sm" />
                        <span>{recipe.cookingTime} min</span>
                      </div>
                    )}
                    {recipe.category && (
                      <div className="flex items-center gap-1">
                        <span>{recipe.category.icon}</span>
                        <span>{recipe.category.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    {recipe.tags?.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                {showActions && (
                  <div className="flex items-center gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleFavorite}
                      className={cn(
                        'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm',
                        'hover:bg-white dark:hover:bg-gray-900',
                        'shadow-lg border border-gray-200 dark:border-gray-700',
                        isFavorited && 'text-red-500 hover:text-red-600'
                      )}
                      aria-label={
                        isFavorited
                          ? 'Remove from favorites'
                          : 'Add to favorites'
                      }
                    >
                      <Icon
                        name="heart"
                        size="sm"
                        className={cn(
                          'transition-colors duration-200',
                          isFavorited && 'fill-current'
                        )}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleShare}
                      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700"
                      aria-label="Share recipe"
                    >
                      <Icon name="share" size="sm" />
                    </Button>
                  </div>
                )}
              </div>

              {/* View Recipe link */}
              <div className="flex items-center justify-end mt-2">
                <div className="flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-200">
                  <span className="text-sm font-medium mr-1">View Recipe</span>
                  <Icon name="arrowRight" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

RecipeListItem.displayName = 'RecipeListItem';

// Skeleton component for loading state
const RecipeListItemSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="flex gap-4 p-4">
        {/* Image skeleton */}
        <div className="w-32 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0" />

        {/* Content skeleton */}
        <div className="flex-1 min-w-0">
          {/* Title skeleton */}
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4" />

          {/* Description skeleton */}
          <div className="space-y-2 mb-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
          </div>

          {/* Metadata skeleton */}
          <div className="flex items-center gap-4 mb-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
          </div>

          {/* Tags skeleton */}
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-12" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { RecipeList };
