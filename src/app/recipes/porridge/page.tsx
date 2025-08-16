import { Breadcrumbs, RecipeStructuredData } from '@/components';
import { detailedRecipes } from '@/data/detailedRecipes';
import { allRecipes } from '@/data/recipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Porridge Recipe in Grow a Garden - Complete Cooking Guide 2025',
  description:
    'Master how to make Porridge in Grow a Garden with our complete recipe guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'porridge grow a garden',
    'how to make porridge in grow a garden',
    'porridge recipe grow a garden',
    'grow a garden porridge recipe',
    'best porridge grow a garden',
    'grow a garden porridge ingredients',
    'porridge cooking time grow a garden',
    'grow a garden porridge rewards',
    'porridge 2025 update grow a garden',
    'grow a garden porridge guide',
    'roblox grow a garden porridge',
    'porridge perfect timing grow a garden',
    'easy porridge recipe grow a garden',
  ],
  openGraph: {
    title: 'Porridge Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Porridge in Grow a Garden with our complete recipe guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/porridge',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/porridge-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Porridge Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porridge Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Porridge in Grow a Garden with our complete recipe guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/porridge-recipe.jpg'],
  },
};

// 获取粥食谱数据
const porridgeRecipe = detailedRecipes['porridge'] || {
  name: 'Porridge',
  slug: 'porridge',
  icon: '🥣',
  difficulty: 'Easy',
  cookingTime: '4 minutes 25 seconds',
  description:
    'A warm and comforting porridge, perfect for breakfast in Grow a Garden.',
  ingredients: [
    {
      name: 'Oats',
      quantity: 2,
      rarity: 'Common',
      location: 'Farm plots (Common seed)',
      icon: '🌾',
    },
    {
      name: 'Milk',
      quantity: 1,
      rarity: 'Common',
      location: 'Grocery store',
      icon: '🥛',
    },
    {
      name: 'Berry',
      quantity: 1,
      rarity: 'Uncommon',
      location: 'Forest area (Blue bush)',
      icon: '🍓',
    },
    {
      name: 'Honey',
      quantity: 1,
      rarity: 'Uncommon',
      location: 'Bee farm (Requires bee keeper hat)',
      icon: '🍯',
    },
  ],
  steps: [
    {
      step: 1,
      description: 'Add Oats to the cooking pot',
      timing: '0:00',
      tip: 'Make sure the pot is clean before adding ingredients',
    },
    {
      step: 2,
      description: 'Add Milk and stir gently',
      timing: '0:30',
      tip: 'Stir in a clockwise direction for best results',
    },
    {
      step: 3,
      description: 'Wait for mixture to simmer',
      timing: '1:30',
      tip: 'The pot should change to a creamy beige color',
    },
    {
      step: 4,
      description: 'Add Berry and continue stirring',
      timing: '2:15',
      tip: 'Try to time this precisely for perfect consistency',
    },
    {
      step: 5,
      description: 'Add Honey and stir quickly',
      timing: '3:00',
      tip: 'Mix thoroughly until you see small sparkles',
    },
    {
      step: 6,
      description: 'Wait until the dish is complete',
      timing: '4:25',
      tip: 'The porridge is ready when it gives off a gentle steam',
    },
  ],
  rewards: {
    normal: 'Basic Sheckles (50-75)',
    perfect: 'Deluxe Sheckles (100-150) + Chance for Basic Garden Tool',
    prismatic: 'Luxury Sheckles (250-350) + Guaranteed Uncommon Item',
  },
  tips: [
    'The perfect cooking time is exactly 4 minutes and 25 seconds',
    'Using higher rarity ingredients will significantly increase rewards',
    "Porridge is one of Chris P's favorite breakfast items during morning events (6AM-10AM game time)",
    'The 2025 update added a "Golden Honey" rare ingredient that can substitute for regular Honey with 2x effectiveness',
    'Porridge makes an excellent gift for the Tanuki character, increasing friendship points by 25%',
  ],
  variations: [
    {
      name: 'Berry Porridge',
      ingredients: 'Add 2 Berries instead of 1',
      effect: 'Increases healing properties, popular during health events',
    },
    {
      name: 'Golden Porridge',
      ingredients: 'Substitute regular Honey with Golden Honey',
      effect:
        'Increases reward value by 50%, gives "Golden Touch" buff for 10 minutes',
    },
    {
      name: 'Prismatic Porridge',
      ingredients: 'Use all Prismatic-tier ingredients',
      effect:
        'Highest possible rewards, has a chance to attract the Kodama spirit',
    },
  ],
  relatedRecipes: ['waffle', 'cake', 'donut'],
};

export default function PorridgeRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = porridgeRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Porridge Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Porridge Recipe - Grow a Garden"
        recipeDescription="A warm and comforting porridge recipe for Grow a Garden game. Perfect for feeding Chris P Bacon. Updated for 2025."
        recipeImage="/images/porridge-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT30S"
        cookTime="PT4M25S"
        totalTime="PT5M"
        recipeYield="1 serving"
        recipeCategory="Breakfast"
        recipeCuisine="Game Food"
        ingredients={porridgeRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.name === 'Milk' || ing.name === 'Honey' ? 'cup' : 'unit',
        }))}
        instructions={porridgeRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'porridge grow a garden',
          'how to make porridge in grow a garden',
          'porridge recipe grow a garden',
          'grow a garden porridge recipe',
          'best porridge grow a garden',
          'grow a garden porridge ingredients',
          'porridge cooking time grow a garden',
          'grow a garden porridge rewards',
          'porridge 2025 update grow a garden',
          'roblox grow a garden porridge',
          'easy porridge recipe grow a garden',
        ]}
        difficulty={porridgeRecipe.difficulty}
      />
      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                BREAKFAST RECIPE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-amber-900 mb-6">
                How to Make Porridge
              </h1>
              <h2 className="text-xl md:text-2xl text-amber-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>porridge recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, cooking times,
                and secret techniques for creating the most delicious and
                rewarding porridge dish.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-600">⏱️</span>
                  <span className="text-sm font-medium text-amber-900">
                    {porridgeRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-600">⭐</span>
                  <span className="text-sm font-medium text-amber-900">
                    {porridgeRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-600">🧩</span>
                  <span className="text-sm font-medium text-amber-900">
                    {porridgeRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-amber-200 to-orange-300 rounded-full shadow-xl">
                  <span className="text-9xl">{porridgeRecipe.icon}</span>
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
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
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
              className="px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Rewards & Tips
            </a>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Porridge Ingredients
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect porridge in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {porridgeRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-amber-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-amber-600">
                      Quantity: {ingredient.quantity}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded inline-block">
                    {ingredient.rarity} Rarity
                  </p>
                  <p className="text-sm text-amber-700">
                    <strong>Where to find:</strong> {ingredient.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-amber-900 text-xl mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-amber-800">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                Higher rarity ingredients will significantly improve the quality
                and rewards of your porridge.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                Berry ingredients can be substituted with any fruit, but berries
                give the best flavor bonus.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                Golden Honey (added in 2025 update) can replace regular Honey
                for 2x effectiveness.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                During the Autumn Festival event, ingredients have a 10% chance
                to be automatically upgraded one rarity level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Step-by-Step Cooking Guide
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Follow these precise steps to cook the perfect porridge in Grow a
              Garden. Timing is crucial for the best results!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-9 top-0 h-full w-0.5 bg-amber-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {porridgeRecipe.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-0 rounded-full h-18 w-18 flex items-center justify-center bg-amber-100 border-4 border-amber-200 z-10">
                        <span className="text-xl font-bold text-amber-800">
                          {step.step}
                        </span>
                      </div>
                      <div className="pl-24">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-amber-900">
                              {step.description}
                            </h3>
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-amber-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-6 border border-amber-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚠️</span>
              <h3 className="font-bold text-lg text-amber-900">
                Important Timing Notes
              </h3>
            </div>
            <p className="text-amber-700 mb-4">
              The perfect cooking time for porridge is exactly 4 minutes and 25
              seconds. Overcooking or undercooking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>0:30-1:30:</strong> The pot should gradually change to a
                light beige color
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>1:30-2:15:</strong> Small bubbles appear around the
                edges
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>2:15-3:00:</strong> The mixture will take on a slight
                pink tint after adding the Berry
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>3:00-4:25:</strong> The mixture will slowly thicken and
                small sparkles will appear
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>4:25:</strong> A gentle steam will rise, indicating the
                porridge is perfectly done
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rewards & Tips Section */}
      <section id="rewards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Rewards & Expert Tips
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Learn about the rewards for perfect porridge and advanced tips to
              maximize your benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span> Reward Tiers
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Normal Quality
                  </h4>
                  <p className="text-amber-700">
                    {porridgeRecipe.rewards.normal}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-amber-700">
                    {porridgeRecipe.rewards.perfect}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-amber-700">
                    {porridgeRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {porridgeRecipe.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg p-4 border border-amber-100"
                  >
                    <p className="text-amber-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
              Recipe Variations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {porridgeRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-amber-900 mb-3">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-amber-700 mb-4">
                    <strong>Special Ingredients:</strong>
                    <br />
                    {variation.ingredients}
                  </p>
                  <p className="text-sm text-amber-700">
                    <strong>Effect:</strong>
                    <br />
                    {variation.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Prismatic Porridge Section */}
          <div id="prismatic" className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Porridge
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>
            
            <p className="text-purple-700 mb-6">
              The Prismatic version of Porridge is a breakfast delicacy sought after by culinary masters. 
              This legendary dish requires special ingredients and perfect timing, 
              offering exceptional rewards and unique game benefits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/80 backdrop-blur rounded-lg p-5 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-3">Prismatic Requirements</h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    All ingredients must be Prismatic-tier quality
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Perfect timing (exactly 4 minutes 25 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be cooked during Dawn hours (5AM-7AM game time)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the "Morning Chef" badge (complete 20 perfect breakfast recipes)
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-lg p-5 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-3">Special Rewards</h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Premium Sheckles (300-400)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Rare Morning Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    45% chance to attract the Kodama spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    "Breakfast Champion" temporary title (24 hours)
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
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Explore these other breakfast and sweet recipes in Grow a Garden!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedRecipes.map(
              (recipe, index) =>
                recipe && (
                  <Link
                    key={index}
                    href={`/recipes/${recipe.slug}`}
                    className="bg-white rounded-xl p-6 border border-amber-100 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform transition-transform"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{recipe.icon}</span>
                      <div>
                        <h3 className="font-bold text-amber-900">
                          {recipe.name}
                        </h3>
                        <p className="text-sm text-amber-600">
                          {recipe.difficulty} • {recipe.cookingTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-amber-700">{recipe.description}</p>
                  </Link>
                )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
