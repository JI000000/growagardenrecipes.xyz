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
  title: 'Sushi Recipe in Grow a Garden - Complete Cooking Guide 2025',
  description:
    'Master how to make Sushi in Grow a Garden with our complete guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'sushi grow a garden',
    'how to make sushi in grow a garden',
    'sushi recipe grow a garden',
    'grow a garden sushi recipe',
    'best sushi grow a garden',
    'grow a garden sushi ingredients',
    'sushi cooking time grow a garden',
    'grow a garden sushi rewards',
    'grow a garden prismatic sushi',
    'sushi 2025 update grow a garden',
  ],
  openGraph: {
    title: 'Sushi Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Sushi in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/sushi',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/sushi-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Sushi Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushi Recipe in Grow a Garden - Complete Cooking Guide',
    description:
      'Master how to make Sushi in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/sushi-recipe.jpg'],
  },
};

// 获取寿司食谱数据
const sushiRecipe = detailedRecipes['sushi'] || {
  name: 'Sushi',
  slug: 'sushi',
  icon: '🍣',
  description:
    'Create authentic sushi in Grow a Garden with this comprehensive recipe guide',
  difficulty: 'Hard',
  cookingTime: '8 minutes 15 seconds',
  ingredients: [],
  steps: [],
  rewards: { normal: '', perfect: '', prismatic: '' },
  tips: [],
  variations: [],
  relatedRecipes: ['pizza', 'burger', 'sandwich'],
};

export default function SushiRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = sushiRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Sushi Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Sushi Recipe - Grow a Garden"
        recipeDescription="Create authentic sushi in Grow a Garden with this comprehensive recipe guide."
        recipeImage="/images/sushi-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT2M"
        cookTime="PT8M15S"
        totalTime="PT10M15S"
        recipeYield="1 serving"
        recipeCategory="Special Dish"
        recipeCuisine="Game Food"
        ingredients={sushiRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
        }))}
        instructions={sushiRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'sushi grow a garden',
          'how to make sushi in grow a garden',
          'sushi recipe grow a garden',
          'grow a garden sushi recipe',
        ]}
        difficulty={sushiRecipe.difficulty}
      />

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                SPECIAL DISH RECIPE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-teal-900 mb-6">
                How to Make Sushi
              </h1>
              <h2 className="text-xl md:text-2xl text-teal-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-teal-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>sushi recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, preparation
                times, and special techniques for creating the most delicious
                and rewarding sushi.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-teal-600">⏱️</span>
                  <span className="text-sm font-medium text-teal-900">
                    {sushiRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-teal-600">⭐</span>
                  <span className="text-sm font-medium text-teal-900">
                    {sushiRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-teal-600">🧩</span>
                  <span className="text-sm font-medium text-teal-900">
                    {sushiRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="Sushi Recipe - Grow a Garden"
                  description="Check out this amazing Sushi recipe for Grow a Garden!"
                  colorScheme="blue"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-teal-200 to-blue-300 rounded-full shadow-xl">
                  <span className="text-9xl">{sushiRecipe.icon}</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">🥢</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href="#ingredients"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View Ingredients
            </a>
            <a
              href="#steps"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Preparation Steps
            </a>
            <a
              href="#rewards"
              className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Rewards & Tips
            </a>
            <a
              href="#prismatic"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Prismatic Sushi
            </a>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-teal-900 mb-4">
              Sushi Ingredients
            </h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect sushi in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {sushiRecipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-teal-50 rounded-xl p-6 border border-teal-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{ingredient.icon}</span>
                  <div>
                    <h3 className="font-bold text-teal-900">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-teal-600">
                      Quantity: {ingredient.quantity}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium px-2 py-1 bg-teal-100 text-teal-800 rounded inline-block">
                    {ingredient.rarity} Rarity
                  </p>
                  <p className="text-sm text-teal-700">
                    <strong>Where to find:</strong> {ingredient.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-teal-900 text-xl mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span> Ingredient Tips
            </h3>
            <ul className="space-y-3 text-teal-800">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                Higher rarity ingredients will significantly improve the quality
                and rewards of your sushi.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                The 2025 update added Golden Fish as a special ingredient that
                increases rewards by 50%.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                For premium sushi, try to find Fresh Wasabi during special
                events at the Mountain garden.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                During the Kitsune Festival event, sushi ingredients have a 30%
                chance to be automatically upgraded one rarity level.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cooking Steps Section */}
      <section
        id="steps"
        className="py-16 bg-gradient-to-br from-teal-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-teal-900 mb-4">
              Step-by-Step Preparation Guide
            </h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto">
              Follow these precise steps to make the perfect sushi in Grow a
              Garden. Timing is crucial for the best results!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-9 top-0 h-full w-0.5 bg-teal-200"
                aria-hidden="true"
              ></div>

              <div className="space-y-12">
                {sushiRecipe.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className="absolute left-0 rounded-full h-18 w-18 flex items-center justify-center bg-teal-100 border-4 border-teal-200 z-10">
                        <span className="text-xl font-bold text-teal-800">
                          {step.step}
                        </span>
                      </div>
                      <div className="pl-24">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg text-teal-900">
                              {step.description}
                            </h3>
                            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                              {step.timing}
                            </span>
                          </div>
                          <p className="text-teal-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl p-6 border border-teal-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚠️</span>
              <h3 className="font-bold text-lg text-teal-900">
                Important Preparation Notes
              </h3>
            </div>
            <p className="text-teal-700 mb-4">
              The perfect preparation time for sushi is exactly 8 minutes and 15
              seconds. Rushing or taking too long will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-teal-800">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <strong>0:00-1:30:</strong> The rice should be properly seasoned
                and ready for use
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <strong>1:30-3:00:</strong> The seaweed should be laid out flat
                on the bamboo mat
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <strong>3:00-4:30:</strong> The rice should be spread evenly
                over the seaweed
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <strong>4:30-6:00:</strong> The fish should be placed in the
                center of the rice
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <strong>6:00-7:00:</strong> The wasabi should be added next to
                the fish
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">•</span>
                <strong>7:00-8:15:</strong> The sushi should be rolled tightly,
                sliced, and served with soy sauce
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rewards & Tips Section */}
      <section id="rewards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-teal-900 mb-4">
              Rewards & Expert Tips
            </h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto">
              Learn about the rewards for perfect sushi and advanced tips to
              maximize your benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 shadow-md">
              <h3 className="text-2xl font-bold text-teal-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span> Reward Tiers
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-teal-100">
                  <h4 className="font-bold text-teal-800 mb-2">
                    Normal Quality
                  </h4>
                  <p className="text-teal-700">{sushiRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-teal-100">
                  <h4 className="font-bold text-teal-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-teal-700">{sushiRecipe.rewards.perfect}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-teal-100">
                  <h4 className="font-bold text-teal-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-teal-700">
                    {sushiRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 shadow-md">
              <h3 className="text-2xl font-bold text-teal-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {sushiRecipe.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg p-4 border border-teal-100"
                  >
                    <p className="text-teal-700">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Recipe Variations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sushiRecipe.variations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-teal-900 mb-3">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-teal-700 mb-4">
                    <strong>Special Ingredients:</strong>
                    <br />
                    {variation.ingredients}
                  </p>
                  <p className="text-sm text-teal-700">
                    <strong>Effect:</strong>
                    <br />
                    {variation.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Prismatic Sushi Section */}
          <div id="prismatic" className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Sushi
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>
            
            <p className="text-purple-700 mb-6">
              The Prismatic version of Sushi is an exquisite delicacy sought after by culinary virtuosos. 
              This legendary dish requires rare ingredients and precise timing, 
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
                    Perfect timing (exactly 9 minutes 10 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be prepared during Ocean Festival (seasonal in-game event)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the "Sushi Master" badge (complete 40 perfect seafood recipes)
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-lg p-5 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-3">Special Rewards</h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Premium Sheckles (450-550)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Epic Seafood Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    50% chance to attract the Kitsune spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    "Ocean Sovereign" temporary title (24 hours)
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
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-teal-900 mb-4">
              Related Recipes
            </h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto">
              Explore these other special recipes in Grow a Garden!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedRecipes.map(
              (recipe, index) =>
                recipe && (
                  <Link
                    key={index}
                    href={`/recipes/${recipe.slug}`}
                    className="bg-white rounded-xl p-6 border border-teal-100 shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{recipe.icon}</span>
                      <div>
                        <h3 className="font-bold text-teal-900">
                          {recipe.name}
                        </h3>
                        <p className="text-sm text-teal-600">
                          {recipe.difficulty} • {recipe.cookingTime}
                        </p>
                      </div>
                    </div>
                    <p className="text-teal-700">{recipe.description}</p>
                  </Link>
                )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
