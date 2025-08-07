'use client';

import { Recipe } from '@/types';
import { cn } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';
import { RecipeCard } from './RecipeCard';

export interface PopularRecipesProps {
  onViewMore?: () => void;
  onRecipeClick?: (recipe: Recipe) => void;
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Recipe) => void;
  className?: string;
  maxRecipes?: number;
}

// Mock function to simulate API call for popular recipes
const fetchPopularRecipes = async (limit: number = 6): Promise<Recipe[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock popular recipes data - in real app this would come from API
  const mockPopularRecipes: Recipe[] = [
    {
      id: 'donut-recipe',
      title: 'How to Make Donut in Grow a Garden',
      slug: 'donut',
      description:
        'Learn how to make delicious donuts in Roblox Grow a Garden with this complete step-by-step recipe guide.',
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
      cookingTime: 15,
      ingredients: [
        { id: '1', name: 'Flour', quantity: '2 cups', isOptional: false },
        { id: '2', name: 'Sugar', quantity: '1/2 cup', isOptional: false },
        { id: '3', name: 'Oil', quantity: '1/4 cup', isOptional: false },
      ],
      steps: [
        {
          id: '1',
          stepNumber: 1,
          instruction: 'Mix flour and sugar in a bowl',
        },
        { id: '2', stepNumber: 2, instruction: 'Add oil and mix well' },
        { id: '3', stepNumber: 3, instruction: 'Shape into donuts and cook' },
      ],
      tips: ['Make sure oil is hot before cooking', "Don't overmix the dough"],
      images: [
        {
          id: '1',
          src: '/images/recipe-placeholder.svg',
          alt: 'Donut recipe',
          isPrimary: true,
        },
      ],
      tags: ['sweet', 'dessert', 'easy'],
      seoKeywords: [
        'donut recipe grow a garden',
        'how to make donut in grow a garden',
      ],
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
      isActive: true,
    },
    {
      id: 'burger-recipe',
      title: 'How to Make Burger in Grow a Garden',
      slug: 'burger',
      description:
        'Master the art of burger making in Roblox Grow a Garden with detailed ingredients and cooking steps.',
      category: {
        id: 'main-dishes',
        name: 'Main Dishes',
        slug: 'main-dishes',
        description: 'Hearty main courses and meals',
        icon: '🍔',
        seoTitle: 'Main Dish Recipes - Grow a Garden Cooking Guide',
        seoDescription: 'Master main dish recipes in Roblox Grow a Garden.',
      },
      difficulty: 'Medium',
      cookingTime: 20,
      ingredients: [
        { id: '1', name: 'Ground Beef', quantity: '1 lb', isOptional: false },
        {
          id: '2',
          name: 'Burger Buns',
          quantity: '4 pieces',
          isOptional: false,
        },
        { id: '3', name: 'Lettuce', quantity: '4 leaves', isOptional: true },
      ],
      steps: [
        { id: '1', stepNumber: 1, instruction: 'Form beef into patties' },
        { id: '2', stepNumber: 2, instruction: 'Cook patties on grill' },
        {
          id: '3',
          stepNumber: 3,
          instruction: 'Assemble burger with toppings',
        },
      ],
      tips: [
        "Don't press down on patties while cooking",
        'Let meat rest before serving',
      ],
      images: [
        {
          id: '1',
          src: '/images/recipe-placeholder.svg',
          alt: 'Burger recipe',
          isPrimary: true,
        },
      ],
      tags: ['main dish', 'hearty', 'popular'],
      seoKeywords: [
        'burger recipe grow a garden',
        'how to make burger in grow a garden',
      ],
      createdAt: new Date('2024-01-02'),
      updatedAt: new Date('2024-01-02'),
      isActive: true,
    },
    {
      id: 'pizza-recipe',
      title: 'How to Make Pizza in Grow a Garden',
      slug: 'pizza',
      description:
        'Create amazing pizzas with our comprehensive guide. Perfect for sharing with friends in the game.',
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
      ingredients: [
        { id: '1', name: 'Pizza Dough', quantity: '1 ball', isOptional: false },
        {
          id: '2',
          name: 'Tomato Sauce',
          quantity: '1/2 cup',
          isOptional: false,
        },
        { id: '3', name: 'Cheese', quantity: '1 cup', isOptional: false },
      ],
      steps: [
        { id: '1', stepNumber: 1, instruction: 'Roll out pizza dough' },
        { id: '2', stepNumber: 2, instruction: 'Spread sauce evenly' },
        { id: '3', stepNumber: 3, instruction: 'Add cheese and toppings' },
        { id: '4', stepNumber: 4, instruction: 'Bake until golden' },
      ],
      tips: [
        'Preheat oven to highest temperature',
        'Use a pizza stone for best results',
      ],
      images: [
        {
          id: '1',
          src: '/images/recipe-placeholder.svg',
          alt: 'Pizza recipe',
          isPrimary: true,
        },
      ],
      tags: ['main dish', 'challenging', 'shareable'],
      seoKeywords: [
        'pizza recipe grow a garden',
        'how to make pizza in grow a garden',
      ],
      createdAt: new Date('2024-01-03'),
      updatedAt: new Date('2024-01-03'),
      isActive: true,
    },
    {
      id: 'cake-recipe',
      title: 'How to Make Cake in Grow a Garden',
      slug: 'cake',
      description:
        'Bake delicious cakes with this comprehensive guide for Roblox Grow a Garden.',
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
      difficulty: 'Medium',
      cookingTime: 45,
      ingredients: [
        { id: '1', name: 'Flour', quantity: '3 cups', isOptional: false },
        { id: '2', name: 'Sugar', quantity: '2 cups', isOptional: false },
        { id: '3', name: 'Eggs', quantity: '3 pieces', isOptional: false },
      ],
      steps: [
        { id: '1', stepNumber: 1, instruction: 'Mix dry ingredients' },
        { id: '2', stepNumber: 2, instruction: 'Beat eggs and add to mixture' },
        { id: '3', stepNumber: 3, instruction: 'Bake in preheated oven' },
      ],
      tips: [
        'Room temperature ingredients mix better',
        "Don't open oven door while baking",
      ],
      images: [
        {
          id: '1',
          src: '/images/recipe-placeholder.svg',
          alt: 'Cake recipe',
          isPrimary: true,
        },
      ],
      tags: ['dessert', 'celebration', 'medium'],
      seoKeywords: [
        'cake recipe grow a garden',
        'how to make cake in grow a garden',
      ],
      createdAt: new Date('2024-01-04'),
      updatedAt: new Date('2024-01-04'),
      isActive: true,
    },
    {
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
      ingredients: [
        { id: '1', name: 'Heavy Cream', quantity: '2 cups', isOptional: false },
        { id: '2', name: 'Sugar', quantity: '3/4 cup', isOptional: false },
        { id: '3', name: 'Vanilla', quantity: '1 tsp', isOptional: true },
      ],
      steps: [
        {
          id: '1',
          stepNumber: 1,
          instruction: 'Whip cream until soft peaks form',
        },
        {
          id: '2',
          stepNumber: 2,
          instruction: 'Gradually add sugar and vanilla',
        },
        { id: '3', stepNumber: 3, instruction: 'Freeze until set' },
      ],
      tips: [
        'Chill bowl and beaters before whipping',
        'Stir every 30 minutes while freezing',
      ],
      images: [
        {
          id: '1',
          src: '/images/recipe-placeholder.svg',
          alt: 'Ice cream recipe',
          isPrimary: true,
        },
      ],
      tags: ['dessert', 'cold', 'refreshing'],
      seoKeywords: [
        'ice cream recipe grow a garden',
        'how to make ice cream in grow a garden',
      ],
      createdAt: new Date('2024-01-05'),
      updatedAt: new Date('2024-01-05'),
      isActive: true,
    },
    {
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
      ingredients: [
        { id: '1', name: 'Sushi Rice', quantity: '2 cups', isOptional: false },
        {
          id: '2',
          name: 'Nori Sheets',
          quantity: '4 pieces',
          isOptional: false,
        },
        { id: '3', name: 'Fresh Fish', quantity: '200g', isOptional: false },
      ],
      steps: [
        { id: '1', stepNumber: 1, instruction: 'Prepare sushi rice' },
        { id: '2', stepNumber: 2, instruction: 'Cut fish into strips' },
        { id: '3', stepNumber: 3, instruction: 'Roll sushi with nori' },
      ],
      tips: [
        'Use sharp knife for clean cuts',
        'Keep hands wet when handling rice',
      ],
      images: [
        {
          id: '1',
          src: '/images/recipe-placeholder.svg',
          alt: 'Sushi recipe',
          isPrimary: true,
        },
      ],
      tags: ['special', 'advanced', 'japanese'],
      seoKeywords: [
        'sushi recipe grow a garden',
        'how to make sushi in grow a garden',
      ],
      createdAt: new Date('2024-01-06'),
      updatedAt: new Date('2024-01-06'),
      isActive: true,
    },
  ];

  return mockPopularRecipes.slice(0, limit);
};

export const PopularRecipes: React.FC<PopularRecipesProps> = ({
  onViewMore,
  onRecipeClick,
  onFavorite,
  onShare,
  className,
  maxRecipes = 6,
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load popular recipes
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const popularRecipes = await fetchPopularRecipes(maxRecipes);
        setRecipes(popularRecipes);
      } catch (err) {
        setError('Failed to load popular recipes');
        console.error('Error loading popular recipes:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, [maxRecipes]);

  const handleRecipeClick = useCallback(
    (recipe: Recipe) => {
      onRecipeClick?.(recipe);
    },
    [onRecipeClick]
  );

  const handleFavorite = useCallback(
    (recipeId: string) => {
      onFavorite?.(recipeId);
    },
    [onFavorite]
  );

  const handleShare = useCallback(
    (recipe: Recipe) => {
      onShare?.(recipe);
    },
    [onShare]
  );

  const handleViewMore = useCallback(() => {
    onViewMore?.();
  }, [onViewMore]);

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
              Failed to Load Popular Recipes
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
    <section className={cn('py-16 bg-white dark:bg-gray-900', className)}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-4 shadow-lg">
            <Icon
              name="trophy"
              className="text-white"
              size="lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Popular Recipes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the most loved recipes in Grow a Garden. These fan-favorite
            dishes are perfect for players of all skill levels.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: maxRecipes }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-dark-800 rounded-xl p-6 animate-pulse"
              >
                <div className="aspect-video bg-gray-200 dark:bg-dark-700 rounded-lg mb-4" />
                <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded mb-2" />
                <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded mb-4 w-3/4" />
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-16" />
                  <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-20" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Recipes Grid */}
        {!isLoading && recipes.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {recipes.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className={cn(
                    'animate-scale-in',
                    index === 0 && 'animation-delay-200',
                    index === 1 && 'animation-delay-400',
                    index === 2 && 'animation-delay-600',
                    index === 3 && 'animation-delay-800',
                    index === 4 && 'animation-delay-1000',
                    index === 5 && 'animation-delay-1200'
                  )}
                >
                  <RecipeCard
                    recipe={recipe}
                    onClick={() => handleRecipeClick(recipe)}
                    onFavorite={handleFavorite}
                    onShare={handleShare}
                    className="transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-game-xl group"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced View More Section */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-game rounded-2xl blur opacity-20 animate-pulse-glow" />
                <Button
                  variant="game"
                  size="lg"
                  onClick={handleViewMore}
                  className="relative px-12 py-6 text-xl shadow-game-xl hover:shadow-glow-lg transition-all duration-300"
                >
                  <Icon name="grid" size="lg" className="mr-3" />
                  View All Recipes
                </Button>
              </div>
              <p className="text-lg text-slate-500 dark:text-slate-400 mt-4 font-medium">
                Discover {recipes.length}+ more amazing recipes
              </p>
              
              {/* Stats bar */}
              <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                  <span>Updated Daily</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse animation-delay-500" />
                  <span>Community Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse animation-delay-1000" />
                  <span>Step-by-Step</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && recipes.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-dark-800 rounded-full mb-4">
              <Icon name="search" className="text-gray-400" size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Popular Recipes Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back later for the latest popular recipes from the
              community.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
