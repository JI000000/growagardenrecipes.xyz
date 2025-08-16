import { Breadcrumbs } from '@/components/layout';
import { RecipeStructuredData } from '@/components/recipes';
import { RecipeShareButtons } from '@/components/share';
import { detailedRecipes } from '@/data/detailedRecipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pie Recipe - Grow a Garden Cooking Guide',
  description:
    'Bake delicious pies in Grow a Garden with this detailed recipe guide. Ingredients, cooking times, and step-by-step instructions.',
  keywords: [
    'pie recipe grow a garden',
    'how to make pie in grow a garden',
    'grow a garden pie',
    'pie ingredients grow a garden',
    'pie cooking time grow a garden',
    'pie rewards grow a garden',
    'pie perfect timing grow a garden',
    'prismatic pie grow a garden',
  ],
  openGraph: {
    title: 'Pie Recipe - Grow a Garden Cooking Guide',
    description:
      'Bake delicious pies in Grow a Garden with this detailed recipe guide. Ingredients, cooking times, and step-by-step instructions.',
    url: 'https://growagardenrecipes.xyz/recipes/pie',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/pie-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Pie Recipe in Grow a Garden',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

export default function PieRecipePage() {
  const pieRecipe = detailedRecipes.pie;

  // Get related recipes data
  const relatedRecipes = pieRecipe.relatedRecipes
    .map((slug) => detailedRecipes[slug])
    .filter(Boolean);

  return (
    <>
      {/* Structured Data */}
      <RecipeStructuredData
        recipeName={pieRecipe.name}
        recipeDescription={`${pieRecipe.description}. Updated for 2025.`}
        recipeImage="/images/recipe-placeholder.jpg"
        datePublished={pieRecipe.lastUpdated || "2025-08-15"}
        prepTime="PT10M"
        cookTime={`PT${pieRecipe.cookingTime.replace(' minutes ', 'M').replace(' seconds', 'S')}`}
        totalTime={`PT${pieRecipe.cookingTime.replace(' minutes ', 'M').replace(' seconds', 'S')}`}
        recipeYield="1 serving"
        recipeCategory={pieRecipe.category || "desserts"}
        recipeCuisine="Game Food"
        ingredients={pieRecipe.ingredients.map(ing => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: "piece"
        }))}
        instructions={pieRecipe.steps.map(step => ({
          step: step.step,
          description: step.description,
          timing: step.timing,
          tip: step.tip
        }))}
        keywords={[
          'pie recipe grow a garden',
          'how to make pie in grow a garden',
          'grow a garden pie',
          'pie ingredients grow a garden',
          'pie cooking time grow a garden',
          'pie rewards grow a garden',
        ]}
        difficulty={pieRecipe.difficulty}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Recipes', href: '/recipes' },
          { name: 'Pie Recipe', href: '/recipes/pie' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-10 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                Dessert Recipe
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-amber-900 mb-6">
                Pie Recipe
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-amber-800 mr-2">⏱️</span>
                  <span className="text-amber-800 font-medium">
                    {pieRecipe.cookingTime}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-800 mr-2">⭐</span>
                  <span className="text-amber-800 font-medium">
                    {pieRecipe.difficulty}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-800 mr-2">🔄</span>
                  <span className="text-amber-800 font-medium">
                    Updated: {pieRecipe.lastUpdated}
                  </span>
                </div>
              </div>
              <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto lg:mx-0">
                {pieRecipe.description} Learn the perfect timing, ingredients,
                and techniques to create delicious pies that will earn you
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
                  title="Pie Recipe - Grow a Garden"
                  description="Bake delicious pies in Grow a Garden with this detailed recipe guide."
                  colorScheme="amber"
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 flex items-center justify-center text-9xl animate-float">
                  {pieRecipe.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Pie Ingredients
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Gather these ingredients to make the perfect pie in Grow a Garden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pieRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-amber-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-amber-600">
                      {ingredient.quantity} × {ingredient.rarity}
                    </p>
                  </div>
                </div>
                <p className="text-amber-700">
                  <strong>Found at:</strong> {ingredient.location}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-amber-700">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                Higher rarity ingredients will significantly increase your
                rewards
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                Fresh ingredients (harvested same day) give a 10% quality bonus
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                Prismatic ingredients can be found during special events or from
                rare drops
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                The 2025 update added seasonal fruit variations that change with
                in-game seasons
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-amber-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Step-by-Step Cooking Guide
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              Follow these precise steps to bake the perfect pie in Grow a
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
                {pieRecipe.steps.map((step, index) => (
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
              The perfect cooking time for pies is exactly 7 minutes and 15
              seconds. Overcooking or undercooking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>0:00-1:15:</strong> The dough should be smooth and
                pliable
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>1:15-2:45:</strong> The crust should be properly shaped
                in the pie dish
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>2:45-4:00:</strong> The apple mixture should be evenly
                distributed
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>4:00-5:30:</strong> The top crust should be sealed and
                vented
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <strong>5:30-7:15:</strong> The pie will turn golden brown and
                the filling will bubble slightly
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
              Learn about the rewards for perfect pies and advanced tips to
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
                  <p className="text-amber-700">{pieRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-amber-700">{pieRecipe.rewards.perfect}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-amber-700">
                    {pieRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {pieRecipe.tips.map((tip, index) => (
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
              {pieRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl p-6 border border-amber-100 shadow-md hover:shadow-lg transition-shadow"
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

          {/* Prismatic Pie Section */}
          <div
            id="prismatic"
            className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Pie
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>

            <p className="text-purple-700 mb-6">
              The Prismatic version of Pie is a culinary masterpiece sought
              after by expert bakers. This legendary dessert requires special
              ingredients and perfect timing, offering exceptional rewards and
              unique game benefits.
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
                    Perfect timing (exactly 7 minutes 15 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be cooked during Harvest Festival events
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the "Pastry Chef" badge (complete 30 perfect
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
                    Premium Sheckles (320-420)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Rare Fruit Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    30% chance to attract the Kitsune spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    "Pie Perfectionist" temporary title (24 hours)
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
      <section className="py-16 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
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
