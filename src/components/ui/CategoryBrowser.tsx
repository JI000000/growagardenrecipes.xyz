'use client';

import { RecipeCategory } from '@/types';
import { cn } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export interface CategoryBrowserProps {
  onCategoryClick?: (category: RecipeCategory) => void;
  className?: string;
  showRecipeCount?: boolean;
}

interface CategoryWithCount extends RecipeCategory {
  recipeCount: number;
  previewRecipes: string[]; // Recipe titles for preview
}

// Mock function to simulate API call for categories with recipe counts
const fetchCategoriesWithCounts = async (): Promise<CategoryWithCount[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Mock categories data with counts - in real app this would come from API
  const mockCategories: CategoryWithCount[] = [
    {
      id: 'desserts',
      name: 'Desserts',
      slug: 'desserts',
      description: 'Sweet treats and desserts from Grow a Garden',
      icon: '🍰',
      seoTitle: 'Dessert Recipes - Grow a Garden Cooking Guide',
      seoDescription:
        'Learn how to make delicious desserts in Roblox Grow a Garden. Complete recipes for donuts, cakes, ice cream, and more.',
      recipeCount: 12,
      previewRecipes: [
        'Donut Recipe',
        'Cake Recipe',
        'Ice Cream Recipe',
        'Pie Recipe',
      ],
    },
    {
      id: 'main-dishes',
      name: 'Main Dishes',
      slug: 'main-dishes',
      description: 'Hearty main courses and meals',
      icon: '🍔',
      seoTitle: 'Main Dish Recipes - Grow a Garden Cooking Guide',
      seoDescription:
        'Master main dish recipes in Roblox Grow a Garden. Step-by-step guides for burgers, pizza, sandwiches, and hot dogs.',
      recipeCount: 15,
      previewRecipes: [
        'Burger Recipe',
        'Pizza Recipe',
        'Sandwich Recipe',
        'Hot Dog Recipe',
      ],
    },
    {
      id: 'snacks',
      name: 'Snacks',
      slug: 'snacks',
      description: 'Quick snacks and light meals',
      icon: '🥨',
      seoTitle: 'Snack Recipes - Grow a Garden Cooking Guide',
      seoDescription:
        'Quick and easy snack recipes for Roblox Grow a Garden. Learn to make waffles, salads, and more.',
      recipeCount: 8,
      previewRecipes: [
        'Waffle Recipe',
        'Salad Recipe',
        'Pretzel Recipe',
        'Chips Recipe',
      ],
    },
    {
      id: 'special',
      name: 'Special Dishes',
      slug: 'special',
      description: 'Unique and special recipes',
      icon: '🍣',
      seoTitle: 'Special Recipes - Grow a Garden Cooking Guide',
      seoDescription:
        'Discover special and unique recipes in Roblox Grow a Garden including sushi and other specialty dishes.',
      recipeCount: 6,
      previewRecipes: [
        'Sushi Recipe',
        'Ramen Recipe',
        'Curry Recipe',
        'Stir Fry Recipe',
      ],
    },
  ];

  return mockCategories;
};

export const CategoryBrowser: React.FC<CategoryBrowserProps> = ({
  onCategoryClick,
  className,
  showRecipeCount = true,
}) => {
  const [categories, setCategories] = useState<CategoryWithCount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Load categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const categoriesData = await fetchCategoriesWithCounts();
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to load recipe categories');
        console.error('Error loading categories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = useCallback(
    (category: RecipeCategory) => {
      onCategoryClick?.(category);
    },
    [onCategoryClick]
  );

  const handleCategoryHover = useCallback((categoryId: string | null) => {
    setHoveredCategory(categoryId);
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
              Failed to Load Categories
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
    <section className={cn('py-24 bg-gradient-to-br from-white via-slate-50 to-accent-50/30 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800', className)}>
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full blur-xl opacity-20 animate-pulse-glow" />
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full shadow-game-xl">
              <Icon
                name="grid"
                className="text-white"
                size="xl"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-gradient-secondary mb-6 text-shadow">
            Browse by Category
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full mx-auto mb-6 animate-gradient-shift" />
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of recipes organized by food
            type. Find exactly what you're looking for.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-game animate-pulse"
              >
                <div className="w-16 h-16 bg-gray-200 dark:bg-dark-700 rounded-full mx-auto mb-4" />
                <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded mb-2" />
                <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded mb-4" />
                <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-20 mx-auto" />
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Categories Grid */}
        {!isLoading && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={cn(
                  'relative group animate-scale-in',
                  index === 0 && 'animation-delay-200',
                  index === 1 && 'animation-delay-400',
                  index === 2 && 'animation-delay-600',
                  index === 3 && 'animation-delay-800'
                )}
                onMouseEnter={() => handleCategoryHover(category.id)}
                onMouseLeave={() => handleCategoryHover(null)}
              >
                {/* Enhanced Main Category Card */}
                <div
                  className={cn(
                    'relative bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-game-lg cursor-pointer overflow-hidden',
                    'transform transition-all duration-500 hover:scale-110 hover:shadow-game-xl hover:-rotate-2',
                    'border border-white/20 dark:border-dark-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50'
                  )}
                  onClick={() => handleCategoryClick(category)}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-primary-950/20 dark:to-accent-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                  {/* Category Icon */}
                  <div className="relative text-center mb-6">
                    <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                      {category.icon}
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-shift" />
                  </div>

                  {/* Category Info */}
                  <div className="relative text-center">
                    <h3 className="text-2xl font-orbitron font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-gradient-primary transition-all duration-300">
                      {category.name}
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Recipe Count */}
                    {showRecipeCount && (
                      <div className="inline-flex items-center space-x-2 text-base text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200/50 dark:border-primary-800/50 group-hover:bg-primary-100/80 dark:group-hover:bg-primary-900/50 transition-all duration-300">
                        <Icon name="chef" size="sm" />
                        <span className="font-semibold">
                          {category.recipeCount} recipe
                          {category.recipeCount !== 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                      <Icon
                        name="arrowRight"
                        className="text-white"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Preview Popup */}
                {hoveredCategory === category.id && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl rounded-xl shadow-game-xl border border-white/20 dark:border-dark-700/50 p-6 z-10 animate-scale-in">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 dark:bg-dark-900/95 border-l border-t border-white/20 dark:border-dark-700/50 rotate-45" />
                    <h4 className="font-orbitron font-bold text-slate-900 dark:text-slate-100 mb-4 text-base">
                      Popular in {category.name}:
                    </h4>
                    <ul className="space-y-3">
                      {category.previewRecipes
                        .slice(0, 3)
                        .map((recipeName, index) => (
                          <li
                            key={index}
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-center group/item"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                              <Icon
                                name="chef"
                                size="xs"
                                className="text-white"
                              />
                            </div>
                            <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-200">
                              {recipeName}
                            </span>
                          </li>
                        ))}
                      {category.previewRecipes.length > 3 && (
                        <li className="text-sm text-primary-600 dark:text-primary-400 font-semibold flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full flex items-center justify-center mr-3">
                            <Icon
                              name="plus"
                              size="xs"
                              className="text-white"
                            />
                          </div>
                          +{category.previewRecipes.length - 3} more recipes
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Call to Action */}
        {!isLoading && categories.length > 0 && (
          <div className="text-center mt-16">
            <div className="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-dark-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-slate-900 dark:text-slate-100 mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Use our powerful search to find any recipe in seconds
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-4 text-lg border-2 border-accent-500 text-accent-600 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-950/20 transition-all duration-300"
              >
                <Icon name="search" size="lg" className="mr-3" />
                Search All Recipes
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && categories.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-dark-800 rounded-full mb-4">
              <Icon name="grid" className="text-gray-400" size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Categories Available
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Recipe categories are being updated. Please check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
