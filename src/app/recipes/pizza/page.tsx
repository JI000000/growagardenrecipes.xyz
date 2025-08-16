/* eslint-disable react/no-unescaped-entities */
import {
  Breadcrumbs,
  RecipeShareButtons,
  RecipeStructuredData,
} from '@/components';
import { detailedRecipes } from '@/data/detailedRecipes';
import { allRecipes } from '@/data/recipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pizza Recipe in Grow a Garden - Complete Cooking Guide 2025',
  description:
    'Master how to make Pizza in Grow a Garden with our complete recipe guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'pizza grow a garden',
    'how to make pizza in grow a garden',
    'pizza recipe grow a garden',
    'grow a garden pizza recipe',
    'best pizza grow a garden',
    'grow a garden pizza ingredients',
    'pizza cooking time grow a garden',
    'grow a garden pizza rewards',
    'grow a garden prismatic pizza',
    'pizza 2025 update grow a garden',
    'grow a garden pizza guide',
    'roblox grow a garden pizza',
    'pizza perfect timing grow a garden',
  ],
  openGraph: {
    title: 'Pizza Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Pizza in Grow a Garden with our complete recipe guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/pizza',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/pizza-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Pizza in Grow a Garden with our complete recipe guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/pizza-recipe.jpg'],
  },
};

// 获取比萨食谱数据
const pizzaRecipe = detailedRecipes['pizza'] || {
  name: 'Pizza',
  slug: 'pizza',
  icon: '🍕',
  description:
    'Create amazing pizzas with the best ingredients in Grow a Garden',
  difficulty: 'Medium',
  cookingTime: '7 minutes 36 seconds',
  ingredients: [
    {
      name: 'Giant Pinecone',
      quantity: 1,
      rarity: 'Rare',
      location: 'Forest area (Large trees)',
      icon: '🌲',
    },
    {
      name: 'Corn',
      quantity: 1,
      rarity: 'Uncommon',
      location: 'Farm plots (Yellow seeds)',
      icon: '🌽',
    },
    {
      name: 'Apple',
      quantity: 1,
      rarity: 'Common',
      location: 'Orchard area (Red fruit trees)',
      icon: '🍎',
    },
    {
      name: 'Mushroom',
      quantity: 1,
      rarity: 'Uncommon',
      location: 'Shaded areas and caves',
      icon: '🍄',
    },
    {
      name: 'Pepper',
      quantity: 1,
      rarity: 'Common',
      location: 'Farm plots (Green seeds)',
      icon: '🌶️',
    },
  ],
  steps: [
    {
      step: 1,
      description: 'Add Giant Pinecone to the cooking pot',
      timing: '0:00',
      tip: 'The Giant Pinecone forms the base of your pizza dough',
    },
    {
      step: 2,
      description: 'Add Corn and stir in circular motion',
      timing: '1:30',
      tip: 'Keep stirring until the mixture turns golden yellow',
    },
    {
      step: 3,
      description: 'Add Apple and continue stirring',
      timing: '3:15',
      tip: 'The apple adds sweetness to balance the flavors',
    },
    {
      step: 4,
      description: 'Add Mushroom and press mixture flat',
      timing: '5:00',
      tip: 'Press down with spatula to form a flat round shape',
    },
    {
      step: 5,
      description: 'Add Pepper as final topping',
      timing: '6:30',
      tip: 'Sprinkle evenly across the top',
    },
    {
      step: 6,
      description: 'Wait for pizza to finish cooking',
      timing: '7:36',
      tip: 'The pizza is ready when the edges turn slightly brown',
    },
  ],
  rewards: {
    normal: 'Sheckles (120-180)',
    perfect: 'Deluxe Sheckles (200-280) + Chance for Garden Tool',
    prismatic: 'Premium Sheckles (500-700) + Guaranteed Rare Item',
  },
  tips: [
    'The perfect cooking time is exactly 7 minutes and 36 seconds',
    'Using higher rarity ingredients will significantly increase rewards',
    "Pizza is one of Chris P's favorite dinner items during evening events (6PM-9PM game time)",
    'The 2025 update added "Spicy Sauce" as an optional ingredient that increases reward value by 20%',
    'Pizza makes an excellent gift for the Kitsune character, increasing friendship points by 30%',
  ],
  variations: [
    {
      name: 'Veggie Pizza',
      ingredients: 'Substitute Apple with another Mushroom',
      effect: 'Increases health regeneration for 15 minutes in-game',
    },
    {
      name: 'Spicy Pizza',
      ingredients: 'Add 2x Pepper instead of 1x',
      effect: 'Grants "Speed Boost" buff for 10 minutes',
    },
    {
      name: 'Prismatic Pizza',
      ingredients: 'Use all Prismatic-tier ingredients',
      effect:
        'Highest possible rewards, has a chance to attract the Raiju spirit',
    },
  ],
  relatedRecipes: ['burger', 'sandwich', 'hot-dog'],
};

export default function PizzaRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = pizzaRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Pizza Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Pizza Recipe - Grow a Garden"
        recipeDescription="Create amazing pizzas with the best ingredients in Grow a Garden. Perfect for feeding Chris P Bacon. Updated for 2025."
        recipeImage="/images/pizza-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT30S"
        cookTime="PT7M36S"
        totalTime="PT8M"
        recipeYield="1 serving"
        recipeCategory="Main Dish"
        recipeCuisine="Game Food"
        ingredients={pizzaRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit:
            ing.name === 'Pepper' || ing.name === 'Apple' ? 'piece' : 'unit',
        }))}
        instructions={pizzaRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'pizza grow a garden',
          'how to make pizza in grow a garden',
          'pizza recipe grow a garden',
          'grow a garden pizza recipe',
          'best pizza grow a garden',
          'grow a garden pizza ingredients',
          'pizza cooking time grow a garden',
          'grow a garden pizza rewards',
          'grow a garden prismatic pizza',
          'pizza 2025 update grow a garden',
          'roblox grow a garden pizza',
        ]}
        difficulty={pizzaRecipe.difficulty}
      />

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                MAIN DISH RECIPE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-red-900 mb-6">
                How to Make Pizza
              </h1>
              <h2 className="text-xl md:text-2xl text-red-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-red-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>pizza recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, cooking times,
                and secret techniques for creating the most delicious and
                rewarding pizza dish.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-red-600">⏱️</span>
                  <span className="text-sm font-medium text-red-900">
                    {pizzaRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-red-600">⭐</span>
                  <span className="text-sm font-medium text-red-900">
                    {pizzaRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-red-600">🧩</span>
                  <span className="text-sm font-medium text-red-900">
                    {pizzaRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="Pizza Recipe - Grow a Garden"
                  description="Check out this amazing Pizza recipe for Grow a Garden!"
                  colorScheme="red"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-red-200 to-orange-300 rounded-full shadow-xl">
                  <span className="text-9xl">{pizzaRecipe.icon}</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">⭐</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#ingredients"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View Ingredients
            </a>
            <a
              href="#steps"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Cooking Steps
            </a>
            <a
              href="#rewards"
              className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Rewards & Tips
            </a>
            <a
              href="#prismatic"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Prismatic Pizza
            </a>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4">
              Pizza Ingredients
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect pizza in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {pizzaRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-red-50 rounded-xl p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-red-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-red-600">
                      Quantity: {ingredient.quantity}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium px-2 py-1 bg-red-100 text-red-800 rounded inline-block">
                    {ingredient.rarity} Rarity
                  </p>
                  <p className="text-sm text-red-700">
                    <strong>Where to find:</strong> {ingredient.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-red-900 text-xl mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-red-800">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Higher rarity ingredients will significantly improve the quality
                and rewards of your pizza.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                The Giant Pinecone can be substituted with a regular Pinecone,
                but cooking time will be reduced and so will rewards.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                For a spicier pizza, use Rare or higher Pepper for an extra
                kick.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                During the Summer Festival event, pizza ingredients have a 15%
                chance to be automatically upgraded one rarity level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-red-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4">
              Step-by-Step Cooking Guide
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Follow these precise steps to cook the perfect pizza in Grow a
              Garden. Timing is crucial for the best results!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-9 top-0 h-full w-0.5 bg-red-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {pizzaRecipe.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-0 rounded-full h-18 w-18 flex items-center justify-center bg-red-100 border-4 border-red-200 z-10">
                        <span className="text-xl font-bold text-red-800">
                          {step.step}
                        </span>
                      </div>
                      <div className="pl-24">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-red-900">
                              {step.description}
                            </h3>
                            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-red-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-6 border border-red-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚠️</span>
              <h3 className="font-bold text-lg text-red-900">
                Important Timing Notes
              </h3>
            </div>
            <p className="text-red-700 mb-4">
              The perfect cooking time for pizza is exactly 7 minutes and 36
              seconds. Overcooking or undercooking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>0:00-1:30:</strong> The pot should gradually change to a
                light red color
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>1:30-3:15:</strong> Yellow swirls appear in the mixture
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>3:15-5:00:</strong> The mixture will flatten and expand
                slightly
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>5:00-6:30:</strong> Brown spots begin to appear on
                surface
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>6:30-7:36:</strong> The edges will crisp up and turn
                golden brown
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rewards & Tips Section */}
      <section id="rewards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4">
              Rewards & Expert Tips
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Learn about the rewards for perfect pizza and advanced tips to
              maximize your benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100 shadow-md">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span> Reward Tiers
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">
                    Normal Quality
                  </h4>
                  <p className="text-red-700">{pizzaRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-red-700">{pizzaRecipe.rewards.perfect}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-red-700">
                    {pizzaRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100 shadow-md">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {pizzaRecipe.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg p-4 border border-red-100"
                  >
                    <p className="text-red-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
              Recipe Variations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pizzaRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-red-900 mb-3">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-red-700 mb-4">
                    <strong>Special Ingredients:</strong>
                    <br />
                    {variation.ingredients}
                  </p>
                  <p className="text-sm text-red-700">
                    <strong>Effect:</strong>
                    <br />
                    {variation.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prismatic Pizza Section */}
          <div
            id="prismatic"
            className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Pizza
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>

            <p className="text-purple-700 mb-6">
              The Prismatic version of Pizza is one of the most rewarding
              recipes in Grow a Garden. This special variant requires
              Prismatic-tier ingredients and precise timing, but offers
              exceptional rewards and unique effects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/80 backdrop-blur rounded-lg p-5 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-3">
                  Prismatic Requirements
                </h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    All ingredients must be Prismatic-tier quality
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Perfect timing (exactly 7 minutes 36 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be cooked during a Rainbow Phase (occurs every 3 hours)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the &quot;Rainbow Chef&quot; ability (unlocked at
                    level 40)
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-lg p-5 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-3">
                  Special Rewards
                </h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Premium Sheckles (400-500)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Rare Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    25% chance to attract the Raiju spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    &quot;Pizza Master&quot; temporary title (24 hours)
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/recipes/prismatic"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md"
              >
                View All Prismatic Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Explore these other main dish recipes in Grow a Garden!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedRecipes.map(
              (recipe, index) =>
                recipe && (
                  <Link
                    key={index}
                    href={`/recipes/${recipe.slug}`}
                    className="bg-white rounded-xl p-6 border border-red-100 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform transition-transform"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{recipe.icon}</span>
                      <div>
                        <h3 className="font-bold text-red-900">
                          {recipe.name}
                        </h3>
                        <p className="text-sm text-red-600">
                          {recipe.difficulty} • {recipe.cookingTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-red-700">{recipe.description}</p>
                  </Link>
                )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
