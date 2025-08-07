'use client';

import { Recipe } from '@/types';
import { cn } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export interface LatestUpdatesProps {
  onRecipeClick?: (recipe: Recipe) => void;
  onViewAll?: () => void;
  className?: string;
  maxItems?: number;
}

interface LatestUpdate {
  id: string;
  type: 'new_recipe' | 'updated_recipe' | 'game_update';
  title: string;
  description: string;
  date: Date;
  recipe?: Recipe;
  badge?: string;
  icon: string;
}

// Mock function to simulate API call for latest updates
const fetchLatestUpdates = async (
  limit: number = 6
): Promise<LatestUpdate[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));

  // Mock latest updates data - in real app this would come from API
  const mockUpdates: LatestUpdate[] = [
    {
      id: 'update-1',
      type: 'new_recipe',
      title: 'New Sushi Recipe Added!',
      description:
        'Master the art of sushi making with our detailed step-by-step guide.',
      date: new Date('2024-02-06'),
      badge: 'NEW',
      icon: '🍣',
      recipe: {
        id: 'sushi-recipe',
        title: 'How to Make Sushi in Grow a Garden',
        slug: 'sushi',
        description:
          'Master the art of sushi making with this detailed guide for Roblox Grow a Garden.',
        category: {
          id: 'special',
          name: 'Special Dishes',
          slug: 'special',
          description: 'Unique and special recipes',
          icon: '🍣',
          seoTitle: 'Special Recipes - Grow a Garden Cooking Guide',
          seoDescription:
            'Discover special and unique recipes in Roblox Grow a Garden.',
        },
        difficulty: 'Hard',
        cookingTime: 40,
        ingredients: [],
        steps: [],
        tips: [],
        images: [],
        tags: ['special', 'advanced', 'japanese'],
        seoKeywords: ['sushi recipe grow a garden'],
        createdAt: new Date('2024-02-06'),
        updatedAt: new Date('2024-02-06'),
        isActive: true,
      },
    },
    {
      id: 'update-2',
      type: 'updated_recipe',
      title: 'Pizza Recipe Updated',
      description:
        'Added new toppings and improved cooking instructions based on community feedback.',
      date: new Date('2024-02-05'),
      badge: 'UPDATED',
      icon: '🍕',
      recipe: {
        id: 'pizza-recipe',
        title: 'How to Make Pizza in Grow a Garden',
        slug: 'pizza',
        description: 'Create amazing pizzas with our comprehensive guide.',
        category: {
          id: 'main-dishes',
          name: 'Main Dishes',
          slug: 'main-dishes',
          description: 'Hearty main courses and meals',
          icon: '🍔',
          seoTitle: 'Main Dish Recipes - Grow a Garden Cooking Guide',
          seoDescription: 'Master main dish recipes in Roblox Grow a Garden.',
        },
        difficulty: 'Hard',
        cookingTime: 30,
        ingredients: [],
        steps: [],
        tips: [],
        images: [],
        tags: ['main dish', 'challenging', 'shareable'],
        seoKeywords: ['pizza recipe grow a garden'],
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-02-05'),
        isActive: true,
      },
    },
    {
      id: 'update-3',
      type: 'game_update',
      title: 'Cooking System Update',
      description:
        'New cooking mechanics and ingredients added to Grow a Garden game.',
      date: new Date('2024-02-04'),
      badge: 'GAME UPDATE',
      icon: '🎮',
    },
    {
      id: 'update-4',
      type: 'new_recipe',
      title: 'Ice Cream Recipe Available',
      description:
        'Cool down with our new homemade ice cream recipe perfect for summer.',
      date: new Date('2024-02-03'),
      badge: 'NEW',
      icon: '🍦',
      recipe: {
        id: 'ice-cream-recipe',
        title: 'How to Make Ice Cream in Grow a Garden',
        slug: 'ice-cream',
        description:
          'Cool down with homemade ice cream recipes perfect for Roblox Grow a Garden.',
        category: {
          id: 'desserts',
          name: 'Desserts',
          slug: 'desserts',
          description: 'Sweet treats and desserts from Grow a Garden',
          icon: '🍰',
          seoTitle: 'Dessert Recipes - Grow a Garden Cooking Guide',
          seoDescription:
            'Learn how to make delicious desserts in Roblox Grow a Garden.',
        },
        difficulty: 'Easy',
        cookingTime: 25,
        ingredients: [],
        steps: [],
        tips: [],
        images: [],
        tags: ['dessert', 'cold', 'refreshing'],
        seoKeywords: ['ice cream recipe grow a garden'],
        createdAt: new Date('2024-02-03'),
        updatedAt: new Date('2024-02-03'),
        isActive: true,
      },
    },
    {
      id: 'update-5',
      type: 'updated_recipe',
      title: 'Burger Recipe Enhanced',
      description:
        'Added cooking tips and alternative ingredients for better burger making.',
      date: new Date('2024-02-02'),
      badge: 'UPDATED',
      icon: '🍔',
    },
    {
      id: 'update-6',
      type: 'new_recipe',
      title: 'Waffle Recipe Now Live',
      description:
        'Start your day right with our easy-to-follow waffle recipe.',
      date: new Date('2024-02-01'),
      badge: 'NEW',
      icon: '🧇',
    },
  ];

  return mockUpdates.slice(0, limit);
};

export const LatestUpdates: React.FC<LatestUpdatesProps> = ({
  onRecipeClick,
  onViewAll,
  className,
  maxItems = 6,
}) => {
  const [updates, setUpdates] = useState<LatestUpdate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load latest updates
  useEffect(() => {
    const loadUpdates = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const latestUpdates = await fetchLatestUpdates(maxItems);
        setUpdates(latestUpdates);
      } catch (err) {
        setError('Failed to load latest updates');
        console.error('Error loading latest updates:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadUpdates();
  }, [maxItems]);

  const handleUpdateClick = useCallback(
    (update: LatestUpdate) => {
      if (update.recipe) {
        onRecipeClick?.(update.recipe);
      }
    },
    [onRecipeClick]
  );

  const handleViewAll = useCallback(() => {
    onViewAll?.();
  }, [onViewAll]);

  const formatDate = useCallback((date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  }, []);

  const getBadgeColor = useCallback((type: LatestUpdate['type']) => {
    switch (type) {
      case 'new_recipe':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'updated_recipe':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'game_update':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  }, []);

  if (error) {
    return (
      <section className={cn('py-16', className)}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
              <Icon
                name="alert"
                className="text-red-600 dark:text-red-400"
                size="lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Failed to Load Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              <Icon name="loader" size="sm" className="mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-24 bg-gradient-to-br from-white via-orange-50/30 to-secondary-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900', className)}>
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex-1">
            <div className="flex items-center mb-6">
              <div className="relative mr-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full blur-lg opacity-20 animate-pulse-glow" />
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full shadow-game-xl">
                  <Icon
                    name="sparkles"
                    className="text-white"
                    size="lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient-secondary text-shadow">
                  Latest Updates
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mt-2 animate-gradient-shift" />
              </div>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              Stay up to date with the newest recipes, improvements, and game
              updates.
            </p>
          </div>

          {!isLoading && updates.length > 0 && (
            <Button
              variant="outline"
              onClick={handleViewAll}
              className="hidden md:flex"
            >
              <Icon name="arrowRight" size="sm" className="mr-2" />
              View All Updates
            </Button>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl animate-pulse"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-dark-700 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-20" />
                    <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-16" />
                  </div>
                  <div className="h-5 bg-gray-200 dark:bg-dark-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Updates List */}
        {!isLoading && updates.length > 0 && (
          <>
            <div className="space-y-4 mb-8">
              {updates.map(update => (
                <div
                  key={update.id}
                  className={cn(
                    'flex items-start space-x-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl',
                    'transition-all duration-200 hover:shadow-md',
                    update.recipe &&
                      'cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-700'
                  )}
                  onClick={() => handleUpdateClick(update)}
                >
                  {/* Update Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white dark:bg-dark-900 rounded-full flex items-center justify-center text-2xl shadow-sm">
                      {update.icon}
                    </div>
                  </div>

                  {/* Update Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={cn(
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                          getBadgeColor(update.type)
                        )}
                      >
                        {update.badge}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(update.date)}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {update.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {update.description}
                    </p>
                  </div>

                  {/* Arrow for clickable items */}
                  {update.recipe && (
                    <div className="flex-shrink-0">
                      <Icon
                        name="arrowRight"
                        className="text-gray-400 group-hover:text-primary-500"
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="text-center md:hidden">
              <Button
                variant="outline"
                onClick={handleViewAll}
                className="w-full"
              >
                <Icon name="arrowRight" size="sm" className="mr-2" />
                View All Updates
              </Button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && updates.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-dark-800 rounded-full mb-4">
              <Icon name="sparkles" className="text-gray-400" size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Updates Available
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back later for the latest recipe updates and game news.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
