import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Game Codes - Latest Working Codes (2025)',
  description:
    'All working Grow a Garden game codes for 2025. Redeem these codes for free Sheckles, rare seeds, special items, and more in-game rewards.',
  keywords: [
    'grow a garden codes',
    'grow a garden game codes',
    'grow a garden redeem codes',
    'grow a garden free rewards',
    'grow a garden working codes 2025',
    'grow a garden codes list',
    'grow a garden promo codes',
    'grow a garden special codes',
  ],
  openGraph: {
    title: 'Grow a Garden Game Codes - Latest Working Codes (2025)',
    description:
      'All working Grow a Garden game codes for 2025. Redeem these codes for free Sheckles, rare seeds, special items, and more in-game rewards.',
    url: 'https://growagardenrecipes.xyz/codes',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/codes-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Game Codes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CodesPage() {
  // Sample codes data - in a real app, this would come from a database or API
  const activeCodes = [
    {
      code: 'GARDEN2025',
      reward: '500 Sheckles, 5 Rare Seeds',
      expiryDate: 'December 31, 2025',
    },
    {
      code: 'SUMMER25',
      reward: '300 Sheckles, Summer Festival Hat',
      expiryDate: 'September 30, 2025',
    },
    {
      code: 'THANKYOU100K',
      reward: '1000 Sheckles, Exclusive Garden Gnome',
      expiryDate: 'No expiry',
    },
    {
      code: 'PRISMATIC25',
      reward: '1 Prismatic Ingredient, 250 Sheckles',
      expiryDate: 'October 15, 2025',
    },
    {
      code: 'NEWCHEF2025',
      reward: 'Starter Pack (300 Sheckles, 3 Common Seeds)',
      expiryDate: 'December 31, 2025',
    },
  ];

  const expiredCodes = [
    {
      code: 'SPRING2025',
      reward: '200 Sheckles, Spring Hat',
      expiryDate: 'Expired May 31, 2025',
    },
    {
      code: 'EASTER2025',
      reward: '250 Sheckles, Easter Egg Hunt Badge',
      expiryDate: 'Expired April 15, 2025',
    },
    {
      code: 'LAUNCH2025',
      reward: '500 Sheckles, Founder Badge',
      expiryDate: 'Expired March 1, 2025',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <span className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            UPDATED AUGUST 2025
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            Grow a Garden Codes
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            All Working Game Codes for 2025
          </h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-3xl mx-auto">
            Redeem these codes for free Sheckles, rare seeds, special items, and
            more in-game rewards. We keep this list updated with all the latest
            working codes for Grow a Garden.
          </p>
        </div>
      </section>

      {/* How to Redeem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-6">
              How to Redeem Codes
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Follow these simple steps to redeem codes in Grow a Garden and get
              your free rewards instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full text-xl font-bold mr-4">
                  1
                </span>
                <h3 className="text-xl font-bold text-amber-900">
                  Open Settings
                </h3>
              </div>
              <p className="text-neutral-600">
                Click on the gear icon in the top right corner of your screen to
                open the Settings menu.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full text-xl font-bold mr-4">
                  2
                </span>
                <h3 className="text-xl font-bold text-amber-900">
                  Select Codes Tab
                </h3>
              </div>
              <p className="text-neutral-600">
                Navigate to the "Codes" tab in the Settings menu. It should be
                the third option from the left.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full text-xl font-bold mr-4">
                  3
                </span>
                <h3 className="text-xl font-bold text-amber-900">
                  Enter & Redeem
                </h3>
              </div>
              <p className="text-neutral-600">
                Type or paste the code into the text field and click the
                "Redeem" button. Your rewards will be added to your inventory
                immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Codes Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              ACTIVE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-6">
              Working Codes
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              These codes are currently active and can be redeemed for various
              rewards. Make sure to use them before they expire!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-amber-100">
                <tr>
                  <th className="py-4 px-6 text-left text-amber-900 font-bold">
                    Code
                  </th>
                  <th className="py-4 px-6 text-left text-amber-900 font-bold">
                    Reward
                  </th>
                  <th className="py-4 px-6 text-left text-amber-900 font-bold">
                    Expiry Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {activeCodes.map((code, index) => (
                  <tr
                    key={index}
                    className="hover:bg-amber-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-mono font-bold text-amber-800">
                      {code.code}
                    </td>
                    <td className="py-4 px-6 text-neutral-700">
                      {code.reward}
                    </td>
                    <td className="py-4 px-6 text-neutral-600">
                      {code.expiryDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Expired Codes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
              EXPIRED
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-6">
              Expired Codes
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              These codes have expired and can no longer be redeemed. We keep
              them here for reference.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="py-4 px-6 text-left text-neutral-700 font-bold">
                    Code
                  </th>
                  <th className="py-4 px-6 text-left text-neutral-700 font-bold">
                    Reward
                  </th>
                  <th className="py-4 px-6 text-left text-neutral-700 font-bold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {expiredCodes.map((code, index) => (
                  <tr
                    key={index}
                    className="hover:bg-neutral-100 transition-colors"
                  >
                    <td className="py-4 px-6 font-mono font-bold text-neutral-500 line-through">
                      {code.code}
                    </td>
                    <td className="py-4 px-6 text-neutral-500">
                      {code.reward}
                    </td>
                    <td className="py-4 px-6 text-red-500">
                      {code.expiryDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-6">
              Tips for Codes
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Make the most of your code redemptions with these helpful tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🔔</span>
                <h3 className="text-xl font-bold text-amber-900">
                  Follow Social Media
                </h3>
              </div>
              <p className="text-neutral-600">
                New codes are often released on the official Grow a Garden
                social media accounts. Follow them on Twitter, Instagram, and
                Discord to be the first to know about new codes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📅</span>
                <h3 className="text-xl font-bold text-amber-900">
                  Special Events
                </h3>
              </div>
              <p className="text-neutral-600">
                During special events and holidays, the developers often release
                limited-time codes with exclusive rewards. Make sure to check
                back during these periods.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📝</span>
                <h3 className="text-xl font-bold text-amber-900">
                  Case Sensitive
                </h3>
              </div>
              <p className="text-neutral-600">
                Codes are case sensitive, so make sure to enter them exactly as
                shown. It's best to copy and paste codes to avoid typos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-100 shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🔄</span>
                <h3 className="text-xl font-bold text-amber-900">
                  Check Back Often
                </h3>
              </div>
              <p className="text-neutral-600">
                We update this page regularly with new codes as they are
                released. Bookmark this page and check back often to make sure
                you don't miss any codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-amber-900 mb-4">
                Never Miss a Code
              </h2>
              <p className="text-lg text-amber-800 max-w-3xl mx-auto">
                Subscribe to our newsletter to get notified about new codes as
                soon as they are released.
              </p>
            </div>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors shadow-md"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-amber-700 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
