import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Wiki - Complete Game Guide & Mechanics',
  description:
    'Complete Grow a Garden Wiki! Learn all game mechanics, cooking system, Chris P Bacon feeding, ingredient rarity, pot colors, and advanced strategies for maximum rewards.',
  keywords: [
    'grow a garden wiki',
    'grow a garden game guide',
    'grow a garden mechanics',
    'grow a garden cooking system',
    'grow a garden chris p bacon',
    'grow a garden ingredient rarity',
    'grow a garden pot colors',
    'grow a garden rewards',
    'grow a garden strategy',
    'grow a garden tips',
    'grow a garden guide',
    'grow a garden tutorial',
    'grow a garden how to play',
    'grow a garden game mechanics',
    'grow a garden cooking guide',
  ],
  openGraph: {
    title: 'Grow a Garden Wiki - Complete Game Guide & Mechanics',
    description:
      'Complete Grow a Garden Wiki! Learn all game mechanics, cooking system, Chris P Bacon feeding, ingredient rarity, pot colors, and advanced strategies.',
    url: 'https://growagardenrecipes.xyz/wiki',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/grow-a-garden-wiki.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Wiki - Complete Game Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Wiki - Complete Game Guide & Mechanics',
    description:
      'Complete Grow a Garden Wiki! Learn all game mechanics, cooking system, Chris P Bacon feeding, ingredient rarity, pot colors, and advanced strategies.',
    images: ['/images/grow-a-garden-wiki.jpg'],
  },
};

export default function WikiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            Grow a Garden Wiki
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Complete Game Guide & Mechanics
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Master every aspect of <strong>Grow a Garden</strong> with our
            comprehensive wiki. Learn cooking mechanics, ingredient strategies,
            Chris P Bacon feeding, and advanced techniques.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                8
              </h3>
              <p className="text-neutral-600">Wiki Sections</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                100%
              </h3>
              <p className="text-neutral-600">Complete Guide</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                Expert
              </h3>
              <p className="text-neutral-600">Strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wiki Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Complete Game Guide
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Everything you need to know about Grow a Garden
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🎮 Game Overview
              </h3>
              <p className="text-neutral-600 mb-4">
                Grow a Garden is a popular Roblox game where players grow
                plants, harvest ingredients, and cook delicious recipes to feed
                Chris P Bacon for rewards.
              </p>
              <p className="text-neutral-600">
                The primary goal is to master the cooking system, understand
                ingredient combinations, and optimize feeding times to maximize
                rewards.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🍳 Cooking System
              </h3>
              <p className="text-neutral-600 mb-4">
                Located in the main plaza, Chris P Kitchen is where all cooking
                takes place. Players add ingredients to the cooking pot and wait
                for the specified cooking time.
              </p>
              <p className="text-neutral-600">
                The process involves adding ingredients, starting cooking,
                collecting the finished dish, and presenting it to Chris P Bacon
                for rewards.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                ⭐ Ingredient Rarity
              </h3>
              <p className="text-neutral-600 mb-4">
                Rarity tiers: Common → Uncommon → Rare → Legendary → Mythical →
                Divine → Prismatic.
              </p>
              <p className="text-neutral-600">
                Higher rarity ingredients create better quality dishes and yield
                superior rewards. Focus on Prismatic and Divine ingredients for
                the best results.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🎨 Pot Colors
              </h3>
              <p className="text-neutral-600 mb-4">
                Red: Salad/Burger, Yellow: Ice Cream, Orange: Sandwich,
                Turquoise: Sushi, Green: Pie, Tan: Hot Dog, Red-Maroon: Pizza,
                Teal/Yellow: Cake
              </p>
              <p className="text-neutral-600">
                The pot color changes based on your ingredient combination,
                confirming you&apos;re making the correct recipe.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🐷 Chris P Craving System
              </h3>
              <p className="text-neutral-600 mb-4">
                Chris P displays food icons above his head every hour indicating
                his desires. Feeding him his preferred dishes during craving
                periods yields significantly better rewards.
              </p>
              <p className="text-neutral-600">
                This can increase reward quality by 200-300% compared to regular
                feeding.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🎁 Reward System
              </h3>
              <p className="text-neutral-600 mb-4">
                Rewards range from basic Sheckles to exclusive pets and mutation
                sprays. Gourmet eggs hatch into exclusive pets like Taco Ferns.
              </p>
              <p className="text-neutral-600">
                Higher tier ingredients and matching cravings result in better
                rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-game mb-6">
              Related Resources
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Explore more helpful content
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="/recipes"
              className="hero-card group p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🍳
              </div>
              <h4 className="text-lg font-bold text-neutral-800 mb-2">
                All Recipes
              </h4>
              <p className="text-neutral-600 text-sm">
                Complete recipe database with ingredients and instructions
              </p>
            </a>

            <a
              href="/cooking-events"
              className="hero-card group p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎉
              </div>
              <h4 className="text-lg font-bold text-neutral-800 mb-2">
                Cooking Events
              </h4>
              <p className="text-neutral-600 text-sm">
                Latest events and special challenges
              </p>
            </a>

            <a
              href="/codes"
              className="hero-card group p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎁
              </div>
              <h4 className="text-lg font-bold text-neutral-800 mb-2">
                Game Codes
              </h4>
              <p className="text-neutral-600 text-sm">
                Latest working codes for free rewards
              </p>
            </a>

            <a
              href="/faq"
              className="hero-card group p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ❓
              </div>
              <h4 className="text-lg font-bold text-neutral-800 mb-2">FAQ</h4>
              <p className="text-neutral-600 text-sm">
                Frequently asked questions and answers
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
