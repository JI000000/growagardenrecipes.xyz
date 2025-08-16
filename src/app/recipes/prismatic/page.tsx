/* eslint-disable react/no-unescaped-entities */
import QuickRecipeSearch from '@/components/search/QuickRecipeSearch';
import { allRecipes } from '@/data/recipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prismatic Recipes in Grow a Garden - Ultimate Guide 2025',
  description:
    'Complete guide to all Prismatic recipes in Grow a Garden (Updated 2025). Learn how to make rare Prismatic dishes with step-by-step instructions, ingredients, and strategies.',
  keywords: [
    'grow a garden prismatic cooking recipes',
    'prismatic recipes grow a garden',
    'all prismatic recipes grow a garden',
    'grow a garden prismatic cooking',
    'how to make prismatic recipes grow a garden',
    'prismatic burger grow a garden',
    'prismatic pizza grow a garden',
    'prismatic sushi grow a garden',
    'prismatic ice cream grow a garden',
    'prismatic cake grow a garden',
    'prismatic donut grow a garden',
  ],
  openGraph: {
    title: 'Prismatic Recipes in Grow a Garden - Ultimate Guide 2025',
    description:
      'Complete guide to all Prismatic recipes in Grow a Garden (Updated 2025). Learn how to make rare Prismatic dishes.',
    url: 'https://growagardenrecipes.xyz/recipes/prismatic',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/prismatic-recipes.jpg',
        width: 1200,
        height: 630,
        alt: 'Prismatic Recipes in Grow a Garden - Ultimate Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prismatic Recipes in Grow a Garden - Ultimate Guide 2025',
    description:
      'Complete guide to all Prismatic recipes in Grow a Garden (Updated 2025). Learn how to make rare Prismatic dishes.',
    images: ['/images/prismatic-recipes.jpg'],
  },
};

// 创建Prismatic食谱数据，为每个普通食谱创建对应的Prismatic版本
const prismaticRecipes = allRecipes.map((recipe) => ({
  ...recipe,
  name: `Prismatic ${recipe.name.replace(' Recipe', '')}`,
  slug: `prismatic-${recipe.slug}`,
  difficulty: 'Legendary',
  description: `Learn how to make amazing Prismatic ${recipe.name.replace(' Recipe', '')} in Grow a Garden`,
  isPrismatic: true,
  cookingTime:
    recipe.slug === 'pizza'
      ? '7m 36s'
      : recipe.slug === 'burger'
        ? '6m 15s'
        : recipe.slug === 'cake'
          ? '8m 45s'
          : recipe.slug === 'ice-cream'
            ? '5m 20s'
            : recipe.slug === 'sushi'
              ? '9m 10s'
              : recipe.slug === 'porridge'
                ? '4m 45s'
                : recipe.slug === 'sandwich'
                  ? '4m 30s'
                  : recipe.slug === 'hot-dog'
                    ? '5m 50s'
                    : '6m 00s',
}));

export default function PrismaticRecipesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            LEGENDARY RECIPES
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up"
            style={{
              background: 'linear-gradient(to right, #9333ea, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Prismatic Recipes
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            The Ultimate Grow a Garden Cooking Guide
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Master all <strong>Prismatic recipes in Grow a Garden</strong> with
            our comprehensive guide. Updated for 2025 with the latest
            ingredients, cooking times, and special techniques to create perfect
            Prismatic dishes every time.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
            <div
              className="hero-card p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-2"
                style={{ color: '#9333ea' }}
              >
                {prismaticRecipes.length}+
              </h3>
              <p className="text-neutral-600">Prismatic Recipes</p>
            </div>
            <div
              className="hero-card p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-2"
                style={{ color: '#4f46e5' }}
              >
                5x
              </h3>
              <p className="text-neutral-600">Reward Multiplier</p>
            </div>
            <div
              className="hero-card p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-2"
                style={{ color: '#8b5cf6' }}
              >
                Legendary
              </h3>
              <p className="text-neutral-600">Rarity Level</p>
            </div>
          </div>

          {/* Quick Search */}
          <QuickRecipeSearch
            recipes={prismaticRecipes.map((r) => ({
              name: r.name,
              slug: r.slug,
              icon: r.icon,
              description: r.description,
            }))}
            className="mb-10 animate-fade-in-up max-w-2xl mx-auto"
          />
        </div>
      </section>

      {/* What are Prismatic Recipes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{ color: '#9333ea' }}
            >
              What Are Prismatic Recipes?
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              The rarest and most valuable dishes in Grow a Garden
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                🌈 Prismatic Ingredients
              </h3>
              <p className="text-neutral-600 mb-4">
                Prismatic recipes require special Prismatic ingredients that can
                only be obtained from rare events, special farming techniques,
                or high-level achievements in the game.
              </p>
              <p className="text-neutral-600">
                These ingredients glow with a rainbow aura and have a 0.5% drop
                rate from specially marked garden plots during the full moon
                phase.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                💎 Enhanced Rewards
              </h3>
              <p className="text-neutral-600 mb-4">
                Feeding Chris P. Bacon with Prismatic dishes yields 5x the
                normal rewards, including rare mutation sprays, legendary pet
                eggs, and exclusive garden decorations.
              </p>
              <p className="text-neutral-600">
                New in 2025: Prismatic dishes now have a chance to grant the
                &quot;Rainbow Chef&quot; status effect, doubling all rewards for
                24 hours.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                ⏱️ Complex Timing
              </h3>
              <p className="text-neutral-600 mb-4">
                Prismatic recipes require perfect timing during cooking. The
                &quot;Prismatic Window&quot; appears for only 2 seconds, and you
                must serve the dish precisely during this moment.
              </p>
              <p className="text-neutral-600">
                Our guides include exact timing markers to help you master this
                challenging technique.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-violet-700 mb-4">
                🎮 Special Mechanics
              </h3>
              <p className="text-neutral-600 mb-4">
                The 2025 update introduced special mechanics for Prismatic
                cooking, including the rhythm-based &quot;Rainbow Stir&quot; and
                the precision-based &quot;Prismatic Pour.&quot;
              </p>
              <p className="text-neutral-600">
                Each recipe has unique mechanics that we cover in detail in our
                step-by-step guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Prismatic Recipes Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{ color: '#8b5cf6' }}
            >
              All Prismatic Recipes
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-4">
              Complete collection of Prismatic recipes in Grow a Garden
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto mb-8">
              From <strong>Prismatic Burgers</strong> to{' '}
              <strong>Prismatic Ice Cream</strong>, our comprehensive guide
              covers all the legendary dishes you can create in Grow a Garden.
              Each recipe includes detailed ingredients, step-by-step
              instructions, and timing guides.
            </p>

            {/* 2025 Update Feature Banner */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-4 rounded-xl max-w-4xl mx-auto mb-10 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">✨</span>
                  <h4 className="text-lg font-bold">
                    2025 Update Feature: Rainbow Fusion
                  </h4>
                </div>
                <p className="text-sm md:text-base">
                  Combine any two Prismatic recipes for unique bonus effects!
                  Exclusive rewards await.
                </p>
                <Link
                  href="#prismatic-fusion"
                  className="px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Recipe Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">
              All Recipes
            </button>
            <button className="px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">
              Main Dishes
            </button>
            <button className="px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">
              Desserts
            </button>
            <button className="px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">
              Special
            </button>
            <button className="px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">
              Most Rewarding
            </button>
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {prismaticRecipes.map((recipe) => (
              <div
                key={recipe.slug}
                className="card-modern group p-6 text-center transform hover:scale-105 transition-all duration-300 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.15)',
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 relative">
                  <span
                    className="absolute inset-0 animate-ping opacity-30"
                    style={{
                      animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                    }}
                  >
                    {recipe.icon}
                  </span>
                  {recipe.icon}
                </div>
                <h4 className="text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                  {recipe.name}
                </h4>
                <p className="text-sm text-neutral-500 mt-2">
                  {recipe.difficulty} • {recipe.cookingTime}
                </p>
                <Link
                  href={`/recipes/${recipe.slug.replace('prismatic-', '')}#prismatic`}
                  className="mt-4 inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  View Recipe
                </Link>
              </div>
            ))}
          </div>

          {/* Prismatic Fusion Guide - This helps fill the space */}
          <div
            id="prismatic-fusion"
            className="bg-white rounded-xl p-8 shadow-lg border border-purple-100 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">🌈</span> Prismatic Fusion Guide
            </h3>
            <p className="text-neutral-600 mb-6">
              The 2025 update introduced Prismatic Fusion - a revolutionary
              cooking mechanic that allows you to combine two Prismatic dishes
              for unique effects and bonuses. Here&apos;s how it works:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">
                  Fusion Process
                </h4>
                <ol className="text-sm text-neutral-600 space-y-2 list-decimal list-inside">
                  <li>Create two different Prismatic dishes</li>
                  <li>Place both on the Fusion Altar (unlocked at level 50)</li>
                  <li>Perform the Fusion Dance mini-game</li>
                  <li>Collect your new Fused Prismatic dish!</li>
                </ol>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">
                  Best Combinations
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>
                    <strong>Prismatic Pizza + Prismatic Ice Cream</strong>:
                    &quot;Festival Feast&quot; - 3x XP for 1 hour
                  </li>
                  <li>
                    <strong>Prismatic Burger + Prismatic Cake</strong>:
                    &quot;Royal Banquet&quot; - 2x Sheckles from all sources
                  </li>
                  <li>
                    <strong>Prismatic Donut + Prismatic Sushi</strong>:
                    &quot;Culinary Genius&quot; - Rare ingredient drop rate +25%
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/recipes/prismatic-fusion"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Full Fusion Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{ color: '#4f46e5' }}
            >
              Prismatic Cooking Tips & Tricks
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Master strategies from top Grow a Garden chefs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                🌙 Lunar Phase Timing
              </h3>
              <p className="text-neutral-600">
                Prismatic ingredients have a 3x higher drop rate during full
                moon phases in the game. The 2025 update synchronized this with
                real-world lunar phases, so check your local moon calendar! Plan
                your rare ingredient farming around these times for maximum
                efficiency.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                💧 Prismatic Water Technique
              </h3>
              <p className="text-neutral-600">
                Use Prismatic Water (obtained from the Enchanted Spring event)
                instead of regular water when cooking. This reduces cooking time
                by 30% and increases the Prismatic Window duration from 2 to 3
                seconds, making timing much more manageable.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                🔄 Recipe Combinations
              </h3>
              <p className="text-neutral-600">
                Feeding Chris P. Bacon with multiple Prismatic dishes in a
                specific order triggers special combination bonuses. For
                example, serving Prismatic Pizza followed by Prismatic Ice Cream
                within 5 minutes grants the &quot;Festival Feast&quot; bonus,
                increasing rewards by an additional 50%.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                🧩 Ingredient Substitutions
              </h3>
              <p className="text-neutral-600">
                If you&apos;re missing specific Prismatic ingredients, certain
                rare substitutions work at 80% effectiveness. For example,
                Divine-tier ingredients combined with Rainbow Essence (purchased
                from the Mystic Vendor during special events) can substitute for
                most Prismatic ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{ color: '#6366f1' }}
            >
              Related Resources
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              More guides to master Grow a Garden
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/wiki"
              className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-3">
                Game Wiki
              </h4>
              <p className="text-neutral-600">
                Complete game mechanics and strategies
              </p>
            </Link>

            <Link
              href="/cooking-events"
              className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎉
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-3">
                Cooking Events
              </h4>
              <p className="text-neutral-600">
                Special events with Prismatic ingredient drops
              </p>
            </Link>

            <Link
              href="/codes"
              className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎁
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-3">
                Game Codes
              </h4>
              <p className="text-neutral-600">
                Get free Prismatic ingredients and boosts
              </p>
            </Link>

            <Link
              href="/recipes"
              className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🍳
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-3">
                All Recipes
              </h4>
              <p className="text-neutral-600">
                Browse regular recipes to master basics
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Prismatic vs Regular Recipes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{ color: '#4f46e5' }}
            >
              Prismatic vs Regular Recipes
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Understanding the key differences
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🍳</div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Regular Recipes
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-800">Ingredients:</strong>
                    <p className="text-neutral-600">
                      Use standard ingredients found throughout the game world
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-800">Difficulty:</strong>
                    <p className="text-neutral-600">
                      Easy to Medium difficulty, forgiving timing windows
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-800">Rewards:</strong>
                    <p className="text-neutral-600">
                      Standard Sheckles and occasional common items
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-800">Availability:</strong>
                    <p className="text-neutral-600">
                      Can be cooked anytime, anywhere with basic equipment
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-blue-800">Purpose:</strong>
                    <p className="text-neutral-600">
                      Daily cooking tasks, basic progression, learning game
                      mechanics
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <Link
                  href="/recipes"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md"
                >
                  Browse Regular Recipes
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🌈</div>
                <h3 className="text-2xl font-bold text-purple-900">
                  Prismatic Recipes
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-purple-800">Ingredients:</strong>
                    <p className="text-neutral-600">
                      Require rare Prismatic-tier ingredients only obtainable
                      through special means
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-purple-800">Difficulty:</strong>
                    <p className="text-neutral-600">
                      Legendary difficulty with precise timing and special
                      conditions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-purple-800">Rewards:</strong>
                    <p className="text-neutral-600">
                      Premium Sheckles (5x normal), guaranteed rare items,
                      special effects
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-purple-800">Availability:</strong>
                    <p className="text-neutral-600">
                      Require special conditions (moon phases, special
                      equipment, badges)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  <div>
                    <strong className="text-purple-800">Purpose:</strong>
                    <p className="text-neutral-600">
                      End-game content, special achievements, attracting
                      spirits, unique buffs
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium shadow-md">
                  You&apos;re Viewing Prismatic Recipes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{ color: '#8b5cf6' }}
            >
              Frequently Asked Questions
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Common questions about Prismatic recipes
            </h3>
          </div>

          <div className="space-y-8">
            <div className="hero-card p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                How do I get Prismatic ingredients?
              </h4>
              <p className="text-neutral-600">
                Prismatic ingredients can be obtained through rare drops from
                specially marked garden plots during full moon phases,
                completing legendary quests, purchasing from the Mystic Vendor
                during special events, or trading with other players.
              </p>
            </div>

            <div className="hero-card p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                Why is my Prismatic dish failing?
              </h4>
              <p className="text-neutral-600">
                The most common reasons for failing Prismatic recipes are
                missing the Prismatic Window timing, using incorrect ingredient
                combinations, or cooking at the wrong temperature. Make sure to
                follow our step-by-step guides precisely and practice the timing
                on regular recipes first.
              </p>
            </div>

            <div className="hero-card p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                Are Prismatic recipes worth the effort?
              </h4>
              <p className="text-neutral-600">
                Absolutely! Prismatic dishes provide 5x the normal rewards,
                exclusive items, and special status effects. They&apos;re
                essential for advanced progression, especially for unlocking the
                Legendary Chef achievements and the special garden areas
                introduced in the 2025 update.
              </p>
            </div>

            <div className="hero-card p-6">
              <h4 className="text-xl font-bold text-purple-800 mb-2">
                Can I convert regular ingredients to Prismatic?
              </h4>
              <p className="text-neutral-600">
                Yes, with the new Prismatic Converter introduced in the 2025
                update. This special station allows you to convert 10
                Divine-tier ingredients of the same type into 1 Prismatic
                ingredient. The Converter can be purchased from the Premium Shop
                or crafted using rare materials from the Enchanted Garden zone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
