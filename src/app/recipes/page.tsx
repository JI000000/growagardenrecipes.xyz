import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Recipes - Grow a Garden Recipes',
  description:
    'Complete collection of all cooking recipes in Roblox Grow a Garden. Find detailed guides for donut, burger, pizza, cake, ice cream, sushi and more recipes.',
  keywords: [
    'grow a garden recipes',
    'all recipes grow a garden',
    'roblox grow a garden cooking',
    'grow a garden donut recipe',
    'grow a garden burger recipe',
    'grow a garden pizza recipe',
    'grow a garden cake recipe',
    'grow a garden ice cream recipe',
    'grow a garden sushi recipe',
  ],
};

export default function RecipesPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Grow a Garden Recipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Complete collection of all cooking recipes in Roblox Grow a
                Garden
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Donut Recipe
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Burger Recipe
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Pizza Recipe
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Cake Recipe
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Ice Cream Recipe
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  Sushi Recipe
                </span>
              </div>
            </div>
          </div>

          {/* Recipe Categories */}
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              All Recipes in Grow a Garden
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Donut Recipes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍩</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Donut Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to make donuts in Grow a Garden with our detailed
                  guides.
                </p>
                <div className="space-y-2">
                  <a
                    href="/recipes/donut"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    How to make a donut in Grow a Garden
                  </a>
                  <a
                    href="/recipes/donut"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    Donut recipe Grow a Garden
                  </a>
                </div>
              </div>

              {/* Burger Recipes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍔</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Burger Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Master burger making in Grow a Garden with step-by-step
                  instructions.
                </p>
                <div className="space-y-2">
                  <a
                    href="/recipes/burger"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    How to make a burger in Grow a Garden
                  </a>
                  <a
                    href="/recipes/burger"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    Burger recipe Grow a Garden
                  </a>
                </div>
              </div>

              {/* Pizza Recipes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍕</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Pizza Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Create delicious pizzas in Grow a Garden with our expert tips.
                </p>
                <div className="space-y-2">
                  <a
                    href="/recipes/pizza"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    How to make pizza in Grow a Garden
                  </a>
                  <a
                    href="/recipes/pizza"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    Pizza recipe Grow a Garden
                  </a>
                </div>
              </div>

              {/* Cake Recipes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍰</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Cake Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Bake perfect cakes in Grow a Garden with our comprehensive
                  guides.
                </p>
                <div className="space-y-2">
                  <a
                    href="/recipes/cake"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    How to make a cake in Grow a Garden
                  </a>
                  <a
                    href="/recipes/cake"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    Cake recipe Grow a Garden
                  </a>
                </div>
              </div>

              {/* Ice Cream Recipes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍦</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Ice Cream Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Make refreshing ice cream in Grow a Garden with our detailed
                  steps.
                </p>
                <div className="space-y-2">
                  <a
                    href="/recipes/ice-cream"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    How to make ice cream in Grow a Garden
                  </a>
                  <a
                    href="/recipes/ice-cream"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    Ice cream recipe Grow a Garden
                  </a>
                </div>
              </div>

              {/* Sushi Recipes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🍣</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Sushi Recipes
                </h3>
                <p className="text-gray-600 mb-4">
                  Create authentic sushi in Grow a Garden with our expert
                  techniques.
                </p>
                <div className="space-y-2">
                  <a
                    href="/recipes/sushi"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    How to make sushi in Grow a Garden
                  </a>
                  <a
                    href="/recipes/sushi"
                    className="block text-green-600 hover:text-green-700 font-medium"
                  >
                    Sushi recipe Grow a Garden
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Recipes Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
                More Cooking Recipes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                  <div className="text-3xl mb-2">🌭</div>
                  <h4 className="font-bold text-gray-800">Hot Dog</h4>
                  <a
                    href="/recipes/hot-dog"
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    How to make a hot dog in Grow a Garden
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                  <div className="text-3xl mb-2">🧇</div>
                  <h4 className="font-bold text-gray-800">Waffle</h4>
                  <a
                    href="/recipes/waffle"
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    How to make a waffle in Grow a Garden
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                  <div className="text-3xl mb-2">🥗</div>
                  <h4 className="font-bold text-gray-800">Salad</h4>
                  <a
                    href="/recipes/salad"
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    How to make a salad in Grow a Garden
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                  <div className="text-3xl mb-2">🥪</div>
                  <h4 className="font-bold text-gray-800">Sandwich</h4>
                  <a
                    href="/recipes/sandwich"
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    How to make a sandwich in Grow a Garden
                  </a>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 text-center">
                  <div className="text-3xl mb-2">🥧</div>
                  <h4 className="font-bold text-gray-800">Pie</h4>
                  <a
                    href="/recipes/pie"
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    How to make a pie in Grow a Garden
                  </a>
                </div>
              </div>
            </div>

            {/* SEO Content */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Complete Grow a Garden Cooking Guide
              </h3>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  Welcome to the ultimate Grow a Garden recipes collection!
                  Whether you&apos;re looking for
                  <strong>donut recipe grow a garden</strong>,{' '}
                  <strong>burger recipe grow a garden</strong>, or{' '}
                  <strong>pizza recipe grow a garden</strong>, we&apos;ve got
                  you covered with detailed step-by-step instructions.
                </p>
                <p className="text-lg mb-4">
                  Our comprehensive guides include{' '}
                  <strong>how to make a donut in grow a garden</strong>,
                  <strong>how to make a burger in grow a garden</strong>,{' '}
                  <strong>how to make pizza in grow a garden</strong>, and many
                  more recipes. Each guide features:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Complete ingredient lists</li>
                  <li>Step-by-step cooking instructions</li>
                  <li>Pro tips and tricks</li>
                  <li>Common mistakes to avoid</li>
                  <li>Variations and customizations</li>
                </ul>
                <p className="text-lg">
                  From <strong>cake recipe grow a garden</strong> to{' '}
                  <strong>ice cream recipe grow a garden</strong>, and{' '}
                  <strong>sushi recipe grow a garden</strong>, discover all the
                  cooking recipes Grow a Garden has to offer. Our guides are
                  perfect for both beginners and experienced players looking to
                  master every recipe in this popular Roblox cooking game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
