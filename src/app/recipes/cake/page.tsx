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
  title: 'Cake Recipe in Grow a Garden - Complete Baking Guide 2025',
  description:
    'Master how to make Cake in Grow a Garden with our complete baking guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'cake grow a garden',
    'how to make cake in grow a garden',
    'cake recipe grow a garden',
    'grow a garden cake recipe',
    'best cake grow a garden',
    'grow a garden cake ingredients',
    'cake baking time grow a garden',
    'grow a garden cake rewards',
    'grow a garden prismatic cake',
    'cake 2025 update grow a garden',
  ],
  openGraph: {
    title: 'Cake Recipe in Grow a Garden - Complete Baking Guide',
    description:
      'Master how to make Cake in Grow a Garden with our complete baking guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/cake',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/cake-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Cake Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cake Recipe in Grow a Garden - Complete Baking Guide',
    description:
      'Master how to make Cake in Grow a Garden with our complete baking guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/cake-recipe.jpg'],
  },
};

// 获取蛋糕食谱数据
const cakeRecipe = detailedRecipes['cake'] || {
  name: 'Cake',
  slug: 'cake',
  icon: '🍰',
  description:
    'Bake beautiful cakes for Chris P in Grow a Garden with this comprehensive recipe guide',
  difficulty: 'Easy',
  cookingTime: '5 minutes 55 seconds',
  ingredients: [],
  steps: [],
  rewards: { normal: '', perfect: '', prismatic: '' },
  tips: [],
  variations: [],
  relatedRecipes: ['donut', 'ice-cream', 'waffle'],
};

export default function CakeRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = cakeRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Cake Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Cake Recipe - Grow a Garden"
        recipeDescription="Bake beautiful cakes for Chris P Bacon in Grow a Garden with this comprehensive recipe guide. Updated for 2025."
        recipeImage="/images/cake-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT45S"
        cookTime="PT5M55S"
        totalTime="PT6M40S"
        recipeYield="1 serving"
        recipeCategory="Dessert"
        recipeCuisine="Game Food"
        ingredients={cakeRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit:
            ing.name === 'Flour' || ing.name === 'Sugar' || ing.name === 'Milk'
              ? 'cup'
              : 'unit',
        }))}
        instructions={cakeRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'cake grow a garden',
          'how to make cake in grow a garden',
          'cake recipe grow a garden',
          'grow a garden cake recipe',
          'best cake grow a garden',
          'grow a garden cake ingredients',
          'cake baking time grow a garden',
          'grow a garden cake rewards',
          'grow a garden prismatic cake',
          'cake 2025 update grow a garden',
          'roblox grow a garden cake',
        ]}
        difficulty={cakeRecipe.difficulty}
      />

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-rose-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
                DESSERT RECIPE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-rose-900 mb-6">
                How to Make Cake
              </h1>
              <h2 className="text-xl md:text-2xl text-rose-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-rose-700 mb-8 leading-relaxed">
                Master the perfect <strong>cake recipe in Grow a Garden</strong>{' '}
                with our comprehensive guide. Learn the exact ingredients,
                baking times, and special techniques for creating the most
                delicious and rewarding cake dessert.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-rose-600">⏱️</span>
                  <span className="text-sm font-medium text-rose-900">
                    {cakeRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-rose-600">⭐</span>
                  <span className="text-sm font-medium text-rose-900">
                    {cakeRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-rose-600">🧩</span>
                  <span className="text-sm font-medium text-rose-900">
                    {cakeRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="Cake Recipe - Grow a Garden"
                  description="Check out this amazing Cake recipe for Grow a Garden!"
                  colorScheme="rose"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 rounded-full shadow-xl">
                  <span className="text-9xl">{cakeRecipe.icon}</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">🎂</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#ingredients"
              className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View Ingredients
            </a>
            <a
              href="#steps"
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Baking Steps
            </a>
            <a
              href="#rewards"
              className="px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-900 mb-4">
              Cake Ingredients
            </h2>
            <p className="text-lg text-rose-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect cake in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {cakeRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-rose-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-rose-600">
                      Quantity: {ingredient.quantity}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium px-2 py-1 bg-rose-100 text-rose-800 rounded inline-block">
                    {ingredient.rarity} Rarity
                  </p>
                  <p className="text-sm text-rose-700">
                    <strong>Where to find:</strong> {ingredient.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-rose-900 text-xl mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-rose-800">
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Higher rarity ingredients will significantly improve the quality
                and rewards of your cake.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                The 2025 update added Golden Sugar as a special variant that
                increases rewards by 25%.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                For a more festive cake, try to find seasonal Cherry variants
                during special events.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                During the Summer Festival event, cake ingredients have a 20%
                chance to be automatically upgraded one rarity level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-rose-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-900 mb-4">
              Step-by-Step Baking Guide
            </h2>
            <p className="text-lg text-rose-700 max-w-3xl mx-auto">
              Follow these precise steps to bake the perfect cake in Grow a
              Garden. Timing is crucial for the best results!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-9 top-0 h-full w-0.5 bg-rose-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {cakeRecipe.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-0 rounded-full h-18 w-18 flex items-center justify-center bg-rose-100 border-4 border-rose-200 z-10">
                        <span className="text-xl font-bold text-rose-800">
                          {step.step}
                        </span>
                      </div>
                      <div className="pl-24">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-rose-900">
                              {step.description}
                            </h3>
                            <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-rose-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-6 border border-rose-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚠️</span>
              <h3 className="font-bold text-lg text-rose-900">
                Important Baking Notes
              </h3>
            </div>
            <p className="text-rose-700 mb-4">
              The perfect baking time for cake is exactly 5 minutes and 55
              seconds. Overbaking or underbaking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-rose-800">
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <strong>0:00-1:00:</strong> The mixture should be pale and
                gradually become smoother
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <strong>1:00-2:15:</strong> The batter will become thicker with
                small bubbles forming
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <strong>2:15-3:30:</strong> The mixture will start to rise and
                change color slightly
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <strong>3:30-4:45:</strong> The cake will continue to rise and
                the edges will set
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                <strong>4:45-5:55:</strong> The top will become golden brown and
                the cake will be springy to touch
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rewards & Tips Section */}
      <section id="rewards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-900 mb-4">
              Rewards & Expert Tips
            </h2>
            <p className="text-lg text-rose-700 max-w-3xl mx-auto">
              Learn about the rewards for perfect cake and advanced tips to
              maximize your benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-md">
              <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span> Reward Tiers
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-rose-100">
                  <h4 className="font-bold text-rose-800 mb-2">
                    Normal Quality
                  </h4>
                  <p className="text-rose-700">{cakeRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-rose-100">
                  <h4 className="font-bold text-rose-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-rose-700">{cakeRecipe.rewards.perfect}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-rose-100">
                  <h4 className="font-bold text-rose-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-rose-700">
                    {cakeRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-md">
              <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {cakeRecipe.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg p-4 border border-rose-100"
                  >
                    <p className="text-rose-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-rose-900 mb-6 text-center">
              Recipe Variations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cakeRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-rose-900 mb-3">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-rose-700 mb-4">
                    <strong>Special Ingredients:</strong>
                    <br />
                    {variation.ingredients}
                  </p>
                  <p className="text-sm text-rose-700">
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
      <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-rose-700 max-w-3xl mx-auto">
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
                    className="bg-white rounded-xl p-6 border border-rose-100 shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{recipe.icon}</span>
                      <div>
                        <h3 className="font-bold text-rose-900">
                          {recipe.name}
                        </h3>
                        <p className="text-sm text-rose-600">
                          {recipe.difficulty} • {recipe.cookingTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-rose-700">{recipe.description}</p>
                  </Link>
                )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
