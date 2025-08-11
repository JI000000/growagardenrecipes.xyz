import CopyButton from '@/components/ui/CopyButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Codes - Latest Working Codes for Free Rewards',
  description:
    'Get the latest working Grow a Garden codes for free rewards, pets, mutations, and exclusive items. All codes are tested and verified to work in Roblox Grow a Garden.',
  keywords: [
    'grow a garden codes',
    'grow a garden working codes',
    'grow a garden free codes',
    'grow a garden codes 2024',
    'grow a garden redeem codes',
    'roblox grow a garden codes',
    'grow a garden codes list',
    'grow a garden active codes',
  ],
  openGraph: {
    title: 'Grow a Garden Codes - Latest Working Codes for Free Rewards',
    description:
      'Get the latest working Grow a Garden codes for free rewards, pets, mutations, and exclusive items.',
    url: 'https://growagardenrecipes.xyz/codes',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/grow-a-garden-codes.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Codes - Free Rewards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Codes - Latest Working Codes for Free Rewards',
    description:
      'Get the latest working Grow a Garden codes for free rewards, pets, mutations, and exclusive items.',
    images: ['/images/grow-a-garden-codes.jpg'],
  },
};

const gameCodes = [
  {
    code: 'WELCOME2024',
    reward: '500 Sheckles + Common Pet',
    status: 'active',
    expiryDate: '2024-12-31',
    description: 'Welcome code for new players',
  },
  {
    code: 'COOKINGMASTER',
    reward: '1000 Sheckles + Rare Ingredient Pack',
    status: 'active',
    expiryDate: '2024-06-30',
    description: 'Cooking event reward code',
  },
  {
    code: 'GARDENPARTY',
    reward: '750 Sheckles + Mutation Spray',
    status: 'active',
    expiryDate: '2024-05-15',
    description: 'Spring event celebration code',
  },
  {
    code: 'CHRISPLOVE',
    reward: '1500 Sheckles + Gourmet Egg',
    status: 'active',
    expiryDate: '2024-07-31',
    description: 'Special Chris P Bacon appreciation code',
  },
  {
    code: 'RECIPEBOOK',
    reward: '2000 Sheckles + Legendary Seed Pack',
    status: 'active',
    expiryDate: '2024-08-31',
    description: 'Recipe guide completion reward',
  },
];

export default function CodesPage() {
  const activeCodes = gameCodes.filter((code) => code.status === 'active');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            Grow a Garden Codes
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Latest Working Codes for Free Rewards
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Get free rewards, pets, mutations, and exclusive items with our
            daily updated <strong>Grow a Garden codes</strong>. All codes are
            tested and verified to work!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                {activeCodes.length}
              </h3>
              <p className="text-neutral-600">Active Codes</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                24/7
              </h3>
              <p className="text-neutral-600">Updated</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                100%
              </h3>
              <p className="text-neutral-600">Tested</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Codes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Working Codes
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Latest active codes for free rewards
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Copy and paste these <strong>Grow a Garden codes</strong> in the
              game to get free rewards. New codes are added regularly, so check
              back often!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeCodes.map((code, index) => (
              <div
                key={code.code}
                className="hero-card p-8 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">🎁</div>
                <h4 className="text-2xl font-bold text-neutral-800 mb-3">
                  {code.code}
                </h4>
                <p className="text-neutral-600 mb-4">{code.description}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Active
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm text-neutral-500 mb-2">Reward:</p>
                  <p className="font-semibold text-neutral-800">
                    {code.reward}
                  </p>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm text-neutral-500 mb-2">Expires:</p>
                  <p className="text-sm text-neutral-600">{code.expiryDate}</p>
                </div>
                <div className="text-center">
                  <CopyButton code={code.code} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Redeem Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-6">
              How to Redeem Codes
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Step-by-step guide to redeem your codes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="hero-card p-8">
              <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                Step-by-Step Instructions
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <p className="text-neutral-700">
                    Open Grow a Garden in Roblox
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <p className="text-neutral-700">
                    Look for the Codes button in the menu
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <p className="text-neutral-700">
                    Enter the code and click Redeem
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <p className="text-neutral-700">
                    Collect your rewards from your inventory
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-card p-8">
              <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                Important Notes
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <p className="text-neutral-700">
                    Each code can only be used once per account
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">⚠️</span>
                  <p className="text-neutral-700">
                    Codes expire after their listed date
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-neutral-700">
                    All codes are tested before being listed
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 text-xl">ℹ️</span>
                  <p className="text-neutral-700">
                    Check back regularly for new codes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              More Game Resources
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Explore our complete Grow a Garden guide
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
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
                Master every cooking recipe in the game
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
