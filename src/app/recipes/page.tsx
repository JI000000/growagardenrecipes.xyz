import QuickRecipeSearch from '@/components/search/QuickRecipeSearch';
import { allRecipes, recipeCategories } from '@/data/recipes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Recipes - Complete Grow a Garden Cooking Guide',
  description:
    'Browse all Grow a Garden recipes by category. Find recipes by difficulty, cooking time, and ingredients. Complete collection of cooking recipes for Roblox Grow a Garden.',
  keywords: [
    'all recipes in grow a garden',
    'grow a garden recipes list',
    'cooking recipes grow a garden',
    'grow a garden cooking recipes',
    'all cooking recipes in grow a garden',
    'grow a garden recipes by category',
    'easy recipes grow a garden',
    'hard recipes grow a garden',
    'grow a garden recipe database',
    'how to make [recipe] in grow a garden',
    '[recipe] recipe grow a garden',
  ],
  openGraph: {
    title: 'All Recipes - Complete Grow a Garden Cooking Guide',
    description:
      'Browse all Grow a Garden recipes by category. Find recipes by difficulty, cooking time, and ingredients.',
    url: 'https://growagardenrecipes.xyz/recipes',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/all-recipes.jpg',
        width: 1200,
        height: 630,
        alt: 'All Grow a Garden Recipes - Complete Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Recipes - Complete Grow a Garden Cooking Guide',
    description:
      'Browse all Grow a Garden recipes by category. Find recipes by difficulty, cooking time, and ingredients.',
    images: ['/images/all-recipes.jpg'],
  },
};

export default function RecipesPage() {
  return (
    <>
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            All Recipes
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Complete Grow a Garden Cooking Guide
          </h2>

          {/* Quick Search */}
          <QuickRecipeSearch
            recipes={allRecipes.map((r) => ({
              name: r.name,
              slug: r.slug,
              icon: r.icon,
              description: r.description,
            }))}
            className="mb-10 animate-fade-in-up"
          />

          <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Browse our complete collection of{' '}
            <strong>all recipes in grow a garden</strong>. Find recipes by
            category, difficulty, and cooking time. Master every dish in Roblox
            Grow a Garden!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 animate-fade-in-up">
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                {allRecipes.length}+
              </h3>
              <p className="text-neutral-600">Total Recipes</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                {recipeCategories.length}
              </h3>
              <p className="text-neutral-600">Categories</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                100%
              </h3>
              <p className="text-neutral-600">Tested & Verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filter Bar */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors">
              All Recipes
            </button>
            {recipeCategories.map((category) => (
              <a
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
          {/* Local filters (UI only for now) */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-neutral-500">Filter:</span>
            <select className="px-3 py-2 rounded-xl bg-neutral-100 text-neutral-700">
              <option>Any Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <select className="px-3 py-2 rounded-xl bg-neutral-100 text-neutral-700">
              <option>Any Time</option>
              <option>≤ 5 minutes</option>
              <option>5–8 minutes</option>
              <option>≥ 8 minutes</option>
            </select>
            <span className="text-neutral-400">
              (Filters are local UI; full behavior coming next)
            </span>
          </div>
        </div>
      </section>

      {/* All Recipes Grid - Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Complete Recipe Collection
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Every recipe in Grow a Garden
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Explore our complete database of{' '}
              <strong>all cooking recipes in grow a garden</strong>. From simple
              salads to complex burgers, we have every recipe covered.
            </p>
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allRecipes.map((recipe, index) => (
              <a
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="card-modern group p-6 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {recipe.icon}
                </div>
                <h4 className="text-lg font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                  {recipe.name}
                </h4>
                <p className="text-sm text-neutral-500 mt-2">
                  {recipe.difficulty} • {recipe.cookingTime}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
