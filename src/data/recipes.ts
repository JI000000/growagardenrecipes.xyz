import { Recipe, RecipeCategory } from '../components/types';

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

export const popularRecipes = [
  {
    name: 'Donut Recipe',
    slug: 'donut',
    icon: '🍩',
    description: 'Learn how to make delicious donuts in Grow a Garden',
    difficulty: 'Hard',
    cookingTime: '9 minutes 37 seconds',
    color: 'from-pink-400 to-red-400',
  },
  {
    name: 'Burger Recipe',
    slug: 'burger',
    icon: '🍔',
    description: 'Master the art of making perfect burgers',
    difficulty: 'Hard',
    cookingTime: '10 minutes 32 seconds',
    color: 'from-orange-400 to-red-400',
  },
  {
    name: 'Pizza Recipe',
    slug: 'pizza',
    icon: '🍕',
    description: 'Create amazing pizzas with the best ingredients',
    difficulty: 'Medium',
    cookingTime: '7 minutes 36 seconds',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    name: 'Cake Recipe',
    slug: 'cake',
    icon: '🍰',
    description: 'Bake beautiful cakes for Chris P',
    difficulty: 'Easy',
    cookingTime: '5 minutes 55 seconds',
    color: 'from-purple-400 to-pink-400',
  },
  {
    name: 'Ice Cream Recipe',
    slug: 'ice-cream',
    icon: '🍦',
    description: 'Make refreshing ice cream treats',
    difficulty: 'Easy',
    cookingTime: '5 minutes 48 seconds',
    color: 'from-blue-400 to-purple-400',
  },
  {
    name: 'Sushi Recipe',
    slug: 'sushi',
    icon: '🍣',
    description: 'Prepare authentic sushi dishes',
    difficulty: 'Medium',
    cookingTime: '7 minutes 21 seconds',
    color: 'from-green-400 to-blue-400',
  },
];

export const allRecipes = [
  {
    name: 'Donut Recipe',
    slug: 'donut',
    icon: '🍩',
    description: 'Learn how to make delicious donuts in Grow a Garden',
    difficulty: 'Hard',
    cookingTime: '9 minutes 37 seconds',
  },
  {
    name: 'Burger Recipe',
    slug: 'burger',
    icon: '🍔',
    description: 'Master the art of making perfect burgers in Grow a Garden',
    difficulty: 'Hard',
    cookingTime: '10 minutes 32 seconds',
  },
  {
    name: 'Pizza Recipe',
    slug: 'pizza',
    icon: '🍕',
    description: 'Create amazing pizzas with the best ingredients',
    difficulty: 'Medium',
    cookingTime: '7 minutes 36 seconds',
  },
  {
    name: 'Cake Recipe',
    slug: 'cake',
    icon: '🍰',
    description: 'Bake beautiful cakes for Chris P in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '5 minutes 55 seconds',
  },
  {
    name: 'Ice Cream Recipe',
    slug: 'ice-cream',
    icon: '🍦',
    description: 'Make refreshing ice cream treats in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '5 minutes 48 seconds',
  },
  {
    name: 'Sushi Recipe',
    slug: 'sushi',
    icon: '🍣',
    description: 'Prepare authentic sushi dishes in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '7 minutes 21 seconds',
  },
  {
    name: 'Hot Dog Recipe',
    slug: 'hot-dog',
    icon: '🌭',
    description: 'Create delicious hot dogs in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '6 minutes 45 seconds',
  },
  {
    name: 'Waffle Recipe',
    slug: 'waffle',
    icon: '🧇',
    description: 'Make perfect waffles in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '5 minutes 30 seconds',
  },
  {
    name: 'Pie Recipe',
    slug: 'pie',
    icon: '🥧',
    description: 'Bake delicious pies in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '7 minutes 15 seconds',
  },
  {
    name: 'Sandwich Recipe',
    slug: 'sandwich',
    icon: '🥪',
    description: 'Create tasty sandwiches in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '5 minutes 20 seconds',
  },
  {
    name: 'Salad Recipe',
    slug: 'salad',
    icon: '🥗',
    description: 'Prepare healthy salads in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '4 minutes 50 seconds',
  },
  {
    name: 'Soup Recipe',
    slug: 'soup',
    icon: '🍲',
    description: 'Cook warm and comforting soups in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '6 minutes 30 seconds',
  },
];
