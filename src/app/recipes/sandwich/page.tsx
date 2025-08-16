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
  title: 'Sandwich Recipe in Grow a Garden - Complete Guide 2025',
  description:
    'Master how to make Sandwich in Grow a Garden with our complete guide (Updated 2025). Step-by-step instructions, ingredients list, preparation times, and bonus tips.',
  keywords: [
    'sandwich grow a garden',
    'how to make sandwich in grow a garden',
    'sandwich recipe grow a garden',
    'grow a garden sandwich recipe',
    'best sandwich grow a garden',
    'grow a garden sandwich ingredients',
    'sandwich preparation time grow a garden',
    'grow a garden sandwich rewards',
    'grow a garden prismatic sandwich',
    'sandwich 2025 update grow a garden',
    'roblox grow a garden sandwich',
    'easy sandwich recipe grow a garden',
  ],
  openGraph: {
    title: 'Sandwich Recipe in Grow a Garden - Complete Guide',
    description:
      'Master how to make Sandwich in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and preparation times.',
    url: 'https://growagardenrecipes.xyz/recipes/sandwich',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/sandwich-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Sandwich Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandwich Recipe in Grow a Garden - Complete Guide',
    description:
      'Master how to make Sandwich in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and preparation times.',
    images: ['/images/sandwich-recipe.jpg'],
  },
};

// 获取三明治食谱数据
const sandwichRecipe = detailedRecipes['sandwich'] || {
  name: 'Sandwich',
  slug: 'sandwich',
  icon: '🥪',
  description:
    'Create delicious sandwiches in Grow a Garden with this comprehensive recipe guide',
  difficulty: 'Easy',
  cookingTime: '3 minutes 45 seconds',
  ingredients: [],
  steps: [],
  rewards: { normal: '', perfect: '', prismatic: '' },
  tips: [],
  variations: [],
  relatedRecipes: ['burger', 'hot-dog', 'pizza'],
};

export default function SandwichRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = sandwichRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Sandwich Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Sandwich Recipe - Grow a Garden"
        recipeDescription="Create delicious sandwiches in Grow a Garden with this comprehensive recipe guide. Updated for 2025."
        recipeImage="/images/sandwich-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT30S"
        cookTime="PT3M45S"
        totalTime="PT4M15S"
        recipeYield="1 serving"
        recipeCategory="Snack"
        recipeCuisine="Game Food"
        ingredients={sandwichRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.name === 'Bread' || ing.name === 'Cheese' ? 'slice' : 'unit',
        }))}
        instructions={sandwichRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'sandwich grow a garden',
          'how to make sandwich in grow a garden',
          'sandwich recipe grow a garden',
          'grow a garden sandwich recipe',
          'best sandwich grow a garden',
          'grow a garden sandwich ingredients',
          'sandwich preparation time grow a garden',
          'grow a garden sandwich rewards',
          'sandwich 2025 update grow a garden',
          'roblox grow a garden sandwich',
        ]}
        difficulty={sandwichRecipe.difficulty}
      />

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                SNACK RECIPE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-green-900 mb-6">
                How to Make Sandwich
              </h1>
              <h2 className="text-xl md:text-2xl text-green-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>sandwich recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, preparation
                times, and special techniques for creating the most delicious and
                rewarding sandwich.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-600">⏱️</span>
                  <span className="text-sm font-medium text-green-900">
                    {sandwichRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-600">⭐</span>
                  <span className="text-sm font-medium text-green-900">
                    {sandwichRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-600">🧩</span>
                  <span className="text-sm font-medium text-green-900">
                    {sandwichRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="Sandwich Recipe - Grow a Garden"
                  description="Check out this delicious Sandwich recipe for Grow a Garden!"
                  colorScheme="green"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-green-200 to-yellow-300 rounded-full shadow-xl">
                  <span className="text-9xl">{sandwichRecipe.icon}</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">🍽️</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#ingredients"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View Ingredients
            </a>
            <a
              href="#steps"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Preparation Steps
            </a>
            <a
              href="#rewards"
              className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
              Sandwich Ingredients
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect sandwich in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {sandwichRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-green-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-green-600">
                      Quantity: {ingredient.quantity}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded inline-block">
                    {ingredient.rarity} Rarity
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Where to find:</strong> {ingredient.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-green-900 text-xl mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Higher rarity ingredients will significantly improve the quality
                and rewards of your sandwich.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                The 2025 update added Special Sauce as an optional ingredient
                that increases rewards by 20%.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                For a more premium sandwich, try to find Artisanal Bread during
                special events.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                During the Harvest Festival event, sandwich ingredients have a
                15% chance to be automatically upgraded one rarity level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-green-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
              Step-by-Step Preparation Guide
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Follow these precise steps to make the perfect sandwich in Grow a
              Garden. Timing is crucial for the best results!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-9 top-0 h-full w-0.5 bg-green-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {sandwichRecipe.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-0 rounded-full h-18 w-18 flex items-center justify-center bg-green-100 border-4 border-green-200 z-10">
                        <span className="text-xl font-bold text-green-800">
                          {step.step}
                        </span>
                      </div>
                      <div className="pl-24">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-green-900">
                              {step.description}
                            </h3>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-green-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-6 border border-green-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚠️</span>
              <h3 className="font-bold text-lg text-green-900">
                Important Preparation Notes
              </h3>
            </div>
            <p className="text-green-700 mb-4">
              The perfect preparation time for sandwich is exactly 3 minutes and
              45 seconds. Rushing or taking too long will significantly affect
              the quality and rewards. Use these visual cues to know your
              progress:
            </p>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>0:00-0:45:</strong> The first slice of bread should be
                placed flat on the plate
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>0:45-1:30:</strong> The cheese should be spread evenly on
                the bread
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>1:30-2:15:</strong> The ham should be placed and slightly
                folded
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>2:15-3:00:</strong> The lettuce should be added and
                arranged evenly
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>3:00-3:45:</strong> The tomato should be added and the
                top bread placed to complete the sandwich
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rewards & Tips Section */}
      <section id="rewards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
              Rewards & Expert Tips
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Learn about the rewards for perfect sandwich and advanced tips to
              maximize your benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-md">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span> Reward Tiers
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">
                    Normal Quality
                  </h4>
                  <p className="text-green-700">
                    {sandwichRecipe.rewards.normal}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-green-700">
                    {sandwichRecipe.rewards.perfect}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-green-700">
                    {sandwichRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-md">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {sandwichRecipe.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg p-4 border border-green-100"
                  >
                    <p className="text-green-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
              Recipe Variations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sandwichRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-green-900 mb-3">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-green-700 mb-4">
                    <strong>Special Ingredients:</strong>
                    <br />
                    {variation.ingredients}
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Effect:</strong>
                    <br />
                    {variation.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Explore these other snack recipes in Grow a Garden!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedRecipes.map(
              (recipe, index) =>
                recipe && (
                  <Link
                    key={index}
                    href={`/recipes/${recipe.slug}`}
                    className="bg-white rounded-xl p-6 border border-green-100 shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{recipe.icon}</span>
                      <div>
                        <h3 className="font-bold text-green-900">
                          {recipe.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          {recipe.difficulty} • {recipe.cookingTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-green-700">{recipe.description}</p>
                  </Link>
                )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
