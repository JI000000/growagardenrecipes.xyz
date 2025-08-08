import Layout from '@/components/layout/Layout';
import { getDifficultyColor } from '@/components/utils';
import { allRecipes, popularRecipes } from '@/data/recipes';
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
    <Layout>
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

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <a
              href="/recipes"
              className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              View All Recipes
            </a>
            <a
              href="/search"
              className="btn-secondary text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Search Recipes
            </a>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up"
            style={{ animationDelay: '800ms' }}
          >
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                15+
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

      {/* Popular Recipes Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Popular Recipes in Grow a Garden
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Most searched and loved cooking recipes
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Discover the most popular{' '}
              <strong>cooking recipes grow a garden</strong> that players love
              to make. From <strong>donut recipe grow a garden</strong> to{' '}
              <strong>burger recipe grow a garden</strong>, these recipes are
              perfect for beginners and experts alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRecipes.map((recipe, index) => (
              <div
                key={recipe.slug}
                className="recipe-card group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {recipe.icon}
                </div>
                <h4 className="text-2xl font-bold text-neutral-800 mb-3 text-center">
                  {recipe.name}
                </h4>
                <p className="text-neutral-600 text-center mb-4">
                  {recipe.description}
                </p>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}
                  >
                    {recipe.difficulty}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {recipe.cookingTime}
                  </span>
                </div>
                <div className="text-center">
                  <a
                    href={`/recipes/${recipe.slug}`}
                    className="btn-primary px-6 py-2 rounded-xl text-sm font-medium"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Recipes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-6">
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
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/recipes"
              className="btn-secondary text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              View All Recipes
            </a>
          </div>
        </div>
      </section>

      {/* How to Make Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-game mb-6">
              How to Make Recipes in Grow a Garden
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Step-by-step cooking guides
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Learn <strong>how to make a donut in grow a garden</strong>,{' '}
              <strong>how to make a burger in grow a garden</strong>,{' '}
              <strong>how to make pizza in grow a garden</strong>, and more with
              our detailed guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'How to Make Donut',
                slug: 'donut',
                icon: '🍩',
                difficulty: 'Hard',
              },
              {
                name: 'How to Make Burger',
                slug: 'burger',
                icon: '🍔',
                difficulty: 'Hard',
              },
              {
                name: 'How to Make Pizza',
                slug: 'pizza',
                icon: '🍕',
                difficulty: 'Medium',
              },
              {
                name: 'How to Make Cake',
                slug: 'cake',
                icon: '🍰',
                difficulty: 'Easy',
              },
              {
                name: 'How to Make Ice Cream',
                slug: 'ice-cream',
                icon: '🍦',
                difficulty: 'Easy',
              },
              {
                name: 'How to Make Sushi',
                slug: 'sushi',
                icon: '🍣',
                difficulty: 'Medium',
              },
            ].map((recipe, index) => (
              <a
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {recipe.icon}
                </div>
                <h4 className="text-xl font-bold text-neutral-800 mb-3">
                  {recipe.name}
                </h4>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}
                >
                  {recipe.difficulty}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cooking Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Grow a Garden Cooking Events
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Special cooking challenges and events
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Stay updated with the latest{' '}
              <strong>cooking event grow a garden</strong> and{' '}
              <strong>cooking update grow a garden</strong>. Participate in
              special challenges and earn exclusive rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hero-card p-8">
              <h4 className="text-2xl font-bold text-neutral-800 mb-4">
                Chris P Kitchen Events
              </h4>
              <p className="text-neutral-600 mb-6">
                Join special cooking events hosted by Chris P and compete with
                other players to create the best recipes.
              </p>
              <a
                href="/cooking-events"
                className="btn-primary px-6 py-3 rounded-xl"
              >
                View Events
              </a>
            </div>
            <div className="hero-card p-8">
              <h4 className="text-2xl font-bold text-neutral-800 mb-4">
                Cooking Rewards
              </h4>
              <p className="text-neutral-600 mb-6">
                Earn exclusive rewards and unlock special items by completing
                cooking challenges and mastering recipes.
              </p>
              <a
                href="/cooking-rewards"
                className="btn-secondary px-6 py-3 rounded-xl"
              >
                View Rewards
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
