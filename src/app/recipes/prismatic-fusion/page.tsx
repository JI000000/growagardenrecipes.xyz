/* eslint-disable react/no-unescaped-entities */
import { Breadcrumbs } from '@/components/layout';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prismatic Fusion Guide - Grow a Garden 2025',
  description:
    'Master the Prismatic Fusion mechanic in Grow a Garden with our comprehensive guide (Updated 2025). Learn fusion recipes, combinations, and get maximum rewards.',
  keywords: [
    'prismatic fusion grow a garden',
    'grow a garden fusion guide',
    'prismatic recipes fusion',
    'fusion altar grow a garden',
    'fusion dance mini game',
    'best fusion combinations grow a garden',
    'prismatic fusion rewards',
    'grow a garden 2025 fusion',
    'roblox grow a garden fusion',
    'prismatic fusion level 50',
  ],
  openGraph: {
    title: 'Prismatic Fusion Guide - Grow a Garden 2025',
    description:
      'Master the Prismatic Fusion mechanic in Grow a Garden with our comprehensive guide. Learn fusion recipes, combinations, and get maximum rewards.',
    url: 'https://growagardenrecipes.xyz/recipes/prismatic-fusion',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/prismatic-fusion.jpg',
        width: 1200,
        height: 630,
        alt: 'Prismatic Fusion Guide for Grow a Garden',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prismatic Fusion Guide - Grow a Garden 2025',
    description:
      'Master the Prismatic Fusion mechanic in Grow a Garden with our comprehensive guide. Learn fusion recipes, combinations, and get maximum rewards.',
    images: ['/images/prismatic-fusion.jpg'],
  },
};

export default function PrismaticFusionPage() {
  return (
    <>
      {/* 面包屑导航 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Recipes', href: '/recipes' },
            { name: 'Prismatic Recipes', href: '/recipes/prismatic' },
            { name: 'Prismatic Fusion Guide' },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                ADVANCED MECHANIC
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-purple-900 mb-6">
                Prismatic Fusion Guide
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-800 mb-6">
                Complete Grow a Garden 2025 Update
              </h2>
              <p className="text-lg text-purple-700 mb-8 leading-relaxed">
                Master the revolutionary{' '}
                <strong>Prismatic Fusion mechanic in Grow a Garden</strong> with
                our comprehensive guide. Learn how to combine Prismatic dishes
                for unique effects, bonuses, and rare rewards in the 2025
                update.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 flex items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-300 rounded-full shadow-xl">
                  <span className="text-9xl">🌈</span>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <span className="text-3xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fusion Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-900 mb-4">
              Prismatic Fusion Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The 2025 update introduced Prismatic Fusion - a revolutionary
              cooking mechanic that allows you to combine two Prismatic dishes
              for unique effects and bonuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Step-by-Step Fusion Guide
              </h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="font-bold text-purple-700">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-2">
                      Create Two Different Prismatic Dishes
                    </h4>
                    <p className="text-neutral-600">
                      First, you&apos;ll need to cook two different Prismatic
                      recipes. Check our{' '}
                      <Link
                        href="/recipes/prismatic"
                        className="text-purple-600 hover:text-purple-800"
                      >
                        Prismatic Recipes
                      </Link>{' '}
                      page for detailed guides on creating each Prismatic dish.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="font-bold text-purple-700">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-2">
                      Place Both on the Fusion Altar
                    </h4>
                    <p className="text-neutral-600">
                      Visit the Fusion Altar located in the Prismatic Garden
                      (unlocked at level 50). Place both Prismatic dishes on the
                      altar&apos;s designated spots.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="font-bold text-purple-700">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-2">
                      Perform the Fusion Dance Mini-Game
                    </h4>
                    <p className="text-neutral-600">
                      A rhythm-based mini-game will start. Follow the on-screen
                      prompts to perform the Fusion Dance. The better your
                      timing, the higher quality your fusion will be.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="font-bold text-purple-700">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-800 mb-2">
                      Collect Your New Fused Prismatic Dish
                    </h4>
                    <p className="text-neutral-600">
                      Upon successful completion, the two dishes will fuse into
                      a new Prismatic dish with combined properties and special
                      effects.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Best Fusion Combinations
              </h3>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-6">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">
                  Festival Feast
                </h4>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🍕</span>
                    <span className="font-medium">Prismatic Pizza</span>
                  </div>
                  <div className="mx-3">+</div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🍦</span>
                    <span className="font-medium">Prismatic Ice Cream</span>
                  </div>
                </div>
                <p className="text-neutral-600">
                  <strong>Effect:</strong> 3x XP for 1 hour
                </p>
                <p className="text-neutral-600 mt-2">
                  <strong>Best Used:</strong> During special events or when
                  grinding levels
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-6">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">
                  Royal Banquet
                </h4>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🍔</span>
                    <span className="font-medium">Prismatic Burger</span>
                  </div>
                  <div className="mx-3">+</div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🎂</span>
                    <span className="font-medium">Prismatic Cake</span>
                  </div>
                </div>
                <p className="text-neutral-600">
                  <strong>Effect:</strong> 2x Sheckles from all sources
                </p>
                <p className="text-neutral-600 mt-2">
                  <strong>Best Used:</strong> When farming currency or during
                  market days
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">
                  Culinary Genius
                </h4>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🍩</span>
                    <span className="font-medium">Prismatic Donut</span>
                  </div>
                  <div className="mx-3">+</div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🍣</span>
                    <span className="font-medium">Prismatic Sushi</span>
                  </div>
                </div>
                <p className="text-neutral-600">
                  <strong>Effect:</strong> Rare ingredient drop rate +25%
                </p>
                <p className="text-neutral-600 mt-2">
                  <strong>Best Used:</strong> When farming rare ingredients or
                  during full moon phases
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-900 mb-4">
              Advanced Fusion Tips
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Master these advanced techniques to maximize your Prismatic Fusion
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Lunar Phase Timing
              </h3>
              <p className="text-neutral-600">
                Perform fusions during the full moon phase (both in-game and
                real-world) for a 50% boost to all fusion effects. The 2025
                update synchronized in-game lunar phases with real-world moon
                cycles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Perfect Dance Timing
              </h3>
              <p className="text-neutral-600">
                Practice the Fusion Dance mini-game to achieve
                &quot;Perfect&quot; timing on all steps. This increases the
                duration of fusion effects by up to 30% and has a chance to add
                bonus effects.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Experimental Combinations
              </h3>
              <p className="text-neutral-600">
                Don&apos;t limit yourself to known combinations! The 2025 update
                includes hidden fusion pairs with unique effects. Try combining
                different Prismatic dishes to discover secret combinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fusion Rewards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-900 mb-4">
              Fusion Rewards & Achievements
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Track your progress and earn special rewards through the Fusion
              system
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Fusion Mastery Levels
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-purple-900">
                      Novice Fusion Chef
                    </h4>
                    <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">
                      5 Fusions
                    </span>
                  </div>
                  <p className="text-neutral-600 mt-2">
                    Reward: Fusion Apron cosmetic item
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-purple-900">Fusion Adept</h4>
                    <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">
                      25 Fusions
                    </span>
                  </div>
                  <p className="text-neutral-600 mt-2">
                    Reward: Prismatic Seed Pack (5 random Prismatic seeds)
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-purple-900">Fusion Expert</h4>
                    <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">
                      100 Fusions
                    </span>
                  </div>
                  <p className="text-neutral-600 mt-2">
                    Reward: Portable Fusion Altar (can perform fusions anywhere)
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-purple-900">Fusion Master</h4>
                    <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">
                      500 Fusions
                    </span>
                  </div>
                  <p className="text-neutral-600 mt-2">
                    Reward: Rainbow Chef title + Prismatic Chef Hat (legendary
                    cosmetic)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-6">
                Special Fusion Achievements
              </h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900">Fusion Explorer</h4>
                  <p className="text-neutral-600 mt-1">
                    Successfully create all 15 possible fusion combinations
                  </p>
                  <p className="text-indigo-700 mt-2 font-medium">
                    Reward: Rainbow Cookbook (reveals all hidden recipes)
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900">Perfect Fusion</h4>
                  <p className="text-neutral-600 mt-1">
                    Achieve perfect timing on all steps of the Fusion Dance
                    mini-game
                  </p>
                  <p className="text-indigo-700 mt-2 font-medium">
                    Reward: Fusion Dance Emote (legendary emote)
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900">Lunar Fusion</h4>
                  <p className="text-neutral-600 mt-1">
                    Complete a fusion during the full moon with perfect timing
                  </p>
                  <p className="text-indigo-700 mt-2 font-medium">
                    Reward: Moon Prism (doubles effect duration of all fusions)
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900">Secret Fusion</h4>
                  <p className="text-neutral-600 mt-1">
                    Discover the hidden legendary fusion combination
                  </p>
                  <p className="text-indigo-700 mt-2 font-medium">
                    Reward: ??? (This achievement was added in the 2025 update)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-indigo-900 mb-4">
              Related Guides & Resources
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore these related guides to master all aspects of Prismatic
              cooking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/recipes/prismatic"
              className="bg-white rounded-xl p-6 shadow-md transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3">
                Prismatic Recipes
              </h3>
              <p className="text-neutral-600">
                Complete guide to all Prismatic recipes, ingredients, and
                cooking methods
              </p>
            </Link>

            <Link
              href="/cooking-events"
              className="bg-white rounded-xl p-6 shadow-md transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3">
                Cooking Events
              </h3>
              <p className="text-neutral-600">
                Special events with increased Prismatic ingredient drops and
                fusion bonuses
              </p>
            </Link>

            <Link
              href="/wiki"
              className="bg-white rounded-xl p-6 shadow-md transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-3">
                Game Mechanics Wiki
              </h3>
              <p className="text-neutral-600">
                Detailed explanations of all game mechanics, including Prismatic
                cooking
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Master Prismatic Fusion?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start with our individual Prismatic recipe guides and work your way
            up to becoming a Fusion Master!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/recipes/prismatic"
              className="px-6 py-3 bg-white text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors shadow-md"
            >
              View All Prismatic Recipes
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-purple-800 text-white rounded-lg font-medium hover:bg-purple-900 transition-colors shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
