import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Cooking Events - Latest Events & Challenges',
  description:
    'Stay updated with the latest Grow a Garden cooking events! Special challenges, limited-time recipes, exclusive rewards, and Chris P Bacon events. Join cooking competitions and earn unique items.',
  keywords: [
    'grow a garden cooking event',
    'cooking event grow a garden',
    'grow a garden cooking update',
    'cooking update grow a garden',
    'grow a garden events',
    'chris p bacon events',
    'grow a garden challenges',
    'cooking challenges grow a garden',
    'grow a garden special events',
    'limited time recipes grow a garden',
    'grow a garden cooking competition',
    'exclusive cooking rewards',
    'grow a garden event rewards',
    'cooking event rewards',
    'grow a garden seasonal events',
  ],
  openGraph: {
    title: 'Grow a Garden Cooking Events - Latest Events & Challenges',
    description:
      'Stay updated with the latest Grow a Garden cooking events! Special challenges, limited-time recipes, exclusive rewards, and Chris P Bacon events.',
    url: 'https://growagardenrecipes.xyz/cooking-events',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/grow-a-garden-cooking-events.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Cooking Events - Latest Events',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Cooking Events - Latest Events & Challenges',
    description:
      'Stay updated with the latest Grow a Garden cooking events! Special challenges, limited-time recipes, exclusive rewards, and Chris P Bacon events.',
    images: ['/images/grow-a-garden-cooking-events.jpg'],
  },
};

export default function CookingEventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            Cooking Events
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Latest Events & Challenges
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Stay updated with the latest{' '}
            <strong>Grow a Garden cooking events</strong> and{' '}
            <strong>cooking update grow a garden</strong> challenges. Join
            special events and earn exclusive rewards!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                4+
              </h3>
              <p className="text-neutral-600">Active Events</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                24/7
              </h3>
              <p className="text-neutral-600">Event Updates</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                Exclusive
              </h3>
              <p className="text-neutral-600">Rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Current & Upcoming Events
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Join the latest cooking challenges and earn exclusive rewards
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Participate in <strong>cooking event grow a garden</strong>{' '}
              challenges and <strong>cooking update grow a garden</strong>{' '}
              special events to unlock rare items and exclusive rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🐷 Chris P Kitchen Challenge
              </h3>
              <p className="text-neutral-600 mb-4">
                Weekly cooking challenges hosted by Chris P Bacon with exclusive
                rewards
              </p>
              <div className="flex justify-between items-center">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Active
                </span>
                <button className="btn-primary px-6 py-2 rounded-xl text-sm font-medium">
                  Join Event
                </button>
              </div>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🍳 Cooking Update Event
              </h3>
              <p className="text-neutral-600 mb-4">
                New recipes and cooking mechanics introduced with special
                rewards
              </p>
              <div className="flex justify-between items-center">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Active
                </span>
                <button className="btn-primary px-6 py-2 rounded-xl text-sm font-medium">
                  Join Event
                </button>
              </div>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                🎄 Holiday Cooking Festival
              </h3>
              <p className="text-neutral-600 mb-4">
                Special holiday-themed recipes and festive cooking challenges
              </p>
              <div className="flex justify-between items-center">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                  Upcoming
                </span>
                <button className="btn-secondary px-6 py-2 rounded-xl text-sm font-medium">
                  Coming Soon
                </button>
              </div>
            </div>

            <div className="hero-card p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                👨‍🍳 Master Chef Competition
              </h3>
              <p className="text-neutral-600 mb-4">
                Competitive cooking event where players compete for the title of
                Master Chef
              </p>
              <div className="flex justify-between items-center">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                  Upcoming
                </span>
                <button className="btn-secondary px-6 py-2 rounded-xl text-sm font-medium">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              Related Content
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              More helpful resources for cooking events
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
                Master all recipes for event success
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
              <p className="text-neutral-600">Get free rewards for events</p>
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
              <p className="text-neutral-600">Learn advanced strategies</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
