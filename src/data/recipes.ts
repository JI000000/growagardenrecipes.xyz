import { Recipe, RecipeCategory } from '@/types';

// Recipe categories
export const recipeCategories: RecipeCategory[] = [
  {
    id: 'desserts',
    name: 'Desserts',
    slug: 'desserts',
    description: 'Sweet treats and desserts from Grow a Garden',
    icon: '🍰',
    seoTitle: 'Dessert Recipes - Grow a Garden Cooking Guide',
    seoDescription:
      'Learn how to make delicious desserts in Roblox Grow a Garden. Complete recipes for donuts, cakes, ice cream, and more.',
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
  },
];

// Sample recipes data (will be expanded in later tasks)
export const sampleRecipes: Partial<Recipe>[] = [
  {
    id: 'donut-recipe',
    title: 'How to Make Donut in Grow a Garden',
    slug: 'donut',
    description:
      'Learn how to make delicious donuts in Roblox Grow a Garden with this complete step-by-step recipe guide.',
    category: recipeCategories[0], // Desserts
    difficulty: 'Easy',
    cookingTime: 15,
    tags: ['sweet', 'dessert', 'easy'],
    seoKeywords: [
      'donut recipe grow a garden',
      'how to make donut in grow a garden',
      'donut grow a garden',
    ],
  },
  {
    id: 'burger-recipe',
    title: 'How to Make Burger in Grow a Garden',
    slug: 'burger',
    description:
      'Master the art of burger making in Roblox Grow a Garden with detailed ingredients and cooking steps.',
    category: recipeCategories[1], // Main Dishes
    difficulty: 'Medium',
    cookingTime: 20,
    tags: ['main dish', 'hearty', 'popular'],
    seoKeywords: [
      'burger recipe grow a garden',
      'how to make burger in grow a garden',
      'burger grow a garden',
    ],
  },
  {
    id: 'pizza-recipe',
    title: 'How to Make Pizza in Grow a Garden',
    slug: 'pizza',
    description:
      'Create amazing pizzas with our comprehensive guide. Perfect for sharing with friends in the game.',
    category: recipeCategories[1], // Main Dishes
    difficulty: 'Hard',
    cookingTime: 30,
    tags: ['main dish', 'challenging', 'shareable'],
    seoKeywords: [
      'pizza recipe grow a garden',
      'how to make pizza in grow a garden',
      'pizza grow a garden',
    ],
  },
  {
    id: 'waffle-recipe',
    title: 'How to Make Waffle in Grow a Garden',
    slug: 'waffle',
    description:
      'Quick and easy waffle recipe perfect for breakfast or snacks in Grow a Garden.',
    category: recipeCategories[2], // Snacks
    difficulty: 'Easy',
    cookingTime: 10,
    tags: ['snack', 'breakfast', 'quick'],
    seoKeywords: [
      'waffle recipe grow a garden',
      'how to make waffle in grow a garden',
      'waffle grow a garden',
    ],
  },
];
