import { recipeCategories } from '@/data/recipes';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recipe Categories - Grow a Garden Cooking Guide 2025',
  description:
    'Browse all recipe categories in Grow a Garden. Find desserts, main dishes, snacks, and special recipes with complete cooking guides.',
  keywords: [
    'grow a garden recipe categories',
    'grow a garden cooking categories',
    'grow a garden dessert recipes',
    'grow a garden main dish recipes',
    'grow a garden snack recipes',
    'grow a garden special recipes',
    'roblox grow a garden categories',
  ],
  openGraph: {
    title: 'Recipe Categories - Grow a Garden Cooking Guide',
    description:
      'Browse all recipe categories in Grow a Garden. Find desserts, main dishes, snacks, and special recipes with complete cooking guides.',
    url: 'https://growagardenrecipes.xyz/categories',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/recipe-categories.jpg',
        width: 1200,
        height: 630,
        alt: 'Recipe Categories - Grow a Garden',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recipe Categories - Grow a Garden Cooking Guide',
    description:
      'Browse all recipe categories in Grow a Garden. Find desserts, main dishes, snacks, and special recipes with complete cooking guides.',
    images: ['/images/recipe-categories.jpg'],
  },
};

export default function CategoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-primary mb-6">
            Recipe Categories
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-4xl mx-auto">
            Browse all recipe categories in Grow a Garden
          </h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
            Find the perfect recipe for any occasion. From sweet desserts to
            hearty main dishes, we have everything you need to become a master
            chef in Grow a Garden.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {recipeCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  {category.description}
                </p>
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-colors"
                >
                  View Recipes
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {recipeCategories.map((category) => (
        <section
          key={category.id}
          id={category.slug}
          className="py-16 bg-white border-b border-gray-100 last:border-0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-neutral-800">
                    {category.name}
                  </h2>
                </div>
                <p className="text-neutral-600">{category.description}</p>
              </div>
              <Link
                href={`/categories/${category.slug}`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-colors shadow-md"
              >
                View All {category.name}
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample recipes from each category */}
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">
                        {category.slug === 'desserts' &&
                          ['🍰', '🍩', '🍦'][index - 1]}
                        {category.slug === 'main-dishes' &&
                          ['🍔', '🍕', '🌭'][index - 1]}
                        {category.slug === 'snacks' &&
                          ['🧇', '🥪', '🥗'][index - 1]}
                        {category.slug === 'special' &&
                          ['🍣', '🍲', '🍜'][index - 1]}
                      </div>
                      <h3 className="font-bold text-neutral-800">
                        {category.slug === 'desserts' &&
                          ['Cake', 'Donut', 'Ice Cream'][index - 1]}{' '}
                        Recipe
                        {category.slug === 'main-dishes' &&
                          ['Burger', 'Pizza', 'Hot Dog'][index - 1]}{' '}
                        Recipe
                        {category.slug === 'snacks' &&
                          ['Waffle', 'Sandwich', 'Salad'][index - 1]}{' '}
                        Recipe
                        {category.slug === 'special' &&
                          ['Sushi', 'Soup', 'Ramen'][index - 1]}{' '}
                        Recipe
                      </h3>
                    </div>
                    <Link
                      href={`/categories/${category.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Recipe →
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  See all {category.name.toLowerCase()} recipes →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* All Recipes CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-6">
            Browse All Recipes
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Looking for something specific? Check out our complete recipe
            collection with detailed instructions, ingredients, and cooking
            times.
          </p>
          <Link
            href="/recipes"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-colors shadow-lg"
          >
            View All Recipes
          </Link>
        </div>
      </section>
    </>
  );
}
