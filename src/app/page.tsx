import { allRecipes } from '@/data/recipes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
  description:
    'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions for all recipes including donut, burger, pizza, cake, ice cream, sushi, and more.',
  keywords: [
    'grow a garden recipes',
    'roblox grow a garden cooking',
    'grow a garden cooking recipes',
    'how to make donut in grow a garden',
    'how to make burger in grow a garden',
    'how to make pizza in grow a garden',
    'how to make cake in grow a garden',
    'how to make ice cream in grow a garden',
    'how to make sushi in grow a garden',
    'donut recipe grow a garden',
    'burger recipe grow a garden',
    'pizza recipe grow a garden',
    'cake recipe grow a garden',
    'ice cream recipe grow a garden',
    'sushi recipe grow a garden',
    'all recipes in grow a garden',
    'cooking recipes grow a garden',
    'grow a garden cooking event',
  ],
  openGraph: {
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions.',
    url: 'https://growagardenrecipes.xyz',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Recipes - Complete Cooking Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions.',
    images: ['/images/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-200/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            Grow a Garden Recipes
          </h1>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Complete Roblox Cooking Guide
          </h2>
          <p
            className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Master every recipe in Roblox Grow a Garden! From{' '}
            <strong>donut recipe grow a garden</strong> to{' '}
            <strong>ice cream recipe grow a garden</strong>, and{' '}
            <strong>sushi recipe grow a garden</strong>, discover all the
            cooking recipes Grow a Garden has to offer.
          </p>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                {allRecipes.length}+
              </h3>
              <p className="text-neutral-600">Cooking Recipes</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                100%
              </h3>
              <p className="text-neutral-600">Step-by-Step Guides</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                24/7
              </h3>
              <p className="text-neutral-600">Available Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Recipes Grid - Direct Access */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              All Recipes in Grow a Garden
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Complete collection of cooking recipes
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Explore our complete database of{' '}
              <strong>all recipes in grow a garden</strong>. Whether you&apos;re
              looking for <strong>how to make donut in grow a garden</strong> or{' '}
              <strong>how to make sushi in grow a garden</strong>, we have you
              covered.
            </p>
          </div>

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

          <div className="text-center mt-12">
            <a
              href="/recipes"
              className="btn-secondary text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              View All Recipes with Categories
            </a>
          </div>
        </div>
      </section>

      {/* Prismatic Recipes Highlight */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              LEGENDARY RECIPES
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6"
              style={{
                background: 'linear-gradient(to right, #9333ea, #4f46e5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Prismatic Recipes
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Master the rarest and most rewarding dishes in Grow a Garden
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto mb-12">
              Unlock incredible rewards and special effects with Prismatic recipes. These legendary 
              dishes require perfect timing, rare ingredients, and special conditions, but offer 
              the game's most valuable rewards.
            </p>
            
            <div className="flex justify-center">
              <a
                href="/recipes/prismatic"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Prismatic Recipes
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Featured Prismatic Recipes */}
            <a
              href="/recipes/prismatic-pizza"
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
                  🍕
                </span>
                🍕
              </div>
              <h4 className="text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                Prismatic Pizza
              </h4>
              <p className="text-sm text-neutral-500 mt-2">
                Legendary • 7m 36s
              </p>
            </a>
            
            <a
              href="/recipes/prismatic-burger"
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
                  🍔
                </span>
                🍔
              </div>
              <h4 className="text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                Prismatic Burger
              </h4>
              <p className="text-sm text-neutral-500 mt-2">
                Legendary • 6m 15s
              </p>
            </a>
            
            <a
              href="/recipes/prismatic-cake"
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
                  🍰
                </span>
                🍰
              </div>
              <h4 className="text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                Prismatic Cake
              </h4>
              <p className="text-sm text-neutral-500 mt-2">
                Legendary • 8m 45s
              </p>
            </a>
            
            <a
              href="/recipes/prismatic-ice-cream"
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
                  🍦
                </span>
                🍦
              </div>
              <h4 className="text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors duration-300">
                Prismatic Ice Cream
              </h4>
              <p className="text-sm text-neutral-500 mt-2">
                Legendary • 5m 20s
              </p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-game mb-6">
              Quick Access
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Find what you need faster
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="/search"
              className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🔍
              </div>
              <h4 className="text-xl font-bold text-neutral-800 mb-3">
                Search Recipes
              </h4>
              <p className="text-neutral-600">
                Find recipes by ingredients, difficulty, or name
              </p>
            </a>

            <a
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
                Get free rewards and exclusive items
              </p>
            </a>

            <a
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
            </a>

            <a
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
                Latest events and special challenges
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
