/* eslint-disable react/no-unescaped-entities */
import { Breadcrumbs } from '@/components/layout';
import { RecipeStructuredData } from '@/components/recipes';
import { RecipeShareButtons } from '@/components/share';
import { detailedRecipes } from '@/data/detailedRecipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Make Salads in Grow a Garden - Complete Guide 2025',
  description:
    'Master how to prepare healthy Salads in Grow a Garden with our complete guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'salad recipe grow a garden',
    'how to make salad in grow a garden',
    'grow a garden salad',
    'salad ingredients grow a garden',
    'salad cooking time grow a garden',
    'salad rewards grow a garden',
    'salad perfect timing grow a garden',
    'prismatic salad grow a garden',
    'salad 2025 update grow a garden',
    'roblox grow a garden salad',
  ],
  openGraph: {
    title: 'How to Make Salads in Grow a Garden - Complete Guide',
    description:
      'Master how to prepare healthy Salads in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/salad',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/salad-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Salad Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Make Salads in Grow a Garden - Complete Guide',
    description:
      'Master how to prepare healthy Salads in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/salad-recipe.jpg'],
  },
};

export default function SaladRecipePage() {
  const saladRecipe = detailedRecipes.salad;

  // Get related recipes data
  const relatedRecipes = saladRecipe.relatedRecipes
    .map((slug) => detailedRecipes[slug])
    .filter(Boolean);

  return (
    <>
      {/* Structured Data */}
      <RecipeStructuredData
        recipeName={saladRecipe.name}
        recipeDescription={`${saladRecipe.description}. Updated for 2025.`}
        recipeImage="/images/recipe-placeholder.jpg"
        datePublished={saladRecipe.lastUpdated || '2025-08-15'}
        prepTime="PT10M"
        cookTime={`PT${saladRecipe.cookingTime.replace(' minutes ', 'M').replace(' seconds', 'S')}`}
        totalTime={`PT${saladRecipe.cookingTime.replace(' minutes ', 'M').replace(' seconds', 'S')}`}
        recipeYield="1 serving"
        recipeCategory={saladRecipe.category || 'snacks'}
        recipeCuisine="Game Food"
        ingredients={saladRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: 'piece',
        }))}
        instructions={saladRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
          timing: step.timing,
          tip: step.tip,
        }))}
        keywords={[
          'salad recipe grow a garden',
          'how to make salad in grow a garden',
          'grow a garden salad',
          'salad ingredients grow a garden',
          'salad cooking time grow a garden',
          'salad rewards grow a garden',
        ]}
        difficulty={saladRecipe.difficulty}
      />

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Recipes', href: '/recipes' },
            { name: 'Salad Recipe' },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-lime-50 to-yellow-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-lime-200 rounded-full blur-3xl animate-pulse"
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
                How to Make Salads
              </h1>
              <h2 className="text-xl md:text-2xl text-green-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>salad recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, cooking times,
                and special techniques for creating the most refreshing and
                rewarding healthy dish.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-600">⏱️</span>
                  <span className="text-sm font-medium text-green-900">
                    {saladRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-600">⭐</span>
                  <span className="text-sm font-medium text-green-900">
                    {saladRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-green-600">🧩</span>
                  <span className="text-sm font-medium text-green-900">
                    {saladRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="How to Make Salads - Grow a Garden"
                  description="Check out this refreshing Salad recipe for Grow a Garden!"
                  colorScheme="green"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-green-200 to-lime-300 rounded-full shadow-xl">
                  <span className="text-9xl">{saladRecipe.icon}</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">🥬</span>
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
              className="px-6 py-3 bg-lime-500 hover:bg-lime-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Preparation Steps
            </a>
            <a
              href="#rewards"
              className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Rewards & Tips
            </a>
            <a
              href="#prismatic"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Prismatic Salad
            </a>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
              Salad Ingredients
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Gather these ingredients to make the perfect salad in Grow a
              Garden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {saladRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-green-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-green-600">
                      {ingredient.quantity} × {ingredient.rarity}
                    </p>
                  </div>
                </div>
                <p className="text-green-700">
                  <strong>Found at:</strong> {ingredient.location}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Higher rarity ingredients will significantly increase your
                rewards
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Fresh vegetables (harvested same day) give a 15% quality bonus
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Prismatic ingredients can be found during special events or from
                rare drops
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                The 2025 update added special dressings that can be unlocked
                through quests
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-green-50 to-lime-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
              Step-by-Step Preparation Guide
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Follow these precise steps to prepare the perfect salad in Grow a
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
                {saladRecipe.steps.map((step, index) => (
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
                Important Timing Notes
              </h3>
            </div>
            <p className="text-green-700 mb-4">
              The perfect preparation time for salads is exactly 4 minutes and
              50 seconds. Improper timing will significantly affect the quality
              and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>0:00-1:00:</strong> The lettuce should be thoroughly
                dried
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>1:00-2:00:</strong> Tomatoes should be cut into even
                wedges
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>2:00-3:00:</strong> Cucumber slices should be thin and
                uniform
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>3:00-4:00:</strong> Vegetables should be gently combined
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <strong>4:00-4:50:</strong> Dressing should be evenly drizzled
                just before serving
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
              Learn about the rewards for perfect salads and advanced tips to
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
                  <p className="text-green-700">{saladRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-green-700">
                    {saladRecipe.rewards.perfect}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-green-700">
                    {saladRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-md">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {saladRecipe.tips.map((tip, index) => (
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
              {saladRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-100 shadow-md hover:shadow-lg transition-shadow"
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

          {/* Prismatic Salad Section */}
          <div
            id="prismatic"
            className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Salad
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>

            <p className="text-purple-700 mb-6">
              The Prismatic version of Salad is a refreshing delicacy sought
              after by health-conscious players. This legendary dish requires
              special ingredients and perfect timing, offering exceptional
              rewards and unique game benefits.
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
                    Perfect timing (exactly 4 minutes 50 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be prepared during Summer Festival events
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the &quot;Garden Master&quot; badge (complete 35
                    perfect vegetable recipes)
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
                    Premium Sheckles (250-350)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Rare Vegetable Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    40% chance to attract the Kodama spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    &quot;Garden Guardian&quot; temporary title (24 hours)
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
      <section className="py-16 bg-gradient-to-br from-green-50 to-lime-50">
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
                    className="bg-white rounded-xl p-6 border border-green-100 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform transition-transform"
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
