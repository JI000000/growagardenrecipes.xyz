import { Recipe } from '@/types';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Icon } from './Icon';

export interface RecipeCardProps {
  recipe: Partial<Recipe>;
  className?: string;
  showActions?: boolean;
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Partial<Recipe>) => void;
  isFavorited?: boolean;
}

const RecipeCard = React.forwardRef<HTMLDivElement, RecipeCardProps>(
  (
    {
      recipe,
      className,
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
      <Card
        ref={ref}
        variant="recipe"
        hover
        className={cn(
          'group overflow-hidden transition-all duration-300 cursor-pointer',
          'hover:shadow-2xl hover:border-green-400/50',
          'transform hover:-translate-y-2 hover:scale-105',
          'active:scale-95',
          'bg-white dark:bg-gray-800',
          'border border-gray-200 dark:border-gray-700',
          'rounded-xl',
          className
        )}
        {...props}
      >
        <Link href={`/recipes/${recipe.slug}`} className="block">
          {/* Recipe Image */}
          <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-xl">
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className={cn(
                  'object-cover transition-all duration-300',
                  'group-hover:scale-110',
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                )}
                onLoad={() => setIsImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setIsImageLoading(false);
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                <div className="text-center">
                  <Icon
                    name="chef"
                    size="xl"
                    className="text-green-500 mb-2"
                  />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Recipe Image
                  </p>
                </div>
              </div>
            )}

            {/* Loading overlay */}
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <Icon name="loader" size="lg" className="animate-spin text-green-500" />
              </div>
            )}

            {/* Action buttons overlay */}
            {showActions && (
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    isFavorited ? 'Remove from favorites' : 'Add to favorites'
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

            {/* Difficulty badge */}
            {recipe.difficulty && (
              <div className="absolute bottom-2 left-2">
                <span
                  className={cn(
                    'px-2 py-1 rounded-full text-xs font-medium',
                    'backdrop-blur-sm border',
                    getDifficultyColor(recipe.difficulty)
                  )}
                >
                  {recipe.difficulty}
                </span>
              </div>
            )}
          </div>

          {/* Recipe Content */}
          <div className="p-4">
            {/* Title */}
            <h3 className="font-bold text-lg leading-tight text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200 line-clamp-2 mb-2">
              {recipe.title}
            </h3>

            {/* Description */}
            {recipe.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                {recipe.description}
              </p>
            )}

            {/* Recipe metadata */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              {recipe.cookingTime && (
                <div className="flex items-center gap-1">
                  <Icon name="clock" size="sm" className="text-green-500" />
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

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {recipe.tags?.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform duration-200">
                <span className="text-sm font-medium mr-1">View Recipe</span>
                <Icon name="arrowRight" size="sm" />
              </div>
            </div>
          </div>
        </Link>
      </Card>
    );
  }
);

RecipeCard.displayName = 'RecipeCard';

export { RecipeCard };
