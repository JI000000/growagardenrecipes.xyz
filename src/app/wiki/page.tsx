import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grow a Garden Wiki - Complete Game Guide & Mechanics 2025',
  description:
    'Complete Grow a Garden Wiki! Updated for 2025 with all game mechanics, cooking system, Chris P Bacon feeding, ingredient rarity, pot colors, special characters, and advanced strategies for maximum rewards.',
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
    'grow a garden 2025 update',
    'grow a garden prismatic ingredients',
    'grow a garden porridge recipe',
    'grow a garden enchanted garden',
    'grow a garden special characters',
    'grow a garden tanuki',
    'grow a garden kitsune',
    'grow a garden raiju',
    'grow a garden kodama',
  ],
  openGraph: {
    title: 'Grow a Garden Wiki - Complete Game Guide & Mechanics 2025',
    description:
      'Complete Grow a Garden Wiki! Updated for 2025 with all game mechanics, cooking system, Chris P Bacon feeding, ingredient rarity, special characters, and advanced strategies.',
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
    title: 'Grow a Garden Wiki - Complete Game Guide & Mechanics 2025',
    description:
      'Complete Grow a Garden Wiki! Updated for 2025 with all game mechanics, cooking system, Chris P Bacon feeding, ingredient rarity, special characters, and advanced strategies.',
    images: ['/images/grow-a-garden-wiki.jpg'],
  },
};

export default function WikiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <span className="inline-block px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            UPDATED FOR 2025
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            Grow a Garden Wiki
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Complete Game Guide & Mechanics
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Master every aspect of <strong>Grow a Garden</strong> with our
            comprehensive wiki. Learn cooking mechanics, ingredient strategies,
            special character interactions, Chris P Bacon feeding, and advanced
            techniques.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                12
              </h3>
              <p className="text-neutral-600">Wiki Sections</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                2025
              </h3>
              <p className="text-neutral-600">Latest Update</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                100%
              </h3>
              <p className="text-neutral-600">Complete Guide</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold" style={{ color: '#9333ea' }}>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                rewards. The 2025 update added special character interactions
                and the Enchanted Garden zone.
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
                for rewards. The 2025 update added rhythm-based cooking
                mechanics for Prismatic recipes.
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
                superior rewards. The 2025 update introduced the Prismatic
                Converter, allowing players to combine 10 Divine ingredients
                into 1 Prismatic ingredient.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🎨 Pot Colors
              </h3>
              <p className="text-neutral-600 mb-4">
                Red: Salad/Burger, Yellow: Ice Cream, Orange: Sandwich,
                Turquoise: Sushi, Green: Pie, Tan: Hot Dog, Red-Maroon: Pizza,
                Teal/Yellow: Cake, Beige: Porridge (New in 2025)
              </p>
              <p className="text-neutral-600">
                The pot color changes based on your ingredient combination,
                confirming you&apos;re making the correct recipe. The 2025
                update added rainbow pot effects for Prismatic recipes.
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
                feeding. The 2025 update added special weekly "Gourmet
                Challenges" where completing all daily cravings unlocks
                exclusive rewards.
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
                rewards. The 2025 update added the "Rainbow Chef" status effect,
                doubling rewards for 24 hours.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🦝 Special Characters
              </h3>
              <p className="text-neutral-600 mb-4">
                Four special characters were introduced in the 2025 update:
                Tanuki, Kitsune, Raiju, and Kodama. Each offers unique
                abilities, quests, and rewards.
              </p>
              <p className="text-neutral-600">
                <Link
                  href="/wiki/characters"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View detailed character guide →
                </Link>
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🌱 Enchanted Garden
              </h3>
              <p className="text-neutral-600 mb-4">
                The 2025 update introduced the Enchanted Garden zone, accessible
                after reaching maximum friendship with all four special
                characters.
              </p>
              <p className="text-neutral-600">
                This exclusive area allows growing Prismatic ingredients
                naturally and contains rare seeds unavailable elsewhere in the
                game.
              </p>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🧪 Prismatic Cooking
              </h3>
              <p className="text-neutral-600 mb-4">
                The highest tier of cooking, Prismatic dishes require perfect
                timing and special ingredients. The 2025 update added
                rhythm-based minigames for creating these legendary recipes.
              </p>
              <p className="text-neutral-600">
                <Link
                  href="/recipes/prismatic"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Prismatic recipes guide →
                </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <Link
              href="/recipes"
              className="hero-card group p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                🍳
              </div>
              <h4 className="text-md md:text-lg font-bold text-neutral-800 mb-1 md:mb-2">
                All Recipes
              </h4>
              <p className="text-xs md:text-sm text-neutral-600">
                Recipe database
              </p>
            </Link>

            <Link
              href="/recipes/prismatic"
              className="hero-card group p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                🌈
              </div>
              <h4 className="text-md md:text-lg font-bold text-neutral-800 mb-1 md:mb-2">
                Prismatic Recipes
              </h4>
              <p className="text-xs md:text-sm text-neutral-600">
                Legendary dishes
              </p>
            </Link>

            <Link
              href="/wiki/characters"
              className="hero-card group p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                🦝
              </div>
              <h4 className="text-md md:text-lg font-bold text-neutral-800 mb-1 md:mb-2">
                Characters
              </h4>
              <p className="text-xs md:text-sm text-neutral-600">
                Special NPCs
              </p>
            </Link>

            <Link
              href="/cooking-events"
              className="hero-card group p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                🎉
              </div>
              <h4 className="text-md md:text-lg font-bold text-neutral-800 mb-1 md:mb-2">
                Events
              </h4>
              <p className="text-xs md:text-sm text-neutral-600">
                Special challenges
              </p>
            </Link>

            <Link
              href="/codes"
              className="hero-card group p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                🎁
              </div>
              <h4 className="text-md md:text-lg font-bold text-neutral-800 mb-1 md:mb-2">
                Game Codes
              </h4>
              <p className="text-xs md:text-sm text-neutral-600">
                Free rewards
              </p>
            </Link>

            <Link
              href="/faq"
              className="hero-card group p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                ❓
              </div>
              <h4 className="text-md md:text-lg font-bold text-neutral-800 mb-1 md:mb-2">
                FAQ
              </h4>
              <p className="text-xs md:text-sm text-neutral-600">
                Common questions
              </p>
            </Link>
          </div>

          {/* 2025 Update Feature Banner */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 text-center mb-6 md:mb-0">
                <span className="text-6xl">🌟</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-3">
                  2025 Major Update Highlights
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      New special characters with unique abilities and
                      friendship rewards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Enchanted Garden zone with exclusive Prismatic ingredients
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Rhythm-based cooking mechanics and new Prismatic recipes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Weekly Gourmet Challenges with exclusive rewards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
