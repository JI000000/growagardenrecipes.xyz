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
  title: 'Burger Recipe in Grow a Garden - Complete Cooking Guide 2025',
  description:
    'Master how to make Burger in Grow a Garden with our complete guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'burger grow a garden',
    'how to make burger in grow a garden',
    'burger recipe grow a garden',
    'grow a garden burger recipe',
    'best burger grow a garden',
    'grow a garden burger ingredients',
    'burger cooking time grow a garden',
    'grow a garden burger rewards',
    'grow a garden prismatic burger',
    'burger 2025 update grow a garden',
  ],
  openGraph: {
    title: 'Burger Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Burger in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/burger',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/burger-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Burger Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burger Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Burger in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/burger-recipe.jpg'],
  },
};

// 获取汉堡食谱数据
const burgerRecipe = detailedRecipes['burger'] || {
  name: 'Burger',
  slug: 'burger',
  icon: '🍔',
  description:
    'Create delicious burgers in Grow a Garden with this comprehensive recipe guide',
  difficulty: 'Medium',
  cookingTime: '6 minutes 42 seconds',
  ingredients: [],
  steps: [],
  rewards: { normal: '', perfect: '', prismatic: '' },
  tips: [],
  variations: [],
  relatedRecipes: ['pizza', 'sandwich', 'hot-dog'],
};

export default function BurgerRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = burgerRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Burger Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Burger Recipe - Grow a Garden"
        recipeDescription="Create delicious burgers in Grow a Garden with this comprehensive recipe guide."
        recipeImage="/images/burger-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT1M"
        cookTime="PT6M42S"
        totalTime="PT7M42S"
        recipeYield="1 serving"
        recipeCategory="Main Dish"
        recipeCuisine="Game Food"
        ingredients={burgerRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
        }))}
        instructions={burgerRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'burger grow a garden',
          'how to make burger in grow a garden',
          'burger recipe grow a garden',
          'grow a garden burger recipe',
        ]}
        difficulty={burgerRecipe.difficulty}
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
                MAIN DISH RECIPE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-amber-900 mb-6">
                How to Make Burger
              </h1>
              <h2 className="text-xl md:text-2xl text-amber-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>burger recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, cooking times,
                and special techniques for creating the most delicious and
                rewarding burger.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-600">⏱️</span>
                  <span className="text-sm font-medium text-amber-900">
                    {burgerRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-600">⭐</span>
                  <span className="text-sm font-medium text-amber-900">
                    {burgerRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-amber-600">🧩</span>
                  <span className="text-sm font-medium text-amber-900">
                    {burgerRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="Burger Recipe - Grow a Garden"
                  description="Check out this amazing Burger recipe for Grow a Garden!"
                  colorScheme="red"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-amber-200 to-orange-300 rounded-full shadow-xl">
                  <span className="text-9xl">{burgerRecipe.icon}</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">🍴</span>
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
            <a
              href="#prismatic"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Prismatic Burger
            </a>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Burger Ingredients
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect burger in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {burgerRecipe.ingredients.map((ingredient, index) => (
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
                and rewards of your burger.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                The 2025 update added Special Sauce as a special ingredient that
                increases rewards by 30%.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                For a more premium burger, try to find Gourmet Patty during
                special events.
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                During the Summer Festival event, burger ingredients have a 20%
                chance to be automatically upgraded one rarity level.
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
              Follow these precise steps to make the perfect burger in Grow a
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
                {burgerRecipe.steps.map((step, index) => (
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
                Important Cooking Notes
              </h3>
            </div>
            <p className="text-amber-700 mb-4">
              The perfect cooking time for burger is exactly 6 minutes and 42
              seconds. Overcooking or undercooking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>0:00-1:15:</strong> The bun should be placed and
                slightly toasted
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>1:15-3:00:</strong> The patty should be cooking evenly
                with a slight sizzle
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>3:00-4:15:</strong> The cheese should start melting over
                the patty
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>4:15-5:30:</strong> The lettuce should be added and
                arranged evenly
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>5:30-6:42:</strong> The tomato should be added and the
                top bun placed to complete the burger
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
              Learn about the rewards for perfect burger and advanced tips to
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
                    {burgerRecipe.rewards.normal}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-amber-700">
                    {burgerRecipe.rewards.perfect}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-amber-700">
                    {burgerRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {burgerRecipe.tips.map((tip, index) => (
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
              {burgerRecipe.variations.map((variation, index) => (
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

          {/* Prismatic Burger Section */}
          <div
            id="prismatic"
            className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Burger
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>

            <p className="text-purple-700 mb-6">
              The Prismatic version of Burger is highly sought after by expert
              players. This legendary variant uses special ingredients and
              requires perfect timing, offering substantial rewards and unique
              game benefits.
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
                    Perfect timing (exactly 6 minutes 15 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be cooked during a Full Moon phase (in-game time)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the &quot;Gourmet Chef&quot; badge (complete 50
                    perfect recipes)
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
                    Premium Sheckles (350-450)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Epic Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    30% chance to attract the Tanuki spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    &quot;Burger Baron&quot; temporary title (24 hours)
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
                    className="bg-white rounded-xl p-6 border border-amber-100 shadow-md hover:shadow-lg transition"
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
