import { Breadcrumbs } from '@/components/layout';
import { RecipeStructuredData } from '@/components/recipes';
import { RecipeShareButtons } from '@/components/share';
import { detailedRecipes } from '@/data/detailedRecipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Donut Recipe - Grow a Garden Cooking Guide',
  description:
    'Learn how to make delicious donuts in Grow a Garden with this comprehensive recipe guide. Ingredients, cooking times, and step-by-step instructions.',
  keywords: [
    'donut recipe grow a garden',
    'how to make donut in grow a garden',
    'grow a garden donut',
    'donut ingredients grow a garden',
    'donut cooking time grow a garden',
    'donut rewards grow a garden',
    'donut perfect timing grow a garden',
    'prismatic donut grow a garden',
  ],
  openGraph: {
    title: 'Donut Recipe - Grow a Garden Cooking Guide',
    description:
      'Learn how to make delicious donuts in Grow a Garden with this comprehensive recipe guide. Ingredients, cooking times, and step-by-step instructions.',
    url: 'https://growagardenrecipes.xyz/recipes/donut',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/donut-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Donut Recipe in Grow a Garden',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

export default function DonutRecipePage() {
  const donutRecipe = detailedRecipes.donut;

  // Get related recipes data
  const relatedRecipes = donutRecipe.relatedRecipes
    .map((slug) => detailedRecipes[slug])
    .filter(Boolean);

  return (
    <>
      {/* Structured Data */}
      <RecipeStructuredData
        recipeName={donutRecipe.name}
        recipeDescription={`${donutRecipe.description}. Updated for 2025.`}
        recipeImage="/images/recipe-placeholder.jpg"
        datePublished={donutRecipe.lastUpdated || "2025-08-15"}
        prepTime="PT10M"
        cookTime={`PT${donutRecipe.cookingTime.replace(' minutes ', 'M').replace(' seconds', 'S')}`}
        totalTime={`PT${donutRecipe.cookingTime.replace(' minutes ', 'M').replace(' seconds', 'S')}`}
        recipeYield="1 serving"
        recipeCategory={donutRecipe.category || "desserts"}
        recipeCuisine="Game Food"
        ingredients={donutRecipe.ingredients.map(ing => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: "piece"
        }))}
        instructions={donutRecipe.steps.map(step => ({
          step: step.step,
          description: step.description,
          timing: step.timing,
          tip: step.tip
        }))}
        keywords={[
          'donut recipe grow a garden',
          'how to make donut in grow a garden',
          'grow a garden donut',
          'donut ingredients grow a garden',
          'donut cooking time grow a garden',
          'donut rewards grow a garden',
        ]}
        difficulty={donutRecipe.difficulty}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Recipes', href: '/recipes' },
          { name: 'Donut Recipe', href: '/recipes/donut' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 pt-10 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-800 text-sm font-medium mb-4">
                Dessert Recipe
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-pink-900 mb-6">
                Donut Recipe
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-pink-800 mr-2">⏱️</span>
                  <span className="text-pink-800 font-medium">
                    {donutRecipe.cookingTime}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-800 mr-2">⭐</span>
                  <span className="text-pink-800 font-medium">
                    {donutRecipe.difficulty}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-pink-800 mr-2">🔄</span>
                  <span className="text-pink-800 font-medium">
                    Updated: {donutRecipe.lastUpdated}
                  </span>
                </div>
              </div>
              <p className="text-lg text-pink-800 mb-8 max-w-2xl mx-auto lg:mx-0">
                {donutRecipe.description} Learn the perfect timing, ingredients,
                and techniques to create delicious donuts that will earn you
                maximum rewards.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#ingredients"
                  className="btn-primary px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  View Ingredients
                </a>
                <a
                  href="#steps"
                  className="btn-secondary px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Cooking Steps
                </a>
                <RecipeShareButtons
                  title="Donut Recipe - Grow a Garden"
                  description="Learn how to make delicious donuts in Grow a Garden with this comprehensive recipe guide."
                  colorScheme="pink"
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 flex items-center justify-center text-9xl animate-float">
                  {donutRecipe.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-pink-900 mb-4">
              Donut Ingredients
            </h2>
            <p className="text-lg text-pink-700 max-w-3xl mx-auto">
              Gather these ingredients to make the perfect donut in Grow a
              Garden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {donutRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-xl p-6 border border-pink-100 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-pink-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-pink-600">
                      {ingredient.quantity} × {ingredient.rarity}
                    </p>
                  </div>
                </div>
                <p className="text-pink-700">
                  <strong>Found at:</strong> {ingredient.location}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-pink-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-pink-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Higher rarity ingredients will significantly increase your
                rewards
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Fresh ingredients (harvested same day) give a 10% quality bonus
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Prismatic ingredients can be found during special events or from
                rare drops
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                The 2025 update added seasonal ingredient variations that change
                monthly
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-pink-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-pink-900 mb-4">
              Step-by-Step Cooking Guide
            </h2>
            <p className="text-lg text-pink-700 max-w-3xl mx-auto">
              Follow these precise steps to cook the perfect donut in Grow a
              Garden. Timing is crucial for the best results!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-9 top-0 h-full w-0.5 bg-pink-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {donutRecipe.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-0 rounded-full h-18 w-18 flex items-center justify-center bg-pink-100 border-4 border-pink-200 z-10">
                        <span className="text-xl font-bold text-pink-800">
                          {step.step}
                        </span>
                      </div>
                      <div className="pl-24">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-pink-900">
                              {step.description}
                            </h3>
                            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-pink-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-6 border border-pink-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚠️</span>
              <h3 className="font-bold text-lg text-pink-900">
                Important Timing Notes
              </h3>
            </div>
            <p className="text-pink-700 mb-4">
              The perfect cooking time for donuts is exactly 9 minutes and 37
              seconds. Overcooking or undercooking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-pink-800">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <strong>0:00-1:30:</strong> The mixture should be smooth with no
                lumps
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <strong>1:30-3:15:</strong> The dough will begin to rise
                slightly
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <strong>3:15-5:00:</strong> The dough should be formed into a
                ring shape
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <strong>5:00-7:30:</strong> The donut will begin to turn golden
                brown
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <strong>7:30-9:37:</strong> Add chocolate glaze and wait for it
                to set slightly
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rewards & Tips Section */}
      <section id="rewards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-pink-900 mb-4">
              Rewards & Expert Tips
            </h2>
            <p className="text-lg text-pink-700 max-w-3xl mx-auto">
              Learn about the rewards for perfect donuts and advanced tips to
              maximize your benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 shadow-md">
              <h3 className="text-2xl font-bold text-pink-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span> Reward Tiers
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-pink-100">
                  <h4 className="font-bold text-pink-800 mb-2">
                    Normal Quality
                  </h4>
                  <p className="text-pink-700">{donutRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-pink-100">
                  <h4 className="font-bold text-pink-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-pink-700">{donutRecipe.rewards.perfect}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-pink-100">
                  <h4 className="font-bold text-pink-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-pink-700">
                    {donutRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 shadow-md">
              <h3 className="text-2xl font-bold text-pink-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {donutRecipe.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg p-4 border border-pink-100"
                  >
                    <p className="text-pink-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-pink-900 mb-6 text-center">
              Recipe Variations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donutRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 border border-pink-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-pink-900 mb-3">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-pink-700 mb-4">
                    <strong>Special Ingredients:</strong>
                    <br />
                    {variation.ingredients}
                  </p>
                  <p className="text-sm text-pink-700">
                    <strong>Effect:</strong>
                    <br />
                    {variation.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prismatic Donut Section */}
          <div
            id="prismatic"
            className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Donut
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>

            <p className="text-purple-700 mb-6">
              The Prismatic version of Donut is a rare delicacy sought after by
              expert bakers. This legendary treat requires special ingredients
              and perfect timing, offering exceptional rewards and unique game
              benefits.
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
                    Perfect timing (exactly 9 minutes 37 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be cooked during Dawn hours (6AM-9AM game time)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the "Master Baker" badge (complete 25 perfect
                    desserts)
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
                    Guaranteed Rare Sweet Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    35% chance to attract the Tanuki spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    "Donut Master" temporary title (24 hours)
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
      <section className="py-16 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-pink-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-pink-700 max-w-3xl mx-auto">
              Explore these other dessert recipes in Grow a Garden!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedRecipes.map(
              (recipe, index) =>
                recipe && (
                  <Link
                    key={index}
                    href={`/recipes/${recipe.slug}`}
                    className="bg-white rounded-xl p-6 border border-pink-100 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 transform transition-transform"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{recipe.icon}</span>
                      <div>
                        <h3 className="font-bold text-pink-900">
                          {recipe.name}
                        </h3>
                        <p className="text-sm text-pink-600">
                          {recipe.difficulty} • {recipe.cookingTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-pink-700">{recipe.description}</p>
                  </Link>
                )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
