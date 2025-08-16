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
  title: 'Hot Dog Recipe in Grow a Garden - Complete Guide 2025',
  description:
    'Master how to make Hot Dog in Grow a Garden with our complete guide (Updated 2025). Step-by-step instructions, ingredients list, cooking times, and bonus tips.',
  keywords: [
    'hot dog grow a garden',
    'how to make hot dog in grow a garden',
    'hot dog recipe grow a garden',
    'grow a garden hot dog recipe',
    'best hot dog grow a garden',
    'grow a garden hot dog ingredients',
    'hot dog cooking time grow a garden',
    'grow a garden hot dog rewards',
    'grow a garden prismatic hot dog',
    'hot dog 2025 update grow a garden',
    'roblox grow a garden hot dog',
    'easy hot dog recipe grow a garden',
  ],
  openGraph: {
    title: 'Hot Dog Recipe in Grow a Garden - Complete Guide',
    description:
      'Master how to make Hot Dog in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    url: 'https://growagardenrecipes.xyz/recipes/hot-dog',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/hot-dog-recipe.jpg',
        width: 1200,
        height: 630,
        alt: 'Hot Dog Recipe in Grow a Garden - Complete Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Dog Recipe in Grow a Garden - Complete Guide',
    description:
      'Master how to make Hot Dog in Grow a Garden with our complete guide. Step-by-step instructions, ingredients list, and cooking times.',
    images: ['/images/hot-dog-recipe.jpg'],
  },
};

// 获取热狗食谱数据
const hotDogRecipe = detailedRecipes['hot-dog'] || {
  name: 'Hot Dog',
  slug: 'hot-dog',
  icon: '🌭',
  description:
    'Create delicious hot dogs in Grow a Garden with this comprehensive recipe guide',
  difficulty: 'Easy',
  cookingTime: '4 minutes 30 seconds',
  ingredients: [],
  steps: [],
  rewards: { normal: '', perfect: '', prismatic: '' },
  tips: [],
  variations: [],
  relatedRecipes: ['burger', 'sandwich', 'pizza'],
};

export default function HotDogRecipePage() {
  // 获取相关食谱数据
  const relatedRecipes = hotDogRecipe.relatedRecipes
    .map((slug) => allRecipes.find((recipe) => recipe.slug === slug))
    .filter(Boolean);

  // 定义面包屑数据
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Hot Dog Recipe' },
  ];

  return (
    <>
      {/* 添加结构化数据 */}
      <RecipeStructuredData
        recipeName="Hot Dog Recipe - Grow a Garden"
        recipeDescription="Create delicious hot dogs in Grow a Garden with this comprehensive recipe guide. Updated for 2025."
        recipeImage="/images/hot-dog-recipe.jpg"
        datePublished="2025-08-15"
        prepTime="PT30S"
        cookTime="PT4M30S"
        totalTime="PT5M"
        recipeYield="1 serving"
        recipeCategory="Main Dish"
        recipeCuisine="Game Food"
        ingredients={hotDogRecipe.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.name === 'Ketchup' || ing.name === 'Mustard' ? 'tbsp' : 'unit',
        }))}
        instructions={hotDogRecipe.steps.map((step) => ({
          step: step.step,
          description: step.description,
        }))}
        keywords={[
          'hot dog grow a garden',
          'how to make hot dog in grow a garden',
          'hot dog recipe grow a garden',
          'grow a garden hot dog recipe',
          'best hot dog grow a garden',
          'grow a garden hot dog ingredients',
          'hot dog cooking time grow a garden',
          'grow a garden hot dog rewards',
          'hot dog 2025 update grow a garden',
          'roblox grow a garden hot dog',
        ]}
        difficulty={hotDogRecipe.difficulty}
      />

      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-8 pb-16 relative overflow-hidden">
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
                How to Make Hot Dog
              </h1>
              <h2 className="text-xl md:text-2xl text-red-800 mb-6">
                Complete Grow a Garden Recipe Guide
              </h2>
              <p className="text-lg text-red-700 mb-8 leading-relaxed">
                Master the perfect{' '}
                <strong>hot dog recipe in Grow a Garden</strong> with our
                comprehensive guide. Learn the exact ingredients, cooking times,
                and special techniques for creating the most delicious and
                rewarding hot dog.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-red-600">⏱️</span>
                  <span className="text-sm font-medium text-red-900">
                    {hotDogRecipe.cookingTime}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-red-600">⭐</span>
                  <span className="text-sm font-medium text-red-900">
                    {hotDogRecipe.difficulty}
                  </span>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg px-4 py-2 flex items-center gap-2">
                  <span className="text-red-600">🧩</span>
                  <span className="text-sm font-medium text-red-900">
                    {hotDogRecipe.ingredients.length} Ingredients
                  </span>
                </div>
              </div>

              {/* 分享按钮 */}
              <div className="mb-6">
                <RecipeShareButtons
                  title="Hot Dog Recipe - Grow a Garden"
                  description="Check out this delicious Hot Dog recipe for Grow a Garden!"
                  colorScheme="red"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-red-200 to-orange-300 rounded-full shadow-xl">
                  <span className="text-9xl">{hotDogRecipe.icon}</span>
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
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4">
              Hot Dog Ingredients
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Gather these ingredients to prepare the perfect hot dog in Grow a
              Garden. Higher rarity versions of these ingredients will improve
              the quality and rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {hotDogRecipe.ingredients.map((ingredient, index) => (
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
                and rewards of your hot dog.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                The 2025 update added Special Relish as an optional ingredient
                that increases rewards by 25%.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                For a more premium hot dog, try to find Gourmet Sausage during
                special events.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                During the Carnival event, hot dog ingredients have a 20% chance
                to be automatically upgraded one rarity level.
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
              Follow these precise steps to make the perfect hot dog in Grow a
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
                {hotDogRecipe.steps.map((step, index) => (
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
                Important Cooking Notes
              </h3>
            </div>
            <p className="text-red-700 mb-4">
              The perfect cooking time for hot dog is exactly 4 minutes and 30
              seconds. Overcooking or undercooking will significantly affect the
              quality and rewards. Use these visual cues to know your progress:
            </p>
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>0:00-1:00:</strong> The bun should be placed and lightly
                toasted
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>1:00-2:30:</strong> The sausage should be cooking evenly
                on the grill
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>2:30-3:00:</strong> The sausage should be placed in the
                bun
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>3:00-3:30:</strong> The ketchup should be added in a
                zigzag pattern
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <strong>3:30-4:30:</strong> The mustard and onions should be
                added to complete the hot dog
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
              Learn about the rewards for perfect hot dog and advanced tips to
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
                  <p className="text-red-700">{hotDogRecipe.rewards.normal}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">
                    Perfect Timing
                  </h4>
                  <p className="text-red-700">{hotDogRecipe.rewards.perfect}</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">
                    Prismatic Quality
                  </h4>
                  <p className="text-red-700">
                    {hotDogRecipe.rewards.prismatic}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100 shadow-md">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">💡</span> Expert Tips
              </h3>

              <ul className="space-y-3">
                {hotDogRecipe.tips.map((tip, index) => (
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
              {hotDogRecipe.variations.map((variation, index) => (
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
          
          {/* Prismatic Hot Dog Section */}
          <div id="prismatic" className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <span className="text-3xl mr-3">🌈</span> Prismatic Hot Dog
              </h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Legendary Difficulty
              </span>
            </div>
            
            <p className="text-purple-700 mb-6">
              The Prismatic version of Hot Dog is a gourmet masterpiece sought after by culinary experts. 
              This legendary dish requires special ingredients and perfect timing, 
              offering exceptional rewards and unique game effects.
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
                    Perfect timing (exactly 5 minutes 50 seconds)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Must be prepared during Festival Day (special in-game event)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Requires the "Street Food Expert" badge (complete 35 perfect street food recipes)
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur rounded-lg p-5 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-3">Special Rewards</h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Premium Sheckles (330-430)
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    Guaranteed Rare Festival Item
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    40% chance to attract the Tanuki spirit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>
                    "Festival King" temporary title (24 hours)
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
                    className="bg-white rounded-xl p-6 border border-red-100 shadow-md hover:shadow-lg transition"
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
