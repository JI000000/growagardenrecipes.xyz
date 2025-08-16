import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grow a Garden Characters - Tanuki, Kitsune, Raiju & Kodama Guide',
  description:
    'Complete guide to all Grow a Garden characters (Updated 2025). Learn about Tanuki, Kitsune, Raiju, and Kodama - their abilities, locations, friendship rewards, and special interactions.',
  keywords: [
    'tanuki grow a garden',
    'kitsune grow a garden',
    'raiju grow a garden',
    'kodama grow a garden',
    'grow a garden characters',
    'grow a garden character guide',
    'grow a garden tanuki rewards',
    'grow a garden kitsune friendship',
    'grow a garden raiju abilities',
    'grow a garden kodama spirit',
    'grow a garden character locations',
    'grow a garden character friendship',
  ],
  openGraph: {
    title: 'Grow a Garden Characters - Tanuki, Kitsune, Raiju & Kodama Guide',
    description:
      'Complete guide to all Grow a Garden characters. Learn about Tanuki, Kitsune, Raiju, and Kodama - their abilities, locations, and friendship rewards.',
    url: 'https://growagardenrecipes.xyz/wiki/characters',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/grow-a-garden-characters.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Characters - Tanuki, Kitsune, Raiju & Kodama',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Characters - Tanuki, Kitsune, Raiju & Kodama Guide',
    description:
      'Complete guide to all Grow a Garden characters. Learn about Tanuki, Kitsune, Raiju, and Kodama - their abilities, locations, and friendship rewards.',
    images: ['/images/grow-a-garden-characters.jpg'],
  },
};

// 游戏角色数据
const gameCharacters = [
  {
    id: 'tanuki',
    name: 'Tanuki',
    title: 'Forest Guardian',
    icon: '🦝',
    description:
      'A shapeshifting raccoon dog with magical abilities and a love for delicious food.',
    location: 'Bamboo Forest (North of Main Plaza)',
    availableTime: '6AM - 8PM daily, All day on Saturdays',
    favoriteFood: 'Porridge, Sushi',
    dislikedFood: 'Burger, Hot Dog',
    abilities: [
      'Seed Blessing (Increases growth speed of plants by 25%)',
      'Leaf Shield (Protects plants from pests for 24 hours)',
      'Recipe Mastery (10% chance to double cooking output)',
      'Treasure Sniffer (Can locate buried treasures once per day)',
    ],
    friendshipLevels: [
      {
        level: 1,
        name: 'Stranger',
        requirement: '0-50 points',
        reward: 'Basic seed pack once per week',
      },
      {
        level: 2,
        name: 'Acquaintance',
        requirement: '51-150 points',
        reward: 'Daily watering assistance for 3 plants',
      },
      {
        level: 3,
        name: 'Friend',
        requirement: '151-300 points',
        reward: 'Leaf Shield ability unlocked',
      },
      {
        level: 4,
        name: 'Good Friend',
        requirement: '301-500 points',
        reward: 'Recipe Mastery ability unlocked',
      },
      {
        level: 5,
        name: 'Best Friend',
        requirement: '501+ points',
        reward:
          'All abilities unlocked + Tanuki Charm (permanent inventory item)',
      },
    ],
    specialEvents: [
      {
        name: 'Tanuki Festival',
        timing: 'First weekend of each month',
        description:
          'Special event where Tanuki offers unique quests and rare rewards.',
      },
      {
        name: 'Full Moon Transformation',
        timing: 'During full moon phases',
        description:
          'Tanuki reveals its true form and teaches special garden techniques.',
      },
    ],
    tips: [
      'Always bring Porridge when first meeting Tanuki to start with bonus friendship points',
      'Complete daily tasks for Tanuki to rapidly increase friendship',
      'The Tanuki Charm allows you to locate one rare ingredient per day',
      'During the Tanuki Festival, friendship points are doubled',
    ],
  },
  {
    id: 'kitsune',
    name: 'Kitsune',
    title: 'Fire Fox Spirit',
    icon: '🦊',
    description:
      'A mystical nine-tailed fox with control over fire and illusions. Known for wisdom and mischief.',
    location: 'Sacred Shrine (Eastern Mountains)',
    availableTime: '7PM - 5AM daily, All day during New Moon',
    favoriteFood: 'Sushi, Cake',
    dislikedFood: 'Soup, Ice Cream',
    abilities: [
      'Fox Fire (Speeds up cooking time by 30%)',
      'Illusion (Can duplicate one ingredient per day)',
      'Fire Shield (Prevents plants from freezing during winter)',
      'Wisdom Whisper (50% chance to reveal hidden recipe variations)',
    ],
    friendshipLevels: [
      {
        level: 1,
        name: 'Wary',
        requirement: '0-75 points',
        reward: 'Basic fire essence once per week',
      },
      {
        level: 2,
        name: 'Curious',
        requirement: '76-200 points',
        reward: 'Fox Fire ability unlocked (15% effect)',
      },
      {
        level: 3,
        name: 'Intrigued',
        requirement: '201-350 points',
        reward: 'Fox Fire improved (30% effect) + Illusion ability',
      },
      {
        level: 4,
        name: 'Respectful',
        requirement: '351-600 points',
        reward: 'Fire Shield ability unlocked',
      },
      {
        level: 5,
        name: 'Honored Ally',
        requirement: '601+ points',
        reward:
          'All abilities at full strength + Kitsune Tail (permanent accessory)',
      },
    ],
    specialEvents: [
      {
        name: 'Fox Dance',
        timing: 'During New Moon phases',
        description:
          'Spectacular fire display that grants "Inspired" status (+25% to all actions) for 48 hours.',
      },
      {
        name: 'Tail Ceremony',
        timing: 'Once player reaches Honored Ally status',
        description:
          'Special one-time event that grants the rare Kitsune Tail accessory.',
      },
    ],
    tips: [
      'Kitsune prefers visits during nighttime hours',
      'Bringing Prismatic Sushi guarantees a friendship level increase',
      'The Kitsune Tail accessory reduces cooking failures to zero',
      'Complete Shrine purification tasks to rapidly gain friendship points',
    ],
  },
  {
    id: 'raiju',
    name: 'Raiju',
    title: 'Thunder Beast',
    icon: '⚡',
    description:
      'An electric legendary creature that takes the form of a wolf or dog wreathed in lightning.',
    location: 'Lightning Peak (Thunderstorm Mountain)',
    availableTime: 'Only during thunderstorms or with Lightning Rod item',
    favoriteFood: 'Hot Dog, Burger',
    dislikedFood: 'Cake, Waffle',
    abilities: [
      'Lightning Speed (Instant travel between any two garden locations)',
      'Thunder Harvest (Harvest all ready plants instantly once per day)',
      'Storm Caller (Can trigger rain once per day)',
      'Electric Shield (Plants protected from all negative effects for 12 hours)',
    ],
    friendshipLevels: [
      {
        level: 1,
        name: 'Wary Beast',
        requirement: '0-100 points',
        reward: 'Lightning essence once per storm',
      },
      {
        level: 2,
        name: 'Curious Creature',
        requirement: '101-250 points',
        reward: 'Storm Caller ability (30% chance of success)',
      },
      {
        level: 3,
        name: 'Thunder Companion',
        requirement: '251-450 points',
        reward: 'Lightning Speed ability unlocked',
      },
      {
        level: 4,
        name: 'Storm Friend',
        requirement: '451-700 points',
        reward: 'Thunder Harvest ability unlocked',
      },
      {
        level: 5,
        name: 'Lightning Bond',
        requirement: '701+ points',
        reward:
          'All abilities at full power + Raiju Claw (permanent tool upgrade)',
      },
    ],
    specialEvents: [
      {
        name: 'Thunderstorm Ritual',
        timing: 'During major game thunderstorms',
        description:
          'Raiju performs a ritual that charges all tools with lightning for 24 hours, doubling their efficiency.',
      },
      {
        name: 'Lightning Feast',
        timing: 'After reaching Lightning Bond + full thunder moon',
        description:
          'Special feast where feeding Raiju 5 of its favorite foods grants the Electric Touch ability.',
      },
    ],
    tips: [
      'Use the Lightning Rod item (purchasable from Mystic Vendor) to summon Raiju outside of thunderstorms',
      'The Raiju Claw tool upgrade reduces all garden work time by 40%',
      'Feed Prismatic Hot Dogs to gain double friendship points',
      'Complete lightning collection tasks to rapidly gain friendship',
    ],
  },
  {
    id: 'kodama',
    name: 'Kodama',
    title: 'Tree Spirit',
    icon: '🌱',
    description:
      'Mysterious forest spirits that dwell within ancient trees. Their presence brings fortune and growth.',
    location: 'Ancient Grove (Hidden Forest Area)',
    availableTime: 'Dawn and Dusk (5AM-7AM, 5PM-7PM)',
    favoriteFood: 'Salad, Porridge',
    dislikedFood: 'Pizza, Donut',
    abilities: [
      'Spirit Growth (Plants grow twice as fast for 12 hours)',
      'Forest Blessing (10% chance for double harvest)',
      'Tree Whisper (Reveals location of rare seeds once per week)',
      'Spirit Shield (Protects entire garden from disasters for 24 hours)',
    ],
    friendshipLevels: [
      {
        level: 1,
        name: 'Noticed',
        requirement: '0-60 points',
        reward: 'One random seed per visit',
      },
      {
        level: 2,
        name: 'Acknowledged',
        requirement: '61-175 points',
        reward: 'Forest Blessing ability (5% chance)',
      },
      {
        level: 3,
        name: 'Trusted',
        requirement: '176-325 points',
        reward: 'Spirit Growth ability unlocked',
      },
      {
        level: 4,
        name: 'Honored',
        requirement: '326-550 points',
        reward: 'Tree Whisper ability unlocked',
      },
      {
        level: 5,
        name: 'Spirit Bound',
        requirement: '551+ points',
        reward:
          'All abilities at full strength + Kodama Vessel (summon Kodama once per day)',
      },
    ],
    specialEvents: [
      {
        name: 'Spirit Festival',
        timing: 'Spring Equinox and Fall Equinox',
        description:
          'Kodama gather in the Ancient Grove, offering blessings and rare spirit seeds to worthy gardeners.',
      },
      {
        name: 'Luminous Night',
        timing: 'Once per season on the 15th',
        description:
          'The Kodama perform a light display that enhances all plants for the next 72 hours.',
      },
    ],
    tips: [
      'Kodama are extremely shy - move slowly around them',
      'Plant at least one Ancient Tree in your garden to increase Kodama visit frequency',
      'The Kodama Vessel allows you to gain their benefits anywhere in the game',
      'Offering Prismatic Salad will make all Kodama in the area visible',
    ],
  },
];

export default function CharactersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            GAME CHARACTERS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-emerald-900 mb-6">
            Grow a Garden Characters
          </h1>
          <h2 className="text-xl md:text-2xl text-emerald-800 mb-6 max-w-4xl">
            Complete Guide to Tanuki, Kitsune, Raiju and Kodama (2025 Update)
          </h2>
          <p className="text-lg text-emerald-700 mb-8 leading-relaxed max-w-4xl">
            Master your interactions with all special characters in Grow a
            Garden. Learn about their locations, favorite foods, friendship
            rewards, and special abilities. This comprehensive guide covers
            everything you need to know about <strong>Tanuki</strong>,
            <strong>Kitsune</strong>, <strong>Raiju</strong>, and{' '}
            <strong>Kodama</strong>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {gameCharacters.map((character) => (
              <a
                key={character.id}
                href={`#${character.id}`}
                className="bg-white/80 backdrop-blur shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow hover:-translate-y-1 transform transition-transform"
              >
                <span className="text-5xl mb-3">{character.icon}</span>
                <h3 className="text-lg font-bold text-emerald-800 text-center">
                  {character.name}
                </h3>
                <p className="text-sm text-emerald-600 text-center">
                  {character.title}
                </p>
              </a>
            ))}
          </div>

          <div className="bg-white/90 backdrop-blur shadow-lg rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span> Character Overview
            </h3>
            <p className="text-emerald-700 mb-4">
              Special characters in Grow a Garden provide unique abilities,
              quests, and rewards. Building friendship with these characters is
              key to unlocking powerful garden enhancements and rare items. Each
              character has specific preferences, locations, and available
              times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-medium text-emerald-800 mb-2">
                  How To Build Friendship
                </h4>
                <ul className="space-y-1 text-emerald-700 text-sm">
                  <li>• Bring them their favorite foods daily</li>
                  <li>• Complete their special requests and quests</li>
                  <li>• Visit them during special events</li>
                  <li>• Give them gifts related to their nature</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="font-medium text-emerald-800 mb-2">
                  2025 Update Changes
                </h4>
                <ul className="space-y-1 text-emerald-700 text-sm">
                  <li>• All characters now offer 5 friendship levels</li>
                  <li>• Ability to summon characters with special items</li>
                  <li>• New seasonal events and interactions</li>
                  <li>• Character-specific accessories and tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-emerald-900 mb-4">
              Character Details
            </h2>
            <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
              Learn about each character's abilities, friendship levels, and how
              to maximize your interactions with them.
            </p>
          </div>

          <div className="space-y-24">
            {gameCharacters.map((character) => (
              <div
                key={character.id}
                id={character.id}
                className="scroll-mt-24"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100">
                      <div className="text-9xl mb-6">{character.icon}</div>
                      <h3 className="text-3xl font-bold text-emerald-900 text-center mb-2">
                        {character.name}
                      </h3>
                      <p className="text-lg font-medium text-emerald-700 text-center">
                        {character.title}
                      </p>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="prose max-w-none">
                        <p className="text-lg text-emerald-700 mb-6">
                          {character.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="text-lg font-bold text-emerald-800 mb-2">
                              Location
                            </h4>
                            <p className="text-emerald-700">
                              {character.location}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-emerald-800 mb-2">
                              Available Times
                            </h4>
                            <p className="text-emerald-700">
                              {character.availableTime}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-emerald-800 mb-2">
                              Favorite Foods
                            </h4>
                            <p className="text-emerald-700">
                              {character.favoriteFood}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-emerald-800 mb-2">
                              Disliked Foods
                            </h4>
                            <p className="text-emerald-700">
                              {character.dislikedFood}
                            </p>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-emerald-800 mb-4">
                          Special Abilities
                        </h4>
                        <ul className="space-y-2 mb-8">
                          {character.abilities.map((ability, index) => (
                            <li
                              key={index}
                              className="flex items-start bg-emerald-50 rounded-lg p-3"
                            >
                              <span className="text-emerald-500 mr-2">•</span>
                              <span className="text-emerald-700">
                                {ability}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Friendship Levels */}
                <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-emerald-100">
                  <h4 className="text-xl font-bold text-emerald-900 mb-6">
                    Friendship Levels
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-emerald-50">
                          <th className="px-4 py-3 text-left text-sm font-medium text-emerald-900">
                            Level
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-emerald-900">
                            Name
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-emerald-900">
                            Requirement
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-emerald-900">
                            Reward
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-emerald-100">
                        {character.friendshipLevels.map((level, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'
                            }
                          >
                            <td className="px-4 py-3 text-sm text-emerald-800">
                              {level.level}
                            </td>
                            <td className="px-4 py-3 text-sm text-emerald-800 font-medium">
                              {level.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-emerald-600">
                              {level.requirement}
                            </td>
                            <td className="px-4 py-3 text-sm text-emerald-700">
                              {level.reward}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Special Events & Tips */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
                    <h4 className="text-xl font-bold text-emerald-900 mb-4">
                      Special Events
                    </h4>
                    <div className="space-y-4">
                      {character.specialEvents.map((event, index) => (
                        <div
                          key={index}
                          className="bg-emerald-50 rounded-lg p-4"
                        >
                          <h5 className="font-bold text-emerald-800 mb-2">
                            {event.name}
                          </h5>
                          <p className="text-sm text-emerald-600 mb-2">
                            <strong>When:</strong> {event.timing}
                          </p>
                          <p className="text-sm text-emerald-700">
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
                    <h4 className="text-xl font-bold text-emerald-900 mb-4">
                      Pro Tips
                    </h4>
                    <ul className="space-y-2">
                      {character.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span className="text-emerald-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Combinations & Strategies */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-emerald-900 mb-4">
              Character Combinations & Advanced Strategies
            </h2>
            <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
              Learn how to effectively combine character abilities and maximize
              your garden productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Tanuki + Kodama Combination
              </h3>
              <p className="text-emerald-700 mb-4">
                When both characters are at max friendship level, combining
                Tanuki's Seed Blessing with Kodama's Spirit Growth creates the
                "Nature's Harmony" effect, which:
              </p>
              <ul className="space-y-2 text-emerald-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Increases plant growth speed by 60% (instead of just 25% +
                  100%)
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Provides 25% chance of rare seed drops when harvesting
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Gives all plants Gold quality rating
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Kitsune + Raiju Combination
              </h3>
              <p className="text-emerald-700 mb-4">
                The "Elemental Fusion" effect occurs when Kitsune's Fox Fire and
                Raiju's Electric Shield are activated within 10 minutes of each
                other:
              </p>
              <ul className="space-y-2 text-emerald-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Creates "Storm Fire" cooking effect, reducing cooking time by
                  50%
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Adds "Elemental Infusion" to all cooked dishes for 24 hours
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  50% chance to upgrade ingredient rarity during cooking
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                All Four Characters Strategy
              </h3>
              <p className="text-emerald-700 mb-4">
                The ultimate "Spirit Garden" effect occurs during the Equinox
                Festival when all four characters are present at level 5
                friendship:
              </p>
              <ul className="space-y-2 text-emerald-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Creates a permanent "Mystical Garden" plot where Prismatic
                  ingredients can grow
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Unlocks the "Spirit Feast" special event where all characters
                  gather
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Grants the "Spirit Gardener" title and unique garden
                  decorations
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Unlocks the hidden Enchanted Garden area with exclusive seeds
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Seasonal Strategy (2025)
              </h3>
              <p className="text-emerald-700 mb-4">
                The 2025 update introduced seasonal character bonuses that
                rotate throughout the year:
              </p>
              <ul className="space-y-2 text-emerald-700">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <strong>Spring:</strong> Kodama provides double friendship
                  points and special plant boosts
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <strong>Summer:</strong> Raiju appears more frequently and
                  offers enhanced lightning powers
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <strong>Autumn:</strong> Tanuki offers special harvest bonuses
                  and rare seed trades
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <strong>Winter:</strong> Kitsune's fire abilities are
                  enhanced, protecting crops from frost
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-emerald-900 mb-4">
              Related Content
            </h2>
            <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
              Explore more guides and resources to enhance your Grow a Garden
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/recipes"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform"
            >
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                All Recipes
              </h3>
              <p className="text-emerald-700 text-sm">
                Discover all recipes including character favorites
              </p>
            </Link>

            <Link
              href="/wiki"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Game Wiki
              </h3>
              <p className="text-emerald-700 text-sm">
                Complete game mechanics and strategies
              </p>
            </Link>

            <Link
              href="/recipes/prismatic"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform"
            >
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Prismatic Recipes
              </h3>
              <p className="text-emerald-700 text-sm">
                Learn about special recipes that please characters
              </p>
            </Link>

            <Link
              href="/cooking-events"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Cooking Events
              </h3>
              <p className="text-emerald-700 text-sm">
                Special character events and cooking challenges
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-emerald-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
              Common questions about Grow a Garden characters
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                How do I find the hidden characters?
              </h3>
              <p className="text-emerald-700">
                Tanuki is available from the beginning in the Bamboo Forest.
                Kitsune appears after reaching Level 15 and completing the
                "Sacred Shrine" quest. Raiju only appears during thunderstorms
                initially or after obtaining the Lightning Rod. Kodama starts
                appearing after planting an Ancient Tree seed and waiting for it
                to mature.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                How quickly can I raise friendship levels?
              </h3>
              <p className="text-emerald-700">
                With daily interactions and perfect gifts, you can typically
                raise one friendship level per week. Using Prismatic versions of
                favorite foods doubles the friendship points earned. Special
                events can provide significant friendship boosts, so plan your
                character interactions around events for maximum efficiency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Do characters interact with each other?
              </h3>
              <p className="text-emerald-700">
                Yes! After reaching friendship level 3 with at least two
                characters, you may occasionally witness them interacting with
                each other in the wild. These interactions sometimes trigger
                special mini-events or quests. During seasonal festivals, all
                characters gather in the Main Plaza, offering a rare opportunity
                to interact with all of them at once.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Can I lose friendship points?
              </h3>
              <p className="text-emerald-700">
                Yes, giving disliked foods or failing character-specific quests
                can reduce friendship points. Avoiding a character for more than
                14 in-game days will also cause a small friendship decay. The
                2025 update added a "Friendship Stabilizer" item from the
                Premium Shop that prevents friendship decay for 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
